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

            BaggageTripAndContactRequest req = new BaggageTripAndContactRequest() {{
                security = new BaggageTripAndContactSecurity() {{
                    auth = new SchemeAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BaggageTripAndContactPathParams() {{
                    searchID = "vitae";
                }};
                headers = new BaggageTripAndContactHeaders() {{
                    accept = "maxime";
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