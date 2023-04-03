<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServiceusageOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelSecurityOption2;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelSecurity;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelRequest;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageOperationsCancelRequest req = new ServiceusageOperationsCancelRequest() {{
                dollarXgafv = "2";
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("distinctio", "quibusdam");
                    put("unde", "nulla");
                    put("corrupti", "illum");
                }};
                accessToken = "vel";
                alt = "media";
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                name = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }}            

            ServiceusageOperationsCancelResponse res = sdk.operations.serviceusageOperationsCancel(req, new ServiceusageOperationsCancelSecurity() {{
                option1 = new ServiceusageOperationsCancelSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->