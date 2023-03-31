<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateSecurity;
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreatePathParams;
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateQueryParams;
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateRequest;
import org.openapis.openapi.models.operations.PlaycustomappAccountsCustomAppsCreateResponse;
import org.openapis.openapi.models.shared.CustomAppInput;
import org.openapis.openapi.models.shared.Organization;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaycustomappAccountsCustomAppsCreateRequest req = new PlaycustomappAccountsCustomAppsCreateRequest() {{
                security = new PlaycustomappAccountsCustomAppsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new PlaycustomappAccountsCustomAppsCreatePathParams() {{
                    account = "corrupti";
                }};
                queryParams = new PlaycustomappAccountsCustomAppsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = "suscipit".getBytes();
            }};            

            PlaycustomappAccountsCustomAppsCreateResponse res = sdk.accounts.playcustomappAccountsCustomAppsCreate(req);

            if (res.customApp.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->