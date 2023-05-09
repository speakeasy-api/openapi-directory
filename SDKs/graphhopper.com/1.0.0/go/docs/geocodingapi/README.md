# GeocodingAPI

## Overview

Everything about geocoding

### Available Operations

* [GetGeocode](#getgeocode) - Geocoding Endpoint

## GetGeocode


### Introduction

![Geocoding Example](./img/geocoding-example.png)

_Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`).
For example the conversion from `Berlin` to `52.5170365,13.3888599`.

_Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding).


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GeocodingAPI.GetGeocode(ctx, operations.GetGeocodeRequest{
        Debug: sdk.Bool(false),
        Limit: sdk.Int(847252),
        Locale: sdk.String("vel"),
        Point: sdk.String("error"),
        Provider: sdk.String("deserunt"),
        Q: sdk.String("suscipit"),
        Reverse: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GeocodingResponse != nil {
        // handle response
    }
}
```
