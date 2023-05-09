<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelRequest;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelResponse;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurity;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminOperationsCancelRequest req = new BigtableadminOperationsCancelRequest("corrupti") {{
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

            BigtableadminOperationsCancelResponse res = sdk.operations.bigtableadminOperationsCancel(req, new BigtableadminOperationsCancelSecurity() {{
                option1 = new BigtableadminOperationsCancelSecurityOption1("suscipit", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->