# UsageHistories

### Available Operations

* [GetNetworkClientsUsageHistories](#getnetworkclientsusagehistories) - Return the usage histories for clients

## GetNetworkClientsUsageHistories

Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

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
    res, err := s.UsageHistories.GetNetworkClientsUsageHistories(ctx, operations.GetNetworkClientsUsageHistoriesRequest{
        Clients: "odio",
        EndingBefore: sdk.String("quisquam"),
        NetworkID: "vero",
        PerPage: sdk.Int64(350245),
        SsidNumber: operations.GetNetworkClientsUsageHistoriesSsidNumberEnumZero.ToPointer(),
        StartingAfter: sdk.String("hic"),
        T0: sdk.String("porro"),
        T1: sdk.String("incidunt"),
        Timespan: sdk.Float32(9540.08),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsUsageHistories200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
