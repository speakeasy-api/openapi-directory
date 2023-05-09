<!-- Start SDK Example Usage -->
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
                CostPerMeter: sdk.Float64(5488.14),
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

    if res.JobID != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->