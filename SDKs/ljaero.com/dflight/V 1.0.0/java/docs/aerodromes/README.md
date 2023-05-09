# aerodromes

## Overview

#### Center points and contact information for all US landing facilities, including those with no associated controlled airspace:
* Public and private airports
* Public and private balloonports
* Public and private gliderports
* Public and private heliports
* Public and private seaplane bases
* Public and private ultralight bases

### Available Operations

* [aerodromesByDistanceUsV1AerodromesDistanceQueryPost](#aerodromesbydistanceusv1aerodromesdistancequerypost) - Retrieve aerodromes within given distance of location.
* [aerodromesByPolyUsV1AerodromesPolygonQueryPost](#aerodromesbypolyusv1aerodromespolygonquerypost) - Retrieve aerodromes located within given area.
* [aerodromesByRouteUsV1AerodromesRouteQueryPost](#aerodromesbyrouteusv1aerodromesroutequerypost) - Retrieve aerodromes found along a route.

## aerodromesByDistanceUsV1AerodromesDistanceQueryPost

Retrieve aerodromes within given distance of a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
Aerodrome found. All Features will include properties for the facility name, ident,
type, and operational status.

### Example Usage

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

            AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest req = new AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest(                new AerodromesByDistance(423655L, 645894L, 4375.87);) {{
                xApiKey = "magnam";
            }};            

            AerodromesByDistanceUsV1AerodromesDistanceQueryPostResponse res = sdk.aerodromes.aerodromesByDistanceUsV1AerodromesDistanceQueryPost(req);

            if (res.aerodromeDistanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## aerodromesByPolyUsV1AerodromesPolygonQueryPost

Retrieve aerodromes located within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
Aerodrome found. All Features will include properties for the facility name, ident,
type, and operational status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AerodromesByPolyUsV1AerodromesPolygonQueryPostRequest;
import org.openapis.openapi.models.operations.AerodromesByPolyUsV1AerodromesPolygonQueryPostResponse;
import org.openapis.openapi.models.shared.AerodromesByPolygon;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AerodromesByPolyUsV1AerodromesPolygonQueryPostRequest req = new AerodromesByPolyUsV1AerodromesPolygonQueryPostRequest(                new AerodromesByPolygon(                new java.util.HashMap<String, Object>() {{
                                                put("ipsa", "delectus");
                                                put("tempora", "suscipit");
                                                put("molestiae", "minus");
                                                put("placeat", "voluptatum");
                                            }});) {{
                xApiKey = "iusto";
            }};            

            AerodromesByPolyUsV1AerodromesPolygonQueryPostResponse res = sdk.aerodromes.aerodromesByPolyUsV1AerodromesPolygonQueryPost(req);

            if (res.aerodromePolyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## aerodromesByRouteUsV1AerodromesRouteQueryPost

Retrieve aerodromes found along a route. Request body parameters are:
* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
Aerodrome found. All Features will include properties for the facility name, ident,
type, and operational status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AerodromesByRouteUsV1AerodromesRouteQueryPostRequest;
import org.openapis.openapi.models.operations.AerodromesByRouteUsV1AerodromesRouteQueryPostResponse;
import org.openapis.openapi.models.shared.AerodromesByRoute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AerodromesByRouteUsV1AerodromesRouteQueryPostRequest req = new AerodromesByRouteUsV1AerodromesRouteQueryPostRequest(                new AerodromesByRoute(                new java.util.HashMap<String, Object>() {{
                                                put("nisi", "recusandae");
                                                put("temporibus", "ab");
                                                put("quis", "veritatis");
                                            }});) {{
                xApiKey = "deserunt";
            }};            

            AerodromesByRouteUsV1AerodromesRouteQueryPostResponse res = sdk.aerodromes.aerodromesByRouteUsV1AerodromesRouteQueryPost(req);

            if (res.aerodromeRouteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
