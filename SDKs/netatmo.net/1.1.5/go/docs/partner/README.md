# Partner

## Overview

Partner API specific methods

### Available Operations

* [Getmeasure](#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [Partnerdevices](#partnerdevices) - The method partnerdevices returns the list of device_id to which your partner application has access to.

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
    res, err := s.Partner.Getmeasure(ctx, operations.GetmeasureRequest{
        DateBegin: sdk.Int(847252),
        DateEnd: sdk.String("vel"),
        DeviceID: "error",
        Limit: sdk.Int(645894),
        ModuleID: sdk.String("suscipit"),
        Optimize: sdk.Bool(false),
        RealTime: sdk.Bool(false),
        Scale: operations.GetmeasureScaleEnumThreehours,
        Type: []GetmeasureTypeEnum{
            operations.GetmeasureTypeEnumDateMaxGust,
            operations.GetmeasureTypeEnumCo2,
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

## Partnerdevices

The method partnerdevices returns the list of device_id to which your partner application has access to.

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
    res, err := s.Partner.Partnerdevices(ctx, operations.PartnerdevicesSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAPartnerDevicesResponse != nil {
        // handle response
    }
}
```
