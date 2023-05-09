# L7FirewallRules

### Available Operations

* [GetNetworkApplianceFirewallL7FirewallRules](#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories](#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [GetNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [UpdateNetworkApplianceFirewallL7FirewallRules](#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [UpdateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network

## GetNetworkApplianceFirewallL7FirewallRules

List the MX L7 firewall rules for an MX network

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
    res, err := s.L7FirewallRules.GetNetworkApplianceFirewallL7FirewallRules(ctx, operations.GetNetworkApplianceFirewallL7FirewallRulesRequest{
        NetworkID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories

Return the L7 firewall application categories and their associated applications for an MX network

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
    res, err := s.L7FirewallRules.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories(ctx, operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest{
        NetworkID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidFirewallL7FirewallRules

Return the L7 firewall rules for an SSID on an MR network

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
    res, err := s.L7FirewallRules.GetNetworkWirelessSsidFirewallL7FirewallRules(ctx, operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest{
        NetworkID: "quae",
        Number: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallL7FirewallRules

Update the MX L7 firewall rules for an MX network

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
    res, err := s.L7FirewallRules.UpdateNetworkApplianceFirewallL7FirewallRules(ctx, operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumHost.ToPointer(),
                    Value: sdk.String("quasi"),
                },
                operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumHost.ToPointer(),
                    Value: sdk.String("maxime"),
                },
                operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumHost.ToPointer(),
                    Value: sdk.String("neque"),
                },
            },
        },
        NetworkID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidFirewallL7FirewallRules

Update the L7 firewall rules of an SSID on an MR network

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
    res, err := s.L7FirewallRules.UpdateNetworkWirelessSsidFirewallL7FirewallRules(ctx, operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody{
            Rules: []UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumIPRange.ToPointer(),
                    Value: sdk.String("est"),
                },
            },
        },
        NetworkID: "soluta",
        Number: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
