# MXL7Firewall

### Available Operations

* [GetNetworkL7FirewallRules](#getnetworkl7firewallrules) - List the MX L7 firewall rules for an MX network
* [UpdateNetworkL7FirewallRules](#updatenetworkl7firewallrules) - Update the MX L7 firewall rules for an MX network

## GetNetworkL7FirewallRules

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
    res, err := s.MXL7Firewall.GetNetworkL7FirewallRules(ctx, operations.GetNetworkL7FirewallRulesRequest{
        NetworkID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkL7FirewallRules

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
    res, err := s.MXL7Firewall.UpdateNetworkL7FirewallRules(ctx, operations.UpdateNetworkL7FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkL7FirewallRulesRequestBody{
            Rules: []UpdateNetworkL7FirewallRulesRequestBodyRules{
                operations.UpdateNetworkL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkL7FirewallRulesRequestBodyRulesTypeEnumApplication.ToPointer(),
                    Value: sdk.String("ex"),
                },
                operations.UpdateNetworkL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkL7FirewallRulesRequestBodyRulesTypeEnumPort.ToPointer(),
                    Value: sdk.String("corrupti"),
                },
            },
        },
        NetworkID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
