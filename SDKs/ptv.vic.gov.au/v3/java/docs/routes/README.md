# routes

### Available Operations

* [routesOneOrMoreRoutes](#routesoneormoreroutes) - View route names and numbers for all routes
* [routesRouteFromId](#routesroutefromid) - View route name and number for specific route ID

## routesOneOrMoreRoutes

View route names and numbers for all routes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RoutesOneOrMoreRoutesRequest;
import org.openapis.openapi.models.operations.RoutesOneOrMoreRoutesResponse;
import org.openapis.openapi.models.operations.RoutesOneOrMoreRoutesRouteTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RoutesOneOrMoreRoutesRequest req = new RoutesOneOrMoreRoutesRequest() {{
                devid = "sequi";
                routeName = "tenetur";
                routeTypes = new org.openapis.openapi.models.operations.RoutesOneOrMoreRoutesRouteTypesEnum[]{{
                    add(RoutesOneOrMoreRoutesRouteTypesEnum.THREE),
                    add(RoutesOneOrMoreRoutesRouteTypesEnum.FOUR),
                }};
                signature = "aut";
                token = "quasi";
            }};            

            RoutesOneOrMoreRoutesResponse res = sdk.routes.routesOneOrMoreRoutes(req);

            if (res.v3RouteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## routesRouteFromId

View route name and number for specific route ID

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RoutesRouteFromIdRequest;
import org.openapis.openapi.models.operations.RoutesRouteFromIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RoutesRouteFromIdRequest req = new RoutesRouteFromIdRequest(622846) {{
                devid = "temporibus";
                geopathUtc = OffsetDateTime.parse("2022-10-22T20:21:20.741Z");
                includeGeopath = false;
                signature = "reiciendis";
                token = "voluptatibus";
            }};            

            RoutesRouteFromIdResponse res = sdk.routes.routesRouteFromId(req);

            if (res.v3RouteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
