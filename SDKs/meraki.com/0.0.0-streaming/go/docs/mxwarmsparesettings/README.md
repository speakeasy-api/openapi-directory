# MXWarmSpareSettings

### Available Operations

* [GetNetworkWarmSpareSettings](#getnetworkwarmsparesettings) - Return MX warm spare settings
* [SwapNetworkWarmSpare](#swapnetworkwarmspare) - Swap MX primary and warm spare appliances
* [UpdateNetworkWarmSpareSettings](#updatenetworkwarmsparesettings) - Update MX warm spare settings

## GetNetworkWarmSpareSettings

Return MX warm spare settings

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
    res, err := s.MXWarmSpareSettings.GetNetworkWarmSpareSettings(ctx, operations.GetNetworkWarmSpareSettingsRequest{
        NetworkID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWarmSpareSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SwapNetworkWarmSpare

Swap MX primary and warm spare appliances

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
    res, err := s.MXWarmSpareSettings.SwapNetworkWarmSpare(ctx, operations.SwapNetworkWarmSpareRequest{
        NetworkID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwapNetworkWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWarmSpareSettings

Update MX warm spare settings

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
    res, err := s.MXWarmSpareSettings.UpdateNetworkWarmSpareSettings(ctx, operations.UpdateNetworkWarmSpareSettingsRequest{
        RequestBody: operations.UpdateNetworkWarmSpareSettingsRequestBody{
            Enabled: false,
            SpareSerial: sdk.String("at"),
            UplinkMode: sdk.String("impedit"),
            VirtualIp1: sdk.String("eos"),
            VirtualIp2: sdk.String("sapiente"),
        },
        NetworkID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWarmSpareSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
