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
                request = new GoogleIdentityStsV1betaExchangeTokenRequest() {{
                    audience = "rerum";
                    grantType = "dicta";
                    options = "debitis";
                    requestedTokenType = "voluptatum";
                    scope = "et";
                    subjectToken = "ut";
                    subjectTokenType = "dolorem";
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