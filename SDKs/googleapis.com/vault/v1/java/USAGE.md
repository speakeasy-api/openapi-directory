<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VaultMattersAddPermissionsSecurity;
import org.openapis.openapi.models.operations.VaultMattersAddPermissionsRequest;
import org.openapis.openapi.models.operations.VaultMattersAddPermissionsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AddMatterPermissionsRequest;
import org.openapis.openapi.models.shared.MatterPermissionRoleEnum;
import org.openapis.openapi.models.shared.MatterPermission;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultMattersAddPermissionsRequest req = new VaultMattersAddPermissionsRequest() {{
                dollarXgafv = "2";
                addMatterPermissionsRequest = new AddMatterPermissionsRequest() {{
                    ccMe = false;
                    matterPermission = new MatterPermission() {{
                        accountId = "provident";
                        role = "OWNER";
                    }};
                    sendEmails = false;
                }};
                accessToken = "quibusdam";
                alt = "media";
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                matterId = "vel";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }}            

            VaultMattersAddPermissionsResponse res = sdk.matters.vaultMattersAddPermissions(req, new VaultMattersAddPermissionsSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.matterPermission.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->