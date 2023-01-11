<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sapiente";
                }};
                queryParams = new AdmobAccountsAdUnitsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "autem";
                    alt = "json";
                    callback = "velit";
                    fields = "minus";
                    key = "praesentium";
                    oauthToken = "minus";
                    pageSize = 2071104450853766658;
                    pageToken = "consequatur";
                    prettyPrint = false;
                    quotaUser = "et";
                    uploadType = "qui";
                    uploadProtocol = "atque";
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