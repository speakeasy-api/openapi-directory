# MGPortForwardingRules

### Available Operations

* [GetDeviceCellularGatewaySettingsPortForwardingRules](#getdevicecellulargatewaysettingsportforwardingrules) - Returns the port forwarding rules for a single MG.
* [UpdateDeviceCellularGatewaySettingsPortForwardingRules](#updatedevicecellulargatewaysettingsportforwardingrules) - Updates the port forwarding rules for a single MG.

## GetDeviceCellularGatewaySettingsPortForwardingRules

Returns the port forwarding rules for a single MG.

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
    res, err := s.MGPortForwardingRules.GetDeviceCellularGatewaySettingsPortForwardingRules(ctx, operations.GetDeviceCellularGatewaySettingsPortForwardingRulesRequest{
        Serial: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCellularGatewaySettingsPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCellularGatewaySettingsPortForwardingRules

Updates the port forwarding rules for a single MG.

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
    res, err := s.MGPortForwardingRules.UpdateDeviceCellularGatewaySettingsPortForwardingRules(ctx, operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequest{
        RequestBody: &operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBody{
            Rules: []UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBodyRules{
                operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBodyRules{
                    Access: "labore",
                    AllowedIps: []string{
                        "adipisci",
                    },
                    LanIP: "fuga",
                    LocalPort: "id",
                    Name: sdk.String("Sheila Nader"),
                    Protocol: "totam",
                    PublicPort: "fugiat",
                },
                operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBodyRules{
                    Access: "vel",
                    AllowedIps: []string{
                        "quos",
                        "vel",
                    },
                    LanIP: "labore",
                    LocalPort: "possimus",
                    Name: sdk.String("Felipe Johns"),
                    Protocol: "reiciendis",
                    PublicPort: "assumenda",
                },
                operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBodyRules{
                    Access: "nemo",
                    AllowedIps: []string{
                        "aliquid",
                        "aperiam",
                        "cum",
                        "consectetur",
                    },
                    LanIP: "in",
                    LocalPort: "exercitationem",
                    Name: sdk.String("Carroll Gerhold"),
                    Protocol: "reiciendis",
                    PublicPort: "quidem",
                },
                operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequestBodyRules{
                    Access: "saepe",
                    AllowedIps: []string{
                        "dolore",
                        "sunt",
                        "asperiores",
                        "adipisci",
                    },
                    LanIP: "non",
                    LocalPort: "amet",
                    Name: sdk.String("Courtney Wiegand"),
                    Protocol: "corporis",
                    PublicPort: "harum",
                },
            },
        },
        Serial: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCellularGatewaySettingsPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
