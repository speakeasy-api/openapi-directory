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
                    assertion = "sit";
                    grantType = "urn:ietf:params:oauth:grant-type:jwt-bearer";
                    refreshToken = "culpa";
                    scope = "expedita";
                    validFor = 3390393562759376202;
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