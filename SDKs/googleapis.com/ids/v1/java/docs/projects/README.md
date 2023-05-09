# projects

### Available Operations

* [idsProjectsLocationsEndpointsCreate](#idsprojectslocationsendpointscreate) - Creates a new Endpoint in a given project and location.
* [idsProjectsLocationsEndpointsGetIamPolicy](#idsprojectslocationsendpointsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [idsProjectsLocationsEndpointsList](#idsprojectslocationsendpointslist) - Lists Endpoints in a given project and location.
* [idsProjectsLocationsEndpointsPatch](#idsprojectslocationsendpointspatch) - Updates the parameters of a single Endpoint.
* [idsProjectsLocationsEndpointsSetIamPolicy](#idsprojectslocationsendpointssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [idsProjectsLocationsEndpointsTestIamPermissions](#idsprojectslocationsendpointstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [idsProjectsLocationsList](#idsprojectslocationslist) - Lists information about the supported locations for this service.
* [idsProjectsLocationsOperationsCancel](#idsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [idsProjectsLocationsOperationsDelete](#idsprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [idsProjectsLocationsOperationsGet](#idsprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [idsProjectsLocationsOperationsList](#idsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## idsProjectsLocationsEndpointsCreate

Creates a new Endpoint in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsCreateRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsCreateResponse;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EndpointInput;
import org.openapis.openapi.models.shared.EndpointSeverityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdsProjectsLocationsEndpointsCreateRequest req = new IdsProjectsLocationsEndpointsCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                endpointInput = new EndpointInput() {{
                    description = "repellendus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quo", "odit");
                        put("at", "at");
                        put("maiores", "molestiae");
                        put("quod", "quod");
                    }};
                    network = "esse";
                    severity = EndpointSeverityEnum.MEDIUM;
                    threatExceptions = new String[]{{
                        add("dolorum"),
                        add("dicta"),
                        add("nam"),
                        add("officia"),
                    }};
                    trafficLogs = false;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "deleniti";
                endpointId = "hic";
                fields = "optio";
                key = "totam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "commodi";
                requestId = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            IdsProjectsLocationsEndpointsCreateResponse res = sdk.projects.idsProjectsLocationsEndpointsCreate(req, new IdsProjectsLocationsEndpointsCreateSecurity("impedit", "cum") {{
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

## idsProjectsLocationsEndpointsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdsProjectsLocationsEndpointsGetIamPolicyRequest req = new IdsProjectsLocationsEndpointsGetIamPolicyRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "ad";
                key = "natus";
                oauthToken = "sed";
                optionsRequestedPolicyVersion = 612096L;
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "natus";
                uploadProtocol = "laboriosam";
            }};            

            IdsProjectsLocationsEndpointsGetIamPolicyResponse res = sdk.projects.idsProjectsLocationsEndpointsGetIamPolicy(req, new IdsProjectsLocationsEndpointsGetIamPolicySecurity("hic", "saepe") {{
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

## idsProjectsLocationsEndpointsList

Lists Endpoints in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsListRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsListResponse;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdsProjectsLocationsEndpointsListRequest req = new IdsProjectsLocationsEndpointsListRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "saepe";
                filter = "quidem";
                key = "architecto";
                oauthToken = "ipsa";
                orderBy = "reiciendis";
                pageSize = 666767L;
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "dolores";
                uploadProtocol = "dolorem";
            }};            

            IdsProjectsLocationsEndpointsListResponse res = sdk.projects.idsProjectsLocationsEndpointsList(req, new IdsProjectsLocationsEndpointsListSecurity("corporis", "explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## idsProjectsLocationsEndpointsPatch

Updates the parameters of a single Endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsPatchRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsPatchResponse;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EndpointInput;
import org.openapis.openapi.models.shared.EndpointSeverityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdsProjectsLocationsEndpointsPatchRequest req = new IdsProjectsLocationsEndpointsPatchRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                endpointInput = new EndpointInput() {{
                    description = "omnis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("minima", "excepturi");
                        put("accusantium", "iure");
                    }};
                    network = "culpa";
                    severity = EndpointSeverityEnum.CRITICAL;
                    threatExceptions = new String[]{{
                        add("architecto"),
                        add("mollitia"),
                        add("dolorem"),
                        add("culpa"),
                    }};
                    trafficLogs = false;
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "occaecati";
                key = "numquam";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "quam";
                requestId = "molestiae";
                updateMask = "velit";
                uploadType = "error";
                uploadProtocol = "quia";
            }};            

            IdsProjectsLocationsEndpointsPatchResponse res = sdk.projects.idsProjectsLocationsEndpointsPatch(req, new IdsProjectsLocationsEndpointsPatchSecurity("quis", "vitae") {{
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

## idsProjectsLocationsEndpointsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
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

            IdsProjectsLocationsEndpointsSetIamPolicyRequest req = new IdsProjectsLocationsEndpointsSetIamPolicyRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sequi"),
                                            add("tenetur"),
                                            add("ipsam"),
                                            add("id"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "aut";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("temporibus"),
                                            add("laborum"),
                                            add("quasi"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "voluptatibus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "nihil";
                                    expression = "praesentium";
                                    location = "voluptatibus";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("voluptate"),
                                    add("cum"),
                                    add("perferendis"),
                                }};
                                role = "doloremque";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "reprehenderit";
                                    expression = "ut";
                                    location = "maiores";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("dolore"),
                                    add("iusto"),
                                }};
                                role = "dicta";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "harum";
                                    expression = "enim";
                                    location = "accusamus";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("quae"),
                                    add("ipsum"),
                                    add("quidem"),
                                    add("molestias"),
                                }};
                                role = "excepturi";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "pariatur";
                                    expression = "modi";
                                    location = "praesentium";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("quasi"),
                                    add("repudiandae"),
                                    add("sint"),
                                    add("veritatis"),
                                }};
                                role = "itaque";
                            }}),
                        }};
                        etag = "incidunt";
                        version = 318569;
                    }};;
                    updateMask = "consequatur";
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "deserunt";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            IdsProjectsLocationsEndpointsSetIamPolicyResponse res = sdk.projects.idsProjectsLocationsEndpointsSetIamPolicy(req, new IdsProjectsLocationsEndpointsSetIamPolicySecurity("aliquid", "cupiditate") {{
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

## idsProjectsLocationsEndpointsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.IdsProjectsLocationsEndpointsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdsProjectsLocationsEndpointsTestIamPermissionsRequest req = new IdsProjectsLocationsEndpointsTestIamPermissionsRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("assumenda"),
                    }};
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "dolorum";
                key = "excepturi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "labore";
            }};            

            IdsProjectsLocationsEndpointsTestIamPermissionsResponse res = sdk.projects.idsProjectsLocationsEndpointsTestIamPermissions(req, new IdsProjectsLocationsEndpointsTestIamPermissionsSecurity("delectus", "eum") {{
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

## idsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdsProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.IdsProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdsProjectsLocationsListRequest req = new IdsProjectsLocationsListRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "necessitatibus";
                filter = "sint";
                key = "officia";
                oauthToken = "dolor";
                pageSize = 891555L;
                pageToken = "a";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "in";
                uploadProtocol = "in";
            }};            

            IdsProjectsLocationsListResponse res = sdk.projects.idsProjectsLocationsList(req, new IdsProjectsLocationsListSecurity("illum", "maiores") {{
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

## idsProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdsProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.IdsProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdsProjectsLocationsOperationsCancelRequest req = new IdsProjectsLocationsOperationsCancelRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("cumque", "facere");
                    put("ea", "aliquid");
                }};
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "occaecati";
                key = "enim";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "quidem";
                uploadProtocol = "provident";
            }};            

            IdsProjectsLocationsOperationsCancelResponse res = sdk.projects.idsProjectsLocationsOperationsCancel(req, new IdsProjectsLocationsOperationsCancelSecurity("nam", "id") {{
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

## idsProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdsProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.IdsProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdsProjectsLocationsOperationsDeleteRequest req = new IdsProjectsLocationsOperationsDeleteRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "nisi";
                key = "vel";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "omnis";
                requestId = "molestiae";
                uploadType = "perferendis";
                uploadProtocol = "nihil";
            }};            

            IdsProjectsLocationsOperationsDeleteResponse res = sdk.projects.idsProjectsLocationsOperationsDelete(req, new IdsProjectsLocationsOperationsDeleteSecurity("magnam", "distinctio") {{
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

## idsProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdsProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.IdsProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdsProjectsLocationsOperationsGetRequest req = new IdsProjectsLocationsOperationsGetRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "nobis";
                key = "eum";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "architecto";
                uploadProtocol = "magnam";
            }};            

            IdsProjectsLocationsOperationsGetResponse res = sdk.projects.idsProjectsLocationsOperationsGet(req, new IdsProjectsLocationsOperationsGetSecurity("et", "excepturi") {{
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

## idsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdsProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.IdsProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.IdsProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdsProjectsLocationsOperationsListRequest req = new IdsProjectsLocationsOperationsListRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "mollitia";
                filter = "reiciendis";
                key = "mollitia";
                oauthToken = "ad";
                pageSize = 431418L;
                pageToken = "dolor";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "odit";
                uploadProtocol = "nemo";
            }};            

            IdsProjectsLocationsOperationsListResponse res = sdk.projects.idsProjectsLocationsOperationsList(req, new IdsProjectsLocationsOperationsListSecurity("quasi", "iure") {{
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
