# Devices

### Available Operations

* [BlinkDeviceLeds](#blinkdeviceleds) - Blink the LEDs on a device
* [CheckinNetworkSmDevices](#checkinnetworksmdevices) - Force check-in a set of devices
* [ClaimNetworkDevices](#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [CloneOrganizationSwitchDevices](#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [CreateDeviceLiveToolsPing](#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [CreateDeviceLiveToolsPingDevice](#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [GetDevice](#getdevice) - Return a single device
* [GetDeviceCellularSims](#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [GetDeviceClients](#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [GetDeviceLiveToolsPing](#getdevicelivetoolsping) - Return a ping job
* [GetDeviceLiveToolsPingDevice](#getdevicelivetoolspingdevice) - Return a ping device job
* [GetDeviceLldpCdp](#getdevicelldpcdp) - List LLDP and CDP information for a device
* [GetDeviceLossAndLatencyHistory](#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [GetDeviceManagementInterface](#getdevicemanagementinterface) - Return the management interface settings for a device
* [GetNetworkDevices](#getnetworkdevices) - List the devices in a network
* [GetNetworkSmDeviceCellularUsageHistory](#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history
* [GetNetworkSmDeviceCerts](#getnetworksmdevicecerts) - List the certs on a device
* [GetNetworkSmDeviceConnectivity](#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [GetNetworkSmDeviceDesktopLogs](#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [GetNetworkSmDeviceDeviceCommandLogs](#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [GetNetworkSmDeviceDeviceProfiles](#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [GetNetworkSmDeviceNetworkAdapters](#getnetworksmdevicenetworkadapters) - List the network adapters of a device
* [GetNetworkSmDevicePerformanceHistory](#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [GetNetworkSmDeviceRestrictions](#getnetworksmdevicerestrictions) - List the restrictions on a device
* [GetNetworkSmDeviceSecurityCenters](#getnetworksmdevicesecuritycenters) - List the security centers on a device
* [GetNetworkSmDeviceSoftwares](#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [GetNetworkSmDeviceWlanLists](#getnetworksmdevicewlanlists) - List the saved SSID names on a device
* [GetNetworkSmDevices](#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [GetNetworkWirelessDevicesConnectionStats](#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [GetNetworkWirelessDevicesLatencyStats](#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [GetOrganizationDevices](#getorganizationdevices) - List the devices in an organization
* [GetOrganizationDevicesAvailabilities](#getorganizationdevicesavailabilities) - List the availability information for devices in an organization
* [GetOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [GetOrganizationDevicesStatuses](#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [GetOrganizationDevicesStatusesOverview](#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [GetOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [GetOrganizationDevicesUplinksLossAndLatency](#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [GetOrganizationInventoryDevice](#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [GetOrganizationInventoryDevices](#getorganizationinventorydevices) - Return the device inventory for an organization
* [GetOrganizationSummaryTopDevicesByUsage](#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [GetOrganizationSummaryTopDevicesModelsByUsage](#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [GetOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [LockNetworkSmDevices](#locknetworksmdevices) - Lock a set of devices
* [ModifyNetworkSmDevicesTags](#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [MoveNetworkSmDevices](#movenetworksmdevices) - Move a set of devices to a new network
* [RebootDevice](#rebootdevice) - Reboot a device
* [RefreshNetworkSmDeviceDetails](#refreshnetworksmdevicedetails) - Refresh the details of a device
* [RemoveNetworkDevices](#removenetworkdevices) - Remove a single device
* [UnenrollNetworkSmDevice](#unenrollnetworksmdevice) - Unenroll a device
* [UpdateDevice](#updatedevice) - Update the attributes of a device
* [UpdateDeviceCellularSims](#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.
* [UpdateDeviceManagementInterface](#updatedevicemanagementinterface) - Update the management interface settings for a device
* [UpdateNetworkSmDevicesFields](#updatenetworksmdevicesfields) - Modify the fields of a device
* [VmxNetworkDevicesClaim](#vmxnetworkdevicesclaim) - Claim a vMX into a network
* [WipeNetworkSmDevices](#wipenetworksmdevices) - Wipe a device

## BlinkDeviceLeds

Blink the LEDs on a device

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
    res, err := s.Devices.BlinkDeviceLeds(ctx, operations.BlinkDeviceLedsRequest{
        RequestBody: &operations.BlinkDeviceLedsRequestBody{
            Duration: sdk.Int64(444169),
            Duty: sdk.Int64(81790),
            Period: sdk.Int64(991227),
        },
        Serial: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BlinkDeviceLeds202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CheckinNetworkSmDevices

Force check-in a set of devices

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
    res, err := s.Devices.CheckinNetworkSmDevices(ctx, operations.CheckinNetworkSmDevicesRequest{
        RequestBody: &operations.CheckinNetworkSmDevicesRequestBody{
            Ids: []string{
                "ut",
                "at",
                "voluptas",
            },
            Scope: []string{
                "molestiae",
                "tempore",
                "facere",
            },
            Serials: []string{
                "perspiciatis",
                "quisquam",
                "molestias",
                "corrupti",
            },
            WifiMacs: []string{
                "repudiandae",
                "incidunt",
            },
        },
        NetworkID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckinNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ClaimNetworkDevices

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)

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
    res, err := s.Devices.ClaimNetworkDevices(ctx, operations.ClaimNetworkDevicesRequest{
        RequestBody: operations.ClaimNetworkDevicesRequestBody{
            Serials: []string{
                "adipisci",
                "numquam",
            },
        },
        NetworkID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CloneOrganizationSwitchDevices

Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring

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
    res, err := s.Devices.CloneOrganizationSwitchDevices(ctx, operations.CloneOrganizationSwitchDevicesRequest{
        RequestBody: operations.CloneOrganizationSwitchDevicesRequestBody{
            SourceSerial: "quis",
            TargetSerials: []string{
                "reprehenderit",
                "odit",
                "quibusdam",
                "cupiditate",
            },
        },
        OrganizationID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloneOrganizationSwitchDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateDeviceLiveToolsPing

Enqueue a job to ping a target host from the device

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
    res, err := s.Devices.CreateDeviceLiveToolsPing(ctx, operations.CreateDeviceLiveToolsPingRequest{
        RequestBody: operations.CreateDeviceLiveToolsPingRequestBody{
            Count: sdk.Int64(859600),
            Target: "repellendus",
        },
        Serial: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceLiveToolsPing201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateDeviceLiveToolsPingDevice

Enqueue a job to check connectivity status to the device

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
    res, err := s.Devices.CreateDeviceLiveToolsPingDevice(ctx, operations.CreateDeviceLiveToolsPingDeviceRequest{
        RequestBody: &operations.CreateDeviceLiveToolsPingDeviceRequestBody{
            Count: sdk.Int64(525700),
        },
        Serial: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceLiveToolsPingDevice201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDevice

Return a single device

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
    res, err := s.Devices.GetDevice(ctx, operations.GetDeviceRequest{
        Serial: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCellularSims

Return the SIM and APN configurations for a cellular device.

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
    res, err := s.Devices.GetDeviceCellularSims(ctx, operations.GetDeviceCellularSimsRequest{
        Serial: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCellularSims200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceClients

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

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
    res, err := s.Devices.GetDeviceClients(ctx, operations.GetDeviceClientsRequest{
        Serial: "quis",
        T0: sdk.String("earum"),
        Timespan: sdk.Float32(4591.97),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceClients200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceLiveToolsPing

Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.

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
    res, err := s.Devices.GetDeviceLiveToolsPing(ctx, operations.GetDeviceLiveToolsPingRequest{
        ID: "afe55297-ba62-481f-84e3-a23394a68cc8",
        Serial: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLiveToolsPing200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceLiveToolsPingDevice

Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.

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
    res, err := s.Devices.GetDeviceLiveToolsPingDevice(ctx, operations.GetDeviceLiveToolsPingDeviceRequest{
        ID: "d30ff721-64d0-4a91-be9d-96553b89e000",
        Serial: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLiveToolsPingDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceLldpCdp

List LLDP and CDP information for a device

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
    res, err := s.Devices.GetDeviceLldpCdp(ctx, operations.GetDeviceLldpCdpRequest{
        Serial: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLldpCdp200ApplicationJSONObject != nil {
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
    res, err := s.Devices.GetDeviceLossAndLatencyHistory(ctx, operations.GetDeviceLossAndLatencyHistoryRequest{
        IP: "vel",
        Resolution: sdk.Int64(408748),
        Serial: "error",
        T0: sdk.String("explicabo"),
        T1: sdk.String("temporibus"),
        Timespan: sdk.Float32(8930.05),
        Uplink: operations.GetDeviceLossAndLatencyHistoryUplinkEnumWan1.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLossAndLatencyHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceManagementInterface

Return the management interface settings for a device

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
    res, err := s.Devices.GetDeviceManagementInterface(ctx, operations.GetDeviceManagementInterfaceRequest{
        Serial: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkDevices

List the devices in a network

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
    res, err := s.Devices.GetNetworkDevices(ctx, operations.GetNetworkDevicesRequest{
        NetworkID: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDevices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceCellularUsageHistory

Return the client's daily cellular data usage history. Usage data is in kilobytes.

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
    res, err := s.Devices.GetNetworkSmDeviceCellularUsageHistory(ctx, operations.GetNetworkSmDeviceCellularUsageHistoryRequest{
        DeviceID: "voluptas",
        NetworkID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceCellularUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceCerts

List the certs on a device

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
    res, err := s.Devices.GetNetworkSmDeviceCerts(ctx, operations.GetNetworkSmDeviceCertsRequest{
        DeviceID: "aspernatur",
        NetworkID: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceCerts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceConnectivity

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

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
    res, err := s.Devices.GetNetworkSmDeviceConnectivity(ctx, operations.GetNetworkSmDeviceConnectivityRequest{
        DeviceID: "eaque",
        EndingBefore: sdk.String("veritatis"),
        NetworkID: "officia",
        PerPage: sdk.Int64(375876),
        StartingAfter: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceConnectivity200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceDesktopLogs

Return historical records of various Systems Manager network connection details for desktop devices.

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
    res, err := s.Devices.GetNetworkSmDeviceDesktopLogs(ctx, operations.GetNetworkSmDeviceDesktopLogsRequest{
        DeviceID: "error",
        EndingBefore: sdk.String("cum"),
        NetworkID: "eius",
        PerPage: sdk.Int64(647788),
        StartingAfter: sdk.String("voluptates"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceDesktopLogs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceDeviceCommandLogs

Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.

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
    res, err := s.Devices.GetNetworkSmDeviceDeviceCommandLogs(ctx, operations.GetNetworkSmDeviceDeviceCommandLogsRequest{
        DeviceID: "in",
        EndingBefore: sdk.String("harum"),
        NetworkID: "vitae",
        PerPage: sdk.Int64(686314),
        StartingAfter: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceDeviceCommandLogs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceDeviceProfiles

Get the installed profiles associated with a device

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
    res, err := s.Devices.GetNetworkSmDeviceDeviceProfiles(ctx, operations.GetNetworkSmDeviceDeviceProfilesRequest{
        DeviceID: "harum",
        NetworkID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceDeviceProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceNetworkAdapters

List the network adapters of a device

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
    res, err := s.Devices.GetNetworkSmDeviceNetworkAdapters(ctx, operations.GetNetworkSmDeviceNetworkAdaptersRequest{
        DeviceID: "alias",
        NetworkID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceNetworkAdapters200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDevicePerformanceHistory

Return historical records of various Systems Manager client metrics for desktop devices.

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
    res, err := s.Devices.GetNetworkSmDevicePerformanceHistory(ctx, operations.GetNetworkSmDevicePerformanceHistoryRequest{
        DeviceID: "placeat",
        EndingBefore: sdk.String("dolore"),
        NetworkID: "repudiandae",
        PerPage: sdk.Int64(235758),
        StartingAfter: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDevicePerformanceHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceRestrictions

List the restrictions on a device

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
    res, err := s.Devices.GetNetworkSmDeviceRestrictions(ctx, operations.GetNetworkSmDeviceRestrictionsRequest{
        DeviceID: "aliquam",
        NetworkID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceRestrictions200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceSecurityCenters

List the security centers on a device

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
    res, err := s.Devices.GetNetworkSmDeviceSecurityCenters(ctx, operations.GetNetworkSmDeviceSecurityCentersRequest{
        DeviceID: "quae",
        NetworkID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceSecurityCenters200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceSoftwares

Get a list of softwares associated with a device

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
    res, err := s.Devices.GetNetworkSmDeviceSoftwares(ctx, operations.GetNetworkSmDeviceSoftwaresRequest{
        DeviceID: "fuga",
        NetworkID: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceSoftwares200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceWlanLists

List the saved SSID names on a device

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
    res, err := s.Devices.GetNetworkSmDeviceWlanLists(ctx, operations.GetNetworkSmDeviceWlanListsRequest{
        DeviceID: "ullam",
        NetworkID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceWlanLists200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDevices

List the devices enrolled in an SM network with various specified fields and filters

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
    res, err := s.Devices.GetNetworkSmDevices(ctx, operations.GetNetworkSmDevicesRequest{
        EndingBefore: sdk.String("aliquam"),
        Fields: []string{
            "deleniti",
            "dolor",
            "natus",
        },
        Ids: []string{
            "consequatur",
            "ipsum",
            "quidem",
            "dolorum",
        },
        NetworkID: "quidem",
        PerPage: sdk.Int64(473890),
        Scope: []string{
            "nam",
            "occaecati",
        },
        Serials: []string{
            "blanditiis",
        },
        StartingAfter: sdk.String("a"),
        WifiMacs: []string{
            "neque",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDevices200ApplicationJSONObjects != nil {
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
    res, err := s.Devices.GetNetworkWirelessDevicesConnectionStats(ctx, operations.GetNetworkWirelessDevicesConnectionStatsRequest{
        ApTag: sdk.String("dicta"),
        Band: operations.GetNetworkWirelessDevicesConnectionStatsBandEnumTwo4.ToPointer(),
        NetworkID: "iste",
        Ssid: sdk.Int64(554029),
        T0: sdk.String("ut"),
        T1: sdk.String("exercitationem"),
        Timespan: sdk.Float32(223.74),
        Vlan: sdk.Int64(442130),
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
    res, err := s.Devices.GetNetworkWirelessDevicesLatencyStats(ctx, operations.GetNetworkWirelessDevicesLatencyStatsRequest{
        ApTag: sdk.String("officiis"),
        Band: operations.GetNetworkWirelessDevicesLatencyStatsBandEnumTwo4.ToPointer(),
        Fields: sdk.String("voluptates"),
        NetworkID: "consectetur",
        Ssid: sdk.Int64(577369),
        T0: sdk.String("impedit"),
        T1: sdk.String("quam"),
        Timespan: sdk.Float32(9022.16),
        Vlan: sdk.Int64(140468),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessDevicesLatencyStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevices

List the devices in an organization

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
    res, err := s.Devices.GetOrganizationDevices(ctx, operations.GetOrganizationDevicesRequest{
        ConfigurationUpdatedAfter: sdk.String("consectetur"),
        EndingBefore: sdk.String("itaque"),
        Mac: sdk.String("impedit"),
        Macs: []string{
            "voluptatem",
            "voluptas",
            "aperiam",
        },
        Model: sdk.String("numquam"),
        Models: []string{
            "voluptas",
            "fugit",
        },
        Name: sdk.String("Victor Emmerich"),
        NetworkIds: []string{
            "autem",
            "quo",
            "voluptas",
            "quis",
        },
        OrganizationID: "reprehenderit",
        PerPage: sdk.Int64(875216),
        ProductTypes: []GetOrganizationDevicesProductTypesEnum{
            operations.GetOrganizationDevicesProductTypesEnumSystemsManager,
            operations.GetOrganizationDevicesProductTypesEnumWireless,
            operations.GetOrganizationDevicesProductTypesEnumSensor,
        },
        SensorAlertProfileIds: []string{
            "molestiae",
            "hic",
            "ipsa",
            "consequatur",
        },
        SensorMetrics: []string{
            "fugiat",
        },
        Serial: sdk.String("veritatis"),
        Serials: []string{
            "rem",
            "ex",
            "dolorum",
        },
        StartingAfter: sdk.String("officia"),
        Tags: []string{
            "excepturi",
            "at",
            "neque",
        },
        TagsFilterType: operations.GetOrganizationDevicesTagsFilterTypeEnumWithAnyTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesAvailabilities

List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

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
    res, err := s.Devices.GetOrganizationDevicesAvailabilities(ctx, operations.GetOrganizationDevicesAvailabilitiesRequest{
        EndingBefore: sdk.String("veritatis"),
        NetworkIds: []string{
            "ratione",
            "odit",
            "amet",
            "dolores",
        },
        OrganizationID: "provident",
        PerPage: sdk.Int64(918413),
        ProductTypes: []string{
            "ullam",
            "rem",
        },
        Serials: []string{
            "voluptate",
        },
        StartingAfter: sdk.String("eveniet"),
        Tags: []string{
            "reiciendis",
            "qui",
            "officia",
        },
        TagsFilterType: operations.GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnumWithAnyTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesAvailabilities200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesPowerModulesStatusesByDevice

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

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
    res, err := s.Devices.GetOrganizationDevicesPowerModulesStatusesByDevice(ctx, operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest{
        EndingBefore: sdk.String("laboriosam"),
        NetworkIds: []string{
            "harum",
            "inventore",
            "aut",
        },
        OrganizationID: "debitis",
        PerPage: sdk.Int64(144712),
        ProductTypes: []string{
            "ipsam",
            "reiciendis",
        },
        Serials: []string{
            "cumque",
            "aliquam",
            "corrupti",
            "ipsa",
        },
        StartingAfter: sdk.String("assumenda"),
        Tags: []string{
            "necessitatibus",
            "adipisci",
        },
        TagsFilterType: operations.GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnumWithAllTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesStatuses

List the status of every Meraki device in the organization

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
    res, err := s.Devices.GetOrganizationDevicesStatuses(ctx, operations.GetOrganizationDevicesStatusesRequest{
        EndingBefore: sdk.String("ipsa"),
        Models: []string{
            "aliquid",
            "dignissimos",
            "exercitationem",
        },
        NetworkIds: []string{
            "tempore",
            "sapiente",
            "quae",
            "blanditiis",
        },
        OrganizationID: "voluptas",
        PerPage: sdk.Int64(560472),
        ProductTypes: []GetOrganizationDevicesStatusesProductTypesEnum{
            operations.GetOrganizationDevicesStatusesProductTypesEnumCellularGateway,
            operations.GetOrganizationDevicesStatusesProductTypesEnumSwitch,
        },
        Serials: []string{
            "officiis",
            "deleniti",
        },
        StartingAfter: sdk.String("fugit"),
        Statuses: []GetOrganizationDevicesStatusesStatusesEnum{
            operations.GetOrganizationDevicesStatusesStatusesEnumOnline,
            operations.GetOrganizationDevicesStatusesStatusesEnumOnline,
            operations.GetOrganizationDevicesStatusesStatusesEnumOffline,
            operations.GetOrganizationDevicesStatusesStatusesEnumOnline,
        },
        Tags: []string{
            "a",
        },
        TagsFilterType: operations.GetOrganizationDevicesStatusesTagsFilterTypeEnumWithAnyTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesStatuses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesStatusesOverview

Return an overview of current device statuses

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
    res, err := s.Devices.GetOrganizationDevicesStatusesOverview(ctx, operations.GetOrganizationDevicesStatusesOverviewRequest{
        NetworkIds: []string{
            "deleniti",
        },
        OrganizationID: "magni",
        ProductTypes: []GetOrganizationDevicesStatusesOverviewProductTypesEnum{
            operations.GetOrganizationDevicesStatusesOverviewProductTypesEnumCellularGateway,
            operations.GetOrganizationDevicesStatusesOverviewProductTypesEnumCellularGateway,
            operations.GetOrganizationDevicesStatusesOverviewProductTypesEnumCellularGateway,
            operations.GetOrganizationDevicesStatusesOverviewProductTypesEnumSwitch,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesStatusesOverview200ApplicationJSONObject != nil {
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
    res, err := s.Devices.GetOrganizationDevicesUplinksAddressesByDevice(ctx, operations.GetOrganizationDevicesUplinksAddressesByDeviceRequest{
        EndingBefore: sdk.String("sapiente"),
        NetworkIds: []string{
            "optio",
        },
        OrganizationID: "ratione",
        PerPage: sdk.Int64(951802),
        ProductTypes: []string{
            "nostrum",
            "totam",
        },
        Serials: []string{
            "distinctio",
            "accusamus",
            "est",
        },
        StartingAfter: sdk.String("veniam"),
        Tags: []string{
            "dolores",
            "vel",
            "eius",
            "voluptates",
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
    res, err := s.Devices.GetOrganizationDevicesUplinksLossAndLatency(ctx, operations.GetOrganizationDevicesUplinksLossAndLatencyRequest{
        IP: sdk.String("beatae"),
        OrganizationID: "necessitatibus",
        T0: sdk.String("ratione"),
        T1: sdk.String("porro"),
        Timespan: sdk.Float32(6837.18),
        Uplink: operations.GetOrganizationDevicesUplinksLossAndLatencyUplinkEnumWan1.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInventoryDevice

Return a single device from the inventory of an organization

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
    res, err := s.Devices.GetOrganizationInventoryDevice(ctx, operations.GetOrganizationInventoryDeviceRequest{
        OrganizationID: "numquam",
        Serial: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationInventoryDevices

Return the device inventory for an organization

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
    res, err := s.Devices.GetOrganizationInventoryDevices(ctx, operations.GetOrganizationInventoryDevicesRequest{
        EndingBefore: sdk.String("consequuntur"),
        Macs: []string{
            "officiis",
        },
        Models: []string{
            "ab",
            "neque",
        },
        NetworkIds: []string{
            "autem",
            "nulla",
            "excepturi",
            "at",
        },
        OrderNumbers: []string{
            "similique",
        },
        OrganizationID: "possimus",
        PerPage: sdk.Int64(224855),
        ProductTypes: []GetOrganizationInventoryDevicesProductTypesEnum{
            operations.GetOrganizationInventoryDevicesProductTypesEnumSystemsManager,
            operations.GetOrganizationInventoryDevicesProductTypesEnumCamera,
        },
        Search: sdk.String("eaque"),
        Serials: []string{
            "occaecati",
            "voluptatem",
            "iure",
        },
        StartingAfter: sdk.String("esse"),
        Tags: []string{
            "quae",
            "sit",
            "rerum",
            "laboriosam",
        },
        TagsFilterType: operations.GetOrganizationInventoryDevicesTagsFilterTypeEnumWithAnyTags.ToPointer(),
        UsedState: operations.GetOrganizationInventoryDevicesUsedStateEnumUnused.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryDevices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopDevicesByUsage

Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.

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
    res, err := s.Devices.GetOrganizationSummaryTopDevicesByUsage(ctx, operations.GetOrganizationSummaryTopDevicesByUsageRequest{
        OrganizationID: "iste",
        T0: sdk.String("sed"),
        T1: sdk.String("veritatis"),
        Timespan: sdk.Float32(4147.2),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopDevicesByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopDevicesModelsByUsage

Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.

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
    res, err := s.Devices.GetOrganizationSummaryTopDevicesModelsByUsage(ctx, operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest{
        OrganizationID: "amet",
        T0: sdk.String("eveniet"),
        T1: sdk.String("autem"),
        Timespan: sdk.Float32(4686.34),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSONObjects != nil {
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
    res, err := s.Devices.GetOrganizationWirelessDevicesEthernetStatuses(ctx, operations.GetOrganizationWirelessDevicesEthernetStatusesRequest{
        EndingBefore: sdk.String("repellendus"),
        NetworkIds: []string{
            "rem",
            "voluptatum",
        },
        OrganizationID: "vel",
        PerPage: sdk.Int64(60842),
        StartingAfter: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## LockNetworkSmDevices

Lock a set of devices

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
    res, err := s.Devices.LockNetworkSmDevices(ctx, operations.LockNetworkSmDevicesRequest{
        RequestBody: &operations.LockNetworkSmDevicesRequestBody{
            Ids: []string{
                "consectetur",
                "porro",
            },
            Pin: sdk.Int64(47000),
            Scope: []string{
                "adipisci",
                "sit",
                "labore",
            },
            Serials: []string{
                "quisquam",
                "ipsum",
                "quod",
            },
            WifiMacs: []string{
                "voluptas",
                "porro",
                "sit",
                "explicabo",
            },
        },
        NetworkID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LockNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ModifyNetworkSmDevicesTags

Add, delete, or update the tags of a set of devices

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
    res, err := s.Devices.ModifyNetworkSmDevicesTags(ctx, operations.ModifyNetworkSmDevicesTagsRequest{
        RequestBody: operations.ModifyNetworkSmDevicesTagsRequestBody{
            Ids: []string{
                "necessitatibus",
                "dignissimos",
            },
            Scope: []string{
                "qui",
                "illo",
                "facilis",
            },
            Serials: []string{
                "quibusdam",
                "provident",
                "alias",
            },
            Tags: []string{
                "aspernatur",
                "nihil",
                "ut",
                "velit",
            },
            UpdateAction: "doloribus",
            WifiMacs: []string{
                "ex",
                "cumque",
                "magni",
                "animi",
            },
        },
        NetworkID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyNetworkSmDevicesTags200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## MoveNetworkSmDevices

Move a set of devices to a new network

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
    res, err := s.Devices.MoveNetworkSmDevices(ctx, operations.MoveNetworkSmDevicesRequest{
        RequestBody: operations.MoveNetworkSmDevicesRequestBody{
            Ids: []string{
                "saepe",
            },
            NewNetwork: "ea",
            Scope: []string{
                "odit",
                "natus",
                "quam",
                "atque",
            },
            Serials: []string{
                "quo",
                "eos",
                "enim",
                "commodi",
            },
            WifiMacs: []string{
                "veniam",
                "cum",
                "voluptatem",
            },
        },
        NetworkID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RebootDevice

Reboot a device

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
    res, err := s.Devices.RebootDevice(ctx, operations.RebootDeviceRequest{
        Serial: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RebootDevice202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RefreshNetworkSmDeviceDetails

Refresh the details of a device

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
    res, err := s.Devices.RefreshNetworkSmDeviceDetails(ctx, operations.RefreshNetworkSmDeviceDetailsRequest{
        DeviceID: "magni",
        NetworkID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveNetworkDevices

Remove a single device

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
    res, err := s.Devices.RemoveNetworkDevices(ctx, operations.RemoveNetworkDevicesRequest{
        RequestBody: operations.RemoveNetworkDevicesRequestBody{
            Serial: "doloribus",
        },
        NetworkID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnenrollNetworkSmDevice

Unenroll a device

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
    res, err := s.Devices.UnenrollNetworkSmDevice(ctx, operations.UnenrollNetworkSmDeviceRequest{
        DeviceID: "placeat",
        NetworkID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnenrollNetworkSmDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDevice

Update the attributes of a device

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
    res, err := s.Devices.UpdateDevice(ctx, operations.UpdateDeviceRequest{
        RequestBody: &operations.UpdateDeviceRequestBody{
            Address: sdk.String("6637 Koch Knolls"),
            FloorPlanID: sdk.String("cum"),
            Lat: sdk.Float32(7465.4),
            Lng: sdk.Float32(7729.28),
            MoveMapMarker: sdk.Bool(false),
            Name: sdk.String("Joy Will"),
            Notes: sdk.String("perspiciatis"),
            SwitchProfileID: sdk.String("eos"),
            Tags: []string{
                "est",
                "blanditiis",
                "laboriosam",
            },
        },
        Serial: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCellularSims

Updates the SIM and APN configurations for a cellular device.

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
    res, err := s.Devices.UpdateDeviceCellularSims(ctx, operations.UpdateDeviceCellularSimsRequest{
        RequestBody: &operations.UpdateDeviceCellularSimsRequestBody{
            SimFailover: &operations.UpdateDeviceCellularSimsRequestBodySimFailover{
                Enabled: sdk.Bool(false),
            },
            Sims: []UpdateDeviceCellularSimsRequestBodySims{
                operations.UpdateDeviceCellularSimsRequestBodySims{
                    Apns: []UpdateDeviceCellularSimsRequestBodySimsApns{
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "atque",
                                "illum",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("eum"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumNone.ToPointer(),
                                Username: sdk.String("Rasheed91"),
                            },
                            Name: "Hattie Nikolaus",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "aliquam",
                                "vel",
                                "numquam",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("ad"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumNone.ToPointer(),
                                Username: sdk.String("Lelia_Ryan38"),
                            },
                            Name: "Gary Torp I",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "quis",
                                "vel",
                                "praesentium",
                                "sequi",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("illo"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumPap.ToPointer(),
                                Username: sdk.String("Audra_Shanahan"),
                            },
                            Name: "Jordan Konopelski",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "recusandae",
                                "atque",
                                "deserunt",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("a"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumNone.ToPointer(),
                                Username: sdk.String("Myron_Schmeler"),
                            },
                            Name: "Jana Cruickshank DVM",
                        },
                    },
                    IsPrimary: sdk.Bool(false),
                    Slot: operations.UpdateDeviceCellularSimsRequestBodySimsSlotEnumSim1.ToPointer(),
                },
            },
        },
        Serial: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCellularSims200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceManagementInterface

Update the management interface settings for a device

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
    res, err := s.Devices.UpdateDeviceManagementInterface(ctx, operations.UpdateDeviceManagementInterfaceRequest{
        RequestBody: &operations.UpdateDeviceManagementInterfaceRequestBody{
            Wan1: &operations.UpdateDeviceManagementInterfaceRequestBodyWan1{
                StaticDNS: []string{
                    "consequuntur",
                    "ratione",
                    "ut",
                },
                StaticGatewayIP: sdk.String("explicabo"),
                StaticIP: sdk.String("dolore"),
                StaticSubnetMask: sdk.String("inventore"),
                UsingStaticIP: sdk.Bool(false),
                Vlan: sdk.Int64(472574),
                WanEnabled: operations.UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnumNotConfigured.ToPointer(),
            },
            Wan2: &operations.UpdateDeviceManagementInterfaceRequestBodyWan2{
                StaticDNS: []string{
                    "adipisci",
                },
                StaticGatewayIP: sdk.String("debitis"),
                StaticIP: sdk.String("nesciunt"),
                StaticSubnetMask: sdk.String("sapiente"),
                UsingStaticIP: sdk.Bool(false),
                Vlan: sdk.Int64(390854),
                WanEnabled: operations.UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnumDisabled.ToPointer(),
            },
        },
        Serial: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSmDevicesFields

Modify the fields of a device

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
    res, err := s.Devices.UpdateNetworkSmDevicesFields(ctx, operations.UpdateNetworkSmDevicesFieldsRequest{
        RequestBody: operations.UpdateNetworkSmDevicesFieldsRequestBody{
            DeviceFields: operations.UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields{
                Name: sdk.String("Terrance Nader"),
                Notes: sdk.String("fuga"),
            },
            ID: sdk.String("e8ab4a9c-492c-45e8-ba5d-4aa4a508bd38"),
            Serial: sdk.String("eaque"),
            WifiMac: sdk.String("optio"),
        },
        NetworkID: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSmDevicesFields200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## VmxNetworkDevicesClaim

Claim a vMX into a network

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
    res, err := s.Devices.VmxNetworkDevicesClaim(ctx, operations.VmxNetworkDevicesClaimRequest{
        RequestBody: operations.VmxNetworkDevicesClaimRequestBody{
            Size: operations.VmxNetworkDevicesClaimRequestBodySizeEnumMedium,
        },
        NetworkID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmxNetworkDevicesClaim200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## WipeNetworkSmDevices

Wipe a device

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
    res, err := s.Devices.WipeNetworkSmDevices(ctx, operations.WipeNetworkSmDevicesRequest{
        RequestBody: &operations.WipeNetworkSmDevicesRequestBody{
            ID: sdk.String("a8dd71bd-daa3-40b7-b914-49ae69c088d4"),
            Pin: sdk.Int64(111026),
            Serial: sdk.String("deleniti"),
            WifiMac: sdk.String("tempore"),
        },
        NetworkID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WipeNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```
