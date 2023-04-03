<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedSecurity;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnum;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedRequest;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PagespeedonlinePagespeedapiRunpagespeedRequest req = new PagespeedonlinePagespeedapiRunpagespeedRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                captchaToken = "unde";
                category = new org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnum[]{{
                    add("PERFORMANCE"),
                    add("SEO"),
                    add("BEST_PRACTICES"),
                    add("PERFORMANCE"),
                }};
                fields = "deserunt";
                key = "suscipit";
                locale = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                strategy = "STRATEGY_UNSPECIFIED";
                uploadType = "delectus";
                uploadProtocol = "tempora";
                url = "suscipit";
                utmCampaign = "molestiae";
                utmSource = "minus";
            }}            

            PagespeedonlinePagespeedapiRunpagespeedResponse res = sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req, new PagespeedonlinePagespeedapiRunpagespeedSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pagespeedApiPagespeedResponseV5.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->