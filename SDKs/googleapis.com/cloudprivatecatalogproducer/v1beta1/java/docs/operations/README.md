# operations

### Available Operations

* [cloudprivatecatalogproducerOperationsCancel](#cloudprivatecatalogproduceroperationscancel) - Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.
* [cloudprivatecatalogproducerOperationsList](#cloudprivatecatalogproduceroperationslist) - Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.

## cloudprivatecatalogproducerOperationsCancel

Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerOperationsCancelRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerOperationsCancelResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerOperationsCancelRequest req = new CloudprivatecatalogproducerOperationsCancelRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("ipsa", "iure");
                }};
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "quidem";
                key = "voluptatibus";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "eos";
                uploadProtocol = "atque";
            }};            

            CloudprivatecatalogproducerOperationsCancelResponse res = sdk.operations.cloudprivatecatalogproducerOperationsCancel(req, new CloudprivatecatalogproducerOperationsCancelSecurity("sit", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogproducerOperationsList

Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerOperationsListRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerOperationsListResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogproducerOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogproducerOperationsListRequest req = new CloudprivatecatalogproducerOperationsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "voluptate";
                filter = "dolorum";
                key = "deleniti";
                name = "Terence Rau";
                oauthToken = "ipsum";
                pageSize = 456015L;
                pageToken = "id";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "eius";
                uploadProtocol = "aspernatur";
            }};            

            CloudprivatecatalogproducerOperationsListResponse res = sdk.operations.cloudprivatecatalogproducerOperationsList(req, new CloudprivatecatalogproducerOperationsListSecurity("perferendis", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
