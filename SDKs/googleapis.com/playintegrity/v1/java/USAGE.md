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

            PlayintegrityDecodeIntegrityTokenRequest req = new PlayintegrityDecodeIntegrityTokenRequest() {{
                security = new PlayintegrityDecodeIntegrityTokenSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new PlayintegrityDecodeIntegrityTokenPathParams() {{
                    packageName = "quisquam";
                }};
                queryParams = new PlayintegrityDecodeIntegrityTokenQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "reprehenderit";
                    alt = "proto";
                    callback = "sed";
                    fields = "voluptatem";
                    key = "sit";
                    oauthToken = "distinctio";
                    prettyPrint = false;
                    quotaUser = "animi";
                    uploadType = "aut";
                    uploadProtocol = "ex";
                }};
                request = new DecodeIntegrityTokenRequest() {{
                    integrityToken = "et";
                }};
            }};

            PlayintegrityDecodeIntegrityTokenResponse res = sdk.v1.playintegrityDecodeIntegrityToken(req);

            if (res.decodeIntegrityTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->