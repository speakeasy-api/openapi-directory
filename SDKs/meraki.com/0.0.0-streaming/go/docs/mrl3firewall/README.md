# MRL3Firewall

### Available Operations

* [GetNetworkSsidL3FirewallRules](#getnetworkssidl3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [UpdateNetworkSsidL3FirewallRules](#updatenetworkssidl3firewallrules) - Update the L3 firewall rules of an SSID on an MR network

## GetNetworkSsidL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

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
    res, err := s.MRL3Firewall.GetNetworkSsidL3FirewallRules(ctx, operations.GetNetworkSsidL3FirewallRulesRequest{
        NetworkID: "ipsa",
        Number: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSsidL3FirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkSsidL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

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
    res, err := s.MRL3Firewall.UpdateNetworkSsidL3FirewallRules(ctx, operations.UpdateNetworkSsidL3FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkSsidL3FirewallRulesRequestBody{
            AllowLanAccess: sdk.Bool(false),
            Rules: []UpdateNetworkSsidL3FirewallRulesRequestBodyRules{
                operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("vitae"),
                    DestCidr: "accusamus",
                    DestPort: sdk.String("similique"),
                    Policy: operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRulesProtocolEnumAny,
                },
                operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("voluptas"),
                    DestCidr: "voluptas",
                    DestPort: sdk.String("voluptas"),
                    Policy: operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRulesProtocolEnumTCP,
                },
                operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("dolorum"),
                    DestCidr: "adipisci",
                    DestPort: sdk.String("minus"),
                    Policy: operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkSsidL3FirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                },
            },
        },
        NetworkID: "in",
        Number: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSsidL3FirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
