<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaggageTripAndContactRequest;
import org.openapis.openapi.models.operations.BaggageTripAndContactResponse;
import org.openapis.openapi.models.operations.BaggageTripAndContactSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaggageTripAndContactRequest req = new BaggageTripAndContactRequest("corrupti", "provident");            

            BaggageTripAndContactResponse res = sdk.baggage.baggageTripAndContact(req, new BaggageTripAndContactSecurity("distinctio") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.baggageTripAndContact200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->