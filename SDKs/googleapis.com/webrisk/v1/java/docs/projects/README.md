# projects

### Available Operations

* [webriskProjectsOperationsCancel](#webriskprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [webriskProjectsOperationsDelete](#webriskprojectsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [webriskProjectsOperationsGet](#webriskprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [webriskProjectsOperationsList](#webriskprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [webriskProjectsSubmissionsCreate](#webriskprojectssubmissionscreate) - Creates a Submission of a URI suspected of containing phishing content to be reviewed. If the result verifies the existence of malicious phishing content, the site will be added to the [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future. Only allowlisted projects can use this method during Early Access. Please reach out to Sales or your customer engineer to obtain access.

## webriskProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebriskProjectsOperationsCancelRequest;
import org.openapis.openapi.models.operations.WebriskProjectsOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebriskProjectsOperationsCancelRequest req = new WebriskProjectsOperationsCancelRequest("sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("at", "at");
                }};
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "quod";
                key = "esse";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "dolorum";
                uploadProtocol = "dicta";
            }};            

            WebriskProjectsOperationsCancelResponse res = sdk.projects.webriskProjectsOperationsCancel(req);

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webriskProjectsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebriskProjectsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.WebriskProjectsOperationsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebriskProjectsOperationsDeleteRequest req = new WebriskProjectsOperationsDeleteRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "hic";
                key = "optio";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "commodi";
                uploadProtocol = "molestiae";
            }};            

            WebriskProjectsOperationsDeleteResponse res = sdk.projects.webriskProjectsOperationsDelete(req);

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webriskProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebriskProjectsOperationsGetRequest;
import org.openapis.openapi.models.operations.WebriskProjectsOperationsGetResponse;
import org.openapis.openapi.models.operations.WebriskProjectsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebriskProjectsOperationsGetRequest req = new WebriskProjectsOperationsGetRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "ipsum";
                key = "excepturi";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "ad";
                uploadProtocol = "natus";
            }};            

            WebriskProjectsOperationsGetResponse res = sdk.projects.webriskProjectsOperationsGet(req, new WebriskProjectsOperationsGetSecurity("sed", "iste") {{
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

## webriskProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebriskProjectsOperationsListRequest;
import org.openapis.openapi.models.operations.WebriskProjectsOperationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebriskProjectsOperationsListRequest req = new WebriskProjectsOperationsListRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "fuga";
                filter = "in";
                key = "corporis";
                oauthToken = "iste";
                pageSize = 437032L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "architecto";
                uploadProtocol = "ipsa";
            }};            

            WebriskProjectsOperationsListResponse res = sdk.projects.webriskProjectsOperationsList(req);

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webriskProjectsSubmissionsCreate

Creates a Submission of a URI suspected of containing phishing content to be reviewed. If the result verifies the existence of malicious phishing content, the site will be added to the [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future. Only allowlisted projects can use this method during Early Access. Please reach out to Sales or your customer engineer to obtain access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebriskProjectsSubmissionsCreateRequest;
import org.openapis.openapi.models.operations.WebriskProjectsSubmissionsCreateResponse;
import org.openapis.openapi.models.operations.WebriskProjectsSubmissionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudWebriskV1Submission;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebriskProjectsSubmissionsCreateRequest req = new WebriskProjectsSubmissionsCreateRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudWebriskV1Submission = new GoogleCloudWebriskV1Submission() {{
                    uri = "https://questionable-clockwork.biz";
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }};            

            WebriskProjectsSubmissionsCreateResponse res = sdk.projects.webriskProjectsSubmissionsCreate(req, new WebriskProjectsSubmissionsCreateSecurity("iure", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudWebriskV1Submission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
