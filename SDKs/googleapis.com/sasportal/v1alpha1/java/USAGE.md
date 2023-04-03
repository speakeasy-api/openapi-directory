<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SasportalCustomersListSecurityOption1;
import org.openapis.openapi.models.operations.SasportalCustomersListSecurityOption2;
import org.openapis.openapi.models.operations.SasportalCustomersListSecurity;
import org.openapis.openapi.models.operations.SasportalCustomersListRequest;
import org.openapis.openapi.models.operations.SasportalCustomersListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SasportalCustomersListRequest req = new SasportalCustomersListRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                pageSize = 847252;
                pageToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            SasportalCustomersListResponse res = sdk.customers.sasportalCustomersList(req, new SasportalCustomersListSecurity() {{
                option1 = new SasportalCustomersListSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalListCustomersResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->