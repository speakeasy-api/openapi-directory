# ChannelUtilizationHistory

### Available Operations

* [GetNetworkWirelessChannelUtilizationHistory](#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client

## GetNetworkWirelessChannelUtilizationHistory

Return AP channel utilization over time for a device or network client

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
    res, err := s.ChannelUtilizationHistory.GetNetworkWirelessChannelUtilizationHistory(ctx, operations.GetNetworkWirelessChannelUtilizationHistoryRequest{
        ApTag: sdk.String("qui"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessChannelUtilizationHistoryBandEnumTwo4.ToPointer(),
        ClientID: sdk.String("consequatur"),
        DeviceSerial: sdk.String("amet"),
        NetworkID: "consequatur",
        Resolution: sdk.Int64(852634),
        T0: sdk.String("voluptatum"),
        T1: sdk.String("velit"),
        Timespan: sdk.Float32(9427.8),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessChannelUtilizationHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
