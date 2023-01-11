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
                    name = "nisi";
                }};
                queryParams = new OsloginUsersGetLoginProfileQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "quae";
                    alt = "media";
                    callback = "culpa";
                    fields = "voluptas";
                    key = "dolorem";
                    oauthToken = "minus";
                    operatingSystemType = "OPERATING_SYSTEM_TYPE_UNSPECIFIED";
                    prettyPrint = false;
                    projectId = "quis";
                    quotaUser = "nobis";
                    systemId = "exercitationem";
                    uploadType = "non";
                    uploadProtocol = "quo";
                    view = "LOGIN_PROFILE_VIEW_UNSPECIFIED";
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