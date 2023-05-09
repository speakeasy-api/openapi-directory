# L3FirewallRules

### Available Operations

* [GetNetworkApplianceFirewallL3FirewallRules](#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [GetNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [UpdateNetworkApplianceFirewallL3FirewallRules](#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [UpdateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network

## GetNetworkApplianceFirewallL3FirewallRules

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
    res, err := s.L3FirewallRules.GetNetworkApplianceFirewallL3FirewallRules(ctx, operations.GetNetworkApplianceFirewallL3FirewallRulesRequest{
        NetworkID: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidFirewallL3FirewallRules

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
    res, err := s.L3FirewallRules.GetNetworkWirelessSsidFirewallL3FirewallRules(ctx, operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest{
        NetworkID: "porro",
        Number: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallL3FirewallRules

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
    res, err := s.L3FirewallRules.UpdateNetworkApplianceFirewallL3FirewallRules(ctx, operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("eos"),
                    DestCidr: "tenetur",
                    DestPort: sdk.String("omnis"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "et",
                    SrcPort: sdk.String("fugiat"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("provident"),
                    DestCidr: "voluptatem",
                    DestPort: sdk.String("earum"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp,
                    SrcCidr: "ipsum",
                    SrcPort: sdk.String("esse"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("odio"),
                    DestCidr: "commodi",
                    DestPort: sdk.String("libero"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "dignissimos",
                    SrcPort: sdk.String("ex"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("molestiae"),
                    DestCidr: "ducimus",
                    DestPort: sdk.String("voluptatibus"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "nostrum",
                    SrcPort: sdk.String("doloremque"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        NetworkID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidFirewallL3FirewallRules

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
    res, err := s.L3FirewallRules.UpdateNetworkWirelessSsidFirewallL3FirewallRules(ctx, operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody{
            AllowLanAccess: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("laboriosam"),
                    DestCidr: "debitis",
                    DestPort: sdk.String("magnam"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumAny,
                },
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("totam"),
                    DestCidr: "hic",
                    DestPort: sdk.String("nam"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumUDP,
                },
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("officia"),
                    DestCidr: "repudiandae",
                    DestPort: sdk.String("recusandae"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                },
            },
        },
        NetworkID: "cumque",
        Number: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
