<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ContentAccountsAuthinfoSecurity;
import org.openapis.openapi.models.operations.ContentAccountsAuthinfoQueryParams;
import org.openapis.openapi.models.operations.ContentAccountsAuthinfoRequest;
import org.openapis.openapi.models.operations.ContentAccountsAuthinfoResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsAuthinfoRequest req = new ContentAccountsAuthinfoRequest() {{
                security = new ContentAccountsAuthinfoSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new ContentAccountsAuthinfoQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
            }};            

            ContentAccountsAuthinfoResponse res = sdk.accounts.contentAccountsAuthinfo(req);

            if (res.accountsAuthInfoResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->