# Wireless

### Available Operations

* [CreateNetworkWirelessRfProfile](#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [CreateNetworkWirelessSsidIdentityPsk](#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [DeleteNetworkWirelessRfProfile](#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [DeleteNetworkWirelessSsidIdentityPsk](#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [GetDeviceWirelessBluetoothSettings](#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [GetDeviceWirelessConnectionStats](#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [GetDeviceWirelessLatencyStats](#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [GetDeviceWirelessRadioSettings](#getdevicewirelessradiosettings) - Return the radio settings of a device
* [GetDeviceWirelessStatus](#getdevicewirelessstatus) - Return the SSID statuses of an access point
* [GetNetworkWirelessAirMarshal](#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network
* [GetNetworkWirelessAlternateManagementInterface](#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [GetNetworkWirelessBilling](#getnetworkwirelessbilling) - Return the billing settings of this network
* [GetNetworkWirelessBluetoothSettings](#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [GetNetworkWirelessChannelUtilizationHistory](#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client
* [GetNetworkWirelessClientConnectionStats](#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [GetNetworkWirelessClientConnectivityEvents](#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [GetNetworkWirelessClientCountHistory](#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client
* [GetNetworkWirelessClientLatencyHistory](#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [GetNetworkWirelessClientLatencyStats](#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [GetNetworkWirelessClientsConnectionStats](#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [GetNetworkWirelessClientsLatencyStats](#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [GetNetworkWirelessConnectionStats](#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [GetNetworkWirelessDataRateHistory](#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client
* [GetNetworkWirelessDevicesConnectionStats](#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [GetNetworkWirelessDevicesLatencyStats](#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [GetNetworkWirelessFailedConnections](#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range
* [GetNetworkWirelessLatencyHistory](#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client
* [GetNetworkWirelessLatencyStats](#getnetworkwirelesslatencystats) - Aggregated latency info for this network
* [GetNetworkWirelessMeshStatuses](#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters
* [GetNetworkWirelessRfProfile](#getnetworkwirelessrfprofile) - Return a RF profile
* [GetNetworkWirelessRfProfiles](#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [GetNetworkWirelessSettings](#getnetworkwirelesssettings) - Return the wireless settings for a network
* [GetNetworkWirelessSignalQualityHistory](#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client
* [GetNetworkWirelessSsid](#getnetworkwirelessssid) - Return a single MR SSID
* [GetNetworkWirelessSsidBonjourForwarding](#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [GetNetworkWirelessSsidDeviceTypeGroupPolicies](#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [GetNetworkWirelessSsidEapOverride](#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [GetNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidHotspot20](#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [GetNetworkWirelessSsidIdentityPsk](#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [GetNetworkWirelessSsidIdentityPsks](#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [GetNetworkWirelessSsidSchedules](#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [GetNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [GetNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [GetNetworkWirelessSsidVpn](#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [GetNetworkWirelessSsids](#getnetworkwirelessssids) - List the MR SSIDs in a network
* [GetNetworkWirelessUsageHistory](#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client
* [GetOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [UpdateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [UpdateDeviceWirelessRadioSettings](#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [UpdateNetworkWirelessAlternateManagementInterface](#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP
* [UpdateNetworkWirelessBilling](#updatenetworkwirelessbilling) - Update the billing settings
* [UpdateNetworkWirelessBluetoothSettings](#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [UpdateNetworkWirelessRfProfile](#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network
* [UpdateNetworkWirelessSettings](#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [UpdateNetworkWirelessSsid](#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [UpdateNetworkWirelessSsidBonjourForwarding](#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [UpdateNetworkWirelessSsidDeviceTypeGroupPolicies](#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [UpdateNetworkWirelessSsidEapOverride](#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [UpdateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidHotspot20](#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [UpdateNetworkWirelessSsidIdentityPsk](#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [UpdateNetworkWirelessSsidSchedules](#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [UpdateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [UpdateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [UpdateNetworkWirelessSsidVpn](#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID

## CreateNetworkWirelessRfProfile

Creates new RF profile for this network

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
    res, err := s.Wireless.CreateNetworkWirelessRfProfile(ctx, operations.CreateNetworkWirelessRfProfileRequest{
        RequestBody: operations.CreateNetworkWirelessRfProfileRequestBody{
            ApBandSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyApBandSettings{
                BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumDual.ToPointer(),
                BandSteeringEnabled: sdk.Bool(false),
            },
            BandSelectionType: operations.CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumSsid,
            ClientBalancingEnabled: sdk.Bool(false),
            FiveGhzSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings{
                ChannelWidth: sdk.String("iste"),
                MaxPower: sdk.Int64(912651),
                MinBitrate: sdk.Int64(440792),
                MinPower: sdk.Int64(807921),
                Rxsop: sdk.Int64(539608),
                ValidAutoChannels: []int64{
                    285353,
                },
            },
            MinBitrateType: operations.CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumSsid.ToPointer(),
            Name: "Forrest Bailey",
            PerSsidSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings{
                Zero: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9999.63),
                },
                One: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(2269.9),
                },
                Ten: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3572.54),
                },
                Eleven: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3284.02),
                },
                Twelve: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(2478.4),
                },
                Thirteen: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(1095.75),
                },
                Fourteen: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(6889.38),
                },
                Two: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3342.82),
                },
                Three: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(1954.98),
                },
                Four: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(5324.3),
                },
                Five: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3741.17),
                },
                Six: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(1067.12),
                },
                Seven: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3861.38),
                },
                Eight: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(7124.77),
                },
                Nine: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(5809.85),
                },
            },
            Transmission: &operations.CreateNetworkWirelessRfProfileRequestBodyTransmission{
                Enabled: sdk.Bool(false),
            },
            TwoFourGhzSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings{
                AxEnabled: sdk.Bool(false),
                MaxPower: sdk.Int64(347333),
                MinBitrate: sdk.Float32(4631.38),
                MinPower: sdk.Int64(170127),
                Rxsop: sdk.Int64(943646),
                ValidAutoChannels: []int64{
                    742397,
                    747328,
                    944467,
                    972410,
                },
            },
        },
        NetworkID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWirelessRfProfile201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkWirelessSsidIdentityPsk

Create an Identity PSK

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
    res, err := s.Wireless.CreateNetworkWirelessSsidIdentityPsk(ctx, operations.CreateNetworkWirelessSsidIdentityPskRequest{
        RequestBody: operations.CreateNetworkWirelessSsidIdentityPskRequestBody{
            GroupPolicyID: "fuga",
            Name: "Elsa DuBuque Sr.",
            Passphrase: sdk.String("aliquid"),
        },
        NetworkID: "eos",
        Number: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWirelessSsidIdentityPsk201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkWirelessRfProfile

Delete a RF Profile

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
    res, err := s.Wireless.DeleteNetworkWirelessRfProfile(ctx, operations.DeleteNetworkWirelessRfProfileRequest{
        NetworkID: "aperiam",
        RfProfileID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkWirelessSsidIdentityPsk

Delete an Identity PSK

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
    res, err := s.Wireless.DeleteNetworkWirelessSsidIdentityPsk(ctx, operations.DeleteNetworkWirelessSsidIdentityPskRequest{
        IdentityPskID: "modi",
        NetworkID: "saepe",
        Number: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.Wireless.GetDeviceWirelessBluetoothSettings(ctx, operations.GetDeviceWirelessBluetoothSettingsRequest{
        Serial: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceWirelessConnectionStats

Aggregated connectivity info for a given AP on this network

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
    res, err := s.Wireless.GetDeviceWirelessConnectionStats(ctx, operations.GetDeviceWirelessConnectionStatsRequest{
        ApTag: sdk.String("dolor"),
        Band: operations.GetDeviceWirelessConnectionStatsBandEnumFive.ToPointer(),
        Serial: "eligendi",
        Ssid: sdk.Int64(514681),
        T0: sdk.String("voluptate"),
        T1: sdk.String("sint"),
        Timespan: sdk.Float32(3968),
        Vlan: sdk.Int64(237033),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceWirelessLatencyStats

Aggregated latency info for a given AP on this network

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
    res, err := s.Wireless.GetDeviceWirelessLatencyStats(ctx, operations.GetDeviceWirelessLatencyStatsRequest{
        ApTag: sdk.String("consequuntur"),
        Band: operations.GetDeviceWirelessLatencyStatsBandEnumTwo4.ToPointer(),
        Fields: sdk.String("possimus"),
        Serial: "natus",
        Ssid: sdk.Int64(889231),
        T0: sdk.String("quis"),
        T1: sdk.String("enim"),
        Timespan: sdk.Float32(7197.21),
        Vlan: sdk.Int64(639233),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessLatencyStats200ApplicationJSONObject != nil {
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
    res, err := s.Wireless.GetDeviceWirelessRadioSettings(ctx, operations.GetDeviceWirelessRadioSettingsRequest{
        Serial: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessRadioSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceWirelessStatus

Return the SSID statuses of an access point

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
    res, err := s.Wireless.GetDeviceWirelessStatus(ctx, operations.GetDeviceWirelessStatusRequest{
        Serial: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessAirMarshal

List Air Marshal scan results from a network

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
    res, err := s.Wireless.GetNetworkWirelessAirMarshal(ctx, operations.GetNetworkWirelessAirMarshalRequest{
        NetworkID: "dolorem",
        T0: sdk.String("reprehenderit"),
        Timespan: sdk.Float32(5376.5),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessAirMarshal200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessAlternateManagementInterface

Return alternate management interface and devices with IP assigned

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
    res, err := s.Wireless.GetNetworkWirelessAlternateManagementInterface(ctx, operations.GetNetworkWirelessAlternateManagementInterfaceRequest{
        NetworkID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessAlternateManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessBilling

Return the billing settings of this network

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
    res, err := s.Wireless.GetNetworkWirelessBilling(ctx, operations.GetNetworkWirelessBillingRequest{
        NetworkID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessBilling200ApplicationJSONObject != nil {
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
    res, err := s.Wireless.GetNetworkWirelessBluetoothSettings(ctx, operations.GetNetworkWirelessBluetoothSettingsRequest{
        NetworkID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessChannelUtilizationHistory

Return AP channel utilization over time for a device or network client

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
    res, err := s.Wireless.GetNetworkWirelessChannelUtilizationHistory(ctx, operations.GetNetworkWirelessChannelUtilizationHistoryRequest{
        ApTag: sdk.String("earum"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessChannelUtilizationHistoryBandEnumTwo4.ToPointer(),
        ClientID: sdk.String("dolor"),
        DeviceSerial: sdk.String("molestias"),
        NetworkID: "quam",
        Resolution: sdk.Int64(795575),
        T0: sdk.String("distinctio"),
        T1: sdk.String("quibusdam"),
        Timespan: sdk.Float32(6043.58),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessChannelUtilizationHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientConnectionStats

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

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
    res, err := s.Wireless.GetNetworkWirelessClientConnectionStats(ctx, operations.GetNetworkWirelessClientConnectionStatsRequest{
        ApTag: sdk.String("saepe"),
        Band: operations.GetNetworkWirelessClientConnectionStatsBandEnumTwo4.ToPointer(),
        ClientID: "dicta",
        NetworkID: "earum",
        Ssid: sdk.Int64(961548),
        T0: sdk.String("esse"),
        T1: sdk.String("distinctio"),
        Timespan: sdk.Float32(6813.06),
        Vlan: sdk.Int64(348727),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientConnectivityEvents

List the wireless connectivity events for a client within a network in the timespan.

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
    res, err := s.Wireless.GetNetworkWirelessClientConnectivityEvents(ctx, operations.GetNetworkWirelessClientConnectivityEventsRequest{
        Band: operations.GetNetworkWirelessClientConnectivityEventsBandEnumTwo4.ToPointer(),
        ClientID: "vitae",
        DeviceSerial: sdk.String("eius"),
        EndingBefore: sdk.String("doloribus"),
        IncludedSeverities: []GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum{
            operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumGood,
        },
        NetworkID: "iste",
        PerPage: sdk.Int64(847861),
        SsidNumber: operations.GetNetworkWirelessClientConnectivityEventsSsidNumberEnumOne.ToPointer(),
        StartingAfter: sdk.String("necessitatibus"),
        T0: sdk.String("autem"),
        T1: sdk.String("ipsam"),
        Timespan: sdk.Float32(4081.54),
        Types: []GetNetworkWirelessClientConnectivityEventsTypesEnum{
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumAuth,
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumAuth,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientCountHistory

Return wireless client counts over time for a network, device, or network client

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
    res, err := s.Wireless.GetNetworkWirelessClientCountHistory(ctx, operations.GetNetworkWirelessClientCountHistoryRequest{
        ApTag: sdk.String("qui"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessClientCountHistoryBandEnumTwo4.ToPointer(),
        ClientID: sdk.String("minima"),
        DeviceSerial: sdk.String("cupiditate"),
        NetworkID: "totam",
        Resolution: sdk.Int64(671313),
        Ssid: sdk.Int64(613105),
        T0: sdk.String("consectetur"),
        T1: sdk.String("facilis"),
        Timespan: sdk.Float32(6134.45),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientCountHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

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
    res, err := s.Wireless.GetNetworkWirelessClientLatencyHistory(ctx, operations.GetNetworkWirelessClientLatencyHistoryRequest{
        ClientID: "placeat",
        NetworkID: "vel",
        Resolution: sdk.Int64(401635),
        T0: sdk.String("nostrum"),
        T1: sdk.String("commodi"),
        Timespan: sdk.Float32(3297.85),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientLatencyHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientLatencyStats

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

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
    res, err := s.Wireless.GetNetworkWirelessClientLatencyStats(ctx, operations.GetNetworkWirelessClientLatencyStatsRequest{
        ApTag: sdk.String("quas"),
        Band: operations.GetNetworkWirelessClientLatencyStatsBandEnumTwo4.ToPointer(),
        ClientID: "quod",
        Fields: sdk.String("assumenda"),
        NetworkID: "sint",
        Ssid: sdk.Int64(424031),
        T0: sdk.String("quia"),
        T1: sdk.String("ut"),
        Timespan: sdk.Float32(1421.62),
        Vlan: sdk.Int64(210405),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientLatencyStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientsConnectionStats

Aggregated connectivity info for this network, grouped by clients

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
    res, err := s.Wireless.GetNetworkWirelessClientsConnectionStats(ctx, operations.GetNetworkWirelessClientsConnectionStatsRequest{
        ApTag: sdk.String("inventore"),
        Band: operations.GetNetworkWirelessClientsConnectionStatsBandEnumFive.ToPointer(),
        NetworkID: "alias",
        Ssid: sdk.Int64(304287),
        T0: sdk.String("nobis"),
        T1: sdk.String("quasi"),
        Timespan: sdk.Float32(1552.12),
        Vlan: sdk.Int64(990340),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientsConnectionStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientsLatencyStats

Aggregated latency info for this network, grouped by clients

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
    res, err := s.Wireless.GetNetworkWirelessClientsLatencyStats(ctx, operations.GetNetworkWirelessClientsLatencyStatsRequest{
        ApTag: sdk.String("eaque"),
        Band: operations.GetNetworkWirelessClientsLatencyStatsBandEnumSix.ToPointer(),
        Fields: sdk.String("rerum"),
        NetworkID: "optio",
        Ssid: sdk.Int64(406826),
        T0: sdk.String("deleniti"),
        T1: sdk.String("quo"),
        Timespan: sdk.Float32(3348.96),
        Vlan: sdk.Int64(656781),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientsLatencyStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessConnectionStats

Aggregated connectivity info for this network

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
    res, err := s.Wireless.GetNetworkWirelessConnectionStats(ctx, operations.GetNetworkWirelessConnectionStatsRequest{
        ApTag: sdk.String("velit"),
        Band: operations.GetNetworkWirelessConnectionStatsBandEnumFive.ToPointer(),
        NetworkID: "deleniti",
        Ssid: sdk.Int64(984549),
        T0: sdk.String("odit"),
        T1: sdk.String("quasi"),
        Timespan: sdk.Float32(759.37),
        Vlan: sdk.Int64(48752),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessDataRateHistory

Return PHY data rates over time for a network, device, or network client

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
    res, err := s.Wireless.GetNetworkWirelessDataRateHistory(ctx, operations.GetNetworkWirelessDataRateHistoryRequest{
        ApTag: sdk.String("molestias"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessDataRateHistoryBandEnumTwo4.ToPointer(),
        ClientID: sdk.String("dolorem"),
        DeviceSerial: sdk.String("delectus"),
        NetworkID: "asperiores",
        Resolution: sdk.Int64(13309),
        Ssid: sdk.Int64(802480),
        T0: sdk.String("ipsa"),
        T1: sdk.String("accusantium"),
        Timespan: sdk.Float32(9010.59),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessDataRateHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

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
    res, err := s.Wireless.GetNetworkWirelessDevicesConnectionStats(ctx, operations.GetNetworkWirelessDevicesConnectionStatsRequest{
        ApTag: sdk.String("expedita"),
        Band: operations.GetNetworkWirelessDevicesConnectionStatsBandEnumSix.ToPointer(),
        NetworkID: "quas",
        Ssid: sdk.Int64(829245),
        T0: sdk.String("nisi"),
        T1: sdk.String("fuga"),
        Timespan: sdk.Float32(458.6),
        Vlan: sdk.Int64(925818),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessDevicesConnectionStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessDevicesLatencyStats

Aggregated latency info for this network, grouped by node

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
    res, err := s.Wireless.GetNetworkWirelessDevicesLatencyStats(ctx, operations.GetNetworkWirelessDevicesLatencyStatsRequest{
        ApTag: sdk.String("porro"),
        Band: operations.GetNetworkWirelessDevicesLatencyStatsBandEnumFive.ToPointer(),
        Fields: sdk.String("tempora"),
        NetworkID: "veniam",
        Ssid: sdk.Int64(360745),
        T0: sdk.String("recusandae"),
        T1: sdk.String("officiis"),
        Timespan: sdk.Float32(1366.56),
        Vlan: sdk.Int64(190663),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessDevicesLatencyStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessFailedConnections

List of all failed client connection events on this network in a given time range

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
    res, err := s.Wireless.GetNetworkWirelessFailedConnections(ctx, operations.GetNetworkWirelessFailedConnectionsRequest{
        ApTag: sdk.String("quisquam"),
        Band: operations.GetNetworkWirelessFailedConnectionsBandEnumTwo4.ToPointer(),
        ClientID: sdk.String("aut"),
        NetworkID: "porro",
        Serial: sdk.String("ipsam"),
        Ssid: sdk.Int64(651558),
        T0: sdk.String("maiores"),
        T1: sdk.String("nesciunt"),
        Timespan: sdk.Float32(1149.3),
        Vlan: sdk.Int64(444537),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessFailedConnections200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessLatencyHistory

Return average wireless latency over time for a network, device, or network client

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
    res, err := s.Wireless.GetNetworkWirelessLatencyHistory(ctx, operations.GetNetworkWirelessLatencyHistoryRequest{
        AccessCategory: operations.GetNetworkWirelessLatencyHistoryAccessCategoryEnumVideoTraffic.ToPointer(),
        ApTag: sdk.String("distinctio"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessLatencyHistoryBandEnumSix.ToPointer(),
        ClientID: sdk.String("nostrum"),
        DeviceSerial: sdk.String("non"),
        NetworkID: "sequi",
        Resolution: sdk.Int64(199251),
        Ssid: sdk.Int64(388404),
        T0: sdk.String("porro"),
        T1: sdk.String("voluptatum"),
        Timespan: sdk.Float32(1679.62),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessLatencyHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessLatencyStats

Aggregated latency info for this network

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
    res, err := s.Wireless.GetNetworkWirelessLatencyStats(ctx, operations.GetNetworkWirelessLatencyStatsRequest{
        ApTag: sdk.String("temporibus"),
        Band: operations.GetNetworkWirelessLatencyStatsBandEnumSix.ToPointer(),
        Fields: sdk.String("voluptate"),
        NetworkID: "deserunt",
        Ssid: sdk.Int64(290426),
        T0: sdk.String("at"),
        T1: sdk.String("veniam"),
        Timespan: sdk.Float32(9807.41),
        Vlan: sdk.Int64(790645),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessLatencyStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessMeshStatuses

List wireless mesh statuses for repeaters

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
    res, err := s.Wireless.GetNetworkWirelessMeshStatuses(ctx, operations.GetNetworkWirelessMeshStatusesRequest{
        EndingBefore: sdk.String("est"),
        NetworkID: "consequuntur",
        PerPage: sdk.Int64(892396),
        StartingAfter: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessMeshStatuses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessRfProfile

Return a RF profile

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
    res, err := s.Wireless.GetNetworkWirelessRfProfile(ctx, operations.GetNetworkWirelessRfProfileRequest{
        NetworkID: "harum",
        RfProfileID: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessRfProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessRfProfiles

List the non-basic RF profiles for this network

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
    res, err := s.Wireless.GetNetworkWirelessRfProfiles(ctx, operations.GetNetworkWirelessRfProfilesRequest{
        IncludeTemplateProfiles: sdk.Bool(false),
        NetworkID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessRfProfiles200ApplicationJSONObjects != nil {
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
    res, err := s.Wireless.GetNetworkWirelessSettings(ctx, operations.GetNetworkWirelessSettingsRequest{
        NetworkID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSignalQualityHistory

Return signal quality (SNR/RSSI) over time for a device or network client

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
    res, err := s.Wireless.GetNetworkWirelessSignalQualityHistory(ctx, operations.GetNetworkWirelessSignalQualityHistoryRequest{
        ApTag: sdk.String("quae"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessSignalQualityHistoryBandEnumFive.ToPointer(),
        ClientID: sdk.String("sequi"),
        DeviceSerial: sdk.String("at"),
        NetworkID: "cupiditate",
        Resolution: sdk.Int64(616125),
        Ssid: sdk.Int64(475443),
        T0: sdk.String("voluptas"),
        T1: sdk.String("id"),
        Timespan: sdk.Float32(6104.41),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSignalQualityHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsid

Return a single MR SSID

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
    res, err := s.Wireless.GetNetworkWirelessSsid(ctx, operations.GetNetworkWirelessSsidRequest{
        NetworkID: "quaerat",
        Number: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidBonjourForwarding

List the Bonjour forwarding setting and rules for the SSID

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
    res, err := s.Wireless.GetNetworkWirelessSsidBonjourForwarding(ctx, operations.GetNetworkWirelessSsidBonjourForwardingRequest{
        NetworkID: "doloremque",
        Number: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidDeviceTypeGroupPolicies

List the device type group policies for the SSID

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
    res, err := s.Wireless.GetNetworkWirelessSsidDeviceTypeGroupPolicies(ctx, operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest{
        NetworkID: "nisi",
        Number: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidEapOverride

Return the EAP overridden parameters for an SSID

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
    res, err := s.Wireless.GetNetworkWirelessSsidEapOverride(ctx, operations.GetNetworkWirelessSsidEapOverrideRequest{
        NetworkID: "velit",
        Number: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidEapOverride200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidFirewallL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

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
    res, err := s.Wireless.GetNetworkWirelessSsidFirewallL3FirewallRules(ctx, operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest{
        NetworkID: "exercitationem",
        Number: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidFirewallL7FirewallRules

Return the L7 firewall rules for an SSID on an MR network

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
    res, err := s.Wireless.GetNetworkWirelessSsidFirewallL7FirewallRules(ctx, operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest{
        NetworkID: "tenetur",
        Number: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidHotspot20

Return the Hotspot 2.0 settings for an SSID

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
    res, err := s.Wireless.GetNetworkWirelessSsidHotspot20(ctx, operations.GetNetworkWirelessSsidHotspot20Request{
        NetworkID: "earum",
        Number: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidHotspot20200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidIdentityPsk

Return an Identity PSK

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
    res, err := s.Wireless.GetNetworkWirelessSsidIdentityPsk(ctx, operations.GetNetworkWirelessSsidIdentityPskRequest{
        IdentityPskID: "quaerat",
        NetworkID: "magni",
        Number: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidIdentityPsks

List all Identity PSKs in a wireless network

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
    res, err := s.Wireless.GetNetworkWirelessSsidIdentityPsks(ctx, operations.GetNetworkWirelessSsidIdentityPsksRequest{
        NetworkID: "fuga",
        Number: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidIdentityPsks200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidSchedules

List the outage schedule for the SSID

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
    res, err := s.Wireless.GetNetworkWirelessSsidSchedules(ctx, operations.GetNetworkWirelessSsidSchedulesRequest{
        NetworkID: "corporis",
        Number: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidSchedules200ApplicationJSONObject != nil {
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
    res, err := s.Wireless.GetNetworkWirelessSsidSplashSettings(ctx, operations.GetNetworkWirelessSsidSplashSettingsRequest{
        NetworkID: "voluptatum",
        Number: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidSplashSettings200ApplicationJSONObject != nil {
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
    res, err := s.Wireless.GetNetworkWirelessSsidTrafficShapingRules(ctx, operations.GetNetworkWirelessSsidTrafficShapingRulesRequest{
        NetworkID: "soluta",
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

## GetNetworkWirelessSsidVpn

List the VPN settings for the SSID.

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
    res, err := s.Wireless.GetNetworkWirelessSsidVpn(ctx, operations.GetNetworkWirelessSsidVpnRequest{
        NetworkID: "sed",
        Number: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsids

List the MR SSIDs in a network

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
    res, err := s.Wireless.GetNetworkWirelessSsids(ctx, operations.GetNetworkWirelessSsidsRequest{
        NetworkID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsids200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessUsageHistory

Return AP usage over time for a device or network client

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
    res, err := s.Wireless.GetNetworkWirelessUsageHistory(ctx, operations.GetNetworkWirelessUsageHistoryRequest{
        ApTag: sdk.String("cum"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessUsageHistoryBandEnumFive.ToPointer(),
        ClientID: sdk.String("asperiores"),
        DeviceSerial: sdk.String("saepe"),
        NetworkID: "aspernatur",
        Resolution: sdk.Int64(5534),
        Ssid: sdk.Int64(401261),
        T0: sdk.String("in"),
        T1: sdk.String("molestias"),
        Timespan: sdk.Float32(1075.98),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationWirelessDevicesEthernetStatuses

Endpoint to see power status for wireless devices

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
    res, err := s.Wireless.GetOrganizationWirelessDevicesEthernetStatuses(ctx, operations.GetOrganizationWirelessDevicesEthernetStatusesRequest{
        EndingBefore: sdk.String("placeat"),
        NetworkIds: []string{
            "nostrum",
            "voluptatibus",
            "saepe",
            "aut",
        },
        OrganizationID: "a",
        PerPage: sdk.Int64(403899),
        StartingAfter: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects != nil {
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
    res, err := s.Wireless.UpdateDeviceWirelessBluetoothSettings(ctx, operations.UpdateDeviceWirelessBluetoothSettingsRequest{
        RequestBody: &operations.UpdateDeviceWirelessBluetoothSettingsRequestBody{
            Major: sdk.Int64(258145),
            Minor: sdk.Int64(130660),
            UUID: sdk.String("4275860f-8c0a-40bd-92a2-024ffa86c794"),
        },
        Serial: "nobis",
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
    res, err := s.Wireless.UpdateDeviceWirelessRadioSettings(ctx, operations.UpdateDeviceWirelessRadioSettingsRequest{
        RequestBody: &operations.UpdateDeviceWirelessRadioSettingsRequestBody{
            FiveGhzSettings: &operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings{
                Channel: operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnumOneHundredAndForty.ToPointer(),
                ChannelWidth: operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnumForty.ToPointer(),
                TargetPower: sdk.Int64(550168),
            },
            RfProfileID: sdk.String("repellat"),
            TwoFourGhzSettings: &operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings{
                Channel: operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnumNine.ToPointer(),
                TargetPower: sdk.Int64(924571),
            },
        },
        Serial: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceWirelessRadioSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessAlternateManagementInterface

Update alternate management interface and device static IP

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
    res, err := s.Wireless.UpdateNetworkWirelessAlternateManagementInterface(ctx, operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest{
        RequestBody: &operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBody{
            AccessPoints: []UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                    AlternateManagementIP: "numquam",
                    Dns1: sdk.String("illo"),
                    Dns2: sdk.String("maxime"),
                    Gateway: sdk.String("aut"),
                    Serial: "sequi",
                    SubnetMask: sdk.String("nemo"),
                },
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                    AlternateManagementIP: "aperiam",
                    Dns1: sdk.String("corrupti"),
                    Dns2: sdk.String("voluptatem"),
                    Gateway: sdk.String("ad"),
                    Serial: "natus",
                    SubnetMask: sdk.String("fuga"),
                },
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                    AlternateManagementIP: "repellat",
                    Dns1: sdk.String("neque"),
                    Dns2: sdk.String("iste"),
                    Gateway: sdk.String("ea"),
                    Serial: "architecto",
                    SubnetMask: sdk.String("nam"),
                },
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                    AlternateManagementIP: "omnis",
                    Dns1: sdk.String("nemo"),
                    Dns2: sdk.String("eligendi"),
                    Gateway: sdk.String("asperiores"),
                    Serial: "minima",
                    SubnetMask: sdk.String("laudantium"),
                },
            },
            Enabled: sdk.Bool(false),
            Protocols: []UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum{
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumSyslog,
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumSnmp,
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumSnmp,
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumSyslog,
            },
            VlanID: sdk.Int64(675885),
        },
        NetworkID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessAlternateManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessBilling

Update the billing settings

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
    res, err := s.Wireless.UpdateNetworkWirelessBilling(ctx, operations.UpdateNetworkWirelessBillingRequest{
        RequestBody: &operations.UpdateNetworkWirelessBillingRequestBody{
            Currency: sdk.String("deserunt"),
            Plans: []UpdateNetworkWirelessBillingRequestBodyPlans{
                operations.UpdateNetworkWirelessBillingRequestBodyPlans{
                    BandwidthLimits: operations.UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits{
                        LimitDown: sdk.Int64(48108),
                        LimitUp: sdk.Int64(752828),
                    },
                    ID: sdk.String("c6304b29-757b-44bf-9e21-8b258acdeba0"),
                    Price: 3657.41,
                    TimeLimit: operations.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnumThirtyDays,
                },
                operations.UpdateNetworkWirelessBillingRequestBodyPlans{
                    BandwidthLimits: operations.UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits{
                        LimitDown: sdk.Int64(913674),
                        LimitUp: sdk.Int64(599620),
                    },
                    ID: sdk.String("dd1f3c88-029c-4983-ace6-10a4a78f3946"),
                    Price: 6052.24,
                    TimeLimit: operations.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnumOneHour,
                },
            },
        },
        NetworkID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessBilling200ApplicationJSONObject != nil {
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
    res, err := s.Wireless.UpdateNetworkWirelessBluetoothSettings(ctx, operations.UpdateNetworkWirelessBluetoothSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessBluetoothSettingsRequestBody{
            AdvertisingEnabled: sdk.Bool(false),
            Major: sdk.Int64(509407),
            MajorMinorAssignmentMode: operations.UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnumUnique.ToPointer(),
            Minor: sdk.Int64(903657),
            ScanningEnabled: sdk.Bool(false),
            UUID: sdk.String("b00c2800-1f58-431b-91fd-82979f70aefe"),
        },
        NetworkID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessRfProfile

Updates specified RF profile for this network

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
    res, err := s.Wireless.UpdateNetworkWirelessRfProfile(ctx, operations.UpdateNetworkWirelessRfProfileRequest{
        RequestBody: &operations.UpdateNetworkWirelessRfProfileRequestBody{
            ApBandSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyApBandSettings{
                BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumFiveghz.ToPointer(),
                BandSteeringEnabled: sdk.Bool(false),
            },
            BandSelectionType: operations.UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumAp.ToPointer(),
            ClientBalancingEnabled: sdk.Bool(false),
            FiveGhzSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings{
                ChannelWidth: sdk.String("placeat"),
                MaxPower: sdk.Int64(709501),
                MinBitrate: sdk.Int64(227594),
                MinPower: sdk.Int64(415747),
                Rxsop: sdk.Int64(467666),
                ValidAutoChannels: []int64{
                    939662,
                    597898,
                    542751,
                },
            },
            MinBitrateType: operations.UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumSsid.ToPointer(),
            Name: sdk.String("Dwight Marquardt"),
            PerSsidSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings{
                Zero: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(5297.96),
                },
                One: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3227.04),
                },
                Ten: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(2887.8),
                },
                Eleven: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(6416.51),
                },
                Twelve: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9282.06),
                },
                Thirteen: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(2483.66),
                },
                Fourteen: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3747.74),
                },
                Two: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(1840.6),
                },
                Three: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(1101.93),
                },
                Four: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3867.87),
                },
                Five: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9174.35),
                },
                Six: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(4765.88),
                },
                Seven: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(4509.59),
                },
                Eight: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9523.28),
                },
                Nine: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9646.81),
                },
            },
            Transmission: &operations.UpdateNetworkWirelessRfProfileRequestBodyTransmission{
                Enabled: sdk.Bool(false),
            },
            TwoFourGhzSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings{
                AxEnabled: sdk.Bool(false),
                MaxPower: sdk.Int64(218266),
                MinBitrate: sdk.Float32(5158.9),
                MinPower: sdk.Int64(433309),
                Rxsop: sdk.Int64(691123),
                ValidAutoChannels: []int64{
                    631914,
                    381019,
                    368785,
                },
            },
        },
        NetworkID: "debitis",
        RfProfileID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessRfProfile200ApplicationJSONObject != nil {
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
    res, err := s.Wireless.UpdateNetworkWirelessSettings(ctx, operations.UpdateNetworkWirelessSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessSettingsRequestBody{
            Ipv6BridgeEnabled: sdk.Bool(false),
            LedLightsOn: sdk.Bool(false),
            LocationAnalyticsEnabled: sdk.Bool(false),
            MeshingEnabled: sdk.Bool(false),
            UpgradeStrategy: operations.UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnumMinimizeUpgradeTime.ToPointer(),
        },
        NetworkID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsid

Update the attributes of an MR SSID

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
    res, err := s.Wireless.UpdateNetworkWirelessSsid(ctx, operations.UpdateNetworkWirelessSsidRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidRequestBody{
            ActiveDirectory: &operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectory{
                Credentials: &operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials{
                    LogonName: sdk.String("culpa"),
                    Password: sdk.String("animi"),
                },
                Servers: []UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers{
                    operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers{
                        Host: "vel",
                        Port: sdk.Int64(383712),
                    },
                    operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers{
                        Host: "doloremque",
                        Port: sdk.Int64(30820),
                    },
                },
            },
            AdultContentFilteringEnabled: sdk.Bool(false),
            ApTagsAndVlanIds: []UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds{
                operations.UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds{
                    Tags: []string{
                        "dolore",
                    },
                    VlanID: sdk.Int64(492793),
                },
                operations.UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds{
                    Tags: []string{
                        "deleniti",
                    },
                    VlanID: sdk.Int64(140302),
                },
            },
            AuthMode: operations.UpdateNetworkWirelessSsidRequestBodyAuthModeEnumEightThousandAndTwentyOnexLocalradius.ToPointer(),
            AvailabilityTags: []string{
                "reprehenderit",
                "est",
                "soluta",
                "iure",
            },
            AvailableOnAllAps: sdk.Bool(false),
            BandSelection: sdk.String("qui"),
            ConcentratorNetworkID: sdk.String("facere"),
            DefaultVlanID: sdk.Int64(246085),
            DisassociateClientsOnVpnFailover: sdk.Bool(false),
            DNSRewrite: &operations.UpdateNetworkWirelessSsidRequestBodyDNSRewrite{
                DNSCustomNameservers: []string{
                    "doloremque",
                    "magnam",
                },
                Enabled: sdk.Bool(false),
            },
            Dot11r: &operations.UpdateNetworkWirelessSsidRequestBodyDot11r{
                Adaptive: sdk.Bool(false),
                Enabled: sdk.Bool(false),
            },
            Dot11w: &operations.UpdateNetworkWirelessSsidRequestBodyDot11w{
                Enabled: sdk.Bool(false),
                Required: sdk.Bool(false),
            },
            Enabled: sdk.Bool(false),
            EncryptionMode: operations.UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnumWpa.ToPointer(),
            EnterpriseAdminAccess: operations.UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnumAccessEnabled.ToPointer(),
            Gre: &operations.UpdateNetworkWirelessSsidRequestBodyGre{
                Concentrator: &operations.UpdateNetworkWirelessSsidRequestBodyGreConcentrator{
                    Host: "deserunt",
                },
                Key: sdk.Int64(472606),
            },
            IPAssignmentMode: sdk.String("dolores"),
            LanIsolationEnabled: sdk.Bool(false),
            Ldap: &operations.UpdateNetworkWirelessSsidRequestBodyLdap{
                BaseDistinguishedName: sdk.String("beatae"),
                Credentials: &operations.UpdateNetworkWirelessSsidRequestBodyLdapCredentials{
                    DistinguishedName: sdk.String("ullam"),
                    Password: sdk.String("aut"),
                },
                ServerCaCertificate: &operations.UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate{
                    Contents: sdk.String("ipsam"),
                },
                Servers: []UpdateNetworkWirelessSsidRequestBodyLdapServers{
                    operations.UpdateNetworkWirelessSsidRequestBodyLdapServers{
                        Host: "sapiente",
                        Port: 662817,
                    },
                    operations.UpdateNetworkWirelessSsidRequestBodyLdapServers{
                        Host: "delectus",
                        Port: 782517,
                    },
                    operations.UpdateNetworkWirelessSsidRequestBodyLdapServers{
                        Host: "quia",
                        Port: 4942,
                    },
                },
            },
            LocalRadius: &operations.UpdateNetworkWirelessSsidRequestBodyLocalRadius{
                CacheTimeout: sdk.Int64(860419),
                CertificateAuthentication: &operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication{
                    ClientRootCaCertificate: &operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate{
                        Contents: sdk.String("ut"),
                    },
                    Enabled: sdk.Bool(false),
                    OcspResponderURL: sdk.String("eius"),
                    UseLdap: sdk.Bool(false),
                    UseOcsp: sdk.Bool(false),
                },
                PasswordAuthentication: &operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication{
                    Enabled: sdk.Bool(false),
                },
            },
            MandatoryDhcpEnabled: sdk.Bool(false),
            MinBitrate: sdk.Float32(6684.72),
            Name: sdk.String("Candace Bednar"),
            Oauth: &operations.UpdateNetworkWirelessSsidRequestBodyOauth{
                AllowedDomains: []string{
                    "quia",
                },
            },
            PerClientBandwidthLimitDown: sdk.Int64(419185),
            PerClientBandwidthLimitUp: sdk.Int64(708713),
            PerSsidBandwidthLimitDown: sdk.Int64(562262),
            PerSsidBandwidthLimitUp: sdk.Int64(910167),
            Psk: sdk.String("doloribus"),
            RadiusAccountingEnabled: sdk.Bool(false),
            RadiusAccountingInterimInterval: sdk.Int64(996949),
            RadiusAccountingServers: []UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers{
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers{
                    CaCertificate: sdk.String("occaecati"),
                    Host: "animi",
                    Port: sdk.Int64(601458),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("illum"),
                },
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers{
                    CaCertificate: sdk.String("repellat"),
                    Host: "reprehenderit",
                    Port: sdk.Int64(146632),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("quia"),
                },
            },
            RadiusAttributeForGroupPolicies: operations.UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnumFilterID.ToPointer(),
            RadiusAuthenticationNasID: sdk.String("quisquam"),
            RadiusCalledStationID: sdk.String("veniam"),
            RadiusCoaEnabled: sdk.Bool(false),
            RadiusFailoverPolicy: operations.UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnumDenyAccess.ToPointer(),
            RadiusFallbackEnabled: sdk.Bool(false),
            RadiusGuestVlanEnabled: sdk.Bool(false),
            RadiusGuestVlanID: sdk.Int64(645633),
            RadiusLoadBalancingPolicy: operations.UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnumStrictPriorityOrder.ToPointer(),
            RadiusOverride: sdk.Bool(false),
            RadiusProxyEnabled: sdk.Bool(false),
            RadiusServerAttemptsLimit: sdk.Int64(799649),
            RadiusServerTimeout: sdk.Int64(609516),
            RadiusServers: []UpdateNetworkWirelessSsidRequestBodyRadiusServers{
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers{
                    CaCertificate: sdk.String("accusamus"),
                    Host: "deleniti",
                    OpenRoamingCertificateID: sdk.Int64(924532),
                    Port: sdk.Int64(71176),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("tempora"),
                },
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers{
                    CaCertificate: sdk.String("possimus"),
                    Host: "assumenda",
                    OpenRoamingCertificateID: sdk.Int64(821599),
                    Port: sdk.Int64(215169),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("placeat"),
                },
            },
            RadiusTestingEnabled: sdk.Bool(false),
            SecondaryConcentratorNetworkID: sdk.String("amet"),
            SpeedBurst: &operations.UpdateNetworkWirelessSsidRequestBodySpeedBurst{
                Enabled: sdk.Bool(false),
            },
            SplashGuestSponsorDomains: []string{
                "nisi",
            },
            SplashPage: operations.UpdateNetworkWirelessSsidRequestBodySplashPageEnumNone.ToPointer(),
            UseVlanTagging: sdk.Bool(false),
            Visible: sdk.Bool(false),
            VlanID: sdk.Int64(236440),
            WalledGardenEnabled: sdk.Bool(false),
            WalledGardenRanges: []string{
                "quisquam",
            },
            WpaEncryptionMode: operations.UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnumWpa2Only.ToPointer(),
        },
        NetworkID: "excepturi",
        Number: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidBonjourForwarding

Update the bonjour forwarding setting and rules for the SSID

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
    res, err := s.Wireless.UpdateNetworkWirelessSsidBonjourForwarding(ctx, operations.UpdateNetworkWirelessSsidBonjourForwardingRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBody{
            Enabled: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                    Description: sdk.String("consequuntur"),
                    Services: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum{
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumBitTorrent,
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumScanners,
                    },
                    VlanID: "quibusdam",
                },
                operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                    Description: sdk.String("accusamus"),
                    Services: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum{
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumSSH,
                    },
                    VlanID: "enim",
                },
                operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                    Description: sdk.String("dolorum"),
                    Services: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum{
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumFtp,
                    },
                    VlanID: "omnis",
                },
                operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                    Description: sdk.String("iusto"),
                    Services: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum{
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumSSH,
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumSamba,
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumAllServices,
                    },
                    VlanID: "nam",
                },
            },
        },
        NetworkID: "ipsa",
        Number: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidDeviceTypeGroupPolicies

Update the device type group policies for the SSID

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
    res, err := s.Wireless.UpdateNetworkWirelessSsidDeviceTypeGroupPolicies(ctx, operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody{
            DeviceTypePolicies: []UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies{
                operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies{
                    DevicePolicy: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnumBlocked,
                    DeviceType: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnumIPod,
                    GroupPolicyID: sdk.Int64(951233),
                },
            },
            Enabled: sdk.Bool(false),
        },
        NetworkID: "perspiciatis",
        Number: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidEapOverride

Update the EAP overridden parameters for an SSID.

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
    res, err := s.Wireless.UpdateNetworkWirelessSsidEapOverride(ctx, operations.UpdateNetworkWirelessSsidEapOverrideRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidEapOverrideRequestBody{
            EapolKey: &operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey{
                Retries: sdk.Int64(5363),
                TimeoutInMs: sdk.Int64(738511),
            },
            Identity: &operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity{
                Retries: sdk.Int64(119046),
                Timeout: sdk.Int64(879506),
            },
            MaxRetries: sdk.Int64(790723),
            Timeout: sdk.Int64(579555),
        },
        NetworkID: "minima",
        Number: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidEapOverride200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidFirewallL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

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
    res, err := s.Wireless.UpdateNetworkWirelessSsidFirewallL3FirewallRules(ctx, operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody{
            AllowLanAccess: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("inventore"),
                    DestCidr: "libero",
                    DestPort: sdk.String("maiores"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                },
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("sit"),
                    DestCidr: "architecto",
                    DestPort: sdk.String("modi"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp,
                },
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("iusto"),
                    DestCidr: "beatae",
                    DestPort: sdk.String("laboriosam"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumUDP,
                },
            },
        },
        NetworkID: "voluptates",
        Number: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidFirewallL7FirewallRules

Update the L7 firewall rules of an SSID on an MR network

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
    res, err := s.Wireless.UpdateNetworkWirelessSsidFirewallL7FirewallRules(ctx, operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody{
            Rules: []UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumPort.ToPointer(),
                    Value: sdk.String("nesciunt"),
                },
            },
        },
        NetworkID: "sequi",
        Number: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidHotspot20

Update the Hotspot 2.0 settings of an SSID

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
    res, err := s.Wireless.UpdateNetworkWirelessSsidHotspot20(ctx, operations.UpdateNetworkWirelessSsidHotspot20Request{
        RequestBody: &operations.UpdateNetworkWirelessSsidHotspot20RequestBody{
            Domains: []string{
                "ex",
                "architecto",
                "dolorum",
            },
            Enabled: sdk.Bool(false),
            MccMncs: []UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs{
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs{
                    Mcc: sdk.String("nesciunt"),
                    Mnc: sdk.String("vero"),
                },
            },
            NaiRealms: []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms{
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms{
                    Format: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnumZero.ToPointer(),
                    Methods: []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "natus": "dolorem",
                            },
                            ID: sdk.String("7b928b83-04f8-4075-bf68-37cb915d099e"),
                        },
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "doloribus": "eaque",
                                "itaque": "corporis",
                            },
                            ID: sdk.String("f1559ce6-3913-471d-81a1-54bcdc754b23"),
                        },
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "ratione": "ut",
                                "nihil": "ad",
                                "odio": "enim",
                            },
                            ID: sdk.String("8a016bc4-4117-46b9-ad76-a2a825cd3873"),
                        },
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "voluptatem": "quos",
                                "sed": "rem",
                                "libero": "fuga",
                            },
                            ID: sdk.String("f4b2a43a-440c-4814-b928-5603f8cccb2d"),
                        },
                    },
                    Realm: sdk.String("esse"),
                },
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms{
                    Format: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnumZero.ToPointer(),
                    Methods: []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "quos": "at",
                                "aliquam": "nihil",
                            },
                            ID: sdk.String("31c47476-fa31-4d85-9f3e-548f80706a57"),
                        },
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "animi": "perspiciatis",
                            },
                            ID: sdk.String("67a75bba-6800-46ff-920d-297edb136351"),
                        },
                    },
                    Realm: sdk.String("mollitia"),
                },
            },
            NetworkAccessType: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumTestOrExperimental.ToPointer(),
            Operator: &operations.UpdateNetworkWirelessSsidHotspot20RequestBodyOperator{
                Name: sdk.String("Frankie Mann"),
            },
            RoamConsortOis: []string{
                "voluptate",
                "et",
                "recusandae",
                "quae",
            },
            Venue: &operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenue{
                Name: sdk.String("Mr. Toby Balistreri PhD"),
                Type: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumBusStop.ToPointer(),
            },
        },
        NetworkID: "et",
        Number: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidHotspot20200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidIdentityPsk

Update an Identity PSK

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
    res, err := s.Wireless.UpdateNetworkWirelessSsidIdentityPsk(ctx, operations.UpdateNetworkWirelessSsidIdentityPskRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidIdentityPskRequestBody{
            GroupPolicyID: sdk.String("nobis"),
            Name: sdk.String("Walter Macejkovic"),
            Passphrase: sdk.String("magni"),
        },
        IdentityPskID: "asperiores",
        NetworkID: "repellat",
        Number: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidSchedules

Update the outage schedule for the SSID

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
    res, err := s.Wireless.UpdateNetworkWirelessSsidSchedules(ctx, operations.UpdateNetworkWirelessSsidSchedulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidSchedulesRequestBody{
            Enabled: sdk.Bool(false),
            Ranges: []UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                    EndDay: "neque",
                    EndTime: "unde",
                    StartDay: "nihil",
                    StartTime: "quod",
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                    EndDay: "ullam",
                    EndTime: "eius",
                    StartDay: "iusto",
                    StartTime: "maxime",
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                    EndDay: "deserunt",
                    EndTime: "explicabo",
                    StartDay: "soluta",
                    StartTime: "quo",
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                    EndDay: "ratione",
                    EndTime: "repellendus",
                    StartDay: "accusamus",
                    StartTime: "ipsum",
                },
            },
            RangesInSeconds: []UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                    End: 972936,
                    Start: 124734,
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                    End: 153476,
                    Start: 694584,
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                    End: 701336,
                    Start: 695990,
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                    End: 705276,
                    Start: 175692,
                },
            },
        },
        NetworkID: "doloribus",
        Number: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidSchedules200ApplicationJSONObject != nil {
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
    res, err := s.Wireless.UpdateNetworkWirelessSsidSplashSettings(ctx, operations.UpdateNetworkWirelessSsidSplashSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBody{
            AllowSimultaneousLogins: sdk.Bool(false),
            Billing: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling{
                FreeAccess: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess{
                    DurationInMinutes: sdk.Int64(137636),
                    Enabled: sdk.Bool(false),
                },
                PrepaidAccessFastLoginEnabled: sdk.Bool(false),
                ReplyToEmailAddress: sdk.String("voluptatibus"),
            },
            BlockAllTrafficBeforeSignOn: sdk.Bool(false),
            ControllerDisconnectionBehavior: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnumRestricted.ToPointer(),
            GuestSponsorship: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship{
                DurationInMinutes: sdk.Int64(323058),
                GuestCanRequestTimeframe: sdk.Bool(false),
            },
            RedirectURL: sdk.String("nostrum"),
            SentryEnrollment: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment{
                EnforcedSystems: []string{
                    "numquam",
                    "labore",
                },
                Strength: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnumStrict.ToPointer(),
                SystemsManagerNetwork: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork{
                    ID: "e0aed588-86cd-498a-961a-cc5b69f32e10",
                },
            },
            SplashImage: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage{
                Extension: sdk.String("aliquid"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage{
                    Contents: sdk.String("provident"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnumPng.ToPointer(),
                },
                Md5: sdk.String("eaque"),
            },
            SplashLogo: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo{
                Extension: sdk.String("architecto"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage{
                    Contents: sdk.String("sit"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnumJpg.ToPointer(),
                },
                Md5: sdk.String("aperiam"),
            },
            SplashPrepaidFront: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront{
                Extension: sdk.String("quasi"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage{
                    Contents: sdk.String("doloribus"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnumJpg.ToPointer(),
                },
                Md5: sdk.String("iure"),
            },
            SplashTimeout: sdk.Int64(174719),
            SplashURL: sdk.String("quos"),
            UseRedirectURL: sdk.Bool(false),
            UseSplashURL: sdk.Bool(false),
            WelcomeMessage: sdk.String("veritatis"),
        },
        NetworkID: "repudiandae",
        Number: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONObject != nil {
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
    res, err := s.Wireless.UpdateNetworkWirelessSsidTrafficShapingRules(ctx, operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody{
            DefaultRulesEnabled: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange,
                            Value: "possimus",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumPort,
                            Value: "sint",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumHost,
                            Value: "cupiditate",
                        },
                    },
                    DscpTagValue: sdk.Int64(475077),
                    PcpTagValue: sdk.Int64(317778),
                    PerClientBandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(415377),
                            LimitUp: sdk.Int64(297468),
                        },
                        Settings: sdk.String("autem"),
                    },
                },
                operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumHost,
                            Value: "aperiam",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumLocalNet,
                            Value: "ut",
                        },
                    },
                    DscpTagValue: sdk.Int64(451806),
                    PcpTagValue: sdk.Int64(792012),
                    PerClientBandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(641298),
                            LimitUp: sdk.Int64(793163),
                        },
                        Settings: sdk.String("architecto"),
                    },
                },
            },
            TrafficShapingEnabled: sdk.Bool(false),
        },
        NetworkID: "soluta",
        Number: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidVpn

Update the VPN settings for the SSID

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
    res, err := s.Wireless.UpdateNetworkWirelessSsidVpn(ctx, operations.UpdateNetworkWirelessSsidVpnRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidVpnRequestBody{
            Concentrator: &operations.UpdateNetworkWirelessSsidVpnRequestBodyConcentrator{
                NetworkID: sdk.String("officia"),
                VlanID: sdk.Int64(60999),
            },
            Failover: &operations.UpdateNetworkWirelessSsidVpnRequestBodyFailover{
                HeartbeatInterval: sdk.Int64(878155),
                IdleTimeout: sdk.Int64(813937),
                RequestIP: sdk.String("pariatur"),
            },
            SplitTunnel: &operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel{
                Enabled: sdk.Bool(false),
                Rules: []UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules{
                    operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules{
                        Comment: sdk.String("suscipit"),
                        DestCidr: "molestiae",
                        DestPort: sdk.String("est"),
                        Policy: "quaerat",
                        Protocol: operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnumUDP.ToPointer(),
                    },
                },
            },
        },
        NetworkID: "eveniet",
        Number: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```
