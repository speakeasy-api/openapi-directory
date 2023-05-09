# projects

### Available Operations

* [datafusionProjectsLocationsInstancesCreate](#datafusionprojectslocationsinstancescreate) - Creates a new Data Fusion instance in the specified project and location.
* [datafusionProjectsLocationsInstancesDnsPeeringsCreate](#datafusionprojectslocationsinstancesdnspeeringscreate) - Creates DNS peering on the given resource.
* [datafusionProjectsLocationsInstancesDnsPeeringsList](#datafusionprojectslocationsinstancesdnspeeringslist) - Lists DNS peerings for a given resource.
* [datafusionProjectsLocationsInstancesGetIamPolicy](#datafusionprojectslocationsinstancesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datafusionProjectsLocationsInstancesList](#datafusionprojectslocationsinstanceslist) - Lists Data Fusion instances in the specified project and location.
* [datafusionProjectsLocationsInstancesPatch](#datafusionprojectslocationsinstancespatch) - Updates a single Data Fusion instance.
* [datafusionProjectsLocationsInstancesRestart](#datafusionprojectslocationsinstancesrestart) - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* [datafusionProjectsLocationsInstancesSetIamPolicy](#datafusionprojectslocationsinstancessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datafusionProjectsLocationsInstancesTestIamPermissions](#datafusionprojectslocationsinstancestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [datafusionProjectsLocationsList](#datafusionprojectslocationslist) - Lists information about the supported locations for this service.
* [datafusionProjectsLocationsOperationsCancel](#datafusionprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datafusionProjectsLocationsOperationsDelete](#datafusionprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datafusionProjectsLocationsOperationsGet](#datafusionprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datafusionProjectsLocationsOperationsList](#datafusionprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datafusionProjectsLocationsVersionsList](#datafusionprojectslocationsversionslist) - Lists possible versions for Data Fusion instances in the specified project and location.

## datafusionProjectsLocationsInstancesCreate

Creates a new Data Fusion instance in the specified project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CryptoKeyConfig;
import org.openapis.openapi.models.shared.EventPublishConfig;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.InstanceTypeEnum;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesCreateRequest req = new DatafusionProjectsLocationsInstancesCreateRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceInput = new InstanceInput() {{
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "maiores";
                    }};;
                    dataprocServiceAccount = "molestiae";
                    description = "quod";
                    displayName = "quod";
                    enableRbac = false;
                    enableStackdriverLogging = false;
                    enableStackdriverMonitoring = false;
                    enableZoneSeparation = false;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = false;
                        topic = "esse";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("porro", "dolorum");
                        put("dicta", "nam");
                        put("officia", "occaecati");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "fugit";
                        network = "deleniti";
                    }};;
                    options = new java.util.HashMap<String, String>() {{
                        put("optio", "totam");
                        put("beatae", "commodi");
                        put("molestiae", "modi");
                        put("qui", "impedit");
                    }};
                    privateInstance = false;
                    type = InstanceTypeEnum.ENTERPRISE;
                    version = "esse";
                    zone = "ipsum";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "ad";
                instanceId = "natus";
                key = "sed";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "natus";
                uploadProtocol = "laboriosam";
            }};            

            DatafusionProjectsLocationsInstancesCreateResponse res = sdk.projects.datafusionProjectsLocationsInstancesCreate(req, new DatafusionProjectsLocationsInstancesCreateSecurity("hic", "saepe") {{
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

## datafusionProjectsLocationsInstancesDnsPeeringsCreate

Creates DNS peering on the given resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DnsPeering;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest req = new DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                dnsPeering = new DnsPeering() {{
                    description = "corporis";
                    domain = "iste";
                    name = "Mr. Kerry Predovic";
                    targetNetwork = "est";
                    targetProject = "mollitia";
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "dolorem";
                dnsPeeringId = "corporis";
                fields = "explicabo";
                key = "nobis";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "nemo";
                uploadProtocol = "minima";
            }};            

            DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse res = sdk.projects.datafusionProjectsLocationsInstancesDnsPeeringsCreate(req, new DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity("excepturi", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.dnsPeering != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datafusionProjectsLocationsInstancesDnsPeeringsList

Lists DNS peerings for a given resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesDnsPeeringsListRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesDnsPeeringsListResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesDnsPeeringsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesDnsPeeringsListRequest req = new DatafusionProjectsLocationsInstancesDnsPeeringsListRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                pageSize = 161309L;
                pageToken = "repellat";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "occaecati";
                uploadProtocol = "numquam";
            }};            

            DatafusionProjectsLocationsInstancesDnsPeeringsListResponse res = sdk.projects.datafusionProjectsLocationsInstancesDnsPeeringsList(req, new DatafusionProjectsLocationsInstancesDnsPeeringsListSecurity("commodi", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDnsPeeringsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datafusionProjectsLocationsInstancesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesGetIamPolicyRequest req = new DatafusionProjectsLocationsInstancesGetIamPolicyRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "vitae";
                key = "laborum";
                oauthToken = "animi";
                optionsRequestedPolicyVersion = 317202L;
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quo";
                uploadProtocol = "sequi";
            }};            

            DatafusionProjectsLocationsInstancesGetIamPolicyResponse res = sdk.projects.datafusionProjectsLocationsInstancesGetIamPolicy(req, new DatafusionProjectsLocationsInstancesGetIamPolicySecurity("tenetur", "ipsam") {{
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

## datafusionProjectsLocationsInstancesList

Lists Data Fusion instances in the specified project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesListRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesListResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesListRequest req = new DatafusionProjectsLocationsInstancesListRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "temporibus";
                filter = "laborum";
                key = "quasi";
                oauthToken = "reiciendis";
                orderBy = "voluptatibus";
                pageSize = 878194L;
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "voluptatibus";
                uploadProtocol = "ipsa";
            }};            

            DatafusionProjectsLocationsInstancesListResponse res = sdk.projects.datafusionProjectsLocationsInstancesList(req, new DatafusionProjectsLocationsInstancesListSecurity("omnis", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datafusionProjectsLocationsInstancesPatch

Updates a single Data Fusion instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesPatchRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesPatchResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CryptoKeyConfig;
import org.openapis.openapi.models.shared.EventPublishConfig;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.InstanceTypeEnum;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesPatchRequest req = new DatafusionProjectsLocationsInstancesPatchRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceInput = new InstanceInput() {{
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "doloremque";
                    }};;
                    dataprocServiceAccount = "reprehenderit";
                    description = "ut";
                    displayName = "maiores";
                    enableRbac = false;
                    enableStackdriverLogging = false;
                    enableStackdriverMonitoring = false;
                    enableZoneSeparation = false;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = false;
                        topic = "dicta";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolore", "iusto");
                        put("dicta", "harum");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "enim";
                        network = "accusamus";
                    }};;
                    options = new java.util.HashMap<String, String>() {{
                        put("repudiandae", "quae");
                        put("ipsum", "quidem");
                    }};
                    privateInstance = false;
                    type = InstanceTypeEnum.ENTERPRISE;
                    version = "excepturi";
                    zone = "pariatur";
                }};;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "voluptates";
                key = "quasi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "sint";
                updateMask = "veritatis";
                uploadType = "itaque";
                uploadProtocol = "incidunt";
            }};            

            DatafusionProjectsLocationsInstancesPatchResponse res = sdk.projects.datafusionProjectsLocationsInstancesPatch(req, new DatafusionProjectsLocationsInstancesPatchSecurity("enim", "consequatur") {{
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

## datafusionProjectsLocationsInstancesRestart

Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesRestartRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesRestartResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesRestartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesRestartRequest req = new DatafusionProjectsLocationsInstancesRestartRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("deserunt", "distinctio");
                }};
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "qui";
                key = "aliquid";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            DatafusionProjectsLocationsInstancesRestartResponse res = sdk.projects.datafusionProjectsLocationsInstancesRestart(req, new DatafusionProjectsLocationsInstancesRestartSecurity("assumenda", "ipsam") {{
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

## datafusionProjectsLocationsInstancesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesSetIamPolicySecurity;
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

            DatafusionProjectsLocationsInstancesSetIamPolicyRequest req = new DatafusionProjectsLocationsInstancesSetIamPolicyRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("facilis"),
                                            add("tempore"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eum"),
                                            add("non"),
                                            add("eligendi"),
                                            add("sint"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("necessitatibus"),
                                            add("sint"),
                                            add("officia"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "debitis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("in"),
                                            add("in"),
                                            add("illum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dicta"),
                                            add("magnam"),
                                            add("cumque"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aliquid"),
                                            add("laborum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("occaecati"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "accusamus";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("provident"),
                                            add("nam"),
                                            add("id"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sapiente"),
                                            add("amet"),
                                            add("deserunt"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("natus"),
                                            add("omnis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nihil"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "distinctio";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "labore";
                                    expression = "labore";
                                    location = "suscipit";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("eum"),
                                    add("vero"),
                                    add("aspernatur"),
                                }};
                                role = "architecto";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "magnam";
                                    expression = "et";
                                    location = "excepturi";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("quos"),
                                    add("sint"),
                                    add("accusantium"),
                                }};
                                role = "mollitia";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "reiciendis";
                                    expression = "mollitia";
                                    location = "ad";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("necessitatibus"),
                                }};
                                role = "odit";
                            }}),
                        }};
                        etag = "nemo";
                        version = 97260;
                    }};;
                    updateMask = "iure";
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "maxime";
                key = "deleniti";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "architecto";
                uploadProtocol = "architecto";
            }};            

            DatafusionProjectsLocationsInstancesSetIamPolicyResponse res = sdk.projects.datafusionProjectsLocationsInstancesSetIamPolicy(req, new DatafusionProjectsLocationsInstancesSetIamPolicySecurity("repudiandae", "ullam") {{
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

## datafusionProjectsLocationsInstancesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesTestIamPermissionsRequest req = new DatafusionProjectsLocationsInstancesTestIamPermissionsRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("quibusdam"),
                        add("sed"),
                        add("saepe"),
                        add("pariatur"),
                    }};
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "natus";
                key = "magni";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "illum";
                uploadProtocol = "pariatur";
            }};            

            DatafusionProjectsLocationsInstancesTestIamPermissionsResponse res = sdk.projects.datafusionProjectsLocationsInstancesTestIamPermissions(req, new DatafusionProjectsLocationsInstancesTestIamPermissionsSecurity("maxime", "ea") {{
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

## datafusionProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsListRequest req = new DatafusionProjectsLocationsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ea";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "maiores";
                filter = "quidem";
                includeUnrevealedLocations = false;
                key = "ipsam";
                oauthToken = "voluptate";
                pageSize = 420075L;
                pageToken = "nam";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "pariatur";
                uploadProtocol = "nemo";
            }};            

            DatafusionProjectsLocationsListResponse res = sdk.projects.datafusionProjectsLocationsList(req, new DatafusionProjectsLocationsListSecurity("voluptatibus", "perferendis") {{
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

## datafusionProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsOperationsCancelRequest req = new DatafusionProjectsLocationsOperationsCancelRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("cumque", "corporis");
                }};
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "dolores";
                key = "quis";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "eaque";
                uploadProtocol = "quis";
            }};            

            DatafusionProjectsLocationsOperationsCancelResponse res = sdk.projects.datafusionProjectsLocationsOperationsCancel(req, new DatafusionProjectsLocationsOperationsCancelSecurity("nesciunt", "eos") {{
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

## datafusionProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsOperationsDeleteRequest req = new DatafusionProjectsLocationsOperationsDeleteRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "vero";
                key = "nostrum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "omnis";
                uploadProtocol = "facilis";
            }};            

            DatafusionProjectsLocationsOperationsDeleteResponse res = sdk.projects.datafusionProjectsLocationsOperationsDelete(req, new DatafusionProjectsLocationsOperationsDeleteSecurity("perspiciatis", "voluptatem") {{
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

## datafusionProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsOperationsGetRequest req = new DatafusionProjectsLocationsOperationsGetRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "occaecati";
                key = "rerum";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "earum";
                uploadProtocol = "modi";
            }};            

            DatafusionProjectsLocationsOperationsGetResponse res = sdk.projects.datafusionProjectsLocationsOperationsGet(req, new DatafusionProjectsLocationsOperationsGetSecurity("iste", "dolorum") {{
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

## datafusionProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsOperationsListRequest req = new DatafusionProjectsLocationsOperationsListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "delectus";
                filter = "quaerat";
                key = "quos";
                oauthToken = "aliquid";
                pageSize = 212390L;
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "qui";
                uploadProtocol = "ipsum";
            }};            

            DatafusionProjectsLocationsOperationsListResponse res = sdk.projects.datafusionProjectsLocationsOperationsList(req, new DatafusionProjectsLocationsOperationsListSecurity("hic", "excepturi") {{
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

## datafusionProjectsLocationsVersionsList

Lists possible versions for Data Fusion instances in the specified project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsVersionsListRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsVersionsListResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsVersionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsVersionsListRequest req = new DatafusionProjectsLocationsVersionsListRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "dolorum";
                key = "numquam";
                latestPatchOnly = false;
                oauthToken = "veritatis";
                pageSize = 58029L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "odio";
                uploadProtocol = "quaerat";
            }};            

            DatafusionProjectsLocationsVersionsListResponse res = sdk.projects.datafusionProjectsLocationsVersionsList(req, new DatafusionProjectsLocationsVersionsListSecurity("accusamus", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAvailableVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
