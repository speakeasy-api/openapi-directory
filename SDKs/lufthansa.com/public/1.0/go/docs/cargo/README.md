# Cargo

### Available Operations

* [CargoGetRouteFromDateProductCodeByOriginAndDestinationGet](#cargogetroutefromdateproductcodebyoriginanddestinationget) - Retrieve all flights
* [CargoShipmentTrackingByAWBPrefixAndAWBNumberGet](#cargoshipmenttrackingbyawbprefixandawbnumberget) - Shipment Tracking

## CargoGetRouteFromDateProductCodeByOriginAndDestinationGet

Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.

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
    res, err := s.Cargo.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet(ctx, operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest{
        Accept: "nulla",
        Destination: "corrupti",
        FromDate: "illum",
        Origin: "vel",
        ProductCode: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumYnb,
    }, operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CargoShipmentTrackingByAWBPrefixAndAWBNumberGet

With this tracking service you can easily retrieve your shipment or flight status information.

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
    res, err := s.Cargo.CargoShipmentTrackingByAWBPrefixAndAWBNumberGet(ctx, operations.CargoShipmentTrackingByAWBPrefixAndAWBNumberGetRequest{
        Accept: "deserunt",
        AWBNumber: "suscipit",
        AWBPrefix: "iure",
    }, operations.CargoShipmentTrackingByAWBPrefixAndAWBNumberGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CargoShipmentTrackingByAWBPrefixAndAWBNumberGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```
