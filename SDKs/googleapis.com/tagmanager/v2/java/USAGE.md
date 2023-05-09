<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineSettingSourceEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersCombineRequest req = new TagmanagerAccountsContainersCombineRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                allowUserPermissionFeatureUpdate = false;
                alt = AltEnum.PROTO;
                callback = "unde";
                containerId = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                settingSource = TagmanagerAccountsContainersCombineSettingSourceEnum.CURRENT;
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            TagmanagerAccountsContainersCombineResponse res = sdk.accounts.tagmanagerAccountsContainersCombine(req, new TagmanagerAccountsContainersCombineSecurity("magnam", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.container != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->