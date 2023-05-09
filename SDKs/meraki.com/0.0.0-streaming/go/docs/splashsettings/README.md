# SplashSettings

### Available Operations

* [GetNetworkSsidSplashSettings](#getnetworkssidsplashsettings) - Display the splash page settings for the given SSID
* [UpdateNetworkSsidSplashSettings](#updatenetworkssidsplashsettings) - Modify the splash page settings for the given SSID

## GetNetworkSsidSplashSettings

Display the splash page settings for the given SSID

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
    res, err := s.SplashSettings.GetNetworkSsidSplashSettings(ctx, operations.GetNetworkSsidSplashSettingsRequest{
        NetworkID: "incidunt",
        Number: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSsidSplashSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSsidSplashSettings

Modify the splash page settings for the given SSID

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
    res, err := s.SplashSettings.UpdateNetworkSsidSplashSettings(ctx, operations.UpdateNetworkSsidSplashSettingsRequest{
        RequestBody: &operations.UpdateNetworkSsidSplashSettingsRequestBody{
            SplashURL: sdk.String("ipsam"),
            UseSplashURL: sdk.Bool(false),
        },
        NetworkID: "cupiditate",
        Number: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSsidSplashSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
