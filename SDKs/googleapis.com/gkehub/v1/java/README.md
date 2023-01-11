# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new GkehubProjectsLocationsFeaturesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    featureId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    requestId = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
                request = new FeatureInput() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("et", "ut");
                    }};
                    membershipSpecs = new java.util.HashMap<String, openapisdk.models.shared.MembershipFeatureSpecInput>() {{
                        put("et", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = true;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "vitae";
                                        httpsProxy = "totam";
                                        policyDir = "dolores";
                                        secretType = "illum";
                                        syncBranch = "debitis";
                                        syncRepo = "vel";
                                        syncRev = "odio";
                                        syncWaitSecs = "dolore";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "id";
                                        policyDir = "aspernatur";
                                        secretType = "accusantium";
                                        syncRepo = "totam";
                                        syncWaitSecs = "commodi";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "est";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = true;
                                    enablePodTreeLabels = true;
                                    enabled = true;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "voluptas";
                                    enabled = true;
                                    exemptableNamespaces = new String[]() {{
                                        add("illo"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("PROMETHEUS"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "recusandae";
                            }};
                            fleetInherited = true;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("eveniet", "modi");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "inventore";
                                            clientSecret = "ut";
                                            kubectlRedirectUri = "exercitationem";
                                            tenant = "aut";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "tempore";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "maiores";
                                            clientId = "incidunt";
                                            clientSecret = "dolor";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = true;
                                            extraParams = "in";
                                            groupPrefix = "et";
                                            groupsClaim = "omnis";
                                            issuerUri = "ipsum";
                                            kubectlRedirectUri = "ex";
                                            scopes = "dolores";
                                            userClaim = "placeat";
                                            userPrefix = "vel";
                                        }};
                                        proxy = "rerum";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                management = "MANAGEMENT_AUTOMATIC";
                            }};
                        }});
                        put("quam", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = true;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "qui";
                                        httpsProxy = "unde";
                                        policyDir = "in";
                                        secretType = "autem";
                                        syncBranch = "qui";
                                        syncRepo = "ut";
                                        syncRev = "itaque";
                                        syncWaitSecs = "ab";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "neque";
                                        policyDir = "ullam";
                                        secretType = "et";
                                        syncRepo = "accusantium";
                                        syncWaitSecs = "esse";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "quam";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = true;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "sunt";
                                    enabled = false;
                                    exemptableNamespaces = new String[]() {{
                                        add("et"),
                                        add("optio"),
                                        add("qui"),
                                    }};
                                    logDeniesEnabled = true;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = true;
                                }};
                                version = "commodi";
                            }};
                            fleetInherited = true;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("consectetur", "nostrum");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "laboriosam";
                                            clientSecret = "sed";
                                            kubectlRedirectUri = "a";
                                            tenant = "soluta";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "quas";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "consequuntur";
                                            clientId = "laudantium";
                                            clientSecret = "autem";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = false;
                                            extraParams = "doloremque";
                                            groupPrefix = "perferendis";
                                            groupsClaim = "atque";
                                            issuerUri = "ratione";
                                            kubectlRedirectUri = "quisquam";
                                            scopes = "explicabo";
                                            userClaim = "ea";
                                            userPrefix = "maxime";
                                        }};
                                        proxy = "eum";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                management = "MANAGEMENT_UNSPECIFIED";
                            }};
                        }});
                        put("rerum", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = true;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "cumque";
                                        httpsProxy = "minima";
                                        policyDir = "necessitatibus";
                                        secretType = "est";
                                        syncBranch = "quis";
                                        syncRepo = "eum";
                                        syncRev = "labore";
                                        syncWaitSecs = "et";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "impedit";
                                        policyDir = "ad";
                                        secretType = "expedita";
                                        syncRepo = "vel";
                                        syncWaitSecs = "qui";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "nihil";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = true;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "sunt";
                                    enabled = false;
                                    exemptableNamespaces = new String[]() {{
                                        add("quis"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = true;
                                    templateLibraryInstalled = false;
                                }};
                                version = "porro";
                            }};
                            fleetInherited = true;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("accusamus", "numquam");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "rerum";
                                            clientSecret = "ut";
                                            kubectlRedirectUri = "laborum";
                                            tenant = "fugit";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "minus";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "soluta";
                                            clientId = "aperiam";
                                            clientSecret = "consequuntur";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = true;
                                            extraParams = "inventore";
                                            groupPrefix = "delectus";
                                            groupsClaim = "ipsa";
                                            issuerUri = "animi";
                                            kubectlRedirectUri = "animi";
                                            scopes = "ut";
                                            userClaim = "aliquam";
                                            userPrefix = "fuga";
                                        }};
                                        proxy = "sed";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "sed";
                                            clientSecret = "et";
                                            kubectlRedirectUri = "consequuntur";
                                            tenant = "non";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "provident";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "molestiae";
                                            clientId = "pariatur";
                                            clientSecret = "quasi";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "qui";
                                            groupPrefix = "sit";
                                            groupsClaim = "possimus";
                                            issuerUri = "modi";
                                            kubectlRedirectUri = "neque";
                                            scopes = "consequuntur";
                                            userClaim = "quia";
                                            userPrefix = "et";
                                        }};
                                        proxy = "est";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "occaecati";
                                            clientSecret = "ex";
                                            kubectlRedirectUri = "voluptatem";
                                            tenant = "quia";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "velit";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "quae";
                                            clientId = "est";
                                            clientSecret = "ut";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = true;
                                            extraParams = "possimus";
                                            groupPrefix = "voluptatem";
                                            groupsClaim = "dolorum";
                                            issuerUri = "doloribus";
                                            kubectlRedirectUri = "saepe";
                                            scopes = "sunt";
                                            userClaim = "earum";
                                            userPrefix = "et";
                                        }};
                                        proxy = "ut";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED";
                                management = "MANAGEMENT_UNSPECIFIED";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = "DISABLING";
                    }};
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("quam", new java.util.HashMap<String, Object>() {{
                            put("nihil", "dolores");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("impedit", "non");
                            put("magnam", "ut");
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("illo", "qui");
                            put("quia", "ipsam");
                            put("ducimus", "enim");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            configMembership = "blanditiis";
                        }};
                    }};
                    state = new CommonFeatureState() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "CODE_UNSPECIFIED";
                                description = "delectus";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("dolore", "repellat");
                            put("velit", "officia");
                        }};
                        state = new FeatureState() {{
                            code = "OK";
                            description = "sunt";
                            updateTime = "voluptas";
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
* `gkehubProjectsLocationsMembershipsCreate` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehubProjectsLocationsMembershipsGenerateConnectManifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehubProjectsLocationsMembershipsList` - Lists Memberships in a given project and location.
* `gkehubProjectsLocationsMembershipsPatch` - Updates an existing Membership.
* `gkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehubProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehubProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
