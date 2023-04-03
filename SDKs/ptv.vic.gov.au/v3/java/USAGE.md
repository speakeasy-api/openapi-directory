<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeparturesGetForStopExpandEnum;
import org.openapis.openapi.models.operations.DeparturesGetForStopRouteTypeEnum;
import org.openapis.openapi.models.operations.DeparturesGetForStopRequest;
import org.openapis.openapi.models.operations.DeparturesGetForStopResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeparturesGetForStopRequest req = new DeparturesGetForStopRequest() {{
                dateUtc = "2021-10-25T05:21:43.948Z";
                devid = "distinctio";
                directionId = 844266;
                expand = new org.openapis.openapi.models.operations.DeparturesGetForStopExpandEnum[]{{
                    add("VehiclePosition"),
                    add("Direction"),
                    add("VehiclePosition"),
                }};
                gtfs = false;
                includeCancelled = false;
                includeGeopath = false;
                lookBackwards = false;
                maxResults = 423655;
                platformNumbers = new Integer[]{{
                    add(645894),
                    add(384382),
                    add(437587),
                }};
                routeType = "1";
                signature = "debitis";
                stopId = 56713;
                token = "delectus";
            }}            

            DeparturesGetForStopResponse res = sdk.departures.departuresGetForStop(req);

            if (res.v3DeparturesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->