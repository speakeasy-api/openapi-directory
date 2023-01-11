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

            VerifyCheckRequest req = new VerifyCheckRequest() {{
                pathParams = new VerifyCheckPathParams() {{
                    format = "xml";
                }};
                request = new CheckRequest() {{
                    apiKey = "doloribus";
                    apiSecret = "et";
                    code = "eligendi";
                    ipAddress = "dolorem";
                    requestId = "dicta";
                }};
            }};

            VerifyCheckResponse res = sdk.verifyCheck(req);

            if (res.verifyCheck200ApplicationJSONOneOf.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->