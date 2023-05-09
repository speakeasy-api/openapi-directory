# projects

### Available Operations

* [gkehubProjectsLocationsFeaturesCreate](#gkehubprojectslocationsfeaturescreate) - Adds a new Feature.
* [gkehubProjectsLocationsFeaturesList](#gkehubprojectslocationsfeatureslist) - Lists Features in a given project and location.
* [gkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [gkehubProjectsLocationsMembershipsBindingsCreate](#gkehubprojectslocationsmembershipsbindingscreate) - Creates a MembershipBinding.
* [gkehubProjectsLocationsMembershipsBindingsList](#gkehubprojectslocationsmembershipsbindingslist) - Lists MembershipBindings.
* [gkehubProjectsLocationsMembershipsBindingsPatch](#gkehubprojectslocationsmembershipsbindingspatch) - Updates a MembershipBinding.
* [gkehubProjectsLocationsMembershipsCreate](#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [gkehubProjectsLocationsMembershipsGenerateConnectManifest](#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [gkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkehubProjectsLocationsMembershipsList](#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [gkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkehubProjectsLocationsOperationsCancel](#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkehubProjectsLocationsOperationsList](#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [gkehubProjectsLocationsScopesCreate](#gkehubprojectslocationsscopescreate) - Creates a Scope.
* [gkehubProjectsLocationsScopesDelete](#gkehubprojectslocationsscopesdelete) - Deletes a Scope.
* [gkehubProjectsLocationsScopesGet](#gkehubprojectslocationsscopesget) - Returns the details of a Scope.
* [gkehubProjectsLocationsScopesList](#gkehubprojectslocationsscopeslist) - Lists Scopes.

## gkehubProjectsLocationsFeaturesCreate

Adds a new Feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppDevExperienceFeatureState;
import org.openapis.openapi.models.shared.CommonFeatureSpec;
import org.openapis.openapi.models.shared.CommonFeatureState;
import org.openapis.openapi.models.shared.ConfigManagementConfigSync;
import org.openapis.openapi.models.shared.ConfigManagementGitConfig;
import org.openapis.openapi.models.shared.ConfigManagementHierarchyControllerConfig;
import org.openapis.openapi.models.shared.ConfigManagementManaged;
import org.openapis.openapi.models.shared.ConfigManagementMembershipSpec;
import org.openapis.openapi.models.shared.ConfigManagementOciConfig;
import org.openapis.openapi.models.shared.ConfigManagementPolicyController;
import org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoring;
import org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum;
import org.openapis.openapi.models.shared.FeatureInput;
import org.openapis.openapi.models.shared.FeatureResourceState;
import org.openapis.openapi.models.shared.FeatureResourceStateStateEnum;
import org.openapis.openapi.models.shared.FeatureState;
import org.openapis.openapi.models.shared.FeatureStateCodeEnum;
import org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput;
import org.openapis.openapi.models.shared.IdentityServiceAzureADConfigInput;
import org.openapis.openapi.models.shared.IdentityServiceGoogleConfig;
import org.openapis.openapi.models.shared.IdentityServiceMembershipSpecInput;
import org.openapis.openapi.models.shared.IdentityServiceOidcConfigInput;
import org.openapis.openapi.models.shared.MembershipFeatureSpecInput;
import org.openapis.openapi.models.shared.MultiClusterIngressFeatureSpec;
import org.openapis.openapi.models.shared.ServiceMeshMembershipSpec;
import org.openapis.openapi.models.shared.ServiceMeshMembershipSpecControlPlaneEnum;
import org.openapis.openapi.models.shared.ServiceMeshMembershipSpecManagementEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.StatusCodeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsFeaturesCreateRequest req = new GkehubProjectsLocationsFeaturesCreateRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                featureInput = new FeatureInput() {{
                    fleetDefaultMemberConfig = new java.util.HashMap<String, Object>() {{
                        put("cum", "voluptate");
                        put("dignissimos", "reiciendis");
                        put("amet", "dolorum");
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("veritatis", "ipsa");
                        put("ipsa", "iure");
                    }};
                    membershipSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.MembershipFeatureSpecInput>() {{
                        put("quaerat", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "accusamus";
                                        httpsProxy = "quidem";
                                        policyDir = "voluptatibus";
                                        secretType = "voluptas";
                                        syncBranch = "natus";
                                        syncRepo = "eos";
                                        syncRev = "atque";
                                        syncWaitSecs = "sit";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "fugiat";
                                        policyDir = "ab";
                                        secretType = "soluta";
                                        syncRepo = "dolorum";
                                        syncWaitSecs = "iusto";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "voluptate";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "dolorum";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("omnis"),
                                        add("necessitatibus"),
                                        add("distinctio"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "saepe";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("aspernatur", "perferendis");
                                put("amet", "optio");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "ad";
                                            clientSecret = "saepe";
                                            kubectlRedirectUri = "suscipit";
                                            tenant = "deserunt";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Derek Sipes";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "alias";
                                            clientId = "at";
                                            clientSecret = "quaerat";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "tempora";
                                            groupPrefix = "vel";
                                            groupsClaim = "quod";
                                            issuerUri = "officiis";
                                            kubectlRedirectUri = "qui";
                                            scopes = "dolorum";
                                            userClaim = "a";
                                            userPrefix = "esse";
                                        }};
                                        proxy = "harum";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "iusto";
                                            clientSecret = "ipsum";
                                            kubectlRedirectUri = "quisquam";
                                            tenant = "tenetur";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Kelli Thompson";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "dolorem";
                                            clientId = "sapiente";
                                            clientSecret = "totam";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "nihil";
                                            groupPrefix = "sit";
                                            groupsClaim = "expedita";
                                            issuerUri = "neque";
                                            kubectlRedirectUri = "sed";
                                            scopes = "vel";
                                            userClaim = "libero";
                                            userPrefix = "voluptas";
                                        }};
                                        proxy = "deserunt";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "quam";
                                            clientSecret = "ipsum";
                                            kubectlRedirectUri = "incidunt";
                                            tenant = "qui";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Simon Stracke MD";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "totam";
                                            clientId = "incidunt";
                                            clientSecret = "aspernatur";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "dolores";
                                            groupPrefix = "distinctio";
                                            groupsClaim = "facilis";
                                            issuerUri = "aliquid";
                                            kubectlRedirectUri = "quam";
                                            scopes = "molestias";
                                            userClaim = "temporibus";
                                            userPrefix = "qui";
                                        }};
                                        proxy = "neque";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "fugit";
                                            clientSecret = "magni";
                                            kubectlRedirectUri = "odio";
                                            tenant = "sunt";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Miss Candice Weimann";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "nobis";
                                            clientId = "et";
                                            clientSecret = "saepe";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "ipsum";
                                            groupPrefix = "veritatis";
                                            groupsClaim = "nobis";
                                            issuerUri = "quos";
                                            kubectlRedirectUri = "tempore";
                                            scopes = "cupiditate";
                                            userClaim = "aperiam";
                                            userPrefix = "delectus";
                                        }};
                                        proxy = "dolorem";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.CONTROL_PLANE_MANAGEMENT_UNSPECIFIED;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_UNSPECIFIED;
                            }};
                        }});
                        put("adipisci", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "dolorum";
                                        httpsProxy = "architecto";
                                        policyDir = "quae";
                                        secretType = "aut";
                                        syncBranch = "quas";
                                        syncRepo = "itaque";
                                        syncRev = "consequatur";
                                        syncWaitSecs = "est";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "repellendus";
                                        policyDir = "porro";
                                        secretType = "doloribus";
                                        syncRepo = "ut";
                                        syncWaitSecs = "facilis";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "cupiditate";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "qui";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("laudantium"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "quisquam";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("omnis", "quis");
                                put("ipsum", "delectus");
                                put("voluptate", "consectetur");
                                put("vero", "tenetur");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "hic";
                                            clientSecret = "distinctio";
                                            kubectlRedirectUri = "quod";
                                            tenant = "odio";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Malcolm Swift";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "quibusdam";
                                            clientId = "illum";
                                            clientSecret = "sequi";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "natus";
                                            groupPrefix = "impedit";
                                            groupsClaim = "aut";
                                            issuerUri = "voluptatibus";
                                            kubectlRedirectUri = "exercitationem";
                                            scopes = "nulla";
                                            userClaim = "fugit";
                                            userPrefix = "porro";
                                        }};
                                        proxy = "maiores";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "doloribus";
                                            clientSecret = "iusto";
                                            kubectlRedirectUri = "eligendi";
                                            tenant = "ducimus";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Brandi Glover";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "aspernatur";
                                            clientId = "vel";
                                            clientSecret = "possimus";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "magnam";
                                            groupPrefix = "ratione";
                                            groupsClaim = "ex";
                                            issuerUri = "laudantium";
                                            kubectlRedirectUri = "dicta";
                                            scopes = "dolor";
                                            userClaim = "maiores";
                                            userPrefix = "quasi";
                                        }};
                                        proxy = "ex";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.MANUAL;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_AUTOMATIC;
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = FeatureResourceStateStateEnum.SERVICE_UPDATING;
                    }};;
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("sapiente", new java.util.HashMap<String, Object>() {{
                            put("saepe", "ea");
                            put("impedit", "corporis");
                            put("veniam", "aliquid");
                            put("inventore", "magnam");
                        }});
                        put("ea", new java.util.HashMap<String, Object>() {{
                            put("consectetur", "recusandae");
                            put("aspernatur", "minima");
                            put("eaque", "a");
                            put("libero", "aut");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("deleniti", "impedit");
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("fugit", "accusamus");
                            put("inventore", "non");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            configMembership = "et";
                        }};;
                    }};;
                    state = new CommonFeatureState() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = StatusCodeEnum.FAILED;
                                description = "laborum";
                            }};;
                        }};;
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("velit", "eum");
                            put("autem", "nobis");
                            put("quas", "assumenda");
                            put("nulla", "voluptas");
                        }};
                        state = new FeatureState() {{
                            code = FeatureStateCodeEnum.WARNING;
                            description = "quasi";
                            updateTime = "tempora";
                        }};;
                    }};;
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "provident";
                featureId = "ipsa";
                fields = "molestiae";
                key = "magnam";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "eius";
                requestId = "esse";
                uploadType = "esse";
                uploadProtocol = "rem";
            }};            

            GkehubProjectsLocationsFeaturesCreateResponse res = sdk.projects.gkehubProjectsLocationsFeaturesCreate(req, new GkehubProjectsLocationsFeaturesCreateSecurity("fuga", "reprehenderit") {{
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

## gkehubProjectsLocationsFeaturesList

Lists Features in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesListRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesListResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsFeaturesListRequest req = new GkehubProjectsLocationsFeaturesListRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ut";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "assumenda";
                filter = "eos";
                key = "praesentium";
                oauthToken = "quisquam";
                orderBy = "veritatis";
                pageSize = 56848L;
                pageToken = "id";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "neque";
                uploadProtocol = "quo";
            }};            

            GkehubProjectsLocationsFeaturesListResponse res = sdk.projects.gkehubProjectsLocationsFeaturesList(req, new GkehubProjectsLocationsFeaturesListSecurity("illum", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFeaturesResponse != null) {
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

            GkehubProjectsLocationsListRequest req = new GkehubProjectsLocationsListRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "cupiditate";
                filter = "consequatur";
                key = "tempora";
                oauthToken = "debitis";
                pageSize = 370853L;
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "quo";
                uploadProtocol = "esse";
            }};            

            GkehubProjectsLocationsListResponse res = sdk.projects.gkehubProjectsLocationsList(req, new GkehubProjectsLocationsListSecurity("recusandae", "aperiam") {{
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

## gkehubProjectsLocationsMembershipsBindingsCreate

Creates a MembershipBinding.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsBindingsCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsBindingsCreateResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsBindingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MembershipBindingInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsBindingsCreateRequest req = new GkehubProjectsLocationsMembershipsBindingsCreateRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                membershipBindingInput = new MembershipBindingInput() {{
                    fleet = false;
                    name = "Debra Kovacek";
                    scope = "aliquam";
                }};;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "sapiente";
                key = "dolores";
                membershipBindingId = "deserunt";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "porro";
                uploadProtocol = "eum";
            }};            

            GkehubProjectsLocationsMembershipsBindingsCreateResponse res = sdk.projects.gkehubProjectsLocationsMembershipsBindingsCreate(req, new GkehubProjectsLocationsMembershipsBindingsCreateSecurity("quas", "praesentium") {{
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

## gkehubProjectsLocationsMembershipsBindingsList

Lists MembershipBindings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsBindingsListRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsBindingsListResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsBindingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsBindingsListRequest req = new GkehubProjectsLocationsMembershipsBindingsListRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "incidunt";
                key = "atque";
                oauthToken = "explicabo";
                pageSize = 325685L;
                pageToken = "nisi";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "sapiente";
                uploadProtocol = "consequuntur";
            }};            

            GkehubProjectsLocationsMembershipsBindingsListResponse res = sdk.projects.gkehubProjectsLocationsMembershipsBindingsList(req, new GkehubProjectsLocationsMembershipsBindingsListSecurity("ratione", "explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listMembershipBindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkehubProjectsLocationsMembershipsBindingsPatch

Updates a MembershipBinding.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsBindingsPatchRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsBindingsPatchResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsBindingsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MembershipBindingInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsBindingsPatchRequest req = new GkehubProjectsLocationsMembershipsBindingsPatchRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                membershipBindingInput = new MembershipBindingInput() {{
                    fleet = false;
                    name = "Carl Koch";
                    scope = "veritatis";
                }};;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "vero";
                key = "aliquid";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "saepe";
                updateMask = "vel";
                uploadType = "harum";
                uploadProtocol = "molestiae";
            }};            

            GkehubProjectsLocationsMembershipsBindingsPatchResponse res = sdk.projects.gkehubProjectsLocationsMembershipsBindingsPatch(req, new GkehubProjectsLocationsMembershipsBindingsPatchSecurity("rerum", "occaecati") {{
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

            GkehubProjectsLocationsMembershipsCreateRequest req = new GkehubProjectsLocationsMembershipsCreateRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                membershipInput = new MembershipInput() {{
                    authority = new AuthorityInput() {{
                        issuer = "eligendi";
                        oidcJwks = "sit";
                    }};;
                    endpoint = new MembershipEndpointInput() {{
                        applianceCluster = new ApplianceCluster() {{
                            resourceLink = "culpa";
                        }};;
                        edgeCluster = new EdgeCluster() {{
                            resourceLink = "tempore";
                        }};;
                        gkeCluster = new GkeClusterInput() {{
                            resourceLink = "adipisci";
                        }};;
                        kubernetesResource = new KubernetesResourceInput() {{
                            membershipCrManifest = "cumque";
                            resourceOptions = new ResourceOptions() {{
                                connectVersion = "consequuntur";
                                k8sVersion = "consequatur";
                                v1beta1Crd = false;
                            }};;
                        }};;
                        multiCloudCluster = new MultiCloudClusterInput() {{
                            resourceLink = "minus";
                        }};;
                        onPremCluster = new OnPremClusterInput() {{
                            adminCluster = false;
                            clusterType = OnPremClusterClusterTypeEnum.BOOTSTRAP;
                            resourceLink = "sapiente";
                        }};;
                    }};;
                    externalId = "consectetur";
                    labels = new java.util.HashMap<String, String>() {{
                        put("blanditiis", "provident");
                        put("a", "nulla");
                    }};
                    monitoringConfig = new MonitoringConfig() {{
                        cluster = "quas";
                        clusterHash = "esse";
                        kubernetesMetricsPrefix = "quasi";
                        location = "a";
                        projectId = "error";
                    }};;
                }};;
                accessToken = "sint";
                alt = AltEnum.PROTO;
                callback = "possimus";
                fields = "quia";
                key = "eveniet";
                membershipId = "asperiores";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "veritatis";
                requestId = "consequuntur";
                uploadType = "quasi";
                uploadProtocol = "similique";
            }};            

            GkehubProjectsLocationsMembershipsCreateResponse res = sdk.projects.gkehubProjectsLocationsMembershipsCreate(req, new GkehubProjectsLocationsMembershipsCreateSecurity("culpa", "aliquid") {{
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

            GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest req = new GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "eius";
                imagePullSecretContent = "libero";
                isUpgrade = false;
                key = "illum";
                namespace = "soluta";
                oauthToken = "accusantium";
                prettyPrint = false;
                proxy = "aliquam";
                quotaUser = "sapiente";
                registry = "dicta";
                uploadType = "ullam";
                uploadProtocol = "reprehenderit";
                version = "ullam";
            }};            

            GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse res = sdk.projects.gkehubProjectsLocationsMembershipsGenerateConnectManifest(req, new GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity("nisi", "aut") {{
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

            GkehubProjectsLocationsMembershipsGetIamPolicyRequest req = new GkehubProjectsLocationsMembershipsGetIamPolicyRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "itaque";
                key = "dolorum";
                oauthToken = "architecto";
                optionsRequestedPolicyVersion = 609178L;
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "quasi";
                uploadProtocol = "at";
            }};            

            GkehubProjectsLocationsMembershipsGetIamPolicyResponse res = sdk.projects.gkehubProjectsLocationsMembershipsGetIamPolicy(req, new GkehubProjectsLocationsMembershipsGetIamPolicySecurity("et", "voluptate") {{
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

            GkehubProjectsLocationsMembershipsListRequest req = new GkehubProjectsLocationsMembershipsListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "iste";
                filter = "temporibus";
                key = "accusantium";
                oauthToken = "rem";
                orderBy = "aut";
                pageSize = 513075L;
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "ab";
                uploadProtocol = "corrupti";
            }};            

            GkehubProjectsLocationsMembershipsListResponse res = sdk.projects.gkehubProjectsLocationsMembershipsList(req, new GkehubProjectsLocationsMembershipsListSecurity("non", "voluptatem") {{
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

            GkehubProjectsLocationsMembershipsSetIamPolicyRequest req = new GkehubProjectsLocationsMembershipsSetIamPolicyRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptas"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dicta"),
                                            add("maiores"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatibus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aperiam"),
                                            add("ea"),
                                            add("quaerat"),
                                            add("consequuntur"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "officia";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("officia"),
                                            add("asperiores"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quaerat"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("labore"),
                                            add("ab"),
                                            add("adipisci"),
                                            add("fuga"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("velit"),
                                            add("culpa"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "recusandae";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "fugiat";
                                    expression = "vel";
                                    location = "ducimus";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("labore"),
                                    add("possimus"),
                                }};
                                role = "facilis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "cum";
                                    expression = "commodi";
                                    location = "in";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("assumenda"),
                                    add("nemo"),
                                    add("recusandae"),
                                    add("aliquid"),
                                }};
                                role = "aperiam";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "cum";
                                    expression = "consectetur";
                                    location = "in";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("facere"),
                                    add("numquam"),
                                    add("doloribus"),
                                    add("suscipit"),
                                }};
                                role = "reiciendis";
                            }}),
                        }};
                        etag = "quidem";
                        version = 904949;
                    }};;
                    updateMask = "necessitatibus";
                }};;
                accessToken = "dolore";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "adipisci";
                key = "non";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "dignissimos";
                uploadProtocol = "a";
            }};            

            GkehubProjectsLocationsMembershipsSetIamPolicyResponse res = sdk.projects.gkehubProjectsLocationsMembershipsSetIamPolicy(req, new GkehubProjectsLocationsMembershipsSetIamPolicySecurity("debitis", "consectetur") {{
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

            GkehubProjectsLocationsMembershipsTestIamPermissionsRequest req = new GkehubProjectsLocationsMembershipsTestIamPermissionsRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ipsa"),
                        add("voluptates"),
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "similique";
                key = "tempora";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "voluptas";
                uploadProtocol = "voluptas";
            }};            

            GkehubProjectsLocationsMembershipsTestIamPermissionsResponse res = sdk.projects.gkehubProjectsLocationsMembershipsTestIamPermissions(req, new GkehubProjectsLocationsMembershipsTestIamPermissionsSecurity("minima", "nobis") {{
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

            GkehubProjectsLocationsOperationsCancelRequest req = new GkehubProjectsLocationsOperationsCancelRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dolores", "blanditiis");
                    put("in", "dolore");
                    put("aliquam", "officiis");
                    put("temporibus", "ullam");
                }};
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "blanditiis";
                fields = "quas";
                key = "hic";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "corrupti";
                uploadProtocol = "pariatur";
            }};            

            GkehubProjectsLocationsOperationsCancelResponse res = sdk.projects.gkehubProjectsLocationsOperationsCancel(req, new GkehubProjectsLocationsOperationsCancelSecurity("totam", "hic") {{
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

            GkehubProjectsLocationsOperationsListRequest req = new GkehubProjectsLocationsOperationsListRequest("exercitationem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "reiciendis";
                filter = "explicabo";
                key = "asperiores";
                oauthToken = "facilis";
                pageSize = 451822L;
                pageToken = "expedita";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "iste";
                uploadProtocol = "dolore";
            }};            

            GkehubProjectsLocationsOperationsListResponse res = sdk.projects.gkehubProjectsLocationsOperationsList(req, new GkehubProjectsLocationsOperationsListSecurity("laborum", "sed") {{
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

## gkehubProjectsLocationsScopesCreate

Creates a Scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesCreateResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ScopeInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsScopesCreateRequest req = new GkehubProjectsLocationsScopesCreateRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                scopeInput = new ScopeInput() {{
                    allMemberships = false;
                    name = "Benjamin Hodkiewicz III";
                }};;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "illo";
                fields = "reiciendis";
                key = "perferendis";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "maiores";
                scopeId = "incidunt";
                uploadType = "sed";
                uploadProtocol = "provident";
            }};            

            GkehubProjectsLocationsScopesCreateResponse res = sdk.projects.gkehubProjectsLocationsScopesCreate(req, new GkehubProjectsLocationsScopesCreateSecurity("eius", "necessitatibus") {{
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

## gkehubProjectsLocationsScopesDelete

Deletes a Scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesDeleteRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesDeleteResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsScopesDeleteRequest req = new GkehubProjectsLocationsScopesDeleteRequest("ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "tempora";
                force = false;
                key = "tempora";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "reiciendis";
                requestId = "ex";
                uploadType = "sit";
                uploadProtocol = "non";
            }};            

            GkehubProjectsLocationsScopesDeleteResponse res = sdk.projects.gkehubProjectsLocationsScopesDelete(req, new GkehubProjectsLocationsScopesDeleteSecurity("officiis", "praesentium") {{
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

## gkehubProjectsLocationsScopesGet

Returns the details of a Scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesGetRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesGetResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsScopesGetRequest req = new GkehubProjectsLocationsScopesGetRequest("facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "incidunt";
                alt = AltEnum.MEDIA;
                callback = "debitis";
                fields = "rem";
                key = "sit";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "veniam";
                uploadProtocol = "minima";
            }};            

            GkehubProjectsLocationsScopesGetResponse res = sdk.projects.gkehubProjectsLocationsScopesGet(req, new GkehubProjectsLocationsScopesGetSecurity("recusandae", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scope != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkehubProjectsLocationsScopesList

Lists Scopes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesListRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesListResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsScopesListRequest req = new GkehubProjectsLocationsScopesListRequest("nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "veniam";
                key = "in";
                oauthToken = "officiis";
                pageSize = 104627L;
                pageToken = "laudantium";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "praesentium";
                uploadProtocol = "cum";
            }};            

            GkehubProjectsLocationsScopesListResponse res = sdk.projects.gkehubProjectsLocationsScopesList(req, new GkehubProjectsLocationsScopesListSecurity("laboriosam", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listScopesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
