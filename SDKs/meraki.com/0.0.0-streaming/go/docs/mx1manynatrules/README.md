# MX1ManyNATRules

### Available Operations

* [GetNetworkOneToManyNatRules](#getnetworkonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [UpdateNetworkOneToManyNatRules](#updatenetworkonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network

## GetNetworkOneToManyNatRules

Return the 1:Many NAT mapping rules for an MX network

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
    res, err := s.MX1ManyNATRules.GetNetworkOneToManyNatRules(ctx, operations.GetNetworkOneToManyNatRulesRequest{
        NetworkID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkOneToManyNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkOneToManyNatRules

Set the 1:Many NAT mapping rules for an MX network

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
    res, err := s.MX1ManyNATRules.UpdateNetworkOneToManyNatRules(ctx, operations.UpdateNetworkOneToManyNatRulesRequest{
        RequestBody: operations.UpdateNetworkOneToManyNatRulesRequestBody{
            Rules: []UpdateNetworkOneToManyNatRulesRequestBodyRules{
                operations.UpdateNetworkOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "occaecati",
                                "quos",
                            },
                            LocalIP: sdk.String("voluptatibus"),
                            LocalPort: sdk.String("tempora"),
                            Name: sdk.String("Allison Wisozk I"),
                            Protocol: operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("praesentium"),
                        },
                    },
                    PublicIP: "facilis",
                    Uplink: operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesUplinkEnumInternet1,
                },
                operations.UpdateNetworkOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "debitis",
                                "rem",
                            },
                            LocalIP: sdk.String("sit"),
                            LocalPort: sdk.String("nobis"),
                            Name: sdk.String("Floyd Harber"),
                            Protocol: operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("magni"),
                        },
                        operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "saepe",
                            },
                            LocalIP: sdk.String("numquam"),
                            LocalPort: sdk.String("veniam"),
                            Name: sdk.String("Cecelia Braun"),
                            Protocol: operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("cum"),
                        },
                    },
                    PublicIP: "laboriosam",
                    Uplink: operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesUplinkEnumInternet2,
                },
                operations.UpdateNetworkOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "hic",
                                "expedita",
                                "debitis",
                            },
                            LocalIP: sdk.String("neque"),
                            LocalPort: sdk.String("dolorum"),
                            Name: sdk.String("Brandi Padberg"),
                            Protocol: operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("atque"),
                        },
                        operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "ut",
                            },
                            LocalIP: sdk.String("fugiat"),
                            LocalPort: sdk.String("voluptatem"),
                            Name: sdk.String("Ms. Rudolph Gusikowski"),
                            Protocol: operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("voluptatum"),
                        },
                        operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "repudiandae",
                                "corporis",
                                "et",
                            },
                            LocalIP: sdk.String("blanditiis"),
                            LocalPort: sdk.String("ex"),
                            Name: sdk.String("Karen Kautzer"),
                            Protocol: operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("consequatur"),
                        },
                    },
                    PublicIP: "incidunt",
                    Uplink: operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesUplinkEnumInternet2,
                },
                operations.UpdateNetworkOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "dicta",
                                "architecto",
                                "occaecati",
                            },
                            LocalIP: sdk.String("labore"),
                            LocalPort: sdk.String("quidem"),
                            Name: sdk.String("Cameron Reilly"),
                            Protocol: operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("amet"),
                        },
                    },
                    PublicIP: "deserunt",
                    Uplink: operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesUplinkEnumInternet1,
                },
            },
        },
        NetworkID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkOneToManyNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
