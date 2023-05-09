<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateRequest;
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateResponse;
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomAppInput;
import org.openapis.openapi.models.shared.Organization;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaycustomappAccountsCustomAppsCreateRequest req = new PlaycustomappAccountsCustomAppsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "distinctio".getBytes();
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            PlaycustomappAccountsCustomAppsCreateResponse res = sdk.accounts.playcustomappAccountsCustomAppsCreate(req, new PlaycustomappAccountsCustomAppsCreateSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->