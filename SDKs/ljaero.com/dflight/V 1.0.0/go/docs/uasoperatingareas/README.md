# UASOperatingAreas

## Overview

#### Areas where drone activity is scheduled to take place. 
UAS Operating Areas (UOAs) are published via [NOTAM](https://www.faa.gov/regulations_policies/orders_notices/index.cfm/go/document.information/documentID/1035053) to alert airspace users of unmanned aircraft activity in a given area and at a given time (singular or recurring).

### Available Operations

* [UoaByDistanceUsV1UoaDistanceQueryPost](#uoabydistanceusv1uoadistancequerypost) - Retrieve UAS Operating Areas (UOAs) found within given distance of location.
* [UoaByPolyUsV1UoaPolygonQueryPost](#uoabypolyusv1uoapolygonquerypost) - Retrieve UAS Operating Areas (UOAs) found within given area.
* [UoaByRouteUsV1UoaRouteQueryPost](#uoabyrouteusv1uoaroutequerypost) - Retrieve UAS Operating Areas (UOAs) found along route.

## UoaByDistanceUsV1UoaDistanceQueryPost

Retrieve UAS Operating Areas (UOAs) found within given distance of a point. Request body parameters are:
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
    res, err := s.UASOperatingAreas.UoaByDistanceUsV1UoaDistanceQueryPost(ctx, operations.UoaByDistanceUsV1UoaDistanceQueryPostRequest{
        UOAsByDistance: shared.UOAsByDistance{
            Distance: 451159,
            Latitude: 19987,
            Longitude: 4417.11,
        },
        XAPIKey: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UOAsDistanceResponse != nil {
        // handle response
    }
}
```

## UoaByPolyUsV1UoaPolygonQueryPost

Retrieve UAS Operating Areas (UOAs) found within given area. Request body parameters are:
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
    res, err := s.UASOperatingAreas.UoaByPolyUsV1UoaPolygonQueryPost(ctx, operations.UoaByPolyUsV1UoaPolygonQueryPostRequest{
        UOAsByPolygon: shared.UOAsByPolygon{
            Poly: map[string]interface{}{
                "dicta": "corporis",
                "dolore": "iusto",
                "dicta": "harum",
                "enim": "accusamus",
            },
        },
        XAPIKey: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UOAsPolyResponse != nil {
        // handle response
    }
}
```

## UoaByRouteUsV1UoaRouteQueryPost

Retrieve UAS Operating Areas (UOAs) found along your route. Request body parameters are:
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
    res, err := s.UASOperatingAreas.UoaByRouteUsV1UoaRouteQueryPost(ctx, operations.UoaByRouteUsV1UoaRouteQueryPostRequest{
        UOAsByRoute: shared.UOAsByRoute{
            Route: map[string]interface{}{
                "quae": "ipsum",
                "quidem": "molestias",
                "excepturi": "pariatur",
                "modi": "praesentium",
            },
        },
        XAPIKey: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UOAsRouteResponse != nil {
        // handle response
    }
}
```
