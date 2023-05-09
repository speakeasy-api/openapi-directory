# PortForwardingRules

### Available Operations

* [GetDeviceCellularGatewayPortForwardingRules](#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [GetNetworkApplianceFirewallPortForwardingRules](#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [UpdateDeviceCellularGatewayPortForwardingRules](#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [UpdateNetworkApplianceFirewallPortForwardingRules](#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network

## GetDeviceCellularGatewayPortForwardingRules

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
    res, err := s.PortForwardingRules.GetDeviceCellularGatewayPortForwardingRules(ctx, operations.GetDeviceCellularGatewayPortForwardingRulesRequest{
        Serial: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallPortForwardingRules

Return the port forwarding rules for an MX network

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
    res, err := s.PortForwardingRules.GetNetworkApplianceFirewallPortForwardingRules(ctx, operations.GetNetworkApplianceFirewallPortForwardingRulesRequest{
        NetworkID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCellularGatewayPortForwardingRules

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
    res, err := s.PortForwardingRules.UpdateDeviceCellularGatewayPortForwardingRules(ctx, operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest{
        RequestBody: &operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBody{
            Rules: []UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules{
                operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules{
                    Access: "vitae",
                    AllowedIps: []string{
                        "labore",
                        "enim",
                        "ut",
                        "assumenda",
                    },
                    LanIP: "dolores",
                    LocalPort: "magni",
                    Name: sdk.String("Earnest Friesen"),
                    Protocol: "minus",
                    PublicPort: "similique",
                },
            },
        },
        Serial: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallPortForwardingRules

Update the port forwarding rules for an MX network

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
    res, err := s.PortForwardingRules.UpdateNetworkApplianceFirewallPortForwardingRules(ctx, operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules{
                    AllowedIps: []string{
                        "pariatur",
                        "laudantium",
                        "neque",
                    },
                    LanIP: "rerum",
                    LocalPort: "occaecati",
                    Name: sdk.String("Shaun Koelpin"),
                    Protocol: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnumTCP,
                    PublicPort: "ipsum",
                    Uplink: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnumInternet1.ToPointer(),
                },
                operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules{
                    AllowedIps: []string{
                        "iste",
                    },
                    LanIP: "optio",
                    LocalPort: "excepturi",
                    Name: sdk.String("Becky Rosenbaum"),
                    Protocol: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnumTCP,
                    PublicPort: "laborum",
                    Uplink: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnumInternet2.ToPointer(),
                },
            },
        },
        NetworkID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
