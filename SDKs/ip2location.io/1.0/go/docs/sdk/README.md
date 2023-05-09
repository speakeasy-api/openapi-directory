# SDK

## Overview

IP2Location.io IP Geolocation API provides RESTful API to obtain visitors’ geolocation information such as country, region, district, city, latitude & longitude, ZIP code, time zone, ASN, ISP, domain, net speed, IDD code, area code, weather station data, MNC, MCC, mobile brand, elevation, usage type, address type, advertisement category, ASN and proxy data with an IP address.

### Available Operations

* [Get](#get) - Geolocate user's location information via IP address

## Get

Geolocate user's location information via IP address

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
    res, err := s.SDK.Get(ctx, operations.GetRequest{
        Format: operations.GetFormatEnumXML.ToPointer(),
        IP: "8.8.8.8",
        Key: "unde",
        Lang: operations.GetLangEnumTr.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
