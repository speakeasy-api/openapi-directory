<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListSecurityOption2;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListQueryParams;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalCustomersListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalCustomersListRequest req = new ProdTtSasportalCustomersListRequest() {{
                security = new ProdTtSasportalCustomersListSecurity() {{
                    option1 = new ProdTtSasportalCustomersListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new ProdTtSasportalCustomersListQueryParams() {{
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
                }};
            }};            

            ProdTtSasportalCustomersListResponse res = sdk.customers.prodTtSasportalCustomersList(req);

            if (res.sasPortalListCustomersResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->