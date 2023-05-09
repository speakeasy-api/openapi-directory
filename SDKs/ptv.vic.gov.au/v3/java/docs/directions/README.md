# directions

### Available Operations

* [directionsForDirection](#directionsfordirection) - View all routes for a direction of travel
* [directionsForDirectionAndType](#directionsfordirectionandtype) - View all routes of a particular type for a direction of travel
* [directionsForRoute](#directionsforroute) - View directions that a route travels in

## directionsForDirection

View all routes for a direction of travel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectionsForDirectionRequest;
import org.openapis.openapi.models.operations.DirectionsForDirectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectionsForDirectionRequest req = new DirectionsForDirectionRequest(678880) {{
                devid = "dicta";
                signature = "nam";
                token = "officia";
            }};            

            DirectionsForDirectionResponse res = sdk.directions.directionsForDirection(req);

            if (res.v3DirectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directionsForDirectionAndType

View all routes of a particular type for a direction of travel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectionsForDirectionAndTypeRequest;
import org.openapis.openapi.models.operations.DirectionsForDirectionAndTypeResponse;
import org.openapis.openapi.models.operations.DirectionsForDirectionAndTypeRouteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectionsForDirectionAndTypeRequest req = new DirectionsForDirectionAndTypeRequest(582020, DirectionsForDirectionAndTypeRouteTypeEnum.ZERO) {{
                devid = "deleniti";
                signature = "hic";
                token = "optio";
            }};            

            DirectionsForDirectionAndTypeResponse res = sdk.directions.directionsForDirectionAndType(req);

            if (res.v3DirectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directionsForRoute

View directions that a route travels in

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectionsForRouteRequest;
import org.openapis.openapi.models.operations.DirectionsForRouteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectionsForRouteRequest req = new DirectionsForRouteRequest(521848) {{
                devid = "beatae";
                signature = "commodi";
                token = "molestiae";
            }};            

            DirectionsForRouteResponse res = sdk.directions.directionsForRoute(req);

            if (res.v3DirectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
