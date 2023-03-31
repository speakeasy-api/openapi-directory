<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.WebfontsWebfontsListSortEnum;
import org.openapis.openapi.models.operations.WebfontsWebfontsListQueryParams;
import org.openapis.openapi.models.operations.WebfontsWebfontsListRequest;
import org.openapis.openapi.models.operations.WebfontsWebfontsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebfontsWebfontsListRequest req = new WebfontsWebfontsListRequest() {{
                queryParams = new WebfontsWebfontsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    sort = "DATE";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
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