# Actions

## Overview

API operations to interact with the PATROL Agent.

### Available Operations

* [CollectNow](#collectnow) - Triggers a new collect on a specific device.
* [Rediscover](#rediscover) - Triggers a new discovery on a specific device.
* [Reinitialize](#reinitialize) - Sends a 'Reinitialize KM' command.
* [Remove](#remove) - Removes a specific instance from the monitoring environment.
* [Reset](#reset) - Resets the Error Count parameter.

## CollectNow

You need to provide the <b>Device ID</b> and <b>Monitor Class</b> parameters to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> of a device.

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
    res, err := s.Actions.CollectNow(ctx, operations.CollectNowRequest{
        DeviceID: 715190,
        MonitorClass: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Rediscover

You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.

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
    res, err := s.Actions.Rediscover(ctx, operations.RediscoverRequest{
        DeviceID: 602763,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Reinitialize

Launches a 'Reinitialize KM' command for the following parameters:<br>- resetDiscoveryAndPollingIntervals<br>- resetAlertAfterNTimes<br>- resetAlertActions<br>- resetOtherA<br>- resetSettings<br>- resetDebugMode<br>- resetRemovedPausedObjectList<br>- resetReportSettings<br>- resetJavaSettings<br>- resetThresholds<br><br>You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Actions.Reinitialize(ctx, operations.ReinitializeRequest{
        ReinitializeActionConfiguration: shared.ReinitializeActionConfiguration{
            ResetAlertActions: shared.ReinitializeActionConfigurationResetAlertActionsEnumOne.ToPointer(),
            ResetAlertAfterNTimes: shared.ReinitializeActionConfigurationResetAlertAfterNTimesEnumOne.ToPointer(),
            ResetDebugMode: shared.ReinitializeActionConfigurationResetDebugModeEnumOne.ToPointer(),
            ResetDiscoveryAndPollingIntervals: shared.ReinitializeActionConfigurationResetDiscoveryAndPollingIntervalsEnumZero.ToPointer(),
            ResetJavaSettings: shared.ReinitializeActionConfigurationResetJavaSettingsEnumOne.ToPointer(),
            ResetOtherAlertSettings: shared.ReinitializeActionConfigurationResetOtherAlertSettingsEnumOne.ToPointer(),
            ResetRemovedPausedObjectList: shared.ReinitializeActionConfigurationResetRemovedPausedObjectListEnumZero.ToPointer(),
            ResetReportSettings: shared.ReinitializeActionConfigurationResetReportSettingsEnumZero.ToPointer(),
            ResetThresholds: shared.ReinitializeActionConfigurationResetThresholdsEnumZero.ToPointer(),
        },
        DeviceID: 891773,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Remove

You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the Monitor SID).

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
    res, err := s.Actions.Remove(ctx, operations.RemoveRequest{
        DeviceID: 56713,
        MonitorClass: "delectus",
        MonitorSid: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Reset

Sets the Error Count parameter to 0.<br><br>You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the monitorSid).

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
    res, err := s.Actions.Reset(ctx, operations.ResetRequest{
        DeviceID: 383441,
        MonitorClass: "molestiae",
        MonitorSid: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
