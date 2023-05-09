# MXL3InboundFirewall

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
    res, err := s.MXL3InboundFirewall.GetNetworkApplianceFirewallInboundFirewallRules(ctx, operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest{
        NetworkID: "reiciendis",
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
    res, err := s.MXL3InboundFirewall.UpdateNetworkApplianceFirewallInboundFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("repellendus"),
                    DestCidr: "delectus",
                    DestPort: sdk.String("voluptates"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "quidem",
                    SrcPort: sdk.String("reprehenderit"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("facere"),
                    DestCidr: "fuga",
                    DestPort: sdk.String("praesentium"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumIcmp,
                    SrcCidr: "voluptatem",
                    SrcPort: sdk.String("quisquam"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("repudiandae"),
                    DestCidr: "quasi",
                    DestPort: sdk.String("atque"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "totam",
                    SrcPort: sdk.String("suscipit"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        NetworkID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
