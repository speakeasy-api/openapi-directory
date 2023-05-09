# ClusterAPI

## Overview


### Introduction

![Cluster Example](./img/cluster-solution.jpg)

It solves the “capacity clustering problem” by assigning a set of customers to a given number of distinct groups (called clusters).
The API “clusters” by minimizing the total distance from each individual customer to its designated group median.
It can also consider minimum and maximum capacity restrictions for each group.

Clustering can be used in many practical applications.
For example, it can help to plan territories, i.e. territory optimization for field teams with large territories for field workers,
or to solve large vehicle routing problems (VRP).


### Available Operations

* [AsyncClusteringProblem](#asyncclusteringproblem) - Batch Cluster Endpoint
* [GetClusterSolution](#getclustersolution) - GET Batch Solution Endpoint
* [SolveClusteringProblem](#solveclusteringproblem) - POST Cluster Endpoint

## AsyncClusteringProblem


Prefer the [synchronous endpoint](#operation/solveClusteringProblem) and use this Batch Cluster endpoint for
long running problems only. The work flow is asynchronous:

- send a POST request towards `https://graphhopper.com/api/1/cluster/calculate?key=<your_key>` and fetch the job_id.
- poll the solution every 500ms until it gives `status=finished`. Do this with a GET request
  towards `https://graphhopper.com/api/1/cluster/solution/<job_id>?key=<your_key>`.


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
    res, err := s.ClusterAPI.AsyncClusteringProblem(ctx, shared.ClusterRequest{
        Configuration: &shared.ClusterConfiguration{
            Clustering: &shared.ClusterConfigurationClustering{
                MaxQuantity: sdk.Float64(50),
                MinQuantity: sdk.Float64(30),
                NumClusters: sdk.Float64(10),
            },
            ResponseType: sdk.String("json"),
            Routing: &shared.ClusterConfigurationRouting{
                CostPerMeter: sdk.Float64(7151.9),
                CostPerSecond: sdk.Float64(1),
                Profile: sdk.String("car"),
            },
        },
        Customers: []shared.ClusterCustomer{
            shared.ClusterCustomer{
                Address: &shared.ClusterCustomerAddress{
                    Lat: sdk.Float64(48.118434),
                    Lon: sdk.Float64(11.53941),
                    StreetHint: sdk.String("Lindenschmitstraße 52"),
                },
                ID: sdk.String("GraphHopper GmbH"),
                Quantity: sdk.Float64(10),
            },
            shared.ClusterCustomer{
                Address: &shared.ClusterCustomerAddress{
                    Lat: sdk.Float64(48.118434),
                    Lon: sdk.Float64(11.53941),
                    StreetHint: sdk.String("Lindenschmitstraße 52"),
                },
                ID: sdk.String("GraphHopper GmbH"),
                Quantity: sdk.Float64(10),
            },
            shared.ClusterCustomer{
                Address: &shared.ClusterCustomerAddress{
                    Lat: sdk.Float64(48.118434),
                    Lon: sdk.Float64(11.53941),
                    StreetHint: sdk.String("Lindenschmitstraße 52"),
                },
                ID: sdk.String("GraphHopper GmbH"),
                Quantity: sdk.Float64(10),
            },
            shared.ClusterCustomer{
                Address: &shared.ClusterCustomerAddress{
                    Lat: sdk.Float64(48.118434),
                    Lon: sdk.Float64(11.53941),
                    StreetHint: sdk.String("Lindenschmitstraße 52"),
                },
                ID: sdk.String("GraphHopper GmbH"),
                Quantity: sdk.Float64(10),
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

## GetClusterSolution

This endpoint returns the solution of the clustering problems submitted to the [Batch Cluster endpoint](#operation/asyncClusteringProblem).
You can fetch it with the job_id, you have been sent.


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
    res, err := s.ClusterAPI.GetClusterSolution(ctx, operations.GetClusterSolutionRequest{
        JobID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClusterResponse != nil {
        // handle response
    }
}
```

## SolveClusteringProblem


The Cluster endpoint is used with a POST request towards
`https://graphhopper.com/api/1/cluster?key=<your_key>`. The solution will be provided in the JSON response.
Please note that for problems that take longer than 10 seconds a bad request error is returned.
In this case please use the asynchronous [Batch Cluster Endpoint](#operation/asyncClusteringProblem) instead.


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
    res, err := s.ClusterAPI.SolveClusteringProblem(ctx, shared.ClusterRequest{
        Configuration: &shared.ClusterConfiguration{
            Clustering: &shared.ClusterConfigurationClustering{
                MaxQuantity: sdk.Float64(50),
                MinQuantity: sdk.Float64(30),
                NumClusters: sdk.Float64(10),
            },
            ResponseType: sdk.String("json"),
            Routing: &shared.ClusterConfigurationRouting{
                CostPerMeter: sdk.Float64(8579.46),
                CostPerSecond: sdk.Float64(1),
                Profile: sdk.String("car"),
            },
        },
        Customers: []shared.ClusterCustomer{
            shared.ClusterCustomer{
                Address: &shared.ClusterCustomerAddress{
                    Lat: sdk.Float64(48.118434),
                    Lon: sdk.Float64(11.53941),
                    StreetHint: sdk.String("Lindenschmitstraße 52"),
                },
                ID: sdk.String("GraphHopper GmbH"),
                Quantity: sdk.Float64(10),
            },
            shared.ClusterCustomer{
                Address: &shared.ClusterCustomerAddress{
                    Lat: sdk.Float64(48.118434),
                    Lon: sdk.Float64(11.53941),
                    StreetHint: sdk.String("Lindenschmitstraße 52"),
                },
                ID: sdk.String("GraphHopper GmbH"),
                Quantity: sdk.Float64(10),
            },
            shared.ClusterCustomer{
                Address: &shared.ClusterCustomerAddress{
                    Lat: sdk.Float64(48.118434),
                    Lon: sdk.Float64(11.53941),
                    StreetHint: sdk.String("Lindenschmitstraße 52"),
                },
                ID: sdk.String("GraphHopper GmbH"),
                Quantity: sdk.Float64(10),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClusterResponse != nil {
        // handle response
    }
}
```
