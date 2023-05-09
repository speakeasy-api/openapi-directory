# restrictedPublicVenues

## Overview

#### Areas where drone operations may be restricted or prohibited:
* Lands administered by the National Park Service (prohibited at all times)
* Major League Baseball Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
* National Football League Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
* NCAA Division One Football Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
* NASCAR Sprint Cup, Indy Car, and Champ Series races (prohibited within a 3 NM radius 1 hr before - 1 hr after race)

### Available Operations

* [venByDistanceUsV1VenuesDistanceQueryPost](#venbydistanceusv1venuesdistancequerypost) - Retrieve all restricted public venues located within given distance of location.
* [venByPolyUsV1VenuesPolygonQueryPost](#venbypolyusv1venuespolygonquerypost) - Retrieve all restricted public venues located within given GeoJSON Polygon.
* [venByRouteUsV1VenuesRouteQueryPost](#venbyrouteusv1venuesroutequerypost) - Retrieve all restricted public venues traversed by route.

## venByDistanceUsV1VenuesDistanceQueryPost

Retrieve venues existing within given distance from a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VenByDistanceUsV1VenuesDistanceQueryPostRequest;
import org.openapis.openapi.models.operations.VenByDistanceUsV1VenuesDistanceQueryPostResponse;
import org.openapis.openapi.models.shared.VenuesByDistance;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VenByDistanceUsV1VenuesDistanceQueryPostRequest req = new VenByDistanceUsV1VenuesDistanceQueryPostRequest(                new VenuesByDistance(437032L, 697631L, 602.25);) {{
                xApiKey = "reiciendis";
            }};            

            VenByDistanceUsV1VenuesDistanceQueryPostResponse res = sdk.restrictedPublicVenues.venByDistanceUsV1VenuesDistanceQueryPost(req);

            if (res.venueDistanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## venByPolyUsV1VenuesPolygonQueryPost

Retrieve all restricted public venues located within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VenByPolyUsV1VenuesPolygonQueryPostRequest;
import org.openapis.openapi.models.operations.VenByPolyUsV1VenuesPolygonQueryPostResponse;
import org.openapis.openapi.models.shared.VenuesByPolygon;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VenByPolyUsV1VenuesPolygonQueryPostRequest req = new VenByPolyUsV1VenuesPolygonQueryPostRequest(                new VenuesByPolygon(                new java.util.HashMap<String, Object>() {{
                                                put("mollitia", "laborum");
                                                put("dolores", "dolorem");
                                                put("corporis", "explicabo");
                                            }});) {{
                xApiKey = "nobis";
            }};            

            VenByPolyUsV1VenuesPolygonQueryPostResponse res = sdk.restrictedPublicVenues.venByPolyUsV1VenuesPolygonQueryPost(req);

            if (res.venuePolyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## venByRouteUsV1VenuesRouteQueryPost

Retrieve all restricted public venues intersected by route. Request body parameters are:
* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VenByRouteUsV1VenuesRouteQueryPostRequest;
import org.openapis.openapi.models.operations.VenByRouteUsV1VenuesRouteQueryPostResponse;
import org.openapis.openapi.models.shared.VenuesByRoute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VenByRouteUsV1VenuesRouteQueryPostRequest req = new VenByRouteUsV1VenuesRouteQueryPostRequest(                new VenuesByRoute(                new java.util.HashMap<String, Object>() {{
                                                put("omnis", "nemo");
                                                put("minima", "excepturi");
                                            }});) {{
                xApiKey = "accusantium";
            }};            

            VenByRouteUsV1VenuesRouteQueryPostResponse res = sdk.restrictedPublicVenues.venByRouteUsV1VenuesRouteQueryPost(req);

            if (res.venueRouteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
