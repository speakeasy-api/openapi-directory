<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelRequest;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelResponse;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingOperationsCancelRequest req = new ServicenetworkingOperationsCancelRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                    put("illum", "vel");
                }};
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            ServicenetworkingOperationsCancelResponse res = sdk.operations.servicenetworkingOperationsCancel(req, new ServicenetworkingOperationsCancelSecurity() {{
                option1 = new ServicenetworkingOperationsCancelSecurityOption1("suscipit", "molestiae") {{
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