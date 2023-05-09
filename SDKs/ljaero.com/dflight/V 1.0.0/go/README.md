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
            Distance: 592845,
            Latitude: 844266,
            Longitude: 857946,
        },
        XAPIKey: sdk.String("corrupti"),
    })
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


### [Aerodromes](docs/aerodromes/README.md)

* [AerodromesByDistanceUsV1AerodromesDistanceQueryPost](docs/aerodromes/README.md#aerodromesbydistanceusv1aerodromesdistancequerypost) - Retrieve aerodromes within given distance of location.
* [AerodromesByPolyUsV1AerodromesPolygonQueryPost](docs/aerodromes/README.md#aerodromesbypolyusv1aerodromespolygonquerypost) - Retrieve aerodromes located within given area.
* [AerodromesByRouteUsV1AerodromesRouteQueryPost](docs/aerodromes/README.md#aerodromesbyrouteusv1aerodromesroutequerypost) - Retrieve aerodromes found along a route.

### [Airspace](docs/airspace/README.md)

* [AspByDistanceUsV1AirspaceDistanceQueryPost](docs/airspace/README.md#aspbydistanceusv1airspacedistancequerypost) - Retrieve all requested types of airspace located within given distance of location.
* [AspByPolyUsV1AirspacePolygonQueryPost](docs/airspace/README.md#aspbypolyusv1airspacepolygonquerypost) - Retrieve all requested types of airspace located within given GeoJSON Polygon.
* [AspByRouteUsV1AirspaceRouteQueryPost](docs/airspace/README.md#aspbyrouteusv1airspaceroutequerypost) - Retrieve all requested types of airspace traversed by route.

### [FlightRestrictions](docs/flightrestrictions/README.md)

* [TfrByDistanceUsV1RestrictionsDistanceQueryPost](docs/flightrestrictions/README.md#tfrbydistanceusv1restrictionsdistancequerypost) - Retrieve flight restrictions applicable within given distance of location.
* [TfrByPolyUsV1RestrictionsPolygonQueryPost](docs/flightrestrictions/README.md#tfrbypolyusv1restrictionspolygonquerypost) - Retrieve flight restrictions applicable within given area.
* [TfrByRouteUsV1RestrictionsRouteQueryPost](docs/flightrestrictions/README.md#tfrbyrouteusv1restrictionsroutequerypost) - Retrieve flight restrictions applicable along route.

### [RestrictedPublicVenues](docs/restrictedpublicvenues/README.md)

* [VenByDistanceUsV1VenuesDistanceQueryPost](docs/restrictedpublicvenues/README.md#venbydistanceusv1venuesdistancequerypost) - Retrieve all restricted public venues located within given distance of location.
* [VenByPolyUsV1VenuesPolygonQueryPost](docs/restrictedpublicvenues/README.md#venbypolyusv1venuespolygonquerypost) - Retrieve all restricted public venues located within given GeoJSON Polygon.
* [VenByRouteUsV1VenuesRouteQueryPost](docs/restrictedpublicvenues/README.md#venbyrouteusv1venuesroutequerypost) - Retrieve all restricted public venues traversed by route.

### [SpecialSecurityAreas](docs/specialsecurityareas/README.md)

* [SsaByDistanceUsV1SsaDistanceQueryPost](docs/specialsecurityareas/README.md#ssabydistanceusv1ssadistancequerypost) - Retrieve all special security areas located within given distance of location.
* [SsaByPolyUsV1SsaPolygonQueryPost](docs/specialsecurityareas/README.md#ssabypolyusv1ssapolygonquerypost) - Retrieve all special security areas located within given GeoJSON Polygon.
* [SsaByRouteUsV1SsaRouteQueryPost](docs/specialsecurityareas/README.md#ssabyrouteusv1ssaroutequerypost) - Retrieve all special security areas traversed by route.

### [SurfaceObstacles](docs/surfaceobstacles/README.md)

* [ObstaclesByDistanceUsV1ObstaclesDistanceQueryPost](docs/surfaceobstacles/README.md#obstaclesbydistanceusv1obstaclesdistancequerypost) - Retrieve obstacles within given distance of location.
* [ObstaclesByPolyUsV1ObstaclesPolygonQueryPost](docs/surfaceobstacles/README.md#obstaclesbypolyusv1obstaclespolygonquerypost) - Retrieve obstacles located within given area.
* [ObstaclesByRouteUsV1ObstaclesRouteQueryPost](docs/surfaceobstacles/README.md#obstaclesbyrouteusv1obstaclesroutequerypost) - Retrieve obstacles found along a route.

### [UASOperatingAreas](docs/uasoperatingareas/README.md)

* [UoaByDistanceUsV1UoaDistanceQueryPost](docs/uasoperatingareas/README.md#uoabydistanceusv1uoadistancequerypost) - Retrieve UAS Operating Areas (UOAs) found within given distance of location.
* [UoaByPolyUsV1UoaPolygonQueryPost](docs/uasoperatingareas/README.md#uoabypolyusv1uoapolygonquerypost) - Retrieve UAS Operating Areas (UOAs) found within given area.
* [UoaByRouteUsV1UoaRouteQueryPost](docs/uasoperatingareas/README.md#uoabyrouteusv1uoaroutequerypost) - Retrieve UAS Operating Areas (UOAs) found along route.

### [Weather](docs/weather/README.md)

* [WxByDistanceUsV1WxForecastDistanceQueryPost](docs/weather/README.md#wxbydistanceusv1wxforecastdistancequerypost) - Retrieve forecast values within given distance of location for all requested weather elements and time periods.
* [WxByPolyUsV1WxForecastPolygonQueryPost](docs/weather/README.md#wxbypolyusv1wxforecastpolygonquerypost) - Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.
* [WxByRouteUsV1WxForecastRouteQueryPost](docs/weather/README.md#wxbyrouteusv1wxforecastroutequerypost) - Retrieve forecast values along a route for all requested weather elements and time periods.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
