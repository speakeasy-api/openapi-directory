<!-- Start SDK Example Usage -->
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

            PagespeedonlinePagespeedapiRunpagespeedRequest req = new PagespeedonlinePagespeedapiRunpagespeedRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                captchaToken = "nulla";
                category = new org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnum[]{{
                    add(PagespeedonlinePagespeedapiRunpagespeedCategoryEnum.SEO),
                    add(PagespeedonlinePagespeedapiRunpagespeedCategoryEnum.BEST_PRACTICES),
                    add(PagespeedonlinePagespeedapiRunpagespeedCategoryEnum.PERFORMANCE),
                }};
                fields = "deserunt";
                key = "suscipit";
                locale = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                strategy = PagespeedonlinePagespeedapiRunpagespeedStrategyEnum.STRATEGY_UNSPECIFIED;
                uploadType = "delectus";
                uploadProtocol = "tempora";
                utmCampaign = "suscipit";
                utmSource = "molestiae";
            }};            

            PagespeedonlinePagespeedapiRunpagespeedResponse res = sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req, new PagespeedonlinePagespeedapiRunpagespeedSecurity("minus", "placeat") {{
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
<!-- End SDK Example Usage -->