# routeTypes

### Available Operations

* [routeTypesGetRouteTypes](#routetypesgetroutetypes) - View all route types and their names

## routeTypesGetRouteTypes

View all route types and their names

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RouteTypesGetRouteTypesRequest;
import org.openapis.openapi.models.operations.RouteTypesGetRouteTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RouteTypesGetRouteTypesRequest req = new RouteTypesGetRouteTypesRequest() {{
                devid = "enim";
                signature = "odit";
                token = "quo";
            }};            

            RouteTypesGetRouteTypesResponse res = sdk.routeTypes.routeTypesGetRouteTypes(req);

            if (res.v3RouteTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
