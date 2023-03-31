# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateSecurity;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreatePathParams;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateQueryParams;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateResponse;
import org.openapis.openapi.models.shared.FeatureInput;
import org.openapis.openapi.models.shared.CommonFeatureState;
import org.openapis.openapi.models.shared.FeatureStateCodeEnum;
import org.openapis.openapi.models.shared.FeatureState;
import org.openapis.openapi.models.shared.AppDevExperienceFeatureState;
import org.openapis.openapi.models.shared.StatusCodeEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.CommonFeatureSpec;
import org.openapis.openapi.models.shared.MultiClusterIngressFeatureSpec;
import org.openapis.openapi.models.shared.FeatureResourceStateStateEnum;
import org.openapis.openapi.models.shared.FeatureResourceState;
import org.openapis.openapi.models.shared.MembershipFeatureSpecInput;
import org.openapis.openapi.models.shared.ServiceMeshMembershipSpecControlPlaneEnum;
import org.openapis.openapi.models.shared.ServiceMeshMembershipSpecManagementEnum;
import org.openapis.openapi.models.shared.ServiceMeshMembershipSpec;
import org.openapis.openapi.models.shared.IdentityServiceMembershipSpecInput;
import org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput;
import org.openapis.openapi.models.shared.IdentityServiceOidcConfigInput;
import org.openapis.openapi.models.shared.IdentityServiceGoogleConfig;
import org.openapis.openapi.models.shared.IdentityServiceAzureADConfigInput;
import org.openapis.openapi.models.shared.ConfigManagementMembershipSpec;
import org.openapis.openapi.models.shared.ConfigManagementPolicyController;
import org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum;
import org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoring;
import org.openapis.openapi.models.shared.ConfigManagementHierarchyControllerConfig;
import org.openapis.openapi.models.shared.ConfigManagementConfigSync;
import org.openapis.openapi.models.shared.ConfigManagementOciConfig;
import org.openapis.openapi.models.shared.ConfigManagementGitConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsFeaturesCreateRequest req = new GkehubProjectsLocationsFeaturesCreateRequest() {{
                security = new GkehubProjectsLocationsFeaturesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GkehubProjectsLocationsFeaturesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new GkehubProjectsLocationsFeaturesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    featureId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new FeatureInput() {{
                    fleetDefaultMemberConfig = new java.util.HashMap<String, Object>() {{
                        put("debitis", "ipsa");
                        put("delectus", "tempora");
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    membershipSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.MembershipFeatureSpecInput>() {{
                        put("excepturi", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "nisi";
                                        httpsProxy = "recusandae";
                                        policyDir = "temporibus";
                                        secretType = "ab";
                                        syncBranch = "quis";
                                        syncRepo = "veritatis";
                                        syncRev = "deserunt";
                                        syncWaitSecs = "perferendis";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "ipsam";
                                        policyDir = "repellendus";
                                        secretType = "sapiente";
                                        syncRepo = "quo";
                                        syncWaitSecs = "odit";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "at";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "at";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("molestiae"),
                                        add("quod"),
                                        add("quod"),
                                        add("esse"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add("CLOUD_MONITORING"),
                                            add("CLOUD_MONITORING"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "nam";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("occaecati", "fugit");
                                put("deleniti", "hic");
                                put("optio", "totam");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "commodi";
                                            clientSecret = "molestiae";
                                            kubectlRedirectUri = "modi";
                                            tenant = "qui";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "impedit";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "cum";
                                            clientId = "esse";
                                            clientSecret = "ipsum";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "excepturi";
                                            groupPrefix = "aspernatur";
                                            groupsClaim = "perferendis";
                                            issuerUri = "ad";
                                            kubectlRedirectUri = "natus";
                                            scopes = "sed";
                                            userClaim = "iste";
                                            userPrefix = "dolor";
                                        }};
                                        proxy = "natus";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                management = "MANAGEMENT_MANUAL";
                            }};
                        }});
                        put("saepe", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "fuga";
                                        httpsProxy = "in";
                                        policyDir = "corporis";
                                        secretType = "iste";
                                        syncBranch = "iure";
                                        syncRepo = "saepe";
                                        syncRev = "quidem";
                                        syncWaitSecs = "architecto";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "ipsa";
                                        policyDir = "reiciendis";
                                        secretType = "est";
                                        syncRepo = "mollitia";
                                        syncWaitSecs = "laborum";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "dolores";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "dolorem";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("explicabo"),
                                        add("nobis"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add("PROMETHEUS"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "minima";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("accusantium", "iure");
                                put("culpa", "doloribus");
                                put("sapiente", "architecto");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "dolorem";
                                            clientSecret = "culpa";
                                            kubectlRedirectUri = "consequuntur";
                                            tenant = "repellat";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "mollitia";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "occaecati";
                                            clientId = "numquam";
                                            clientSecret = "commodi";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "quam";
                                            groupPrefix = "molestiae";
                                            groupsClaim = "velit";
                                            issuerUri = "error";
                                            kubectlRedirectUri = "quia";
                                            scopes = "quis";
                                            userClaim = "vitae";
                                            userPrefix = "laborum";
                                        }};
                                        proxy = "animi";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "enim";
                                            clientSecret = "odit";
                                            kubectlRedirectUri = "quo";
                                            tenant = "sequi";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "tenetur";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "ipsam";
                                            clientId = "id";
                                            clientSecret = "possimus";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "aut";
                                            groupPrefix = "quasi";
                                            groupsClaim = "error";
                                            issuerUri = "temporibus";
                                            kubectlRedirectUri = "laborum";
                                            scopes = "quasi";
                                            userClaim = "reiciendis";
                                            userPrefix = "voluptatibus";
                                        }};
                                        proxy = "vero";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "nihil";
                                            clientSecret = "praesentium";
                                            kubectlRedirectUri = "voluptatibus";
                                            tenant = "ipsa";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "omnis";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "voluptate";
                                            clientId = "cum";
                                            clientSecret = "perferendis";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "doloremque";
                                            groupPrefix = "reprehenderit";
                                            groupsClaim = "ut";
                                            issuerUri = "maiores";
                                            kubectlRedirectUri = "dicta";
                                            scopes = "corporis";
                                            userClaim = "dolore";
                                            userPrefix = "iusto";
                                        }};
                                        proxy = "dicta";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "MANUAL";
                                management = "MANAGEMENT_UNSPECIFIED";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = "SERVICE_UPDATING";
                    }};
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("repudiandae", new java.util.HashMap<String, Object>() {{
                            put("ipsum", "quidem");
                        }});
                        put("molestias", new java.util.HashMap<String, Object>() {{
                            put("pariatur", "modi");
                            put("praesentium", "rem");
                            put("voluptates", "quasi");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("sint", "veritatis");
                            put("itaque", "incidunt");
                            put("enim", "consequatur");
                            put("est", "quibusdam");
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("deserunt", "distinctio");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            configMembership = "quibusdam";
                        }};
                    }};
                    state = new CommonFeatureState() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "OK";
                                description = "modi";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("aliquid", "cupiditate");
                        }};
                        state = new FeatureState() {{
                            code = "WARNING";
                            description = "perferendis";
                            updateTime = "magni";
                        }};
                    }};
                }};
            }};            

            GkehubProjectsLocationsFeaturesCreateResponse res = sdk.projects.gkehubProjectsLocationsFeaturesCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `gkehubProjectsLocationsFeaturesCreate` - Adds a new Feature.
* `gkehubProjectsLocationsFeaturesList` - Lists Features in a given project and location.
* `gkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `gkehubProjectsLocationsMembershipsBindingsCreate` - Creates a MembershipBinding.
* `gkehubProjectsLocationsMembershipsBindingsList` - Lists MembershipBindings.
* `gkehubProjectsLocationsMembershipsBindingsPatch` - Updates a MembershipBinding.
* `gkehubProjectsLocationsMembershipsCreate` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehubProjectsLocationsMembershipsGenerateConnectManifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehubProjectsLocationsMembershipsList` - Lists Memberships in a given project and location.
* `gkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `gkehubProjectsLocationsScopesCreate` - Creates a Scope.
* `gkehubProjectsLocationsScopesDelete` - Deletes a Scope.
* `gkehubProjectsLocationsScopesGet` - Returns the details of a Scope.
* `gkehubProjectsLocationsScopesList` - Lists Scopes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
