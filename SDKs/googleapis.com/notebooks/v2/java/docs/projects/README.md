# projects

### Available Operations

* [notebooksProjectsLocationsInstancesGetIamPolicy](#notebooksprojectslocationsinstancesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [notebooksProjectsLocationsInstancesSetIamPolicy](#notebooksprojectslocationsinstancessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [notebooksProjectsLocationsInstancesTestIamPermissions](#notebooksprojectslocationsinstancestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [notebooksProjectsLocationsList](#notebooksprojectslocationslist) - Lists information about the supported locations for this service.
* [notebooksProjectsLocationsOperationsCancel](#notebooksprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [notebooksProjectsLocationsOperationsDelete](#notebooksprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [notebooksProjectsLocationsOperationsGet](#notebooksprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [notebooksProjectsLocationsOperationsList](#notebooksprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## notebooksProjectsLocationsInstancesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesGetIamPolicyRequest req = new NotebooksProjectsLocationsInstancesGetIamPolicyRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                key = "minus";
                oauthToken = "placeat";
                optionsRequestedPolicyVersion = 528895L;
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            NotebooksProjectsLocationsInstancesGetIamPolicyResponse res = sdk.projects.notebooksProjectsLocationsInstancesGetIamPolicy(req, new NotebooksProjectsLocationsInstancesGetIamPolicySecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsInstancesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesSetIamPolicyRequest req = new NotebooksProjectsLocationsInstancesSetIamPolicyRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "deserunt";
                                    expression = "perferendis";
                                    location = "ipsam";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("quo"),
                                    add("odit"),
                                    add("at"),
                                    add("at"),
                                }};
                                role = "maiores";
                            }}),
                        }};
                        etag = "molestiae";
                        version = 799159;
                    }};;
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            NotebooksProjectsLocationsInstancesSetIamPolicyResponse res = sdk.projects.notebooksProjectsLocationsInstancesSetIamPolicy(req, new NotebooksProjectsLocationsInstancesSetIamPolicySecurity("fugit", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsInstancesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsInstancesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsInstancesTestIamPermissionsRequest req = new NotebooksProjectsLocationsInstancesTestIamPermissionsRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("beatae"),
                        add("commodi"),
                        add("molestiae"),
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            NotebooksProjectsLocationsInstancesTestIamPermissionsResponse res = sdk.projects.notebooksProjectsLocationsInstancesTestIamPermissions(req, new NotebooksProjectsLocationsInstancesTestIamPermissionsSecurity("ad", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsListRequest req = new NotebooksProjectsLocationsListRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                fields = "hic";
                filter = "saepe";
                key = "fuga";
                oauthToken = "in";
                pageSize = 359508L;
                pageToken = "iste";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "saepe";
                uploadProtocol = "quidem";
            }};            

            NotebooksProjectsLocationsListResponse res = sdk.projects.notebooksProjectsLocationsList(req, new NotebooksProjectsLocationsListSecurity("architecto", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsOperationsCancelRequest req = new NotebooksProjectsLocationsOperationsCancelRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("laborum", "dolores");
                    put("dolorem", "corporis");
                    put("explicabo", "nobis");
                }};
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "minima";
                key = "excepturi";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "culpa";
                uploadProtocol = "doloribus";
            }};            

            NotebooksProjectsLocationsOperationsCancelResponse res = sdk.projects.notebooksProjectsLocationsOperationsCancel(req, new NotebooksProjectsLocationsOperationsCancelSecurity("sapiente", "architecto") {{
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

## notebooksProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsOperationsDeleteRequest req = new NotebooksProjectsLocationsOperationsDeleteRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "mollitia";
                key = "occaecati";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "quam";
                uploadProtocol = "molestiae";
            }};            

            NotebooksProjectsLocationsOperationsDeleteResponse res = sdk.projects.notebooksProjectsLocationsOperationsDelete(req, new NotebooksProjectsLocationsOperationsDeleteSecurity("velit", "error") {{
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

## notebooksProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsOperationsGetRequest req = new NotebooksProjectsLocationsOperationsGetRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "animi";
                fields = "enim";
                key = "odit";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "tenetur";
                uploadProtocol = "ipsam";
            }};            

            NotebooksProjectsLocationsOperationsGetResponse res = sdk.projects.notebooksProjectsLocationsOperationsGet(req, new NotebooksProjectsLocationsOperationsGetSecurity("id", "possimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notebooksProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.NotebooksProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotebooksProjectsLocationsOperationsListRequest req = new NotebooksProjectsLocationsOperationsListRequest("aut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "quasi";
                filter = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                pageSize = 468651L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            NotebooksProjectsLocationsOperationsListResponse res = sdk.projects.notebooksProjectsLocationsOperationsList(req, new NotebooksProjectsLocationsOperationsListSecurity("voluptate", "cum") {{
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
