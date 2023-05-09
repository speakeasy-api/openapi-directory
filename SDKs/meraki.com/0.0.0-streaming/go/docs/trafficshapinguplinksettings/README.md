# TrafficShapingUplinkSettings

### Available Operations

* [GetNetworkUplinkSettings](#getnetworkuplinksettings) - Returns the uplink settings for your MX network.
* [UpdateNetworkUplinkSettings](#updatenetworkuplinksettings) - Updates the uplink settings for your MX network.

## GetNetworkUplinkSettings

Returns the uplink settings for your MX network.

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
    res, err := s.TrafficShapingUplinkSettings.GetNetworkUplinkSettings(ctx, operations.GetNetworkUplinkSettingsRequest{
        NetworkID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkUplinkSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkUplinkSettings

Updates the uplink settings for your MX network.

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
    res, err := s.TrafficShapingUplinkSettings.UpdateNetworkUplinkSettings(ctx, operations.UpdateNetworkUplinkSettingsRequest{
        RequestBody: &operations.UpdateNetworkUplinkSettingsRequestBody{
            BandwidthLimits: &operations.UpdateNetworkUplinkSettingsRequestBodyBandwidthLimits{
                Cellular: &operations.UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsCellular{
                    LimitDown: sdk.Int64(460909),
                    LimitUp: sdk.Int64(548849),
                },
                Wan1: &operations.UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan1{
                    LimitDown: sdk.Int64(684799),
                    LimitUp: sdk.Int64(815225),
                },
                Wan2: &operations.UpdateNetworkUplinkSettingsRequestBodyBandwidthLimitsWan2{
                    LimitDown: sdk.Int64(773659),
                    LimitUp: sdk.Int64(98610),
                },
            },
        },
        NetworkID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkUplinkSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
