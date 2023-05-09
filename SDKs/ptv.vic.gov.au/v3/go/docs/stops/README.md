# Stops

### Available Operations

* [StopsStopDetails](#stopsstopdetails) - View facilities at a specific stop (Metro and V/Line stations only)
* [StopsStopsByGeolocation](#stopsstopsbygeolocation) - View all stops near a specific location
* [StopsStopsForRoute](#stopsstopsforroute) - View all stops on a specific route

## StopsStopDetails

View facilities at a specific stop (Metro and V/Line stations only)

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
    res, err := s.Stops.StopsStopDetails(ctx, operations.StopsStopDetailsRequest{
        Devid: sdk.String("fugit"),
        Gtfs: sdk.Bool(false),
        RouteType: operations.StopsStopDetailsRouteTypeEnumThree,
        Signature: sdk.String("excepturi"),
        StopAccessibility: sdk.Bool(false),
        StopAmenities: sdk.Bool(false),
        StopContact: sdk.Bool(false),
        StopDisruptions: sdk.Bool(false),
        StopID: 270008,
        StopLocation: sdk.Bool(false),
        StopStaffing: sdk.Bool(false),
        StopTicket: sdk.Bool(false),
        Token: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3StopResponse != nil {
        // handle response
    }
}
```

## StopsStopsByGeolocation

View all stops near a specific location

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
    res, err := s.Stops.StopsStopsByGeolocation(ctx, operations.StopsStopsByGeolocationRequest{
        Devid: sdk.String("tempore"),
        Latitude: 2884.76,
        Longitude: 9621.89,
        MaxDistance: sdk.Float64(4332.88),
        MaxResults: sdk.Int(248753),
        RouteTypes: []StopsStopsByGeolocationRouteTypesEnum{
            operations.StopsStopsByGeolocationRouteTypesEnumTwo,
            operations.StopsStopsByGeolocationRouteTypesEnumOne,
            operations.StopsStopsByGeolocationRouteTypesEnumTwo,
            operations.StopsStopsByGeolocationRouteTypesEnumFour,
        },
        Signature: sdk.String("sint"),
        StopDisruptions: sdk.Bool(false),
        Token: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3StopsByDistanceResponse != nil {
        // handle response
    }
}
```

## StopsStopsForRoute

View all stops on a specific route

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
    res, err := s.Stops.StopsStopsForRoute(ctx, operations.StopsStopsForRouteRequest{
        Devid: sdk.String("dolor"),
        DirectionID: sdk.Int(891555),
        GeopathUtc: types.MustTimeFromString("2020-12-17T08:08:22.040Z"),
        IncludeGeopath: sdk.Bool(false),
        RouteID: 447125,
        RouteType: operations.StopsStopsForRouteRouteTypeEnumTwo,
        Signature: sdk.String("illum"),
        StopDisruptions: sdk.Bool(false),
        Token: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3StopsOnRouteResponse != nil {
        // handle response
    }
}
```
