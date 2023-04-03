<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineSettingSourceEnum;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersCombineRequest req = new TagmanagerAccountsContainersCombineRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                allowUserPermissionFeatureUpdate = false;
                alt = "proto";
                callback = "quibusdam";
                containerId = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                path = "vel";
                prettyPrint = false;
                quotaUser = "error";
                settingSource = "current";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }}            

            TagmanagerAccountsContainersCombineResponse res = sdk.accounts.tagmanagerAccountsContainersCombine(req, new TagmanagerAccountsContainersCombineSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.container.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->