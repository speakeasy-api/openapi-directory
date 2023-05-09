# Rules

### Available Operations

* [GetNetworkApplianceTrafficShapingRules](#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [GetNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [UpdateNetworkApplianceTrafficShapingRules](#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [UpdateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network

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
    res, err := s.Rules.GetNetworkApplianceTrafficShapingRules(ctx, operations.GetNetworkApplianceTrafficShapingRulesRequest{
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
    res, err := s.Rules.GetNetworkWirelessSsidTrafficShapingRules(ctx, operations.GetNetworkWirelessSsidTrafficShapingRulesRequest{
        NetworkID: "iure",
        Number: "autem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != nil {
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
    res, err := s.Rules.UpdateNetworkApplianceTrafficShapingRules(ctx, operations.UpdateNetworkApplianceTrafficShapingRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBody{
            DefaultRulesEnabled: sdk.Bool(false),
            Rules: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumPort,
                            Value: "dolor",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication,
                            Value: "perspiciatis",
                        },
                    },
                    DscpTagValue: sdk.Int64(839346),
                    PerClientBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(947946),
                            LimitUp: sdk.Int64(761147),
                        },
                        Settings: sdk.String("ullam"),
                    },
                    Priority: sdk.String("sapiente"),
                },
                operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumPort,
                            Value: "non",
                        },
                    },
                    DscpTagValue: sdk.Int64(964135),
                    PerClientBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(91031),
                            LimitUp: sdk.Int64(804424),
                        },
                        Settings: sdk.String("adipisci"),
                    },
                    Priority: sdk.String("reiciendis"),
                },
                operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication,
                            Value: "expedita",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange,
                            Value: "commodi",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumLocalNet,
                            Value: "hic",
                        },
                    },
                    DscpTagValue: sdk.Int64(189375),
                    PerClientBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(166963),
                            LimitUp: sdk.Int64(345025),
                        },
                        Settings: sdk.String("distinctio"),
                    },
                    Priority: sdk.String("aspernatur"),
                },
                operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange,
                            Value: "adipisci",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "sequi",
                        },
                    },
                    DscpTagValue: sdk.Int64(762536),
                    PerClientBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(167613),
                            LimitUp: sdk.Int64(684172),
                        },
                        Settings: sdk.String("voluptatibus"),
                    },
                    Priority: sdk.String("soluta"),
                },
            },
        },
        NetworkID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingRules200ApplicationJSONObject != nil {
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
    res, err := s.Rules.UpdateNetworkWirelessSsidTrafficShapingRules(ctx, operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody{
            DefaultRulesEnabled: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication,
                            Value: "eum",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication,
                            Value: "placeat",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "optio",
                        },
                    },
                    DscpTagValue: sdk.Int64(758613),
                    PcpTagValue: sdk.Int64(46738),
                    PerClientBandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(682153),
                            LimitUp: sdk.Int64(641371),
                        },
                        Settings: sdk.String("consequuntur"),
                    },
                },
                operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange,
                            Value: "illum",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication,
                            Value: "dolore",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumHost,
                            Value: "iste",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumLocalNet,
                            Value: "in",
                        },
                    },
                    DscpTagValue: sdk.Int64(140066),
                    PcpTagValue: sdk.Int64(584575),
                    PerClientBandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(550046),
                            LimitUp: sdk.Int64(561768),
                        },
                        Settings: sdk.String("optio"),
                    },
                },
                operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumLocalNet,
                            Value: "ad",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "eum",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumPort,
                            Value: "occaecati",
                        },
                    },
                    DscpTagValue: sdk.Int64(799072),
                    PcpTagValue: sdk.Int64(8088),
                    PerClientBandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(184187),
                            LimitUp: sdk.Int64(271660),
                        },
                        Settings: sdk.String("porro"),
                    },
                },
            },
            TrafficShapingEnabled: sdk.Bool(false),
        },
        NetworkID: "odio",
        Number: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
