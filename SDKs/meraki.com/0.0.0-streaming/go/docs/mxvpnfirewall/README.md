# MXVPNFirewall

### Available Operations

* [GetOrganizationVpnFirewallRules](#getorganizationvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [UpdateOrganizationVpnFirewallRules](#updateorganizationvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

## GetOrganizationVpnFirewallRules

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
    res, err := s.MXVPNFirewall.GetOrganizationVpnFirewallRules(ctx, operations.GetOrganizationVpnFirewallRulesRequest{
        OrganizationID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationVpnFirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationVpnFirewallRules

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
    res, err := s.MXVPNFirewall.UpdateOrganizationVpnFirewallRules(ctx, operations.UpdateOrganizationVpnFirewallRulesRequest{
        RequestBody: &operations.UpdateOrganizationVpnFirewallRulesRequestBody{
            Rules: []UpdateOrganizationVpnFirewallRulesRequestBodyRules{
                operations.UpdateOrganizationVpnFirewallRulesRequestBodyRules{
                    Comment: sdk.String("reiciendis"),
                    DestCidr: "doloremque",
                    DestPort: sdk.String("repudiandae"),
                    Policy: operations.UpdateOrganizationVpnFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateOrganizationVpnFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "beatae",
                    SrcPort: sdk.String("dolores"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateOrganizationVpnFirewallRulesRequestBodyRules{
                    Comment: sdk.String("enim"),
                    DestCidr: "laboriosam",
                    DestPort: sdk.String("velit"),
                    Policy: operations.UpdateOrganizationVpnFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateOrganizationVpnFirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "magnam",
                    SrcPort: sdk.String("saepe"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        OrganizationID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationVpnFirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
