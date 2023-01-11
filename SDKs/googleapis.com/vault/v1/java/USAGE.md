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
                    matterId = "sit";
                }};
                queryParams = new VaultMattersAddPermissionsQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new AddMatterPermissionsRequest() {{
                    ccMe = false;
                    matterPermission = new MatterPermission() {{
                        accountId = "debitis";
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