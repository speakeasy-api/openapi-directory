# stops

### Available Operations

* [stopsStopDetails](#stopsstopdetails) - View facilities at a specific stop (Metro and V/Line stations only)
* [stopsStopsByGeolocation](#stopsstopsbygeolocation) - View all stops near a specific location
* [stopsStopsForRoute](#stopsstopsforroute) - View all stops on a specific route

## stopsStopDetails

View facilities at a specific stop (Metro and V/Line stations only)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopsStopDetailsRequest;
import org.openapis.openapi.models.operations.StopsStopDetailsResponse;
import org.openapis.openapi.models.operations.StopsStopDetailsRouteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopsStopDetailsRequest req = new StopsStopDetailsRequest(StopsStopDetailsRouteTypeEnum.ONE, 264730) {{
                devid = "qui";
                gtfs = false;
                signature = "aliquid";
                stopAccessibility = false;
                stopAmenities = false;
                stopContact = false;
                stopDisruptions = false;
                stopLocation = false;
                stopStaffing = false;
                stopTicket = false;
                token = "cupiditate";
            }};            

            StopsStopDetailsResponse res = sdk.stops.stopsStopDetails(req);

            if (res.v3StopResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopsStopsByGeolocation

View all stops near a specific location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopsStopsByGeolocationRequest;
import org.openapis.openapi.models.operations.StopsStopsByGeolocationResponse;
import org.openapis.openapi.models.operations.StopsStopsByGeolocationRouteTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopsStopsByGeolocationRequest req = new StopsStopsByGeolocationRequest(5528.22, 201.07) {{
                devid = "magni";
                maxDistance = 8289.4;
                maxResults = 369808;
                routeTypes = new org.openapis.openapi.models.operations.StopsStopsByGeolocationRouteTypesEnum[]{{
                    add(StopsStopsByGeolocationRouteTypesEnum.ZERO),
                }};
                signature = "dolorum";
                stopDisruptions = false;
                token = "excepturi";
            }};            

            StopsStopsByGeolocationResponse res = sdk.stops.stopsStopsByGeolocation(req);

            if (res.v3StopsByDistanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopsStopsForRoute

View all stops on a specific route

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopsStopsForRouteRequest;
import org.openapis.openapi.models.operations.StopsStopsForRouteResponse;
import org.openapis.openapi.models.operations.StopsStopsForRouteRouteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopsStopsForRouteRequest req = new StopsStopsForRouteRequest(270008, StopsStopsForRouteRouteTypeEnum.THREE) {{
                devid = "tempore";
                directionId = 288476;
                geopathUtc = OffsetDateTime.parse("2021-09-13T13:11:22.288Z");
                includeGeopath = false;
                signature = "non";
                stopDisruptions = false;
                token = "eligendi";
            }};            

            StopsStopsForRouteResponse res = sdk.stops.stopsStopsForRoute(req);

            if (res.v3StopsOnRouteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
