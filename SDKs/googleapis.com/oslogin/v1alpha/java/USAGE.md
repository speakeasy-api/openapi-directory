<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption1;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption2;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption3;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption4;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurity;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfilePathParams;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileOperatingSystemTypeEnum;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileViewEnum;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileQueryParams;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileRequest;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    name = "corrupti";
                }};
                queryParams = new OsloginUsersGetLoginProfileQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    operatingSystemType = "LINUX";
                    prettyPrint = false;
                    projectId = "error";
                    quotaUser = "deserunt";
                    systemId = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                    view = "SECURITY_KEY";
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