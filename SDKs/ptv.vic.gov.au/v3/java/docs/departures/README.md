# departures

### Available Operations

* [departuresGetForStop](#departuresgetforstop) - View departures for all routes from a stop
* [departuresGetForStopAndRoute](#departuresgetforstopandroute) - View departures for a specific route from a stop

## departuresGetForStop

View departures for all routes from a stop

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeparturesGetForStopExpandEnum;
import org.openapis.openapi.models.operations.DeparturesGetForStopRequest;
import org.openapis.openapi.models.operations.DeparturesGetForStopResponse;
import org.openapis.openapi.models.operations.DeparturesGetForStopRouteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeparturesGetForStopRequest req = new DeparturesGetForStopRequest(DeparturesGetForStopRouteTypeEnum.FOUR, 272656) {{
                dateUtc = OffsetDateTime.parse("2022-07-10T15:39:12.517Z");
                devid = "minus";
                directionId = 812169;
                expand = new org.openapis.openapi.models.operations.DeparturesGetForStopExpandEnum[]{{
                    add(DeparturesGetForStopExpandEnum.DIRECTION),
                    add(DeparturesGetForStopExpandEnum.DISRUPTION),
                    add(DeparturesGetForStopExpandEnum.RUN),
                }};
                gtfs = false;
                includeCancelled = false;
                includeGeopath = false;
                lookBackwards = false;
                maxResults = 925597;
                platformNumbers = new Integer[]{{
                    add(71036),
                    add(337396),
                    add(87129),
                    add(648172),
                }};
                signature = "perferendis";
                token = "ipsam";
            }};            

            DeparturesGetForStopResponse res = sdk.departures.departuresGetForStop(req);

            if (res.v3DeparturesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## departuresGetForStopAndRoute

View departures for a specific route from a stop

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeparturesGetForStopAndRouteExpandEnum;
import org.openapis.openapi.models.operations.DeparturesGetForStopAndRouteRequest;
import org.openapis.openapi.models.operations.DeparturesGetForStopAndRouteResponse;
import org.openapis.openapi.models.operations.DeparturesGetForStopAndRouteRouteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeparturesGetForStopAndRouteRequest req = new DeparturesGetForStopAndRouteRequest("repellendus", DeparturesGetForStopAndRouteRouteTypeEnum.FOUR, 778157) {{
                dateUtc = OffsetDateTime.parse("2022-02-17T10:41:36.857Z");
                devid = "at";
                directionId = 978619;
                expand = new org.openapis.openapi.models.operations.DeparturesGetForStopAndRouteExpandEnum[]{{
                    add(DeparturesGetForStopAndRouteExpandEnum.VEHICLE_POSITION),
                    add(DeparturesGetForStopAndRouteExpandEnum.VEHICLE_POSITION),
                }};
                gtfs = false;
                includeCancelled = false;
                includeGeopath = false;
                lookBackwards = false;
                maxResults = 461479;
                signature = "totam";
                token = "porro";
            }};            

            DeparturesGetForStopAndRouteResponse res = sdk.departures.departuresGetForStopAndRoute(req);

            if (res.v3DeparturesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
