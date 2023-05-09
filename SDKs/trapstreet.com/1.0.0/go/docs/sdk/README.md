# SDK

## Overview

The TrapStreet API finds trap streets in Google Maps, Bing Maps and OpenStreetMap data.

### Available Operations

* [GetAddress](#getaddress)

## GetAddress

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
    res, err := s.SDK.GetAddress(ctx, operations.GetAddressRequest{
        Address: "6634 Sim Cape",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```
