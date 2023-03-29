<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AsyncClusteringProblemRequest{
        Request: shared.ClusterRequest{
            Configuration: &shared.ClusterConfiguration{
                Clustering: &shared.ClusterConfigurationClustering{
                    MaxQuantity: 50,
                    MinQuantity: 30,
                    NumClusters: 10,
                },
                ResponseType: "json",
                Routing: &shared.ClusterConfigurationRouting{
                    CostPerMeter: 5488.14,
                    CostPerSecond: 1,
                    Profile: "car",
                },
            },
            Customers: []shared.ClusterCustomer{
                shared.ClusterCustomer{
                    Address: &shared.ClusterCustomerAddress{
                        Lat: 48.118434,
                        Lon: 11.53941,
                        StreetHint: "Lindenschmitstraße 52",
                    },
                    ID: "GraphHopper GmbH",
                    Quantity: 10,
                },
                shared.ClusterCustomer{
                    Address: &shared.ClusterCustomerAddress{
                        Lat: 48.118434,
                        Lon: 11.53941,
                        StreetHint: "Lindenschmitstraße 52",
                    },
                    ID: "GraphHopper GmbH",
                    Quantity: 10,
                },
                shared.ClusterCustomer{
                    Address: &shared.ClusterCustomerAddress{
                        Lat: 48.118434,
                        Lon: 11.53941,
                        StreetHint: "Lindenschmitstraße 52",
                    },
                    ID: "GraphHopper GmbH",
                    Quantity: 10,
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.ClusterAPI.AsyncClusteringProblem(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.JobID != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->