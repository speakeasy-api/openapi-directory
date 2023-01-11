<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            FirebasehostingOperationsCancelRequest req = new FirebasehostingOperationsCancelRequest() {{
                pathParams = new FirebasehostingOperationsCancelPathParams() {{
                    name = "laudantium";
                }};
                queryParams = new FirebasehostingOperationsCancelQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "iste";
                    alt = "proto";
                    callback = "vel";
                    fields = "non";
                    key = "cumque";
                    oauthToken = "incidunt";
                    prettyPrint = false;
                    quotaUser = "eum";
                    uploadType = "rem";
                    uploadProtocol = "fuga";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("reprehenderit", "debitis");
                    put("iste", "voluptatum");
                    put("numquam", "accusamus");
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