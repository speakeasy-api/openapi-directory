<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsAuthinfoRequest;
import org.openapis.openapi.models.operations.ContentAccountsAuthinfoResponse;
import org.openapis.openapi.models.operations.ContentAccountsAuthinfoSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsAuthinfoRequest req = new ContentAccountsAuthinfoRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "vel";
                uploadProtocol = "error";
            }};            

            ContentAccountsAuthinfoResponse res = sdk.accounts.contentAccountsAuthinfo(req, new ContentAccountsAuthinfoSecurity("deserunt", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountsAuthInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->