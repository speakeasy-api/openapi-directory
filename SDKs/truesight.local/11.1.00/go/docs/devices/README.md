# Devices

## Overview

API operations to interact with the monitored Devices.

### Available Operations

* [GetAgentDevices](#getagentdevices) - Gets a list of all the devices monitored by an Agent.
* [GetDevice](#getdevice) - Gets detailed information about a specific device.
* [GetDeviceAgent](#getdeviceagent) - Gets detailed information about an Agent.
* [GetDeviceEnergyUsage](#getdeviceenergyusage) - Gets the energy usage for a specific device and a given period.
* [GetDeviceMonitors](#getdevicemonitors) - Gets the Monitors for a specific device.
* [GetDeviceParameterHistory](#getdeviceparameterhistory) - Gets data history for a parameter of a specific device over a given period.
* [GetDevices](#getdevices) - Gets summarized information about all monitored devices.
* [GetDevicesSummary](#getdevicessummary) - Gets overall information for all devices.
* [GetHeatingMarginCoverage](#getheatingmargincoverage) - Gets the heating margin values for each monitored device, when available.
* [SearchDevices](#searchdevices) - Searches devices by name, model, manufacturer or serial number.

## GetAgentDevices

You need to provide the <b>Device ID</b> of a device to retrieve any other devices monitored by the same Agent:<br>-use the <b>hardware/devices</b> service to get all available device IDs.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.GetAgentDevices(ctx, operations.GetAgentDevicesRequest{
        DeviceID: 925597,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDevice

You need to provide a <b>Device ID</b>:<br>-use the <b>hardware/devices</b> service to get all available device IDs.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.GetDevice(ctx, operations.GetDeviceRequest{
        DeviceID: 836079,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDeviceAgent

You need to provide a <b>Device ID</b> to retrieve detailed information about the Agent that Monitors the device:<br>-use the <b>hardware/devices</b> service to get all available device IDs.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.GetDeviceAgent(ctx, operations.GetDeviceAgentRequest{
        DeviceID: 71036,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDeviceEnergyUsage

You need to provide the device ID:<br>- use the <b>hardware/devices</b> service to get all available device IDs.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.GetDeviceEnergyUsage(ctx, operations.GetDeviceEnergyUsageRequest{
        Basis: operations.GetDeviceEnergyUsageBasisEnumDaily.ToPointer(),
        DeviceID: 87129,
        RollPeriod: operations.GetDeviceEnergyUsageRollPeriodEnumSixMonths.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDeviceMonitors

You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.GetDeviceMonitors(ctx, operations.GetDeviceMonitorsRequest{
        DeviceID: 20218,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeviceParameterHistory

You need to provide the <b>Device ID</b>, <b>Parameter Name</b>, <b>Monitor Type</b> and <b>Monitor SID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs<br>- use the <b>/hardware/device-monitors/{deviceId}</b> to get the parameter name, the Monitor type and the Monitor SID.<br><br>Finally, define the period for which you wish to retrieve data history.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.GetDeviceParameterHistory(ctx, operations.GetDeviceParameterHistoryRequest{
        DeviceID: 368241,
        From: sdk.Int64(832620),
        MonitorSid: sdk.String("sapiente"),
        MonitorType: "quo",
        ParameterName: "odit",
        To: sdk.Int64(870013),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDevices

Lists the available DeviceSummary instances.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.GetDevices(ctx, operations.GetDevicesRequest{
        ApplicationID: sdk.String("at"),
        Direction: operations.GetDevicesDirectionEnumDesc.ToPointer(),
        GroupID: sdk.String("molestiae"),
        Limit: sdk.Int(799159),
        Page: sdk.String("quod"),
        ServiceID: sdk.String("esse"),
        Sort: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDevicesSummary

Lists the GlobalSummary instance for all the monitored devices.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.GetDevicesSummary(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetHeatingMarginCoverage

If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.GetHeatingMarginCoverage(ctx, operations.GetHeatingMarginCoverageRequest{
        ApplicationID: sdk.String("porro"),
        Covered: sdk.Bool(false),
        Direction: operations.GetHeatingMarginCoverageDirectionEnumDesc.ToPointer(),
        GroupID: sdk.String("dicta"),
        Limit: sdk.Int(720633),
        Page: sdk.String("officia"),
        ServiceID: sdk.String("occaecati"),
        Sort: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## SearchDevices

Gets the DeviceSummary instances whose name, model, manufacturer or serial number match the specified criteria.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.SearchDevices(ctx, operations.SearchDevicesRequest{
        ApplicationID: sdk.String("deleniti"),
        GroupID: sdk.String("hic"),
        Limit: sdk.Int(758616),
        Page: sdk.String("totam"),
        SearchTerms: "beatae",
        ServiceID: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
