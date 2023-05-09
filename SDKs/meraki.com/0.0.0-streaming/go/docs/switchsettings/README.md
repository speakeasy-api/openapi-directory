# SwitchSettings

### Available Operations

* [CreateNetworkSwitchSettingsQosRule](#createnetworkswitchsettingsqosrule) - Add a quality of service rule
* [DeleteNetworkSwitchSettingsQosRule](#deletenetworkswitchsettingsqosrule) - Delete a quality of service rule
* [GetNetworkSwitchSettings](#getnetworkswitchsettings) - Returns the switch network settings
* [GetNetworkSwitchSettingsMtu](#getnetworkswitchsettingsmtu) - Return the MTU configuration
* [GetNetworkSwitchSettingsMulticast](#getnetworkswitchsettingsmulticast) - Return multicast settings for a network
* [GetNetworkSwitchSettingsQosRule](#getnetworkswitchsettingsqosrule) - Return a quality of service rule
* [GetNetworkSwitchSettingsQosRules](#getnetworkswitchsettingsqosrules) - List quality of service rules
* [GetNetworkSwitchSettingsQosRulesOrder](#getnetworkswitchsettingsqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [GetNetworkSwitchSettingsStormControl](#getnetworkswitchsettingsstormcontrol) - Return the storm control configuration for a switch network
* [UpdateNetworkSwitchSettings](#updatenetworkswitchsettings) - Update switch network settings
* [UpdateNetworkSwitchSettingsMulticast](#updatenetworkswitchsettingsmulticast) - Update multicast settings for a network
* [UpdateNetworkSwitchSettingsQosRule](#updatenetworkswitchsettingsqosrule) - Update a quality of service rule
* [UpdateNetworkSwitchSettingsQosRulesOrder](#updatenetworkswitchsettingsqosrulesorder) - Update the order in which the rules should be processed by the switch
* [UpdateNetworkSwitchSettingsStormControl](#updatenetworkswitchsettingsstormcontrol) - Update the storm control configuration for a switch network

## CreateNetworkSwitchSettingsQosRule

Add a quality of service rule

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
    res, err := s.SwitchSettings.CreateNetworkSwitchSettingsQosRule(ctx, operations.CreateNetworkSwitchSettingsQosRuleRequest{
        RequestBody: operations.CreateNetworkSwitchSettingsQosRuleRequestBody{
            Dscp: sdk.Int64(826806),
            DstPort: sdk.Int64(887363),
            DstPortRange: sdk.String("architecto"),
            Protocol: operations.CreateNetworkSwitchSettingsQosRuleRequestBodyProtocolEnumAny.ToPointer(),
            SrcPort: sdk.Int64(633982),
            SrcPortRange: sdk.String("ipsa"),
            Vlan: 751033,
        },
        NetworkID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchSettingsQosRule201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkSwitchSettingsQosRule

Delete a quality of service rule

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
    res, err := s.SwitchSettings.DeleteNetworkSwitchSettingsQosRule(ctx, operations.DeleteNetworkSwitchSettingsQosRuleRequest{
        NetworkID: "quia",
        QosRuleID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkSwitchSettings

Returns the switch network settings

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
    res, err := s.SwitchSettings.GetNetworkSwitchSettings(ctx, operations.GetNetworkSwitchSettingsRequest{
        NetworkID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchSettingsMtu

Return the MTU configuration

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
    res, err := s.SwitchSettings.GetNetworkSwitchSettingsMtu(ctx, operations.GetNetworkSwitchSettingsMtuRequest{
        NetworkID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchSettingsMtu200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchSettingsMulticast

Return multicast settings for a network

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
    res, err := s.SwitchSettings.GetNetworkSwitchSettingsMulticast(ctx, operations.GetNetworkSwitchSettingsMulticastRequest{
        NetworkID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchSettingsMulticast200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchSettingsQosRule

Return a quality of service rule

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
    res, err := s.SwitchSettings.GetNetworkSwitchSettingsQosRule(ctx, operations.GetNetworkSwitchSettingsQosRuleRequest{
        NetworkID: "ullam",
        QosRuleID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchSettingsQosRule200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchSettingsQosRules

List quality of service rules

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
    res, err := s.SwitchSettings.GetNetworkSwitchSettingsQosRules(ctx, operations.GetNetworkSwitchSettingsQosRulesRequest{
        NetworkID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchSettingsQosRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchSettingsQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

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
    res, err := s.SwitchSettings.GetNetworkSwitchSettingsQosRulesOrder(ctx, operations.GetNetworkSwitchSettingsQosRulesOrderRequest{
        NetworkID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchSettingsQosRulesOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchSettingsStormControl

Return the storm control configuration for a switch network

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
    res, err := s.SwitchSettings.GetNetworkSwitchSettingsStormControl(ctx, operations.GetNetworkSwitchSettingsStormControlRequest{
        NetworkID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchSettingsStormControl200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchSettings

Update switch network settings

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
    res, err := s.SwitchSettings.UpdateNetworkSwitchSettings(ctx, operations.UpdateNetworkSwitchSettingsRequest{
        RequestBody: &operations.UpdateNetworkSwitchSettingsRequestBody{
            PowerExceptions: []UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                    PowerType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumUseNetworkSetting,
                    Serial: "iure",
                },
                operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                    PowerType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumUseNetworkSetting,
                    Serial: "quod",
                },
                operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                    PowerType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumRedundant,
                    Serial: "recusandae",
                },
            },
            UseCombinedPower: sdk.Bool(false),
            Vlan: sdk.Int64(246772),
        },
        NetworkID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchSettingsMulticast

Update multicast settings for a network

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
    res, err := s.SwitchSettings.UpdateNetworkSwitchSettingsMulticast(ctx, operations.UpdateNetworkSwitchSettingsMulticastRequest{
        RequestBody: &operations.UpdateNetworkSwitchSettingsMulticastRequestBody{
            DefaultSettings: &operations.UpdateNetworkSwitchSettingsMulticastRequestBodyDefaultSettings{
                FloodUnknownMulticastTrafficEnabled: sdk.Bool(false),
                IgmpSnoopingEnabled: sdk.Bool(false),
            },
            Overrides: []UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides{
                operations.UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "sed",
                        "odio",
                    },
                    SwitchProfiles: []string{
                        "provident",
                        "cum",
                        "doloribus",
                    },
                    Switches: []string{
                        "quidem",
                        "itaque",
                        "laboriosam",
                    },
                },
                operations.UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "modi",
                        "perspiciatis",
                        "hic",
                    },
                    SwitchProfiles: []string{
                        "aspernatur",
                        "libero",
                        "nam",
                    },
                    Switches: []string{
                        "recusandae",
                        "quod",
                    },
                },
            },
        },
        NetworkID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchSettingsMulticast200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchSettingsQosRule

Update a quality of service rule

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
    res, err := s.SwitchSettings.UpdateNetworkSwitchSettingsQosRule(ctx, operations.UpdateNetworkSwitchSettingsQosRuleRequest{
        RequestBody: &operations.UpdateNetworkSwitchSettingsQosRuleRequestBody{
            Dscp: sdk.Int64(904440),
            DstPort: sdk.Int64(423054),
            DstPortRange: sdk.String("quo"),
            Protocol: operations.UpdateNetworkSwitchSettingsQosRuleRequestBodyProtocolEnumAny.ToPointer(),
            SrcPort: sdk.Int64(849383),
            SrcPortRange: sdk.String("nemo"),
            Vlan: sdk.Int64(848722),
        },
        NetworkID: "facilis",
        QosRuleID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchSettingsQosRule200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchSettingsQosRulesOrder

Update the order in which the rules should be processed by the switch

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
    res, err := s.SwitchSettings.UpdateNetworkSwitchSettingsQosRulesOrder(ctx, operations.UpdateNetworkSwitchSettingsQosRulesOrderRequest{
        RequestBody: operations.UpdateNetworkSwitchSettingsQosRulesOrderRequestBody{
            RuleIds: []string{
                "assumenda",
                "recusandae",
                "distinctio",
            },
        },
        NetworkID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchSettingsQosRulesOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchSettingsStormControl

Update the storm control configuration for a switch network

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
    res, err := s.SwitchSettings.UpdateNetworkSwitchSettingsStormControl(ctx, operations.UpdateNetworkSwitchSettingsStormControlRequest{
        RequestBody: &operations.UpdateNetworkSwitchSettingsStormControlRequestBody{
            BroadcastThreshold: sdk.Int64(323365),
            MulticastThreshold: sdk.Int64(816151),
            UnknownUnicastThreshold: sdk.Int64(674683),
        },
        NetworkID: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchSettingsStormControl200ApplicationJSONObject != nil {
        // handle response
    }
}
```
