# NetworkHealth

### Available Operations

* [GetNetworkNetworkHealthChannelUtilization](#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.

## GetNetworkNetworkHealthChannelUtilization

Get the channel utilization over each radio for all APs in a network.

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
    res, err := s.NetworkHealth.GetNetworkNetworkHealthChannelUtilization(ctx, operations.GetNetworkNetworkHealthChannelUtilizationRequest{
        EndingBefore: sdk.String("architecto"),
        NetworkID: "culpa",
        PerPage: sdk.Int64(565505),
        Resolution: sdk.Int64(416228),
        StartingAfter: sdk.String("assumenda"),
        T0: sdk.String("maiores"),
        T1: sdk.String("quia"),
        Timespan: sdk.Float32(633.45),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkNetworkHealthChannelUtilization200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
