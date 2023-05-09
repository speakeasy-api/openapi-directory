# Station

## Overview

Weather station specific methods

### Available Operations

* [Getmeasure](#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [Getstationsdata](#getstationsdata) - The method getstationsdata Returns data from a user's Weather Stations (measures and device specific data).

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
    res, err := s.Station.Getmeasure(ctx, operations.GetmeasureRequest{
        DateBegin: sdk.Int(20218),
        DateEnd: sdk.String("ipsam"),
        DeviceID: "repellendus",
        Limit: sdk.Int(957156),
        ModuleID: sdk.String("quo"),
        Optimize: sdk.Bool(false),
        RealTime: sdk.Bool(false),
        Scale: operations.GetmeasureScaleEnumMax,
        Type: []GetmeasureTypeEnum{
            operations.GetmeasureTypeEnumDateMaxCo2,
            operations.GetmeasureTypeEnumSumBoilerOff,
            operations.GetmeasureTypeEnumDateMaxTemp,
            operations.GetmeasureTypeEnumMaxNoise,
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

## Getstationsdata

The method getstationsdata Returns data from a user's Weather Stations (measures and device specific data).

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
    res, err := s.Station.Getstationsdata(ctx, operations.GetstationsdataRequest{
        DeviceID: sdk.String("quod"),
        GetFavorites: sdk.Bool(false),
    }, operations.GetstationsdataSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAStationDataResponse != nil {
        // handle response
    }
}
```
