<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelSecurityOption2;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelPathParams;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelQueryParams;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelRequest;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigOperationsCancelRequest req = new RuntimeconfigOperationsCancelRequest() {{
                security = new RuntimeconfigOperationsCancelSecurity() {{
                    option1 = new RuntimeconfigOperationsCancelSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new RuntimeconfigOperationsCancelPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new RuntimeconfigOperationsCancelQueryParams() {{
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

            RuntimeconfigOperationsCancelResponse res = sdk.operations.runtimeconfigOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->