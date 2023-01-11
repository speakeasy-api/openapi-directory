<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    option1 = new SecurityOption1() {{
                        apiKey = new SchemeApiKey() {{
                            apiKey = "YOUR_API_KEY_HERE";
                        }};
                        apiSecret = new SchemeApiSecret() {{
                            apiKey = "YOUR_API_KEY_HERE";
                        }};
                    }};
                }}
            );

            SDK sdk = builder.build();

            SmsConversionRequest req = new SmsConversionRequest() {{
                queryParams = new SmsConversionQueryParams() {{
                    delivered = "sit";
                    messageId = "voluptas";
                    timestamp = "culpa";
                }};
            }};

            SmsConversionResponse res = sdk.smsConversion.smsConversion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->