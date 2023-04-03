<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BaggageTripAndContactSecurity;
import org.openapis.openapi.models.operations.BaggageTripAndContactRequest;
import org.openapis.openapi.models.operations.BaggageTripAndContactResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaggageTripAndContactRequest req = new BaggageTripAndContactRequest() {{
                accept = "corrupti";
                searchID = "provident";
            }}            

            BaggageTripAndContactResponse res = sdk.baggage.baggageTripAndContact(req, new BaggageTripAndContactSecurity() {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.baggageTripAndContact200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->