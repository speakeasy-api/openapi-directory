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

            PostVisitorIdentificationV3TokensCreateGenerateTokenRequest req = new PostVisitorIdentificationV3TokensCreateGenerateTokenRequest() {{
                security = new PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity() {{
                    hapikey = new SchemeHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new IdentificationTokenGenerationRequest() {{
                    email = "sit";
                    firstName = "voluptas";
                    lastName = "culpa";
                }};
            }};

            PostVisitorIdentificationV3TokensCreateGenerateTokenResponse res = sdk.generate.postVisitorIdentificationV3TokensCreateGenerateToken(req);

            if (res.identificationTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->