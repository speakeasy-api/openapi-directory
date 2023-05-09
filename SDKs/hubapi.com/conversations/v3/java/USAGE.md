<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVisitorIdentificationV3TokensCreateGenerateTokenResponse;
import org.openapis.openapi.models.operations.PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity;
import org.openapis.openapi.models.shared.IdentificationTokenGenerationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.IdentificationTokenGenerationRequest req = new IdentificationTokenGenerationRequest("corrupti") {{
                firstName = "Larue";
                lastName = "Rau";
            }};            

            PostVisitorIdentificationV3TokensCreateGenerateTokenResponse res = sdk.generate.postVisitorIdentificationV3TokensCreateGenerateToken(req, new PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.identificationTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->