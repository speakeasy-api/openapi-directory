# flightRestrictions

## Overview

#### Temporary Flight Restrictions (TFRs) define areas restricting air operations (including drone operations) due to hazardous conditions, special events, or other safety/security reasons.
All published/active TFRs in specified area will be included in the response. Check the startDateTime and endDateTime properties to determine whether or not the restriction is applicable during your planned time of operation. In case of a TFR in your area of intended operation, you might still be able to fly by obtaining a via waiver through the [Special Governmental Interest (SGI) process](https://www.faa.gov/uas/advanced_operations/emergency_situations).

### Available Operations

* [tfrByDistanceUsV1RestrictionsDistanceQueryPost](#tfrbydistanceusv1restrictionsdistancequerypost) - Retrieve flight restrictions applicable within given distance of location.
* [tfrByPolyUsV1RestrictionsPolygonQueryPost](#tfrbypolyusv1restrictionspolygonquerypost) - Retrieve flight restrictions applicable within given area.
* [tfrByRouteUsV1RestrictionsRouteQueryPost](#tfrbyrouteusv1restrictionsroutequerypost) - Retrieve flight restrictions applicable along route.

## tfrByDistanceUsV1RestrictionsDistanceQueryPost

Retrieve Flight Restrictions applicable within given distance of a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TfrByDistanceUsV1RestrictionsDistanceQueryPostRequest;
import org.openapis.openapi.models.operations.TfrByDistanceUsV1RestrictionsDistanceQueryPostResponse;
import org.openapis.openapi.models.shared.NOTAMsByDistance;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TfrByDistanceUsV1RestrictionsDistanceQueryPostRequest req = new TfrByDistanceUsV1RestrictionsDistanceQueryPostRequest(                new NOTAMsByDistance(2165.5, 135218L, 3241.41);) {{
                xApiKey = "natus";
            }};            

            TfrByDistanceUsV1RestrictionsDistanceQueryPostResponse res = sdk.flightRestrictions.tfrByDistanceUsV1RestrictionsDistanceQueryPost(req);

            if (res.notaMsDistanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tfrByPolyUsV1RestrictionsPolygonQueryPost

Retrieve Flight Restrictions located within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TfrByPolyUsV1RestrictionsPolygonQueryPostRequest;
import org.openapis.openapi.models.operations.TfrByPolyUsV1RestrictionsPolygonQueryPostResponse;
import org.openapis.openapi.models.shared.NOTAMsByPolygon;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TfrByPolyUsV1RestrictionsPolygonQueryPostRequest req = new TfrByPolyUsV1RestrictionsPolygonQueryPostRequest(                new NOTAMsByPolygon(                new java.util.HashMap<String, Object>() {{
                                                put("iste", "dolor");
                                            }});) {{
                xApiKey = "natus";
            }};            

            TfrByPolyUsV1RestrictionsPolygonQueryPostResponse res = sdk.flightRestrictions.tfrByPolyUsV1RestrictionsPolygonQueryPost(req);

            if (res.notaMsPolyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tfrByRouteUsV1RestrictionsRouteQueryPost

Retrieve Flight Restrictions applicable along your route. Request body parameters are:
* route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TfrByRouteUsV1RestrictionsRouteQueryPostRequest;
import org.openapis.openapi.models.operations.TfrByRouteUsV1RestrictionsRouteQueryPostResponse;
import org.openapis.openapi.models.shared.NOTAMsByRoute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TfrByRouteUsV1RestrictionsRouteQueryPostRequest req = new TfrByRouteUsV1RestrictionsRouteQueryPostRequest(                new NOTAMsByRoute(                new java.util.HashMap<String, Object>() {{
                                                put("hic", "saepe");
                                                put("fuga", "in");
                                            }});) {{
                xApiKey = "corporis";
            }};            

            TfrByRouteUsV1RestrictionsRouteQueryPostResponse res = sdk.flightRestrictions.tfrByRouteUsV1RestrictionsRouteQueryPost(req);

            if (res.notaMsRouteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
