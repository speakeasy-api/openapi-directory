# organizations

### Available Operations

* [securitycenterOrganizationsOperationsCancel](#securitycenterorganizationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [securitycenterOrganizationsOperationsDelete](#securitycenterorganizationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [securitycenterOrganizationsOperationsList](#securitycenterorganizationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## securitycenterOrganizationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsOperationsCancelRequest req = new SecuritycenterOrganizationsOperationsCancelRequest("magnam") {{
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

            SecuritycenterOrganizationsOperationsCancelResponse res = sdk.organizations.securitycenterOrganizationsOperationsCancel(req, new SecuritycenterOrganizationsOperationsCancelSecurity("excepturi", "nisi") {{
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

## securitycenterOrganizationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsOperationsDeleteRequest req = new SecuritycenterOrganizationsOperationsDeleteRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "sapiente";
                uploadProtocol = "quo";
            }};            

            SecuritycenterOrganizationsOperationsDeleteResponse res = sdk.organizations.securitycenterOrganizationsOperationsDelete(req, new SecuritycenterOrganizationsOperationsDeleteSecurity("odit", "at") {{
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

## securitycenterOrganizationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsListRequest;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsListResponse;
import org.openapis.openapi.models.operations.SecuritycenterOrganizationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterOrganizationsOperationsListRequest req = new SecuritycenterOrganizationsOperationsListRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "esse";
                filter = "totam";
                key = "porro";
                oauthToken = "dolorum";
                pageSize = 118274L;
                pageToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "occaecati";
                uploadProtocol = "fugit";
            }};            

            SecuritycenterOrganizationsOperationsListResponse res = sdk.organizations.securitycenterOrganizationsOperationsList(req, new SecuritycenterOrganizationsOperationsListSecurity("deleniti", "hic") {{
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
