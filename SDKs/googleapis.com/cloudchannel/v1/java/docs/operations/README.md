# operations

### Available Operations

* [cloudchannelOperationsCancel](#cloudchanneloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [cloudchannelOperationsDelete](#cloudchanneloperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [cloudchannelOperationsList](#cloudchanneloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## cloudchannelOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelOperationsCancelRequest;
import org.openapis.openapi.models.operations.CloudchannelOperationsCancelResponse;
import org.openapis.openapi.models.operations.CloudchannelOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelOperationsCancelRequest req = new CloudchannelOperationsCancelRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("laboriosam", "alias");
                    put("amet", "deserunt");
                    put("voluptate", "unde");
                    put("reiciendis", "provident");
                }};
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "voluptates";
                fields = "perferendis";
                key = "est";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "facere";
                uploadProtocol = "fuga";
            }};            

            CloudchannelOperationsCancelResponse res = sdk.operations.cloudchannelOperationsCancel(req, new CloudchannelOperationsCancelSecurity("praesentium", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelOperationsDeleteRequest;
import org.openapis.openapi.models.operations.CloudchannelOperationsDeleteResponse;
import org.openapis.openapi.models.operations.CloudchannelOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelOperationsDeleteRequest req = new CloudchannelOperationsDeleteRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "atque";
                key = "reprehenderit";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "suscipit";
                uploadProtocol = "quidem";
            }};            

            CloudchannelOperationsDeleteResponse res = sdk.operations.cloudchannelOperationsDelete(req, new CloudchannelOperationsDeleteSecurity("maxime", "et") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudchannelOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudchannelOperationsListFilterEnum;
import org.openapis.openapi.models.operations.CloudchannelOperationsListRequest;
import org.openapis.openapi.models.operations.CloudchannelOperationsListResponse;
import org.openapis.openapi.models.operations.CloudchannelOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudchannelOperationsListRequest req = new CloudchannelOperationsListRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "error";
                filter = CloudchannelOperationsListFilterEnum.FULL;
                key = "officiis";
                oauthToken = "accusamus";
                pageSize = 618826L;
                pageToken = "minima";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "ex";
                uploadProtocol = "maiores";
            }};            

            CloudchannelOperationsListResponse res = sdk.operations.cloudchannelOperationsList(req, new CloudchannelOperationsListSecurity("corrupti", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
