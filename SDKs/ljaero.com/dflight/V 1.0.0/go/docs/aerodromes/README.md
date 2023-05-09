# Aerodromes

## Overview

#### Center points and contact information for all US landing facilities, including those with no associated controlled airspace:
* Public and private airports
* Public and private balloonports
* Public and private gliderports
* Public and private heliports
* Public and private seaplane bases
* Public and private ultralight bases

### Available Operations

* [AerodromesByDistanceUsV1AerodromesDistanceQueryPost](#aerodromesbydistanceusv1aerodromesdistancequerypost) - Retrieve aerodromes within given distance of location.
* [AerodromesByPolyUsV1AerodromesPolygonQueryPost](#aerodromesbypolyusv1aerodromespolygonquerypost) - Retrieve aerodromes located within given area.
* [AerodromesByRouteUsV1AerodromesRouteQueryPost](#aerodromesbyrouteusv1aerodromesroutequerypost) - Retrieve aerodromes found along a route.

## AerodromesByDistanceUsV1AerodromesDistanceQueryPost

Retrieve aerodromes within given distance of a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
Aerodrome found. All Features will include properties for the facility name, ident,
type, and operational status.

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
    res, err := s.Aerodromes.AerodromesByDistanceUsV1AerodromesDistanceQueryPost(ctx, operations.AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest{
        AerodromesByDistance: shared.AerodromesByDistance{
            Distance: 423655,
            Latitude: 645894,
            Longitude: 4375.87,
        },
        XAPIKey: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AerodromeDistanceResponse != nil {
        // handle response
    }
}
```

## AerodromesByPolyUsV1AerodromesPolygonQueryPost

Retrieve aerodromes located within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
Aerodrome found. All Features will include properties for the facility name, ident,
type, and operational status.

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
    res, err := s.Aerodromes.AerodromesByPolyUsV1AerodromesPolygonQueryPost(ctx, operations.AerodromesByPolyUsV1AerodromesPolygonQueryPostRequest{
        AerodromesByPolygon: shared.AerodromesByPolygon{
            Poly: map[string]interface{}{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
        },
        XAPIKey: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AerodromePolyResponse != nil {
        // handle response
    }
}
```

## AerodromesByRouteUsV1AerodromesRouteQueryPost

Retrieve aerodromes found along a route. Request body parameters are:
* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
Aerodrome found. All Features will include properties for the facility name, ident,
type, and operational status.

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
    res, err := s.Aerodromes.AerodromesByRouteUsV1AerodromesRouteQueryPost(ctx, operations.AerodromesByRouteUsV1AerodromesRouteQueryPostRequest{
        AerodromesByRoute: shared.AerodromesByRoute{
            Route: map[string]interface{}{
                "nisi": "recusandae",
                "temporibus": "ab",
                "quis": "veritatis",
            },
        },
        XAPIKey: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AerodromeRouteResponse != nil {
        // handle response
    }
}
```
