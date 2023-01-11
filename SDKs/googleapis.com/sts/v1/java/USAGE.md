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
                    dollarXgafv = "2";
                    accessToken = "ut";
                    alt = "media";
                    callback = "soluta";
                    fields = "eum";
                    key = "consequatur";
                    oauthToken = "consequatur";
                    prettyPrint = true;
                    quotaUser = "possimus";
                    uploadType = "aliquam";
                    uploadProtocol = "officia";
                }};
                request = new GoogleIdentityStsV1IntrospectTokenRequest() {{
                    token = "quae";
                    tokenTypeHint = "eveniet";
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