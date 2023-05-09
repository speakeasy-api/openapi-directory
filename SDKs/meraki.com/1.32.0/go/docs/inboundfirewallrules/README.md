# InboundFirewallRules

### Available Operations

* [GetNetworkApplianceFirewallInboundFirewallRules](#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [UpdateNetworkApplianceFirewallInboundFirewallRules](#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network

## GetNetworkApplianceFirewallInboundFirewallRules

Return the inbound firewall rules for an MX network

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
    res, err := s.InboundFirewallRules.GetNetworkApplianceFirewallInboundFirewallRules(ctx, operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest{
        NetworkID: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallInboundFirewallRules

Update the inbound firewall rules of an MX network

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
    res, err := s.InboundFirewallRules.UpdateNetworkApplianceFirewallInboundFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("eveniet"),
                    DestCidr: "debitis",
                    DestPort: sdk.String("inventore"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "repellendus",
                    SrcPort: sdk.String("dignissimos"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("sed"),
                    DestCidr: "officia",
                    DestPort: sdk.String("voluptatum"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "voluptatum",
                    SrcPort: sdk.String("ab"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("rerum"),
                    DestCidr: "quis",
                    DestPort: sdk.String("corrupti"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "ex",
                    SrcPort: sdk.String("quos"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("magni"),
                    DestCidr: "repudiandae",
                    DestPort: sdk.String("sunt"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "illum",
                    SrcPort: sdk.String("facilis"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        NetworkID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
