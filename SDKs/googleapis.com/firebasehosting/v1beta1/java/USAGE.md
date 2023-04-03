<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurityOption2;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurity;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateRequest;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SiteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingProjectsSitesCreateRequest req = new FirebasehostingProjectsSitesCreateRequest() {{
                dollarXgafv = "2";
                siteInput = new SiteInput() {{
                    appId = "provident";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                }};
                accessToken = "error";
                alt = "media";
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                parent = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                siteId = "tempora";
                uploadType = "suscipit";
                uploadProtocol = "molestiae";
            }}            

            FirebasehostingProjectsSitesCreateResponse res = sdk.projects.firebasehostingProjectsSitesCreate(req, new FirebasehostingProjectsSitesCreateSecurity() {{
                option1 = new FirebasehostingProjectsSitesCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.site.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->