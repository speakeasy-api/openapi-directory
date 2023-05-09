# Healthyhomecoach

## Overview

Healthy Home Coach specific methods

### Available Operations

* [Gethomecoachsdata](#gethomecoachsdata) - The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).

## Gethomecoachsdata

The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).

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
    res, err := s.Healthyhomecoach.Gethomecoachsdata(ctx, operations.GethomecoachsdataRequest{
        DeviceID: sdk.String("corrupti"),
    }, operations.GethomecoachsdataSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAHealthyHomeCoachDataResponse != nil {
        // handle response
    }
}
```
