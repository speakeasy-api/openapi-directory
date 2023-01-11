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

            PagespeedonlinePagespeedapiRunpagespeedRequest req = new PagespeedonlinePagespeedapiRunpagespeedRequest() {{
                security = new PagespeedonlinePagespeedapiRunpagespeedSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new PagespeedonlinePagespeedapiRunpagespeedQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "accusamus";
                    alt = "proto";
                    callback = "laboriosam";
                    captchaToken = "deserunt";
                    category = new openapisdk.models.operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnum[]() {{
                        add("PERFORMANCE"),
                        add("PWA"),
                    }};
                    fields = "eos";
                    key = "nobis";
                    locale = "ex";
                    oauthToken = "dolor";
                    prettyPrint = false;
                    quotaUser = "vel";
                    strategy = "DESKTOP";
                    uploadType = "adipisci";
                    uploadProtocol = "deserunt";
                    url = "iure";
                    utmCampaign = "aut";
                    utmSource = "omnis";
                }};
            }};

            PagespeedonlinePagespeedapiRunpagespeedResponse res = sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req);

            if (res.pagespeedApiPagespeedResponseV5.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->