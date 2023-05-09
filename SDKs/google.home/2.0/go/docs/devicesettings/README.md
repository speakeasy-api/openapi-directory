# DeviceSettings

## Overview

This folder consists of all endpoints to modify and control the device.

### Available Operations

* [NightModesettings](#nightmodesettings) - Night Mode settings
* [RebootandFactoryReset](#rebootandfactoryreset) - Reboot and Factory Reset
* [SetEurekaInfo](#seteurekainfo) - Set Eureka Info

## NightModesettings

This sets night mode options.  
To view currently set values, use /setup/eureka_info.  
If `enabled` is set to false, night mode is disabled and the other values do not matter.  
`led_brightness` and `volume` refer to the maximum LED Brightness and Volume that is set during night mode.  
`demo_to_user` is always set to `true` so change in values will be visible in realtime (like brightness).  
`windows`: A combination of `length_hours` and `start_hour` is used to define start and end times for night mode. In this example, night mode starts at 10 PM (22) and ends at 6 AM (8 hours later). `windows.days` is an array of days of week when night mode will be enabled. Example: 0->Sunday, 1-> Monday, ..., 6->Saturday.

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
    res, err := s.DeviceSettings.NightModesettings(ctx, shared.NightModesettingsRequest{
        DemoToUser: false,
        DoNotDisturb: false,
        Enabled: false,
        LedBrightness: 8917.73,
        Volume: 567.13,
        Windows: []shared.Window{
            shared.Window{
                Days: []int{
                    383441,
                    477665,
                },
                LengthHours: 791725,
                StartHour: 812169,
            },
            shared.Window{
                Days: []int{
                    479977,
                    568045,
                    392785,
                },
                LengthHours: 925597,
                StartHour: 836079,
            },
            shared.Window{
                Days: []int{
                    337396,
                },
                LengthHours: 87129,
                StartHour: 648172,
            },
            shared.Window{
                Days: []int{
                    368241,
                },
                LengthHours: 832620,
                StartHour: 957156,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Example17 != nil {
        // handle response
    }
}
```

## RebootandFactoryReset

This can simply reboot the device (`params: "now"`) or factory reset the device (`params: "fdr"`).

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
    res, err := s.DeviceSettings.RebootandFactoryReset(ctx, shared.RebootandFactoryResetRequest{
        Params: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RebootandFactoryReset200TextPlainObject != nil {
        // handle response
    }
}
```

## SetEurekaInfo

This can set custom values to some options.

Only fields to be modified need to be sent, not all. The example has some modifiable fields.

TODO: List all modifiable fields.

Sending non-existant fields will still return a 200 OK, but they are not saved.

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
    res, err := s.DeviceSettings.SetEurekaInfo(ctx, shared.SetEurekaInfoRequest{
        Name: "Teri Strosin",
        OptIn: shared.OptIn1{
            Opencast: false,
            PreviewChannel: false,
            RemoteDucking: false,
            Stats: false,
        },
        Settings: shared.Settings1{
            ControlNotifications: 799159,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetEurekaInfo200TextPlainObject != nil {
        // handle response
    }
}
```
