<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ResellerCustomersGetSecurityOption1;
import org.openapis.openapi.models.operations.ResellerCustomersGetSecurityOption2;
import org.openapis.openapi.models.operations.ResellerCustomersGetSecurity;
import org.openapis.openapi.models.operations.ResellerCustomersGetPathParams;
import org.openapis.openapi.models.operations.ResellerCustomersGetQueryParams;
import org.openapis.openapi.models.operations.ResellerCustomersGetRequest;
import org.openapis.openapi.models.operations.ResellerCustomersGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerCustomersGetRequest req = new ResellerCustomersGetRequest() {{
                security = new ResellerCustomersGetSecurity() {{
                    option1 = new ResellerCustomersGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ResellerCustomersGetPathParams() {{
                    customerId = "corrupti";
                }};
                queryParams = new ResellerCustomersGetQueryParams() {{
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

            ResellerCustomersGetResponse res = sdk.customers.resellerCustomersGet(req);

            if (res.customer.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->