# ByClient

### Available Operations

* [GetNetworkPoliciesByClient](#getnetworkpoliciesbyclient) - Get policies for all clients with policies

## GetNetworkPoliciesByClient

Get policies for all clients with policies

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ByClient.GetNetworkPoliciesByClient(ctx, operations.GetNetworkPoliciesByClientRequest{
        EndingBefore: sdk.String("unde"),
        NetworkID: "similique",
        PerPage: sdk.Int64(753261),
        StartingAfter: sdk.String("tempore"),
        T0: sdk.String("amet"),
        Timespan: sdk.Float32(8901.12),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPoliciesByClient200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
