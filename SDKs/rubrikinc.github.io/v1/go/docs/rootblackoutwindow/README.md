# RootBlackoutWindow

## Overview

Blackout windows.

### Available Operations

* [GetBlackoutWindowStatus](#getblackoutwindowstatus) - Get current status of global blackout window
* [ToggleBlackoutWindow](#toggleblackoutwindow) - Starts or stops the global blackout window in local Rubrik cluster

## GetBlackoutWindowStatus

Determine whether global blackout window is currently active.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootBlackoutWindow.GetBlackoutWindowStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalBlackoutWindowStatus != nil {
        // handle response
    }
}
```

## ToggleBlackoutWindow

Returns whether or not the system is in a blackout window.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootBlackoutWindow.ToggleBlackoutWindow(ctx, shared.GlobalBlackoutWindowStatus{
        IsGlobalBlackoutActive: false,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalBlackoutWindowStatus != nil {
        // handle response
    }
}
```
