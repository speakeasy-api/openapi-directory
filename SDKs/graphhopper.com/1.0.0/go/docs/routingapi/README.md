# RoutingAPI

## Overview


### Introduction

![Routing screenshot](./img/routing-example.png)

The Routing API is part of the GraphHopper Directions API. Routing is the process of finding the best path connecting
two or more points, where the meaning of ''best'' depends on the vehicle and use case.

### Navigation
If you plan to use the Routing API for navigation, have a look at our [open source demo navigation application](https://github.com/graphhopper/graphhopper-navigation-example) and adapt it to your needs.

### Fast
To get started using this API, just provide two or more points and retrieve the fastest route through the road
network that connects them. This type of request is heavily optimized for query performance, so it does not
allow for some advanced features.
### Flexible
Unlock further flexible features via `ch.disable=true`.


### Available Operations

* [GetRoute](#getroute) - GET Route Endpoint
* [GetRouteInfo](#getrouteinfo) - Coverage information
* [PostRoute](#postroute) - POST Route Endpoint

## GetRoute

The GET request is the most simple one: just specify the parameter in the URL and you are done.
Can be tried directly in every browser.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.RoutingAPI.GetRoute(ctx, operations.GetRouteRequest{
        Algorithm: operations.GetRouteAlgorithmEnumAlternativeRoute.ToPointer(),
        AlternativeRouteMaxPaths: sdk.Int(725595),
        AlternativeRouteMaxShareFactor: sdk.Float64(139.48),
        AlternativeRouteMaxWeightFactor: sdk.Float64(114.27),
        Avoid: sdk.String("deleniti"),
        BlockArea: sdk.String("impedit"),
        CalcPoints: sdk.Bool(false),
        ChDisable: sdk.Bool(false),
        Curbside: []GetRouteCurbsideEnum{
            operations.GetRouteCurbsideEnumAny,
            operations.GetRouteCurbsideEnumLeft,
        },
        Debug: sdk.Bool(false),
        Details: []string{
            "non",
        },
        Elevation: sdk.Bool(false),
        Heading: []int{
            677412,
        },
        HeadingPenalty: sdk.Int(672048),
        Instructions: sdk.Bool(false),
        Locale: sdk.String("placeat"),
        Optimize: sdk.String("velit"),
        PassThrough: sdk.Bool(false),
        Point: []string{
            "autem",
            "nobis",
        },
        PointHint: []string{
            "assumenda",
            "nulla",
            "voluptas",
        },
        PointsEncoded: sdk.Bool(false),
        RoundTripDistance: sdk.Int(727044),
        RoundTripSeed: sdk.Int64(96549),
        SnapPrevention: []string{
            "numquam",
            "explicabo",
        },
        TurnCosts: sdk.Bool(false),
        Vehicle: shared.VehicleProfileIDEnumRacingbike.ToPointer(),
        Weighting: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RouteResponse != nil {
        // handle response
    }
}
```

## GetRouteInfo

Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.RoutingAPI.GetRouteInfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.InfoResponse != nil {
        // handle response
    }
}
```

## PostRoute

Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started.
If you are familiar with POST requests and JSON then do not hesitate to continue here.

Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint
has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly
speed up the request.

To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request.
The effected parameters are: `points`, `point_hints` and `snap_preventions`.

**Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.

For example `point=10,11&point=20,22` will be converted to the `points` array (plural):
```json
{ "points": [[11,10], [22,20]] }
```
Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]`
similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).

Example:
```bash
curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/route?key=[YOUR_KEY]" -d '{"elevation":false,"points":[[-0.087891,51.534377],[-0.090637,51.467697]],"vehicle":"car"}'
```


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.RoutingAPI.PostRoute(ctx, shared.RouteRequest{
        Algorithm: shared.RouteRequestAlgorithmEnumRoundTrip.ToPointer(),
        AlternativeRouteMaxPaths: sdk.Int(301598),
        AlternativeRouteMaxShareFactor: sdk.Float64(4879.35),
        AlternativeRouteMaxWeightFactor: sdk.Float64(2621.18),
        Avoid: sdk.String("esse"),
        BlockArea: sdk.String("esse"),
        CalcPoints: sdk.Bool(false),
        ChDisable: sdk.Bool(false),
        Curbsides: []shared.RouteRequestCurbsidesEnum{
            shared.RouteRequestCurbsidesEnumLeft,
            shared.RouteRequestCurbsidesEnumRight,
            shared.RouteRequestCurbsidesEnumLeft,
        },
        Debug: sdk.Bool(false),
        Details: []string{
            "ut",
            "eum",
            "suscipit",
            "assumenda",
        },
        Elevation: sdk.Bool(false),
        HeadingPenalty: sdk.Int(181151),
        Headings: []int{
            788546,
            86377,
            56848,
        },
        Instructions: sdk.Bool(false),
        Locale: sdk.String("id"),
        Optimize: sdk.String("quidem"),
        PassThrough: sdk.Bool(false),
        PointHints: []string{
            "quo",
        },
        Points: [][]float64{
            []float64{
                6813.59,
                2594.22,
                1783.67,
                3738.13,
            },
            []float64{
                5876,
            },
            []float64{
                2728.22,
            },
            []float64{
                3708.53,
                1334.65,
                1970.54,
                7791.92,
            },
        },
        PointsEncoded: sdk.Bool(false),
        RoundTripDistance: sdk.Int(459856),
        RoundTripSeed: sdk.Int64(925164),
        SnapPreventions: []string{
            "distinctio",
        },
        Vehicle: shared.RouteRequestVehicleEnumBike.ToPointer(),
        Weighting: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RouteResponse != nil {
        // handle response
    }
}
```
