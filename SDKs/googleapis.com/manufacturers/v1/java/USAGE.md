<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsDeleteRequest;
import org.openapis.openapi.models.operations.ManufacturersAccountsLanguagesProductCertificationsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManufacturersAccountsLanguagesProductCertificationsDeleteRequest req = new ManufacturersAccountsLanguagesProductCertificationsDeleteRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                name = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }}            

            ManufacturersAccountsLanguagesProductCertificationsDeleteResponse res = sdk.accounts.manufacturersAccountsLanguagesProductCertificationsDelete(req, new ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->