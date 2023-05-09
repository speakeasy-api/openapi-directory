# Departures

### Available Operations

* [DeparturesGetForStop](#departuresgetforstop) - View departures for all routes from a stop
* [DeparturesGetForStopAndRoute](#departuresgetforstopandroute) - View departures for a specific route from a stop

## DeparturesGetForStop

View departures for all routes from a stop

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
    res, err := s.Departures.DeparturesGetForStop(ctx, operations.DeparturesGetForStopRequest{
        DateUtc: types.MustTimeFromString("2022-08-14T01:03:07.567Z"),
        Devid: sdk.String("molestiae"),
        DirectionID: sdk.Int(791725),
        Expand: []DeparturesGetForStopExpandEnum{
            operations.DeparturesGetForStopExpandEnumDirection,
            operations.DeparturesGetForStopExpandEnumDirection,
            operations.DeparturesGetForStopExpandEnumDisruption,
            operations.DeparturesGetForStopExpandEnumRun,
        },
        Gtfs: sdk.Bool(false),
        IncludeCancelled: sdk.Bool(false),
        IncludeGeopath: sdk.Bool(false),
        LookBackwards: sdk.Bool(false),
        MaxResults: sdk.Int(925597),
        PlatformNumbers: []int{
            71036,
            337396,
            87129,
            648172,
        },
        RouteType: operations.DeparturesGetForStopRouteTypeEnumZero,
        Signature: sdk.String("ipsam"),
        StopID: 832620,
        Token: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DeparturesResponse != nil {
        // handle response
    }
}
```

## DeparturesGetForStopAndRoute

View departures for a specific route from a stop

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
    res, err := s.Departures.DeparturesGetForStopAndRoute(ctx, operations.DeparturesGetForStopAndRouteRequest{
        DateUtc: types.MustTimeFromString("2022-07-31T07:34:52.790Z"),
        Devid: sdk.String("at"),
        DirectionID: sdk.Int(870088),
        Expand: []DeparturesGetForStopAndRouteExpandEnum{
            operations.DeparturesGetForStopAndRouteExpandEnumDirection,
            operations.DeparturesGetForStopAndRouteExpandEnumVehiclePosition,
            operations.DeparturesGetForStopAndRouteExpandEnumVehiclePosition,
            operations.DeparturesGetForStopAndRouteExpandEnumDirection,
        },
        Gtfs: sdk.Bool(false),
        IncludeCancelled: sdk.Bool(false),
        IncludeGeopath: sdk.Bool(false),
        LookBackwards: sdk.Bool(false),
        MaxResults: sdk.Int(520478),
        RouteID: "porro",
        RouteType: operations.DeparturesGetForStopAndRouteRouteTypeEnumThree,
        Signature: sdk.String("dicta"),
        StopID: 720633,
        Token: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DeparturesResponse != nil {
        // handle response
    }
}
```
