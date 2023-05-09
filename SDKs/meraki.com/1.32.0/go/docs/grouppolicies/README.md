# GroupPolicies

### Available Operations

* [CreateNetworkGroupPolicy](#createnetworkgrouppolicy) - Create a group policy
* [DeleteNetworkGroupPolicy](#deletenetworkgrouppolicy) - Delete a group policy
* [GetNetworkGroupPolicies](#getnetworkgrouppolicies) - List the group policies in a network
* [GetNetworkGroupPolicy](#getnetworkgrouppolicy) - Display a group policy
* [UpdateNetworkGroupPolicy](#updatenetworkgrouppolicy) - Update a group policy

## CreateNetworkGroupPolicy

Create a group policy

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
    res, err := s.GroupPolicies.CreateNetworkGroupPolicy(ctx, operations.CreateNetworkGroupPolicyRequest{
        RequestBody: operations.CreateNetworkGroupPolicyRequestBody{
            Bandwidth: &operations.CreateNetworkGroupPolicyRequestBodyBandwidth{
                BandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits{
                    LimitDown: sdk.Int64(969553),
                    LimitUp: sdk.Int64(531512),
                },
                Settings: operations.CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumNetworkDefault.ToPointer(),
            },
            BonjourForwarding: &operations.CreateNetworkGroupPolicyRequestBodyBonjourForwarding{
                Rules: []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                    operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("illo"),
                        Services: []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumScanners,
                        },
                        VlanID: "animi",
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("id"),
                        Services: []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumIChat,
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSamba,
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumPrinters,
                        },
                        VlanID: "voluptatem",
                    },
                },
                Settings: operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumIgnore.ToPointer(),
            },
            ContentFiltering: &operations.CreateNetworkGroupPolicyRequestBodyContentFiltering{
                AllowedURLPatterns: &operations.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns{
                    Patterns: []string{
                        "temporibus",
                        "corporis",
                        "odio",
                        "iste",
                    },
                    Settings: operations.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumNetworkDefault.ToPointer(),
                },
                BlockedURLCategories: &operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories{
                    Categories: []string{
                        "velit",
                        "quas",
                        "veniam",
                        "illum",
                    },
                    Settings: operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumAppend.ToPointer(),
                },
                BlockedURLPatterns: &operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns{
                    Patterns: []string{
                        "aperiam",
                        "ullam",
                    },
                    Settings: operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumNetworkDefault.ToPointer(),
                },
            },
            FirewallAndTrafficShaping: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping{
                L3FirewallRules: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("quibusdam"),
                        DestCidr: "nostrum",
                        DestPort: sdk.String("impedit"),
                        Policy: "nesciunt",
                        Protocol: "velit",
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("magnam"),
                        DestCidr: "cupiditate",
                        DestPort: sdk.String("nemo"),
                        Policy: "dignissimos",
                        Protocol: "eum",
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("facere"),
                        DestCidr: "minima",
                        DestPort: sdk.String("ullam"),
                        Policy: "dolores",
                        Protocol: "accusantium",
                    },
                },
                L7FirewallRules: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumPort.ToPointer(),
                        Value: sdk.String("perspiciatis"),
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumIPRange.ToPointer(),
                        Value: sdk.String("eos"),
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplication.ToPointer(),
                        Value: sdk.String("corporis"),
                    },
                },
                Settings: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumCustom.ToPointer(),
                TrafficShapingRules: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumLocalNet,
                                Value: "molestiae",
                            },
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumHost,
                                Value: "veniam",
                            },
                        },
                        DscpTagValue: sdk.Int64(508526),
                        PcpTagValue: sdk.Int64(515670),
                        PerClientBandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(396741),
                                LimitUp: sdk.Int64(892451),
                            },
                            Settings: sdk.String("earum"),
                        },
                        Priority: sdk.String("similique"),
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumHost,
                                Value: "sapiente",
                            },
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumPort,
                                Value: "dolore",
                            },
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumLocalNet,
                                Value: "ipsum",
                            },
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumIPRange,
                                Value: "voluptatibus",
                            },
                        },
                        DscpTagValue: sdk.Int64(516518),
                        PcpTagValue: sdk.Int64(653309),
                        PerClientBandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(87837),
                                LimitUp: sdk.Int64(262109),
                            },
                            Settings: sdk.String("provident"),
                        },
                        Priority: sdk.String("perferendis"),
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumHost,
                                Value: "quos",
                            },
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumPort,
                                Value: "sunt",
                            },
                        },
                        DscpTagValue: sdk.Int64(223411),
                        PcpTagValue: sdk.Int64(786178),
                        PerClientBandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(417221),
                                LimitUp: sdk.Int64(511956),
                            },
                            Settings: sdk.String("laboriosam"),
                        },
                        Priority: sdk.String("repellendus"),
                    },
                },
            },
            Name: "Luis Mohr",
            Scheduling: &operations.CreateNetworkGroupPolicyRequestBodyScheduling{
                Enabled: sdk.Bool(false),
                Friday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("occaecati"),
                    To: sdk.String("saepe"),
                },
                Monday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("illo"),
                    To: sdk.String("esse"),
                },
                Saturday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("enim"),
                    To: sdk.String("reiciendis"),
                },
                Sunday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("maiores"),
                    To: sdk.String("similique"),
                },
                Thursday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("iste"),
                    To: sdk.String("consequatur"),
                },
                Tuesday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("autem"),
                    To: sdk.String("similique"),
                },
                Wednesday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("voluptates"),
                    To: sdk.String("enim"),
                },
            },
            SplashAuthSettings: operations.CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnumBypass.ToPointer(),
            VlanTagging: &operations.CreateNetworkGroupPolicyRequestBodyVlanTagging{
                Settings: operations.CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumIgnore.ToPointer(),
                VlanID: sdk.String("soluta"),
            },
        },
        NetworkID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkGroupPolicy201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkGroupPolicy

