# DataRateHistory

### Available Operations

* [GetNetworkWirelessDataRateHistory](#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client

## GetNetworkWirelessDataRateHistory

Return PHY data rates over time for a network, device, or network client

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
    res, err := s.DataRateHistory.GetNetworkWirelessDataRateHistory(ctx, operations.GetNetworkWirelessDataRateHistoryRequest{
        ApTag: sdk.String("odio"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessDataRateHistoryBandEnumFive.ToPointer(),
        ClientID: sdk.String("adipisci"),
        DeviceSerial: sdk.String("architecto"),
        NetworkID: "iure",
        Resolution: sdk.Int64(139528),
        Ssid: sdk.Int64(32260),
        T0: sdk.String("quidem"),
        T1: sdk.String("molestiae"),
        Timespan: sdk.Float32(4836.97),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessDataRateHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
