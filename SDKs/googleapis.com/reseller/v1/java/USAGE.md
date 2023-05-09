<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerCustomersGetRequest;
import org.openapis.openapi.models.operations.ResellerCustomersGetResponse;
import org.openapis.openapi.models.operations.ResellerCustomersGetSecurity;
import org.openapis.openapi.models.operations.ResellerCustomersGetSecurityOption1;
import org.openapis.openapi.models.operations.ResellerCustomersGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerCustomersGetRequest req = new ResellerCustomersGetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            ResellerCustomersGetResponse res = sdk.customers.resellerCustomersGet(req, new ResellerCustomersGetSecurity() {{
                option1 = new ResellerCustomersGetSecurityOption1("suscipit", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->