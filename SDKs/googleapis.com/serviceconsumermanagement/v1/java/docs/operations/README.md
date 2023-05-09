# operations

### Available Operations

* [serviceconsumermanagementOperationsCancel](#serviceconsumermanagementoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [serviceconsumermanagementOperationsList](#serviceconsumermanagementoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## serviceconsumermanagementOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementOperationsCancelRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementOperationsCancelResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementOperationsCancelRequest req = new ServiceconsumermanagementOperationsCancelRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iusto", "excepturi");
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                }};
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            ServiceconsumermanagementOperationsCancelResponse res = sdk.operations.serviceconsumermanagementOperationsCancel(req, new ServiceconsumermanagementOperationsCancelSecurity("at", "at") {{
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

## serviceconsumermanagementOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceconsumermanagementOperationsListRequest;
import org.openapis.openapi.models.operations.ServiceconsumermanagementOperationsListResponse;
import org.openapis.openapi.models.operations.ServiceconsumermanagementOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceconsumermanagementOperationsListRequest req = new ServiceconsumermanagementOperationsListRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                filter = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                pageSize = 720633L;
                pageToken = "officia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "fugit";
                uploadProtocol = "deleniti";
            }};            

            ServiceconsumermanagementOperationsListResponse res = sdk.operations.serviceconsumermanagementOperationsList(req, new ServiceconsumermanagementOperationsListSecurity("hic", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
