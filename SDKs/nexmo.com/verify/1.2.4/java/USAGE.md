<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VerifyCheckRequest;
import org.openapis.openapi.models.operations.VerifyCheckResponse;
import org.openapis.openapi.models.shared.FormatEnum;
import org.openapis.openapi.models.shared.CheckRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyCheckRequest req = new VerifyCheckRequest() {{
                checkRequest = new CheckRequest() {{
                    apiKey = "abcd1234";
                    apiSecret = "Sup3rS3cr3t!!";
                    code = "1234";
                    ipAddress = "123.0.0.255";
                    requestId = "abcdef0123456789abcdef0123456789";
                }};
                format = "xml";
            }}            

            VerifyCheckResponse res = sdk.verifyCheck(req);

            if (res.verifyCheck200ApplicationJSONOneOf.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->