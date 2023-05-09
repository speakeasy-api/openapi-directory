<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerEffectiveTagsListRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerEffectiveTagsListResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerEffectiveTagsListSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerEffectiveTagsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerEffectiveTagsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerEffectiveTagsListRequest req = new CloudresourcemanagerEffectiveTagsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                pageSize = 847252L;
                pageToken = "vel";
                parent = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            CloudresourcemanagerEffectiveTagsListResponse res = sdk.effectiveTags.cloudresourcemanagerEffectiveTagsList(req, new CloudresourcemanagerEffectiveTagsListSecurity() {{
                option1 = new CloudresourcemanagerEffectiveTagsListSecurityOption1("magnam", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listEffectiveTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->