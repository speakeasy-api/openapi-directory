# Thermostat

## Overview

Thermostat specific methods

### Available Operations

* [Createnewschedule](#createnewschedule) - The method createnewschedule creates a new schedule stored in the backup list.
* [Getmeasure](#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [Getthermostatsdata](#getthermostatsdata) - The method getthermostatsdata returns information about user's thermostats such as their last measurements.
* [Setthermpoint](#setthermpoint) - The method setthermpoint changes the Thermostat manual temperature setpoint.
* [Switchschedule](#switchschedule) - The method switchschedule switches the Thermostat's schedule to another existing schedule.
* [Syncschedule](#syncschedule) - The method syncschedule changes the Thermostat weekly schedule.

## Createnewschedule

The method createnewschedule creates a new schedule stored in the backup list.

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
    res, err := s.Thermostat.Createnewschedule(ctx, operations.CreatenewscheduleRequest{
        RequestBody: []byte("esse"),
        DeviceID: "totam",
        ModuleID: "porro",
    }, operations.CreatenewscheduleSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NANewScheduleResponse != nil {
        // handle response
    }
}
```

## Getmeasure

The method getmeasure returns the measurements of a device or a module.


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
    res, err := s.Thermostat.Getmeasure(ctx, operations.GetmeasureRequest{
        DateBegin: sdk.Int(678880),
        DateEnd: sdk.String("dicta"),
        DeviceID: "nam",
        Limit: sdk.Int(639921),
        ModuleID: sdk.String("occaecati"),
        Optimize: sdk.Bool(false),
        RealTime: sdk.Bool(false),
        Scale: operations.GetmeasureScaleEnumThirtymin,
        Type: []GetmeasureTypeEnum{
            operations.GetmeasureTypeEnumSumBoilerOn,
            operations.GetmeasureTypeEnumDateMinNoise,
            operations.GetmeasureTypeEnumDateMinHum,
        },
    }, operations.GetmeasureSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAMeasureResponse != nil {
        // handle response
    }
}
```

## Getthermostatsdata

The method getthermostatsdata returns information about user's thermostats such as their last measurements.

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
    res, err := s.Thermostat.Getthermostatsdata(ctx, operations.GetthermostatsdataRequest{
        DeviceID: sdk.String("beatae"),
    }, operations.GetthermostatsdataSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAThermostatDataResponse != nil {
        // handle response
    }
}
```

## Setthermpoint

The method setthermpoint changes the Thermostat manual temperature setpoint.

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
    res, err := s.Thermostat.Setthermpoint(ctx, operations.SetthermpointRequest{
        DeviceID: "commodi",
        ModuleID: "molestiae",
        SetpointEndtime: sdk.Int(264555),
        SetpointMode: operations.SetthermpointSetpointModeEnumAway,
        SetpointTemp: sdk.Float32(7742.34),
    }, operations.SetthermpointSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAOkResponse != nil {
        // handle response
    }
}
```

## Switchschedule

The method switchschedule switches the Thermostat's schedule to another existing schedule.

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
    res, err := s.Thermostat.Switchschedule(ctx, operations.SwitchscheduleRequest{
        DeviceID: "cum",
        ModuleID: "esse",
        ScheduleID: "ipsum",
    }, operations.SwitchscheduleSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAOkResponse != nil {
        // handle response
    }
}
```

## Syncschedule

The method syncschedule changes the Thermostat weekly schedule.

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
    res, err := s.Thermostat.Syncschedule(ctx, operations.SyncscheduleRequest{
        RequestBody: []byte("excepturi"),
        DeviceID: "aspernatur",
        ModuleID: "perferendis",
    }, operations.SyncscheduleSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAOkResponse != nil {
        // handle response
    }
}
```
