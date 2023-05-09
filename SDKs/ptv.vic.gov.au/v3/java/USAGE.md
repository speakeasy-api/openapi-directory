<!-- Start SDK Example Usage -->
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

            DeparturesGetForStopRequest req = new DeparturesGetForStopRequest(DeparturesGetForStopRouteTypeEnum.TWO, 592845) {{
                dateUtc = OffsetDateTime.parse("2021-04-24T16:27:50.833Z");
                devid = "unde";
                directionId = 857946;
                expand = new org.openapis.openapi.models.operations.DeparturesGetForStopExpandEnum[]{{
                    add(DeparturesGetForStopExpandEnum.VEHICLE_POSITION),
                    add(DeparturesGetForStopExpandEnum.RUN),
                    add(DeparturesGetForStopExpandEnum.DISRUPTION),
                }};
                gtfs = false;
                includeCancelled = false;
                includeGeopath = false;
                lookBackwards = false;
                maxResults = 645894;
                platformNumbers = new Integer[]{{
                    add(437587),
                    add(297534),
                }};
                signature = "debitis";
                token = "ipsa";
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
<!-- End SDK Example Usage -->