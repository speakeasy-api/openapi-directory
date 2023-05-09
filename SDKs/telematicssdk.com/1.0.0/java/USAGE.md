<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TripsTripDetailsRequest;
import org.openapis.openapi.models.operations.TripsTripDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TripsTripDetailsRequest req = new TripsTripDetailsRequest() {{
                trackToken = "corrupti";
            }};            

            TripsTripDetailsResponse res = sdk.twoForMobileAppOptional.tripsTripDetails(req);

            if (res.tripsTripDetails200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->