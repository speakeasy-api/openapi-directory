<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.SmsConversionRequest;
import org.openapis.openapi.models.operations.SmsConversionResponse;
import org.openapis.openapi.models.shared.DeliveredEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1() {{
                        apiKey = "YOUR_API_KEY_HERE";
                        apiSecret = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            SmsConversionRequest req = new SmsConversionRequest() {{
                delivered = "0";
                messageId = "provident";
                timestamp = "distinctio";
            }}            

            SmsConversionResponse res = sdk.smsConversion.smsConversion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->