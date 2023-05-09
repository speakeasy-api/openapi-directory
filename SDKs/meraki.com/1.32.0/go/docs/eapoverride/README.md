# EapOverride

### Available Operations

* [GetNetworkWirelessSsidEapOverride](#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [UpdateNetworkWirelessSsidEapOverride](#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.

## GetNetworkWirelessSsidEapOverride

Return the EAP overridden parameters for an SSID

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
    res, err := s.EapOverride.GetNetworkWirelessSsidEapOverride(ctx, operations.GetNetworkWirelessSsidEapOverrideRequest{
        NetworkID: "modi",
        Number: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidEapOverride200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidEapOverride

Update the EAP overridden parameters for an SSID.

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
    res, err := s.EapOverride.UpdateNetworkWirelessSsidEapOverride(ctx, operations.UpdateNetworkWirelessSsidEapOverrideRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidEapOverrideRequestBody{
            EapolKey: &operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey{
                Retries: sdk.Int64(688217),
                TimeoutInMs: sdk.Int64(697355),
            },
            Identity: &operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity{
                Retries: sdk.Int64(679733),
                Timeout: sdk.Int64(495689),
            },
            MaxRetries: sdk.Int64(660329),
            Timeout: sdk.Int64(35980),
        },
        NetworkID: "ullam",
        Number: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidEapOverride200ApplicationJSONObject != nil {
        // handle response
    }
}
```
