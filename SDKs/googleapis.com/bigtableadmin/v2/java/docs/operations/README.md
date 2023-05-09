# operations

### Available Operations

* [bigtableadminOperationsCancel](#bigtableadminoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [bigtableadminOperationsProjectsOperationsList](#bigtableadminoperationsprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## bigtableadminOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelRequest;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelResponse;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurity;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminOperationsCancelSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminOperationsCancelRequest req = new BigtableadminOperationsCancelRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            BigtableadminOperationsCancelResponse res = sdk.operations.bigtableadminOperationsCancel(req, new BigtableadminOperationsCancelSecurity() {{
                option1 = new BigtableadminOperationsCancelSecurityOption1("excepturi", "nisi") {{
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

## bigtableadminOperationsProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigtableadminOperationsProjectsOperationsListRequest;
import org.openapis.openapi.models.operations.BigtableadminOperationsProjectsOperationsListResponse;
import org.openapis.openapi.models.operations.BigtableadminOperationsProjectsOperationsListSecurity;
import org.openapis.openapi.models.operations.BigtableadminOperationsProjectsOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.BigtableadminOperationsProjectsOperationsListSecurityOption2;
import org.openapis.openapi.models.operations.BigtableadminOperationsProjectsOperationsListSecurityOption3;
import org.openapis.openapi.models.operations.BigtableadminOperationsProjectsOperationsListSecurityOption4;
import org.openapis.openapi.models.operations.BigtableadminOperationsProjectsOperationsListSecurityOption5;
import org.openapis.openapi.models.operations.BigtableadminOperationsProjectsOperationsListSecurityOption6;
import org.openapis.openapi.models.operations.BigtableadminOperationsProjectsOperationsListSecurityOption7;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigtableadminOperationsProjectsOperationsListRequest req = new BigtableadminOperationsProjectsOperationsListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                filter = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                pageSize = 957156L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            BigtableadminOperationsProjectsOperationsListResponse res = sdk.operations.bigtableadminOperationsProjectsOperationsList(req, new BigtableadminOperationsProjectsOperationsListSecurity() {{
                option1 = new BigtableadminOperationsProjectsOperationsListSecurityOption1("maiores", "molestiae") {{
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
