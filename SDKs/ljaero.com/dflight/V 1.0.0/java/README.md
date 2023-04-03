# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest;
import org.openapis.openapi.models.operations.AerodromesByDistanceUsV1AerodromesDistanceQueryPostResponse;
import org.openapis.openapi.models.shared.AerodromesByDistance;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest req = new AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest() {{
                aerodromesByDistance = new AerodromesByDistance() {{
                    distance = 592845;
                    latitude = 844266;
                    longitude = 857946;
                }};
                xApiKey = "corrupti";
            }}            

            AerodromesByDistanceUsV1AerodromesDistanceQueryPostResponse res = sdk.aerodromes.aerodromesByDistanceUsV1AerodromesDistanceQueryPost(req);

            if (res.aerodromeDistanceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### aerodromes

* `aerodromesByDistanceUsV1AerodromesDistanceQueryPost` - Retrieve aerodromes within given distance of location.
* `aerodromesByPolyUsV1AerodromesPolygonQueryPost` - Retrieve aerodromes located within given area.
* `aerodromesByRouteUsV1AerodromesRouteQueryPost` - Retrieve aerodromes found along a route.

### airspace

* `aspByDistanceUsV1AirspaceDistanceQueryPost` - Retrieve all requested types of airspace located within given distance of location.
* `aspByPolyUsV1AirspacePolygonQueryPost` - Retrieve all requested types of airspace located within given GeoJSON Polygon.
* `aspByRouteUsV1AirspaceRouteQueryPost` - Retrieve all requested types of airspace traversed by route.

### flightRestrictions

* `tfrByDistanceUsV1RestrictionsDistanceQueryPost` - Retrieve flight restrictions applicable within given distance of location.
* `tfrByPolyUsV1RestrictionsPolygonQueryPost` - Retrieve flight restrictions applicable within given area.
* `tfrByRouteUsV1RestrictionsRouteQueryPost` - Retrieve flight restrictions applicable along route.

### restrictedPublicVenues

* `venByDistanceUsV1VenuesDistanceQueryPost` - Retrieve all restricted public venues located within given distance of location.
* `venByPolyUsV1VenuesPolygonQueryPost` - Retrieve all restricted public venues located within given GeoJSON Polygon.
* `venByRouteUsV1VenuesRouteQueryPost` - Retrieve all restricted public venues traversed by route.

### specialSecurityAreas

* `ssaByDistanceUsV1SsaDistanceQueryPost` - Retrieve all special security areas located within given distance of location.
* `ssaByPolyUsV1SsaPolygonQueryPost` - Retrieve all special security areas located within given GeoJSON Polygon.
* `ssaByRouteUsV1SsaRouteQueryPost` - Retrieve all special security areas traversed by route.

### surfaceObstacles

* `obstaclesByDistanceUsV1ObstaclesDistanceQueryPost` - Retrieve obstacles within given distance of location.
* `obstaclesByPolyUsV1ObstaclesPolygonQueryPost` - Retrieve obstacles located within given area.
* `obstaclesByRouteUsV1ObstaclesRouteQueryPost` - Retrieve obstacles found along a route.

### uasOperatingAreas

* `uoaByDistanceUsV1UoaDistanceQueryPost` - Retrieve UAS Operating Areas (UOAs) found within given distance of location.
* `uoaByPolyUsV1UoaPolygonQueryPost` - Retrieve UAS Operating Areas (UOAs) found within given area.
* `uoaByRouteUsV1UoaRouteQueryPost` - Retrieve UAS Operating Areas (UOAs) found along route.

### weather

* `wxByDistanceUsV1WxForecastDistanceQueryPost` - Retrieve forecast values within given distance of location for all requested weather elements and time periods.
* `wxByPolyUsV1WxForecastPolygonQueryPost` - Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.
* `wxByRouteUsV1WxForecastRouteQueryPost` - Retrieve forecast values along a route for all requested weather elements and time periods.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
