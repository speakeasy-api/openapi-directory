<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BaggageTripAndContactSecurity;
import org.openapis.openapi.models.operations.BaggageTripAndContactPathParams;
import org.openapis.openapi.models.operations.BaggageTripAndContactHeaders;
import org.openapis.openapi.models.operations.BaggageTripAndContactRequest;
import org.openapis.openapi.models.operations.BaggageTripAndContactResponse;
import org.openapis.openapi.models.shared.SchemeAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaggageTripAndContactRequest req = new BaggageTripAndContactRequest() {{
                security = new BaggageTripAndContactSecurity() {{
                    auth = new SchemeAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BaggageTripAndContactPathParams() {{
                    searchID = "corrupti";
                }};
                headers = new BaggageTripAndContactHeaders() {{
                    accept = "provident";
                }};
            }};            

            BaggageTripAndContactResponse res = sdk.baggage.baggageTripAndContact(req);

            if (res.baggageTripAndContact200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->