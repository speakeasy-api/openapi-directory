<!-- Start SDK Example Usage -->
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

            PagespeedonlinePagespeedapiRunpagespeedRequest req = new PagespeedonlinePagespeedapiRunpagespeedRequest("corrupti") {{
                alt = AltEnum.JSON;
                fields = "provident";
                filterThirdPartyResources = false;
                key = "distinctio";
                locale = "quibusdam";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "nulla";
                rule = new String[]{{
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
                screenshot = false;
                strategy = PagespeedonlinePagespeedapiRunpagespeedStrategyEnum.MOBILE;
                userIp = "suscipit";
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
<!-- End SDK Example Usage -->