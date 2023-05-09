# SurfaceObstacles

## Overview

#### All known structures whose presence might interfere with airborne activity, as defined in [14 CFR Part 77.9](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-E/part-77#77.9).
This information is updated daily and includes the following details:
* Location
* Type
* Number of separate structures in case of a group
* Height (in ft. AGL)
* Lighting and other markings

### Available Operations

* [ObstaclesByDistanceUsV1ObstaclesDistanceQueryPost](#obstaclesbydistanceusv1obstaclesdistancequerypost) - Retrieve obstacles within given distance of location.
* [ObstaclesByPolyUsV1ObstaclesPolygonQueryPost](#obstaclesbypolyusv1obstaclespolygonquerypost) - Retrieve obstacles located within given area.
* [ObstaclesByRouteUsV1ObstaclesRouteQueryPost](#obstaclesbyrouteusv1obstaclesroutequerypost) - Retrieve obstacles found along a route.

## ObstaclesByDistanceUsV1ObstaclesDistanceQueryPost

Retrieve obstacles within given distance of a point. Request body parameters are:
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
    res, err := s.SurfaceObstacles.ObstaclesByDistanceUsV1ObstaclesDistanceQueryPost(ctx, operations.ObstaclesByDistanceUsV1ObstaclesDistanceQueryPostRequest{
        ObstaclesByDistance: shared.ObstaclesByDistance{
            Distance: 656330,
            Latitude: 1381.83,
            Longitude: 196582,
        },
        XAPIKey: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObstacleDistanceResponse != nil {
        // handle response
    }
}
```

## ObstaclesByPolyUsV1ObstaclesPolygonQueryPost

Retrieve obstacles located within given area. Request body parameters are:
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
    res, err := s.SurfaceObstacles.ObstaclesByPolyUsV1ObstaclesPolygonQueryPost(ctx, operations.ObstaclesByPolyUsV1ObstaclesPolygonQueryPostRequest{
        ObstaclesByPolygon: shared.ObstaclesByPolygon{
            Poly: map[string]interface{}{
                "id": "possimus",
                "aut": "quasi",
            },
        },
        XAPIKey: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObstaclePolyResponse != nil {
        // handle response
    }
}
```

## ObstaclesByRouteUsV1ObstaclesRouteQueryPost

Retrieve obstacles found along a route. Request body parameters are:
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
    res, err := s.SurfaceObstacles.ObstaclesByRouteUsV1ObstaclesRouteQueryPost(ctx, operations.ObstaclesByRouteUsV1ObstaclesRouteQueryPostRequest{
        ObstaclesByRoute: shared.ObstaclesByRoute{
            Route: map[string]interface{}{
                "laborum": "quasi",
                "reiciendis": "voluptatibus",
                "vero": "nihil",
                "praesentium": "voluptatibus",
            },
        },
        XAPIKey: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObstacleRouteResponse != nil {
        // handle response
    }
}
```
