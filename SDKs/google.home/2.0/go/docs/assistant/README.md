# Assistant

## Overview

This folder contains all endpoints related to Assistant's tasks like Do Not Disturb, Alarms and Timers, Accessibility and equalizer.

### Available Operations

* [Accessibility](#accessibility) - Accessibility
* [AlarmVolume](#alarmvolume) - Alarm Volume
* [DeleteAlarmsandTimers](#deletealarmsandtimers) - Delete Alarms and Timers
* [DoNotDisturb](#donotdisturb) - Do Not Disturb
* [GetAlarmsandTimers](#getalarmsandtimers) - Get Alarms and Timers
* [SetEqualizerValues](#setequalizervalues) - Set Equalizer Values

## Accessibility

This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.  
Sending an empty-body POST request returns the current values.  
Either of the fields or both can be sent and new values will be saved.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CastLocalAuthorizationToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Assistant.Accessibility(ctx, shared.AccessibilityRequest{
        EndpointEnabled: false,
        HotwordEnabled: false,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcurrentvalues != nil {
        // handle response
    }
}
```

## AlarmVolume

This gets and sets alarms and timers volume.  
**Note:** This is not the same as normal volume.

Volume is a float number in [0, 1] where 0 is minimum and 1 is maximum.  
Sending an empty body gets the volume. Sending `volume` sets the volume.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CastLocalAuthorizationToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Assistant.AlarmVolume(ctx, shared.AlarmVolumeRequest{
        Volume: 548814,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getvolume != nil {
        // handle response
    }
}
```

## DeleteAlarmsandTimers

This deletes alarms and timers by their id.

`ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\/`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CastLocalAuthorizationToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Assistant.DeleteAlarmsandTimers(ctx, shared.DeleteAlarmsandTimersRequest{
        Ids: []string{
            "distinctio",
            "quibusdam",
            "unde",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Example19 != nil {
        // handle response
    }
}
```

## DoNotDisturb

This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.

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
            CastLocalAuthorizationToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Assistant.DoNotDisturb(ctx, operations.DoNotDisturbRequest{
        ContentType: "application/json",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcurrentstate != nil {
        // handle response
    }
}
```

## GetAlarmsandTimers

This gives a list of all active alarms and timers.

Both alarms and timers have `id`s which can be used to delete them. (There is no known way of creating/deleting yet). The value of `status` have different meanings for alarms and timers (given below).

Alarms have `date_pattern` and `time_pattern` with day, month, year, hour, minute, second. `fire_time` is the same in unix time (milliseconds, not seconds).  
`status` is 1 for set up and 2 for ringing.

Timers have `original_duration` is the original duration.  
`status` is 1 for set up and 3 for ringing.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CastLocalAuthorizationToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Assistant.GetAlarmsandTimers(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Example18 != nil {
        // handle response
    }
}
```

## SetEqualizerValues

This can only set new equalizer values. To get already set values, use /setup/eureka_info.

The body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.

`low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.

Default values are 0 for both.  
While the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CastLocalAuthorizationToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Assistant.SetEqualizerValues(ctx, shared.SetEqualizerValuesRequest{
        HighShelf: shared.HighShelf1{
            GainDb: 857946,
        },
        LowShelf: shared.LowShelf1{
            GainDb: 544883,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetEqualizerValues200TextPlainObject != nil {
        // handle response
    }
}
```
