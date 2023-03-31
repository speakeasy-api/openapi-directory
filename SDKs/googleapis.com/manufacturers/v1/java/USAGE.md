<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsDeletePathParams;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsDeleteQueryParams;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsDeleteRequest;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManufacturersAccountsLanguagesProductCertificationsDeleteRequest req = new ManufacturersAccountsLanguagesProductCertificationsDeleteRequest() {{
                security = new ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ManufacturersAccountsLanguagesProductCertificationsDeletePathParams() {{
                    name = "corrupti";
                }};
                queryParams = new ManufacturersAccountsLanguagesProductCertificationsDeleteQueryParams() {{
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
            }};            

            ManufacturersAccountsLanguagesProductCertificationsDeleteResponse res = sdk.accounts.manufacturersAccountsLanguagesProductCertificationsDelete(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->