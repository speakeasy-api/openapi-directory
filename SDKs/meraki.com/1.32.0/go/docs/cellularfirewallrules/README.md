# CellularFirewallRules

### Available Operations

* [GetNetworkApplianceFirewallCellularFirewallRules](#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [UpdateNetworkApplianceFirewallCellularFirewallRules](#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network

## GetNetworkApplianceFirewallCellularFirewallRules

Return the cellular firewall rules for an MX network

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
    res, err := s.CellularFirewallRules.GetNetworkApplianceFirewallCellularFirewallRules(ctx, operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest{
        NetworkID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallCellularFirewallRules

Update the cellular firewall rules of an MX network

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
    res, err := s.CellularFirewallRules.UpdateNetworkApplianceFirewallCellularFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("doloribus"),
                    DestCidr: "omnis",
                    DestPort: sdk.String("quam"),
                    Policy: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "sequi",
                    SrcPort: sdk.String("quis"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("commodi"),
                    DestCidr: "vel",
                    DestPort: sdk.String("rem"),
                    Policy: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "perspiciatis",
                    SrcPort: sdk.String("fugit"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("itaque"),
                    DestCidr: "unde",
                    DestPort: sdk.String("cumque"),
                    Policy: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "temporibus",
                    SrcPort: sdk.String("minus"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("minima"),
                    DestCidr: "a",
                    DestPort: sdk.String("beatae"),
                    Policy: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "facere",
                    SrcPort: sdk.String("earum"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
        },
        NetworkID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
