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
                    parent = "veritatis";
                }};
                queryParams = new GkehubProjectsLocationsFeaturesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "voluptas";
                    alt = "proto";
                    callback = "enim";
                    featureId = "ut";
                    fields = "in";
                    key = "qui";
                    oauthToken = "quam";
                    prettyPrint = false;
                    quotaUser = "earum";
                    requestId = "distinctio";
                    uploadType = "consequuntur";
                    uploadProtocol = "doloribus";
                }};
                request = new FeatureInput() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("repudiandae", "accusamus");
                        put("mollitia", "aperiam");
                        put("dignissimos", "libero");
                    }};
                    membershipSpecs = new java.util.HashMap<String, openapisdk.models.shared.MembershipFeatureSpecInput>() {{
                        put("officiis", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "aliquid";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = "PRIVILEGED";
                                version = "sint";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = true;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = true;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "perspiciatis";
                                        httpsProxy = "quam";
                                        policyDir = "ad";
                                        secretType = "necessitatibus";
                                        syncBranch = "amet";
                                        syncRepo = "sed";
                                        syncRev = "ad";
                                        syncWaitSecs = "quia";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "amet";
                                        policyDir = "quos";
                                        secretType = "et";
                                        syncRepo = "aliquam";
                                        syncWaitSecs = "est";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "est";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = true;
                                    enablePodTreeLabels = true;
                                    enabled = true;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "dolorem";
                                    enabled = true;
                                    exemptableNamespaces = new String[]() {{
                                        add("sed"),
                                    }};
                                    logDeniesEnabled = true;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("PROMETHEUS"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = true;
                                    templateLibraryInstalled = false;
                                }};
                                version = "et";
                            }};
                            fleetInherited = true;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("velit", "at");
                                put("ut", "numquam");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "natus";
                                            clientSecret = "distinctio";
                                            kubectlRedirectUri = "incidunt";
                                            tenant = "ut";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "non";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "perspiciatis";
                                            clientId = "et";
                                            clientSecret = "fugit";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = false;
                                            extraParams = "eos";
                                            groupPrefix = "eum";
                                            groupsClaim = "aliquid";
                                            issuerUri = "id";
                                            kubectlRedirectUri = "beatae";
                                            scopes = "eius";
                                            userClaim = "perspiciatis";
                                            userPrefix = "distinctio";
                                        }};
                                        proxy = "numquam";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED";
                                management = "MANAGEMENT_AUTOMATIC";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "aut";
                                    exemptableNamespaces = new String[]() {{
                                        add("eum"),
                                        add("est"),
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
                                version = "vel";
                            }};
                        }});
                        put("magni", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = true;
                                version = "et";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = "PRIVILEGED";
                                version = "corrupti";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "delectus";
                                        httpsProxy = "neque";
                                        policyDir = "hic";
                                        secretType = "vero";
                                        syncBranch = "expedita";
                                        syncRepo = "qui";
                                        syncRev = "et";
                                        syncWaitSecs = "cum";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "qui";
                                        policyDir = "iste";
                                        secretType = "ratione";
                                        syncRepo = "aliquam";
                                        syncWaitSecs = "quia";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "voluptatem";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = true;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "rerum";
                                    enabled = false;
                                    exemptableNamespaces = new String[]() {{
                                        add("omnis"),
                                        add("nobis"),
                                    }};
                                    logDeniesEnabled = true;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "et";
                            }};
                            fleetInherited = true;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("nemo", "a");
                                put("voluptate", "sed");
                                put("provident", "esse");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "voluptatem";
                                            clientSecret = "eum";
                                            kubectlRedirectUri = "quo";
                                            tenant = "repellat";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "veritatis";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "consequatur";
                                            clientId = "voluptatem";
                                            clientSecret = "animi";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = false;
                                            extraParams = "qui";
                                            groupPrefix = "quia";
                                            groupsClaim = "deserunt";
                                            issuerUri = "ipsum";
                                            kubectlRedirectUri = "dolores";
                                            scopes = "earum";
                                            userClaim = "tempore";
                                            userPrefix = "eos";
                                        }};
                                        proxy = "vel";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "enim";
                                            clientSecret = "esse";
                                            kubectlRedirectUri = "minima";
                                            tenant = "ab";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "labore";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "nemo";
                                            clientId = "atque";
                                            clientSecret = "vel";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "omnis";
                                            groupPrefix = "in";
                                            groupsClaim = "recusandae";
                                            issuerUri = "ut";
                                            kubectlRedirectUri = "odit";
                                            scopes = "et";
                                            userClaim = "ut";
                                            userPrefix = "quod";
                                        }};
                                        proxy = "quod";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED";
                                management = "MANAGEMENT_AUTOMATIC";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "commodi";
                                    exemptableNamespaces = new String[]() {{
                                        add("minima"),
                                        add("similique"),
                                        add("sed"),
                                    }};
                                    installSpec = "INSTALL_SPEC_ENABLED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new openapisdk.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]() {{
                                            add("CLOUD_MONITORING"),
                                            add("CLOUD_MONITORING"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = true;
                                    }};
                                }};
                                version = "facilis";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = "STATE_UNSPECIFIED";
                    }};
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("non", new java.util.HashMap<String, Object>() {{
                            put("similique", "perferendis");
                        }});
                        put("quaerat", new java.util.HashMap<String, Object>() {{
                            put("quia", "soluta");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = true;
                                version = "delectus";
                            }};
                        }};
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("quos", "placeat");
                            put("facere", "aperiam");
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("perspiciatis", "explicabo");
                            put("omnis", "voluptatum");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = "ANTHOS_LICENSE";
                            configMembership = "rerum";
                        }};
                    }};
                    state = new CommonFeatureState() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "FAILED";
                                description = "mollitia";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("quibusdam", "voluptas");
                            put("suscipit", "placeat");
                            put("et", "ad");
                        }};
                        state = new FeatureState() {{
                            code = "CODE_UNSPECIFIED";
                            description = "laborum";
                            updateTime = "asperiores";
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
* `gkehubProjectsLocationsFeaturesPatch` - Updates an existing Feature.
* `gkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `gkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehubProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehubProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
