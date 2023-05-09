# SignalQualityHistory

### Available Operations

* [GetNetworkWirelessSignalQualityHistory](#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client

## GetNetworkWirelessSignalQualityHistory

Return signal quality (SNR/RSSI) over time for a device or network client

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
    res, err := s.SignalQualityHistory.GetNetworkWirelessSignalQualityHistory(ctx, operations.GetNetworkWirelessSignalQualityHistoryRequest{
        ApTag: sdk.String("repellendus"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessSignalQualityHistoryBandEnumSix.ToPointer(),
        ClientID: sdk.String("facere"),
        DeviceSerial: sdk.String("error"),
        NetworkID: "ea",
        Resolution: sdk.Int64(223690),
        Ssid: sdk.Int64(176387),
        T0: sdk.String("eum"),
        T1: sdk.String("voluptate"),
        Timespan: sdk.Float32(5767.35),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSignalQualityHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
