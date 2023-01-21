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
                    MaxQuantity: 74.099998,
                    MinQuantity: 53.099998,
                    NumClusters: 15.100000,
                },
                ResponseType: "expedita",
                Routing: &shared.ClusterConfigurationRouting{
                    CostPerMeter: 77.099998,
                    CostPerSecond: 28.100000,
                    Profile: "rerum",
                },
            },
            Customers: []shared.ClusterCustomer{
                shared.ClusterCustomer{
                    Address: &shared.ClusterCustomerAddress{
                        Lat: 48.099998,
                        Lon: 26.200001,
                        StreetHint: "dolorem",
                    },
                    ID: "et",
                    Quantity: 94.199997,
                },
                shared.ClusterCustomer{
                    Address: &shared.ClusterCustomerAddress{
                        Lat: 68.099998,
                        Lon: 80.199997,
                        StreetHint: "debitis",
                    },
                    ID: "vel",
                    Quantity: 20.200001,
                },
                shared.ClusterCustomer{
                    Address: &shared.ClusterCustomerAddress{
                        Lat: 12.200000,
                        Lon: 88.199997,
                        StreetHint: "commodi",
                    },
                    ID: "quis",
                    Quantity: 93.099998,
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