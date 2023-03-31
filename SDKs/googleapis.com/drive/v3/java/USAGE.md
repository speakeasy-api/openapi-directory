<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption1;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption2;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption3;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption4;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption5;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption6;
import org.openapis.openapi.models.operations.DriveAboutGetSecurityOption7;
import org.openapis.openapi.models.operations.DriveAboutGetSecurity;
import org.openapis.openapi.models.operations.DriveAboutGetQueryParams;
import org.openapis.openapi.models.operations.DriveAboutGetRequest;
import org.openapis.openapi.models.operations.DriveAboutGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveAboutGetRequest req = new DriveAboutGetRequest() {{
                security = new DriveAboutGetSecurity() {{
                    option1 = new DriveAboutGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new DriveAboutGetQueryParams() {{
                    alt = "json";
                    fields = "corrupti";
                    key = "provident";
                    oauthToken = "distinctio";
                    prettyPrint = false;
                    quotaUser = "quibusdam";
                    userIp = "unde";
                }};
            }};            

            DriveAboutGetResponse res = sdk.about.driveAboutGet(req);

            if (res.about.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->