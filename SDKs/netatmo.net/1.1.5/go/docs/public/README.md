# Public

## Overview

Public stations specific methods

### Available Operations

* [Getmeasure](#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [Getpublicdata](#getpublicdata) - Retrieves publicly shared weather data from Outdoor Modules within a predefined area.

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
    res, err := s.Public.Getmeasure(ctx, operations.GetmeasureRequest{
        DateBegin: sdk.Int(963663),
        DateEnd: sdk.String("tempora"),
        DeviceID: "suscipit",
        Limit: sdk.Int(477665),
        ModuleID: sdk.String("minus"),
        Optimize: sdk.Bool(false),
        RealTime: sdk.Bool(false),
        Scale: operations.GetmeasureScaleEnumOneweek,
        Type: []GetmeasureTypeEnum{
            operations.GetmeasureTypeEnumDateMaxTemp,
            operations.GetmeasureTypeEnumMaxHum,
            operations.GetmeasureTypeEnumMinTemp,
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

## Getpublicdata

Retrieves publicly shared weather data from Outdoor Modules within a predefined area.

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
    res, err := s.Public.Getpublicdata(ctx, operations.GetpublicdataRequest{
        Filter: sdk.Bool(false),
        LatNe: 925597,
        LatSw: 836079,
        LonNe: 71036,
        LonSw: 337396,
        RequiredData: []GetpublicdataRequiredDataEnum{
            operations.GetpublicdataRequiredDataEnumWind,
        },
    }, operations.GetpublicdataSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAPublicDataResponse != nil {
        // handle response
    }
}
```
