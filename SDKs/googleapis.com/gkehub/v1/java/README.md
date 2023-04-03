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
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsFeaturesCreateRequest req = new GkehubProjectsLocationsFeaturesCreateRequest() {{
                dollarXgafv = "2";
                featureInput = new FeatureInput() {{
                    fleetDefaultMemberConfig = new java.util.HashMap<String, Object>() {{
                        put("distinctio", "quibusdam");
                        put("unde", "nulla");
                        put("corrupti", "illum");
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    membershipSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.MembershipFeatureSpecInput>() {{
                        put("debitis", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "ipsa";
                                        httpsProxy = "delectus";
                                        policyDir = "tempora";
                                        secretType = "suscipit";
                                        syncBranch = "molestiae";
                                        syncRepo = "minus";
                                        syncRev = "placeat";
                                        syncWaitSecs = "voluptatum";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "iusto";
                                        policyDir = "excepturi";
                                        secretType = "nisi";
                                        syncRepo = "recusandae";
                                        syncWaitSecs = "temporibus";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "ab";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "quis";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("deserunt"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "repellendus";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("quo", "odit");
                                put("at", "at");
                                put("maiores", "molestiae");
                                put("quod", "quod");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "totam";
                                            clientSecret = "porro";
                                            kubectlRedirectUri = "dolorum";
                                            tenant = "dicta";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "nam";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "officia";
                                            clientId = "occaecati";
                                            clientSecret = "fugit";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "deleniti";
                                            groupPrefix = "hic";
                                            groupsClaim = "optio";
                                            issuerUri = "totam";
                                            kubectlRedirectUri = "beatae";
                                            scopes = "commodi";
                                            userClaim = "molestiae";
                                            userPrefix = "modi";
                                        }};
                                        proxy = "qui";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "impedit";
                                            clientSecret = "cum";
                                            kubectlRedirectUri = "esse";
                                            tenant = "ipsum";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "excepturi";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "aspernatur";
                                            clientId = "perferendis";
                                            clientSecret = "ad";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "natus";
                                            groupPrefix = "sed";
                                            groupsClaim = "iste";
                                            issuerUri = "dolor";
                                            kubectlRedirectUri = "natus";
                                            scopes = "laboriosam";
                                            userClaim = "hic";
                                            userPrefix = "saepe";
                                        }};
                                        proxy = "fuga";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                management = "MANAGEMENT_AUTOMATIC";
                            }};
                        }});
                        put("iste", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "iure";
                                        httpsProxy = "saepe";
                                        policyDir = "quidem";
                                        secretType = "architecto";
                                        syncBranch = "ipsa";
                                        syncRepo = "reiciendis";
                                        syncRev = "est";
                                        syncWaitSecs = "mollitia";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "laborum";
                                        policyDir = "dolores";
                                        secretType = "dolorem";
                                        syncRepo = "corporis";
                                        syncWaitSecs = "explicabo";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "nobis";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "enim";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("nemo"),
                                        add("minima"),
                                        add("excepturi"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "culpa";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("sapiente", "architecto");
                                put("mollitia", "dolorem");
                                put("culpa", "consequuntur");
                                put("repellat", "mollitia");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "numquam";
                                            clientSecret = "commodi";
                                            kubectlRedirectUri = "quam";
                                            tenant = "molestiae";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "velit";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "error";
                                            clientId = "quia";
                                            clientSecret = "quis";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "vitae";
                                            groupPrefix = "laborum";
                                            groupsClaim = "animi";
                                            issuerUri = "enim";
                                            kubectlRedirectUri = "odit";
                                            scopes = "quo";
                                            userClaim = "sequi";
                                            userPrefix = "tenetur";
                                        }};
                                        proxy = "ipsam";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "id";
                                            clientSecret = "possimus";
                                            kubectlRedirectUri = "aut";
                                            tenant = "quasi";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "error";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "temporibus";
                                            clientId = "laborum";
                                            clientSecret = "quasi";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "reiciendis";
                                            groupPrefix = "voluptatibus";
                                            groupsClaim = "vero";
                                            issuerUri = "nihil";
                                            kubectlRedirectUri = "praesentium";
                                            scopes = "voluptatibus";
                                            userClaim = "ipsa";
                                            userPrefix = "omnis";
                                        }};
                                        proxy = "voluptate";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "cum";
                                            clientSecret = "perferendis";
                                            kubectlRedirectUri = "doloremque";
                                            tenant = "reprehenderit";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "ut";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "maiores";
                                            clientId = "dicta";
                                            clientSecret = "corporis";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "dolore";
                                            groupPrefix = "iusto";
                                            groupsClaim = "dicta";
                                            issuerUri = "harum";
                                            kubectlRedirectUri = "enim";
                                            scopes = "accusamus";
                                            userClaim = "commodi";
                                            userPrefix = "repudiandae";
                                        }};
                                        proxy = "quae";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED";
                                management = "MANAGEMENT_MANUAL";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = "DISABLING";
                    }};
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("pariatur", new java.util.HashMap<String, Object>() {{
                            put("praesentium", "rem");
                            put("voluptates", "quasi");
                        }});
                        put("repudiandae", new java.util.HashMap<String, Object>() {{
                            put("veritatis", "itaque");
                            put("incidunt", "enim");
                            put("consequatur", "est");
                        }});
                        put("quibusdam", new java.util.HashMap<String, Object>() {{
                            put("deserunt", "distinctio");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("labore", "modi");
                            put("qui", "aliquid");
                            put("cupiditate", "quos");
                            put("perferendis", "magni");
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("ipsam", "alias");
                            put("fugit", "dolorum");
                            put("excepturi", "tempora");
                            put("facilis", "tempore");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            configMembership = "labore";
                        }};
                    }};
                    state = new CommonFeatureState() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "UNKNOWN";
                                description = "eum";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("eligendi", "sint");
                        }};
                        state = new FeatureState() {{
                            code = "OK";
                            description = "provident";
                            updateTime = "necessitatibus";
                        }};
                    }};
                }};
                accessToken = "sint";
                alt = "media";
                callback = "dolor";
                featureId = "debitis";
                fields = "a";
                key = "dolorum";
                oauthToken = "in";
                parent = "in";
                prettyPrint = false;
                quotaUser = "illum";
                requestId = "maiores";
                uploadType = "rerum";
                uploadProtocol = "dicta";
            }}            

            GkehubProjectsLocationsFeaturesCreateResponse res = sdk.projects.gkehubProjectsLocationsFeaturesCreate(req, new GkehubProjectsLocationsFeaturesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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
