# MX11NATRules

### Available Operations

* [GetNetworkOneToOneNatRules](#getnetworkonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [UpdateNetworkOneToOneNatRules](#updatenetworkonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network

## GetNetworkOneToOneNatRules

Return the 1:1 NAT mapping rules for an MX network

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
    res, err := s.MX11NATRules.GetNetworkOneToOneNatRules(ctx, operations.GetNetworkOneToOneNatRulesRequest{
        NetworkID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkOneToOneNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkOneToOneNatRules

Set the 1:1 NAT mapping rules for an MX network

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
    res, err := s.MX11NATRules.UpdateNetworkOneToOneNatRules(ctx, operations.UpdateNetworkOneToOneNatRulesRequest{
        RequestBody: operations.UpdateNetworkOneToOneNatRulesRequestBody{
            Rules: []UpdateNetworkOneToOneNatRulesRequestBodyRules{
                operations.UpdateNetworkOneToOneNatRulesRequestBodyRules{
                    AllowedInbound: []UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound{
                        operations.UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "reiciendis",
                            },
                            DestinationPorts: []string{
                                "asperiores",
                            },
                            Protocol: operations.UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumTCP.ToPointer(),
                        },
                        operations.UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "expedita",
                                "ab",
                            },
                            DestinationPorts: []string{
                                "dolore",
                                "laborum",
                                "sed",
                            },
                            Protocol: operations.UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumIcmpPing.ToPointer(),
                        },
                        operations.UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "quidem",
                                "explicabo",
                            },
                            DestinationPorts: []string{
                                "unde",
                                "architecto",
                            },
                            Protocol: operations.UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumIcmpPing.ToPointer(),
                        },
                    },
                    LanIP: "sapiente",
                    Name: sdk.String("Ms. Gregory Wisoky"),
                    PublicIP: sdk.String("incidunt"),
                    Uplink: operations.UpdateNetworkOneToOneNatRulesRequestBodyRulesUplinkEnumInternet1.ToPointer(),
                },
            },
        },
        NetworkID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkOneToOneNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
