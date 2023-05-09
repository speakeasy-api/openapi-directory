# projects

### Available Operations

* [videointelligenceProjectsLocationsOperationsCancel](#videointelligenceprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [videointelligenceProjectsLocationsOperationsDelete](#videointelligenceprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [videointelligenceProjectsLocationsOperationsGet](#videointelligenceprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [videointelligenceProjectsLocationsOperationsList](#videointelligenceprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## videointelligenceProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VideointelligenceProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.VideointelligenceProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.VideointelligenceProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VideointelligenceProjectsLocationsOperationsCancelRequest req = new VideointelligenceProjectsLocationsOperationsCancelRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("optio", "totam");
                    put("beatae", "commodi");
                    put("molestiae", "modi");
                    put("qui", "impedit");
                }};
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "excepturi";
                key = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "natus";
                uploadProtocol = "sed";
            }};            

            VideointelligenceProjectsLocationsOperationsCancelResponse res = sdk.projects.videointelligenceProjectsLocationsOperationsCancel(req, new VideointelligenceProjectsLocationsOperationsCancelSecurity("iste", "dolor") {{
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

## videointelligenceProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VideointelligenceProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.VideointelligenceProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.VideointelligenceProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VideointelligenceProjectsLocationsOperationsDeleteRequest req = new VideointelligenceProjectsLocationsOperationsDeleteRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "in";
                key = "corporis";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "saepe";
                uploadProtocol = "quidem";
            }};            

            VideointelligenceProjectsLocationsOperationsDeleteResponse res = sdk.projects.videointelligenceProjectsLocationsOperationsDelete(req, new VideointelligenceProjectsLocationsOperationsDeleteSecurity("architecto", "ipsa") {{
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

## videointelligenceProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VideointelligenceProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.VideointelligenceProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.VideointelligenceProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VideointelligenceProjectsLocationsOperationsGetRequest req = new VideointelligenceProjectsLocationsOperationsGetRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "dolorem";
                key = "corporis";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "enim";
                uploadProtocol = "omnis";
            }};            

            VideointelligenceProjectsLocationsOperationsGetResponse res = sdk.projects.videointelligenceProjectsLocationsOperationsGet(req, new VideointelligenceProjectsLocationsOperationsGetSecurity("nemo", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## videointelligenceProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VideointelligenceProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.VideointelligenceProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.VideointelligenceProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VideointelligenceProjectsLocationsOperationsListRequest req = new VideointelligenceProjectsLocationsOperationsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "sapiente";
                filter = "architecto";
                key = "mollitia";
                oauthToken = "dolorem";
                pageSize = 635059L;
                pageToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "mollitia";
                uploadProtocol = "occaecati";
            }};            

            VideointelligenceProjectsLocationsOperationsListResponse res = sdk.projects.videointelligenceProjectsLocationsOperationsList(req, new VideointelligenceProjectsLocationsOperationsListSecurity("numquam", "commodi") {{
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
