<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PostCheckCodeRequestBody;
import org.openapis.openapi.models.operations.PostCheckCodeRequest;
import org.openapis.openapi.models.operations.PostCheckCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }})
                .build();

            PostCheckCodeRequest req = new PostCheckCodeRequest() {{
                request = new PostCheckCodeRequestBody() {{
                    code = "corrupti";
                    email = "Micheal_Sporer@yahoo.com";
                }};
            }};            

            PostCheckCodeResponse res = sdk.postCheckCode(req);

            if (res.postCheckCode200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->