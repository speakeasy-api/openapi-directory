<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelRequest;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelResponse;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigOperationsCancelRequest req = new RuntimeconfigOperationsCancelRequest("corrupti") {{
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

            RuntimeconfigOperationsCancelResponse res = sdk.operations.runtimeconfigOperationsCancel(req, new RuntimeconfigOperationsCancelSecurity() {{
                option1 = new RuntimeconfigOperationsCancelSecurityOption1("suscipit", "molestiae") {{
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