# RestrictedPublicVenues

## Overview

#### Areas where drone operations may be restricted or prohibited:
* Lands administered by the National Park Service (prohibited at all times)
* Major League Baseball Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
* National Football League Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
* NCAA Division One Football Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
* NASCAR Sprint Cup, Indy Car, and Champ Series races (prohibited within a 3 NM radius 1 hr before - 1 hr after race)

### Available Operations

* [VenByDistanceUsV1VenuesDistanceQueryPost](#venbydistanceusv1venuesdistancequerypost) - Retrieve all restricted public venues located within given distance of location.
* [VenByPolyUsV1VenuesPolygonQueryPost](#venbypolyusv1venuespolygonquerypost) - Retrieve all restricted public venues located within given GeoJSON Polygon.
* [VenByRouteUsV1VenuesRouteQueryPost](#venbyrouteusv1venuesroutequerypost) - Retrieve all restricted public venues traversed by route.

## VenByDistanceUsV1VenuesDistanceQueryPost

Retrieve venues existing within given distance from a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RestrictedPublicVenues.VenByDistanceUsV1VenuesDistanceQueryPost(ctx, operations.VenByDistanceUsV1VenuesDistanceQueryPostRequest{
        VenuesByDistance: shared.VenuesByDistance{
            Distance: 437032,
            Latitude: 697631,
            Longitude: 602.25,
        },
        XAPIKey: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VenueDistanceResponse != nil {
        // handle response
    }
}
```

## VenByPolyUsV1VenuesPolygonQueryPost

Retrieve all restricted public venues located within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RestrictedPublicVenues.VenByPolyUsV1VenuesPolygonQueryPost(ctx, operations.VenByPolyUsV1VenuesPolygonQueryPostRequest{
        VenuesByPolygon: shared.VenuesByPolygon{
            Poly: map[string]interface{}{
                "mollitia": "laborum",
                "dolores": "dolorem",
                "corporis": "explicabo",
            },
        },
        XAPIKey: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VenuePolyResponse != nil {
        // handle response
    }
}
```

## VenByRouteUsV1VenuesRouteQueryPost

Retrieve all restricted public venues intersected by route. Request body parameters are:
* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RestrictedPublicVenues.VenByRouteUsV1VenuesRouteQueryPost(ctx, operations.VenByRouteUsV1VenuesRouteQueryPostRequest{
        VenuesByRoute: shared.VenuesByRoute{
            Route: map[string]interface{}{
                "omnis": "nemo",
                "minima": "excepturi",
            },
        },
        XAPIKey: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VenueRouteResponse != nil {
        // handle response
    }
}
```
