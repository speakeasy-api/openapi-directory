<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteRequest;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteResponse;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SiteVerificationWebResourceDeleteRequest req = new SiteVerificationWebResourceDeleteRequest("corrupti") {{
                alt = AltEnum.JSON;
                fields = "provident";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "unde";
                userIp = "nulla";
            }};            

            SiteVerificationWebResourceDeleteResponse res = sdk.webResource.siteVerificationWebResourceDelete(req, new SiteVerificationWebResourceDeleteSecurity("corrupti", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->