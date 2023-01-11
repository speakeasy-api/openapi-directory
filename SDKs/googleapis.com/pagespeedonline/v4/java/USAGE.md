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
                    fields = "voluptas";
                    filterThirdPartyResources = true;
                    key = "expedita";
                    locale = "consequuntur";
                    oauthToken = "dolor";
                    prettyPrint = true;
                    quotaUser = "voluptas";
                    rule = new String[]() {{
                        add("et"),
                    }};
                    screenshot = true;
                    snapshots = true;
                    strategy = "mobile";
                    url = "debitis";
                    userIp = "voluptatum";
                    utmCampaign = "et";
                    utmSource = "ut";
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