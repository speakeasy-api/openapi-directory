<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebasehostingOperationsCancelPathParams;
import org.openapis.openapi.models.operations.FirebasehostingOperationsCancelQueryParams;
import org.openapis.openapi.models.operations.FirebasehostingOperationsCancelRequest;
import org.openapis.openapi.models.operations.FirebasehostingOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingOperationsCancelRequest req = new FirebasehostingOperationsCancelRequest() {{
                pathParams = new FirebasehostingOperationsCancelPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new FirebasehostingOperationsCancelQueryParams() {{
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

            FirebasehostingOperationsCancelResponse res = sdk.operations.firebasehostingOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->