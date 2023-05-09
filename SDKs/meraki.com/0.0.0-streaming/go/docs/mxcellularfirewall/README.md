# MXCellularFirewall

### Available Operations

* [GetNetworkCellularFirewallRules](#getnetworkcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [UpdateNetworkCellularFirewallRules](#updatenetworkcellularfirewallrules) - Update the cellular firewall rules of an MX network

## GetNetworkCellularFirewallRules

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
    res, err := s.MXCellularFirewall.GetNetworkCellularFirewallRules(ctx, operations.GetNetworkCellularFirewallRulesRequest{
        NetworkID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCellularFirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkCellularFirewallRules

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
    res, err := s.MXCellularFirewall.UpdateNetworkCellularFirewallRules(ctx, operations.UpdateNetworkCellularFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkCellularFirewallRulesRequestBody{
            Rules: []UpdateNetworkCellularFirewallRulesRequestBodyRules{
                operations.UpdateNetworkCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("perspiciatis"),
                    DestCidr: "in",
                    DestPort: sdk.String("adipisci"),
                    Policy: operations.UpdateNetworkCellularFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkCellularFirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "consequuntur",
                    SrcPort: sdk.String("fugit"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("id"),
                    DestCidr: "quis",
                    DestPort: sdk.String("reprehenderit"),
                    Policy: operations.UpdateNetworkCellularFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkCellularFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "corporis",
                    SrcPort: sdk.String("quidem"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("eveniet"),
                    DestCidr: "non",
                    DestPort: sdk.String("vero"),
                    Policy: operations.UpdateNetworkCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkCellularFirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "ipsa",
                    SrcPort: sdk.String("totam"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("quae"),
                    DestCidr: "molestiae",
                    DestPort: sdk.String("eveniet"),
                    Policy: operations.UpdateNetworkCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkCellularFirewallRulesRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "iure",
                    SrcPort: sdk.String("necessitatibus"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
        },
        NetworkID: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularFirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
