# UplinkSelection

### Available Operations

* [GetNetworkApplianceTrafficShapingUplinkSelection](#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [UpdateNetworkApplianceTrafficShapingUplinkSelection](#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network

## GetNetworkApplianceTrafficShapingUplinkSelection

Show uplink selection settings for an MX network

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
    res, err := s.UplinkSelection.GetNetworkApplianceTrafficShapingUplinkSelection(ctx, operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest{
        NetworkID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingUplinkSelection

Update uplink selection settings for an MX network

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
    res, err := s.UplinkSelection.UpdateNetworkApplianceTrafficShapingUplinkSelection(ctx, operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody{
            ActiveActiveAutoVpnEnabled: sdk.Bool(false),
            DefaultUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnumWan1.ToPointer(),
            FailoverAndFailback: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback{
                Immediate: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate{
                    Enabled: false,
                },
            },
            LoadBalancingEnabled: sdk.Bool(false),
            VpnTrafficUplinkPreferences: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumUplinkDown.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("nihil"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumBuiltin,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumDefaultUplink,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("ducimus"),
                                    Fqdn: sdk.String("in"),
                                    Host: sdk.Int64(411005),
                                    Network: sdk.String("doloremque"),
                                    Port: sdk.String("sed"),
                                    Vlan: sdk.Int64(39686),
                                },
                                ID: sdk.String("ab8022ca-c033-41cd-b844-e34085a4f287"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("sint"),
                                    Host: sdk.Int64(665409),
                                    Network: sdk.String("ipsa"),
                                    Port: sdk.String("laudantium"),
                                    Vlan: sdk.Int64(631018),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplication,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("necessitatibus"),
                                    Fqdn: sdk.String("molestias"),
                                    Host: sdk.Int64(323017),
                                    Network: sdk.String("error"),
                                    Port: sdk.String("adipisci"),
                                    Vlan: sdk.Int64(655555),
                                },
                                ID: sdk.String("1c5da91c-ccaf-46b2-b6a7-f2442060ebd9"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp6.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("tempore"),
                                    Host: sdk.Int64(450039),
                                    Network: sdk.String("quaerat"),
                                    Port: sdk.String("odit"),
                                    Vlan: sdk.Int64(600871),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumPoorPerformance.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("distinctio"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumBuiltin,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumBestForVoIP,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("rerum"),
                                    Fqdn: sdk.String("quos"),
                                    Host: sdk.Int64(678190),
                                    Network: sdk.String("magni"),
                                    Port: sdk.String("impedit"),
                                    Vlan: sdk.Int64(403975),
                                },
                                ID: sdk.String("d013be0e-2c80-43ca-8d6c-957404e10d3a"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("odit"),
                                    Host: sdk.Int64(939763),
                                    Network: sdk.String("beatae"),
                                    Port: sdk.String("iusto"),
                                    Vlan: sdk.Int64(730532),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplication,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("qui"),
                                    Fqdn: sdk.String("quisquam"),
                                    Host: sdk.Int64(723764),
                                    Network: sdk.String("omnis"),
                                    Port: sdk.String("suscipit"),
                                    Vlan: sdk.Int64(807604),
                                },
                                ID: sdk.String("33853758-f46b-4006-8983-e86606a61425"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("perferendis"),
                                    Host: sdk.Int64(679337),
                                    Network: sdk.String("nesciunt"),
                                    Port: sdk.String("id"),
                                    Vlan: sdk.Int64(260009),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplicationCategory,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("error"),
                                    Fqdn: sdk.String("atque"),
                                    Host: sdk.Int64(979279),
                                    Network: sdk.String("suscipit"),
                                    Port: sdk.String("laboriosam"),
                                    Vlan: sdk.Int64(445603),
                                },
                                ID: sdk.String("c34790cb-1b0c-4118-8b42-284466525d19"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("pariatur"),
                                    Host: sdk.Int64(597338),
                                    Network: sdk.String("quia"),
                                    Port: sdk.String("consequatur"),
                                    Vlan: sdk.Int64(848724),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("nesciunt"),
                                    Fqdn: sdk.String("nesciunt"),
                                    Host: sdk.Int64(223663),
                                    Network: sdk.String("consequuntur"),
                                    Port: sdk.String("similique"),
                                    Vlan: sdk.Int64(500157),
                                },
                                ID: sdk.String("003d11e3-3535-47b5-a7e0-28abf2bdc85d"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp6.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("voluptate"),
                                    Host: sdk.Int64(17084),
                                    Network: sdk.String("dolorem"),
                                    Port: sdk.String("id"),
                                    Vlan: sdk.Int64(409324),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumUplinkDown.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("laboriosam"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumCustom,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumWan1,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplication,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("dignissimos"),
                                    Fqdn: sdk.String("quae"),
                                    Host: sdk.Int64(939212),
                                    Network: sdk.String("maxime"),
                                    Port: sdk.String("deleniti"),
                                    Vlan: sdk.Int64(794588),
                                },
                                ID: sdk.String("4400c428-cb9d-47a7-b123-2a0d73510223"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("voluptatem"),
                                    Host: sdk.Int64(579455),
                                    Network: sdk.String("numquam"),
                                    Port: sdk.String("ratione"),
                                    Vlan: sdk.Int64(310158),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplication,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("deserunt"),
                                    Fqdn: sdk.String("repudiandae"),
                                    Host: sdk.Int64(803551),
                                    Network: sdk.String("eveniet"),
                                    Port: sdk.String("esse"),
                                    Vlan: sdk.Int64(146739),
                                },
                                ID: sdk.String("52619506-4685-4d21-bfa4-37e16c2c7e09"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumTCP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("recusandae"),
                                    Host: sdk.Int64(673488),
                                    Network: sdk.String("possimus"),
                                    Port: sdk.String("architecto"),
                                    Vlan: sdk.Int64(414975),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("voluptates"),
                                    Fqdn: sdk.String("autem"),
                                    Host: sdk.Int64(291665),
                                    Network: sdk.String("ipsa"),
                                    Port: sdk.String("in"),
                                    Vlan: sdk.Int64(939399),
                                },
                                ID: sdk.String("de985ee7-0fd1-43af-a0d2-b4229489325b"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("reprehenderit"),
                                    Host: sdk.Int64(754849),
                                    Network: sdk.String("est"),
                                    Port: sdk.String("occaecati"),
                                    Vlan: sdk.Int64(400341),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplication,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("atque"),
                                    Fqdn: sdk.String("et"),
                                    Host: sdk.Int64(169860),
                                    Network: sdk.String("quos"),
                                    Port: sdk.String("possimus"),
                                    Vlan: sdk.Int64(379519),
                                },
                                ID: sdk.String("b9393834-2480-43b7-92c9-715dd521879e"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("rem"),
                                    Host: sdk.Int64(631086),
                                    Network: sdk.String("natus"),
                                    Port: sdk.String("quaerat"),
                                    Vlan: sdk.Int64(738553),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumUplinkDown.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("voluptatem"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumBuiltin,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumWan2,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplication,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("magni"),
                                    Fqdn: sdk.String("architecto"),
                                    Host: sdk.Int64(221279),
                                    Network: sdk.String("quasi"),
                                    Port: sdk.String("molestias"),
                                    Vlan: sdk.Int64(959777),
                                },
                                ID: sdk.String("38907ecf-7f36-4c5f-a654-861b44ec0a86"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("modi"),
                                    Host: sdk.Int64(850085),
                                    Network: sdk.String("incidunt"),
                                    Port: sdk.String("rem"),
                                    Vlan: sdk.Int64(601870),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("aliquid"),
                                    Fqdn: sdk.String("totam"),
                                    Host: sdk.Int64(858487),
                                    Network: sdk.String("labore"),
                                    Port: sdk.String("tenetur"),
                                    Vlan: sdk.Int64(125826),
                                },
                                ID: sdk.String("c01749f2-c546-4554-9b83-8f43c3f3cd18"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("alias"),
                                    Host: sdk.Int64(670740),
                                    Network: sdk.String("sunt"),
                                    Port: sdk.String("veritatis"),
                                    Vlan: sdk.Int64(40241),
                                },
                            },
                        },
                    },
                },
            },
            WanTrafficUplinkPreferences: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnumWan2,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("quis"),
                                    Port: sdk.String("sit"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("dolor"),
                                    Host: sdk.Int64(299129),
                                    Port: sdk.String("totam"),
                                    Vlan: sdk.Int64(7452),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("hic"),
                                    Port: sdk.String("sapiente"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("cum"),
                                    Host: sdk.Int64(452829),
                                    Port: sdk.String("veritatis"),
                                    Vlan: sdk.Int64(90534),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("doloribus"),
                                    Port: sdk.String("commodi"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("aspernatur"),
                                    Host: sdk.Int64(188241),
                                    Port: sdk.String("assumenda"),
                                    Vlan: sdk.Int64(741125),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnumWan1,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("cumque"),
                                    Port: sdk.String("quod"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("est"),
                                    Host: sdk.Int64(960899),
                                    Port: sdk.String("ullam"),
                                    Vlan: sdk.Int64(560823),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("soluta"),
                                    Port: sdk.String("adipisci"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumTCP.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("quod"),
                                    Host: sdk.Int64(511508),
                                    Port: sdk.String("occaecati"),
                                    Vlan: sdk.Int64(364546),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnumWan1,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("id"),
                                    Port: sdk.String("iste"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumTCP.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("nihil"),
                                    Host: sdk.Int64(961649),
                                    Port: sdk.String("libero"),
                                    Vlan: sdk.Int64(718534),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("cumque"),
                                    Port: sdk.String("id"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumTCP.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("quaerat"),
                                    Host: sdk.Int64(278456),
                                    Port: sdk.String("quo"),
                                    Vlan: sdk.Int64(474559),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnumWan1,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("dicta"),
                                    Port: sdk.String("assumenda"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("deserunt"),
                                    Host: sdk.Int64(606929),
                                    Port: sdk.String("fugiat"),
                                    Vlan: sdk.Int64(191286),
                                },
                            },
                        },
                    },
                },
            },
        },
        NetworkID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != nil {
        // handle response
    }
}
```
