<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption1;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption2;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption3;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption4;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurity;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileViewEnum;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileRequest;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsloginUsersGetLoginProfileRequest req = new OsloginUsersGetLoginProfileRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                name = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                projectId = "vel";
                quotaUser = "error";
                systemId = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
                view = "LOGIN_PROFILE_VIEW_UNSPECIFIED";
            }}            

            OsloginUsersGetLoginProfileResponse res = sdk.users.osloginUsersGetLoginProfile(req, new OsloginUsersGetLoginProfileSecurity() {{
                option1 = new OsloginUsersGetLoginProfileSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.loginProfile.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->