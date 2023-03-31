<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AdmobAccountsAdUnitsListSecurity;
import org.openapis.openapi.models.operations.AdmobAccountsAdUnitsListPathParams;
import org.openapis.openapi.models.operations.AdmobAccountsAdUnitsListQueryParams;
import org.openapis.openapi.models.operations.AdmobAccountsAdUnitsListRequest;
import org.openapis.openapi.models.operations.AdmobAccountsAdUnitsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdmobAccountsAdUnitsListRequest req = new AdmobAccountsAdUnitsListRequest() {{
                security = new AdmobAccountsAdUnitsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AdmobAccountsAdUnitsListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new AdmobAccountsAdUnitsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            AdmobAccountsAdUnitsListResponse res = sdk.accounts.admobAccountsAdUnitsList(req);

            if (res.listAdUnitsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->