<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FetchMessagingCountrySecurity;
import org.openapis.openapi.models.operations.FetchMessagingCountryRequest;
import org.openapis.openapi.models.operations.FetchMessagingCountryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMessagingCountryRequest req = new FetchMessagingCountryRequest() {{
                isoCountry = "corrupti";
            }}            

            FetchMessagingCountryResponse res = sdk.fetchMessagingCountry(req, new FetchMessagingCountrySecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pricingV1MessagingMessagingCountryInstance.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->