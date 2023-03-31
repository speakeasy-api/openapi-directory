<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelSecurityOption2;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelPathParams;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelQueryParams;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelRequest;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingOperationsCancelRequest req = new ServicenetworkingOperationsCancelRequest() {{
                security = new ServicenetworkingOperationsCancelSecurity() {{
                    option1 = new ServicenetworkingOperationsCancelSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ServicenetworkingOperationsCancelPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new ServicenetworkingOperationsCancelQueryParams() {{
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

            ServicenetworkingOperationsCancelResponse res = sdk.operations.servicenetworkingOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->