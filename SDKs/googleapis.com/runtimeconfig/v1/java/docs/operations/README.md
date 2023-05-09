# operations

### Available Operations

* [runtimeconfigOperationsCancel](#runtimeconfigoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [runtimeconfigOperationsDelete](#runtimeconfigoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [runtimeconfigOperationsList](#runtimeconfigoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## runtimeconfigOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelRequest;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelResponse;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigOperationsCancelRequest req = new RuntimeconfigOperationsCancelRequest("minus") {{
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

            RuntimeconfigOperationsCancelResponse res = sdk.operations.runtimeconfigOperationsCancel(req, new RuntimeconfigOperationsCancelSecurity() {{
                option1 = new RuntimeconfigOperationsCancelSecurityOption1("at", "at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## runtimeconfigOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsDeleteRequest;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsDeleteResponse;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsDeleteSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigOperationsDeleteRequest req = new RuntimeconfigOperationsDeleteRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                key = "porro";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "nam";
                uploadProtocol = "officia";
            }};            

            RuntimeconfigOperationsDeleteResponse res = sdk.operations.runtimeconfigOperationsDelete(req, new RuntimeconfigOperationsDeleteSecurity() {{
                option1 = new RuntimeconfigOperationsDeleteSecurityOption1("occaecati", "fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## runtimeconfigOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsListRequest;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsListResponse;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsListSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigOperationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigOperationsListRequest req = new RuntimeconfigOperationsListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                filter = "molestiae";
                key = "modi";
                oauthToken = "qui";
                pageSize = 774234L;
                pageToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            RuntimeconfigOperationsListResponse res = sdk.operations.runtimeconfigOperationsList(req, new RuntimeconfigOperationsListSecurity() {{
                option1 = new RuntimeconfigOperationsListSecurityOption1("aspernatur", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
