# Vlans

### Available Operations

* [CreateNetworkApplianceVlan](#createnetworkappliancevlan) - Add a VLAN
* [DeleteNetworkApplianceVlan](#deletenetworkappliancevlan) - Delete a VLAN from a network
* [GetNetworkApplianceVlan](#getnetworkappliancevlan) - Return a VLAN
* [GetNetworkApplianceVlans](#getnetworkappliancevlans) - List the VLANs for an MX network
* [GetNetworkApplianceVlansSettings](#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [UpdateNetworkApplianceVlan](#updatenetworkappliancevlan) - Update a VLAN
* [UpdateNetworkApplianceVlansSettings](#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network

## CreateNetworkApplianceVlan

Add a VLAN

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
    res, err := s.Vlans.CreateNetworkApplianceVlan(ctx, operations.CreateNetworkApplianceVlanRequest{
        RequestBody: operations.CreateNetworkApplianceVlanRequestBody{
            ApplianceIP: sdk.String("ducimus"),
            Cidr: sdk.String("culpa"),
            GroupPolicyID: sdk.String("eos"),
            ID: "6abb2c89-a3a2-4831-81b5-e61333a02230",
            Ipv6: &operations.CreateNetworkApplianceVlanRequestBodyIpv6{
                Enabled: sdk.Bool(false),
                PrefixAssignments: []CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                    operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "molestiae",
                                "expedita",
                            },
                            Type: operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumInternet,
                        },
                        StaticApplianceIp6: sdk.String("quod"),
                        StaticPrefix: sdk.String("ullam"),
                    },
                    operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "quam",
                                "modi",
                                "reiciendis",
                            },
                            Type: operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("ipsam"),
                        StaticPrefix: sdk.String("ducimus"),
                    },
                    operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "dolore",
                                "quod",
                            },
                            Type: operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumInternet,
                        },
                        StaticApplianceIp6: sdk.String("inventore"),
                        StaticPrefix: sdk.String("dignissimos"),
                    },
                },
            },
            MandatoryDhcp: &operations.CreateNetworkApplianceVlanRequestBodyMandatoryDhcp{
                Enabled: sdk.Bool(false),
            },
            Mask: sdk.Int64(743447),
            Name: "Dominick Turcotte",
            Subnet: sdk.String("ex"),
            TemplateVlanType: operations.CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnumUnique.ToPointer(),
        },
        NetworkID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkApplianceVlan201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkApplianceVlan

Delete a VLAN from a network

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
    res, err := s.Vlans.DeleteNetworkApplianceVlan(ctx, operations.DeleteNetworkApplianceVlanRequest{
        NetworkID: "deleniti",
        VlanID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkApplianceVlan

Return a VLAN

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
    res, err := s.Vlans.GetNetworkApplianceVlan(ctx, operations.GetNetworkApplianceVlanRequest{
        NetworkID: "eius",
        VlanID: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceVlans

List the VLANs for an MX network

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
    res, err := s.Vlans.GetNetworkApplianceVlans(ctx, operations.GetNetworkApplianceVlansRequest{
        NetworkID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVlans200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceVlansSettings

Returns the enabled status of VLANs for the network

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
    res, err := s.Vlans.GetNetworkApplianceVlansSettings(ctx, operations.GetNetworkApplianceVlansSettingsRequest{
        NetworkID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVlansSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVlan

Update a VLAN

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
    res, err := s.Vlans.UpdateNetworkApplianceVlan(ctx, operations.UpdateNetworkApplianceVlanRequest{
        RequestBody: &operations.UpdateNetworkApplianceVlanRequestBody{
            ApplianceIP: sdk.String("recusandae"),
            Cidr: sdk.String("illo"),
            DhcpBootFilename: sdk.String("saepe"),
            DhcpBootNextServer: sdk.String("aspernatur"),
            DhcpBootOptionsEnabled: sdk.Bool(false),
            DhcpHandling: operations.UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnumRelayDhcpToAnotherServer.ToPointer(),
            DhcpLeaseTime: operations.UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumOneHour.ToPointer(),
            DhcpOptions: []UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                    Code: "iure",
                    Type: operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "possimus",
                },
                operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                    Code: "earum",
                    Type: operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumIP,
                    Value: "accusantium",
                },
                operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                    Code: "blanditiis",
                    Type: operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumText,
                    Value: "accusantium",
                },
            },
            DhcpRelayServerIps: []string{
                "optio",
            },
            DNSNameservers: sdk.String("enim"),
            FixedIPAssignments: map[string]interface{}{
                "distinctio": "maxime",
            },
            GroupPolicyID: sdk.String("ab"),
            Ipv6: &operations.UpdateNetworkApplianceVlanRequestBodyIpv6{
                Enabled: sdk.Bool(false),
                PrefixAssignments: []UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                    operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "officia",
                                "eaque",
                                "ratione",
                                "assumenda",
                            },
                            Type: operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumInternet,
                        },
                        StaticApplianceIp6: sdk.String("blanditiis"),
                        StaticPrefix: sdk.String("expedita"),
                    },
                },
            },
            MandatoryDhcp: &operations.UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp{
                Enabled: sdk.Bool(false),
            },
            Mask: sdk.Int64(918035),
            Name: sdk.String("Willard Murazik"),
            ReservedIPRanges: []UpdateNetworkApplianceVlanRequestBodyReservedIPRanges{
                operations.UpdateNetworkApplianceVlanRequestBodyReservedIPRanges{
                    Comment: "architecto",
                    End: "nihil",
                    Start: "illo",
                },
            },
            Subnet: sdk.String("asperiores"),
            TemplateVlanType: operations.UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnumUnique.ToPointer(),
            VpnNatSubnet: sdk.String("nemo"),
        },
        NetworkID: "tempora",
        VlanID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVlansSettings

Enable/Disable VLANs for the given network

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
    res, err := s.Vlans.UpdateNetworkApplianceVlansSettings(ctx, operations.UpdateNetworkApplianceVlansSettingsRequest{
        RequestBody: &operations.UpdateNetworkApplianceVlansSettingsRequestBody{
            VlansEnabled: sdk.Bool(false),
        },
        NetworkID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVlansSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
