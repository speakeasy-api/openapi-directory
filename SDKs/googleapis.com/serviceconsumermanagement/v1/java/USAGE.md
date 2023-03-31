<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServiceconsumermanagementOperationsCancelSecurity;
import org.openapis.openapi.models.operations.ServiceconsumermanagementOperationsCancelPathParams;
import org.openapis.openapi.models.operations.ServiceconsumermanagementOperationsCancelQueryParams;
import org.openapis.openapi.models.operations.ServiceconsumermanagementOperationsCancelRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementOperationsCancelRequest req = new ServiceconsumermanagementOperationsCancelRequest() {{
                security = new ServiceconsumermanagementOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ServiceconsumermanagementOperationsCancelPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new ServiceconsumermanagementOperationsCancelQueryParams() {{
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
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            ServiceconsumermanagementOperationsCancelResponse res = sdk.operations.serviceconsumermanagementOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->