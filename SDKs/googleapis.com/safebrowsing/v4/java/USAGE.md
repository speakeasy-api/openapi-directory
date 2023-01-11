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

            SafebrowsingEncodedFullHashesGetRequest req = new SafebrowsingEncodedFullHashesGetRequest() {{
                pathParams = new SafebrowsingEncodedFullHashesGetPathParams() {{
                    encodedRequest = "sit";
                }};
                queryParams = new SafebrowsingEncodedFullHashesGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    clientId = "dolor";
                    clientVersion = "expedita";
                    fields = "voluptas";
                    key = "fugit";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
            }};

            SafebrowsingEncodedFullHashesGetResponse res = sdk.encodedFullHashes.safebrowsingEncodedFullHashesGet(req);

            if (res.googleSecuritySafebrowsingV4FindFullHashesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->