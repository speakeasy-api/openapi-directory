# Wifi

## Overview

This folder contains Wi-Fi related endpoints.

### Available Operations

* [ConnecttoWiFiNetwork](#connecttowifinetwork) - Connect to Wi-Fi Network
* [ForgetWiFiNetwork](#forgetwifinetwork) - Forget Wi-Fi Network
* [GetSavedNetworks](#getsavednetworks) - Get Saved Networks
* [GetWiFiScanResults](#getwifiscanresults) - Get Wi-Fi Scan Results
* [ScanforNetworks](#scanfornetworks) - Scan for Networks

## ConnecttoWiFiNetwork

**Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).

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
    res, err := s.Wifi.ConnecttoWiFiNetwork(ctx, shared.ConnecttoWiFiNetworkRequest{
        Bssid: "quod",
        EncPasswd: "esse",
        SignalLevel: 520478,
        Ssid: "porro",
        WpaAuth: 678880,
        WpaCipher: 118274,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ForgetWiFiNetwork

This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks

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
    res, err := s.Wifi.ForgetWiFiNetwork(ctx, shared.ForgetWiFiNetworkRequest{
        WpaID: 720633,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ForgetWiFiNetwork200TextPlainObject != nil {
        // handle response
    }
}
```

## GetSavedNetworks

This gets a list of all saved Wi-Fi networks.

Each network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.  
`wpa_id` is an incrementing number used to identify a saved network.  
#TODO: Add values for `wpa_auth` and `wpa_cipher`.

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
    res, err := s.Wifi.GetSavedNetworks(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Example113s != nil {
        // handle response
    }
}
```

## GetWiFiScanResults

This gets a list of all nearby Wi-Fi access points.

The list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.

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
    res, err := s.Wifi.GetWiFiScanResults(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Example114s != nil {
        // handle response
    }
}
```

## ScanforNetworks

This initiates scanning for Wi-Fi networks.

The results can be obtained with `/setup/scan_results` after triggering the scan with this request.

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
    res, err := s.Wifi.ScanforNetworks(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanforNetworks200TextPlainObject != nil {
        // handle response
    }
}
```
