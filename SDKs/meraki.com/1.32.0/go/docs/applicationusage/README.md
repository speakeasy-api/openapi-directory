# ApplicationUsage

### Available Operations

* [GetNetworkClientsApplicationUsage](#getnetworkclientsapplicationusage) - Return the application usage data for clients

## GetNetworkClientsApplicationUsage

Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

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
    res, err := s.ApplicationUsage.GetNetworkClientsApplicationUsage(ctx, operations.GetNetworkClientsApplicationUsageRequest{
        Clients: "illo",
        EndingBefore: sdk.String("magnam"),
        NetworkID: "delectus",
        PerPage: sdk.Int64(255064),
        SsidNumber: operations.GetNetworkClientsApplicationUsageSsidNumberEnumEleven.ToPointer(),
        StartingAfter: sdk.String("nobis"),
        T0: sdk.String("ex"),
        T1: sdk.String("repellat"),
        Timespan: sdk.Float32(651.18),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsApplicationUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
