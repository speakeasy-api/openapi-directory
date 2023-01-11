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

            ManufacturersAccountsProductsDeleteRequest req = new ManufacturersAccountsProductsDeleteRequest() {{
                security = new ManufacturersAccountsProductsDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ManufacturersAccountsProductsDeletePathParams() {{
                    name = "cumque";
                    parent = "distinctio";
                }};
                queryParams = new ManufacturersAccountsProductsDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "qui";
                    alt = "json";
                    callback = "aperiam";
                    fields = "tenetur";
                    key = "harum";
                    oauthToken = "quia";
                    prettyPrint = false;
                    quotaUser = "est";
                    uploadType = "ea";
                    uploadProtocol = "vitae";
                }};
            }};

            ManufacturersAccountsProductsDeleteResponse res = sdk.accounts.manufacturersAccountsProductsDelete(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->