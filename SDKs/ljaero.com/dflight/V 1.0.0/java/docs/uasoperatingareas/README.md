# uasOperatingAreas

## Overview

#### Areas where drone activity is scheduled to take place. 
UAS Operating Areas (UOAs) are published via [NOTAM](https://www.faa.gov/regulations_policies/orders_notices/index.cfm/go/document.information/documentID/1035053) to alert airspace users of unmanned aircraft activity in a given area and at a given time (singular or recurring).

### Available Operations

* [uoaByDistanceUsV1UoaDistanceQueryPost](#uoabydistanceusv1uoadistancequerypost) - Retrieve UAS Operating Areas (UOAs) found within given distance of location.
* [uoaByPolyUsV1UoaPolygonQueryPost](#uoabypolyusv1uoapolygonquerypost) - Retrieve UAS Operating Areas (UOAs) found within given area.
* [uoaByRouteUsV1UoaRouteQueryPost](#uoabyrouteusv1uoaroutequerypost) - Retrieve UAS Operating Areas (UOAs) found along route.

## uoaByDistanceUsV1UoaDistanceQueryPost

Retrieve UAS Operating Areas (UOAs) found within given distance of a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UoaByDistanceUsV1UoaDistanceQueryPostRequest;
import org.openapis.openapi.models.operations.UoaByDistanceUsV1UoaDistanceQueryPostResponse;
import org.openapis.openapi.models.shared.UOAsByDistance;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UoaByDistanceUsV1UoaDistanceQueryPostRequest req = new UoaByDistanceUsV1UoaDistanceQueryPostRequest(                new UOAsByDistance(451159L, 19987L, 4417.11);) {{
                xApiKey = "ut";
            }};            

            UoaByDistanceUsV1UoaDistanceQueryPostResponse res = sdk.uasOperatingAreas.uoaByDistanceUsV1UoaDistanceQueryPost(req);

            if (res.uoAsDistanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uoaByPolyUsV1UoaPolygonQueryPost

Retrieve UAS Operating Areas (UOAs) found within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UoaByPolyUsV1UoaPolygonQueryPostRequest;
import org.openapis.openapi.models.operations.UoaByPolyUsV1UoaPolygonQueryPostResponse;
import org.openapis.openapi.models.shared.UOAsByPolygon;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UoaByPolyUsV1UoaPolygonQueryPostRequest req = new UoaByPolyUsV1UoaPolygonQueryPostRequest(                new UOAsByPolygon(                new java.util.HashMap<String, Object>() {{
                                                put("dicta", "corporis");
                                                put("dolore", "iusto");
                                                put("dicta", "harum");
                                                put("enim", "accusamus");
                                            }});) {{
                xApiKey = "commodi";
            }};            

            UoaByPolyUsV1UoaPolygonQueryPostResponse res = sdk.uasOperatingAreas.uoaByPolyUsV1UoaPolygonQueryPost(req);

            if (res.uoAsPolyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uoaByRouteUsV1UoaRouteQueryPost

Retrieve UAS Operating Areas (UOAs) found along your route. Request body parameters are:
* route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UoaByRouteUsV1UoaRouteQueryPostRequest;
import org.openapis.openapi.models.operations.UoaByRouteUsV1UoaRouteQueryPostResponse;
import org.openapis.openapi.models.shared.UOAsByRoute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UoaByRouteUsV1UoaRouteQueryPostRequest req = new UoaByRouteUsV1UoaRouteQueryPostRequest(                new UOAsByRoute(                new java.util.HashMap<String, Object>() {{
                                                put("quae", "ipsum");
                                                put("quidem", "molestias");
                                                put("excepturi", "pariatur");
                                                put("modi", "praesentium");
                                            }});) {{
                xApiKey = "rem";
            }};            

            UoaByRouteUsV1UoaRouteQueryPostResponse res = sdk.uasOperatingAreas.uoaByRouteUsV1UoaRouteQueryPost(req);

            if (res.uoAsRouteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
