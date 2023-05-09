# operations

### Available Operations

* [serviceusageOperationsCancel](#serviceusageoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [serviceusageOperationsDelete](#serviceusageoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [serviceusageOperationsList](#serviceusageoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## serviceusageOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelRequest;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelResponse;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelSecurity;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageOperationsCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageOperationsCancelRequest req = new ServiceusageOperationsCancelRequest("minus") {{
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

            ServiceusageOperationsCancelResponse res = sdk.operations.serviceusageOperationsCancel(req, new ServiceusageOperationsCancelSecurity() {{
                option1 = new ServiceusageOperationsCancelSecurityOption1("at", "at") {{
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

## serviceusageOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageOperationsDeleteRequest;
import org.openapis.openapi.models.operations.ServiceusageOperationsDeleteResponse;
import org.openapis.openapi.models.operations.ServiceusageOperationsDeleteSecurity;
import org.openapis.openapi.models.operations.ServiceusageOperationsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageOperationsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageOperationsDeleteRequest req = new ServiceusageOperationsDeleteRequest("maiores") {{
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

            ServiceusageOperationsDeleteResponse res = sdk.operations.serviceusageOperationsDelete(req, new ServiceusageOperationsDeleteSecurity() {{
                option1 = new ServiceusageOperationsDeleteSecurityOption1("occaecati", "fugit") {{
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

## serviceusageOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageOperationsListRequest;
import org.openapis.openapi.models.operations.ServiceusageOperationsListResponse;
import org.openapis.openapi.models.operations.ServiceusageOperationsListSecurity;
import org.openapis.openapi.models.operations.ServiceusageOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageOperationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageOperationsListRequest req = new ServiceusageOperationsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "beatae";
                filter = "commodi";
                key = "molestiae";
                name = "Norma Ryan";
                oauthToken = "ipsum";
                pageSize = 568434L;
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "ad";
                uploadProtocol = "natus";
            }};            

            ServiceusageOperationsListResponse res = sdk.operations.serviceusageOperationsList(req, new ServiceusageOperationsListSecurity() {{
                option1 = new ServiceusageOperationsListSecurityOption1("sed", "iste") {{
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
