<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileOperatingSystemTypeEnum;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileRequest;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileResponse;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurity;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption1;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption2;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption3;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileSecurityOption4;
import org.openapis.openapi.models.operations.OsloginUsersGetLoginProfileViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsloginUsersGetLoginProfileRequest req = new OsloginUsersGetLoginProfileRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                operatingSystemType = OsloginUsersGetLoginProfileOperatingSystemTypeEnum.LINUX;
                prettyPrint = false;
                projectId = "error";
                quotaUser = "deserunt";
                systemId = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
                view = OsloginUsersGetLoginProfileViewEnum.SECURITY_KEY;
            }};            

            OsloginUsersGetLoginProfileResponse res = sdk.users.osloginUsersGetLoginProfile(req, new OsloginUsersGetLoginProfileSecurity() {{
                option1 = new OsloginUsersGetLoginProfileSecurityOption1("ipsa", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.loginProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->