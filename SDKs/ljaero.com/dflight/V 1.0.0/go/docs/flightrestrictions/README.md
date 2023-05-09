# FlightRestrictions

## Overview

#### Temporary Flight Restrictions (TFRs) define areas restricting air operations (including drone operations) due to hazardous conditions, special events, or other safety/security reasons.
All published/active TFRs in specified area will be included in the response. Check the startDateTime and endDateTime properties to determine whether or not the restriction is applicable during your planned time of operation. In case of a TFR in your area of intended operation, you might still be able to fly by obtaining a via waiver through the [Special Governmental Interest (SGI) process](https://www.faa.gov/uas/advanced_operations/emergency_situations).

### Available Operations

* [TfrByDistanceUsV1RestrictionsDistanceQueryPost](#tfrbydistanceusv1restrictionsdistancequerypost) - Retrieve flight restrictions applicable within given distance of location.
* [TfrByPolyUsV1RestrictionsPolygonQueryPost](#tfrbypolyusv1restrictionspolygonquerypost) - Retrieve flight restrictions applicable within given area.
* [TfrByRouteUsV1RestrictionsRouteQueryPost](#tfrbyrouteusv1restrictionsroutequerypost) - Retrieve flight restrictions applicable along route.

## TfrByDistanceUsV1RestrictionsDistanceQueryPost

Retrieve Flight Restrictions applicable within given distance of a point. Request body parameters are:
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
    res, err := s.FlightRestrictions.TfrByDistanceUsV1RestrictionsDistanceQueryPost(ctx, operations.TfrByDistanceUsV1RestrictionsDistanceQueryPostRequest{
        NOTAMsByDistance: shared.NOTAMsByDistance{
            Distance: 2165.5,
            Latitude: 135218,
            Longitude: 3241.41,
        },
        XAPIKey: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NOTAMsDistanceResponse != nil {
        // handle response
    }
}
```

## TfrByPolyUsV1RestrictionsPolygonQueryPost

Retrieve Flight Restrictions located within given area. Request body parameters are:
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
    res, err := s.FlightRestrictions.TfrByPolyUsV1RestrictionsPolygonQueryPost(ctx, operations.TfrByPolyUsV1RestrictionsPolygonQueryPostRequest{
        NOTAMsByPolygon: shared.NOTAMsByPolygon{
            Poly: map[string]interface{}{
                "iste": "dolor",
            },
        },
        XAPIKey: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NOTAMsPolyResponse != nil {
        // handle response
    }
}
```

## TfrByRouteUsV1RestrictionsRouteQueryPost

Retrieve Flight Restrictions applicable along your route. Request body parameters are:
* route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

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
    res, err := s.FlightRestrictions.TfrByRouteUsV1RestrictionsRouteQueryPost(ctx, operations.TfrByRouteUsV1RestrictionsRouteQueryPostRequest{
        NOTAMsByRoute: shared.NOTAMsByRoute{
            Route: map[string]interface{}{
                "hic": "saepe",
                "fuga": "in",
            },
        },
        XAPIKey: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NOTAMsRouteResponse != nil {
        // handle response
    }
}
```
