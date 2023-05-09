# OneToOneNatRules

### Available Operations

* [GetNetworkApplianceFirewallOneToOneNatRules](#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallOneToOneNatRules](#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network

## GetNetworkApplianceFirewallOneToOneNatRules

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
    res, err := s.OneToOneNatRules.GetNetworkApplianceFirewallOneToOneNatRules(ctx, operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest{
        NetworkID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallOneToOneNatRules

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
    res, err := s.OneToOneNatRules.UpdateNetworkApplianceFirewallOneToOneNatRules(ctx, operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                    AllowedInbound: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "assumenda",
                                "in",
                            },
                            DestinationPorts: []string{
                                "odio",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumIcmpPing.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "animi",
                            },
                            DestinationPorts: []string{
                                "doloribus",
                                "labore",
                                "qui",
                                "laudantium",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumAny.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "quae",
                                "nulla",
                            },
                            DestinationPorts: []string{
                                "repellendus",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP.ToPointer(),
                        },
                    },
                    LanIP: "a",
                    Name: sdk.String("Ida Schneider PhD"),
                    PublicIP: sdk.String("adipisci"),
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet2.ToPointer(),
                },
                operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                    AllowedInbound: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "facere",
                            },
                            DestinationPorts: []string{
                                "debitis",
                                "hic",
                                "accusamus",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "illo",
                            },
                            DestinationPorts: []string{
                                "sit",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumIcmpPing.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "animi",
                                "voluptates",
                            },
                            DestinationPorts: []string{
                                "nam",
                                "ipsa",
                                "repellat",
                                "corporis",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumTCP.ToPointer(),
                        },
                    },
                    LanIP: "saepe",
                    Name: sdk.String("Garrett Schulist"),
                    PublicIP: sdk.String("consectetur"),
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet1.ToPointer(),
                },
                operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                    AllowedInbound: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "provident",
                            },
                            DestinationPorts: []string{
                                "deserunt",
                                "ipsam",
                                "corporis",
                                "unde",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumIcmpPing.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "accusamus",
                                "debitis",
                            },
                            DestinationPorts: []string{
                                "voluptates",
                                "harum",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "itaque",
                                "nisi",
                            },
                            DestinationPorts: []string{
                                "deleniti",
                                "unde",
                                "esse",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP.ToPointer(),
                        },
                    },
                    LanIP: "eaque",
                    Name: sdk.String("Evelyn Murray"),
                    PublicIP: sdk.String("impedit"),
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet1.ToPointer(),
                },
            },
        },
        NetworkID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
