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

            VerifiedaccessChallengeGenerateRequest req = new VerifiedaccessChallengeGenerateRequest() {{
                security = new VerifiedaccessChallengeGenerateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new VerifiedaccessChallengeGenerateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("dicta", "debitis");
                    put("voluptatum", "et");
                    put("ut", "dolorem");
                }};
            }};

            VerifiedaccessChallengeGenerateResponse res = sdk.challenge.verifiedaccessChallengeGenerate(req);

            if (res.challenge.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->