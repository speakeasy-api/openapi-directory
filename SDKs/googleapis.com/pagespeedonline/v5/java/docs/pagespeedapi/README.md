# pagespeedapi

### Available Operations

* [pagespeedonlinePagespeedapiRunpagespeed](#pagespeedonlinepagespeedapirunpagespeed) - Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.

## pagespeedonlinePagespeedapiRunpagespeed

Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnum;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedRequest;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedResponse;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedSecurity;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PagespeedonlinePagespeedapiRunpagespeedRequest req = new PagespeedonlinePagespeedapiRunpagespeedRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                captchaToken = "temporibus";
                category = new org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnum[]{{
                    add(PagespeedonlinePagespeedapiRunpagespeedCategoryEnum.BEST_PRACTICES),
                }};
                fields = "veritatis";
                key = "deserunt";
                locale = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                strategy = PagespeedonlinePagespeedapiRunpagespeedStrategyEnum.MOBILE;
                uploadType = "quo";
                uploadProtocol = "odit";
                utmCampaign = "at";
                utmSource = "at";
            }};            

            PagespeedonlinePagespeedapiRunpagespeedResponse res = sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req, new PagespeedonlinePagespeedapiRunpagespeedSecurity("maiores", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pagespeedApiPagespeedResponseV5 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
