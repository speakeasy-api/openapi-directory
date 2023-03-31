<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FetchMessagingCountrySecurity;
import org.openapis.openapi.models.operations.FetchMessagingCountryPathParams;
import org.openapis.openapi.models.operations.FetchMessagingCountryRequest;
import org.openapis.openapi.models.operations.FetchMessagingCountryResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMessagingCountryRequest req = new FetchMessagingCountryRequest() {{
                security = new FetchMessagingCountrySecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new FetchMessagingCountryPathParams() {{
                    isoCountry = "corrupti";
                }};
            }};            

            FetchMessagingCountryResponse res = sdk.fetchMessagingCountry(req);

            if (res.pricingV1MessagingMessagingCountryInstance.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->