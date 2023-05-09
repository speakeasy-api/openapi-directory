# surfaceObstacles

## Overview

#### All known structures whose presence might interfere with airborne activity, as defined in [14 CFR Part 77.9](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-E/part-77#77.9).
This information is updated daily and includes the following details:
* Location
* Type
* Number of separate structures in case of a group
* Height (in ft. AGL)
* Lighting and other markings

### Available Operations

* [obstaclesByDistanceUsV1ObstaclesDistanceQueryPost](#obstaclesbydistanceusv1obstaclesdistancequerypost) - Retrieve obstacles within given distance of location.
* [obstaclesByPolyUsV1ObstaclesPolygonQueryPost](#obstaclesbypolyusv1obstaclespolygonquerypost) - Retrieve obstacles located within given area.
* [obstaclesByRouteUsV1ObstaclesRouteQueryPost](#obstaclesbyrouteusv1obstaclesroutequerypost) - Retrieve obstacles found along a route.

## obstaclesByDistanceUsV1ObstaclesDistanceQueryPost

Retrieve obstacles within given distance of a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ObstaclesByDistanceUsV1ObstaclesDistanceQueryPostRequest;
import org.openapis.openapi.models.operations.ObstaclesByDistanceUsV1ObstaclesDistanceQueryPostResponse;
import org.openapis.openapi.models.shared.ObstaclesByDistance;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ObstaclesByDistanceUsV1ObstaclesDistanceQueryPostRequest req = new ObstaclesByDistanceUsV1ObstaclesDistanceQueryPostRequest(                new ObstaclesByDistance(656330L, 1381.83, 196582L);) {{
                xApiKey = "tenetur";
            }};            

            ObstaclesByDistanceUsV1ObstaclesDistanceQueryPostResponse res = sdk.surfaceObstacles.obstaclesByDistanceUsV1ObstaclesDistanceQueryPost(req);

            if (res.obstacleDistanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## obstaclesByPolyUsV1ObstaclesPolygonQueryPost

Retrieve obstacles located within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ObstaclesByPolyUsV1ObstaclesPolygonQueryPostRequest;
import org.openapis.openapi.models.operations.ObstaclesByPolyUsV1ObstaclesPolygonQueryPostResponse;
import org.openapis.openapi.models.shared.ObstaclesByPolygon;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ObstaclesByPolyUsV1ObstaclesPolygonQueryPostRequest req = new ObstaclesByPolyUsV1ObstaclesPolygonQueryPostRequest(                new ObstaclesByPolygon(                new java.util.HashMap<String, Object>() {{
                                                put("id", "possimus");
                                                put("aut", "quasi");
                                            }});) {{
                xApiKey = "error";
            }};            

            ObstaclesByPolyUsV1ObstaclesPolygonQueryPostResponse res = sdk.surfaceObstacles.obstaclesByPolyUsV1ObstaclesPolygonQueryPost(req);

            if (res.obstaclePolyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## obstaclesByRouteUsV1ObstaclesRouteQueryPost

Retrieve obstacles found along a route. Request body parameters are:
* route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ObstaclesByRouteUsV1ObstaclesRouteQueryPostRequest;
import org.openapis.openapi.models.operations.ObstaclesByRouteUsV1ObstaclesRouteQueryPostResponse;
import org.openapis.openapi.models.shared.ObstaclesByRoute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ObstaclesByRouteUsV1ObstaclesRouteQueryPostRequest req = new ObstaclesByRouteUsV1ObstaclesRouteQueryPostRequest(                new ObstaclesByRoute(                new java.util.HashMap<String, Object>() {{
                                                put("laborum", "quasi");
                                                put("reiciendis", "voluptatibus");
                                                put("vero", "nihil");
                                                put("praesentium", "voluptatibus");
                                            }});) {{
                xApiKey = "ipsa";
            }};            

            ObstaclesByRouteUsV1ObstaclesRouteQueryPostResponse res = sdk.surfaceObstacles.obstaclesByRouteUsV1ObstaclesRouteQueryPost(req);

            if (res.obstacleRouteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
