<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServiceusageOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelSecurityOption2;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelSecurity;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelPathParams;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelQueryParams;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelRequest;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageOperationsCancelRequest req = new ServiceusageOperationsCancelRequest() {{
                security = new ServiceusageOperationsCancelSecurity() {{
                    option1 = new ServiceusageOperationsCancelSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ServiceusageOperationsCancelPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new ServiceusageOperationsCancelQueryParams() {{
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

            ServiceusageOperationsCancelResponse res = sdk.operations.serviceusageOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->