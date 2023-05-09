# SpecialSecurityAreas

## Overview

#### Locations where all UAS flight operations are prohibited unless prior FAA authorization has been obtained, and coordination with the controlling agency has taken place.
Through agreements with the Department of Defense and other U.S. security and intelligence agencies, the FAA published these restrictions as [FDC NOTAM 1/0488](https://tfr.faa.gov/save_pages/detail_1_0488.html) (and it's predecessors). Unlike other NOTAMs designated as [Temporary Flight Restrictions](https://dflight-api.ljaero.com/#/Flight%20Restrictions), these remain in effect 24 hours a day, 7 days a week, until further announcement.

### Available Operations

* [SsaByDistanceUsV1SsaDistanceQueryPost](#ssabydistanceusv1ssadistancequerypost) - Retrieve all special security areas located within given distance of location.
* [SsaByPolyUsV1SsaPolygonQueryPost](#ssabypolyusv1ssapolygonquerypost) - Retrieve all special security areas located within given GeoJSON Polygon.
* [SsaByRouteUsV1SsaRouteQueryPost](#ssabyrouteusv1ssaroutequerypost) - Retrieve all special security areas traversed by route.

## SsaByDistanceUsV1SsaDistanceQueryPost

Retrieve special security areas existing within given distance from a point. Request body parameters are:
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
    res, err := s.SpecialSecurityAreas.SsaByDistanceUsV1SsaDistanceQueryPost(ctx, operations.SsaByDistanceUsV1SsaDistanceQueryPostRequest{
        SSAByDistance: shared.SSAByDistance{
            Distance: 6342.74,
            Latitude: 958950,
            Longitude: 6527.9,
        },
        XAPIKey: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSADistanceResponse != nil {
        // handle response
    }
}
```

## SsaByPolyUsV1SsaPolygonQueryPost

Retrieve all special security areas located within given area. Request body parameters are:
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
    res, err := s.SpecialSecurityAreas.SsaByPolyUsV1SsaPolygonQueryPost(ctx, operations.SsaByPolyUsV1SsaPolygonQueryPostRequest{
        SSAByPolygon: shared.SSAByPolygon{
            Poly: map[string]interface{}{
                "consequuntur": "repellat",
                "mollitia": "occaecati",
                "numquam": "commodi",
            },
        },
        XAPIKey: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSAPolyResponse != nil {
        // handle response
    }
}
```

## SsaByRouteUsV1SsaRouteQueryPost

Retrieve all special security areas intersected by route. Request body parameters are:
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
    res, err := s.SpecialSecurityAreas.SsaByRouteUsV1SsaRouteQueryPost(ctx, operations.SsaByRouteUsV1SsaRouteQueryPostRequest{
        SSAByRoute: shared.SSAByRoute{
            Route: map[string]interface{}{
                "velit": "error",
                "quia": "quis",
            },
        },
        XAPIKey: sdk.String("vitae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSARouteResponse != nil {
        // handle response
    }
}
```
