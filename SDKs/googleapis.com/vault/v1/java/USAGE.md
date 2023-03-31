<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VaultMattersAddPermissionsSecurity;
import org.openapis.openapi.models.operations.VaultMattersAddPermissionsPathParams;
import org.openapis.openapi.models.operations.VaultMattersAddPermissionsQueryParams;
import org.openapis.openapi.models.operations.VaultMattersAddPermissionsRequest;
import org.openapis.openapi.models.operations.VaultMattersAddPermissionsResponse;
import org.openapis.openapi.models.shared.AddMatterPermissionsRequest;
import org.openapis.openapi.models.shared.MatterPermissionRoleEnum;
import org.openapis.openapi.models.shared.MatterPermission;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersAddPermissionsRequest req = new VaultMattersAddPermissionsRequest() {{
                security = new VaultMattersAddPermissionsSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new VaultMattersAddPermissionsPathParams() {{
                    matterId = "corrupti";
                }};
                queryParams = new VaultMattersAddPermissionsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new AddMatterPermissionsRequest() {{
                    ccMe = false;
                    matterPermission = new MatterPermission() {{
                        accountId = "suscipit";
                        role = "COLLABORATOR";
                    }};
                    sendEmails = false;
                }};
            }};            

            VaultMattersAddPermissionsResponse res = sdk.matters.vaultMattersAddPermissions(req);

            if (res.matterPermission.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->