# Bluetooth

## Overview

This folder contains Bluetooth related endpoints.

### Available Operations

* [ChangeDiscoverability](#changediscoverability) - Change Discoverability
* [Forgetpaireddevice](#forgetpaireddevice) - Forget paired device
* [GetPairedDevices](#getpaireddevices) - Get Paired Devices
* [GetScanResults](#getscanresults) - Get Scan Results
* [PairwithSpeaker](#pairwithspeaker) - Pair with Speaker
* [Scanfordevices](#scanfordevices) - Scan for devices
* [Status](#status) - Status

## ChangeDiscoverability

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 1 only**

This enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).

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
    res, err := s.Bluetooth.ChangeDiscoverability(ctx, shared.ChangeDiscoverabilityRequest{
        EnableDiscovery: false,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChangeDiscoverability200TextPlainObject != nil {
        // handle response
    }
}
```

## Forgetpaireddevice

*See note for Bluetooth under `/setup/bluetooth/status`*

**For both parts**

This is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).

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
    res, err := s.Bluetooth.Forgetpaireddevice(ctx, shared.ForgetpaireddeviceRequest{
        Bond: false,
        MacAddress: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Forgetpaireddevice200TextPlainObject != nil {
        // handle response
    }
}
```

## GetPairedDevices

*See note for Bluetooth under `/setup/bluetooth/status`*

**For both parts**

This gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.

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
    res, err := s.Bluetooth.GetPairedDevices(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Example111s != nil {
        // handle response
    }
}
```

## GetScanResults

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This returns a list of all nearby bluetooth devices. While the Home app only shows speakers, this list contains all devices including TVs, mobiles, etc.

`rssi` is signal strength, `name` is name, `mac_address` is mac address.  
`device_class` and `device_type` are bluetooth codes.  

The Home app only lists those devices with `expected_profiles` > 0. Basically, the device should function as a speaker.

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
    res, err := s.Bluetooth.GetScanResults(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Example112s != nil {
        // handle response
    }
}
```

## PairwithSpeaker

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This pairs with other bluetooth speakers by mac address.

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
    res, err := s.Bluetooth.PairwithSpeaker(ctx, shared.PairwithSpeakerRequest{
        Connect: false,
        MacAddress: "vel",
        Profile: 623564,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PairwithSpeaker200TextPlainObject != nil {
        // handle response
    }
}
```

## Scanfordevices

*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.  
To get the scan results, see /setup/bluetooth/scan_results.

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
    res, err := s.Bluetooth.Scanfordevices(ctx, shared.ScanfordevicesRequest{
        ClearResults: false,
        Enable: false,
        Timeout: 645894,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Scanfordevices200TextPlainObject != nil {
        // handle response
    }
}
```

## Status

> **There are 2 parts of Bluetooth.**
>
> *Part 1*: Devices like phones connect to Home and play audio through Home.  
> For this, /setup/bluetooth/discovery is used to make Home discoverable. Then devices can connect to it as if Home is just another bluetooth speaker.
>
> *Part 2*: Bluetooth speakers connect to Home and Home plays audio through the speakers.
> For this, /setup/bluetooth/scan and /setup/bluetooth/scan_results are used to connect to other speakers.
>
> The other endpoints are common for both parts.


**For both parts**

This gives the status of all bluetooth things.
- Not sure what `audio_mode` is.
- `discovery_enabled` states whether Home is discoverable. (**Part 1**)
- `connecting_devices` is a list of all media sources (like phones) connected to Home. (**Part 1**)
- `scanning_enabled` states whether Home scanning for other bluetooth speakers/devices. (**Part 2**)
- `connected_devices` is a list of all speakers connected to Home. (**Part 2**)

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
    res, err := s.Bluetooth.Status(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Example110 != nil {
        // handle response
    }
}
```
