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

            WebfontsWebfontsListRequest req = new WebfontsWebfontsListRequest() {{
                queryParams = new WebfontsWebfontsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "omnis";
                    alt = "media";
                    callback = "est";
                    fields = "aut";
                    key = "similique";
                    oauthToken = "quibusdam";
                    prettyPrint = false;
                    quotaUser = "magnam";
                    sort = "STYLE";
                    uploadType = "animi";
                    uploadProtocol = "veniam";
                }};
            }};

            WebfontsWebfontsListResponse res = sdk.webfonts.webfontsWebfontsList(req);

            if (res.webfontList.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->