# DeviceInfo

## Overview

Endpoints in this folder give information about the device.

### Available Operations

* [AppDeviceID](#appdeviceid) - App Device ID
* [CheckReadyStatus](#checkreadystatus) - Check Ready Status
* [EurekaInfo](#eurekainfo) - Eureka Info
* [Locales](#locales) - Locales
* [Offer](#offer) - Offer
* [TestInternetDownloadSpeed](#testinternetdownloadspeed) - Test Internet Download Speed
* [Timezones](#timezones) - Timezones

## AppDeviceID

This gives "app device id", "certificate" and "signed data".  
The `app_id` in the request is mandatory and refers to Chromecast backdrop/screensaver app. It has to be set to `E8C28D3C`.  

The certificate is valid and issued by `Chromecast ICA 6 (Audio Assist), Google Inc`.

Not sure what the other two are.

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
    res, err := s.DeviceInfo.AppDeviceID(ctx, shared.AppDeviceIDRequest{
        AppID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Example11 != nil {
        // handle response
    }
}
```

## CheckReadyStatus

**Update:** This seems to have changed now and is no longer possible. The error is also new.

Setting `play_ready_message` to true plays a welcome message on the device saying "Hi, I'm your Google Assistant. I'm here to help. To learn a few things you can do, continue in the Google Home app."

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
    res, err := s.DeviceInfo.CheckReadyStatus(ctx, shared.CheckReadyStatusRequest{
        PlayReadyMessage: false,
        UserID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Example13 != nil {
        // handle response
    }
}
```

## EurekaInfo

This gives most of the device info. The GET parameter `param` is a comma separated list of json keys to fetch. Currently, these params are known: `version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh`

Nested items can also be filtered using the dot notation. Example: `audio.digital`

The `options` GET parameter is always set to `detail` or `detail,sign`. `sign` signs the `nonce` and returns some value.

The `nonce` GET parameter is an integer value signed with needed (see `option` parameter above).

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
    res, err := s.DeviceInfo.EurekaInfo(ctx, operations.EurekaInfoRequest{
        Nonce: 1234512345,
        Options: "detail,sign",
        Params: "version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Example1 != nil {
        // handle response
    }
}
```

## Locales

Simply returns a list of all supported locales.

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
    res, err := s.DeviceInfo.Locales(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Example15s != nil {
        // handle response
    }
}
```

## Offer

This gives a token which is used by the Home app to get offers. The offers themselves are not stored on the device.  
A new token is generated for every request.

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
    res, err := s.DeviceInfo.Offer(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Example12 != nil {
        // handle response
    }
}
```

## TestInternetDownloadSpeed

**Update:** This seems to have been removed. Returns 404 Not Found.

This endpoint tests internet download speed. Any sample file URL can be provided.

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
    res, err := s.DeviceInfo.TestInternetDownloadSpeed(ctx, shared.TestInternetDownloadSpeedRequest{
        URL: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Example16 != nil {
        // handle response
    }
}
```

## Timezones

Simply returns a list of all supported timezones.

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
    res, err := s.DeviceInfo.Timezones(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Example14s != nil {
        // handle response
    }
}
```
