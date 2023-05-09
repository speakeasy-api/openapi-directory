# ClientCountHistory

### Available Operations

* [GetNetworkWirelessClientCountHistory](#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client

## GetNetworkWirelessClientCountHistory

Return wireless client counts over time for a network, device, or network client

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
    res, err := s.ClientCountHistory.GetNetworkWirelessClientCountHistory(ctx, operations.GetNetworkWirelessClientCountHistoryRequest{
        ApTag: sdk.String("itaque"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessClientCountHistoryBandEnumSix.ToPointer(),
        ClientID: sdk.String("iusto"),
        DeviceSerial: sdk.String("dignissimos"),
        NetworkID: "provident",
        Resolution: sdk.Int64(581889),
        Ssid: sdk.Int64(828735),
        T0: sdk.String("sunt"),
        T1: sdk.String("odit"),
        Timespan: sdk.Float32(8768.21),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientCountHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
