# Devices

### Available Operations

* [ClaimNetworkDevices](#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)
* [CycleDeviceSwitchPorts](#cycledeviceswitchports) - Cycle a set of switch ports
* [GetNetworkDevice](#getnetworkdevice) - Return a single device
* [GetNetworkDeviceLossAndLatencyHistory](#getnetworkdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds for a wired network device.
* [GetNetworkDevicePerformance](#getnetworkdeviceperformance) - Return the performance score for a single MX
* [GetNetworkDeviceUplink](#getnetworkdeviceuplink) - Return the uplink information for a device.
* [GetNetworkDevices](#getnetworkdevices) - List the devices in a network
* [GetOrganizationDevices](#getorganizationdevices) - List the devices in an organization
* [RebootNetworkDevice](#rebootnetworkdevice) - Reboot a device
* [RemoveNetworkDevice](#removenetworkdevice) - Remove a single device
* [UpdateNetworkDevice](#updatenetworkdevice) - Update the attributes of a device

## ClaimNetworkDevices

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)

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
        RequestBody: &operations.ClaimNetworkDevicesRequestBody{
            Serial: sdk.String("voluptas"),
            Serials: []string{
                "quasi",
                "tempora",
                "numquam",
            },
        },
        NetworkID: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CycleDeviceSwitchPorts

Cycle a set of switch ports

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
    res, err := s.Devices.CycleDeviceSwitchPorts(ctx, operations.CycleDeviceSwitchPortsRequest{
        RequestBody: operations.CycleDeviceSwitchPortsRequestBody{
            Ports: []string{
                "ipsa",
                "molestiae",
                "magnam",
            },
        },
        Serial: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CycleDeviceSwitchPorts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkDevice

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
    res, err := s.Devices.GetNetworkDevice(ctx, operations.GetNetworkDeviceRequest{
        NetworkID: "eius",
        Serial: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds for a wired network device.

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
    res, err := s.Devices.GetNetworkDeviceLossAndLatencyHistory(ctx, operations.GetNetworkDeviceLossAndLatencyHistoryRequest{
        IP: "esse",
        NetworkID: "rem",
        Resolution: sdk.Int64(683282),
        Serial: "reprehenderit",
        T0: sdk.String("quidem"),
        T1: sdk.String("fugiat"),
        Timespan: sdk.Float32(2835.19),
        Uplink: operations.GetNetworkDeviceLossAndLatencyHistoryUplinkEnumWan1.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDeviceLossAndLatencyHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkDevicePerformance

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

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
    res, err := s.Devices.GetNetworkDevicePerformance(ctx, operations.GetNetworkDevicePerformanceRequest{
        NetworkID: "suscipit",
        Serial: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDevicePerformance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkDeviceUplink

Return the uplink information for a device.

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
    res, err := s.Devices.GetNetworkDeviceUplink(ctx, operations.GetNetworkDeviceUplinkRequest{
        NetworkID: "eos",
        Serial: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDeviceUplink200ApplicationJSONObjects != nil {
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
        NetworkID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDevices200ApplicationJSONObjects != nil {
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
        ConfigurationUpdatedAfter: sdk.String("veritatis"),
        EndingBefore: sdk.String("ipsa"),
        OrganizationID: "id",
        PerPage: sdk.Int64(696997),
        StartingAfter: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## RebootNetworkDevice

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
    res, err := s.Devices.RebootNetworkDevice(ctx, operations.RebootNetworkDeviceRequest{
        NetworkID: "quo",
        Serial: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RebootNetworkDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveNetworkDevice

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
    res, err := s.Devices.RemoveNetworkDevice(ctx, operations.RemoveNetworkDeviceRequest{
        NetworkID: "quo",
        Serial: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateNetworkDevice

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
    res, err := s.Devices.UpdateNetworkDevice(ctx, operations.UpdateNetworkDeviceRequest{
        RequestBody: &operations.UpdateNetworkDeviceRequestBody{
            Address: sdk.String("13050 Simeon Heights"),
            FloorPlanID: sdk.String("aspernatur"),
            Lat: sdk.Float32(1970.54),
            Lng: sdk.Float32(7791.92),
            MoveMapMarker: sdk.Bool(false),
            Name: sdk.String("Sophie Bayer"),
            Notes: sdk.String("dignissimos"),
            SwitchProfileID: sdk.String("inventore"),
            Tags: sdk.String("nihil"),
        },
        NetworkID: "totam",
        Serial: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```
