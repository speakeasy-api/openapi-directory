# BonjourForwarding

### Available Operations

* [GetNetworkWirelessSsidBonjourForwarding](#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [UpdateNetworkWirelessSsidBonjourForwarding](#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID

## GetNetworkWirelessSsidBonjourForwarding

List the Bonjour forwarding setting and rules for the SSID

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
    res, err := s.BonjourForwarding.GetNetworkWirelessSsidBonjourForwarding(ctx, operations.GetNetworkWirelessSsidBonjourForwardingRequest{
        NetworkID: "maxime",
        Number: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidBonjourForwarding

Update the bonjour forwarding setting and rules for the SSID

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
    res, err := s.BonjourForwarding.UpdateNetworkWirelessSsidBonjourForwarding(ctx, operations.UpdateNetworkWirelessSsidBonjourForwardingRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBody{
            Enabled: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                    Description: sdk.String("provident"),
                    Services: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum{
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumAfp,
                    },
                    VlanID: "magnam",
                },
            },
        },
        NetworkID: "repellat",
        Number: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != nil {
        // handle response
    }
}
```
