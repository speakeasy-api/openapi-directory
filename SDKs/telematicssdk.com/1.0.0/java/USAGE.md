<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            TripsTripDetailsRequest req = new TripsTripDetailsRequest() {{
                queryParams = new TripsTripDetailsQueryParams() {{
                    trackToken = "sit";
                }};
            }};

            TripsTripDetailsResponse res = sdk.twoForMobileAppOptional.tripsTripDetails(req);

            if (res.tripsTripDetails200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->