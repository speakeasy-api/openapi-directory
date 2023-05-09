# Deprecated

## Overview

These methods are no longer maintained nor supported

### Available Operations

* [~~Devicelist~~](#devicelist) - The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.
 :warning: **Deprecated**
* [~~Getthermstate~~](#getthermstate) - The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint. :warning: **Deprecated**
* [~~Getuser~~](#getuser) - The method getuser returns information about a user such as prefered language, prefered units, and list of devices.
 :warning: **Deprecated**

## ~~Devicelist~~

The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Deprecated.Devicelist(ctx, operations.DevicelistRequest{
        AppType: operations.DevicelistAppTypeEnumAppStation.ToPointer(),
        DeviceID: sdk.String("quibusdam"),
        GetFavorites: sdk.Bool(false),
    }, operations.DevicelistSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NADeviceListResponse != nil {
        // handle response
    }
}
```

## ~~Getthermstate~~

The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Deprecated.Getthermstate(ctx, operations.GetthermstateRequest{
        DeviceID: "unde",
        ModuleID: "nulla",
    }, operations.GetthermstateSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAThermStateResponse != nil {
        // handle response
    }
}
```

## ~~Getuser~~

The method getuser returns information about a user such as prefered language, prefered units, and list of devices.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Deprecated.Getuser(ctx, operations.GetuserSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAUserResponse != nil {
        // handle response
    }
}
```
