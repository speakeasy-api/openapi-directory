# operations

### Available Operations

* [accesscontextmanagerOperationsCancel](#accesscontextmanageroperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

## accesscontextmanagerOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerOperationsCancelRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerOperationsCancelResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerOperationsCancelRequest req = new AccesscontextmanagerOperationsCancelRequest("exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("facilis", "tempore");
                }};
                accessToken = "nisi";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "blanditiis";
                key = "distinctio";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "nisi";
                uploadProtocol = "libero";
            }};            

            AccesscontextmanagerOperationsCancelResponse res = sdk.operations.accesscontextmanagerOperationsCancel(req, new AccesscontextmanagerOperationsCancelSecurity("minus", "facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
