# webfonts

### Available Operations

* [webfontsWebfontsList](#webfontswebfontslist) - Retrieves the list of fonts currently served by the Google Fonts Developer API.

## webfontsWebfontsList

Retrieves the list of fonts currently served by the Google Fonts Developer API.

### Example Usage

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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                capability = new org.openapis.openapi.models.operations.WebfontsWebfontsListCapabilityEnum[]{{
                    add(WebfontsWebfontsListCapabilityEnum.WOFF2),
                    add(WebfontsWebfontsListCapabilityEnum.WOFF2),
                }};
                family = new String[]{{
                    add("temporibus"),
                    add("ab"),
                    add("quis"),
                    add("veritatis"),
                }};
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                sort = WebfontsWebfontsListSortEnum.TRENDING;
                subset = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
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
