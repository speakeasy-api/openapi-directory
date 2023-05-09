# specialSecurityAreas

## Overview

#### Locations where all UAS flight operations are prohibited unless prior FAA authorization has been obtained, and coordination with the controlling agency has taken place.
Through agreements with the Department of Defense and other U.S. security and intelligence agencies, the FAA published these restrictions as [FDC NOTAM 1/0488](https://tfr.faa.gov/save_pages/detail_1_0488.html) (and it's predecessors). Unlike other NOTAMs designated as [Temporary Flight Restrictions](https://dflight-api.ljaero.com/#/Flight%20Restrictions), these remain in effect 24 hours a day, 7 days a week, until further announcement.

### Available Operations

* [ssaByDistanceUsV1SsaDistanceQueryPost](#ssabydistanceusv1ssadistancequerypost) - Retrieve all special security areas located within given distance of location.
* [ssaByPolyUsV1SsaPolygonQueryPost](#ssabypolyusv1ssapolygonquerypost) - Retrieve all special security areas located within given GeoJSON Polygon.
* [ssaByRouteUsV1SsaRouteQueryPost](#ssabyrouteusv1ssaroutequerypost) - Retrieve all special security areas traversed by route.

## ssaByDistanceUsV1SsaDistanceQueryPost

Retrieve special security areas existing within given distance from a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SsaByDistanceUsV1SsaDistanceQueryPostRequest;
import org.openapis.openapi.models.operations.SsaByDistanceUsV1SsaDistanceQueryPostResponse;
import org.openapis.openapi.models.shared.SSAByDistance;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SsaByDistanceUsV1SsaDistanceQueryPostRequest req = new SsaByDistanceUsV1SsaDistanceQueryPostRequest(                new SSAByDistance(6342.74, 958950L, 6527.9);) {{
                xApiKey = "dolorem";
            }};            

            SsaByDistanceUsV1SsaDistanceQueryPostResponse res = sdk.specialSecurityAreas.ssaByDistanceUsV1SsaDistanceQueryPost(req);

            if (res.ssaDistanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ssaByPolyUsV1SsaPolygonQueryPost

Retrieve all special security areas located within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SsaByPolyUsV1SsaPolygonQueryPostRequest;
import org.openapis.openapi.models.operations.SsaByPolyUsV1SsaPolygonQueryPostResponse;
import org.openapis.openapi.models.shared.SSAByPolygon;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SsaByPolyUsV1SsaPolygonQueryPostRequest req = new SsaByPolyUsV1SsaPolygonQueryPostRequest(                new SSAByPolygon(                new java.util.HashMap<String, Object>() {{
                                                put("consequuntur", "repellat");
                                                put("mollitia", "occaecati");
                                                put("numquam", "commodi");
                                            }});) {{
                xApiKey = "quam";
            }};            

            SsaByPolyUsV1SsaPolygonQueryPostResponse res = sdk.specialSecurityAreas.ssaByPolyUsV1SsaPolygonQueryPost(req);

            if (res.ssaPolyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ssaByRouteUsV1SsaRouteQueryPost

Retrieve all special security areas intersected by route. Request body parameters are:
* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SsaByRouteUsV1SsaRouteQueryPostRequest;
import org.openapis.openapi.models.operations.SsaByRouteUsV1SsaRouteQueryPostResponse;
import org.openapis.openapi.models.shared.SSAByRoute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SsaByRouteUsV1SsaRouteQueryPostRequest req = new SsaByRouteUsV1SsaRouteQueryPostRequest(                new SSAByRoute(                new java.util.HashMap<String, Object>() {{
                                                put("velit", "error");
                                                put("quia", "quis");
                                            }});) {{
                xApiKey = "vitae";
            }};            

            SsaByRouteUsV1SsaRouteQueryPostResponse res = sdk.specialSecurityAreas.ssaByRouteUsV1SsaRouteQueryPost(req);

            if (res.ssaRouteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
