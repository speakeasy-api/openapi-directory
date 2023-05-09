<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMessagingCountryRequest;
import org.openapis.openapi.models.operations.FetchMessagingCountryResponse;
import org.openapis.openapi.models.operations.FetchMessagingCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMessagingCountryRequest req = new FetchMessagingCountryRequest("corrupti");            

            FetchMessagingCountryResponse res = sdk.fetchMessagingCountry(req, new FetchMessagingCountrySecurity("provident", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pricingV1MessagingMessagingCountryInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->