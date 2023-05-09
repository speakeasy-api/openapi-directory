# MXL3OutboundFirewall

### Available Operations

* [GetNetworkL3FirewallRules](#getnetworkl3firewallrules) - Return the L3 firewall rules for an MX network
* [UpdateNetworkL3FirewallRules](#updatenetworkl3firewallrules) - Update the L3 firewall rules of an MX network

## GetNetworkL3FirewallRules

Return the L3 firewall rules for an MX network

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
    res, err := s.MXL3OutboundFirewall.GetNetworkL3FirewallRules(ctx, operations.GetNetworkL3FirewallRulesRequest{
        NetworkID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkL3FirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkL3FirewallRules

Update the L3 firewall rules of an MX network

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
    res, err := s.MXL3OutboundFirewall.UpdateNetworkL3FirewallRules(ctx, operations.UpdateNetworkL3FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkL3FirewallRulesRequestBody{
            Rules: []UpdateNetworkL3FirewallRulesRequestBodyRules{
                operations.UpdateNetworkL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("esse"),
                    DestCidr: "amet",
                    DestPort: sdk.String("assumenda"),
                    Policy: operations.UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "error",
                    SrcPort: sdk.String("officiis"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        NetworkID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkL3FirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
