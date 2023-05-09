<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyCheckRequest;
import org.openapis.openapi.models.operations.VerifyCheckResponse;
import org.openapis.openapi.models.shared.CheckRequest;
import org.openapis.openapi.models.shared.FormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyCheckRequest req = new VerifyCheckRequest(                new CheckRequest("abcd1234", "Sup3rS3cr3t!!", "1234", "abcdef0123456789abcdef0123456789") {{
                                ipAddress = "123.0.0.255";
                            }};, FormatEnum.XML);            

            VerifyCheckResponse res = sdk.verifyCheck(req);

            if (res.verifyCheck200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->