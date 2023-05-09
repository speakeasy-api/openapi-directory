<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetRequest;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetResponse;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetSecurity;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ServicemanagementOperationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicemanagementOperationsGetRequest req = new ServicemanagementOperationsGetRequest("corrupti") {{
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

            ServicemanagementOperationsGetResponse res = sdk.operations.servicemanagementOperationsGet(req, new ServicemanagementOperationsGetSecurity() {{
                option1 = new ServicemanagementOperationsGetSecurityOption1("suscipit", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->