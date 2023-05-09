# disruptions

### Available Operations

* [disruptionsGetAllDisruptions](#disruptionsgetalldisruptions) - View all disruptions for all route types
* [disruptionsGetDisruptionById](#disruptionsgetdisruptionbyid) - View a specific disruption
* [disruptionsGetDisruptionModes](#disruptionsgetdisruptionmodes) - Get all disruption modes
* [disruptionsGetDisruptionsByRoute](#disruptionsgetdisruptionsbyroute) - View all disruptions for a particular route
* [disruptionsGetDisruptionsByRouteAndStop](#disruptionsgetdisruptionsbyrouteandstop) - View all disruptions for a particular route and stop
* [disruptionsGetDisruptionsByStop](#disruptionsgetdisruptionsbystop) - View all disruptions for a particular stop

## disruptionsGetAllDisruptions

View all disruptions for all route types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisruptionsGetAllDisruptionsDisruptionModesEnum;
import org.openapis.openapi.models.operations.DisruptionsGetAllDisruptionsDisruptionStatusEnum;
import org.openapis.openapi.models.operations.DisruptionsGetAllDisruptionsRequest;
import org.openapis.openapi.models.operations.DisruptionsGetAllDisruptionsResponse;
import org.openapis.openapi.models.operations.DisruptionsGetAllDisruptionsRouteTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisruptionsGetAllDisruptionsRequest req = new DisruptionsGetAllDisruptionsRequest() {{
                devid = "modi";
                disruptionModes = new org.openapis.openapi.models.operations.DisruptionsGetAllDisruptionsDisruptionModesEnum[]{{
                    add(DisruptionsGetAllDisruptionsDisruptionModesEnum.TWELVE),
                }};
                disruptionStatus = DisruptionsGetAllDisruptionsDisruptionStatusEnum.PLANNED;
                routeTypes = new org.openapis.openapi.models.operations.DisruptionsGetAllDisruptionsRouteTypesEnum[]{{
                    add(DisruptionsGetAllDisruptionsRouteTypesEnum.ONE),
                    add(DisruptionsGetAllDisruptionsRouteTypesEnum.TWO),
                }};
                signature = "aspernatur";
                token = "perferendis";
            }};            

            DisruptionsGetAllDisruptionsResponse res = sdk.disruptions.disruptionsGetAllDisruptions(req);

            if (res.v3DisruptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disruptionsGetDisruptionById

View a specific disruption

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionByIdRequest;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisruptionsGetDisruptionByIdRequest req = new DisruptionsGetDisruptionByIdRequest(324141L) {{
                devid = "natus";
                signature = "sed";
                token = "iste";
            }};            

            DisruptionsGetDisruptionByIdResponse res = sdk.disruptions.disruptionsGetDisruptionById(req);

            if (res.v3DisruptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disruptionsGetDisruptionModes

Get all disruption modes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionModesRequest;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionModesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisruptionsGetDisruptionModesRequest req = new DisruptionsGetDisruptionModesRequest() {{
                devid = "dolor";
                signature = "natus";
                token = "laboriosam";
            }};            

            DisruptionsGetDisruptionModesResponse res = sdk.disruptions.disruptionsGetDisruptionModes(req);

            if (res.v3DisruptionModesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disruptionsGetDisruptionsByRoute

View all disruptions for a particular route

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionsByRouteDisruptionStatusEnum;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionsByRouteRequest;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionsByRouteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisruptionsGetDisruptionsByRouteRequest req = new DisruptionsGetDisruptionsByRouteRequest(943749) {{
                devid = "saepe";
                disruptionStatus = DisruptionsGetDisruptionsByRouteDisruptionStatusEnum.PLANNED;
                signature = "in";
                token = "corporis";
            }};            

            DisruptionsGetDisruptionsByRouteResponse res = sdk.disruptions.disruptionsGetDisruptionsByRoute(req);

            if (res.v3DisruptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disruptionsGetDisruptionsByRouteAndStop

View all disruptions for a particular route and stop

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionsByRouteAndStopRequest;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionsByRouteAndStopResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisruptionsGetDisruptionsByRouteAndStopRequest req = new DisruptionsGetDisruptionsByRouteAndStopRequest(613064, 437032) {{
                devid = "saepe";
                disruptionStatus = DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum.PLANNED;
                signature = "architecto";
                token = "ipsa";
            }};            

            DisruptionsGetDisruptionsByRouteAndStopResponse res = sdk.disruptions.disruptionsGetDisruptionsByRouteAndStop(req);

            if (res.v3DisruptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disruptionsGetDisruptionsByStop

View all disruptions for a particular stop

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionsByStopDisruptionStatusEnum;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionsByStopRequest;
import org.openapis.openapi.models.operations.DisruptionsGetDisruptionsByStopResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisruptionsGetDisruptionsByStopRequest req = new DisruptionsGetDisruptionsByStopRequest(969810) {{
                devid = "est";
                disruptionStatus = DisruptionsGetDisruptionsByStopDisruptionStatusEnum.PLANNED;
                signature = "laborum";
                token = "dolores";
            }};            

            DisruptionsGetDisruptionsByStopResponse res = sdk.disruptions.disruptionsGetDisruptionsByStop(req);

            if (res.v3DisruptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
