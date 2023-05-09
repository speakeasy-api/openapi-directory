# Settings

### Available Operations

* [GetDeviceApplianceUplinksSettings](#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [GetDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [GetDeviceWirelessBluetoothSettings](#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [GetDeviceWirelessRadioSettings](#getdevicewirelessradiosettings) - Return the radio settings of a device
* [GetNetworkAlertsSettings](#getnetworkalertssettings) - Return the alert configuration for this network
* [GetNetworkApplianceFirewallSettings](#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [GetNetworkApplianceSettings](#getnetworkappliancesettings) - Return the appliance settings for a network
* [GetNetworkApplianceVlansSettings](#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [GetNetworkSettings](#getnetworksettings) - Return the settings for a network
* [GetNetworkSwitchSettings](#getnetworkswitchsettings) - Returns the switch network settings
* [GetNetworkWirelessBluetoothSettings](#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [GetNetworkWirelessSettings](#getnetworkwirelesssettings) - Return the wireless settings for a network
* [GetNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [GetOrganizationAdaptivePolicySettings](#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [UpdateDeviceApplianceUplinksSettings](#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [UpdateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera
* [UpdateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [UpdateDeviceWirelessRadioSettings](#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [UpdateNetworkAlertsSettings](#updatenetworkalertssettings) - Update the alert configuration for this network
* [UpdateNetworkApplianceFirewallSettings](#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [UpdateNetworkApplianceSettings](#updatenetworkappliancesettings) - Update the appliance settings for a network
* [UpdateNetworkApplianceVlansSettings](#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [UpdateNetworkSettings](#updatenetworksettings) - Update the settings for a network
* [UpdateNetworkSwitchSettings](#updatenetworkswitchsettings) - Update switch network settings
* [UpdateNetworkWirelessBluetoothSettings](#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [UpdateNetworkWirelessSettings](#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [UpdateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [UpdateOrganizationAdaptivePolicySettings](#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings

## GetDeviceApplianceUplinksSettings

Return the uplink settings for an MX appliance

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
    res, err := s.Settings.GetDeviceApplianceUplinksSettings(ctx, operations.GetDeviceApplianceUplinksSettingsRequest{
        Serial: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceApplianceUplinksSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraVideoSettings

Returns video settings for the given camera

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
    res, err := s.Settings.GetDeviceCameraVideoSettings(ctx, operations.GetDeviceCameraVideoSettingsRequest{
        Serial: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraVideoSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceWirelessBluetoothSettings

Return the bluetooth settings for a wireless device

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
    res, err := s.Settings.GetDeviceWirelessBluetoothSettings(ctx, operations.GetDeviceWirelessBluetoothSettingsRequest{
        Serial: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceWirelessRadioSettings

Return the radio settings of a device

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
    res, err := s.Settings.GetDeviceWirelessRadioSettings(ctx, operations.GetDeviceWirelessRadioSettingsRequest{
        Serial: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessRadioSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkAlertsSettings

Return the alert configuration for this network

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
    res, err := s.Settings.GetNetworkAlertsSettings(ctx, operations.GetNetworkAlertsSettingsRequest{
        NetworkID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAlertsSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallSettings

Return the firewall settings for this network

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
    res, err := s.Settings.GetNetworkApplianceFirewallSettings(ctx, operations.GetNetworkApplianceFirewallSettingsRequest{
        NetworkID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSettings

Return the appliance settings for a network

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
    res, err := s.Settings.GetNetworkApplianceSettings(ctx, operations.GetNetworkApplianceSettingsRequest{
        NetworkID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSettings200ApplicationJSONObject != nil {
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
    res, err := s.Settings.GetNetworkApplianceVlansSettings(ctx, operations.GetNetworkApplianceVlansSettingsRequest{
        NetworkID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVlansSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSettings

Return the settings for a network

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
    res, err := s.Settings.GetNetworkSettings(ctx, operations.GetNetworkSettingsRequest{
        NetworkID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSettings200ApplicationJSONObject != nil {
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
    res, err := s.Settings.GetNetworkSwitchSettings(ctx, operations.GetNetworkSwitchSettingsRequest{
        NetworkID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessBluetoothSettings

Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.

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
    res, err := s.Settings.GetNetworkWirelessBluetoothSettings(ctx, operations.GetNetworkWirelessBluetoothSettingsRequest{
        NetworkID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSettings

Return the wireless settings for a network

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
    res, err := s.Settings.GetNetworkWirelessSettings(ctx, operations.GetNetworkWirelessSettingsRequest{
        NetworkID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidSplashSettings

Display the splash page settings for the given SSID

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
    res, err := s.Settings.GetNetworkWirelessSsidSplashSettings(ctx, operations.GetNetworkWirelessSsidSplashSettingsRequest{
        NetworkID: "veritatis",
        Number: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidSplashSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicySettings

Returns global adaptive policy settings in an organization

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
    res, err := s.Settings.GetOrganizationAdaptivePolicySettings(ctx, operations.GetOrganizationAdaptivePolicySettingsRequest{
        OrganizationID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicySettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceApplianceUplinksSettings

Update the uplink settings for an MX appliance

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
    res, err := s.Settings.UpdateDeviceApplianceUplinksSettings(ctx, operations.UpdateDeviceApplianceUplinksSettingsRequest{
        RequestBody: operations.UpdateDeviceApplianceUplinksSettingsRequestBody{
            Interfaces: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces{
                Wan1: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1{
                    Enabled: sdk.Bool(false),
                    Pppoe: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe{
                        Authentication: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication{
                            Enabled: sdk.Bool(false),
                            Password: sdk.String("soluta"),
                            Username: sdk.String("Thomas_Doyle"),
                        },
                        Enabled: sdk.Bool(false),
                    },
                    Svis: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis{
                        Ipv4: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4{
                            Address: sdk.String("0758 Brakus Camp"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnumStatic.ToPointer(),
                            Gateway: sdk.String("ipsam"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers{
                                Addresses: []string{
                                    "fugit",
                                },
                            },
                        },
                        Ipv6: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6{
                            Address: sdk.String("696 Gilbert Pines"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnumDynamic.ToPointer(),
                            Gateway: sdk.String("officia"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers{
                                Addresses: []string{
                                    "commodi",
                                    "sapiente",
                                },
                            },
                        },
                    },
                    VlanTagging: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging{
                        Enabled: sdk.Bool(false),
                        VlanID: sdk.Int64(627145),
                    },
                },
                Wan2: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2{
                    Enabled: sdk.Bool(false),
                    Pppoe: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe{
                        Authentication: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication{
                            Enabled: sdk.Bool(false),
                            Password: sdk.String("labore"),
                            Username: sdk.String("Gino_Rosenbaum47"),
                        },
                        Enabled: sdk.Bool(false),
                    },
                    Svis: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis{
                        Ipv4: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4{
                            Address: sdk.String("8697 Mante Points"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnumDynamic.ToPointer(),
                            Gateway: sdk.String("facilis"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers{
                                Addresses: []string{
                                    "explicabo",
                                    "qui",
                                    "tempora",
                                },
                            },
                        },
                        Ipv6: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6{
                            Address: sdk.String("4841 Harry Gateway"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnumDynamic.ToPointer(),
                            Gateway: sdk.String("distinctio"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers{
                                Addresses: []string{
                                    "eaque",
                                    "quis",
                                },
                            },
                        },
                    },
                    VlanTagging: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging{
                        Enabled: sdk.Bool(false),
                        VlanID: sdk.Int64(633006),
                    },
                },
            },
        },
        Serial: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceApplianceUplinksSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraVideoSettings

Update video settings for the given camera

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
    res, err := s.Settings.UpdateDeviceCameraVideoSettings(ctx, operations.UpdateDeviceCameraVideoSettingsRequest{
        RequestBody: &operations.UpdateDeviceCameraVideoSettingsRequestBody{
            ExternalRtspEnabled: sdk.Bool(false),
        },
        Serial: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraVideoSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceWirelessBluetoothSettings

Update the bluetooth settings for a wireless device

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
    res, err := s.Settings.UpdateDeviceWirelessBluetoothSettings(ctx, operations.UpdateDeviceWirelessBluetoothSettingsRequest{
        RequestBody: &operations.UpdateDeviceWirelessBluetoothSettingsRequestBody{
            Major: sdk.Int64(486862),
            Minor: sdk.Int64(935450),
            UUID: sdk.String("14ef9de3-2ec4-4e75-ad2e-8b05f969d948"),
        },
        Serial: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceWirelessRadioSettings

Update the radio settings of a device

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
    res, err := s.Settings.UpdateDeviceWirelessRadioSettings(ctx, operations.UpdateDeviceWirelessRadioSettingsRequest{
        RequestBody: &operations.UpdateDeviceWirelessRadioSettingsRequestBody{
            FiveGhzSettings: &operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings{
                Channel: operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnumOneHundredAndTwentyFour.ToPointer(),
                ChannelWidth: operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnumEighty.ToPointer(),
                TargetPower: sdk.Int64(170588),
            },
            RfProfileID: sdk.String("impedit"),
            TwoFourGhzSettings: &operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings{
                Channel: operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnumTen.ToPointer(),
                TargetPower: sdk.Int64(328423),
            },
        },
        Serial: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceWirelessRadioSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkAlertsSettings

Update the alert configuration for this network

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
    res, err := s.Settings.UpdateNetworkAlertsSettings(ctx, operations.UpdateNetworkAlertsSettingsRequest{
        RequestBody: &operations.UpdateNetworkAlertsSettingsRequestBody{
            Alerts: []UpdateNetworkAlertsSettingsRequestBodyAlerts{
                operations.UpdateNetworkAlertsSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "beatae",
                            "magnam",
                            "illo",
                        },
                        HTTPServerIds: []string{
                            "et",
                            "perspiciatis",
                            "ut",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "totam": "nobis",
                        "magnam": "libero",
                        "magnam": "at",
                    },
                    Type: "blanditiis",
                },
                operations.UpdateNetworkAlertsSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "doloremque",
                            "nihil",
                            "repellendus",
                            "tempora",
                        },
                        HTTPServerIds: []string{
                            "blanditiis",
                            "dicta",
                            "veritatis",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "quis": "labore",
                        "enim": "consectetur",
                        "perspiciatis": "pariatur",
                        "minima": "nobis",
                    },
                    Type: "dolorum",
                },
                operations.UpdateNetworkAlertsSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "dignissimos",
                            "vero",
                        },
                        HTTPServerIds: []string{
                            "quam",
                            "sunt",
                            "sit",
                            "consequatur",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "nihil": "eius",
                        "eius": "ad",
                        "vel": "itaque",
                    },
                    Type: "maiores",
                },
            },
            DefaultDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations{
                AllAdmins: sdk.Bool(false),
                Emails: []string{
                    "itaque",
                    "cumque",
                    "nemo",
                },
                HTTPServerIds: []string{
                    "harum",
                    "provident",
                    "veniam",
                },
                Snmp: sdk.Bool(false),
            },
        },
        NetworkID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAlertsSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallSettings

Update the firewall settings for this network

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
    res, err := s.Settings.UpdateNetworkApplianceFirewallSettings(ctx, operations.UpdateNetworkApplianceFirewallSettingsRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallSettingsRequestBody{
            SpoofingProtection: &operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection{
                IPSourceGuard: &operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIPSourceGuard{
                    Mode: operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIPSourceGuardModeEnumBlock.ToPointer(),
                },
            },
        },
        NetworkID: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSettings

Update the appliance settings for a network

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
    res, err := s.Settings.UpdateNetworkApplianceSettings(ctx, operations.UpdateNetworkApplianceSettingsRequest{
        RequestBody: &operations.UpdateNetworkApplianceSettingsRequestBody{
            ClientTrackingMethod: operations.UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnumIPAddress.ToPointer(),
            DeploymentMode: operations.UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnumRouted.ToPointer(),
            DynamicDNS: &operations.UpdateNetworkApplianceSettingsRequestBodyDynamicDNS{
                Enabled: sdk.Bool(false),
                Prefix: sdk.String("explicabo"),
            },
        },
        NetworkID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSettings200ApplicationJSONObject != nil {
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
    res, err := s.Settings.UpdateNetworkApplianceVlansSettings(ctx, operations.UpdateNetworkApplianceVlansSettingsRequest{
        RequestBody: &operations.UpdateNetworkApplianceVlansSettingsRequestBody{
            VlansEnabled: sdk.Bool(false),
        },
        NetworkID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVlansSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSettings

Update the settings for a network

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
    res, err := s.Settings.UpdateNetworkSettings(ctx, operations.UpdateNetworkSettingsRequest{
        RequestBody: &operations.UpdateNetworkSettingsRequestBody{
            LocalStatusPage: &operations.UpdateNetworkSettingsRequestBodyLocalStatusPage{
                Authentication: &operations.UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication{
                    Enabled: sdk.Bool(false),
                    Password: sdk.String("ullam"),
                },
            },
            LocalStatusPageEnabled: sdk.Bool(false),
            RemoteStatusPageEnabled: sdk.Bool(false),
            SecurePort: &operations.UpdateNetworkSettingsRequestBodySecurePort{
                Enabled: sdk.Bool(false),
            },
        },
        NetworkID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSettings200ApplicationJSONObject != nil {
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
    res, err := s.Settings.UpdateNetworkSwitchSettings(ctx, operations.UpdateNetworkSwitchSettingsRequest{
        RequestBody: &operations.UpdateNetworkSwitchSettingsRequestBody{
            PowerExceptions: []UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                    PowerType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumUseNetworkSetting,
                    Serial: "accusantium",
                },
                operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                    PowerType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumUseNetworkSetting,
                    Serial: "accusamus",
                },
                operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                    PowerType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumCombined,
                    Serial: "laborum",
                },
                operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                    PowerType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumRedundant,
                    Serial: "adipisci",
                },
            },
            UseCombinedPower: sdk.Bool(false),
            Vlan: sdk.Int64(57161),
        },
        NetworkID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessBluetoothSettings

Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.

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
    res, err := s.Settings.UpdateNetworkWirelessBluetoothSettings(ctx, operations.UpdateNetworkWirelessBluetoothSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessBluetoothSettingsRequestBody{
            AdvertisingEnabled: sdk.Bool(false),
            Major: sdk.Int64(57457),
            MajorMinorAssignmentMode: operations.UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnumNonUnique.ToPointer(),
            Minor: sdk.Int64(952930),
            ScanningEnabled: sdk.Bool(false),
            UUID: sdk.String("13833424-f7a6-4004-827f-d4f9284e0025"),
        },
        NetworkID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSettings

Update the wireless settings for a network

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
    res, err := s.Settings.UpdateNetworkWirelessSettings(ctx, operations.UpdateNetworkWirelessSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessSettingsRequestBody{
            Ipv6BridgeEnabled: sdk.Bool(false),
            LedLightsOn: sdk.Bool(false),
            LocationAnalyticsEnabled: sdk.Bool(false),
            MeshingEnabled: sdk.Bool(false),
            UpgradeStrategy: operations.UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnumMinimizeClientDowntime.ToPointer(),
        },
        NetworkID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidSplashSettings

Modify the splash page settings for the given SSID

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
    res, err := s.Settings.UpdateNetworkWirelessSsidSplashSettings(ctx, operations.UpdateNetworkWirelessSsidSplashSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBody{
            AllowSimultaneousLogins: sdk.Bool(false),
            Billing: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling{
                FreeAccess: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess{
                    DurationInMinutes: sdk.Int64(781770),
                    Enabled: sdk.Bool(false),
                },
                PrepaidAccessFastLoginEnabled: sdk.Bool(false),
                ReplyToEmailAddress: sdk.String("illo"),
            },
            BlockAllTrafficBeforeSignOn: sdk.Bool(false),
            ControllerDisconnectionBehavior: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnumOpen.ToPointer(),
            GuestSponsorship: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship{
                DurationInMinutes: sdk.Int64(734647),
                GuestCanRequestTimeframe: sdk.Bool(false),
            },
            RedirectURL: sdk.String("temporibus"),
            SentryEnrollment: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment{
                EnforcedSystems: []string{
                    "voluptatum",
                    "aliquid",
                },
                Strength: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnumStrict.ToPointer(),
                SystemsManagerNetwork: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork{
                    ID: "f7551b22-aab0-49bc-882a-e010b5e4a698",
                },
            },
            SplashImage: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage{
                Extension: sdk.String("nam"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage{
                    Contents: sdk.String("ratione"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnumGif.ToPointer(),
                },
                Md5: sdk.String("accusamus"),
            },
            SplashLogo: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo{
                Extension: sdk.String("magnam"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage{
                    Contents: sdk.String("reprehenderit"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnumPng.ToPointer(),
                },
                Md5: sdk.String("dignissimos"),
            },
            SplashPrepaidFront: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront{
                Extension: sdk.String("et"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage{
                    Contents: sdk.String("veritatis"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnumJpg.ToPointer(),
                },
                Md5: sdk.String("velit"),
            },
            SplashTimeout: sdk.Int64(885479),
            SplashURL: sdk.String("minus"),
            UseRedirectURL: sdk.Bool(false),
            UseSplashURL: sdk.Bool(false),
            WelcomeMessage: sdk.String("inventore"),
        },
        NetworkID: "odio",
        Number: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationAdaptivePolicySettings

Update global adaptive policy settings

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
    res, err := s.Settings.UpdateOrganizationAdaptivePolicySettings(ctx, operations.UpdateOrganizationAdaptivePolicySettingsRequest{
        RequestBody: &operations.UpdateOrganizationAdaptivePolicySettingsRequestBody{
            EnabledNetworks: []string{
                "architecto",
                "veritatis",
            },
        },
        OrganizationID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAdaptivePolicySettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
