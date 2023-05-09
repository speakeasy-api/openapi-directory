# InboundCellularFirewallRules

### Available Operations

* [GetNetworkApplianceFirewallInboundCellularFirewallRules](#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [UpdateNetworkApplianceFirewallInboundCellularFirewallRules](#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network

## GetNetworkApplianceFirewallInboundCellularFirewallRules

Return the inbound cellular firewall rules for an MX network

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
    res, err := s.InboundCellularFirewallRules.GetNetworkApplianceFirewallInboundCellularFirewallRules(ctx, operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest{
        NetworkID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallInboundCellularFirewallRules

Update the inbound cellular firewall rules of an MX network

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
    res, err := s.InboundCellularFirewallRules.UpdateNetworkApplianceFirewallInboundCellularFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("harum"),
                    DestCidr: "placeat",
                    DestPort: sdk.String("debitis"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "repellat",
                    SrcPort: sdk.String("eius"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("magnam"),
                    DestCidr: "dolore",
                    DestPort: sdk.String("dolores"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "voluptates",
                    SrcPort: sdk.String("unde"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
        },
        NetworkID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
