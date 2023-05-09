<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BuyANumberResponse;
import org.openapis.openapi.models.shared.NumberDetails;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    apiSecret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.NumberDetails req = new NumberDetails("GB", "447700900000") {{
                targetApiKey = "1a2345b7";
            }};            

            BuyANumberResponse res = sdk.buyANumber(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->