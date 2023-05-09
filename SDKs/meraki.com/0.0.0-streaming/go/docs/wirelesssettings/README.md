# WirelessSettings

### Available Operations

* [GetNetworkWirelessSettings](#getnetworkwirelesssettings) - Return the wireless settings for a network
* [UpdateNetworkWirelessSettings](#updatenetworkwirelesssettings) - Update the wireless settings for a network

## GetNetworkWirelessSettings

Return the wireless settings for a network

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
    res, err := s.WirelessSettings.GetNetworkWirelessSettings(ctx, operations.GetNetworkWirelessSettingsRequest{
        NetworkID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSettings

Update the wireless settings for a network

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
    res, err := s.WirelessSettings.UpdateNetworkWirelessSettings(ctx, operations.UpdateNetworkWirelessSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessSettingsRequestBody{
            Ipv6BridgeEnabled: sdk.Bool(false),
            LedLightsOn: sdk.Bool(false),
            LocationAnalyticsEnabled: sdk.Bool(false),
            MeshingEnabled: sdk.Bool(false),
            UpgradeStrategy: operations.UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnumMinimizeUpgradeTime.ToPointer(),
        },
        NetworkID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
