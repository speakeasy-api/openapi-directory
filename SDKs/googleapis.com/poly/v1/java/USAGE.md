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

            PolyAssetsGetRequest req = new PolyAssetsGetRequest() {{
                pathParams = new PolyAssetsGetPathParams() {{
                    name = "ut";
                }};
                queryParams = new PolyAssetsGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "qui";
                    alt = "json";
                    callback = "voluptas";
                    fields = "cumque";
                    key = "velit";
                    oauthToken = "voluptatem";
                    prettyPrint = false;
                    quotaUser = "cum";
                    uploadType = "ratione";
                    uploadProtocol = "ab";
                }};
            }};

            PolyAssetsGetResponse res = sdk.assets.polyAssetsGet(req);

            if (res.asset.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->