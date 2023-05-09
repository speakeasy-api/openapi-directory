# pagespeedapi

### Available Operations

* [pagespeedonlinePagespeedapiRunpagespeed](#pagespeedonlinepagespeedapirunpagespeed) - Runs PageSpeed analysis on the page at the specified URL, and returns a PageSpeed score, a list of suggestions to make that page faster, and other information.

## pagespeedonlinePagespeedapiRunpagespeed

Runs PageSpeed analysis on the page at the specified URL, and returns a PageSpeed score, a list of suggestions to make that page faster, and other information.

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

            PagespeedonlinePagespeedapiRunpagespeedRequest req = new PagespeedonlinePagespeedapiRunpagespeedRequest("iure") {{
                alt = AltEnum.JSON;
                fields = "magnam";
                filterThirdPartyResources = false;
                key = "debitis";
                locale = "ipsa";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "tempora";
                rule = new String[]{{
                    add("molestiae"),
                    add("minus"),
                }};
                screenshot = false;
                strategy = PagespeedonlinePagespeedapiRunpagespeedStrategyEnum.MOBILE;
                userIp = "voluptatum";
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
