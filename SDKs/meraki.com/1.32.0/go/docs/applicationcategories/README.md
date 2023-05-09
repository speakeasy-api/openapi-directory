# ApplicationCategories

### Available Operations

* [GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories](#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [GetNetworkTrafficShapingApplicationCategories](#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.

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
    res, err := s.ApplicationCategories.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories(ctx, operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest{
        NetworkID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkTrafficShapingApplicationCategories

Returns the application categories for traffic shaping rules.

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
    res, err := s.ApplicationCategories.GetNetworkTrafficShapingApplicationCategories(ctx, operations.GetNetworkTrafficShapingApplicationCategoriesRequest{
        NetworkID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTrafficShapingApplicationCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```
