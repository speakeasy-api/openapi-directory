# pagespeedapi

### Available Operations

* [pagespeedonlinePagespeedapiRunpagespeed](#pagespeedonlinepagespeedapirunpagespeed) - Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.

## pagespeedonlinePagespeedapiRunpagespeed

Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedRequest;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedResponse;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PagespeedonlinePagespeedapiRunpagespeedRequest req = new PagespeedonlinePagespeedapiRunpagespeedRequest("debitis") {{
                alt = AltEnum.JSON;
                fields = "ipsa";
                filterThirdPartyResources = false;
                key = "delectus";
                locale = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                rule = new String[]{{
                    add("placeat"),
                    add("voluptatum"),
                    add("iusto"),
                    add("excepturi"),
                }};
                screenshot = false;
                snapshots = false;
                strategy = PagespeedonlinePagespeedapiRunpagespeedStrategyEnum.DESKTOP;
                userIp = "recusandae";
                utmCampaign = "temporibus";
                utmSource = "ab";
            }};            

            PagespeedonlinePagespeedapiRunpagespeedResponse res = sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
