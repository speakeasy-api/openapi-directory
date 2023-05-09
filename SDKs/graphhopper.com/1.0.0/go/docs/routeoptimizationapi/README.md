# RouteOptimizationAPI

## Overview


## Quickstart

The Route Optimization API can be used to solve [traveling salesman](https://en.wikipedia.org/wiki/Travelling_salesman_problem) or [vehicle routing problems](https://en.wikipedia.org/wiki/Vehicle_routing_problem).
Solve your first problem by following these steps. If you already have a GraphHopper account, start with step 2.

1. [Sign up for GraphHopper](https://support.graphhopper.com/a/solutions/articles/44001976025)
2. [Create an API key](https://support.graphhopper.com/a/solutions/articles/44001976027)
3. Download [simple traveling salesman problem](https://gist.github.com/oblonski/fb2f2be534c3ebe7bebaa72151194182) and save it in a local folder
4. Open your command line, go to that local folder and use cURL ([What is cURL?](https://de.wikipedia.org/wiki/CURL)) as follows:

   ```
   curl -X POST -H "Content-Type: application/json"   "https://graphhopper.com/api/1/vrp?key=YOUR_CREATED_API_KEY" --data "@tsp.json"
   ```

Alternatively, you can use our Editor to explore that API:

1. Login to your GraphHopper account
2. Go to **Editor**
3. Click the **Optimize** button to solve your first problem
4. Analyze the solution on the **Map** or as raw **JSON Output**

If you have successfully solved the first problem, we recommend this tutorial - [Getting Started with the Optimization API](https://www.graphhopper.com/blog/2019/05/17/getting-started-with-the-optimization-api-traveling-salesman-problem/).
It shows and describes the essential elements to model your vehicle routing problem.

To explore the full specification, we recommend that you either use our [route editor](https://www.graphhopper.com/blog/2015/07/21/graphhoppers-new-route-optimization-editor/),
which you can find in our [dashboard](https://graphhopper.com/dashboard/),
or use a REST client such as Insomnia or Postman, as described [here](https://docs.graphhopper.com/#section/Explore-our-APIs/Insomnia).

## Tutorials

We provide [a number of tutorials](https://www.graphhopper.com/tutorial/) illustrating how to use the Route Optimization API and
how to model your vehicle routing problems:

- [Getting Start with the Optimization API - Traveling Salesman Problem](https://www.graphhopper.com/blog/2019/05/17/getting-started-with-the-optimization-api-traveling-salesman-problem/)
- [How to solve a traveling salesman problem with a week-planning horizon?](https://www.graphhopper.com/blog/2020/07/15/how-to-solve-a-traveling-salesman-problem-with-a-week-planning-horizon-and-driver-shifts/)
- [How to schedule technicians with skills and multiple dependencies between tasks?](https://www.graphhopper.com/blog/2016/06/03/how-to-route-technicians-with-skills-and-multiple-dependencies-between-tasks/)
- [What is the difference between the min. of completion time and min. transport time?](https://www.graphhopper.com/blog/2016/06/20/what-is-the-difference-between-the-minimization-of-completion-time-and-minimizing-transport-time/)
- [How to model multiple delivery routes with a single vehicle?](https://www.graphhopper.com/blog/2016/07/21/how-to-model-multiple-delivery-routes-with-a-single-vehicle/)


### Available Operations

* [AsyncVRP](#asyncvrp) - POST route optimization problem (batch mode)
* [GetSolution](#getsolution) - GET the solution (batch mode)
* [SolveVRP](#solvevrp) - POST route optimization problem

## AsyncVRP


To solve a vehicle routing problem, perform the following steps:

1.) Make a HTTP POST to this URL

```
https://graphhopper.com/api/1/vrp/optimize?key=<your_key>
```

It returns a job id (job_id).

2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:

```
https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
```

We recommend to query the solution every 500ms until it returns 'status=finished'.

**Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer
the [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.RouteOptimizationAPI.AsyncVRP(ctx, shared.Request{
        Algorithm: &shared.Algorithm{
            Objective: shared.AlgorithmObjectiveEnumCompletionTime.ToPointer(),
            ProblemType: shared.AlgorithmProblemTypeEnumMinMax.ToPointer(),
        },
        Configuration: &shared.Configuration{
            Routing: &shared.Routing{
                CalcPoints: sdk.Bool(false),
                ConsiderTraffic: sdk.Bool(false),
                CurbsideStrictness: shared.RoutingCurbsideStrictnessEnumSoft.ToPointer(),
                FailFast: sdk.Bool(false),
                NetworkDataProvider: shared.RoutingNetworkDataProviderEnumOpenstreetmap.ToPointer(),
                ReturnSnappedWaypoints: sdk.Bool(false),
                SnapPreventions: []shared.RoutingSnapPreventionsEnum{
                    shared.RoutingSnapPreventionsEnumMotorway,
                    shared.RoutingSnapPreventionsEnumMotorway,
                    shared.RoutingSnapPreventionsEnumTrunk,
                },
            },
        },
        CostMatrices: []shared.CostMatrix{
            shared.CostMatrix{
                Data: &shared.CostMatrixData{
                    Distances: [][]float64{
                        []float64{
                            2223.21,
                            6169.34,
                            3864.89,
                        },
                    },
                    Info: &shared.CostMatrixDataInfo{
                        Copyrights: []string{
                            "saepe",
                            "fuga",
                            "in",
                            "corporis",
                        },
                        Took: sdk.Float64(6130.64),
                    },
                    Times: [][]int64{
                        []int64{
                            697631,
                            99280,
                            60225,
                            969810,
                        },
                        []int64{
                            653140,
                            670638,
                            170909,
                        },
                    },
                },
                LocationIds: []string{
                    "corporis",
                },
                Profile: sdk.String("explicabo"),
                Type: shared.CostMatrixTypeEnumGoogle.ToPointer(),
            },
            shared.CostMatrix{
                Data: &shared.CostMatrixData{
                    Distances: [][]float64{
                        []float64{
                            3637.11,
                            3250.47,
                            5701.97,
                        },
                        []float64{
                            4386.01,
                        },
                    },
                    Info: &shared.CostMatrixDataInfo{
                        Copyrights: []string{
                            "doloribus",
                            "sapiente",
                            "architecto",
                        },
                        Took: sdk.Float64(6527.9),
                    },
                    Times: [][]int64{
                        []int64{
                            161309,
                            995300,
                            653108,
                        },
                    },
                },
                LocationIds: []string{
                    "numquam",
                    "commodi",
                    "quam",
                },
                Profile: sdk.String("molestiae"),
                Type: shared.CostMatrixTypeEnumDefault.ToPointer(),
            },
            shared.CostMatrix{
                Data: &shared.CostMatrixData{
                    Distances: [][]float64{
                        []float64{
                            3380.07,
                        },
                        []float64{
                            6747.52,
                        },
                        []float64{
                            3172.02,
                            1381.83,
                            7783.46,
                        },
                    },
                    Info: &shared.CostMatrixDataInfo{
                        Copyrights: []string{
                            "tenetur",
                        },
                        Took: sdk.Float64(3687.25),
                    },
                    Times: [][]int64{
                        []int64{
                            13571,
                            97101,
                            622846,
                            837945,
                        },
                        []int64{
                            96098,
                            971945,
                            976460,
                        },
                        []int64{
                            468651,
                            509624,
                            976762,
                            55714,
                        },
                    },
                },
                LocationIds: []string{
                    "voluptate",
                    "cum",
                    "perferendis",
                },
                Profile: sdk.String("doloremque"),
                Type: shared.CostMatrixTypeEnumDefault.ToPointer(),
            },
        },
        Objectives: []shared.Objective{
            shared.Objective{
                Type: shared.ObjectiveTypeEnumMinMax,
                Value: shared.ObjectiveValueEnumCompletionTime,
            },
            shared.Objective{
                Type: shared.ObjectiveTypeEnumMin,
                Value: shared.ObjectiveValueEnumTransportTime,
            },
        },
        Relations: []interface{}{
            shared.JobRelation{
                Ids: []string{
                    "enim",
                    "accusamus",
                    "commodi",
                },
                Type: "in_direct_sequence",
                VehicleID: sdk.String("driver-Peter"),
            },
            shared.GroupRelation{
                Groups: []string{
                    "ipsum",
                },
                Type: "in_direct_sequence",
            },
        },
        Services: []shared.Service{
            shared.Service{
                Address: &shared.Address{
                    Curbside: shared.AddressCurbsideEnumLeft.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                AllowedVehicles: []string{
                    "pariatur",
                    "modi",
                    "praesentium",
                },
                DisallowedVehicles: []string{
                    "voluptates",
                    "quasi",
                    "repudiandae",
                },
                Duration: sdk.Int64(1800),
                Group: sdk.String("group-A"),
                ID: "7fe77504-7df8-4497-843c-02d70b6490ce",
                MaxTimeInVehicle: sdk.Int64(900),
                Name: sdk.String("delivery pizza"),
                PreparationTime: sdk.Int64(300),
                Priority: sdk.Int(1),
                RequiredSkills: []string{
                    "veritatis",
                    "itaque",
                    "incidunt",
                },
                Size: []int{
                    9356,
                    667411,
                },
                TimeWindows: []shared.TimeWindow{
                    shared.TimeWindow{
                        Earliest: sdk.Int64(131797),
                        Latest: sdk.Int64(647174),
                    },
                    shared.TimeWindow{
                        Earliest: sdk.Int64(716327),
                        Latest: sdk.Int64(841386),
                    },
                    shared.TimeWindow{
                        Earliest: sdk.Int64(289406),
                        Latest: sdk.Int64(264730),
                    },
                    shared.TimeWindow{
                        Earliest: sdk.Int64(183191),
                        Latest: sdk.Int64(397821),
                    },
                },
                Type: shared.ServiceTypeEnumDelivery.ToPointer(),
            },
            shared.Service{
                Address: &shared.Address{
                    Curbside: shared.AddressCurbsideEnumLeft.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                AllowedVehicles: []string{
                    "perferendis",
                    "magni",
                    "assumenda",
                },
                DisallowedVehicles: []string{
                    "alias",
                    "fugit",
                },
                Duration: sdk.Int64(1800),
                Group: sdk.String("group-A"),
                ID: "7fe77504-7df8-4497-843c-02d70b6490ce",
                MaxTimeInVehicle: sdk.Int64(900),
                Name: sdk.String("delivery pizza"),
                PreparationTime: sdk.Int64(300),
                Priority: sdk.Int(1),
                RequiredSkills: []string{
                    "excepturi",
                    "tempora",
                    "facilis",
                },
                Size: []int{
                    288476,
                    962189,
                    433288,
                },
                TimeWindows: []shared.TimeWindow{
                    shared.TimeWindow{
                        Earliest: sdk.Int64(756107),
                        Latest: sdk.Int64(576157),
                    },
                },
                Type: shared.ServiceTypeEnumDelivery.ToPointer(),
            },
            shared.Service{
                Address: &shared.Address{
                    Curbside: shared.AddressCurbsideEnumLeft.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                AllowedVehicles: []string{
                    "necessitatibus",
                    "sint",
                    "officia",
                },
                DisallowedVehicles: []string{
                    "debitis",
                },
                Duration: sdk.Int64(1800),
                Group: sdk.String("group-A"),
                ID: "7fe77504-7df8-4497-843c-02d70b6490ce",
                MaxTimeInVehicle: sdk.Int64(900),
                Name: sdk.String("delivery pizza"),
                PreparationTime: sdk.Int64(300),
                Priority: sdk.Int(1),
                RequiredSkills: []string{
                    "dolorum",
                    "in",
                    "in",
                    "illum",
                },
                Size: []int{
                    699479,
                    116202,
                    297437,
                    767024,
                },
                TimeWindows: []shared.TimeWindow{
                    shared.TimeWindow{
                        Earliest: sdk.Int64(411820),
                        Latest: sdk.Int64(396506),
                    },
                    shared.TimeWindow{
                        Earliest: sdk.Int64(675439),
                        Latest: sdk.Int64(881104),
                    },
                    shared.TimeWindow{
                        Earliest: sdk.Int64(249796),
                        Latest: sdk.Int64(581273),
                    },
                    shared.TimeWindow{
                        Earliest: sdk.Int64(313218),
                        Latest: sdk.Int64(881736),
                    },
                },
                Type: shared.ServiceTypeEnumDelivery.ToPointer(),
            },
        },
        Shipments: []shared.Shipment{
            shared.Shipment{
                AllowedVehicles: []string{
                    "provident",
                    "nam",
                    "id",
                },
                Delivery: shared.Stop{
                    Address: &shared.Address{
                        Curbside: shared.AddressCurbsideEnumLeft.ToPointer(),
                        Lat: 51.512665,
                        LocationID: "550e8400-e29b-11d4-a716-446655440000",
                        Lon: -0.092869,
                        Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                        StreetHint: sdk.String("Queens Victoria Street 70"),
                    },
                    Duration: sdk.Int64(1800),
                    Group: sdk.String("ASAP"),
                    PreparationTime: sdk.Int64(300),
                    TimeWindows: []shared.TimeWindow{
                        shared.TimeWindow{
                            Earliest: sdk.Int64(956084),
                            Latest: sdk.Int64(230533),
                        },
                        shared.TimeWindow{
                            Earliest: sdk.Int64(643990),
                            Latest: sdk.Int64(394869),
                        },
                        shared.TimeWindow{
                            Earliest: sdk.Int64(423855),
                            Latest: sdk.Int64(618809),
                        },
                    },
                },
                DisallowedVehicles: []string{
                    "molestiae",
                    "perferendis",
                    "nihil",
                },
                ID: "7fe77504-7df8-4497-843c-02d70b6490ce",
                MaxTimeInVehicle: sdk.Int64(1800),
                Name: sdk.String("pickup and deliver pizza to Peter"),
                Pickup: shared.Stop{
                    Address: &shared.Address{
                        Curbside: shared.AddressCurbsideEnumRight.ToPointer(),
                        Lat: 51.512665,
                        LocationID: "550e8400-e29b-11d4-a716-446655440000",
                        Lon: -0.092869,
                        Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                        StreetHint: sdk.String("Queens Victoria Street 70"),
                    },
                    Duration: sdk.Int64(1800),
                    Group: sdk.String("ASAP"),
                    PreparationTime: sdk.Int64(300),
                    TimeWindows: []shared.TimeWindow{
                        shared.TimeWindow{
                            Earliest: sdk.Int64(660174),
                            Latest: sdk.Int64(287991),
                        },
                        shared.TimeWindow{
                            Earliest: sdk.Int64(290077),
                            Latest: sdk.Int64(383462),
                        },
                        shared.TimeWindow{
                            Earliest: sdk.Int64(618016),
                            Latest: sdk.Int64(749170),
                        },
                    },
                },
                Priority: sdk.Int(1),
                RequiredSkills: []string{
                    "vero",
                    "aspernatur",
                },
                Size: []int{
                    298282,
                },
            },
            shared.Shipment{
                AllowedVehicles: []string{
                    "excepturi",
                },
                Delivery: shared.Stop{
                    Address: &shared.Address{
                        Curbside: shared.AddressCurbsideEnumLeft.ToPointer(),
                        Lat: 51.512665,
                        LocationID: "550e8400-e29b-11d4-a716-446655440000",
                        Lon: -0.092869,
                        Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                        StreetHint: sdk.String("Queens Victoria Street 70"),
                    },
                    Duration: sdk.Int64(1800),
                    Group: sdk.String("ASAP"),
                    PreparationTime: sdk.Int64(300),
                    TimeWindows: []shared.TimeWindow{
                        shared.TimeWindow{
                            Earliest: sdk.Int64(551816),
                            Latest: sdk.Int64(574325),
                        },
                        shared.TimeWindow{
                            Earliest: sdk.Int64(33625),
                            Latest: sdk.Int64(653201),
                        },
                        shared.TimeWindow{
                            Earliest: sdk.Int64(968962),
                            Latest: sdk.Int64(652103),
                        },
                    },
                },
                DisallowedVehicles: []string{
                    "eum",
                    "dolor",
                },
                ID: "7fe77504-7df8-4497-843c-02d70b6490ce",
                MaxTimeInVehicle: sdk.Int64(1800),
                Name: sdk.String("pickup and deliver pizza to Peter"),
                Pickup: shared.Stop{
                    Address: &shared.Address{
                        Curbside: shared.AddressCurbsideEnumAny.ToPointer(),
                        Lat: 51.512665,
                        LocationID: "550e8400-e29b-11d4-a716-446655440000",
                        Lon: -0.092869,
                        Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                        StreetHint: sdk.String("Queens Victoria Street 70"),
                    },
                    Duration: sdk.Int64(1800),
                    Group: sdk.String("ASAP"),
                    PreparationTime: sdk.Int64(300),
                    TimeWindows: []shared.TimeWindow{
                        shared.TimeWindow{
                            Earliest: sdk.Int64(367562),
                            Latest: sdk.Int64(97260),
                        },
                    },
                },
                Priority: sdk.Int(1),
                RequiredSkills: []string{
                    "doloribus",
                    "debitis",
                },
                Size: []int{
                    806194,
                    537023,
                },
            },
            shared.Shipment{
                AllowedVehicles: []string{
                    "in",
                    "architecto",
                    "architecto",
                },
                Delivery: shared.Stop{
                    Address: &shared.Address{
                        Curbside: shared.AddressCurbsideEnumAny.ToPointer(),
                        Lat: 51.512665,
                        LocationID: "550e8400-e29b-11d4-a716-446655440000",
                        Lon: -0.092869,
                        Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                        StreetHint: sdk.String("Queens Victoria Street 70"),
                    },
                    Duration: sdk.Int64(1800),
                    Group: sdk.String("ASAP"),
                    PreparationTime: sdk.Int64(300),
                    TimeWindows: []shared.TimeWindow{
                        shared.TimeWindow{
                            Earliest: sdk.Int64(714242),
                            Latest: sdk.Int64(469249),
                        },
                        shared.TimeWindow{
                            Earliest: sdk.Int64(998848),
                            Latest: sdk.Int64(841140),
                        },
                    },
                },
                DisallowedVehicles: []string{
                    "saepe",
                },
                ID: "7fe77504-7df8-4497-843c-02d70b6490ce",
                MaxTimeInVehicle: sdk.Int64(1800),
                Name: sdk.String("pickup and deliver pizza to Peter"),
                Pickup: shared.Stop{
                    Address: &shared.Address{
                        Curbside: shared.AddressCurbsideEnumAny.ToPointer(),
                        Lat: 51.512665,
                        LocationID: "550e8400-e29b-11d4-a716-446655440000",
                        Lon: -0.092869,
                        Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                        StreetHint: sdk.String("Queens Victoria Street 70"),
                    },
                    Duration: sdk.Int64(1800),
                    Group: sdk.String("ASAP"),
                    PreparationTime: sdk.Int64(300),
                    TimeWindows: []shared.TimeWindow{
                        shared.TimeWindow{
                            Earliest: sdk.Int64(162493),
                            Latest: sdk.Int64(508315),
                        },
                    },
                },
                Priority: sdk.Int(1),
                RequiredSkills: []string{
                    "magni",
                    "sunt",
                    "quo",
                },
                Size: []int{
                    864934,
                    807319,
                    411397,
                    569101,
                },
            },
            shared.Shipment{
                AllowedVehicles: []string{
                    "ea",
                },
                Delivery: shared.Stop{
                    Address: &shared.Address{
                        Curbside: shared.AddressCurbsideEnumRight.ToPointer(),
                        Lat: 51.512665,
                        LocationID: "550e8400-e29b-11d4-a716-446655440000",
                        Lon: -0.092869,
                        Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                        StreetHint: sdk.String("Queens Victoria Street 70"),
                    },
                    Duration: sdk.Int64(1800),
                    Group: sdk.String("ASAP"),
                    PreparationTime: sdk.Int64(300),
                    TimeWindows: []shared.TimeWindow{
                        shared.TimeWindow{
                            Earliest: sdk.Int64(982575),
                            Latest: sdk.Int64(697429),
                        },
                    },
                },
                DisallowedVehicles: []string{
                    "voluptate",
                    "autem",
                },
                ID: "7fe77504-7df8-4497-843c-02d70b6490ce",
                MaxTimeInVehicle: sdk.Int64(1800),
                Name: sdk.String("pickup and deliver pizza to Peter"),
                Pickup: shared.Stop{
                    Address: &shared.Address{
                        Curbside: shared.AddressCurbsideEnumAny.ToPointer(),
                        Lat: 51.512665,
                        LocationID: "550e8400-e29b-11d4-a716-446655440000",
                        Lon: -0.092869,
                        Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                        StreetHint: sdk.String("Queens Victoria Street 70"),
                    },
                    Duration: sdk.Int64(1800),
                    Group: sdk.String("ASAP"),
                    PreparationTime: sdk.Int64(300),
                    TimeWindows: []shared.TimeWindow{
                        shared.TimeWindow{
                            Earliest: sdk.Int64(866383),
                            Latest: sdk.Int64(365496),
                        },
                    },
                },
                Priority: sdk.Int(1),
                RequiredSkills: []string{
                    "perferendis",
                    "fugiat",
                    "amet",
                    "aut",
                },
                Size: []int{
                    359978,
                    944124,
                    729991,
                    749999,
                },
            },
        },
        VehicleTypes: []shared.VehicleType{
            shared.VehicleType{
                Capacity: []int{
                    521037,
                    489549,
                },
                ConsiderTraffic: sdk.Bool(false),
                CostPerActivation: sdk.Float64(543.38),
                CostPerMeter: sdk.Float64(3389.85),
                CostPerSecond: sdk.Float64(1999.96),
                NetworkDataProvider: shared.VehicleTypeNetworkDataProviderEnumOpenstreetmap.ToPointer(),
                Profile: shared.VehicleTypeProfileEnumCar.ToPointer(),
                ServiceTimeFactor: sdk.Float64(1709.86),
                SpeedFactor: sdk.Float64(7936.98),
                TypeID: "my-own-type",
            },
        },
        Vehicles: []shared.Vehicle{
            shared.Vehicle{
                Break: &shared.TimeWindowBreak{
                    Duration: 2700,
                    Earliest: 1550136467,
                    Latest: 1550148467,
                },
                EarliestStart: sdk.Int64(874573),
                EndAddress: &shared.Address{
                    Curbside: shared.AddressCurbsideEnumLeft.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                LatestEnd: sdk.Int64(944120),
                MaxActivities: sdk.Int(24),
                MaxDistance: sdk.Int64(400000),
                MaxDrivingTime: sdk.Int64(28800),
                MaxJobs: sdk.Int(12),
                MinJobs: sdk.Int(12),
                MoveToEndAddress: sdk.Bool(false),
                ReturnToDepot: sdk.Bool(false),
                Skills: []string{
                    "omnis",
                    "facilis",
                    "perspiciatis",
                    "voluptatem",
                },
                StartAddress: shared.Address{
                    Curbside: shared.AddressCurbsideEnumAny.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                TypeID: sdk.String("my-own-type"),
                VehicleID: "vehicle-1",
            },
            shared.Vehicle{
                Break: &shared.TimeWindowBreak{
                    Duration: 2700,
                    Earliest: 1550136467,
                    Latest: 1550148467,
                },
                EarliestStart: sdk.Int64(500026),
                EndAddress: &shared.Address{
                    Curbside: shared.AddressCurbsideEnumLeft.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                LatestEnd: sdk.Int64(50370),
                MaxActivities: sdk.Int(24),
                MaxDistance: sdk.Int64(400000),
                MaxDrivingTime: sdk.Int64(28800),
                MaxJobs: sdk.Int(12),
                MinJobs: sdk.Int(12),
                MoveToEndAddress: sdk.Bool(false),
                ReturnToDepot: sdk.Bool(false),
                Skills: []string{
                    "rerum",
                    "adipisci",
                    "asperiores",
                },
                StartAddress: shared.Address{
                    Curbside: shared.AddressCurbsideEnumAny.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                TypeID: sdk.String("my-own-type"),
                VehicleID: "vehicle-1",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobID != nil {
        // handle response
    }
}
```

## GetSolution


Take the job id and fetch the solution for the vehicle routing problem from this URL:

```
https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
```

You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.RouteOptimizationAPI.GetSolution(ctx, operations.GetSolutionRequest{
        JobID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```

## SolveVRP


To get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).

To solve a new vehicle routing problem, make a HTTP POST to this URL

```
https://graphhopper.com/api/1/vrp?key=<your_key>
```

It returns the solution to this problem in the JSON response.

Please note that this URL is very well suited to solve minor problems.
Larger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved.
To solve them, please use the [batch mode URL](#operation/asyncVRP) instead.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.RouteOptimizationAPI.SolveVRP(ctx, shared.Request{
        Algorithm: &shared.Algorithm{
            Objective: shared.AlgorithmObjectiveEnumCompletionTime.ToPointer(),
            ProblemType: shared.AlgorithmProblemTypeEnumMinMax.ToPointer(),
        },
        Configuration: &shared.Configuration{
            Routing: &shared.Routing{
                CalcPoints: sdk.Bool(false),
                ConsiderTraffic: sdk.Bool(false),
                CurbsideStrictness: shared.RoutingCurbsideStrictnessEnumSoft.ToPointer(),
                FailFast: sdk.Bool(false),
                NetworkDataProvider: shared.RoutingNetworkDataProviderEnumTomtom.ToPointer(),
                ReturnSnappedWaypoints: sdk.Bool(false),
                SnapPreventions: []shared.RoutingSnapPreventionsEnum{
                    shared.RoutingSnapPreventionsEnumTunnel,
                    shared.RoutingSnapPreventionsEnumTunnel,
                    shared.RoutingSnapPreventionsEnumFerry,
                },
            },
        },
        CostMatrices: []shared.CostMatrix{
            shared.CostMatrix{
                Data: &shared.CostMatrixData{
                    Distances: [][]float64{
                        []float64{
                            2123.9,
                            2098.43,
                        },
                        []float64{
                            1861.93,
                        },
                        []float64{
                            9443.73,
                        },
                    },
                    Info: &shared.CostMatrixDataInfo{
                        Copyrights: []string{
                            "cum",
                            "voluptate",
                            "dignissimos",
                        },
                        Took: sdk.Float64(9702.37),
                    },
                    Times: [][]int64{
                        []int64{
                            254356,
                            85295,
                            58029,
                        },
                    },
                },
                LocationIds: []string{
                    "iure",
                },
                Profile: sdk.String("odio"),
                Type: shared.CostMatrixTypeEnumDefault.ToPointer(),
            },
            shared.CostMatrix{
                Data: &shared.CostMatrixData{
                    Distances: [][]float64{
                        []float64{
                            9764.05,
                            3777.52,
                            6176.58,
                        },
                        []float64{
                            5424.99,
                        },
                        []float64{
                            8546.14,
                        },
                        []float64{
                            7438.35,
                        },
                    },
                    Info: &shared.CostMatrixDataInfo{
                        Copyrights: []string{
                            "iusto",
                            "voluptate",
                            "dolorum",
                        },
                        Took: sdk.Float64(5365.79),
                    },
                    Times: [][]int64{
                        []int64{
                            714697,
                            990339,
                            469497,
                            216897,
                        },
                        []int64{
                            663078,
                            906418,
                        },
                        []int64{
                            137220,
                            20651,
                        },
                    },
                },
                LocationIds: []string{
                    "optio",
                },
                Profile: sdk.String("accusamus"),
                Type: shared.CostMatrixTypeEnumDefault.ToPointer(),
            },
        },
        Objectives: []shared.Objective{
            shared.Objective{
                Type: shared.ObjectiveTypeEnumMin,
                Value: shared.ObjectiveValueEnumVehicles,
            },
            shared.Objective{
                Type: shared.ObjectiveTypeEnumMinMax,
                Value: shared.ObjectiveValueEnumTransportTime,
            },
            shared.Objective{
                Type: shared.ObjectiveTypeEnumMinMax,
                Value: shared.ObjectiveValueEnumVehicles,
            },
            shared.Objective{
                Type: shared.ObjectiveTypeEnumMinMax,
                Value: shared.ObjectiveValueEnumCompletionTime,
            },
        },
        Relations: []interface{}{
            shared.JobRelation{
                Ids: []string{
                    "vel",
                    "quod",
                },
                Type: "in_direct_sequence",
                VehicleID: sdk.String("driver-Peter"),
            },
            shared.GroupRelation{
                Groups: []string{
                    "dolorum",
                },
                Type: "in_direct_sequence",
            },
            shared.GroupRelation{
                Groups: []string{
                    "harum",
                    "iusto",
                },
                Type: "in_direct_sequence",
            },
            shared.JobRelation{
                Ids: []string{
                    "tenetur",
                    "amet",
                    "tempore",
                    "accusamus",
                },
                Type: "in_direct_sequence",
                VehicleID: sdk.String("driver-Peter"),
            },
        },
        Services: []shared.Service{
            shared.Service{
                Address: &shared.Address{
                    Curbside: shared.AddressCurbsideEnumRight.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                AllowedVehicles: []string{
                    "sapiente",
                },
                DisallowedVehicles: []string{
                    "nihil",
                    "sit",
                    "expedita",
                },
                Duration: sdk.Int64(1800),
                Group: sdk.String("group-A"),
                ID: "7fe77504-7df8-4497-843c-02d70b6490ce",
                MaxTimeInVehicle: sdk.Int64(900),
                Name: sdk.String("delivery pizza"),
                PreparationTime: sdk.Int64(300),
                Priority: sdk.Int(1),
                RequiredSkills: []string{
                    "sed",
                },
                Size: []int{
                    730442,
                    374170,
                },
                TimeWindows: []shared.TimeWindow{
                    shared.TimeWindow{
                        Earliest: sdk.Int64(463575),
                        Latest: sdk.Int64(214880),
                    },
                    shared.TimeWindow{
                        Earliest: sdk.Int64(277628),
                        Latest: sdk.Int64(186458),
                    },
                    shared.TimeWindow{
                        Earliest: sdk.Int64(586784),
                        Latest: sdk.Int64(807581),
                    },
                },
                Type: shared.ServiceTypeEnumDelivery.ToPointer(),
            },
            shared.Service{
                Address: &shared.Address{
                    Curbside: shared.AddressCurbsideEnumAny.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                AllowedVehicles: []string{
                    "dicta",
                    "laborum",
                    "totam",
                },
                DisallowedVehicles: []string{
                    "aspernatur",
                    "dolores",
                },
                Duration: sdk.Int64(1800),
                Group: sdk.String("group-A"),
                ID: "7fe77504-7df8-4497-843c-02d70b6490ce",
                MaxTimeInVehicle: sdk.Int64(900),
                Name: sdk.String("delivery pizza"),
                PreparationTime: sdk.Int64(300),
                Priority: sdk.Int(1),
                RequiredSkills: []string{
                    "facilis",
                    "aliquid",
                    "quam",
                },
                Size: []int{
                    840429,
                    183280,
                    204865,
                },
                TimeWindows: []shared.TimeWindow{
                    shared.TimeWindow{
                        Earliest: sdk.Int64(164959),
                        Latest: sdk.Int64(488056),
                    },
                },
                Type: shared.ServiceTypeEnumDelivery.ToPointer(),
            },
        },
        Shipments: []shared.Shipment{
            shared.Shipment{
                AllowedVehicles: []string{
                    "nam",
                    "hic",
                },
                Delivery: shared.Stop{
                    Address: &shared.Address{
                        Curbside: shared.AddressCurbsideEnumRight.ToPointer(),
                        Lat: 51.512665,
                        LocationID: "550e8400-e29b-11d4-a716-446655440000",
                        Lon: -0.092869,
                        Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                        StreetHint: sdk.String("Queens Victoria Street 70"),
                    },
                    Duration: sdk.Int64(1800),
                    Group: sdk.String("ASAP"),
                    PreparationTime: sdk.Int64(300),
                    TimeWindows: []shared.TimeWindow{
                        shared.TimeWindow{
                            Earliest: sdk.Int64(746994),
                            Latest: sdk.Int64(748664),
                        },
                        shared.TimeWindow{
                            Earliest: sdk.Int64(92596),
                            Latest: sdk.Int64(903720),
                        },
                        shared.TimeWindow{
                            Earliest: sdk.Int64(217450),
                            Latest: sdk.Int64(83422),
                        },
                        shared.TimeWindow{
                            Earliest: sdk.Int64(749255),
                            Latest: sdk.Int64(552193),
                        },
                    },
                },
                DisallowedVehicles: []string{
                    "cupiditate",
                    "aperiam",
                    "delectus",
                },
                ID: "7fe77504-7df8-4497-843c-02d70b6490ce",
                MaxTimeInVehicle: sdk.Int64(1800),
                Name: sdk.String("pickup and deliver pizza to Peter"),
                Pickup: shared.Stop{
                    Address: &shared.Address{
                        Curbside: shared.AddressCurbsideEnumRight.ToPointer(),
                        Lat: 51.512665,
                        LocationID: "550e8400-e29b-11d4-a716-446655440000",
                        Lon: -0.092869,
                        Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                        StreetHint: sdk.String("Queens Victoria Street 70"),
                    },
                    Duration: sdk.Int64(1800),
                    Group: sdk.String("ASAP"),
                    PreparationTime: sdk.Int64(300),
                    TimeWindows: []shared.TimeWindow{
                        shared.TimeWindow{
                            Earliest: sdk.Int64(286915),
                            Latest: sdk.Int64(240829),
                        },
                        shared.TimeWindow{
                            Earliest: sdk.Int64(677263),
                            Latest: sdk.Int64(100294),
                        },
                    },
                },
                Priority: sdk.Int(1),
                RequiredSkills: []string{
                    "aut",
                },
                Size: []int{
                    929530,
                    9240,
                    669917,
                },
            },
        },
        VehicleTypes: []shared.VehicleType{
            shared.VehicleType{
                Capacity: []int{
                    984330,
                    281730,
                    703495,
                    586410,
                },
                ConsiderTraffic: sdk.Bool(false),
                CostPerActivation: sdk.Float64(1816.31),
                CostPerMeter: sdk.Float64(639.55),
                CostPerSecond: sdk.Float64(5123.93),
                NetworkDataProvider: shared.VehicleTypeNetworkDataProviderEnumOpenstreetmap.ToPointer(),
                Profile: shared.VehicleTypeProfileEnumRacingbike.ToPointer(),
                ServiceTimeFactor: sdk.Float64(9774.96),
                SpeedFactor: sdk.Float64(7875.42),
                TypeID: "my-own-type",
            },
            shared.VehicleType{
                Capacity: []int{
                    606476,
                    338159,
                    218403,
                    961571,
                },
                ConsiderTraffic: sdk.Bool(false),
                CostPerActivation: sdk.Float64(4551.69),
                CostPerMeter: sdk.Float64(2317.01),
                CostPerSecond: sdk.Float64(8788.7),
                NetworkDataProvider: shared.VehicleTypeNetworkDataProviderEnumTomtom.ToPointer(),
                Profile: shared.VehicleTypeProfileEnumMtb.ToPointer(),
                ServiceTimeFactor: sdk.Float64(9413.78),
                SpeedFactor: sdk.Float64(7155.61),
                TypeID: "my-own-type",
            },
            shared.VehicleType{
                Capacity: []int{
                    486160,
                    630448,
                    708548,
                    874288,
                },
                ConsiderTraffic: sdk.Bool(false),
                CostPerActivation: sdk.Float64(4981.4),
                CostPerMeter: sdk.Float64(2930.2),
                CostPerSecond: sdk.Float64(8445.5),
                NetworkDataProvider: shared.VehicleTypeNetworkDataProviderEnumTomtom.ToPointer(),
                Profile: shared.VehicleTypeProfileEnumBike.ToPointer(),
                ServiceTimeFactor: sdk.Float64(6178.77),
                SpeedFactor: sdk.Float64(7733.26),
                TypeID: "my-own-type",
            },
            shared.VehicleType{
                Capacity: []int{
                    974259,
                },
                ConsiderTraffic: sdk.Bool(false),
                CostPerActivation: sdk.Float64(3472.33),
                CostPerMeter: sdk.Float64(8623.1),
                CostPerSecond: sdk.Float64(1481.41),
                NetworkDataProvider: shared.VehicleTypeNetworkDataProviderEnumTomtom.ToPointer(),
                Profile: shared.VehicleTypeProfileEnumSmallTruck.ToPointer(),
                ServiceTimeFactor: sdk.Float64(9850.33),
                SpeedFactor: sdk.Float64(4783.7),
                TypeID: "my-own-type",
            },
        },
        Vehicles: []shared.Vehicle{
            shared.Vehicle{
                Break: &shared.TimeWindowBreak{
                    Duration: 2700,
                    Earliest: 1550136467,
                    Latest: 1550148467,
                },
                EarliestStart: sdk.Int64(4048),
                EndAddress: &shared.Address{
                    Curbside: shared.AddressCurbsideEnumLeft.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                LatestEnd: sdk.Int64(269479),
                MaxActivities: sdk.Int(24),
                MaxDistance: sdk.Int64(400000),
                MaxDrivingTime: sdk.Int64(28800),
                MaxJobs: sdk.Int(12),
                MinJobs: sdk.Int(12),
                MoveToEndAddress: sdk.Bool(false),
                ReturnToDepot: sdk.Bool(false),
                Skills: []string{
                    "ea",
                    "aspernatur",
                },
                StartAddress: shared.Address{
                    Curbside: shared.AddressCurbsideEnumLeft.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                TypeID: sdk.String("my-own-type"),
                VehicleID: "vehicle-1",
            },
            shared.Vehicle{
                Break: &shared.DriveTimeBreak{
                    Duration: 2700,
                    InitialDrivingTime: sdk.Int64(3600),
                    MaxDrivingTime: 14400,
                    PossibleSplit: []int64{
                        189848,
                        401132,
                    },
                },
                EarliestStart: sdk.Int64(511319),
                EndAddress: &shared.Address{
                    Curbside: shared.AddressCurbsideEnumRight.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                LatestEnd: sdk.Int64(224317),
                MaxActivities: sdk.Int(24),
                MaxDistance: sdk.Int64(400000),
                MaxDrivingTime: sdk.Int64(28800),
                MaxJobs: sdk.Int(12),
                MinJobs: sdk.Int(12),
                MoveToEndAddress: sdk.Bool(false),
                ReturnToDepot: sdk.Bool(false),
                Skills: []string{
                    "quasi",
                    "ex",
                    "nulla",
                    "excepturi",
                },
                StartAddress: shared.Address{
                    Curbside: shared.AddressCurbsideEnumAny.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                TypeID: sdk.String("my-own-type"),
                VehicleID: "vehicle-1",
            },
            shared.Vehicle{
                Break: &shared.TimeWindowBreak{
                    Duration: 2700,
                    Earliest: 1550136467,
                    Latest: 1550148467,
                },
                EarliestStart: sdk.Int64(960835),
                EndAddress: &shared.Address{
                    Curbside: shared.AddressCurbsideEnumAny.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                LatestEnd: sdk.Int64(906556),
                MaxActivities: sdk.Int(24),
                MaxDistance: sdk.Int64(400000),
                MaxDrivingTime: sdk.Int64(28800),
                MaxJobs: sdk.Int(12),
                MinJobs: sdk.Int(12),
                MoveToEndAddress: sdk.Bool(false),
                ReturnToDepot: sdk.Bool(false),
                Skills: []string{
                    "impedit",
                    "corporis",
                },
                StartAddress: shared.Address{
                    Curbside: shared.AddressCurbsideEnumRight.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                TypeID: sdk.String("my-own-type"),
                VehicleID: "vehicle-1",
            },
            shared.Vehicle{
                Break: &shared.TimeWindowBreak{
                    Duration: 2700,
                    Earliest: 1550136467,
                    Latest: 1550148467,
                },
                EarliestStart: sdk.Int64(81101),
                EndAddress: &shared.Address{
                    Curbside: shared.AddressCurbsideEnumRight.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                LatestEnd: sdk.Int64(407241),
                MaxActivities: sdk.Int(24),
                MaxDistance: sdk.Int64(400000),
                MaxDrivingTime: sdk.Int64(28800),
                MaxJobs: sdk.Int(12),
                MinJobs: sdk.Int(12),
                MoveToEndAddress: sdk.Bool(false),
                ReturnToDepot: sdk.Bool(false),
                Skills: []string{
                    "consectetur",
                    "recusandae",
                    "aspernatur",
                    "minima",
                },
                StartAddress: shared.Address{
                    Curbside: shared.AddressCurbsideEnumRight.ToPointer(),
                    Lat: 51.512665,
                    LocationID: "550e8400-e29b-11d4-a716-446655440000",
                    Lon: -0.092869,
                    Name: sdk.String("Queens Victoria Street 70, Second Floor, Flat 245"),
                    StreetHint: sdk.String("Queens Victoria Street 70"),
                },
                TypeID: sdk.String("my-own-type"),
                VehicleID: "vehicle-1",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```
