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

            OsloginUsersGetLoginProfileRequest req = new OsloginUsersGetLoginProfileRequest() {{
                security = new OsloginUsersGetLoginProfileSecurity() {{
                    option1 = new OsloginUsersGetLoginProfileSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new OsloginUsersGetLoginProfilePathParams() {{
                    name = "quis";
                }};
                queryParams = new OsloginUsersGetLoginProfileQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "ipsa";
                    alt = "proto";
                    callback = "iste";
                    fields = "distinctio";
                    key = "autem";
                    oauthToken = "eos";
                    prettyPrint = false;
                    projectId = "nobis";
                    quotaUser = "consequatur";
                    systemId = "minima";
                    uploadType = "assumenda";
                    uploadProtocol = "quo";
                }};
            }};

            OsloginUsersGetLoginProfileResponse res = sdk.users.osloginUsersGetLoginProfile(req);

            if (res.loginProfile.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->