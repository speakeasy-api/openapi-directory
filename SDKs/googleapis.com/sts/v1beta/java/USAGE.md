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

            StsTokenRequest req = new StsTokenRequest() {{
                queryParams = new StsTokenQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "sit";
                    alt = "media";
                    callback = "perferendis";
                    fields = "non";
                    key = "aut";
                    oauthToken = "minus";
                    prettyPrint = false;
                    quotaUser = "non";
                    uploadType = "a";
                    uploadProtocol = "distinctio";
                }};
                request = new GoogleIdentityStsV1betaExchangeTokenRequest() {{
                    audience = "sit";
                    grantType = "nemo";
                    options = "rerum";
                    requestedTokenType = "ut";
                    scope = "quia";
                    subjectToken = "hic";
                    subjectTokenType = "ducimus";
                }};
            }};

            StsTokenResponse res = sdk.v1beta.stsToken(req);

            if (res.googleIdentityStsV1betaExchangeTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->