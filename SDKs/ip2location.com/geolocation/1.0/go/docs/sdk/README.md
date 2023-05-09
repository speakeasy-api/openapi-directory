# SDK

## Overview

IP2Location web service providing a service to do a reverse lookup of an IP address to an ISO3166 country code, region or state, city, latitude and longitude, ZIP/Postal code, time zone, Internet Service Provider (ISP) or company name, domain name, net speed, area code, weather station code, weather station name, mobile country code (MCC), mobile network code (MNC) and carrier brand, elevation, usage type, address type and IAB category. There are also 7 categories of additional add-on response fields supported such as metro, olson time zone, translations and more. Refer to https://www.ip2location.com/web-service/ip2location for further information.

### Available Operations

* [Get](#get) - Get geolocation information via IP address

## Get

Get geolocation information via IP address

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
        Addon: []GetAddonEnum{
            operations.GetAddonEnumGeotargeting,
            operations.GetAddonEnumGeotargeting,
        },
        Format: operations.GetFormatEnumJSON.ToPointer(),
        IP: "8.8.8.8",
        Key: "iure",
        Lang: operations.GetLangEnumEt.ToPointer(),
        Package: operations.GetPackageEnumWs23.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200ApplicationJSONString != nil {
        // handle response
    }
}
```
