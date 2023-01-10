<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AsyncClusteringProblemRequest{
        Request: shared.ClusterRequest{
            Configuration: &shared.ClusterConfiguration{
                Clustering: &shared.ClusterConfigurationClustering{
                    MaxQuantity: 59.099998,
                    MinQuantity: 79.099998,
                    NumClusters: 14.100000,
                },
                ResponseType: "nesciunt",
                Routing: &shared.ClusterConfigurationRouting{
                    CostPerMeter: 84.099998,
                    CostPerSecond: 47.200001,
                    Profile: "voluptatem",
                },
            },
            Customers: []shared.ClusterCustomer{
                shared.ClusterCustomer{
                    Address: &shared.ClusterCustomerAddress{
                        Lat: 43.200001,
                        Lon: 96.199997,
                        StreetHint: "quis",
                    },
                    ID: "laborum",
                    Quantity: 43.099998,
                },
                shared.ClusterCustomer{
                    Address: &shared.ClusterCustomerAddress{
                        Lat: 32.099998,
                        Lon: 7.200000,
                        StreetHint: "atque",
                    },
                    ID: "quo",
                    Quantity: 34.099998,
                },
                shared.ClusterCustomer{
                    Address: &shared.ClusterCustomerAddress{
                        Lat: 67.099998,
                        Lon: 52.099998,
                        StreetHint: "aut",
                    },
                    ID: "et",
                    Quantity: 8.100000,
                },
            },
        },
    }
    
    res, err := s.ClusterAPI.AsyncClusteringProblem(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.JobID != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->