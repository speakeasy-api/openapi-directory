# ChannelUtilization

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
    res, err := s.ChannelUtilization.GetNetworkNetworkHealthChannelUtilization(ctx, operations.GetNetworkNetworkHealthChannelUtilizationRequest{
        EndingBefore: sdk.String("hic"),
        NetworkID: "ducimus",
        PerPage: sdk.Int64(160260),
        Resolution: sdk.Int64(370195),
        StartingAfter: sdk.String("libero"),
        T0: sdk.String("quia"),
        T1: sdk.String("omnis"),
        Timespan: sdk.Float32(1206.46),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkNetworkHealthChannelUtilization200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
