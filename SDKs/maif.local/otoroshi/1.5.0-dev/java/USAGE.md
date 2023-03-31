<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AllApiKeysSecurity;
import org.openapis.openapi.models.operations.AllApiKeysRequest;
import org.openapis.openapi.models.operations.AllApiKeysResponse;
import org.openapis.openapi.models.shared.SchemeOtoroshiAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllApiKeysRequest req = new AllApiKeysRequest() {{
                security = new AllApiKeysSecurity() {{
                    otoroshiAuth = new SchemeOtoroshiAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
            }};            

            AllApiKeysResponse res = sdk.apikeys.allApiKeys(req);

            if (res.apiKeys.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->