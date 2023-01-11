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
                queryParams = new PagespeedonlinePagespeedapiRunpagespeedQueryParams() {{
                    alt = "json";
                    fields = "rerum";
                    filterThirdPartyResources = true;
                    key = "libero";
                    locale = "eligendi";
                    oauthToken = "officiis";
                    prettyPrint = false;
                    quotaUser = "perferendis";
                    rule = new String[]() {{
                        add("possimus"),
                    }};
                    screenshot = false;
                    strategy = "mobile";
                    url = "non";
                    userIp = "ut";
                }};
            }};

            PagespeedonlinePagespeedapiRunpagespeedResponse res = sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->