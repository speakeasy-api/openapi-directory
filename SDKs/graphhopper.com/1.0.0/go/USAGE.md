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
                    MaxQuantity: 13.200000,
                    MinQuantity: 49.200001,
                    NumClusters: 56.200001,
                },
                ResponseType: "qui",
                Routing: &shared.ClusterConfigurationRouting{
                    CostPerMeter: 44.099998,
                    CostPerSecond: 58.099998,
                    Profile: "minus",
                },
            },
            Customers: []shared.ClusterCustomer{
                shared.ClusterCustomer{
                    Address: &shared.ClusterCustomerAddress{
                        Lat: 61.099998,
                        Lon: 6.100000,
                        StreetHint: "dignissimos",
                    },
                    ID: "et",
                    Quantity: 78.099998,
                },
                shared.ClusterCustomer{
                    Address: &shared.ClusterCustomerAddress{
                        Lat: 94.099998,
                        Lon: 9.100000,
                        StreetHint: "omnis",
                    },
                    ID: "delectus",
                    Quantity: 46.200001,
                },
                shared.ClusterCustomer{
                    Address: &shared.ClusterCustomerAddress{
                        Lat: 5.100000,
                        Lon: 23.100000,
                        StreetHint: "beatae",
                    },
                    ID: "ex",
                    Quantity: 95.099998,
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