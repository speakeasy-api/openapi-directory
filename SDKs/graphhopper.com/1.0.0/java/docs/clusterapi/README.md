# clusterAPI

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

* [asyncClusteringProblem](#asyncclusteringproblem) - Batch Cluster Endpoint
* [getClusterSolution](#getclustersolution) - GET Batch Solution Endpoint
* [solveClusteringProblem](#solveclusteringproblem) - POST Cluster Endpoint

## asyncClusteringProblem


Prefer the [synchronous endpoint](#operation/solveClusteringProblem) and use this Batch Cluster endpoint for
long running problems only. The work flow is asynchronous:

- send a POST request towards `https://graphhopper.com/api/1/cluster/calculate?key=<your_key>` and fetch the job_id.
- poll the solution every 500ms until it gives `status=finished`. Do this with a GET request
  towards `https://graphhopper.com/api/1/cluster/solution/<job_id>?key=<your_key>`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AsyncClusteringProblemResponse;
import org.openapis.openapi.models.shared.ClusterConfiguration;
import org.openapis.openapi.models.shared.ClusterConfigurationClustering;
import org.openapis.openapi.models.shared.ClusterConfigurationRouting;
import org.openapis.openapi.models.shared.ClusterCustomer;
import org.openapis.openapi.models.shared.ClusterCustomerAddress;
import org.openapis.openapi.models.shared.ClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ClusterRequest req = new ClusterRequest() {{
                configuration = new ClusterConfiguration() {{
                    clustering = new ClusterConfigurationClustering() {{
                        maxQuantity = 50;
                        minQuantity = 30;
                        numClusters = 10;
                    }};;
                    responseType = "json";
                    routing = new ClusterConfigurationRouting() {{
                        costPerMeter = 6027.63;
                        costPerSecond = 1;
                        profile = "car";
                    }};;
                }};;
                customers = new org.openapis.openapi.models.shared.ClusterCustomer[]{{
                    add(new ClusterCustomer() {{
                        address = new ClusterCustomerAddress() {{
                            lat = 48.118434;
                            lon = 11.53941;
                            streetHint = "Lindenschmitstraße 52";
                        }};
                        id = "GraphHopper GmbH";
                        quantity = 10;
                    }}),
                    add(new ClusterCustomer() {{
                        address = new ClusterCustomerAddress() {{
                            lat = 48.118434;
                            lon = 11.53941;
                            streetHint = "Lindenschmitstraße 52";
                        }};
                        id = "GraphHopper GmbH";
                        quantity = 10;
                    }}),
                    add(new ClusterCustomer() {{
                        address = new ClusterCustomerAddress() {{
                            lat = 48.118434;
                            lon = 11.53941;
                            streetHint = "Lindenschmitstraße 52";
                        }};
                        id = "GraphHopper GmbH";
                        quantity = 10;
                    }}),
                    add(new ClusterCustomer() {{
                        address = new ClusterCustomerAddress() {{
                            lat = 48.118434;
                            lon = 11.53941;
                            streetHint = "Lindenschmitstraße 52";
                        }};
                        id = "GraphHopper GmbH";
                        quantity = 10;
                    }}),
                }};
            }};            

            AsyncClusteringProblemResponse res = sdk.clusterAPI.asyncClusteringProblem(req);

            if (res.jobId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClusterSolution

This endpoint returns the solution of the clustering problems submitted to the [Batch Cluster endpoint](#operation/asyncClusteringProblem).
You can fetch it with the job_id, you have been sent.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClusterSolutionRequest;
import org.openapis.openapi.models.operations.GetClusterSolutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetClusterSolutionRequest req = new GetClusterSolutionRequest("illum");            

            GetClusterSolutionResponse res = sdk.clusterAPI.getClusterSolution(req);

            if (res.clusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## solveClusteringProblem


The Cluster endpoint is used with a POST request towards
`https://graphhopper.com/api/1/cluster?key=<your_key>`. The solution will be provided in the JSON response.
Please note that for problems that take longer than 10 seconds a bad request error is returned.
In this case please use the asynchronous [Batch Cluster Endpoint](#operation/asyncClusteringProblem) instead.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SolveClusteringProblemResponse;
import org.openapis.openapi.models.shared.ClusterConfiguration;
import org.openapis.openapi.models.shared.ClusterConfigurationClustering;
import org.openapis.openapi.models.shared.ClusterConfigurationRouting;
import org.openapis.openapi.models.shared.ClusterCustomer;
import org.openapis.openapi.models.shared.ClusterCustomerAddress;
import org.openapis.openapi.models.shared.ClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ClusterRequest req = new ClusterRequest() {{
                configuration = new ClusterConfiguration() {{
                    clustering = new ClusterConfigurationClustering() {{
                        maxQuantity = 50;
                        minQuantity = 30;
                        numClusters = 10;
                    }};;
                    responseType = "json";
                    routing = new ClusterConfigurationRouting() {{
                        costPerMeter = 6235.64;
                        costPerSecond = 1;
                        profile = "car";
                    }};;
                }};;
                customers = new org.openapis.openapi.models.shared.ClusterCustomer[]{{
                    add(new ClusterCustomer() {{
                        address = new ClusterCustomerAddress() {{
                            lat = 48.118434;
                            lon = 11.53941;
                            streetHint = "Lindenschmitstraße 52";
                        }};
                        id = "GraphHopper GmbH";
                        quantity = 10;
                    }}),
                    add(new ClusterCustomer() {{
                        address = new ClusterCustomerAddress() {{
                            lat = 48.118434;
                            lon = 11.53941;
                            streetHint = "Lindenschmitstraße 52";
                        }};
                        id = "GraphHopper GmbH";
                        quantity = 10;
                    }}),
                    add(new ClusterCustomer() {{
                        address = new ClusterCustomerAddress() {{
                            lat = 48.118434;
                            lon = 11.53941;
                            streetHint = "Lindenschmitstraße 52";
                        }};
                        id = "GraphHopper GmbH";
                        quantity = 10;
                    }}),
                }};
            }};            

            SolveClusteringProblemResponse res = sdk.clusterAPI.solveClusteringProblem(req);

            if (res.clusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
