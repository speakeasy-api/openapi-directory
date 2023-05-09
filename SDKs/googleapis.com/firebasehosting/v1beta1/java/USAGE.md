<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateRequest;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateResponse;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurity;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SiteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingProjectsSitesCreateRequest req = new FirebasehostingProjectsSitesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                siteInput = new SiteInput() {{
                    appId = "distinctio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("unde", "nulla");
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                    }};
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsa";
                key = "delectus";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "suscipit";
                siteId = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            FirebasehostingProjectsSitesCreateResponse res = sdk.projects.firebasehostingProjectsSitesCreate(req, new FirebasehostingProjectsSitesCreateSecurity() {{
                option1 = new FirebasehostingProjectsSitesCreateSecurityOption1("voluptatum", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.site != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->