# operations

### Available Operations

* [vaultOperationsCancel](#vaultoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [vaultOperationsDelete](#vaultoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [vaultOperationsList](#vaultoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## vaultOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultOperationsCancelRequest;
import org.openapis.openapi.models.operations.VaultOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultOperationsCancelRequest req = new VaultOperationsCancelRequest("veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nam", "vero");
                    put("aliquid", "quasi");
                    put("saepe", "vel");
                    put("harum", "molestiae");
                }};
                accessToken = "rerum";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "distinctio";
                key = "eligendi";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "tempore";
                uploadProtocol = "adipisci";
            }};            

            VaultOperationsCancelResponse res = sdk.operations.vaultOperationsCancel(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultOperationsDeleteRequest;
import org.openapis.openapi.models.operations.VaultOperationsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultOperationsDeleteRequest req = new VaultOperationsDeleteRequest("cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "sapiente";
                key = "consectetur";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "provident";
                uploadProtocol = "a";
            }};            

            VaultOperationsDeleteResponse res = sdk.operations.vaultOperationsDelete(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vaultOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VaultOperationsListRequest;
import org.openapis.openapi.models.operations.VaultOperationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VaultOperationsListRequest req = new VaultOperationsListRequest("nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "a";
                fields = "error";
                filter = "sint";
                key = "pariatur";
                oauthToken = "possimus";
                pageSize = 157632L;
                pageToken = "eveniet";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "facere";
                uploadProtocol = "veritatis";
            }};            

            VaultOperationsListResponse res = sdk.operations.vaultOperationsList(req);

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
