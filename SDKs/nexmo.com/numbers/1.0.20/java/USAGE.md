<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BuyANumberResponse;
import org.openapis.openapi.models.shared.NumberDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                    apiSecret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.NumberDetails req = new NumberDetails() {{
                country = "GB";
                msisdn = "447700900000";
                targetApiKey = "1a2345b7";
            }}            

            BuyANumberResponse res = sdk.buyANumber(req);

            if (res.response.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->