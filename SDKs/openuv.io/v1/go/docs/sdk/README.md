# SDK

## Overview

The missing minimalistic JSON real-time UV Index API for awesome Developers, Innovators and Smart Home Enthusiasts

### Available Operations

* [GetForecast](#getforecast) - Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.
* [GetProtection](#getprotection) - Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.
* [GetUv](#getuv) - Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.

## GetForecast

Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetForecast(ctx, operations.GetForecastRequest{
        Alt: sdk.Float64(1050),
        Dt: types.MustTimeFromString("2018-02-04T04:39:06.467Z"),
        Lat: 78.67,
        Lng: 115.67,
        Ozone: sdk.Float64(304.5),
        XAccessToken: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ForecastResults != nil {
        // handle response
    }
}
```

## GetProtection

Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.

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
    res, err := s.SDK.GetProtection(ctx, operations.GetProtectionRequest{
        Alt: sdk.Float64(1050),
        From: 2.5,
        Lat: 78.67,
        Lng: 115.67,
        Ozone: sdk.Float64(304.5),
        To: 3.6,
        XAccessToken: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProtectionResult != nil {
        // handle response
    }
}
```

## GetUv

Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUv(ctx, operations.GetUvRequest{
        Alt: sdk.Float64(1050),
        Dt: types.MustTimeFromString("2018-02-04T04:39:06.467Z"),
        Lat: 78.67,
        Lng: 115.67,
        Ozone: sdk.Float64(304.5),
        XAccessToken: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UvIndexResult != nil {
        // handle response
    }
}
```
