# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ljaero.com/dflight/V 1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest{
        AerodromesByDistance: shared.AerodromesByDistance{
            Distance: 592845,
            Latitude: 844266,
            Longitude: 857946,
        },
        XAPIKey: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Aerodromes.AerodromesByDistanceUsV1AerodromesDistanceQueryPost(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AerodromeDistanceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Aerodromes

* `AerodromesByDistanceUsV1AerodromesDistanceQueryPost` - Retrieve aerodromes within given distance of location.
* `AerodromesByPolyUsV1AerodromesPolygonQueryPost` - Retrieve aerodromes located within given area.
* `AerodromesByRouteUsV1AerodromesRouteQueryPost` - Retrieve aerodromes found along a route.

### Airspace

* `AspByDistanceUsV1AirspaceDistanceQueryPost` - Retrieve all requested types of airspace located within given distance of location.
* `AspByPolyUsV1AirspacePolygonQueryPost` - Retrieve all requested types of airspace located within given GeoJSON Polygon.
* `AspByRouteUsV1AirspaceRouteQueryPost` - Retrieve all requested types of airspace traversed by route.

### FlightRestrictions

* `TfrByDistanceUsV1RestrictionsDistanceQueryPost` - Retrieve flight restrictions applicable within given distance of location.
* `TfrByPolyUsV1RestrictionsPolygonQueryPost` - Retrieve flight restrictions applicable within given area.
* `TfrByRouteUsV1RestrictionsRouteQueryPost` - Retrieve flight restrictions applicable along route.

### RestrictedPublicVenues

* `VenByDistanceUsV1VenuesDistanceQueryPost` - Retrieve all restricted public venues located within given distance of location.
* `VenByPolyUsV1VenuesPolygonQueryPost` - Retrieve all restricted public venues located within given GeoJSON Polygon.
* `VenByRouteUsV1VenuesRouteQueryPost` - Retrieve all restricted public venues traversed by route.

### SpecialSecurityAreas

* `SsaByDistanceUsV1SsaDistanceQueryPost` - Retrieve all special security areas located within given distance of location.
* `SsaByPolyUsV1SsaPolygonQueryPost` - Retrieve all special security areas located within given GeoJSON Polygon.
* `SsaByRouteUsV1SsaRouteQueryPost` - Retrieve all special security areas traversed by route.

### SurfaceObstacles

* `ObstaclesByDistanceUsV1ObstaclesDistanceQueryPost` - Retrieve obstacles within given distance of location.
* `ObstaclesByPolyUsV1ObstaclesPolygonQueryPost` - Retrieve obstacles located within given area.
* `ObstaclesByRouteUsV1ObstaclesRouteQueryPost` - Retrieve obstacles found along a route.

### UASOperatingAreas

* `UoaByDistanceUsV1UoaDistanceQueryPost` - Retrieve UAS Operating Areas (UOAs) found within given distance of location.
* `UoaByPolyUsV1UoaPolygonQueryPost` - Retrieve UAS Operating Areas (UOAs) found within given area.
* `UoaByRouteUsV1UoaRouteQueryPost` - Retrieve UAS Operating Areas (UOAs) found along route.

### Weather

* `WxByDistanceUsV1WxForecastDistanceQueryPost` - Retrieve forecast values within given distance of location for all requested weather elements and time periods.
* `WxByPolyUsV1WxForecastPolygonQueryPost` - Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.
* `WxByRouteUsV1WxForecastRouteQueryPost` - Retrieve forecast values along a route for all requested weather elements and time periods.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
