# runs

### Available Operations

* [runsForRoute](#runsforroute) - View all trip/service runs for a specific route ID
* [runsForRouteAndRouteType](#runsforrouteandroutetype) - View all trip/service runs for a specific route ID and route type
* [runsForRun](#runsforrun) - View all trip/service runs for a specific run_ref
* [runsForRunAndRouteType](#runsforrunandroutetype) - View the trip/service run for a specific run_ref and route type

## runsForRoute

View all trip/service runs for a specific route ID

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunsForRouteExpandEnum;
import org.openapis.openapi.models.operations.RunsForRouteRequest;
import org.openapis.openapi.models.operations.RunsForRouteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunsForRouteRequest req = new RunsForRouteRequest(878194) {{
                dateUtc = OffsetDateTime.parse("2022-06-28T23:41:25.321Z");
                devid = "voluptatibus";
                expand = new org.openapis.openapi.models.operations.RunsForRouteExpandEnum[]{{
                    add(RunsForRouteExpandEnum.VEHICLE_POSITION),
                }};
                signature = "voluptate";
                token = "cum";
            }};            

            RunsForRouteResponse res = sdk.runs.runsForRoute(req);

            if (res.v3RunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runsForRouteAndRouteType

View all trip/service runs for a specific route ID and route type

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunsForRouteAndRouteTypeExpandEnum;
import org.openapis.openapi.models.operations.RunsForRouteAndRouteTypeRequest;
import org.openapis.openapi.models.operations.RunsForRouteAndRouteTypeResponse;
import org.openapis.openapi.models.operations.RunsForRouteAndRouteTypeRouteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunsForRouteAndRouteTypeRequest req = new RunsForRouteAndRouteTypeRequest(                new org.openapis.openapi.models.operations.RunsForRouteAndRouteTypeExpandEnum[]{{
                                add(RunsForRouteAndRouteTypeExpandEnum.ALL),
                            }}, 441711, RunsForRouteAndRouteTypeRouteTypeEnum.ONE) {{
                dateUtc = OffsetDateTime.parse("2022-08-22T09:14:02.538Z");
                devid = "corporis";
                signature = "dolore";
                token = "iusto";
            }};            

            RunsForRouteAndRouteTypeResponse res = sdk.runs.runsForRouteAndRouteType(req);

            if (res.v3RunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runsForRun

View all trip/service runs for a specific run_ref

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunsForRunExpandEnum;
import org.openapis.openapi.models.operations.RunsForRunRequest;
import org.openapis.openapi.models.operations.RunsForRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunsForRunRequest req = new RunsForRunRequest(                new org.openapis.openapi.models.operations.RunsForRunExpandEnum[]{{
                                add(RunsForRunExpandEnum.VEHICLE_POSITION),
                            }}, "enim") {{
                dateUtc = OffsetDateTime.parse("2021-10-04T09:10:06.610Z");
                devid = "repudiandae";
                includeGeopath = false;
                signature = "quae";
                token = "ipsum";
            }};            

            RunsForRunResponse res = sdk.runs.runsForRun(req);

            if (res.v3RunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runsForRunAndRouteType

View the trip/service run for a specific run_ref and route type

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunsForRunAndRouteTypeExpandEnum;
import org.openapis.openapi.models.operations.RunsForRunAndRouteTypeRequest;
import org.openapis.openapi.models.operations.RunsForRunAndRouteTypeResponse;
import org.openapis.openapi.models.operations.RunsForRunAndRouteTypeRouteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunsForRunAndRouteTypeRequest req = new RunsForRunAndRouteTypeRequest(                new org.openapis.openapi.models.operations.RunsForRunAndRouteTypeExpandEnum[]{{
                                add(RunsForRunAndRouteTypeExpandEnum.VEHICLE_POSITION),
                                add(RunsForRunAndRouteTypeExpandEnum.VEHICLE_POSITION),
                                add(RunsForRunAndRouteTypeExpandEnum.NONE),
                            }}, RunsForRunAndRouteTypeRouteTypeEnum.ONE, "praesentium") {{
                dateUtc = OffsetDateTime.parse("2021-03-02T19:00:49.599Z");
                devid = "quasi";
                includeGeopath = false;
                signature = "repudiandae";
                token = "sint";
            }};            

            RunsForRunAndRouteTypeResponse res = sdk.runs.runsForRunAndRouteType(req);

            if (res.v3RunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
