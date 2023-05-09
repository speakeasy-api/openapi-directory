# projects

### Available Operations

* [apigatewayProjectsLocationsGatewaysGetIamPolicy](#apigatewayprojectslocationsgatewaysgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [apigatewayProjectsLocationsGatewaysSetIamPolicy](#apigatewayprojectslocationsgatewayssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [apigatewayProjectsLocationsGatewaysTestIamPermissions](#apigatewayprojectslocationsgatewaystestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [apigatewayProjectsLocationsList](#apigatewayprojectslocationslist) - Lists information about the supported locations for this service.
* [apigatewayProjectsLocationsOperationsCancel](#apigatewayprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [apigatewayProjectsLocationsOperationsDelete](#apigatewayprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [apigatewayProjectsLocationsOperationsGet](#apigatewayprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [apigatewayProjectsLocationsOperationsList](#apigatewayprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## apigatewayProjectsLocationsGatewaysGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest req = new ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest("debitis") {{
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

            ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysGetIamPolicy(req, new ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsGatewaysSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApigatewayAuditConfig;
import org.openapis.openapi.models.shared.ApigatewayAuditLogConfig;
import org.openapis.openapi.models.shared.ApigatewayAuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.ApigatewayBinding;
import org.openapis.openapi.models.shared.ApigatewayExpr;
import org.openapis.openapi.models.shared.ApigatewayPolicy;
import org.openapis.openapi.models.shared.ApigatewaySetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest req = new ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                apigatewaySetIamPolicyRequest = new ApigatewaySetIamPolicyRequest() {{
                    policy = new ApigatewayPolicy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.ApigatewayAuditConfig[]{{
                            add(new ApigatewayAuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.ApigatewayAuditLogConfig[]{{
                                    add(new ApigatewayAuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                        }};
                                        logType = ApigatewayAuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new ApigatewayAuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quo"),
                                            add("odit"),
                                            add("at"),
                                            add("at"),
                                        }};
                                        logType = ApigatewayAuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new ApigatewayAuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quod"),
                                            add("quod"),
                                        }};
                                        logType = ApigatewayAuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "totam";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.ApigatewayBinding[]{{
                            add(new ApigatewayBinding() {{
                                condition = new ApigatewayExpr() {{
                                    description = "dolorum";
                                    expression = "dicta";
                                    location = "nam";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("fugit"),
                                    add("deleniti"),
                                    add("hic"),
                                }};
                                role = "optio";
                            }}),
                            add(new ApigatewayBinding() {{
                                condition = new ApigatewayExpr() {{
                                    description = "totam";
                                    expression = "beatae";
                                    location = "commodi";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("qui"),
                                    add("impedit"),
                                }};
                                role = "cum";
                            }}),
                            add(new ApigatewayBinding() {{
                                condition = new ApigatewayExpr() {{
                                    description = "esse";
                                    expression = "ipsum";
                                    location = "excepturi";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("ad"),
                                }};
                                role = "natus";
                            }}),
                            add(new ApigatewayBinding() {{
                                condition = new ApigatewayExpr() {{
                                    description = "sed";
                                    expression = "iste";
                                    location = "dolor";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("hic"),
                                    add("saepe"),
                                }};
                                role = "fuga";
                            }}),
                        }};
                        etag = "in";
                        version = 359508;
                    }};;
                    updateMask = "iste";
                }};;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "architecto";
                key = "ipsa";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "mollitia";
                uploadProtocol = "laborum";
            }};            

            ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysSetIamPolicy(req, new ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity("dolores", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsGatewaysTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApigatewayTestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest req = new ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                apigatewayTestIamPermissionsRequest = new ApigatewayTestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("enim"),
                        add("omnis"),
                        add("nemo"),
                        add("minima"),
                    }};
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "culpa";
                key = "doloribus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "mollitia";
                uploadProtocol = "dolorem";
            }};            

            ApigatewayProjectsLocationsGatewaysTestIamPermissionsResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysTestIamPermissions(req, new ApigatewayProjectsLocationsGatewaysTestIamPermissionsSecurity("culpa", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayTestIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsListRequest req = new ApigatewayProjectsLocationsListRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "quam";
                filter = "molestiae";
                key = "velit";
                oauthToken = "error";
                pageSize = 158969L;
                pageToken = "quis";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "laborum";
                uploadProtocol = "animi";
            }};            

            ApigatewayProjectsLocationsListResponse res = sdk.projects.apigatewayProjectsLocationsList(req, new ApigatewayProjectsLocationsListSecurity("enim", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayListLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsOperationsCancelRequest req = new ApigatewayProjectsLocationsOperationsCancelRequest("quo") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("ipsam", "id");
                    put("possimus", "aut");
                    put("quasi", "error");
                    put("temporibus", "laborum");
                }};
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vero";
                key = "nihil";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            ApigatewayProjectsLocationsOperationsCancelResponse res = sdk.projects.apigatewayProjectsLocationsOperationsCancel(req, new ApigatewayProjectsLocationsOperationsCancelSecurity("voluptate", "cum") {{
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

## apigatewayProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsOperationsDeleteRequest req = new ApigatewayProjectsLocationsOperationsDeleteRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "dicta";
                key = "corporis";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "dicta";
                uploadProtocol = "harum";
            }};            

            ApigatewayProjectsLocationsOperationsDeleteResponse res = sdk.projects.apigatewayProjectsLocationsOperationsDelete(req, new ApigatewayProjectsLocationsOperationsDeleteSecurity("enim", "accusamus") {{
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

## apigatewayProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsOperationsGetRequest req = new ApigatewayProjectsLocationsOperationsGetRequest("commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "molestias";
                key = "excepturi";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "praesentium";
                uploadProtocol = "rem";
            }};            

            ApigatewayProjectsLocationsOperationsGetResponse res = sdk.projects.apigatewayProjectsLocationsOperationsGet(req, new ApigatewayProjectsLocationsOperationsGetSecurity("voluptates", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsOperationsListRequest req = new ApigatewayProjectsLocationsOperationsListRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "enim";
                filter = "consequatur";
                key = "est";
                oauthToken = "quibusdam";
                pageSize = 131797L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "quibusdam";
                uploadProtocol = "labore";
            }};            

            ApigatewayProjectsLocationsOperationsListResponse res = sdk.projects.apigatewayProjectsLocationsOperationsList(req, new ApigatewayProjectsLocationsOperationsListSecurity("modi", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
