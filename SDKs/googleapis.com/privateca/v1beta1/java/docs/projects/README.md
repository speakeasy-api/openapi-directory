# projects

### Available Operations

* [privatecaProjectsLocationsList](#privatecaprojectslocationslist) - Lists information about the supported locations for this service.
* [privatecaProjectsLocationsOperationsCancel](#privatecaprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [privatecaProjectsLocationsOperationsDelete](#privatecaprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [privatecaProjectsLocationsOperationsGet](#privatecaprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [privatecaProjectsLocationsOperationsList](#privatecaprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [privatecaProjectsLocationsReusableConfigsGetIamPolicy](#privatecaprojectslocationsreusableconfigsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [privatecaProjectsLocationsReusableConfigsSetIamPolicy](#privatecaprojectslocationsreusableconfigssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [privatecaProjectsLocationsReusableConfigsTestIamPermissions](#privatecaprojectslocationsreusableconfigstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## privatecaProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsListRequest req = new PrivatecaProjectsLocationsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            PrivatecaProjectsLocationsListResponse res = sdk.projects.privatecaProjectsLocationsList(req, new PrivatecaProjectsLocationsListSecurity("veritatis", "deserunt") {{
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

## privatecaProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsOperationsCancelRequest req = new PrivatecaProjectsLocationsOperationsCancelRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sapiente", "quo");
                    put("odit", "at");
                    put("at", "maiores");
                    put("molestiae", "quod");
                }};
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

            PrivatecaProjectsLocationsOperationsCancelResponse res = sdk.projects.privatecaProjectsLocationsOperationsCancel(req, new PrivatecaProjectsLocationsOperationsCancelSecurity("fugit", "deleniti") {{
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

## privatecaProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsOperationsDeleteRequest req = new PrivatecaProjectsLocationsOperationsDeleteRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "molestiae";
                key = "modi";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "cum";
                uploadProtocol = "esse";
            }};            

            PrivatecaProjectsLocationsOperationsDeleteResponse res = sdk.projects.privatecaProjectsLocationsOperationsDelete(req, new PrivatecaProjectsLocationsOperationsDeleteSecurity("ipsum", "excepturi") {{
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

## privatecaProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsOperationsGetRequest req = new PrivatecaProjectsLocationsOperationsGetRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "iste";
                key = "dolor";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "hic";
                uploadProtocol = "saepe";
            }};            

            PrivatecaProjectsLocationsOperationsGetResponse res = sdk.projects.privatecaProjectsLocationsOperationsGet(req, new PrivatecaProjectsLocationsOperationsGetSecurity("fuga", "in") {{
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

## privatecaProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsOperationsListRequest req = new PrivatecaProjectsLocationsOperationsListRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "architecto";
                filter = "ipsa";
                key = "reiciendis";
                oauthToken = "est";
                pageSize = 653140L;
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "dolorem";
                uploadProtocol = "corporis";
            }};            

            PrivatecaProjectsLocationsOperationsListResponse res = sdk.projects.privatecaProjectsLocationsOperationsList(req, new PrivatecaProjectsLocationsOperationsListSecurity("explicabo", "nobis") {{
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

## privatecaProjectsLocationsReusableConfigsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest req = new PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "accusantium";
                key = "iure";
                oauthToken = "culpa";
                optionsRequestedPolicyVersion = 988374L;
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "architecto";
                uploadProtocol = "mollitia";
            }};            

            PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse res = sdk.projects.privatecaProjectsLocationsReusableConfigsGetIamPolicy(req, new PrivatecaProjectsLocationsReusableConfigsGetIamPolicySecurity("dolorem", "culpa") {{
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

## privatecaProjectsLocationsReusableConfigsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity;
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

            PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest req = new PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("commodi"),
                                            add("quam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("error"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("vitae"),
                                            add("laborum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "enim";
                            }}),
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

            PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse res = sdk.projects.privatecaProjectsLocationsReusableConfigsSetIamPolicy(req, new PrivatecaProjectsLocationsReusableConfigsSetIamPolicySecurity("aliquid", "cupiditate") {{
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

## privatecaProjectsLocationsReusableConfigsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsRequest req = new PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsRequest("quos") {{
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

            PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsResponse res = sdk.projects.privatecaProjectsLocationsReusableConfigsTestIamPermissions(req, new PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsSecurity("delectus", "eum") {{
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
