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
                    fields = "cupiditate";
                    filterThirdPartyResources = true;
                    key = "repudiandae";
                    locale = "eveniet";
                    oauthToken = "odit";
                    prettyPrint = true;
                    quotaUser = "laborum";
                    rule = new String[]() {{
                        add("voluptas"),
                    }};
                    screenshot = false;
                    snapshots = false;
                    strategy = "desktop";
                    url = "recusandae";
                    userIp = "minima";
                    utmCampaign = "est";
                    utmSource = "aut";
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