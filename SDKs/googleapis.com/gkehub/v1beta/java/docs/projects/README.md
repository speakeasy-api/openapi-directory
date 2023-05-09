# projects

### Available Operations

* [gkehubProjectsLocationsFeaturesCreate](#gkehubprojectslocationsfeaturescreate) - Adds a new Feature.
* [gkehubProjectsLocationsFeaturesList](#gkehubprojectslocationsfeatureslist) - Lists Features in a given project and location.
* [gkehubProjectsLocationsFleetsCreate](#gkehubprojectslocationsfleetscreate) - Creates a fleet.
* [gkehubProjectsLocationsFleetsList](#gkehubprojectslocationsfleetslist) - Returns all fleets within an organization or a project that the caller has access to.
* [gkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [gkehubProjectsLocationsMembershipsBindingsCreate](#gkehubprojectslocationsmembershipsbindingscreate) - Creates a MembershipBinding.
* [gkehubProjectsLocationsMembershipsBindingsList](#gkehubprojectslocationsmembershipsbindingslist) - Lists MembershipBindings.
* [gkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkehubProjectsLocationsNamespacesCreate](#gkehubprojectslocationsnamespacescreate) - Creates a fleet namespace.
* [gkehubProjectsLocationsNamespacesList](#gkehubprojectslocationsnamespaceslist) - Lists fleet namespaces.
* [gkehubProjectsLocationsNamespacesRbacrolebindingsCreate](#gkehubprojectslocationsnamespacesrbacrolebindingscreate) - Creates a RBACRoleBinding.
* [gkehubProjectsLocationsNamespacesRbacrolebindingsList](#gkehubprojectslocationsnamespacesrbacrolebindingslist) - Lists RBACRoleBinding.
* [gkehubProjectsLocationsOperationsCancel](#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkehubProjectsLocationsOperationsList](#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [gkehubProjectsLocationsScopesCreate](#gkehubprojectslocationsscopescreate) - Creates a Scope.
* [gkehubProjectsLocationsScopesDelete](#gkehubprojectslocationsscopesdelete) - Deletes a Scope.
* [gkehubProjectsLocationsScopesGet](#gkehubprojectslocationsscopesget) - Returns the details of a Scope.
* [gkehubProjectsLocationsScopesList](#gkehubprojectslocationsscopeslist) - Lists Scopes.
* [gkehubProjectsLocationsScopesPatch](#gkehubprojectslocationsscopespatch) - Updates a scopes.

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
import org.openapis.openapi.models.shared.AnthosObservabilityFeatureSpec;
import org.openapis.openapi.models.shared.AnthosObservabilityMembershipSpec;
import org.openapis.openapi.models.shared.AppDevExperienceFeatureState;
import org.openapis.openapi.models.shared.CommonFeatureSpec;
import org.openapis.openapi.models.shared.CommonFeatureState;
import org.openapis.openapi.models.shared.CommonFleetDefaultMemberConfigSpecInput;
import org.openapis.openapi.models.shared.ConfigManagementBinauthzConfig;
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
import org.openapis.openapi.models.shared.FleetObservabilityFeatureSpec;
import org.openapis.openapi.models.shared.FleetObservabilityLoggingConfig;
import org.openapis.openapi.models.shared.FleetObservabilityRoutingConfig;
import org.openapis.openapi.models.shared.FleetObservabilityRoutingConfigModeEnum;
import org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput;
import org.openapis.openapi.models.shared.IdentityServiceAzureADConfigInput;
import org.openapis.openapi.models.shared.IdentityServiceGoogleConfig;
import org.openapis.openapi.models.shared.IdentityServiceMembershipSpecInput;
import org.openapis.openapi.models.shared.IdentityServiceOidcConfigInput;
import org.openapis.openapi.models.shared.MembershipFeatureSpecInput;
import org.openapis.openapi.models.shared.MembershipSpec;
import org.openapis.openapi.models.shared.MembershipSpecSecurityPolicyEnum;
import org.openapis.openapi.models.shared.MultiClusterIngressFeatureSpec;
import org.openapis.openapi.models.shared.MultiClusterIngressFeatureSpecBillingEnum;
import org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec;
import org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpecManagementEnum;
import org.openapis.openapi.models.shared.PolicyControllerHubConfig;
import org.openapis.openapi.models.shared.PolicyControllerHubConfigInstallSpecEnum;
import org.openapis.openapi.models.shared.PolicyControllerMembershipSpec;
import org.openapis.openapi.models.shared.PolicyControllerMonitoringConfig;
import org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum;
import org.openapis.openapi.models.shared.PolicyControllerPolicyContentSpec;
import org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig;
import org.openapis.openapi.models.shared.PolicyControllerResourceList;
import org.openapis.openapi.models.shared.PolicyControllerResourceRequirements;
import org.openapis.openapi.models.shared.PolicyControllerTemplateLibraryConfig;
import org.openapis.openapi.models.shared.PolicyControllerTemplateLibraryConfigInstallationEnum;
import org.openapis.openapi.models.shared.PolicyControllerToleration;
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

            GkehubProjectsLocationsFeaturesCreateRequest req = new GkehubProjectsLocationsFeaturesCreateRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                featureInput = new FeatureInput() {{
                    fleetDefaultMemberConfig = new CommonFleetDefaultMemberConfigSpecInput() {{
                        identityservice = new IdentityServiceMembershipSpecInput() {{
                            authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                add(new IdentityServiceAuthMethodInput() {{
                                    azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                        clientId = "deleniti";
                                        clientSecret = "impedit";
                                        kubectlRedirectUri = "aliquam";
                                        tenant = "fugit";
                                    }};
                                    googleConfig = new IdentityServiceGoogleConfig() {{
                                        disable = false;
                                    }};
                                    name = "Miss Dennis Friesen";
                                    oidcConfig = new IdentityServiceOidcConfigInput() {{
                                        certificateAuthorityData = "placeat";
                                        clientId = "velit";
                                        clientSecret = "eum";
                                        deployCloudConsoleProxy = false;
                                        enableAccessToken = false;
                                        extraParams = "autem";
                                        groupPrefix = "nobis";
                                        groupsClaim = "quas";
                                        issuerUri = "assumenda";
                                        kubectlRedirectUri = "nulla";
                                        scopes = "voluptas";
                                        userClaim = "libero";
                                        userPrefix = "quasi";
                                    }};
                                    proxy = "tempora";
                                }}),
                            }};
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("explicabo", "provident");
                        put("ipsa", "molestiae");
                    }};
                    membershipSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.MembershipFeatureSpecInput>() {{
                        put("odio", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "eius";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = MembershipSpecSecurityPolicyEnum.NON_PRIVILEGED;
                                version = "esse";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "rem";
                                        httpsProxy = "fuga";
                                        policyDir = "reprehenderit";
                                        secretType = "quidem";
                                        syncBranch = "fugiat";
                                        syncRepo = "ut";
                                        syncRev = "eum";
                                        syncWaitSecs = "suscipit";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "assumenda";
                                        policyDir = "eos";
                                        secretType = "praesentium";
                                        syncRepo = "quisquam";
                                        syncWaitSecs = "veritatis";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "ipsa";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "id";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("neque"),
                                        add("quo"),
                                        add("illum"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "ab";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("consequatur", "tempora");
                                put("debitis", "ipsam");
                                put("aspernatur", "sequi");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "esse";
                                            clientSecret = "recusandae";
                                            kubectlRedirectUri = "aperiam";
                                            tenant = "distinctio";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Cody Blick";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "accusamus";
                                            clientId = "aliquam";
                                            clientSecret = "odio";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "occaecati";
                                            groupPrefix = "commodi";
                                            groupsClaim = "sapiente";
                                            issuerUri = "dolores";
                                            kubectlRedirectUri = "deserunt";
                                            scopes = "molestiae";
                                            userClaim = "accusantium";
                                            userPrefix = "porro";
                                        }};
                                        proxy = "eum";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "quas";
                                            clientSecret = "praesentium";
                                            kubectlRedirectUri = "consequuntur";
                                            tenant = "deleniti";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Lee O'Conner";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "explicabo";
                                            clientId = "minima";
                                            clientSecret = "nisi";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "fugit";
                                            groupPrefix = "sapiente";
                                            groupsClaim = "consequuntur";
                                            issuerUri = "ratione";
                                            kubectlRedirectUri = "explicabo";
                                            scopes = "saepe";
                                            userClaim = "occaecati";
                                            userPrefix = "atque";
                                        }};
                                        proxy = "et";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "esse";
                                            clientSecret = "eveniet";
                                            kubectlRedirectUri = "accusamus";
                                            tenant = "veritatis";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Traci Reilly";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "quasi";
                                            clientId = "saepe";
                                            clientSecret = "vel";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "harum";
                                            groupPrefix = "molestiae";
                                            groupsClaim = "rerum";
                                            issuerUri = "occaecati";
                                            kubectlRedirectUri = "minima";
                                            scopes = "distinctio";
                                            userClaim = "eligendi";
                                            userPrefix = "sit";
                                        }};
                                        proxy = "culpa";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "tempore";
                                            clientSecret = "adipisci";
                                            kubectlRedirectUri = "cumque";
                                            tenant = "consequuntur";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Sadie Hackett";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "esse";
                                            clientId = "blanditiis";
                                            clientSecret = "provident";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "a";
                                            groupPrefix = "nulla";
                                            groupsClaim = "quas";
                                            issuerUri = "esse";
                                            kubectlRedirectUri = "quasi";
                                            scopes = "a";
                                            userClaim = "error";
                                            userPrefix = "sint";
                                        }};
                                        proxy = "pariatur";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.MANUAL;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_UNSPECIFIED;
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "eveniet";
                                    constraintViolationLimit = "asperiores";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("veritatis", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "consequuntur";
                                                    memory = "quasi";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "similique";
                                                    memory = "culpa";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "tenetur";
                                                    key = "quae";
                                                    operator = "earum";
                                                    value = "vel";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "in";
                                                    key = "eius";
                                                    operator = "libero";
                                                    value = "illum";
                                                }}),
                                            }};
                                            replicaCount = "soluta";
                                        }});
                                        put("accusantium", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "aliquam";
                                                    memory = "sapiente";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "dicta";
                                                    memory = "ullam";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "ullam";
                                                    key = "nisi";
                                                    operator = "aut";
                                                    value = "voluptatum";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "qui";
                                                    key = "quibusdam";
                                                    operator = "ex";
                                                    value = "deleniti";
                                                }}),
                                            }};
                                            replicaCount = "itaque";
                                        }});
                                        put("dolorum", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "architecto";
                                                    memory = "omnis";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "tenetur";
                                                    memory = "quasi";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "et";
                                                    key = "voluptate";
                                                    operator = "ipsa";
                                                    value = "minima";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "veritatis";
                                                    key = "consectetur";
                                                    operator = "adipisci";
                                                    value = "iste";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "temporibus";
                                                    key = "accusantium";
                                                    operator = "rem";
                                                    value = "aut";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "laudantium";
                                                    key = "eum";
                                                    operator = "mollitia";
                                                    value = "ab";
                                                }}),
                                            }};
                                            replicaCount = "corrupti";
                                        }});
                                        put("non", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "voluptatem";
                                                    memory = "dolor";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "occaecati";
                                                    memory = "numquam";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "explicabo";
                                                    key = "voluptas";
                                                    operator = "aut";
                                                    value = "dignissimos";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "dicta";
                                                    key = "maiores";
                                                    operator = "natus";
                                                    value = "velit";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "voluptatibus";
                                                    key = "voluptas";
                                                    operator = "asperiores";
                                                    value = "aperiam";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "ea";
                                                    key = "quaerat";
                                                    operator = "consequuntur";
                                                    value = "repellendus";
                                                }}),
                                            }};
                                            replicaCount = "officia";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("dignissimos"),
                                        add("officia"),
                                        add("asperiores"),
                                        add("nemo"),
                                    }};
                                    installSpec = PolicyControllerHubConfigInstallSpecEnum.INSTALL_SPEC_UNSPECIFIED;
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add(PolicyControllerMonitoringConfigBackendsEnum.CLOUD_MONITORING),
                                            add(PolicyControllerMonitoringConfigBackendsEnum.CLOUD_MONITORING),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("ab", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("fuga"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                            put("suscipit", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("culpa"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                        }};
                                        templateLibrary = new PolicyControllerTemplateLibraryConfig() {{
                                            included = false;
                                            installation = PolicyControllerTemplateLibraryConfigInstallationEnum.ALL;
                                        }};
                                    }};
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                        installation = PolicyControllerTemplateLibraryConfigInstallationEnum.NOT_INSTALLED;
                                    }};
                                }};
                                version = "fugiat";
                            }};
                        }});
                        put("vel", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "ducimus";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = MembershipSpecSecurityPolicyEnum.NON_PRIVILEGED;
                                version = "vel";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "labore";
                                        httpsProxy = "possimus";
                                        policyDir = "facilis";
                                        secretType = "cum";
                                        syncBranch = "commodi";
                                        syncRepo = "in";
                                        syncRev = "corporis";
                                        syncWaitSecs = "reiciendis";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "assumenda";
                                        policyDir = "nemo";
                                        secretType = "recusandae";
                                        syncRepo = "aliquid";
                                        syncWaitSecs = "aperiam";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "cum";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "consectetur";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("exercitationem"),
                                        add("earum"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "quidem";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("necessitatibus", "dolore");
                                put("sunt", "asperiores");
                                put("adipisci", "non");
                                put("amet", "beatae");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "a";
                                            clientSecret = "debitis";
                                            kubectlRedirectUri = "consectetur";
                                            tenant = "corporis";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Rick Beer";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "vitae";
                                            clientId = "accusamus";
                                            clientSecret = "similique";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "tempora";
                                            groupPrefix = "aspernatur";
                                            groupsClaim = "voluptas";
                                            issuerUri = "voluptas";
                                            kubectlRedirectUri = "voluptas";
                                            scopes = "minima";
                                            userClaim = "nobis";
                                            userPrefix = "dolorum";
                                        }};
                                        proxy = "adipisci";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "minus";
                                            clientSecret = "dolores";
                                            kubectlRedirectUri = "blanditiis";
                                            tenant = "in";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Suzanne Torphy";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "adipisci";
                                            clientId = "cum";
                                            clientSecret = "blanditiis";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "quas";
                                            groupPrefix = "hic";
                                            groupsClaim = "nesciunt";
                                            issuerUri = "culpa";
                                            kubectlRedirectUri = "corrupti";
                                            scopes = "pariatur";
                                            userClaim = "totam";
                                            userPrefix = "hic";
                                        }};
                                        proxy = "exercitationem";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.MANUAL;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_UNSPECIFIED;
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "rerum";
                                    constraintViolationLimit = "sed";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("explicabo", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "asperiores";
                                                    memory = "facilis";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "voluptate";
                                                    memory = "expedita";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "iste";
                                                    key = "dolore";
                                                    operator = "laborum";
                                                    value = "sed";
                                                }}),
                                            }};
                                            replicaCount = "in";
                                        }});
                                        put("commodi", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "quidem";
                                                    memory = "explicabo";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "voluptas";
                                                    memory = "unde";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "suscipit";
                                                    key = "sapiente";
                                                    operator = "debitis";
                                                    value = "illo";
                                                }}),
                                            }};
                                            replicaCount = "reiciendis";
                                        }});
                                        put("perferendis", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "corrupti";
                                                    memory = "maiores";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "incidunt";
                                                    memory = "sed";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "eius";
                                                    key = "necessitatibus";
                                                    operator = "ipsum";
                                                    value = "ea";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "occaecati";
                                                    key = "quos";
                                                    operator = "voluptatibus";
                                                    value = "tempora";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "tempora";
                                                    key = "voluptate";
                                                    operator = "reiciendis";
                                                    value = "ex";
                                                }}),
                                            }};
                                            replicaCount = "sit";
                                        }});
                                        put("non", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "officiis";
                                                    memory = "praesentium";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "facilis";
                                                    memory = "quaerat";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "ipsam";
                                                    key = "debitis";
                                                    operator = "rem";
                                                    value = "sit";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "nobis";
                                                    key = "error";
                                                    operator = "veniam";
                                                    value = "minima";
                                                }}),
                                            }};
                                            replicaCount = "recusandae";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("nulla"),
                                        add("magni"),
                                        add("aperiam"),
                                        add("saepe"),
                                    }};
                                    installSpec = PolicyControllerHubConfigInstallSpecEnum.INSTALL_SPEC_NOT_INSTALLED;
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add(PolicyControllerMonitoringConfigBackendsEnum.PROMETHEUS),
                                            add(PolicyControllerMonitoringConfigBackendsEnum.CLOUD_MONITORING),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("laudantium", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("praesentium"),
                                                    add("cum"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.MANAGEMENT_UNSPECIFIED;
                                            }});
                                        }};
                                        templateLibrary = new PolicyControllerTemplateLibraryConfig() {{
                                            included = false;
                                            installation = PolicyControllerTemplateLibraryConfigInstallationEnum.ALL;
                                        }};
                                    }};
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                        installation = PolicyControllerTemplateLibraryConfigInstallationEnum.NOT_INSTALLED;
                                    }};
                                }};
                                version = "error";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = FeatureResourceStateStateEnum.SERVICE_UPDATING;
                    }};;
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("debitis", new java.util.HashMap<String, Object>() {{
                            put("dolorum", "nostrum");
                        }});
                        put("officia", new java.util.HashMap<String, Object>() {{
                            put("corrupti", "accusamus");
                            put("tempora", "atque");
                            put("fugit", "ut");
                        }});
                        put("fugiat", new java.util.HashMap<String, Object>() {{
                            put("culpa", "expedita");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "magnam";
                            }};;
                        }};;
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("esse", "ipsam");
                        }};
                        fleetobservability = new FleetObservabilityFeatureSpec() {{
                            loggingConfig = new FleetObservabilityLoggingConfig() {{
                                defaultConfig = new FleetObservabilityRoutingConfig() {{
                                    mode = FleetObservabilityRoutingConfigModeEnum.MODE_UNSPECIFIED;
                                }};;
                                fleetScopeLogsConfig = new FleetObservabilityRoutingConfig() {{
                                    mode = FleetObservabilityRoutingConfigModeEnum.COPY;
                                }};;
                            }};;
                        }};;
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = MultiClusterIngressFeatureSpecBillingEnum.PAY_AS_YOU_GO;
                            configMembership = "repudiandae";
                        }};;
                    }};;
                    state = new CommonFeatureState() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = StatusCodeEnum.OK;
                                description = "et";
                            }};;
                        }};;
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("ex", "sed");
                            put("sit", "vel");
                            put("nostrum", "saepe");
                        }};
                        state = new FeatureState() {{
                            code = FeatureStateCodeEnum.WARNING;
                            description = "consequatur";
                            updateTime = "incidunt";
                        }};;
                    }};;
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "harum";
                featureId = "dicta";
                fields = "architecto";
                key = "occaecati";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "quidem";
                requestId = "atque";
                uploadType = "laborum";
                uploadProtocol = "nam";
            }};            

            GkehubProjectsLocationsFeaturesCreateResponse res = sdk.projects.gkehubProjectsLocationsFeaturesCreate(req, new GkehubProjectsLocationsFeaturesCreateSecurity("tenetur", "laboriosam") {{
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

            GkehubProjectsLocationsFeaturesListRequest req = new GkehubProjectsLocationsFeaturesListRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "unde";
                fields = "reiciendis";
                filter = "provident";
                key = "repellendus";
                oauthToken = "delectus";
                orderBy = "voluptates";
                pageSize = 16871L;
                pageToken = "est";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "reprehenderit";
                uploadProtocol = "facere";
            }};            

            GkehubProjectsLocationsFeaturesListResponse res = sdk.projects.gkehubProjectsLocationsFeaturesList(req, new GkehubProjectsLocationsFeaturesListSecurity("fuga", "praesentium") {{
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

## gkehubProjectsLocationsFleetsCreate

Creates a fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFleetsCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFleetsCreateResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFleetsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FleetInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsFleetsCreateRequest req = new GkehubProjectsLocationsFleetsCreateRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                fleetInput = new FleetInput() {{
                    displayName = "voluptatem";
                }};;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "atque";
                key = "reprehenderit";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "suscipit";
                uploadProtocol = "quidem";
            }};            

            GkehubProjectsLocationsFleetsCreateResponse res = sdk.projects.gkehubProjectsLocationsFleetsCreate(req, new GkehubProjectsLocationsFleetsCreateSecurity("maxime", "et") {{
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

## gkehubProjectsLocationsFleetsList

Returns all fleets within an organization or a project that the caller has access to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFleetsListRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFleetsListResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFleetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsFleetsListRequest req = new GkehubProjectsLocationsFleetsListRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "error";
                key = "officiis";
                oauthToken = "officiis";
                pageSize = 880107L;
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "aspernatur";
                uploadProtocol = "ex";
            }};            

            GkehubProjectsLocationsFleetsListResponse res = sdk.projects.gkehubProjectsLocationsFleetsList(req, new GkehubProjectsLocationsFleetsListSecurity("maiores", "corrupti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFleetsResponse != null) {
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

            GkehubProjectsLocationsListRequest req = new GkehubProjectsLocationsListRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "atque";
                filter = "atque";
                key = "sunt";
                oauthToken = "recusandae";
                pageSize = 680697L;
                pageToken = "repellendus";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "reiciendis";
                uploadProtocol = "doloremque";
            }};            

            GkehubProjectsLocationsListResponse res = sdk.projects.gkehubProjectsLocationsList(req, new GkehubProjectsLocationsListSecurity("repudiandae", "dicta") {{
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

            GkehubProjectsLocationsMembershipsBindingsCreateRequest req = new GkehubProjectsLocationsMembershipsBindingsCreateRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                membershipBindingInput = new MembershipBindingInput() {{
                    fleet = false;
                    name = "Jill Hudson";
                    scope = "molestias";
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "occaecati";
                key = "officiis";
                membershipBindingId = "perspiciatis";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "eveniet";
                uploadProtocol = "occaecati";
            }};            

            GkehubProjectsLocationsMembershipsBindingsCreateResponse res = sdk.projects.gkehubProjectsLocationsMembershipsBindingsCreate(req, new GkehubProjectsLocationsMembershipsBindingsCreateSecurity("consequuntur", "fugit") {{
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

            GkehubProjectsLocationsMembershipsBindingsListRequest req = new GkehubProjectsLocationsMembershipsBindingsListRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.MEDIA;
                callback = "illo";
                fields = "corporis";
                key = "quidem";
                oauthToken = "eveniet";
                pageSize = 247399L;
                pageToken = "vero";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "iure";
                uploadProtocol = "ipsa";
            }};            

            GkehubProjectsLocationsMembershipsBindingsListResponse res = sdk.projects.gkehubProjectsLocationsMembershipsBindingsList(req, new GkehubProjectsLocationsMembershipsBindingsListSecurity("totam", "quae") {{
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

            GkehubProjectsLocationsMembershipsGetIamPolicyRequest req = new GkehubProjectsLocationsMembershipsGetIamPolicyRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "iure";
                fields = "necessitatibus";
                key = "ratione";
                oauthToken = "laborum";
                optionsRequestedPolicyVersion = 715208L;
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "rem";
                uploadProtocol = "aliquam";
            }};            

            GkehubProjectsLocationsMembershipsGetIamPolicyResponse res = sdk.projects.gkehubProjectsLocationsMembershipsGetIamPolicy(req, new GkehubProjectsLocationsMembershipsGetIamPolicySecurity("ad", "repellat") {{
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

            GkehubProjectsLocationsMembershipsSetIamPolicyRequest req = new GkehubProjectsLocationsMembershipsSetIamPolicyRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptas"),
                                            add("alias"),
                                            add("maiores"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("id"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "dolore";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quae"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quaerat"),
                                            add("molestiae"),
                                            add("ex"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("adipisci"),
                                            add("debitis"),
                                            add("laudantium"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "nemo";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("provident"),
                                            add("quis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("provident"),
                                            add("aspernatur"),
                                            add("ullam"),
                                            add("quasi"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("mollitia"),
                                            add("provident"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ex"),
                                            add("aliquid"),
                                            add("accusantium"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "doloribus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "in";
                                    expression = "nam";
                                    location = "earum";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("placeat"),
                                    add("modi"),
                                    add("voluptatibus"),
                                }};
                                role = "molestias";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "officiis";
                                    expression = "sapiente";
                                    location = "cumque";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("tempora"),
                                    add("quis"),
                                    add("inventore"),
                                }};
                                role = "fugit";
                            }}),
                        }};
                        etag = "cumque";
                        version = 62636;
                    }};;
                    updateMask = "perferendis";
                }};;
                accessToken = "velit";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "eius";
                key = "rem";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "eos";
                uploadProtocol = "sapiente";
            }};            

            GkehubProjectsLocationsMembershipsSetIamPolicyResponse res = sdk.projects.gkehubProjectsLocationsMembershipsSetIamPolicy(req, new GkehubProjectsLocationsMembershipsSetIamPolicySecurity("eum", "dicta") {{
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

            GkehubProjectsLocationsMembershipsTestIamPermissionsRequest req = new GkehubProjectsLocationsMembershipsTestIamPermissionsRequest("minima") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("provident"),
                        add("earum"),
                        add("soluta"),
                    }};
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "eaque";
                fields = "earum";
                key = "perspiciatis";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "aliquid";
                uploadProtocol = "porro";
            }};            

            GkehubProjectsLocationsMembershipsTestIamPermissionsResponse res = sdk.projects.gkehubProjectsLocationsMembershipsTestIamPermissions(req, new GkehubProjectsLocationsMembershipsTestIamPermissionsSecurity("suscipit", "dolorem") {{
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

## gkehubProjectsLocationsNamespacesCreate

Creates a fleet namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsNamespacesCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsNamespacesCreateResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsNamespacesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NamespaceInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsNamespacesCreateRequest req = new GkehubProjectsLocationsNamespacesCreateRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                namespaceInput = new NamespaceInput() {{
                    name = "Philip O'Kon";
                    scope = "consequatur";
                }};;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "ducimus";
                fields = "natus";
                key = "occaecati";
                namespaceId = "suscipit";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "magni";
                uploadProtocol = "doloribus";
            }};            

            GkehubProjectsLocationsNamespacesCreateResponse res = sdk.projects.gkehubProjectsLocationsNamespacesCreate(req, new GkehubProjectsLocationsNamespacesCreateSecurity("nulla", "necessitatibus") {{
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

## gkehubProjectsLocationsNamespacesList

Lists fleet namespaces.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsNamespacesListRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsNamespacesListResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsNamespacesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsNamespacesListRequest req = new GkehubProjectsLocationsNamespacesListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "iusto";
                key = "esse";
                oauthToken = "praesentium";
                pageSize = 979963L;
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "architecto";
                uploadProtocol = "fugiat";
            }};            

            GkehubProjectsLocationsNamespacesListResponse res = sdk.projects.gkehubProjectsLocationsNamespacesList(req, new GkehubProjectsLocationsNamespacesListSecurity("doloremque", "dicta") {{
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

## gkehubProjectsLocationsNamespacesRbacrolebindingsCreate

Creates a RBACRoleBinding.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsNamespacesRbacrolebindingsCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsNamespacesRbacrolebindingsCreateResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsNamespacesRbacrolebindingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RBACRoleBindingInput;
import org.openapis.openapi.models.shared.Role;
import org.openapis.openapi.models.shared.RolePredefinedRoleEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsNamespacesRbacrolebindingsCreateRequest req = new GkehubProjectsLocationsNamespacesRbacrolebindingsCreateRequest("odio") {{
                dollarXgafv = XgafvEnum.ONE;
                rbacRoleBindingInput = new RBACRoleBindingInput() {{
                    group = "esse";
                    name = "Miss Kim Jacobs II";
                    role = new Role() {{
                        predefinedRole = RolePredefinedRoleEnum.VIEW;
                    }};;
                    user = "expedita";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "aliquid";
                key = "perferendis";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "voluptas";
                rbacrolebindingId = "iste";
                uploadType = "id";
                uploadProtocol = "ab";
            }};            

            GkehubProjectsLocationsNamespacesRbacrolebindingsCreateResponse res = sdk.projects.gkehubProjectsLocationsNamespacesRbacrolebindingsCreate(req, new GkehubProjectsLocationsNamespacesRbacrolebindingsCreateSecurity("error", "possimus") {{
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

## gkehubProjectsLocationsNamespacesRbacrolebindingsList

Lists RBACRoleBinding.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsNamespacesRbacrolebindingsListRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsNamespacesRbacrolebindingsListResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsNamespacesRbacrolebindingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsNamespacesRbacrolebindingsListRequest req = new GkehubProjectsLocationsNamespacesRbacrolebindingsListRequest("voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "ad";
                fields = "deleniti";
                key = "enim";
                oauthToken = "vitae";
                pageSize = 833316L;
                pageToken = "ex";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "ex";
                uploadProtocol = "ut";
            }};            

            GkehubProjectsLocationsNamespacesRbacrolebindingsListResponse res = sdk.projects.gkehubProjectsLocationsNamespacesRbacrolebindingsList(req, new GkehubProjectsLocationsNamespacesRbacrolebindingsListSecurity("ad", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRBACRoleBindingsResponse != null) {
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

            GkehubProjectsLocationsOperationsCancelRequest req = new GkehubProjectsLocationsOperationsCancelRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("aliquid", "beatae");
                    put("voluptatum", "omnis");
                    put("veritatis", "rerum");
                }};
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "sapiente";
                key = "officiis";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "pariatur";
                uploadProtocol = "debitis";
            }};            

            GkehubProjectsLocationsOperationsCancelResponse res = sdk.projects.gkehubProjectsLocationsOperationsCancel(req, new GkehubProjectsLocationsOperationsCancelSecurity("voluptatem", "alias") {{
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

            GkehubProjectsLocationsOperationsListRequest req = new GkehubProjectsLocationsOperationsListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.PROTO;
                callback = "rem";
                fields = "minus";
                filter = "nemo";
                key = "asperiores";
                oauthToken = "ratione";
                pageSize = 355225L;
                pageToken = "perferendis";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "totam";
                uploadProtocol = "impedit";
            }};            

            GkehubProjectsLocationsOperationsListResponse res = sdk.projects.gkehubProjectsLocationsOperationsList(req, new GkehubProjectsLocationsOperationsListSecurity("quibusdam", "nam") {{
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

            GkehubProjectsLocationsScopesCreateRequest req = new GkehubProjectsLocationsScopesCreateRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                scopeInput = new ScopeInput() {{
                    allMemberships = false;
                    name = "Michele Bode II";
                }};;
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "architecto";
                fields = "sit";
                key = "modi";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "ab";
                scopeId = "laudantium";
                uploadType = "quae";
                uploadProtocol = "dolor";
            }};            

            GkehubProjectsLocationsScopesCreateResponse res = sdk.projects.gkehubProjectsLocationsScopesCreate(req, new GkehubProjectsLocationsScopesCreateSecurity("fugiat", "ipsam") {{
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

            GkehubProjectsLocationsScopesDeleteRequest req = new GkehubProjectsLocationsScopesDeleteRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "officiis";
                force = false;
                key = "esse";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "sed";
                requestId = "veniam";
                uploadType = "nesciunt";
                uploadProtocol = "expedita";
            }};            

            GkehubProjectsLocationsScopesDeleteResponse res = sdk.projects.gkehubProjectsLocationsScopesDelete(req, new GkehubProjectsLocationsScopesDeleteSecurity("eum", "vel") {{
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

            GkehubProjectsLocationsScopesGetRequest req = new GkehubProjectsLocationsScopesGetRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "exercitationem";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "autem";
                key = "nobis";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "consequuntur";
                uploadProtocol = "voluptatem";
            }};            

            GkehubProjectsLocationsScopesGetResponse res = sdk.projects.gkehubProjectsLocationsScopesGet(req, new GkehubProjectsLocationsScopesGetSecurity("exercitationem", "necessitatibus") {{
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

            GkehubProjectsLocationsScopesListRequest req = new GkehubProjectsLocationsScopesListRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "harum";
                key = "sequi";
                oauthToken = "doloribus";
                pageSize = 918092L;
                pageToken = "optio";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "nemo";
                uploadProtocol = "voluptate";
            }};            

            GkehubProjectsLocationsScopesListResponse res = sdk.projects.gkehubProjectsLocationsScopesList(req, new GkehubProjectsLocationsScopesListSecurity("blanditiis", "officia") {{
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

## gkehubProjectsLocationsScopesPatch

Updates a scopes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesPatchRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesPatchResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsScopesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ScopeInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsScopesPatchRequest req = new GkehubProjectsLocationsScopesPatchRequest("voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                scopeInput = new ScopeInput() {{
                    allMemberships = false;
                    name = "Brandy Gibson";
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.PROTO;
                callback = "laudantium";
                fields = "incidunt";
                key = "quasi";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "fugiat";
                updateMask = "dicta";
                uploadType = "nisi";
                uploadProtocol = "consequuntur";
            }};            

            GkehubProjectsLocationsScopesPatchResponse res = sdk.projects.gkehubProjectsLocationsScopesPatch(req, new GkehubProjectsLocationsScopesPatchSecurity("consectetur", "aperiam") {{
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
