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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    sort = "SORT_UNDEFINED";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
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