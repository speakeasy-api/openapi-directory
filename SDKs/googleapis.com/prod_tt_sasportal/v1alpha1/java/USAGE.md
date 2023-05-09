<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalCustomersListRequest req = new ProdTtSasportalCustomersListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                pageSize = 847252L;
                pageToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            ProdTtSasportalCustomersListResponse res = sdk.customers.prodTtSasportalCustomersList(req, new ProdTtSasportalCustomersListSecurity() {{
                option1 = new ProdTtSasportalCustomersListSecurityOption1("iure", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalListCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->