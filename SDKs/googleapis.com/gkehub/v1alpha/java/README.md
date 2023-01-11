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
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = true;
                                version = "vitae";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "PRIVILEGED";
                                version = "dolores";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = true;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "odio";
                                        httpsProxy = "dolore";
                                        policyDir = "id";
                                        secretType = "aspernatur";
                                        syncBranch = "accusantium";
                                        syncRepo = "totam";
                                        syncRev = "commodi";
                                        syncWaitSecs = "quis";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "est";
                                        policyDir = "aut";
                                        secretType = "odit";
                                        syncRepo = "non";
                                        syncWaitSecs = "voluptas";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "aut";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = true;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "autem";
                                    enabled = true;
                                    exemptableNamespaces = new String[]() {{
                                        add("odio"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("PROMETHEUS"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = true;
                                    templateLibraryInstalled = true;
                                }};
                                version = "ut";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("reprehenderit", "tempore");
                                put("maiores", "incidunt");
                                put("dolor", "beatae");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "in";
                                            clientSecret = "et";
                                            kubectlRedirectUri = "omnis";
                                            tenant = "ipsum";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "dolores";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "placeat";
                                            clientId = "vel";
                                            clientSecret = "rerum";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = true;
                                            extraParams = "quam";
                                            groupPrefix = "reprehenderit";
                                            groupsClaim = "qui";
                                            issuerUri = "qui";
                                            kubectlRedirectUri = "unde";
                                            scopes = "in";
                                            userClaim = "autem";
                                            userPrefix = "qui";
                                        }};
                                        proxy = "ut";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "itaque";
                                            clientSecret = "ab";
                                            kubectlRedirectUri = "neque";
                                            tenant = "ullam";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "accusantium";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "esse";
                                            clientId = "architecto";
                                            clientSecret = "quam";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "soluta";
                                            groupPrefix = "sunt";
                                            groupsClaim = "voluptates";
                                            issuerUri = "magni";
                                            kubectlRedirectUri = "et";
                                            scopes = "optio";
                                            userClaim = "qui";
                                            userPrefix = "earum";
                                        }};
                                        proxy = "illo";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                defaultChannel = "REGULAR";
                                management = "MANAGEMENT_MANUAL";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "dolor";
                                    exemptableNamespaces = new String[]() {{
                                        add("error"),
                                        add("reprehenderit"),
                                    }};
                                    installSpec = "INSTALL_SPEC_SUSPENDED";
                                    logDeniesEnabled = true;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new openapisdk.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]() {{
                                            add("CLOUD_MONITORING"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = true;
                                    }};
                                }};
                                version = "aut";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = "ENABLED";
                            }};
                        }});
                        put("consequuntur", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = true;
                                version = "ipsa";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "NON_PRIVILEGED";
                                version = "doloremque";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = true;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = true;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "quisquam";
                                        httpsProxy = "explicabo";
                                        policyDir = "ea";
                                        secretType = "maxime";
                                        syncBranch = "eum";
                                        syncRepo = "perferendis";
                                        syncRev = "et";
                                        syncWaitSecs = "rerum";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "reiciendis";
                                        policyDir = "quis";
                                        secretType = "cumque";
                                        syncRepo = "minima";
                                        syncWaitSecs = "necessitatibus";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "quis";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = true;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "impedit";
                                    enabled = true;
                                    exemptableNamespaces = new String[]() {{
                                        add("vel"),
                                        add("qui"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("CLOUD_MONITORING"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "sit";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("vel", "vel");
                                put("placeat", "qui");
                                put("nisi", "quis");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "porro";
                                            clientSecret = "rerum";
                                            kubectlRedirectUri = "et";
                                            tenant = "accusamus";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "laborum";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "rerum";
                                            clientId = "ut";
                                            clientSecret = "laborum";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "minus";
                                            groupPrefix = "soluta";
                                            groupsClaim = "aperiam";
                                            issuerUri = "consequuntur";
                                            kubectlRedirectUri = "excepturi";
                                            scopes = "mollitia";
                                            userClaim = "inventore";
                                            userPrefix = "delectus";
                                        }};
                                        proxy = "ipsa";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "animi";
                                            clientSecret = "animi";
                                            kubectlRedirectUri = "ut";
                                            tenant = "aliquam";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "sed";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "sed";
                                            clientId = "et";
                                            clientSecret = "consequuntur";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = true;
                                            extraParams = "provident";
                                            groupPrefix = "molestiae";
                                            groupsClaim = "pariatur";
                                            issuerUri = "quasi";
                                            kubectlRedirectUri = "corrupti";
                                            scopes = "enim";
                                            userClaim = "qui";
                                            userPrefix = "sit";
                                        }};
                                        proxy = "possimus";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                defaultChannel = "REGULAR";
                                management = "MANAGEMENT_MANUAL";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "quia";
                                    exemptableNamespaces = new String[]() {{
                                        add("est"),
                                        add("occaecati"),
                                    }};
                                    installSpec = "INSTALL_SPEC_NOT_INSTALLED";
                                    logDeniesEnabled = true;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new openapisdk.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]() {{
                                            add("CLOUD_MONITORING"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = true;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = true;
                                    }};
                                }};
                                version = "in";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = "ENABLED";
                            }};
                        }});
                        put("voluptatem", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = true;
                                enableStackdriverOnApplications = true;
                                version = "saepe";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "NON_PRIVILEGED";
                                version = "earum";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = true;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = true;
                                    enabled = true;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "et";
                                        httpsProxy = "est";
                                        policyDir = "ipsum";
                                        secretType = "quam";
                                        syncBranch = "voluptas";
                                        syncRepo = "nihil";
                                        syncRev = "dolores";
                                        syncWaitSecs = "suscipit";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "impedit";
                                        policyDir = "non";
                                        secretType = "magnam";
                                        syncRepo = "ut";
                                        syncWaitSecs = "possimus";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "qui";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "enim";
                                    enabled = true;
                                    exemptableNamespaces = new String[]() {{
                                        add("delectus"),
                                    }};
                                    logDeniesEnabled = true;
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
                                version = "voluptas";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("a", "qui");
                                put("excepturi", "autem");
                                put("corporis", "dicta");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "doloremque";
                                            clientSecret = "quae";
                                            kubectlRedirectUri = "nisi";
                                            tenant = "recusandae";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "minus";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "et";
                                            clientId = "rerum";
                                            clientSecret = "ut";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = false;
                                            extraParams = "et";
                                            groupPrefix = "reiciendis";
                                            groupsClaim = "aspernatur";
                                            issuerUri = "praesentium";
                                            kubectlRedirectUri = "porro";
                                            scopes = "nihil";
                                            userClaim = "adipisci";
                                            userPrefix = "consequatur";
                                        }};
                                        proxy = "illum";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "accusantium";
                                            clientSecret = "atque";
                                            kubectlRedirectUri = "amet";
                                            tenant = "nisi";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "est";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "quo";
                                            clientId = "vero";
                                            clientSecret = "alias";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = true;
                                            extraParams = "eius";
                                            groupPrefix = "repellat";
                                            groupsClaim = "beatae";
                                            issuerUri = "omnis";
                                            kubectlRedirectUri = "totam";
                                            scopes = "aut";
                                            userClaim = "et";
                                            userPrefix = "magni";
                                        }};
                                        proxy = "necessitatibus";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                defaultChannel = "REGULAR";
                                management = "MANAGEMENT_UNSPECIFIED";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "voluptas";
                                    exemptableNamespaces = new String[]() {{
                                        add("veniam"),
                                        add("architecto"),
                                    }};
                                    installSpec = "INSTALL_SPEC_SUSPENDED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new openapisdk.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]() {{
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("CLOUD_MONITORING"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = true;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = true;
                                    }};
                                }};
                                version = "quo";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = "CERTIFICATE_MANAGEMENT_UNSPECIFIED";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = "STATE_UNSPECIFIED";
                    }};
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("commodi", new java.util.HashMap<String, Object>() {{
                            put("facere", "in");
                            put("et", "odit");
                        }});
                        put("est", new java.util.HashMap<String, Object>() {{
                            put("ipsum", "aut");
                            put("perspiciatis", "et");
                            put("vero", "voluptatem");
                        }});
                        put("ex", new java.util.HashMap<String, Object>() {{
                            put("vero", "distinctio");
                            put("cumque", "ea");
                            put("non", "non");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = true;
                                enableStackdriverOnApplications = true;
                                version = "quae";
                            }};
                        }};
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("magni", "minus");
                        }};
                        cloudauditlogging = new CloudAuditLoggingFeatureSpec() {{
                            allowlistedServiceAccounts = new String[]() {{
                                add("aut"),
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("iusto", "quia");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = "PAY_AS_YOU_GO";
                            configMembership = "debitis";
                        }};
                        workloadcertificate = new FeatureSpec() {{
                            defaultConfig = new MembershipSpec() {{
                                certificateManagement = "CERTIFICATE_MANAGEMENT_UNSPECIFIED";
                            }};
                            provisionGoogleCa = "DISABLED";
                        }};
                    }};
                    state = new CommonFeatureState1() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "OK";
                                description = "ut";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("nihil", "laborum");
                            put("recusandae", "nihil");
                            put("exercitationem", "iste");
                        }};
                        state = new FeatureState() {{
                            code = "ERROR";
                            description = "id";
                            updateTime = "autem";
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
* `gkehubProjectsLocationsFleetsCreate` - Creates a fleet.
* `gkehubProjectsLocationsFleetsList` - Returns all fleets within an organization or a project that the caller has access to.
* `gkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `gkehubProjectsLocationsMembershipsCreate` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehubProjectsLocationsMembershipsGenerateConnectManifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehubProjectsLocationsMembershipsList` - Lists Memberships in a given project and location.
* `gkehubProjectsLocationsMembershipsListAdmin` - Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.
* `gkehubProjectsLocationsMembershipsPatch` - Updates an existing Membership.
* `gkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehubProjectsLocationsMembershipsValidateCreate` - ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.
* `gkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehubProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehubProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
