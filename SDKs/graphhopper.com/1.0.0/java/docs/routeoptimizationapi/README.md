# routeOptimizationAPI

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

* [asyncVRP](#asyncvrp) - POST route optimization problem (batch mode)
* [getSolution](#getsolution) - GET the solution (batch mode)
* [solveVRP](#solvevrp) - POST route optimization problem

## asyncVRP


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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AsyncVRPResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressCurbsideEnum;
import org.openapis.openapi.models.shared.Algorithm;
import org.openapis.openapi.models.shared.AlgorithmObjectiveEnum;
import org.openapis.openapi.models.shared.AlgorithmProblemTypeEnum;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.CostMatrix;
import org.openapis.openapi.models.shared.CostMatrixData;
import org.openapis.openapi.models.shared.CostMatrixDataInfo;
import org.openapis.openapi.models.shared.CostMatrixTypeEnum;
import org.openapis.openapi.models.shared.DriveTimeBreak;
import org.openapis.openapi.models.shared.GroupRelation;
import org.openapis.openapi.models.shared.JobRelation;
import org.openapis.openapi.models.shared.Objective;
import org.openapis.openapi.models.shared.ObjectiveTypeEnum;
import org.openapis.openapi.models.shared.ObjectiveValueEnum;
import org.openapis.openapi.models.shared.Request;
import org.openapis.openapi.models.shared.Routing;
import org.openapis.openapi.models.shared.RoutingCurbsideStrictnessEnum;
import org.openapis.openapi.models.shared.RoutingNetworkDataProviderEnum;
import org.openapis.openapi.models.shared.RoutingSnapPreventionsEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Service;
import org.openapis.openapi.models.shared.ServiceTypeEnum;
import org.openapis.openapi.models.shared.Shipment;
import org.openapis.openapi.models.shared.Stop;
import org.openapis.openapi.models.shared.TimeWindow;
import org.openapis.openapi.models.shared.TimeWindowBreak;
import org.openapis.openapi.models.shared.Vehicle;
import org.openapis.openapi.models.shared.VehicleType;
import org.openapis.openapi.models.shared.VehicleTypeNetworkDataProviderEnum;
import org.openapis.openapi.models.shared.VehicleTypeProfileEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Request req = new Request() {{
                algorithm = new Algorithm() {{
                    objective = AlgorithmObjectiveEnum.TRANSPORT_TIME;
                    problemType = AlgorithmProblemTypeEnum.MIN_MAX;
                }};;
                configuration = new Configuration() {{
                    routing = new Routing() {{
                        calcPoints = false;
                        considerTraffic = false;
                        curbsideStrictness = RoutingCurbsideStrictnessEnum.IGNORE;
                        failFast = false;
                        networkDataProvider = RoutingNetworkDataProviderEnum.OPENSTREETMAP;
                        returnSnappedWaypoints = false;
                        snapPreventions = new org.openapis.openapi.models.shared.RoutingSnapPreventionsEnum[]{{
                            add(RoutingSnapPreventionsEnum.BRIDGE),
                            add(RoutingSnapPreventionsEnum.MOTORWAY),
                        }};
                    }};;
                }};;
                costMatrices = new org.openapis.openapi.models.shared.CostMatrix[]{{
                    add(new CostMatrix() {{
                        data = new CostMatrixData() {{
                            distances = new Double[][]{{
                                add(new Double[]{{
                                    add(4142.63),
                                    add(9182.36),
                                    add(641.47),
                                    add(2168.22),
                                }}),
                                add(new Double[]{{
                                    add(5651.89),
                                    add(5666.02),
                                    add(8651.03),
                                }}),
                            }};
                            info = new CostMatrixDataInfo() {{
                                copyrights = new String[]{{
                                    add("praesentium"),
                                    add("rem"),
                                }};
                                took = 9167.23;
                            }};
                            times = new Long[][]{{
                                add(new Long[]{{
                                    add(575947L),
                                    add(83112L),
                                    add(929297L),
                                    add(277718L),
                                }}),
                            }};
                        }};
                        locationIds = new String[]{{
                            add("consequatur"),
                            add("est"),
                        }};
                        profile = "quibusdam";
                        type = CostMatrixTypeEnum.DEFAULT_;
                    }}),
                    add(new CostMatrix() {{
                        data = new CostMatrixData() {{
                            distances = new Double[][]{{
                                add(new Double[]{{
                                    add(8413.86),
                                    add(2894.06),
                                    add(2647.3),
                                }}),
                                add(new Double[]{{
                                    add(3978.21),
                                }}),
                                add(new Double[]{{
                                    add(5528.22),
                                    add(201.07),
                                    add(1649.4),
                                }}),
                            }};
                            info = new CostMatrixDataInfo() {{
                                copyrights = new String[]{{
                                    add("ipsam"),
                                    add("alias"),
                                    add("fugit"),
                                    add("dolorum"),
                                }};
                                took = 5696.18;
                            }};
                            times = new Long[][]{{
                                add(new Long[]{{
                                    add(735194L),
                                    add(288476L),
                                    add(962189L),
                                }}),
                                add(new Long[]{{
                                    add(248753L),
                                    add(756107L),
                                }}),
                            }};
                        }};
                        locationIds = new String[]{{
                            add("aliquid"),
                            add("provident"),
                            add("necessitatibus"),
                        }};
                        profile = "sint";
                        type = CostMatrixTypeEnum.GOOGLE;
                    }}),
                    add(new CostMatrix() {{
                        data = new CostMatrixData() {{
                            distances = new Double[][]{{
                                add(new Double[]{{
                                    add(9527.49),
                                    add(6800.56),
                                    add(4471.25),
                                    add(4491.98),
                                }}),
                            }};
                            info = new CostMatrixDataInfo() {{
                                copyrights = new String[]{{
                                    add("maiores"),
                                    add("rerum"),
                                    add("dicta"),
                                    add("magnam"),
                                }};
                                took = 7670.24;
                            }};
                            times = new Long[][]{{
                                add(new Long[]{{
                                    add(396506L),
                                    add(675439L),
                                }}),
                                add(new Long[]{{
                                    add(249796L),
                                    add(581273L),
                                    add(313218L),
                                    add(881736L),
                                }}),
                                add(new Long[]{{
                                    add(692532L),
                                    add(588465L),
                                    add(725255L),
                                    add(659669L),
                                }}),
                                add(new Long[]{{
                                    add(533206L),
                                    add(956084L),
                                    add(230533L),
                                }}),
                            }};
                        }};
                        locationIds = new String[]{{
                            add("nisi"),
                            add("vel"),
                            add("natus"),
                        }};
                        profile = "omnis";
                        type = CostMatrixTypeEnum.DEFAULT_;
                    }}),
                }};
                objectives = new org.openapis.openapi.models.shared.Objective[]{{
                    add(new Objective(ObjectiveTypeEnum.MIN_MAX, ObjectiveValueEnum.VEHICLES) {{
                        type = ObjectiveTypeEnum.MIN;
                        value = ObjectiveValueEnum.TRANSPORT_TIME;
                    }}),
                }};
                relations = new Object[]{{
                    add(new JobRelation(                new String[]{{
                                        add("vero"),
                                        add("aspernatur"),
                                    }}, "in_direct_sequence") {{
                        ids = new String[]{{
                            add("natus"),
                            add("nobis"),
                        }};
                        type = "in_direct_sequence";
                        vehicleId = "driver-Peter";
                    }}),
                    add(new JobRelation(                new String[]{{
                                        add("provident"),
                                        add("quos"),
                                    }}, "in_direct_sequence") {{
                        ids = new String[]{{
                            add("et"),
                            add("excepturi"),
                        }};
                        type = "in_direct_sequence";
                        vehicleId = "driver-Peter";
                    }}),
                }};
                services = new org.openapis.openapi.models.shared.Service[]{{
                    add(new Service("7fe77504-7df8-4497-843c-02d70b6490ce") {{
                        address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.RIGHT;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        allowedVehicles = new String[]{{
                            add("reiciendis"),
                            add("mollitia"),
                            add("ad"),
                        }};
                        disallowedVehicles = new String[]{{
                            add("dolor"),
                            add("necessitatibus"),
                        }};
                        duration = 1800L;
                        group = "group-A";
                        id = "7fe77504-7df8-4497-843c-02d70b6490ce";
                        maxTimeInVehicle = 900L;
                        name = "delivery pizza";
                        preparationTime = 300L;
                        priority = 1;
                        requiredSkills = new String[]{{
                            add("nemo"),
                        }};
                        size = new Integer[]{{
                            add(435865),
                        }};
                        timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                            add(new TimeWindow() {{
                                earliest = 891924L;
                                latest = 260341L;
                            }}),
                            add(new TimeWindow() {{
                                earliest = 806194L;
                                latest = 537023L;
                            }}),
                            add(new TimeWindow() {{
                                earliest = 703889L;
                                latest = 447926L;
                            }}),
                            add(new TimeWindow() {{
                                earliest = 100226L;
                                latest = 99569L;
                            }}),
                        }};
                        type = ServiceTypeEnum.DELIVERY;
                    }}),
                    add(new Service("7fe77504-7df8-4497-843c-02d70b6490ce") {{
                        address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.ANY;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        allowedVehicles = new String[]{{
                            add("expedita"),
                            add("nihil"),
                        }};
                        disallowedVehicles = new String[]{{
                            add("quibusdam"),
                            add("sed"),
                            add("saepe"),
                            add("pariatur"),
                        }};
                        duration = 1800L;
                        group = "group-A";
                        id = "7fe77504-7df8-4497-843c-02d70b6490ce";
                        maxTimeInVehicle = 900L;
                        name = "delivery pizza";
                        preparationTime = 300L;
                        priority = 1;
                        requiredSkills = new String[]{{
                            add("consequuntur"),
                        }};
                        size = new Integer[]{{
                            add(615560),
                            add(166847),
                            add(123820),
                        }};
                        timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                            add(new TimeWindow() {{
                                earliest = 848009L;
                                latest = 864934L;
                            }}),
                            add(new TimeWindow() {{
                                earliest = 807319L;
                                latest = 411397L;
                            }}),
                            add(new TimeWindow() {{
                                earliest = 569101L;
                                latest = 139972L;
                            }}),
                            add(new TimeWindow() {{
                                earliest = 407183L;
                                latest = 33222L;
                            }}),
                        }};
                        type = ServiceTypeEnum.DELIVERY;
                    }}),
                    add(new Service("7fe77504-7df8-4497-843c-02d70b6490ce") {{
                        address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.RIGHT;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        allowedVehicles = new String[]{{
                            add("quidem"),
                            add("ipsam"),
                            add("voluptate"),
                            add("autem"),
                        }};
                        disallowedVehicles = new String[]{{
                            add("eaque"),
                            add("pariatur"),
                            add("nemo"),
                        }};
                        duration = 1800L;
                        group = "group-A";
                        id = "7fe77504-7df8-4497-843c-02d70b6490ce";
                        maxTimeInVehicle = 900L;
                        name = "delivery pizza";
                        preparationTime = 300L;
                        priority = 1;
                        requiredSkills = new String[]{{
                            add("perferendis"),
                            add("fugiat"),
                            add("amet"),
                            add("aut"),
                        }};
                        size = new Integer[]{{
                            add(359978),
                            add(944124),
                            add(729991),
                            add(749999),
                        }};
                        timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                            add(new TimeWindow() {{
                                earliest = 339404L;
                                latest = 521037L;
                            }}),
                        }};
                        type = ServiceTypeEnum.DELIVERY;
                    }}),
                }};
                shipments = new org.openapis.openapi.models.shared.Shipment[]{{
                    add(new Shipment(                new Stop() {{
                                        address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                            curbside = AddressCurbsideEnum.RIGHT;
                                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                            streetHint = "Queens Victoria Street 70";
                                        }};;
                                        duration = 1800L;
                                        group = "ASAP";
                                        preparationTime = 300L;
                                        timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                                            add(new TimeWindow() {{
                                                earliest = 679091L;
                                                latest = 535633L;
                                            }}),
                                            add(new TimeWindow() {{
                                                earliest = 864282L;
                                                latest = 589910L;
                                            }}),
                                            add(new TimeWindow() {{
                                                earliest = 750844L;
                                                latest = 730122L;
                                            }}),
                                        }};
                                    }};, "7fe77504-7df8-4497-843c-02d70b6490ce",                 new Stop() {{
                                        address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                            curbside = AddressCurbsideEnum.ANY;
                                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                            streetHint = "Queens Victoria Street 70";
                                        }};;
                                        duration = 1800L;
                                        group = "ASAP";
                                        preparationTime = 300L;
                                        timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                                            add(new TimeWindow() {{
                                                earliest = 554242L;
                                                latest = 398221L;
                                            }}),
                                            add(new TimeWindow() {{
                                                earliest = 212390L;
                                                latest = 209843L;
                                            }}),
                                        }};
                                    }};) {{
                        allowedVehicles = new String[]{{
                            add("quis"),
                        }};
                        delivery = new Stop() {{
                            address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                curbside = AddressCurbsideEnum.RIGHT;
                                lat = 51.512665;
                                locationId = "550e8400-e29b-11d4-a716-446655440000";
                                lon = -0.092869;
                                name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                streetHint = "Queens Victoria Street 70";
                            }};
                            duration = 1800L;
                            group = "ASAP";
                            preparationTime = 300L;
                            timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                                add(new TimeWindow() {{
                                    earliest = 18521L;
                                    latest = 170986L;
                                }}),
                            }};
                        }};
                        disallowedVehicles = new String[]{{
                            add("quam"),
                            add("dolor"),
                            add("vero"),
                            add("nostrum"),
                        }};
                        id = "7fe77504-7df8-4497-843c-02d70b6490ce";
                        maxTimeInVehicle = 1800L;
                        name = "pickup and deliver pizza to Peter";
                        pickup = new Stop() {{
                            address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                curbside = AddressCurbsideEnum.ANY;
                                lat = 51.512665;
                                locationId = "550e8400-e29b-11d4-a716-446655440000";
                                lon = -0.092869;
                                name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                streetHint = "Queens Victoria Street 70";
                            }};
                            duration = 1800L;
                            group = "ASAP";
                            preparationTime = 300L;
                            timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                                add(new TimeWindow() {{
                                    earliest = 608253L;
                                    latest = 704415L;
                                }}),
                                add(new TimeWindow() {{
                                    earliest = 596656L;
                                    latest = 31838L;
                                }}),
                                add(new TimeWindow() {{
                                    earliest = 783645L;
                                    latest = 164694L;
                                }}),
                                add(new TimeWindow() {{
                                    earliest = 500026L;
                                    latest = 621479L;
                                }}),
                            }};
                        }};
                        priority = 1;
                        requiredSkills = new String[]{{
                            add("occaecati"),
                        }};
                        size = new Integer[]{{
                            add(237893),
                            add(992397),
                            add(934214),
                        }};
                    }}),
                    add(new Shipment(                new Stop() {{
                                        address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                            curbside = AddressCurbsideEnum.RIGHT;
                                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                            streetHint = "Queens Victoria Street 70";
                                        }};;
                                        duration = 1800L;
                                        group = "ASAP";
                                        preparationTime = 300L;
                                        timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                                            add(new TimeWindow() {{
                                                earliest = 679393L;
                                                latest = 478596L;
                                            }}),
                                            add(new TimeWindow() {{
                                                earliest = 453697L;
                                                latest = 677082L;
                                            }}),
                                            add(new TimeWindow() {{
                                                earliest = 536579L;
                                                latest = 607045L;
                                            }}),
                                        }};
                                    }};, "7fe77504-7df8-4497-843c-02d70b6490ce",                 new Stop() {{
                                        address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                            curbside = AddressCurbsideEnum.ANY;
                                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                            streetHint = "Queens Victoria Street 70";
                                        }};;
                                        duration = 1800L;
                                        group = "ASAP";
                                        preparationTime = 300L;
                                        timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                                            add(new TimeWindow() {{
                                                earliest = 990339L;
                                                latest = 469497L;
                                            }}),
                                            add(new TimeWindow() {{
                                                earliest = 216897L;
                                                latest = 456015L;
                                            }}),
                                            add(new TimeWindow() {{
                                                earliest = 663078L;
                                                latest = 906418L;
                                            }}),
                                        }};
                                    }};) {{
                        allowedVehicles = new String[]{{
                            add("qui"),
                        }};
                        delivery = new Stop() {{
                            address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                curbside = AddressCurbsideEnum.RIGHT;
                                lat = 51.512665;
                                locationId = "550e8400-e29b-11d4-a716-446655440000";
                                lon = -0.092869;
                                name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                streetHint = "Queens Victoria Street 70";
                            }};
                            duration = 1800L;
                            group = "ASAP";
                            preparationTime = 300L;
                            timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                                add(new TimeWindow() {{
                                    earliest = 569574L;
                                    latest = 739551L;
                                }}),
                                add(new TimeWindow() {{
                                    earliest = 452109L;
                                    latest = 490459L;
                                }}),
                                add(new TimeWindow() {{
                                    earliest = 970237L;
                                    latest = 227414L;
                                }}),
                                add(new TimeWindow() {{
                                    earliest = 680545L;
                                    latest = 254356L;
                                }}),
                            }};
                        }};
                        disallowedVehicles = new String[]{{
                            add("ipsa"),
                        }};
                        id = "7fe77504-7df8-4497-843c-02d70b6490ce";
                        maxTimeInVehicle = 1800L;
                        name = "pickup and deliver pizza to Peter";
                        pickup = new Stop() {{
                            address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                curbside = AddressCurbsideEnum.RIGHT;
                                lat = 51.512665;
                                locationId = "550e8400-e29b-11d4-a716-446655440000";
                                lon = -0.092869;
                                name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                streetHint = "Queens Victoria Street 70";
                            }};
                            duration = 1800L;
                            group = "ASAP";
                            preparationTime = 300L;
                            timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                                add(new TimeWindow() {{
                                    earliest = 487838L;
                                    latest = 311796L;
                                }}),
                                add(new TimeWindow() {{
                                    earliest = 881005L;
                                    latest = 696344L;
                                }}),
                            }};
                        }};
                        priority = 1;
                        requiredSkills = new String[]{{
                            add("voluptas"),
                            add("natus"),
                            add("eos"),
                            add("atque"),
                        }};
                        size = new Integer[]{{
                            add(854614),
                        }};
                    }}),
                }};
                vehicleTypes = new org.openapis.openapi.models.shared.VehicleType[]{{
                    add(new VehicleType("my-own-type") {{
                        capacity = new Integer[]{{
                            add(20651),
                        }};
                        considerTraffic = false;
                        costPerActivation = 2292.19;
                        costPerMeter = 7583.79;
                        costPerSecond = 8815.86;
                        networkDataProvider = VehicleTypeNetworkDataProviderEnum.OPENSTREETMAP;
                        profile = VehicleTypeProfileEnum.SMALL_TRUCK;
                        serviceTimeFactor = 3834.64;
                        speedFactor = 6457.85;
                        typeId = "my-own-type";
                    }}),
                    add(new VehicleType("my-own-type") {{
                        capacity = new Integer[]{{
                            add(324683),
                            add(831049),
                            add(519711),
                        }};
                        considerTraffic = false;
                        costPerActivation = 6289.82;
                        costPerMeter = 0.55;
                        costPerSecond = 8726.51;
                        networkDataProvider = VehicleTypeNetworkDataProviderEnum.OPENSTREETMAP;
                        profile = VehicleTypeProfileEnum.FOOT;
                        serviceTimeFactor = 4254.51;
                        speedFactor = 7980.47;
                        typeId = "my-own-type";
                    }}),
                }};
                vehicles = new org.openapis.openapi.models.shared.Vehicle[]{{
                    add(new Vehicle(                new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                        curbside = AddressCurbsideEnum.RIGHT;
                                        name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                        streetHint = "Queens Victoria Street 70";
                                    }};, "vehicle-1") {{
                        break_ = new TimeWindowBreak(2700L, 1550136467L, 1550148467L) {{
                            duration = 2700L;
                            earliest = 1550136467L;
                            latest = 1550148467L;
                        }};
                        earliestStart = 679880L;
                        endAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.ANY;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        latestEnd = 456130L;
                        maxActivities = 24;
                        maxDistance = 400000L;
                        maxDrivingTime = 28800L;
                        maxJobs = 12;
                        minJobs = 12;
                        moveToEndAddress = false;
                        returnToDepot = false;
                        skills = new String[]{{
                            add("iusto"),
                            add("ipsum"),
                            add("quisquam"),
                        }};
                        startAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.ANY;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        typeId = "my-own-type";
                        vehicleId = "vehicle-1";
                    }}),
                    add(new Vehicle(                new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                        curbside = AddressCurbsideEnum.LEFT;
                                        name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                        streetHint = "Queens Victoria Street 70";
                                    }};, "vehicle-1") {{
                        break_ = new DriveTimeBreak(2700L, 14400L) {{
                            duration = 2700L;
                            initialDrivingTime = 3600L;
                            maxDrivingTime = 14400L;
                            possibleSplit = new Long[]{{
                                add(253941L),
                                add(313692L),
                                add(213312L),
                                add(957451L),
                            }};
                        }};
                        earliestStart = 518201L;
                        endAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.LEFT;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        latestEnd = 25662L;
                        maxActivities = 24;
                        maxDistance = 400000L;
                        maxDrivingTime = 28800L;
                        maxJobs = 12;
                        minJobs = 12;
                        moveToEndAddress = false;
                        returnToDepot = false;
                        skills = new String[]{{
                            add("neque"),
                            add("sed"),
                            add("vel"),
                        }};
                        startAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.ANY;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        typeId = "my-own-type";
                        vehicleId = "vehicle-1";
                    }}),
                    add(new Vehicle(                new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                        curbside = AddressCurbsideEnum.RIGHT;
                                        name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                        streetHint = "Queens Victoria Street 70";
                                    }};, "vehicle-1") {{
                        break_ = new DriveTimeBreak(2700L, 14400L) {{
                            duration = 2700L;
                            initialDrivingTime = 3600L;
                            maxDrivingTime = 14400L;
                            possibleSplit = new Long[]{{
                                add(214880L),
                                add(277628L),
                            }};
                        }};
                        earliestStart = 186458L;
                        endAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.LEFT;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        latestEnd = 807581L;
                        maxActivities = 24;
                        maxDistance = 400000L;
                        maxDrivingTime = 28800L;
                        maxJobs = 12;
                        minJobs = 12;
                        moveToEndAddress = false;
                        returnToDepot = false;
                        skills = new String[]{{
                            add("soluta"),
                            add("dicta"),
                            add("laborum"),
                            add("totam"),
                        }};
                        startAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.RIGHT;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        typeId = "my-own-type";
                        vehicleId = "vehicle-1";
                    }}),
                    add(new Vehicle(                new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                        curbside = AddressCurbsideEnum.RIGHT;
                                        name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                        streetHint = "Queens Victoria Street 70";
                                    }};, "vehicle-1") {{
                        break_ = new TimeWindowBreak(2700L, 1550136467L, 1550148467L) {{
                            duration = 2700L;
                            earliest = 1550136467L;
                            latest = 1550148467L;
                        }};
                        earliestStart = 716860L;
                        endAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.ANY;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        latestEnd = 396060L;
                        maxActivities = 24;
                        maxDistance = 400000L;
                        maxDrivingTime = 28800L;
                        maxJobs = 12;
                        minJobs = 12;
                        moveToEndAddress = false;
                        returnToDepot = false;
                        skills = new String[]{{
                            add("molestias"),
                            add("temporibus"),
                        }};
                        startAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.RIGHT;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        typeId = "my-own-type";
                        vehicleId = "vehicle-1";
                    }}),
                }};
            }};            

            AsyncVRPResponse res = sdk.routeOptimizationAPI.asyncVRP(req);

            if (res.jobId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSolution


Take the job id and fetch the solution for the vehicle routing problem from this URL:

```
https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
```

You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSolutionRequest;
import org.openapis.openapi.models.operations.GetSolutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSolutionRequest req = new GetSolutionRequest("magni");            

            GetSolutionResponse res = sdk.routeOptimizationAPI.getSolution(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## solveVRP


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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SolveVRPResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressCurbsideEnum;
import org.openapis.openapi.models.shared.Algorithm;
import org.openapis.openapi.models.shared.AlgorithmObjectiveEnum;
import org.openapis.openapi.models.shared.AlgorithmProblemTypeEnum;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.CostMatrix;
import org.openapis.openapi.models.shared.CostMatrixData;
import org.openapis.openapi.models.shared.CostMatrixDataInfo;
import org.openapis.openapi.models.shared.CostMatrixTypeEnum;
import org.openapis.openapi.models.shared.DriveTimeBreak;
import org.openapis.openapi.models.shared.GroupRelation;
import org.openapis.openapi.models.shared.JobRelation;
import org.openapis.openapi.models.shared.Objective;
import org.openapis.openapi.models.shared.ObjectiveTypeEnum;
import org.openapis.openapi.models.shared.ObjectiveValueEnum;
import org.openapis.openapi.models.shared.Request;
import org.openapis.openapi.models.shared.Routing;
import org.openapis.openapi.models.shared.RoutingCurbsideStrictnessEnum;
import org.openapis.openapi.models.shared.RoutingNetworkDataProviderEnum;
import org.openapis.openapi.models.shared.RoutingSnapPreventionsEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Service;
import org.openapis.openapi.models.shared.ServiceTypeEnum;
import org.openapis.openapi.models.shared.Shipment;
import org.openapis.openapi.models.shared.Stop;
import org.openapis.openapi.models.shared.TimeWindow;
import org.openapis.openapi.models.shared.TimeWindowBreak;
import org.openapis.openapi.models.shared.Vehicle;
import org.openapis.openapi.models.shared.VehicleType;
import org.openapis.openapi.models.shared.VehicleTypeNetworkDataProviderEnum;
import org.openapis.openapi.models.shared.VehicleTypeProfileEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Request req = new Request() {{
                algorithm = new Algorithm() {{
                    objective = AlgorithmObjectiveEnum.TRANSPORT_TIME;
                    problemType = AlgorithmProblemTypeEnum.MIN;
                }};;
                configuration = new Configuration() {{
                    routing = new Routing() {{
                        calcPoints = false;
                        considerTraffic = false;
                        curbsideStrictness = RoutingCurbsideStrictnessEnum.STRICT;
                        failFast = false;
                        networkDataProvider = RoutingNetworkDataProviderEnum.TOMTOM;
                        returnSnappedWaypoints = false;
                        snapPreventions = new org.openapis.openapi.models.shared.RoutingSnapPreventionsEnum[]{{
                            add(RoutingSnapPreventionsEnum.TUNNEL),
                        }};
                    }};;
                }};;
                costMatrices = new org.openapis.openapi.models.shared.CostMatrix[]{{
                    add(new CostMatrix() {{
                        data = new CostMatrixData() {{
                            distances = new Double[][]{{
                                add(new Double[]{{
                                    add(9037.2),
                                }}),
                                add(new Double[]{{
                                    add(834.22),
                                }}),
                                add(new Double[]{{
                                    add(5521.93),
                                    add(7316.94),
                                    add(5844.76),
                                }}),
                            }};
                            info = new CostMatrixDataInfo() {{
                                copyrights = new String[]{{
                                    add("delectus"),
                                }};
                                took = 2091.57;
                            }};
                            times = new Long[][]{{
                                add(new Long[]{{
                                    add(240829L),
                                    add(677263L),
                                }}),
                                add(new Long[]{{
                                    add(63038L),
                                }}),
                            }};
                        }};
                        locationIds = new String[]{{
                            add("quas"),
                        }};
                        profile = "itaque";
                        type = CostMatrixTypeEnum.DEFAULT_;
                    }}),
                    add(new CostMatrix() {{
                        data = new CostMatrixData() {{
                            distances = new Double[][]{{
                                add(new Double[]{{
                                    add(7851.53),
                                    add(9843.3),
                                    add(2817.3),
                                    add(7034.95),
                                }}),
                                add(new Double[]{{
                                    add(1816.31),
                                    add(639.55),
                                    add(5123.93),
                                }}),
                                add(new Double[]{{
                                    add(5804.47),
                                    add(9774.96),
                                }}),
                            }};
                            info = new CostMatrixDataInfo() {{
                                copyrights = new String[]{{
                                    add("vero"),
                                    add("omnis"),
                                    add("quis"),
                                    add("ipsum"),
                                }};
                                took = 9615.71;
                            }};
                            times = new Long[][]{{
                                add(new Long[]{{
                                    add(878870L),
                                }}),
                                add(new Long[]{{
                                    add(492268L),
                                    add(941378L),
                                    add(715561L),
                                    add(799203L),
                                }}),
                            }};
                        }};
                        locationIds = new String[]{{
                            add("similique"),
                            add("facilis"),
                        }};
                        profile = "vero";
                        type = CostMatrixTypeEnum.DEFAULT_;
                    }}),
                    add(new CostMatrix() {{
                        data = new CostMatrixData() {{
                            distances = new Double[][]{{
                                add(new Double[]{{
                                    add(8489.44),
                                    add(1943.42),
                                    add(6178.77),
                                    add(7733.26),
                                }}),
                                add(new Double[]{{
                                    add(9742.59),
                                }}),
                            }};
                            info = new CostMatrixDataInfo() {{
                                copyrights = new String[]{{
                                    add("nulla"),
                                    add("fugit"),
                                }};
                                took = 7804.27;
                            }};
                            times = new Long[][]{{
                                add(new Long[]{{
                                    add(478370L),
                                    add(753570L),
                                    add(497391L),
                                    add(4048L),
                                }}),
                                add(new Long[]{{
                                    add(269479L),
                                    add(368584L),
                                    add(410492L),
                                }}),
                                add(new Long[]{{
                                    add(428224L),
                                }}),
                                add(new Long[]{{
                                    add(297842L),
                                    add(189848L),
                                    add(401132L),
                                    add(511319L),
                                }}),
                            }};
                        }};
                        locationIds = new String[]{{
                            add("dolor"),
                        }};
                        profile = "maiores";
                        type = CostMatrixTypeEnum.DEFAULT_;
                    }}),
                }};
                objectives = new org.openapis.openapi.models.shared.Objective[]{{
                    add(new Objective(ObjectiveTypeEnum.MIN_MAX, ObjectiveValueEnum.TRANSPORT_TIME) {{
                        type = ObjectiveTypeEnum.MIN_MAX;
                        value = ObjectiveValueEnum.VEHICLES;
                    }}),
                    add(new Objective(ObjectiveTypeEnum.MIN_MAX, ObjectiveValueEnum.TRANSPORT_TIME) {{
                        type = ObjectiveTypeEnum.MIN_MAX;
                        value = ObjectiveValueEnum.ACTIVITIES;
                    }}),
                }};
                relations = new Object[]{{
                    add(new JobRelation(                new String[]{{
                                        add("ea"),
                                        add("quo"),
                                    }}, "in_direct_sequence") {{
                        ids = new String[]{{
                            add("aliquid"),
                            add("inventore"),
                        }};
                        type = "in_direct_sequence";
                        vehicleId = "driver-Peter";
                    }}),
                    add(new JobRelation(                new String[]{{
                                        add("aut"),
                                        add("aut"),
                                        add("deleniti"),
                                    }}, "in_direct_sequence") {{
                        ids = new String[]{{
                            add("aspernatur"),
                            add("minima"),
                            add("eaque"),
                            add("a"),
                        }};
                        type = "in_direct_sequence";
                        vehicleId = "driver-Peter";
                    }}),
                    add(new GroupRelation(                new String[]{{
                                        add("non"),
                                    }}, "in_direct_sequence") {{
                        groups = new String[]{{
                            add("fugit"),
                            add("accusamus"),
                        }};
                        type = "in_direct_sequence";
                    }}),
                    add(new JobRelation(                new String[]{{
                                        add("autem"),
                                        add("nobis"),
                                    }}, "in_direct_sequence") {{
                        ids = new String[]{{
                            add("laborum"),
                            add("placeat"),
                            add("velit"),
                        }};
                        type = "in_direct_sequence";
                        vehicleId = "driver-Peter";
                    }}),
                }};
                services = new org.openapis.openapi.models.shared.Service[]{{
                    add(new Service("7fe77504-7df8-4497-843c-02d70b6490ce") {{
                        address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.ANY;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        allowedVehicles = new String[]{{
                            add("voluptas"),
                            add("libero"),
                            add("quasi"),
                            add("tempora"),
                        }};
                        disallowedVehicles = new String[]{{
                            add("explicabo"),
                            add("provident"),
                        }};
                        duration = 1800L;
                        group = "group-A";
                        id = "7fe77504-7df8-4497-843c-02d70b6490ce";
                        maxTimeInVehicle = 900L;
                        name = "delivery pizza";
                        preparationTime = 300L;
                        priority = 1;
                        requiredSkills = new String[]{{
                            add("molestiae"),
                        }};
                        size = new Integer[]{{
                            add(487935),
                            add(262118),
                        }};
                        timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                            add(new TimeWindow() {{
                                earliest = 456141L;
                                latest = 524593L;
                            }}),
                            add(new TimeWindow() {{
                                earliest = 683282L;
                                latest = 442015L;
                            }}),
                        }};
                        type = ServiceTypeEnum.DELIVERY;
                    }}),
                    add(new Service("7fe77504-7df8-4497-843c-02d70b6490ce") {{
                        address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.ANY;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        allowedVehicles = new String[]{{
                            add("ut"),
                            add("eum"),
                            add("suscipit"),
                            add("assumenda"),
                        }};
                        disallowedVehicles = new String[]{{
                            add("praesentium"),
                        }};
                        duration = 1800L;
                        group = "group-A";
                        id = "7fe77504-7df8-4497-843c-02d70b6490ce";
                        maxTimeInVehicle = 900L;
                        name = "delivery pizza";
                        preparationTime = 300L;
                        priority = 1;
                        requiredSkills = new String[]{{
                            add("veritatis"),
                            add("ipsa"),
                            add("id"),
                            add("quidem"),
                        }};
                        size = new Integer[]{{
                            add(778696),
                        }};
                        timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                            add(new TimeWindow() {{
                                earliest = 777408L;
                                latest = 681359L;
                            }}),
                            add(new TimeWindow() {{
                                earliest = 259422L;
                                latest = 178367L;
                            }}),
                            add(new TimeWindow() {{
                                earliest = 373813L;
                                latest = 69859L;
                            }}),
                            add(new TimeWindow() {{
                                earliest = 587600L;
                                latest = 9688L;
                            }}),
                        }};
                        type = ServiceTypeEnum.DELIVERY;
                    }}),
                    add(new Service("7fe77504-7df8-4497-843c-02d70b6490ce") {{
                        address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.RIGHT;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        allowedVehicles = new String[]{{
                            add("ipsam"),
                            add("aspernatur"),
                            add("sequi"),
                            add("quo"),
                        }};
                        disallowedVehicles = new String[]{{
                            add("recusandae"),
                            add("aperiam"),
                        }};
                        duration = 1800L;
                        group = "group-A";
                        id = "7fe77504-7df8-4497-843c-02d70b6490ce";
                        maxTimeInVehicle = 900L;
                        name = "delivery pizza";
                        preparationTime = 300L;
                        priority = 1;
                        requiredSkills = new String[]{{
                            add("quod"),
                            add("dignissimos"),
                            add("inventore"),
                        }};
                        size = new Integer[]{{
                            add(518835),
                            add(882710),
                        }};
                        timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                            add(new TimeWindow() {{
                                earliest = 488410L;
                                latest = 577543L;
                            }}),
                            add(new TimeWindow() {{
                                earliest = 414567L;
                                latest = 959434L;
                            }}),
                        }};
                        type = ServiceTypeEnum.DELIVERY;
                    }}),
                }};
                shipments = new org.openapis.openapi.models.shared.Shipment[]{{
                    add(new Shipment(                new Stop() {{
                                        address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                            curbside = AddressCurbsideEnum.ANY;
                                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                            streetHint = "Queens Victoria Street 70";
                                        }};;
                                        duration = 1800L;
                                        group = "ASAP";
                                        preparationTime = 300L;
                                        timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                                            add(new TimeWindow() {{
                                                earliest = 82971L;
                                                latest = 458604L;
                                            }}),
                                            add(new TimeWindow() {{
                                                earliest = 800379L;
                                                latest = 724168L;
                                            }}),
                                            add(new TimeWindow() {{
                                                earliest = 877131L;
                                                latest = 399025L;
                                            }}),
                                            add(new TimeWindow() {{
                                                earliest = 93459L;
                                                latest = 904045L;
                                            }}),
                                        }};
                                    }};, "7fe77504-7df8-4497-843c-02d70b6490ce",                 new Stop() {{
                                        address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                            curbside = AddressCurbsideEnum.LEFT;
                                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                            streetHint = "Queens Victoria Street 70";
                                        }};;
                                        duration = 1800L;
                                        group = "ASAP";
                                        preparationTime = 300L;
                                        timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                                            add(new TimeWindow() {{
                                                earliest = 473221L;
                                                latest = 699622L;
                                            }}),
                                            add(new TimeWindow() {{
                                                earliest = 580197L;
                                                latest = 327720L;
                                            }}),
                                            add(new TimeWindow() {{
                                                earliest = 716244L;
                                                latest = 756779L;
                                            }}),
                                        }};
                                    }};) {{
                        allowedVehicles = new String[]{{
                            add("molestiae"),
                            add("accusantium"),
                            add("porro"),
                        }};
                        delivery = new Stop() {{
                            address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                curbside = AddressCurbsideEnum.LEFT;
                                lat = 51.512665;
                                locationId = "550e8400-e29b-11d4-a716-446655440000";
                                lon = -0.092869;
                                name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                streetHint = "Queens Victoria Street 70";
                            }};
                            duration = 1800L;
                            group = "ASAP";
                            preparationTime = 300L;
                            timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                                add(new TimeWindow() {{
                                    earliest = 510017L;
                                    latest = 159867L;
                                }}),
                                add(new TimeWindow() {{
                                    earliest = 536178L;
                                    latest = 143829L;
                                }}),
                                add(new TimeWindow() {{
                                    earliest = 681393L;
                                    latest = 649463L;
                                }}),
                            }};
                        }};
                        disallowedVehicles = new String[]{{
                            add("atque"),
                            add("explicabo"),
                        }};
                        id = "7fe77504-7df8-4497-843c-02d70b6490ce";
                        maxTimeInVehicle = 1800L;
                        name = "pickup and deliver pizza to Peter";
                        pickup = new Stop() {{
                            address = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                curbside = AddressCurbsideEnum.RIGHT;
                                lat = 51.512665;
                                locationId = "550e8400-e29b-11d4-a716-446655440000";
                                lon = -0.092869;
                                name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                streetHint = "Queens Victoria Street 70";
                            }};
                            duration = 1800L;
                            group = "ASAP";
                            preparationTime = 300L;
                            timeWindows = new org.openapis.openapi.models.shared.TimeWindow[]{{
                                add(new TimeWindow() {{
                                    earliest = 147014L;
                                    latest = 956406L;
                                }}),
                                add(new TimeWindow() {{
                                    earliest = 159870L;
                                    latest = 187131L;
                                }}),
                            }};
                        }};
                        priority = 1;
                        requiredSkills = new String[]{{
                            add("saepe"),
                        }};
                        size = new Integer[]{{
                            add(543806),
                            add(92260),
                            add(456911),
                        }};
                    }}),
                }};
                vehicleTypes = new org.openapis.openapi.models.shared.VehicleType[]{{
                    add(new VehicleType("my-own-type") {{
                        capacity = new Integer[]{{
                            add(731398),
                            add(240020),
                            add(766964),
                        }};
                        considerTraffic = false;
                        costPerActivation = 1605.38;
                        costPerMeter = 97.66;
                        costPerSecond = 7963.92;
                        networkDataProvider = VehicleTypeNetworkDataProviderEnum.OPENSTREETMAP;
                        profile = VehicleTypeProfileEnum.SMALL_TRUCK;
                        serviceTimeFactor = 2328.65;
                        speedFactor = 4581.39;
                        typeId = "my-own-type";
                    }}),
                }};
                vehicles = new org.openapis.openapi.models.shared.Vehicle[]{{
                    add(new Vehicle(                new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                        curbside = AddressCurbsideEnum.RIGHT;
                                        name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                        streetHint = "Queens Victoria Street 70";
                                    }};, "vehicle-1") {{
                        break_ = new DriveTimeBreak(2700L, 14400L) {{
                            duration = 2700L;
                            initialDrivingTime = 3600L;
                            maxDrivingTime = 14400L;
                            possibleSplit = new Long[]{{
                                add(857723L),
                                add(557811L),
                                add(457223L),
                                add(97468L),
                            }};
                        }};
                        earliestStart = 951875L;
                        endAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.LEFT;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        latestEnd = 575751L;
                        maxActivities = 24;
                        maxDistance = 400000L;
                        maxDrivingTime = 28800L;
                        maxJobs = 12;
                        minJobs = 12;
                        moveToEndAddress = false;
                        returnToDepot = false;
                        skills = new String[]{{
                            add("possimus"),
                            add("quia"),
                            add("eveniet"),
                            add("asperiores"),
                        }};
                        startAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.ANY;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        typeId = "my-own-type";
                        vehicleId = "vehicle-1";
                    }}),
                    add(new Vehicle(                new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                        curbside = AddressCurbsideEnum.LEFT;
                                        name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                        streetHint = "Queens Victoria Street 70";
                                    }};, "vehicle-1") {{
                        break_ = new TimeWindowBreak(2700L, 1550136467L, 1550148467L) {{
                            duration = 2700L;
                            earliest = 1550136467L;
                            latest = 1550148467L;
                        }};
                        earliestStart = 94458L;
                        endAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.LEFT;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        latestEnd = 633608L;
                        maxActivities = 24;
                        maxDistance = 400000L;
                        maxDrivingTime = 28800L;
                        maxJobs = 12;
                        minJobs = 12;
                        moveToEndAddress = false;
                        returnToDepot = false;
                        skills = new String[]{{
                            add("tenetur"),
                            add("quae"),
                        }};
                        startAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.ANY;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        typeId = "my-own-type";
                        vehicleId = "vehicle-1";
                    }}),
                    add(new Vehicle(                new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                                        curbside = AddressCurbsideEnum.LEFT;
                                        name = "Queens Victoria Street 70, Second Floor, Flat 245";
                                        streetHint = "Queens Victoria Street 70";
                                    }};, "vehicle-1") {{
                        break_ = new TimeWindowBreak(2700L, 1550136467L, 1550148467L) {{
                            duration = 2700L;
                            earliest = 1550136467L;
                            latest = 1550148467L;
                        }};
                        earliestStart = 258684L;
                        endAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.ANY;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        latestEnd = 849039L;
                        maxActivities = 24;
                        maxDistance = 400000L;
                        maxDrivingTime = 28800L;
                        maxJobs = 12;
                        minJobs = 12;
                        moveToEndAddress = false;
                        returnToDepot = false;
                        skills = new String[]{{
                            add("accusantium"),
                            add("aliquam"),
                            add("sapiente"),
                        }};
                        startAddress = new Address(51.512665, "550e8400-e29b-11d4-a716-446655440000", -0.092869) {{
                            curbside = AddressCurbsideEnum.RIGHT;
                            lat = 51.512665;
                            locationId = "550e8400-e29b-11d4-a716-446655440000";
                            lon = -0.092869;
                            name = "Queens Victoria Street 70, Second Floor, Flat 245";
                            streetHint = "Queens Victoria Street 70";
                        }};
                        typeId = "my-own-type";
                        vehicleId = "vehicle-1";
                    }}),
                }};
            }};            

            SolveVRPResponse res = sdk.routeOptimizationAPI.solveVRP(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
