<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebfontsWebfontsListCapabilityEnum;
import org.openapis.openapi.models.operations.WebfontsWebfontsListRequest;
import org.openapis.openapi.models.operations.WebfontsWebfontsListResponse;
import org.openapis.openapi.models.operations.WebfontsWebfontsListSortEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebfontsWebfontsListRequest req = new WebfontsWebfontsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                capability = new org.openapis.openapi.models.operations.WebfontsWebfontsListCapabilityEnum[]{{
                    add(WebfontsWebfontsListCapabilityEnum.VF),
                    add(WebfontsWebfontsListCapabilityEnum.WOFF2),
                    add(WebfontsWebfontsListCapabilityEnum.VF),
                }};
                family = new String[]{{
                    add("error"),
                    add("deserunt"),
                }};
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                sort = WebfontsWebfontsListSortEnum.SORT_UNDEFINED;
                subset = "delectus";
                uploadType = "tempora";
                uploadProtocol = "suscipit";
            }};            

            WebfontsWebfontsListResponse res = sdk.webfonts.webfontsWebfontsList(req);

            if (res.webfontList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->