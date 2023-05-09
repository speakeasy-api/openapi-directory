# VpnFirewallRules

### Available Operations

* [GetOrganizationApplianceVpnVpnFirewallRules](#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [UpdateOrganizationApplianceVpnVpnFirewallRules](#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

## GetOrganizationApplianceVpnVpnFirewallRules

Return the firewall rules for an organization's site-to-site VPN

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
    res, err := s.VpnFirewallRules.GetOrganizationApplianceVpnVpnFirewallRules(ctx, operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest{
        OrganizationID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationApplianceVpnVpnFirewallRules

Update the firewall rules of an organization's site-to-site VPN

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
    res, err := s.VpnFirewallRules.UpdateOrganizationApplianceVpnVpnFirewallRules(ctx, operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest{
        RequestBody: &operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody{
            Rules: []UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules{
                operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules{
                    Comment: sdk.String("molestias"),
                    DestCidr: "distinctio",
                    DestPort: sdk.String("tempora"),
                    Policy: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "quidem",
                    SrcPort: sdk.String("similique"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules{
                    Comment: sdk.String("non"),
                    DestCidr: "ipsa",
                    DestPort: sdk.String("magnam"),
                    Policy: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "quidem",
                    SrcPort: sdk.String("facere"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        OrganizationID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
