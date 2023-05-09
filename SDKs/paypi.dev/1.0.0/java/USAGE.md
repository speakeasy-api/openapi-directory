<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCheckCodeRequestBody;
import org.openapis.openapi.models.operations.PostCheckCodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PostCheckCodeRequestBody req = new PostCheckCodeRequestBody() {{
                code = "provident";
                email = "Rosalinda_Mitchell84@hotmail.com";
            }};            

            PostCheckCodeResponse res = sdk.postCheckCode(req);

            if (res.postCheckCode200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->