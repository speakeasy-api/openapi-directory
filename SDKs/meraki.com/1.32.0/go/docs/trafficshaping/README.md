# TrafficShaping

### Available Operations

* [CreateNetworkApplianceTrafficShapingCustomPerformanceClass](#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [DeleteNetworkApplianceTrafficShapingCustomPerformanceClass](#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [GetNetworkApplianceTrafficShaping](#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClass](#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClasses](#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [GetNetworkApplianceTrafficShapingRules](#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [GetNetworkApplianceTrafficShapingUplinkBandwidth](#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [GetNetworkApplianceTrafficShapingUplinkSelection](#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [GetNetworkTrafficShapingApplicationCategories](#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [GetNetworkTrafficShapingDscpTaggingOptions](#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [GetNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [UpdateNetworkApplianceTrafficShaping](#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [UpdateNetworkApplianceTrafficShapingCustomPerformanceClass](#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [UpdateNetworkApplianceTrafficShapingRules](#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [UpdateNetworkApplianceTrafficShapingUplinkBandwidth](#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [UpdateNetworkApplianceTrafficShapingUplinkSelection](#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [UpdateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network

## CreateNetworkApplianceTrafficShapingCustomPerformanceClass

Add a custom performance class for an MX network

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
    res, err := s.TrafficShaping.CreateNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        RequestBody: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody{
            MaxJitter: sdk.Int64(554992),
            MaxLatency: sdk.Int64(791083),
            MaxLossPercentage: sdk.Int64(19469),
            Name: "Hope Kautzer",
        },
        NetworkID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkApplianceTrafficShapingCustomPerformanceClass

Delete a custom performance class from an MX network

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
    res, err := s.TrafficShaping.DeleteNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        CustomPerformanceClassID: "ea",
        NetworkID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShaping

Display the traffic shaping settings for an MX network

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
    res, err := s.TrafficShaping.GetNetworkApplianceTrafficShaping(ctx, operations.GetNetworkApplianceTrafficShapingRequest{
        NetworkID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShaping200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingCustomPerformanceClass

Return a custom performance class for an MX network

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
    res, err := s.TrafficShaping.GetNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        CustomPerformanceClassID: "dignissimos",
        NetworkID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingCustomPerformanceClasses

List all custom performance classes for an MX network

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
    res, err := s.TrafficShaping.GetNetworkApplianceTrafficShapingCustomPerformanceClasses(ctx, operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest{
        NetworkID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingRules

Display the traffic shaping settings rules for an MX network

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
    res, err := s.TrafficShaping.GetNetworkApplianceTrafficShapingRules(ctx, operations.GetNetworkApplianceTrafficShapingRulesRequest{
        NetworkID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingUplinkBandwidth

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

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
    res, err := s.TrafficShaping.GetNetworkApplianceTrafficShapingUplinkBandwidth(ctx, operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest{
        NetworkID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.TrafficShaping.GetNetworkApplianceTrafficShapingUplinkSelection(ctx, operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest{
        NetworkID: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != nil {
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
    res, err := s.TrafficShaping.GetNetworkTrafficShapingApplicationCategories(ctx, operations.GetNetworkTrafficShapingApplicationCategoriesRequest{
        NetworkID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTrafficShapingApplicationCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkTrafficShapingDscpTaggingOptions

Returns the available DSCP tagging options for your traffic shaping rules.

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
    res, err := s.TrafficShaping.GetNetworkTrafficShapingDscpTaggingOptions(ctx, operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest{
        NetworkID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidTrafficShapingRules

Display the traffic shaping settings for a SSID on an MR network

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
    res, err := s.TrafficShaping.GetNetworkWirelessSsidTrafficShapingRules(ctx, operations.GetNetworkWirelessSsidTrafficShapingRulesRequest{
        NetworkID: "odio",
        Number: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShaping

Update the traffic shaping settings for an MX network

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
    res, err := s.TrafficShaping.UpdateNetworkApplianceTrafficShaping(ctx, operations.UpdateNetworkApplianceTrafficShapingRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingRequestBody{
            GlobalBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits{
                LimitDown: sdk.Int64(841618),
                LimitUp: sdk.Int64(366924),
            },
        },
        NetworkID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShaping200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingCustomPerformanceClass

Update a custom performance class for an MX network

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
    res, err := s.TrafficShaping.UpdateNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody{
            MaxJitter: sdk.Int64(358177),
            MaxLatency: sdk.Int64(402795),
            MaxLossPercentage: sdk.Int64(93275),
            Name: sdk.String("Terri Lindgren"),
        },
        CustomPerformanceClassID: "veniam",
        NetworkID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingRules

Update the traffic shaping settings rules for an MX network

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
    res, err := s.TrafficShaping.UpdateNetworkApplianceTrafficShapingRules(ctx, operations.UpdateNetworkApplianceTrafficShapingRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBody{
            DefaultRulesEnabled: sdk.Bool(false),
            Rules: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumHost,
                            Value: "iure",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumPort,
                            Value: "rerum",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange,
                            Value: "esse",
                        },
                    },
                    DscpTagValue: sdk.Int64(441981),
                    PerClientBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(563201),
                            LimitUp: sdk.Int64(27137),
                        },
                        Settings: sdk.String("dolor"),
                    },
                    Priority: sdk.String("eius"),
                },
                operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange,
                            Value: "aliquam",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "ex",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication,
                            Value: "iure",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication,
                            Value: "nulla",
                        },
                    },
                    DscpTagValue: sdk.Int64(355325),
                    PerClientBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(982511),
                            LimitUp: sdk.Int64(650877),
                        },
                        Settings: sdk.String("eveniet"),
                    },
                    Priority: sdk.String("voluptatibus"),
                },
            },
        },
        NetworkID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingUplinkBandwidth

Updates the uplink bandwidth settings for your MX network.

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
    res, err := s.TrafficShaping.UpdateNetworkApplianceTrafficShapingUplinkBandwidth(ctx, operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody{
            BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits{
                Cellular: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular{
                    LimitDown: sdk.Int64(876467),
                    LimitUp: sdk.Int64(638841),
                },
                Wan1: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1{
                    LimitDown: sdk.Int64(795518),
                    LimitUp: sdk.Int64(476541),
                },
                Wan2: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2{
                    LimitDown: sdk.Int64(25164),
                    LimitUp: sdk.Int64(184102),
                },
            },
        },
        NetworkID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != nil {
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
    res, err := s.TrafficShaping.UpdateNetworkApplianceTrafficShapingUplinkSelection(ctx, operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest{
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
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumPoorPerformance.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("rem"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumCustom,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumWan1,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplication,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("eos"),
                                    Fqdn: sdk.String("ducimus"),
                                    Host: sdk.Int64(570019),
                                    Network: sdk.String("tempora"),
                                    Port: sdk.String("laboriosam"),
                                    Vlan: sdk.Int64(272930),
                                },
                                ID: sdk.String("9b931221-fe6d-41d1-8508-4c2222f8c25b"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("odit"),
                                    Host: sdk.Int64(927018),
                                    Network: sdk.String("fuga"),
                                    Port: sdk.String("omnis"),
                                    Vlan: sdk.Int64(940588),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("aliquid"),
                                    Fqdn: sdk.String("expedita"),
                                    Host: sdk.Int64(129756),
                                    Network: sdk.String("ratione"),
                                    Port: sdk.String("maiores"),
                                    Vlan: sdk.Int64(267679),
                                },
                                ID: sdk.String("84a7d2b2-7183-4857-bb97-63b43d52847b"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumTCP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("perferendis"),
                                    Host: sdk.Int64(227868),
                                    Network: sdk.String("quod"),
                                    Port: sdk.String("pariatur"),
                                    Vlan: sdk.Int64(587217),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("numquam"),
                                    Fqdn: sdk.String("aliquid"),
                                    Host: sdk.Int64(384340),
                                    Network: sdk.String("vero"),
                                    Port: sdk.String("cupiditate"),
                                    Vlan: sdk.Int64(635515),
                                },
                                ID: sdk.String("78e9f84a-0637-4135-8a4d-591898fa43e8"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("tempore"),
                                    Host: sdk.Int64(435040),
                                    Network: sdk.String("voluptate"),
                                    Port: sdk.String("nulla"),
                                    Vlan: sdk.Int64(621497),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumPoorPerformance.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("hic"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumBuiltin,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumBestForVoIP,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplicationCategory,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("tenetur"),
                                    Fqdn: sdk.String("iusto"),
                                    Host: sdk.Int64(628304),
                                    Network: sdk.String("delectus"),
                                    Port: sdk.String("et"),
                                    Vlan: sdk.Int64(321637),
                                },
                                ID: sdk.String("bf0f8ada-6a3e-4ee2-b6e7-b0b8f9467091"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("nisi"),
                                    Host: sdk.Int64(535504),
                                    Network: sdk.String("vel"),
                                    Port: sdk.String("maiores"),
                                    Vlan: sdk.Int64(913396),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("ipsam"),
                                    Fqdn: sdk.String("error"),
                                    Host: sdk.Int64(724462),
                                    Network: sdk.String("culpa"),
                                    Port: sdk.String("iste"),
                                    Vlan: sdk.Int64(123680),
                                },
                                ID: sdk.String("0b7da549-b7ec-4409-807a-a816beaf8588"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumTCP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("et"),
                                    Host: sdk.Int64(528583),
                                    Network: sdk.String("voluptatum"),
                                    Port: sdk.String("est"),
                                    Vlan: sdk.Int64(879721),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplicationCategory,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("nesciunt"),
                                    Fqdn: sdk.String("mollitia"),
                                    Host: sdk.Int64(48146),
                                    Network: sdk.String("veniam"),
                                    Port: sdk.String("nisi"),
                                    Vlan: sdk.Int64(954606),
                                },
                                ID: sdk.String("3e47eddb-5eee-4d1f-98d8-6f8efff5778c"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("similique"),
                                    Host: sdk.Int64(755897),
                                    Network: sdk.String("eaque"),
                                    Port: sdk.String("magnam"),
                                    Vlan: sdk.Int64(886609),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumUplinkDown.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("voluptatum"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumBuiltin,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumLoadBalancing,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("quasi"),
                                    Fqdn: sdk.String("architecto"),
                                    Host: sdk.Int64(976915),
                                    Network: sdk.String("iusto"),
                                    Port: sdk.String("esse"),
                                    Vlan: sdk.Int64(565531),
                                },
                                ID: sdk.String("b44c4f9a-caee-4f88-a7dc-fc33378c49d0"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp6.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("quod"),
                                    Host: sdk.Int64(234353),
                                    Network: sdk.String("pariatur"),
                                    Port: sdk.String("alias"),
                                    Vlan: sdk.Int64(351345),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplication,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("cum"),
                                    Fqdn: sdk.String("corporis"),
                                    Host: sdk.Int64(416540),
                                    Network: sdk.String("accusamus"),
                                    Port: sdk.String("unde"),
                                    Vlan: sdk.Int64(370371),
                                },
                                ID: sdk.String("22bf0aa6-8b0e-4522-89b6-f632702f948b"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumTCP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("ipsum"),
                                    Host: sdk.Int64(517515),
                                    Network: sdk.String("eos"),
                                    Port: sdk.String("amet"),
                                    Vlan: sdk.Int64(653656),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplicationCategory,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("veritatis"),
                                    Fqdn: sdk.String("dolores"),
                                    Host: sdk.Int64(883234),
                                    Network: sdk.String("dolorem"),
                                    Port: sdk.String("fuga"),
                                    Vlan: sdk.Int64(320583),
                                },
                                ID: sdk.String("4d97b07f-722e-488c-9faa-6a5608fbf075"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp6.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("modi"),
                                    Host: sdk.Int64(336223),
                                    Network: sdk.String("delectus"),
                                    Port: sdk.String("ratione"),
                                    Vlan: sdk.Int64(68287),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplication,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("odit"),
                                    Fqdn: sdk.String("earum"),
                                    Host: sdk.Int64(420578),
                                    Network: sdk.String("perferendis"),
                                    Port: sdk.String("qui"),
                                    Vlan: sdk.Int64(512296),
                                },
                                ID: sdk.String("9abe6bd6-c090-4acb-bacc-795b268f63a8"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("facilis"),
                                    Host: sdk.Int64(88684),
                                    Network: sdk.String("in"),
                                    Port: sdk.String("non"),
                                    Vlan: sdk.Int64(593817),
                                },
                            },
                        },
                    },
                },
            },
            WanTrafficUplinkPreferences: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnumWan1,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("voluptates"),
                                    Port: sdk.String("nesciunt"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("ipsa"),
                                    Host: sdk.Int64(457367),
                                    Port: sdk.String("ipsa"),
                                    Vlan: sdk.Int64(568618),
                                },
                            },
                        },
                    },
                },
            },
        },
        NetworkID: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidTrafficShapingRules

Update the traffic shaping settings for an SSID on an MR network

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
    res, err := s.TrafficShaping.UpdateNetworkWirelessSsidTrafficShapingRules(ctx, operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody{
            DefaultRulesEnabled: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumPort,
                            Value: "labore",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "vero",
                        },
                    },
                    DscpTagValue: sdk.Int64(412975),
                    PcpTagValue: sdk.Int64(45854),
                    PerClientBandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(292800),
                            LimitUp: sdk.Int64(374445),
                        },
                        Settings: sdk.String("aut"),
                    },
                },
                operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "quod",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange,
                            Value: "itaque",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication,
                            Value: "itaque",
                        },
                    },
                    DscpTagValue: sdk.Int64(780172),
                    PcpTagValue: sdk.Int64(850507),
                    PerClientBandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(511920),
                            LimitUp: sdk.Int64(668749),
                        },
                        Settings: sdk.String("esse"),
                    },
                },
            },
            TrafficShapingEnabled: sdk.Bool(false),
        },
        NetworkID: "exercitationem",
        Number: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
