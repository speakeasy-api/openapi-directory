<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity;
import org.openapis.openapi.models.operations.PostVisitorIdentificationV3TokensCreateGenerateTokenRequest;
import org.openapis.openapi.models.operations.PostVisitorIdentificationV3TokensCreateGenerateTokenResponse;
import org.openapis.openapi.models.shared.IdentificationTokenGenerationRequest;
import org.openapis.openapi.models.shared.SchemeHapikey;
import org.openapis.openapi.models.shared.SchemeOauth2Legacy;
import org.openapis.openapi.models.shared.SchemePrivateAppsLegacy;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVisitorIdentificationV3TokensCreateGenerateTokenRequest req = new PostVisitorIdentificationV3TokensCreateGenerateTokenRequest() {{
                security = new PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity() {{
                    hapikey = new SchemeHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new IdentificationTokenGenerationRequest() {{
                    email = "Larue_Rau85@yahoo.com";
                    firstName = "Karley";
                    lastName = "Stamm";
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