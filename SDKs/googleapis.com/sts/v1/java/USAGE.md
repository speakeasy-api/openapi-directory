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

            StsIntrospectRequest req = new StsIntrospectRequest() {{
                queryParams = new StsIntrospectQueryParams() {{
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
                request = new GoogleIdentityStsV1IntrospectTokenRequest() {{
                    token = "rerum";
                    tokenTypeHint = "dicta";
                }};
            }};

            StsIntrospectResponse res = sdk.v1.stsIntrospect(req);

            if (res.googleIdentityStsV1IntrospectTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->