Delete a group policy

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
    res, err := s.GroupPolicies.DeleteNetworkGroupPolicy(ctx, operations.DeleteNetworkGroupPolicyRequest{
        GroupPolicyID: "fugit",
        NetworkID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkGroupPolicies

List the group policies in a network

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
    res, err := s.GroupPolicies.GetNetworkGroupPolicies(ctx, operations.GetNetworkGroupPoliciesRequest{
        NetworkID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkGroupPolicies200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkGroupPolicy

Display a group policy

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
    res, err := s.GroupPolicies.GetNetworkGroupPolicy(ctx, operations.GetNetworkGroupPolicyRequest{
        GroupPolicyID: "vel",
        NetworkID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkGroupPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkGroupPolicy

Update a group policy

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
    res, err := s.GroupPolicies.UpdateNetworkGroupPolicy(ctx, operations.UpdateNetworkGroupPolicyRequest{
        RequestBody: &operations.UpdateNetworkGroupPolicyRequestBody{
            Bandwidth: &operations.UpdateNetworkGroupPolicyRequestBodyBandwidth{
                BandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits{
                    LimitDown: sdk.Int64(299207),
                    LimitUp: sdk.Int64(424629),
                },
                Settings: operations.UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumCustom.ToPointer(),
            },
            BonjourForwarding: &operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwarding{
                Rules: []UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                    operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("sit"),
                        Services: []UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumIChat,
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAirPlay,
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSSH,
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAllServices,
                        },
                        VlanID: "reprehenderit",
                    },
                },
                Settings: operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumIgnore.ToPointer(),
            },
            ContentFiltering: &operations.UpdateNetworkGroupPolicyRequestBodyContentFiltering{
                AllowedURLPatterns: &operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns{
                    Patterns: []string{
                        "explicabo",
                        "expedita",
                        "earum",
                        "at",
                    },
                    Settings: operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumOverride.ToPointer(),
                },
                BlockedURLCategories: &operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories{
                    Categories: []string{
                        "iure",
                        "aliquid",
                        "dignissimos",
                        "perspiciatis",
                    },
                    Settings: operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumAppend.ToPointer(),
                },
                BlockedURLPatterns: &operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns{
                    Patterns: []string{
                        "temporibus",
                        "doloremque",
                        "porro",
                        "inventore",
                    },
                    Settings: operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumNetworkDefault.ToPointer(),
                },
            },
            FirewallAndTrafficShaping: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping{
                L3FirewallRules: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("molestiae"),
                        DestCidr: "harum",
                        DestPort: sdk.String("id"),
                        Policy: "dolore",
                        Protocol: "quam",
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("rem"),
                        DestCidr: "tempora",
                        DestPort: sdk.String("alias"),
                        Policy: "magnam",
                        Protocol: "ut",
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("totam"),
                        DestCidr: "unde",
                        DestPort: sdk.String("repellat"),
                        Policy: "voluptas",
                        Protocol: "dignissimos",
                    },
                },
                L7FirewallRules: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplication.ToPointer(),
                        Value: sdk.String("itaque"),
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumPort.ToPointer(),
                        Value: sdk.String("ipsa"),
                    },
                },
                Settings: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumCustom.ToPointer(),
                TrafficShapingRules: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumIPRange,
                                Value: "illo",
                            },
                        },
                        DscpTagValue: sdk.Int64(661292),
                        PcpTagValue: sdk.Int64(171134),
                        PerClientBandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(745767),
                                LimitUp: sdk.Int64(634157),
                            },
                            Settings: sdk.String("fugit"),
                        },
                        Priority: sdk.String("nemo"),
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumPort,
                                Value: "commodi",
                            },
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumLocalNet,
                                Value: "odio",
                            },
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplicationCategory,
                                Value: "id",
                            },
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumPort,
                                Value: "voluptatum",
                            },
                        },
                        DscpTagValue: sdk.Int64(666499),
                        PcpTagValue: sdk.Int64(422343),
                        PerClientBandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(17438),
                                LimitUp: sdk.Int64(672676),
                            },
                            Settings: sdk.String("quam"),
                        },
                        Priority: sdk.String("laborum"),
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplicationCategory,
                                Value: "dolore",
                            },
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumHost,
                                Value: "recusandae",
                            },
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplication,
                                Value: "iste",
                            },
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumHost,
                                Value: "cupiditate",
                            },
                        },
                        DscpTagValue: sdk.Int64(890813),
                        PcpTagValue: sdk.Int64(365827),
                        PerClientBandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(641596),
                                LimitUp: sdk.Int64(956924),
                            },
                            Settings: sdk.String("debitis"),
                        },
                        Priority: sdk.String("eum"),
                    },
                },
            },
            Name: sdk.String("Cecilia Ryan"),
            Scheduling: &operations.UpdateNetworkGroupPolicyRequestBodyScheduling{
                Enabled: sdk.Bool(false),
                Friday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("deserunt"),
                    To: sdk.String("nisi"),
                },
                Monday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("aliquam"),
                    To: sdk.String("nemo"),
                },
                Saturday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("pariatur"),
                    To: sdk.String("repudiandae"),
                },
                Sunday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("perspiciatis"),
                    To: sdk.String("atque"),
                },
                Thursday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("laboriosam"),
                    To: sdk.String("voluptate"),
                },
                Tuesday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("ad"),
                    To: sdk.String("veniam"),
                },
                Wednesday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("vitae"),
                    To: sdk.String("deserunt"),
                },
            },
            SplashAuthSettings: operations.UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnumNetworkDefault.ToPointer(),
            VlanTagging: &operations.UpdateNetworkGroupPolicyRequestBodyVlanTagging{
                Settings: operations.UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumNetworkDefault.ToPointer(),
                VlanID: sdk.String("porro"),
            },
        },
        GroupPolicyID: "eveniet",
        NetworkID: "autem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkGroupPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```
