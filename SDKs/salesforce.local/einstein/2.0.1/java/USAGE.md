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

            GenerateTokenV2Request req = new GenerateTokenV2Request() {{
                request = new GenerateTokenV2RequestBody() {{
                    assertion = "perferendis";
                    grantType = "urn:ietf:params:oauth:grant-type:jwt-bearer";
                    refreshToken = "ratione";
                    scope = "quisquam";
                    validFor = 1681876124477381252;
                }};
            }};

            GenerateTokenV2Response res = sdk.authorization.generateTokenV2(req);

            if (res.generateAccessTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->