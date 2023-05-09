<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveAboutGetRequest;
import org.openapis.openapi.models.operations.DriveAboutGetResponse;
import org.openapis.openapi.models.operations.DriveAboutGetSecurity;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption2;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption3;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption4;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption5;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption6;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveAboutGetRequest req = new DriveAboutGetRequest() {{
                alt = AltEnum.JSON;
                fields = "corrupti";
                includeSubscribed = false;
                key = "provident";
                maxChangeIdCount = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "unde";
                startChangeId = "nulla";
                userIp = "corrupti";
            }};            

            DriveAboutGetResponse res = sdk.about.driveAboutGet(req, new DriveAboutGetSecurity() {{
                option1 = new DriveAboutGetSecurityOption1("illum", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.about != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->