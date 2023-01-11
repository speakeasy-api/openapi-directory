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
                    fields = "doloremque";
                    filterThirdPartyResources = true;
                    key = "velit";
                    locale = "deleniti";
                    oauthToken = "qui";
                    prettyPrint = true;
                    quotaUser = "atque";
                    rule = new String[]() {{
                        add("nostrum"),
                        add("consequatur"),
                        add("pariatur"),
                    }};
                    screenshot = true;
                    strategy = "desktop";
                    url = "qui";
                    userIp = "suscipit";
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