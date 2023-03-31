<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombinePathParams;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineSettingSourceEnum;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineQueryParams;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersCombineRequest req = new TagmanagerAccountsContainersCombineRequest() {{
                security = new TagmanagerAccountsContainersCombineSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new TagmanagerAccountsContainersCombinePathParams() {{
                    path = "corrupti";
                }};
                queryParams = new TagmanagerAccountsContainersCombineQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    allowUserPermissionFeatureUpdate = false;
                    alt = "proto";
                    callback = "unde";
                    containerId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    settingSource = "current";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            TagmanagerAccountsContainersCombineResponse res = sdk.accounts.tagmanagerAccountsContainersCombine(req);

            if (res.container.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->