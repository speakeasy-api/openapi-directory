# projects

### Available Operations

* [datafusionProjectsLocationsInstancesCreate](#datafusionprojectslocationsinstancescreate) - Creates a new Data Fusion instance in the specified project and location.
* [datafusionProjectsLocationsInstancesDnsPeeringsCreate](#datafusionprojectslocationsinstancesdnspeeringscreate) - Creates DNS peering on the given resource.
* [datafusionProjectsLocationsInstancesDnsPeeringsList](#datafusionprojectslocationsinstancesdnspeeringslist) - Lists DNS peerings for a given resource.
* [datafusionProjectsLocationsInstancesList](#datafusionprojectslocationsinstanceslist) - Lists Data Fusion instances in the specified project and location.
* [datafusionProjectsLocationsInstancesNamespacesGetIamPolicy](#datafusionprojectslocationsinstancesnamespacesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datafusionProjectsLocationsInstancesNamespacesList](#datafusionprojectslocationsinstancesnamespaceslist) - List namespaces in a given instance
* [datafusionProjectsLocationsInstancesNamespacesSetIamPolicy](#datafusionprojectslocationsinstancesnamespacessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datafusionProjectsLocationsInstancesNamespacesTestIamPermissions](#datafusionprojectslocationsinstancesnamespacestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [datafusionProjectsLocationsInstancesPatch](#datafusionprojectslocationsinstancespatch) - Updates a single Data Fusion instance.
* [datafusionProjectsLocationsInstancesRestart](#datafusionprojectslocationsinstancesrestart) - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* [datafusionProjectsLocationsInstancesUpgrade](#datafusionprojectslocationsinstancesupgrade) - Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.
* [datafusionProjectsLocationsList](#datafusionprojectslocationslist) - Lists information about the supported locations for this service.
* [datafusionProjectsLocationsOperationsCancel](#datafusionprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datafusionProjectsLocationsOperationsDelete](#datafusionprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datafusionProjectsLocationsOperationsGet](#datafusionprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datafusionProjectsLocationsOperationsList](#datafusionprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datafusionProjectsLocationsRemoveIamPolicy](#datafusionprojectslocationsremoveiampolicy) - Remove IAM policy that is currently set on the given resource.
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

            DatafusionProjectsLocationsInstancesListRequest req = new DatafusionProjectsLocationsInstancesListRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "vitae";
                filter = "laborum";
                key = "animi";
                oauthToken = "enim";
                orderBy = "odit";
                pageSize = 778346L;
                pageToken = "sequi";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "ipsam";
                uploadProtocol = "id";
            }};            

            DatafusionProjectsLocationsInstancesListResponse res = sdk.projects.datafusionProjectsLocationsInstancesList(req, new DatafusionProjectsLocationsInstancesListSecurity("possimus", "aut") {{
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

## datafusionProjectsLocationsInstancesNamespacesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest req = new DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                optionsRequestedPolicyVersion = 468651L;
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "voluptatibus";
                uploadProtocol = "ipsa";
            }};            

            DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyResponse res = sdk.projects.datafusionProjectsLocationsInstancesNamespacesGetIamPolicy(req, new DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity("omnis", "voluptate") {{
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

## datafusionProjectsLocationsInstancesNamespacesList

List namespaces in a given instance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesListRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesListResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesListSecurity;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesNamespacesListRequest req = new DatafusionProjectsLocationsInstancesNamespacesListRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "maiores";
                key = "dicta";
                oauthToken = "corporis";
                pageSize = 296140L;
                pageToken = "iusto";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "harum";
                uploadProtocol = "enim";
                view = DatafusionProjectsLocationsInstancesNamespacesListViewEnum.NAMESPACE_VIEW_FULL;
            }};            

            DatafusionProjectsLocationsInstancesNamespacesListResponse res = sdk.projects.datafusionProjectsLocationsInstancesNamespacesList(req, new DatafusionProjectsLocationsInstancesNamespacesListSecurity("commodi", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listNamespacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datafusionProjectsLocationsInstancesNamespacesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity;
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

            DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest req = new DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest("quae") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("pariatur"),
                                            add("modi"),
                                            add("praesentium"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quasi"),
                                            add("repudiandae"),
                                            add("sint"),
                                            add("veritatis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("enim"),
                                            add("consequatur"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "quibusdam";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("distinctio"),
                                            add("quibusdam"),
                                            add("labore"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "qui";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quos"),
                                            add("perferendis"),
                                            add("magni"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("alias"),
                                            add("fugit"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "excepturi";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "facilis";
                                    expression = "tempore";
                                    location = "labore";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("non"),
                                    add("eligendi"),
                                }};
                                role = "sint";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "aliquid";
                                    expression = "provident";
                                    location = "necessitatibus";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("dolor"),
                                    add("debitis"),
                                    add("a"),
                                }};
                                role = "dolorum";
                            }}),
                        }};
                        etag = "in";
                        version = 449198;
                    }};;
                    updateMask = "illum";
                }};;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "magnam";
                key = "cumque";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "aliquid";
                uploadProtocol = "laborum";
            }};            

            DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyResponse res = sdk.projects.datafusionProjectsLocationsInstancesNamespacesSetIamPolicy(req, new DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity("accusamus", "non") {{
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

## datafusionProjectsLocationsInstancesNamespacesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest req = new DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("delectus"),
                        add("quidem"),
                        add("provident"),
                        add("nam"),
                    }};
                }};;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "sapiente";
                key = "amet";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "vel";
                uploadProtocol = "natus";
            }};            

            DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse res = sdk.projects.datafusionProjectsLocationsInstancesNamespacesTestIamPermissions(req, new DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity("omnis", "molestiae") {{
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

            DatafusionProjectsLocationsInstancesPatchRequest req = new DatafusionProjectsLocationsInstancesPatchRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceInput = new InstanceInput() {{
                    cryptoKeyConfig = new CryptoKeyConfig() {{
                        keyReference = "magnam";
                    }};;
                    dataprocServiceAccount = "distinctio";
                    description = "id";
                    displayName = "labore";
                    enableRbac = false;
                    enableStackdriverLogging = false;
                    enableStackdriverMonitoring = false;
                    enableZoneSeparation = false;
                    eventPublishConfig = new EventPublishConfig() {{
                        enabled = false;
                        topic = "labore";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("natus", "nobis");
                        put("eum", "vero");
                    }};
                    networkConfig = new NetworkConfig() {{
                        ipAllocation = "aspernatur";
                        network = "architecto";
                    }};;
                    options = new java.util.HashMap<String, String>() {{
                        put("et", "excepturi");
                        put("ullam", "provident");
                    }};
                    privateInstance = false;
                    type = InstanceTypeEnum.ENTERPRISE;
                    version = "sint";
                    zone = "accusantium";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "ad";
                key = "eum";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                updateMask = "odit";
                uploadType = "nemo";
                uploadProtocol = "quasi";
            }};            

            DatafusionProjectsLocationsInstancesPatchResponse res = sdk.projects.datafusionProjectsLocationsInstancesPatch(req, new DatafusionProjectsLocationsInstancesPatchSecurity("iure", "doloribus") {{
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

            DatafusionProjectsLocationsInstancesRestartRequest req = new DatafusionProjectsLocationsInstancesRestartRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("deleniti", "facilis");
                    put("in", "architecto");
                    put("architecto", "repudiandae");
                    put("ullam", "expedita");
                }};
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "sed";
                key = "saepe";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "consequuntur";
                uploadProtocol = "praesentium";
            }};            

            DatafusionProjectsLocationsInstancesRestartResponse res = sdk.projects.datafusionProjectsLocationsInstancesRestart(req, new DatafusionProjectsLocationsInstancesRestartSecurity("natus", "magni") {{
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

## datafusionProjectsLocationsInstancesUpgrade

Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesUpgradeRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesUpgradeResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsInstancesUpgradeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsInstancesUpgradeRequest req = new DatafusionProjectsLocationsInstancesUpgradeRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("pariatur", "maxime");
                    put("ea", "excepturi");
                    put("odit", "ea");
                    put("accusantium", "ab");
                }};
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "voluptate";
                key = "autem";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "pariatur";
                uploadProtocol = "nemo";
            }};            

            DatafusionProjectsLocationsInstancesUpgradeResponse res = sdk.projects.datafusionProjectsLocationsInstancesUpgrade(req, new DatafusionProjectsLocationsInstancesUpgradeSecurity("voluptatibus", "perferendis") {{
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

            DatafusionProjectsLocationsListRequest req = new DatafusionProjectsLocationsListRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "hic";
                filter = "libero";
                includeUnrevealedLocations = false;
                key = "nobis";
                oauthToken = "dolores";
                pageSize = 339404L;
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "eaque";
                uploadProtocol = "quis";
            }};            

            DatafusionProjectsLocationsListResponse res = sdk.projects.datafusionProjectsLocationsList(req, new DatafusionProjectsLocationsListSecurity("nesciunt", "eos") {{
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

            DatafusionProjectsLocationsOperationsCancelRequest req = new DatafusionProjectsLocationsOperationsCancelRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quam", "dolor");
                    put("vero", "nostrum");
                    put("hic", "recusandae");
                    put("omnis", "facilis");
                }};
                accessToken = "perspiciatis";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "consequuntur";
                key = "blanditiis";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "occaecati";
                uploadProtocol = "rerum";
            }};            

            DatafusionProjectsLocationsOperationsCancelResponse res = sdk.projects.datafusionProjectsLocationsOperationsCancel(req, new DatafusionProjectsLocationsOperationsCancelSecurity("adipisci", "asperiores") {{
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

            DatafusionProjectsLocationsOperationsDeleteRequest req = new DatafusionProjectsLocationsOperationsDeleteRequest("earum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "pariatur";
                key = "provident";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "delectus";
                uploadProtocol = "quaerat";
            }};            

            DatafusionProjectsLocationsOperationsDeleteResponse res = sdk.projects.datafusionProjectsLocationsOperationsDelete(req, new DatafusionProjectsLocationsOperationsDeleteSecurity("quos", "aliquid") {{
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

            DatafusionProjectsLocationsOperationsGetRequest req = new DatafusionProjectsLocationsOperationsGetRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "hic";
                key = "excepturi";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "dignissimos";
                uploadProtocol = "reiciendis";
            }};            

            DatafusionProjectsLocationsOperationsGetResponse res = sdk.projects.datafusionProjectsLocationsOperationsGet(req, new DatafusionProjectsLocationsOperationsGetSecurity("amet", "dolorum") {{
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

            DatafusionProjectsLocationsOperationsListRequest req = new DatafusionProjectsLocationsOperationsListRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "odio";
                filter = "quaerat";
                key = "accusamus";
                oauthToken = "quidem";
                pageSize = 976405L;
                pageToken = "voluptas";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "eos";
                uploadProtocol = "atque";
            }};            

            DatafusionProjectsLocationsOperationsListResponse res = sdk.projects.datafusionProjectsLocationsOperationsList(req, new DatafusionProjectsLocationsOperationsListSecurity("sit", "fugiat") {{
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

## datafusionProjectsLocationsRemoveIamPolicy

Remove IAM policy that is currently set on the given resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsRemoveIamPolicyRequest;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsRemoveIamPolicyResponse;
import org.openapis.openapi.models.operations.DatafusionProjectsLocationsRemoveIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatafusionProjectsLocationsRemoveIamPolicyRequest req = new DatafusionProjectsLocationsRemoveIamPolicyRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iusto", "voluptate");
                    put("dolorum", "deleniti");
                    put("omnis", "necessitatibus");
                }};
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "ipsum";
                key = "voluptate";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "eius";
                uploadProtocol = "aspernatur";
            }};            

            DatafusionProjectsLocationsRemoveIamPolicyResponse res = sdk.projects.datafusionProjectsLocationsRemoveIamPolicy(req, new DatafusionProjectsLocationsRemoveIamPolicySecurity("perferendis", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.removeIamPolicyResponse != null) {
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

            DatafusionProjectsLocationsVersionsListRequest req = new DatafusionProjectsLocationsVersionsListRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "suscipit";
                fields = "deserunt";
                key = "provident";
                latestPatchOnly = false;
                oauthToken = "minima";
                pageSize = 831049L;
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "alias";
                uploadProtocol = "at";
            }};            

            DatafusionProjectsLocationsVersionsListResponse res = sdk.projects.datafusionProjectsLocationsVersionsList(req, new DatafusionProjectsLocationsVersionsListSecurity("quaerat", "tempora") {{
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
