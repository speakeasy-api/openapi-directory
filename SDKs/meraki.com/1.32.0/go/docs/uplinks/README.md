# Uplinks

### Available Operations

* [GetDeviceApplianceUplinksSettings](#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [GetDeviceLossAndLatencyHistory](#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [GetNetworkApplianceUplinksUsageHistory](#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [GetOrganizationApplianceUplinkStatuses](#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [GetOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [GetOrganizationDevicesUplinksLossAndLatency](#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [GetOrganizationUplinksStatuses](#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [UpdateDeviceApplianceUplinksSettings](#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance

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
    res, err := s.Uplinks.GetDeviceApplianceUplinksSettings(ctx, operations.GetDeviceApplianceUplinksSettingsRequest{
        Serial: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceApplianceUplinksSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

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
    res, err := s.Uplinks.GetDeviceLossAndLatencyHistory(ctx, operations.GetDeviceLossAndLatencyHistoryRequest{
        IP: "voluptas",
        Resolution: sdk.Int64(582858),
        Serial: "nemo",
        T0: sdk.String("ut"),
        T1: sdk.String("commodi"),
        Timespan: sdk.Float32(6388.24),
        Uplink: operations.GetDeviceLossAndLatencyHistoryUplinkEnumWan2.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLossAndLatencyHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceUplinksUsageHistory

Get the sent and received bytes for each uplink of a network.

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
    res, err := s.Uplinks.GetNetworkApplianceUplinksUsageHistory(ctx, operations.GetNetworkApplianceUplinksUsageHistoryRequest{
        NetworkID: "iusto",
        Resolution: sdk.Int64(384335),
        T0: sdk.String("pariatur"),
        T1: sdk.String("quas"),
        Timespan: sdk.Float32(235.5),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceUplinkStatuses

List the uplink status of every Meraki MX and Z series appliances in the organization

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
    res, err := s.Uplinks.GetOrganizationApplianceUplinkStatuses(ctx, operations.GetOrganizationApplianceUplinkStatusesRequest{
        EndingBefore: sdk.String("soluta"),
        Iccids: []string{
            "ex",
            "molestiae",
            "quasi",
        },
        NetworkIds: []string{
            "magnam",
            "excepturi",
            "eius",
        },
        OrganizationID: "sapiente",
        PerPage: sdk.Int64(108295),
        Serials: []string{
            "tempora",
            "laborum",
        },
        StartingAfter: sdk.String("autem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceUplinkStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesUplinksAddressesByDevice

List the current uplink addresses for devices in an organization.

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
    res, err := s.Uplinks.GetOrganizationDevicesUplinksAddressesByDevice(ctx, operations.GetOrganizationDevicesUplinksAddressesByDeviceRequest{
        EndingBefore: sdk.String("minus"),
        NetworkIds: []string{
            "rem",
            "eos",
            "ut",
            "officia",
        },
        OrganizationID: "exercitationem",
        PerPage: sdk.Int64(535898),
        ProductTypes: []string{
            "similique",
            "beatae",
        },
        Serials: []string{
            "ad",
            "temporibus",
        },
        StartingAfter: sdk.String("ab"),
        Tags: []string{
            "voluptate",
            "adipisci",
        },
        TagsFilterType: operations.GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnumWithAllTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

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
    res, err := s.Uplinks.GetOrganizationDevicesUplinksLossAndLatency(ctx, operations.GetOrganizationDevicesUplinksLossAndLatencyRequest{
        IP: sdk.String("iure"),
        OrganizationID: "excepturi",
        T0: sdk.String("fuga"),
        T1: sdk.String("pariatur"),
        Timespan: sdk.Float32(4311.88),
        Uplink: operations.GetOrganizationDevicesUplinksLossAndLatencyUplinkEnumCellular.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationUplinksStatuses

List the uplink status of every Meraki MX, MG and Z series devices in the organization

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
    res, err := s.Uplinks.GetOrganizationUplinksStatuses(ctx, operations.GetOrganizationUplinksStatusesRequest{
        EndingBefore: sdk.String("cumque"),
        Iccids: []string{
            "voluptatum",
            "explicabo",
        },
        NetworkIds: []string{
            "odio",
            "distinctio",
        },
        OrganizationID: "nihil",
        PerPage: sdk.Int64(644925),
        Serials: []string{
            "libero",
            "doloribus",
        },
        StartingAfter: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationUplinksStatuses200ApplicationJSONObjects != nil {
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
    res, err := s.Uplinks.UpdateDeviceApplianceUplinksSettings(ctx, operations.UpdateDeviceApplianceUplinksSettingsRequest{
        RequestBody: operations.UpdateDeviceApplianceUplinksSettingsRequestBody{
            Interfaces: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces{
                Wan1: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1{
                    Enabled: sdk.Bool(false),
                    Pppoe: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe{
                        Authentication: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication{
                            Enabled: sdk.Bool(false),
                            Password: sdk.String("sit"),
                            Username: sdk.String("Ora65"),
                        },
                        Enabled: sdk.Bool(false),
                    },
                    Svis: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis{
                        Ipv4: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4{
                            Address: sdk.String("17711 Issac Trace"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnumStatic.ToPointer(),
                            Gateway: sdk.String("ullam"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers{
                                Addresses: []string{
                                    "repellat",
                                },
                            },
                        },
                        Ipv6: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6{
                            Address: sdk.String("335 Rodriguez Ridges"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnumDynamic.ToPointer(),
                            Gateway: sdk.String("dolores"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers{
                                Addresses: []string{
                                    "recusandae",
                                    "accusamus",
                                },
                            },
                        },
                    },
                    VlanTagging: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging{
                        Enabled: sdk.Bool(false),
                        VlanID: sdk.Int64(315212),
                    },
                },
                Wan2: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2{
                    Enabled: sdk.Bool(false),
                    Pppoe: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe{
                        Authentication: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication{
                            Enabled: sdk.Bool(false),
                            Password: sdk.String("quidem"),
                            Username: sdk.String("Jennie.Ankunding92"),
                        },
                        Enabled: sdk.Bool(false),
                    },
                    Svis: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis{
                        Ipv4: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4{
                            Address: sdk.String("3980 Emmalee Trafficway"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnumDynamic.ToPointer(),
                            Gateway: sdk.String("quod"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers{
                                Addresses: []string{
                                    "minima",
                                    "commodi",
                                    "labore",
                                },
                            },
                        },
                        Ipv6: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6{
                            Address: sdk.String("753 Nathen Tunnel"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnumStatic.ToPointer(),
                            Gateway: sdk.String("accusamus"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers{
                                Addresses: []string{
                                    "nemo",
                                    "ut",
                                    "assumenda",
                                },
                            },
                        },
                    },
                    VlanTagging: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging{
                        Enabled: sdk.Bool(false),
                        VlanID: sdk.Int64(643329),
                    },
                },
            },
        },
        Serial: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceApplianceUplinksSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
