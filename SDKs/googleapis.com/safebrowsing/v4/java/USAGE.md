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
                    encodedRequest = "et";
                }};
                queryParams = new SafebrowsingEncodedFullHashesGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "neque";
                    alt = "json";
                    callback = "velit";
                    clientId = "magnam";
                    clientVersion = "cumque";
                    fields = "provident";
                    key = "ipsum";
                    oauthToken = "quia";
                    prettyPrint = false;
                    quotaUser = "aperiam";
                    uploadType = "delectus";
                    uploadProtocol = "ut";
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