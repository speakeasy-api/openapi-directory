# projects

### Available Operations

* [gkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [gkehubProjectsLocationsMembershipsCreate](#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [gkehubProjectsLocationsMembershipsGenerateConnectManifest](#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [gkehubProjectsLocationsMembershipsGenerateExclusivityManifest](#gkehubprojectslocationsmembershipsgenerateexclusivitymanifest) - GenerateExclusivityManifest generates the manifests to update the exclusivity artifacts in the cluster if needed. Exclusivity artifacts include the Membership custom resource definition (CRD) and the singleton Membership custom resource (CR). Combined with ValidateExclusivity, exclusivity artifacts guarantee that a Kubernetes cluster is only registered to a single GKE Hub. The Membership CRD is versioned, and may require conversion when the GKE Hub API server begins serving a newer version of the CRD and corresponding CR. The response will be the converted CRD and CR if there are any differences between the versions.
* [gkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkehubProjectsLocationsMembershipsList](#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [gkehubProjectsLocationsMembershipsPatch](#gkehubprojectslocationsmembershipspatch) - Updates an existing Membership.
* [gkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkehubProjectsLocationsMembershipsValidateExclusivity](#gkehubprojectslocationsmembershipsvalidateexclusivity) - ValidateExclusivity validates the state of exclusivity in the cluster. The validation does not depend on an existing Hub membership resource.
* [gkehubProjectsLocationsOperationsCancel](#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkehubProjectsLocationsOperationsDelete](#gkehubprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [gkehubProjectsLocationsOperationsGet](#gkehubprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [gkehubProjectsLocationsOperationsList](#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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

            GkehubProjectsLocationsListRequest req = new GkehubProjectsLocationsListRequest("delectus") {{
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

            GkehubProjectsLocationsListResponse res = sdk.projects.gkehubProjectsLocationsList(req, new GkehubProjectsLocationsListSecurity("veritatis", "deserunt") {{
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
import org.openapis.openapi.models.shared.MembershipStateInput;
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

            GkehubProjectsLocationsMembershipsCreateRequest req = new GkehubProjectsLocationsMembershipsCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                membershipInput = new MembershipInput() {{
                    authority = new AuthorityInput() {{
                        issuer = "repellendus";
                        oidcJwks = "sapiente";
                    }};;
                    description = "quo";
                    endpoint = new MembershipEndpointInput() {{
                        applianceCluster = new ApplianceCluster() {{
                            resourceLink = "odit";
                        }};;
                        edgeCluster = new EdgeCluster() {{
                            resourceLink = "at";
                        }};;
                        gkeCluster = new GkeClusterInput() {{
                            resourceLink = "at";
                        }};;
                        kubernetesResource = new KubernetesResourceInput() {{
                            membershipCrManifest = "maiores";
                            resourceOptions = new ResourceOptions() {{
                                connectVersion = "molestiae";
                                k8sVersion = "quod";
                                v1beta1Crd = false;
                            }};;
                        }};;
                        multiCloudCluster = new MultiCloudClusterInput() {{
                            resourceLink = "quod";
                        }};;
                        onPremCluster = new OnPremClusterInput() {{
                            adminCluster = false;
                            clusterType = OnPremClusterClusterTypeEnum.HYBRID;
                            resourceLink = "totam";
                        }};;
                    }};;
                    externalId = "porro";
                    infrastructureType = MembershipInfrastructureTypeEnum.MULTI_CLOUD;
                    labels = new java.util.HashMap<String, String>() {{
                        put("nam", "officia");
                    }};
                    monitoringConfig = new MonitoringConfig() {{
                        cluster = "occaecati";
                        clusterHash = "fugit";
                        kubernetesMetricsPrefix = "deleniti";
                        location = "hic";
                        projectId = "optio";
                    }};;
                    state = new MembershipStateInput() {{
                        description = "totam";
                        updateTime = "beatae";
                    }};;
                }};;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "qui";
                key = "impedit";
                membershipId = "cum";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "ipsum";
                requestId = "excepturi";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            GkehubProjectsLocationsMembershipsCreateResponse res = sdk.projects.gkehubProjectsLocationsMembershipsCreate(req, new GkehubProjectsLocationsMembershipsCreateSecurity("ad", "natus") {{
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

            GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest req = new GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                connectAgentName = "hic";
                connectAgentNamespace = "saepe";
                connectAgentProxy = "fuga";
                fields = "in";
                imagePullSecretContent = "corporis";
                isUpgrade = false;
                key = "iste";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                registry = "quidem";
                uploadType = "architecto";
                uploadProtocol = "ipsa";
                version = "reiciendis";
            }};            

            GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse res = sdk.projects.gkehubProjectsLocationsMembershipsGenerateConnectManifest(req, new GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity("est", "mollitia") {{
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

## gkehubProjectsLocationsMembershipsGenerateExclusivityManifest

GenerateExclusivityManifest generates the manifests to update the exclusivity artifacts in the cluster if needed. Exclusivity artifacts include the Membership custom resource definition (CRD) and the singleton Membership custom resource (CR). Combined with ValidateExclusivity, exclusivity artifacts guarantee that a Kubernetes cluster is only registered to a single GKE Hub. The Membership CRD is versioned, and may require conversion when the GKE Hub API server begins serving a newer version of the CRD and corresponding CR. The response will be the converted CRD and CR if there are any differences between the versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest req = new GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                crManifest = "nobis";
                crdManifest = "enim";
                fields = "omnis";
                key = "nemo";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "accusantium";
                uploadProtocol = "iure";
            }};            

            GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse res = sdk.projects.gkehubProjectsLocationsMembershipsGenerateExclusivityManifest(req, new GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity("culpa", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.generateExclusivityManifestResponse != null) {
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

            GkehubProjectsLocationsMembershipsGetIamPolicyRequest req = new GkehubProjectsLocationsMembershipsGetIamPolicyRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                optionsRequestedPolicyVersion = 581850L;
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            GkehubProjectsLocationsMembershipsGetIamPolicyResponse res = sdk.projects.gkehubProjectsLocationsMembershipsGetIamPolicy(req, new GkehubProjectsLocationsMembershipsGetIamPolicySecurity("molestiae", "velit") {{
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

            GkehubProjectsLocationsMembershipsListRequest req = new GkehubProjectsLocationsMembershipsListRequest("error") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "animi";
                filter = "enim";
                key = "odit";
                oauthToken = "quo";
                orderBy = "sequi";
                pageSize = 949572L;
                pageToken = "ipsam";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "possimus";
                uploadProtocol = "aut";
            }};            

            GkehubProjectsLocationsMembershipsListResponse res = sdk.projects.gkehubProjectsLocationsMembershipsList(req, new GkehubProjectsLocationsMembershipsListSecurity("quasi", "error") {{
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
import org.openapis.openapi.models.shared.MembershipStateInput;
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

            GkehubProjectsLocationsMembershipsPatchRequest req = new GkehubProjectsLocationsMembershipsPatchRequest("temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                membershipInput = new MembershipInput() {{
                    authority = new AuthorityInput() {{
                        issuer = "quasi";
                        oidcJwks = "reiciendis";
                    }};;
                    description = "voluptatibus";
                    endpoint = new MembershipEndpointInput() {{
                        applianceCluster = new ApplianceCluster() {{
                            resourceLink = "vero";
                        }};;
                        edgeCluster = new EdgeCluster() {{
                            resourceLink = "nihil";
                        }};;
                        gkeCluster = new GkeClusterInput() {{
                            resourceLink = "praesentium";
                        }};;
                        kubernetesResource = new KubernetesResourceInput() {{
                            membershipCrManifest = "voluptatibus";
                            resourceOptions = new ResourceOptions() {{
                                connectVersion = "ipsa";
                                k8sVersion = "omnis";
                                v1beta1Crd = false;
                            }};;
                        }};;
                        multiCloudCluster = new MultiCloudClusterInput() {{
                            resourceLink = "voluptate";
                        }};;
                        onPremCluster = new OnPremClusterInput() {{
                            adminCluster = false;
                            clusterType = OnPremClusterClusterTypeEnum.STANDALONE;
                            resourceLink = "perferendis";
                        }};;
                    }};;
                    externalId = "doloremque";
                    infrastructureType = MembershipInfrastructureTypeEnum.ON_PREM;
                    labels = new java.util.HashMap<String, String>() {{
                        put("maiores", "dicta");
                        put("corporis", "dolore");
                    }};
                    monitoringConfig = new MonitoringConfig() {{
                        cluster = "iusto";
                        clusterHash = "dicta";
                        kubernetesMetricsPrefix = "harum";
                        location = "enim";
                        projectId = "accusamus";
                    }};;
                    state = new MembershipStateInput() {{
                        description = "commodi";
                        updateTime = "repudiandae";
                    }};;
                }};;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "molestias";
                key = "excepturi";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "modi";
                requestId = "praesentium";
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

## gkehubProjectsLocationsMembershipsValidateExclusivity

ValidateExclusivity validates the state of exclusivity in the cluster. The validation does not depend on an existing Hub membership resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsValidateExclusivityRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsValidateExclusivityResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsValidateExclusivitySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsValidateExclusivityRequest req = new GkehubProjectsLocationsMembershipsValidateExclusivityRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                crManifest = "deleniti";
                fields = "sapiente";
                intendedMembership = "amet";
                key = "deserunt";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "natus";
                uploadProtocol = "omnis";
            }};            

            GkehubProjectsLocationsMembershipsValidateExclusivityResponse res = sdk.projects.gkehubProjectsLocationsMembershipsValidateExclusivity(req, new GkehubProjectsLocationsMembershipsValidateExclusivitySecurity("molestiae", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.validateExclusivityResponse != null) {
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

            GkehubProjectsLocationsOperationsCancelRequest req = new GkehubProjectsLocationsOperationsCancelRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("id", "labore");
                    put("labore", "suscipit");
                    put("natus", "nobis");
                }};
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "architecto";
                key = "magnam";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "ullam";
                uploadProtocol = "provident";
            }};            

            GkehubProjectsLocationsOperationsCancelResponse res = sdk.projects.gkehubProjectsLocationsOperationsCancel(req, new GkehubProjectsLocationsOperationsCancelSecurity("quos", "sint") {{
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

            GkehubProjectsLocationsOperationsDeleteRequest req = new GkehubProjectsLocationsOperationsDeleteRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "ad";
                fields = "eum";
                force = false;
                key = "dolor";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "odit";
                requestId = "nemo";
                uploadType = "quasi";
                uploadProtocol = "iure";
            }};            

            GkehubProjectsLocationsOperationsDeleteResponse res = sdk.projects.gkehubProjectsLocationsOperationsDelete(req, new GkehubProjectsLocationsOperationsDeleteSecurity("doloribus", "debitis") {{
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

            GkehubProjectsLocationsOperationsGetRequest req = new GkehubProjectsLocationsOperationsGetRequest("eius") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "architecto";
                key = "architecto";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "expedita";
                uploadProtocol = "nihil";
            }};            

            GkehubProjectsLocationsOperationsGetResponse res = sdk.projects.gkehubProjectsLocationsOperationsGet(req, new GkehubProjectsLocationsOperationsGetSecurity("repellat", "quibusdam") {{
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

            GkehubProjectsLocationsOperationsListRequest req = new GkehubProjectsLocationsOperationsListRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "praesentium";
                filter = "natus";
                key = "magni";
                oauthToken = "sunt";
                pageSize = 779051L;
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "maxime";
                uploadProtocol = "ea";
            }};            

            GkehubProjectsLocationsOperationsListResponse res = sdk.projects.gkehubProjectsLocationsOperationsList(req, new GkehubProjectsLocationsOperationsListSecurity("excepturi", "odit") {{
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
