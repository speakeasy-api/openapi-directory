# OneToManyNatRules

### Available Operations

* [GetNetworkApplianceFirewallOneToManyNatRules](#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallOneToManyNatRules](#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network

## GetNetworkApplianceFirewallOneToManyNatRules

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
    res, err := s.OneToManyNatRules.GetNetworkApplianceFirewallOneToManyNatRules(ctx, operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest{
        NetworkID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallOneToManyNatRules

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
    res, err := s.OneToManyNatRules.UpdateNetworkApplianceFirewallOneToManyNatRules(ctx, operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "excepturi",
                                "dolore",
                                "dolor",
                            },
                            LocalIP: sdk.String("voluptas"),
                            LocalPort: sdk.String("aspernatur"),
                            Name: sdk.String("Ethel Dickens"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("deleniti"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "dicta",
                                "saepe",
                                "voluptas",
                                "sequi",
                            },
                            LocalIP: sdk.String("perspiciatis"),
                            LocalPort: sdk.String("voluptates"),
                            Name: sdk.String("Christine Shanahan"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("velit"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "dolor",
                                "nostrum",
                            },
                            LocalIP: sdk.String("labore"),
                            LocalPort: sdk.String("veniam"),
                            Name: sdk.String("Jonathon Weimann"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("quibusdam"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "quis",
                                "eius",
                                "officiis",
                            },
                            LocalIP: sdk.String("saepe"),
                            LocalPort: sdk.String("magnam"),
                            Name: sdk.String("Gordon Jenkins"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("beatae"),
                        },
                    },
                    PublicIP: "porro",
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnumInternet1,
                },
                operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "aperiam",
                                "ipsum",
                                "dolorum",
                                "tempora",
                            },
                            LocalIP: sdk.String("amet"),
                            LocalPort: sdk.String("quas"),
                            Name: sdk.String("Viola Heaney"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("non"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "veniam",
                                "magni",
                            },
                            LocalIP: sdk.String("labore"),
                            LocalPort: sdk.String("ducimus"),
                            Name: sdk.String("Wilma Ferry"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("modi"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "iste",
                                "delectus",
                                "eius",
                            },
                            LocalIP: sdk.String("quasi"),
                            LocalPort: sdk.String("cum"),
                            Name: sdk.String("Salvador Streich"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("excepturi"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "et",
                                "perferendis",
                                "quis",
                            },
                            LocalIP: sdk.String("molestias"),
                            LocalPort: sdk.String("non"),
                            Name: sdk.String("Dr. Grant Lockman"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("quos"),
                        },
                    },
                    PublicIP: "ex",
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnumInternet2,
                },
                operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "atque",
                                "consequatur",
                                "laudantium",
                                "occaecati",
                            },
                            LocalIP: sdk.String("ea"),
                            LocalPort: sdk.String("aliquid"),
                            Name: sdk.String("Cassandra McKenzie"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("porro"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "ut",
                                "repudiandae",
                                "voluptatem",
                                "officiis",
                            },
                            LocalIP: sdk.String("vero"),
                            LocalPort: sdk.String("eligendi"),
                            Name: sdk.String("Ian Crona DDS"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("impedit"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "aut",
                                "sequi",
                                "accusantium",
                            },
                            LocalIP: sdk.String("reprehenderit"),
                            LocalPort: sdk.String("molestiae"),
                            Name: sdk.String("Meredith Mayer"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("et"),
                        },
                    },
                    PublicIP: "itaque",
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnumInternet1,
                },
                operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "modi",
                                "possimus",
                                "temporibus",
                            },
                            LocalIP: sdk.String("incidunt"),
                            LocalPort: sdk.String("eligendi"),
                            Name: sdk.String("Jaime Champlin"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("fugit"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "officia",
                            },
                            LocalIP: sdk.String("laborum"),
                            LocalPort: sdk.String("deserunt"),
                            Name: sdk.String("Lee Von"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("dolores"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "laudantium",
                                "ratione",
                            },
                            LocalIP: sdk.String("a"),
                            LocalPort: sdk.String("maiores"),
                            Name: sdk.String("Olga Schinner"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("numquam"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "fuga",
                                "dolorum",
                                "impedit",
                            },
                            LocalIP: sdk.String("debitis"),
                            LocalPort: sdk.String("aut"),
                            Name: sdk.String("Seth Dooley"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("nulla"),
                        },
                    },
                    PublicIP: "porro",
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnumInternet2,
                },
            },
        },
        NetworkID: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
