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
                    matterId = "recusandae";
                }};
                queryParams = new VaultMattersAddPermissionsQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "vitae";
                    alt = "proto";
                    callback = "rerum";
                    fields = "sed";
                    key = "eum";
                    oauthToken = "voluptatum";
                    prettyPrint = true;
                    quotaUser = "distinctio";
                    uploadType = "commodi";
                    uploadProtocol = "sed";
                }};
                request = new AddMatterPermissionsRequest() {{
                    ccMe = false;
                    matterPermission = new MatterPermission() {{
                        accountId = "laudantium";
                        role = "ROLE_UNSPECIFIED";
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