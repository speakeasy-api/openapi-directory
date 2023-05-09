# projects

### Available Operations

* [gkehubProjectsLocationsGlobalMembershipsInitializeHub](#gkehubprojectslocationsglobalmembershipsinitializehub) - Initializes the Hub in this project, which includes creating the default Hub Service Account and the Hub Workload Identity Pool. Initialization is optional, and happens automatically when the first Membership is created. InitializeHub should be called when the first Membership cannot be registered without these resources. A common example is granting the Hub Service Account access to another project, which requires the account to exist first.
* [gkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [gkehubProjectsLocationsMembershipsCreate](#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [gkehubProjectsLocationsMembershipsGenerateConnectManifest](#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [gkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkehubProjectsLocationsMembershipsList](#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [gkehubProjectsLocationsMembershipsPatch](#gkehubprojectslocationsmembershipspatch) - Updates an existing Membership.
* [gkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkehubProjectsLocationsOperationsCancel](#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkehubProjectsLocationsOperationsDelete](#gkehubprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [gkehubProjectsLocationsOperationsGet](#gkehubprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [gkehubProjectsLocationsOperationsList](#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## gkehubProjectsLocationsGlobalMembershipsInitializeHub

Initializes the Hub in this project, which includes creating the default Hub Service Account and the Hub Workload Identity Pool. Initialization is optional, and happens automatically when the first Membership is created. InitializeHub should be called when the first Membership cannot be registered without these resources. A common example is granting the Hub Service Account access to another project, which requires the account to exist first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest req = new GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iusto", "excepturi");
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                }};
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse res = sdk.projects.gkehubProjectsLocationsGlobalMembershipsInitializeHub(req, new GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.initializeHubResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkehubProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsListRequest req = new GkehubProjectsLocationsListRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                filter = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                pageSize = 720633L;
                pageToken = "officia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "fugit";
                uploadProtocol = "deleniti";
            }};            

            GkehubProjectsLocationsListResponse res = sdk.projects.gkehubProjectsLocationsList(req, new GkehubProjectsLocationsListSecurity("hic", "optio") {{
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

## gkehubProjectsLocationsMembershipsCreate

Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsCreateResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplianceCluster;
import org.openapis.openapi.models.shared.AuthorityInput;
import org.openapis.openapi.models.shared.EdgeCluster;
import org.openapis.openapi.models.shared.GkeClusterInput;
import org.openapis.openapi.models.shared.KubernetesResourceInput;
import org.openapis.openapi.models.shared.MembershipEndpointInput;
import org.openapis.openapi.models.shared.MembershipInfrastructureTypeEnum;
import org.openapis.openapi.models.shared.MembershipInput;
import org.openapis.openapi.models.shared.MonitoringConfig;
import org.openapis.openapi.models.shared.MultiCloudClusterInput;
import org.openapis.openapi.models.shared.OnPremClusterClusterTypeEnum;
import org.openapis.openapi.models.shared.OnPremClusterInput;
import org.openapis.openapi.models.shared.ResourceOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsCreateRequest req = new GkehubProjectsLocationsMembershipsCreateRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                membershipInput = new MembershipInput() {{
                    authority = new AuthorityInput() {{
                        issuer = "commodi";
                        oidcJwks = "molestiae";
                    }};;
                    endpoint = new MembershipEndpointInput() {{
                        applianceCluster = new ApplianceCluster() {{
                            resourceLink = "modi";
                        }};;
                        edgeCluster = new EdgeCluster() {{
                            resourceLink = "qui";
                        }};;
                        gkeCluster = new GkeClusterInput() {{
                            resourceLink = "impedit";
                        }};;
                        kubernetesResource = new KubernetesResourceInput() {{
                            membershipCrManifest = "cum";
                            resourceOptions = new ResourceOptions() {{
                                connectVersion = "esse";
                                k8sVersion = "ipsum";
                                v1beta1Crd = false;
                            }};;
                        }};;
                        multiCloudCluster = new MultiCloudClusterInput() {{
                            resourceLink = "excepturi";
                        }};;
                        onPremCluster = new OnPremClusterInput() {{
                            adminCluster = false;
                            clusterType = OnPremClusterClusterTypeEnum.CLUSTERTYPE_UNSPECIFIED;
                            resourceLink = "perferendis";
                        }};;
                    }};;
                    externalId = "ad";
                    infrastructureType = MembershipInfrastructureTypeEnum.ON_PREM;
                    labels = new java.util.HashMap<String, String>() {{
                        put("iste", "dolor");
                    }};
                    monitoringConfig = new MonitoringConfig() {{
                        cluster = "natus";
                        clusterHash = "laboriosam";
                        kubernetesMetricsPrefix = "hic";
                        location = "saepe";
                        projectId = "fuga";
                    }};;
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "iure";
                key = "saepe";
                membershipId = "quidem";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "reiciendis";
                uploadProtocol = "est";
            }};            

            GkehubProjectsLocationsMembershipsCreateResponse res = sdk.projects.gkehubProjectsLocationsMembershipsCreate(req, new GkehubProjectsLocationsMembershipsCreateSecurity("mollitia", "laborum") {{
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

## gkehubProjectsLocationsMembershipsGenerateConnectManifest

Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest req = new GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                imagePullSecretContent = "omnis";
                isUpgrade = false;
                key = "nemo";
                namespace = "minima";
                oauthToken = "excepturi";
                prettyPrint = false;
                proxy = "accusantium";
                quotaUser = "iure";
                registry = "culpa";
                uploadType = "doloribus";
                uploadProtocol = "sapiente";
                version = "architecto";
            }};            

            GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse res = sdk.projects.gkehubProjectsLocationsMembershipsGenerateConnectManifest(req, new GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity("mollitia", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.generateConnectManifestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkehubProjectsLocationsMembershipsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsGetIamPolicyRequest req = new GkehubProjectsLocationsMembershipsGetIamPolicyRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "numquam";
                key = "commodi";
                oauthToken = "quam";
                optionsRequestedPolicyVersion = 474697L;
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "error";
                uploadProtocol = "quia";
            }};            

            GkehubProjectsLocationsMembershipsGetIamPolicyResponse res = sdk.projects.gkehubProjectsLocationsMembershipsGetIamPolicy(req, new GkehubProjectsLocationsMembershipsGetIamPolicySecurity("quis", "vitae") {{
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

## gkehubProjectsLocationsMembershipsList

Lists Memberships in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsListRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsListResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsListRequest req = new GkehubProjectsLocationsMembershipsListRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "sequi";
                filter = "tenetur";
                key = "ipsam";
                oauthToken = "id";
                orderBy = "possimus";
                pageSize = 13571L;
                pageToken = "quasi";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "temporibus";
                uploadProtocol = "laborum";
            }};            

            GkehubProjectsLocationsMembershipsListResponse res = sdk.projects.gkehubProjectsLocationsMembershipsList(req, new GkehubProjectsLocationsMembershipsListSecurity("quasi", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listMembershipsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkehubProjectsLocationsMembershipsPatch

Updates an existing Membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsPatchRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsPatchResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplianceCluster;
import org.openapis.openapi.models.shared.AuthorityInput;
import org.openapis.openapi.models.shared.EdgeCluster;
import org.openapis.openapi.models.shared.GkeClusterInput;
import org.openapis.openapi.models.shared.KubernetesResourceInput;
import org.openapis.openapi.models.shared.MembershipEndpointInput;
import org.openapis.openapi.models.shared.MembershipInfrastructureTypeEnum;
import org.openapis.openapi.models.shared.MembershipInput;
import org.openapis.openapi.models.shared.MonitoringConfig;
import org.openapis.openapi.models.shared.MultiCloudClusterInput;
import org.openapis.openapi.models.shared.OnPremClusterClusterTypeEnum;
import org.openapis.openapi.models.shared.OnPremClusterInput;
import org.openapis.openapi.models.shared.ResourceOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsPatchRequest req = new GkehubProjectsLocationsMembershipsPatchRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                membershipInput = new MembershipInput() {{
                    authority = new AuthorityInput() {{
                        issuer = "nihil";
                        oidcJwks = "praesentium";
                    }};;
                    endpoint = new MembershipEndpointInput() {{
                        applianceCluster = new ApplianceCluster() {{
                            resourceLink = "voluptatibus";
                        }};;
                        edgeCluster = new EdgeCluster() {{
                            resourceLink = "ipsa";
                        }};;
                        gkeCluster = new GkeClusterInput() {{
                            resourceLink = "omnis";
                        }};;
                        kubernetesResource = new KubernetesResourceInput() {{
                            membershipCrManifest = "voluptate";
                            resourceOptions = new ResourceOptions() {{
                                connectVersion = "cum";
                                k8sVersion = "perferendis";
                                v1beta1Crd = false;
                            }};;
                        }};;
                        multiCloudCluster = new MultiCloudClusterInput() {{
                            resourceLink = "doloremque";
                        }};;
                        onPremCluster = new OnPremClusterInput() {{
                            adminCluster = false;
                            clusterType = OnPremClusterClusterTypeEnum.HYBRID;
                            resourceLink = "ut";
                        }};;
                    }};;
                    externalId = "maiores";
                    infrastructureType = MembershipInfrastructureTypeEnum.INFRASTRUCTURE_TYPE_UNSPECIFIED;
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolore", "iusto");
                        put("dicta", "harum");
                    }};
                    monitoringConfig = new MonitoringConfig() {{
                        cluster = "enim";
                        clusterHash = "accusamus";
                        kubernetesMetricsPrefix = "commodi";
                        location = "repudiandae";
                        projectId = "quae";
                    }};;
                }};;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "excepturi";
                key = "pariatur";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "praesentium";
                updateMask = "rem";
                uploadType = "voluptates";
                uploadProtocol = "quasi";
            }};            

            GkehubProjectsLocationsMembershipsPatchResponse res = sdk.projects.gkehubProjectsLocationsMembershipsPatch(req, new GkehubProjectsLocationsMembershipsPatchSecurity("repudiandae", "sint") {{
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

## gkehubProjectsLocationsMembershipsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsSetIamPolicySecurity;
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

            GkehubProjectsLocationsMembershipsSetIamPolicyRequest req = new GkehubProjectsLocationsMembershipsSetIamPolicyRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("est"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deserunt"),
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
                                            add("qui"),
                                            add("aliquid"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("perferendis"),
                                            add("magni"),
                                            add("assumenda"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "alias";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "dolorum";
                                    expression = "excepturi";
                                    location = "tempora";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("labore"),
                                    add("delectus"),
                                    add("eum"),
                                }};
                                role = "non";
                            }}),
                        }};
                        etag = "eligendi";
                        version = 576157;
                    }};;
                    updateMask = "aliquid";
                }};;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "officia";
                key = "dolor";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "dolorum";
                uploadProtocol = "in";
            }};            

            GkehubProjectsLocationsMembershipsSetIamPolicyResponse res = sdk.projects.gkehubProjectsLocationsMembershipsSetIamPolicy(req, new GkehubProjectsLocationsMembershipsSetIamPolicySecurity("in", "illum") {{
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

## gkehubProjectsLocationsMembershipsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsTestIamPermissionsRequest req = new GkehubProjectsLocationsMembershipsTestIamPermissionsRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("magnam"),
                    }};
                }};;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "aliquid";
                key = "laborum";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "occaecati";
                uploadProtocol = "enim";
            }};            

            GkehubProjectsLocationsMembershipsTestIamPermissionsResponse res = sdk.projects.gkehubProjectsLocationsMembershipsTestIamPermissions(req, new GkehubProjectsLocationsMembershipsTestIamPermissionsSecurity("accusamus", "delectus") {{
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

## gkehubProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsOperationsCancelRequest req = new GkehubProjectsLocationsOperationsCancelRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("id", "blanditiis");
                    put("deleniti", "sapiente");
                    put("amet", "deserunt");
                }};
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "omnis";
                key = "molestiae";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "magnam";
                uploadProtocol = "distinctio";
            }};            

            GkehubProjectsLocationsOperationsCancelResponse res = sdk.projects.gkehubProjectsLocationsOperationsCancel(req, new GkehubProjectsLocationsOperationsCancelSecurity("id", "labore") {{
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

## gkehubProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsOperationsDeleteRequest req = new GkehubProjectsLocationsOperationsDeleteRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "vero";
                force = false;
                key = "aspernatur";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "et";
                uploadProtocol = "excepturi";
            }};            

            GkehubProjectsLocationsOperationsDeleteResponse res = sdk.projects.gkehubProjectsLocationsOperationsDelete(req, new GkehubProjectsLocationsOperationsDeleteSecurity("ullam", "provident") {{
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

## gkehubProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsOperationsGetRequest req = new GkehubProjectsLocationsOperationsGetRequest("quos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "mollitia";
                key = "ad";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "necessitatibus";
                uploadProtocol = "odit";
            }};            

            GkehubProjectsLocationsOperationsGetResponse res = sdk.projects.gkehubProjectsLocationsOperationsGet(req, new GkehubProjectsLocationsOperationsGetSecurity("nemo", "quasi") {{
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

## gkehubProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsOperationsListRequest req = new GkehubProjectsLocationsOperationsListRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "maxime";
                fields = "deleniti";
                filter = "facilis";
                key = "in";
                oauthToken = "architecto";
                pageSize = 99569L;
                pageToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "expedita";
                uploadProtocol = "nihil";
            }};            

            GkehubProjectsLocationsOperationsListResponse res = sdk.projects.gkehubProjectsLocationsOperationsList(req, new GkehubProjectsLocationsOperationsListSecurity("repellat", "quibusdam") {{
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
