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