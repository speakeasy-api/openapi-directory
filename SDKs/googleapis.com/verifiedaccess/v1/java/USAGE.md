<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VerifiedaccessChallengeCreateSecurity;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeCreateRequest;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifiedaccessChallengeCreateRequest req = new VerifiedaccessChallengeCreateRequest() {{
                dollarXgafv = "2";
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("distinctio", "quibusdam");
                    put("unde", "nulla");
                    put("corrupti", "illum");
                }};
                accessToken = "vel";
                alt = "media";
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }}            

            VerifiedaccessChallengeCreateResponse res = sdk.challenge.verifiedaccessChallengeCreate(req, new VerifiedaccessChallengeCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.challenge.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->