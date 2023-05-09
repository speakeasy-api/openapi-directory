# MXL7ApplicationCategories

### Available Operations

* [GetNetworkL7FirewallRulesApplicationCategories](#getnetworkl7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network

## GetNetworkL7FirewallRulesApplicationCategories

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
    res, err := s.MXL7ApplicationCategories.GetNetworkL7FirewallRulesApplicationCategories(ctx, operations.GetNetworkL7FirewallRulesApplicationCategoriesRequest{
        NetworkID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkL7FirewallRulesApplicationCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```
