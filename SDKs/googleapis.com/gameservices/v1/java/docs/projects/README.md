# projects

### Available Operations

* [gameservicesProjectsLocationsGameServerDeploymentsGetIamPolicy](#gameservicesprojectslocationsgameserverdeploymentsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gameservicesProjectsLocationsGameServerDeploymentsSetIamPolicy](#gameservicesprojectslocationsgameserverdeploymentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gameservicesProjectsLocationsGameServerDeploymentsTestIamPermissions](#gameservicesprojectslocationsgameserverdeploymentstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gameservicesProjectsLocationsList](#gameservicesprojectslocationslist) - Lists information about the supported locations for this service.
* [gameservicesProjectsLocationsOperationsCancel](#gameservicesprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gameservicesProjectsLocationsOperationsDelete](#gameservicesprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [gameservicesProjectsLocationsOperationsGet](#gameservicesprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [gameservicesProjectsLocationsOperationsList](#gameservicesprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## gameservicesProjectsLocationsGameServerDeploymentsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest req = new GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest("debitis") {{
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

            GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyResponse res = sdk.projects.gameservicesProjectsLocationsGameServerDeploymentsGetIamPolicy(req, new GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity("recusandae", "temporibus") {{
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

## gameservicesProjectsLocationsGameServerDeploymentsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptions;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptionsPermissionTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.CloudAuditOptions;
import org.openapis.openapi.models.shared.CloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionIamEnum;
import org.openapis.openapi.models.shared.ConditionOpEnum;
import org.openapis.openapi.models.shared.ConditionSysEnum;
import org.openapis.openapi.models.shared.CounterOptions;
import org.openapis.openapi.models.shared.CustomField;
import org.openapis.openapi.models.shared.DataAccessOptions;
import org.openapis.openapi.models.shared.DataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest req = new GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quo"),
                                            add("odit"),
                                            add("at"),
                                            add("at"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quod"),
                                            add("quod"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "totam";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "dolorum";
                                condition = new Expr() {{
                                    description = "dicta";
                                    expression = "nam";
                                    location = "officia";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("deleniti"),
                                }};
                                role = "hic";
                            }}),
                            add(new Binding() {{
                                bindingId = "optio";
                                condition = new Expr() {{
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
                            add(new Binding() {{
                                bindingId = "esse";
                                condition = new Expr() {{
                                    description = "ipsum";
                                    expression = "excepturi";
                                    location = "aspernatur";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("natus"),
                                    add("sed"),
                                }};
                                role = "iste";
                            }}),
                            add(new Binding() {{
                                bindingId = "dolor";
                                condition = new Expr() {{
                                    description = "natus";
                                    expression = "laboriosam";
                                    location = "hic";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("in"),
                                    add("corporis"),
                                    add("iste"),
                                }};
                                role = "iure";
                            }}),
                        }};
                        etag = "saepe";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "mollitia";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("dolorem"),
                                        }};
                                    }}),
                                }};
                                description = "corporis";
                                in = new String[]{{
                                    add("nobis"),
                                }};
                                logConfig = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new CloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = CloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new CounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                                add(new CustomField() {{
                                                    name = "Brian Kessler";
                                                    value = "sapiente";
                                                }}),
                                                add(new CustomField() {{
                                                    name = "Angie Durgan";
                                                    value = "repellat";
                                                }}),
                                            }};
                                            field = "mollitia";
                                            metric = "occaecati";
                                        }};
                                        dataAccess = new DataAccessOptions() {{
                                            logMode = DataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new CloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = CloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new CounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                                add(new CustomField() {{
                                                    name = "Sabrina Cronin MD";
                                                    value = "animi";
                                                }}),
                                                add(new CustomField() {{
                                                    name = "Christina Satterfield";
                                                    value = "ipsam";
                                                }}),
                                            }};
                                            field = "id";
                                            metric = "possimus";
                                        }};
                                        dataAccess = new DataAccessOptions() {{
                                            logMode = DataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIn = new String[]{{
                                    add("error"),
                                }};
                                permissions = new String[]{{
                                    add("laborum"),
                                    add("quasi"),
                                    add("reiciendis"),
                                    add("voluptatibus"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "ipsa";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("cum"),
                                            add("perferendis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "ut";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("corporis"),
                                        }};
                                    }}),
                                }};
                                description = "dolore";
                                in = new String[]{{
                                    add("dicta"),
                                    add("harum"),
                                }};
                                logConfig = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new CloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = CloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new CounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                                add(new CustomField() {{
                                                    name = "Edna Pouros";
                                                    value = "pariatur";
                                                }}),
                                                add(new CustomField() {{
                                                    name = "Irma Ledner DVM";
                                                    value = "sint";
                                                }}),
                                                add(new CustomField() {{
                                                    name = "Patti Gottlieb MD";
                                                    value = "quibusdam";
                                                }}),
                                                add(new CustomField() {{
                                                    name = "Joanna Rau";
                                                    value = "modi";
                                                }}),
                                            }};
                                            field = "qui";
                                            metric = "aliquid";
                                        }};
                                        dataAccess = new DataAccessOptions() {{
                                            logMode = DataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new CloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = CloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new CounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                                add(new CustomField() {{
                                                    name = "Vernon Abshire";
                                                    value = "excepturi";
                                                }}),
                                            }};
                                            field = "tempora";
                                            metric = "facilis";
                                        }};
                                        dataAccess = new DataAccessOptions() {{
                                            logMode = DataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIn = new String[]{{
                                    add("delectus"),
                                    add("eum"),
                                }};
                                permissions = new String[]{{
                                    add("eligendi"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "sint";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("debitis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "in";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("maiores"),
                                            add("rerum"),
                                            add("dicta"),
                                            add("magnam"),
                                        }};
                                    }}),
                                }};
                                description = "cumque";
                                in = new String[]{{
                                    add("ea"),
                                    add("aliquid"),
                                    add("laborum"),
                                    add("accusamus"),
                                }};
                                logConfig = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new CloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = CloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new CounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.CustomField[]{{
                                                add(new CustomField() {{
                                                    name = "Abraham McKenzie";
                                                    value = "blanditiis";
                                                }}),
                                                add(new CustomField() {{
                                                    name = "Timmy Feeney";
                                                    value = "vel";
                                                }}),
                                                add(new CustomField() {{
                                                    name = "Ms. Arturo Krajcik";
                                                    value = "distinctio";
                                                }}),
                                                add(new CustomField() {{
                                                    name = "Leroy Greenfelder";
                                                    value = "nobis";
                                                }}),
                                            }};
                                            field = "eum";
                                            metric = "vero";
                                        }};
                                        dataAccess = new DataAccessOptions() {{
                                            logMode = DataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIn = new String[]{{
                                    add("magnam"),
                                }};
                                permissions = new String[]{{
                                    add("excepturi"),
                                }};
                            }}),
                        }};
                        version = 354047;
                    }};;
                    updateMask = "provident";
                }};;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "mollitia";
                key = "reiciendis";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "eum";
                uploadProtocol = "dolor";
            }};            

            GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyResponse res = sdk.projects.gameservicesProjectsLocationsGameServerDeploymentsSetIamPolicy(req, new GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity("necessitatibus", "odit") {{
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

## gameservicesProjectsLocationsGameServerDeploymentsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest req = new GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("doloribus"),
                        add("debitis"),
                    }};
                }};;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "facilis";
                key = "in";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "repudiandae";
                uploadProtocol = "ullam";
            }};            

            GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsResponse res = sdk.projects.gameservicesProjectsLocationsGameServerDeploymentsTestIamPermissions(req, new GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity("expedita", "nihil") {{
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

## gameservicesProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GameservicesProjectsLocationsListRequest req = new GameservicesProjectsLocationsListRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "accusantium";
                filter = "consequuntur";
                includeUnrevealedLocations = false;
                key = "praesentium";
                oauthToken = "natus";
                pageSize = 166847L;
                pageToken = "sunt";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "illum";
                uploadProtocol = "pariatur";
            }};            

            GameservicesProjectsLocationsListResponse res = sdk.projects.gameservicesProjectsLocationsList(req, new GameservicesProjectsLocationsListSecurity("maxime", "ea") {{
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

## gameservicesProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GameservicesProjectsLocationsOperationsCancelRequest req = new GameservicesProjectsLocationsOperationsCancelRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("accusantium", "ab");
                    put("maiores", "quidem");
                }};
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "nam";
                key = "eaque";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "voluptatibus";
                uploadProtocol = "perferendis";
            }};            

            GameservicesProjectsLocationsOperationsCancelResponse res = sdk.projects.gameservicesProjectsLocationsOperationsCancel(req, new GameservicesProjectsLocationsOperationsCancelSecurity("fugiat", "amet") {{
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

## gameservicesProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GameservicesProjectsLocationsOperationsDeleteRequest req = new GameservicesProjectsLocationsOperationsDeleteRequest("aut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "nobis";
                key = "dolores";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "dignissimos";
                uploadProtocol = "eaque";
            }};            

            GameservicesProjectsLocationsOperationsDeleteResponse res = sdk.projects.gameservicesProjectsLocationsOperationsDelete(req, new GameservicesProjectsLocationsOperationsDeleteSecurity("quis", "nesciunt") {{
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

## gameservicesProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GameservicesProjectsLocationsOperationsGetRequest req = new GameservicesProjectsLocationsOperationsGetRequest("eos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "quam";
                fields = "dolor";
                key = "vero";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "recusandae";
                uploadProtocol = "omnis";
            }};            

            GameservicesProjectsLocationsOperationsGetResponse res = sdk.projects.gameservicesProjectsLocationsOperationsGet(req, new GameservicesProjectsLocationsOperationsGetSecurity("facilis", "perspiciatis") {{
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

## gameservicesProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.GameservicesProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GameservicesProjectsLocationsOperationsListRequest req = new GameservicesProjectsLocationsOperationsListRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "eaque";
                filter = "occaecati";
                key = "rerum";
                oauthToken = "adipisci";
                pageSize = 992397L;
                pageToken = "earum";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "iste";
                uploadProtocol = "dolorum";
            }};            

            GameservicesProjectsLocationsOperationsListResponse res = sdk.projects.gameservicesProjectsLocationsOperationsList(req, new GameservicesProjectsLocationsOperationsListSecurity("deleniti", "pariatur") {{
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
