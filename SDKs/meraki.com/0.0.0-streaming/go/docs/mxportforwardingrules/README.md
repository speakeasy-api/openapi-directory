# MXPortForwardingRules

### Available Operations

* [GetNetworkPortForwardingRules](#getnetworkportforwardingrules) - Return the port forwarding rules for an MX network
* [UpdateNetworkPortForwardingRules](#updatenetworkportforwardingrules) - Update the port forwarding rules for an MX network

## GetNetworkPortForwardingRules

Return the port forwarding rules for an MX network

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
    res, err := s.MXPortForwardingRules.GetNetworkPortForwardingRules(ctx, operations.GetNetworkPortForwardingRulesRequest{
        NetworkID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkPortForwardingRules

Update the port forwarding rules for an MX network

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
    res, err := s.MXPortForwardingRules.UpdateNetworkPortForwardingRules(ctx, operations.UpdateNetworkPortForwardingRulesRequest{
        RequestBody: operations.UpdateNetworkPortForwardingRulesRequestBody{
            Rules: []UpdateNetworkPortForwardingRulesRequestBodyRules{
                operations.UpdateNetworkPortForwardingRulesRequestBodyRules{
                    AllowedIps: []string{
                        "rem",
                        "aliquam",
                        "ad",
                    },
                    LanIP: "repellat",
                    LocalPort: "alias",
                    Name: sdk.String("Katrina Kovacek"),
                    Protocol: operations.UpdateNetworkPortForwardingRulesRequestBodyRulesProtocolEnumTCP,
                    PublicPort: "maiores",
                    Uplink: operations.UpdateNetworkPortForwardingRulesRequestBodyRulesUplinkEnumInternet2.ToPointer(),
                },
                operations.UpdateNetworkPortForwardingRulesRequestBodyRules{
                    AllowedIps: []string{
                        "id",
                    },
                    LanIP: "minima",
                    LocalPort: "dolore",
                    Name: sdk.String("Danny Berge"),
                    Protocol: operations.UpdateNetworkPortForwardingRulesRequestBodyRulesProtocolEnumTCP,
                    PublicPort: "molestiae",
                    Uplink: operations.UpdateNetworkPortForwardingRulesRequestBodyRulesUplinkEnumInternet1.ToPointer(),
                },
                operations.UpdateNetworkPortForwardingRulesRequestBodyRules{
                    AllowedIps: []string{
                        "culpa",
                        "adipisci",
                    },
                    LanIP: "debitis",
                    LocalPort: "laudantium",
                    Name: sdk.String("Vivian Ward"),
                    Protocol: operations.UpdateNetworkPortForwardingRulesRequestBodyRulesProtocolEnumTCP,
                    PublicPort: "eum",
                    Uplink: operations.UpdateNetworkPortForwardingRulesRequestBodyRulesUplinkEnumInternet2.ToPointer(),
                },
            },
        },
        NetworkID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
