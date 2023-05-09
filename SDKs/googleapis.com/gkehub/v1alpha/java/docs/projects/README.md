# projects

### Available Operations

* [gkehubProjectsLocationsFeaturesCreate](#gkehubprojectslocationsfeaturescreate) - Adds a new Feature.
* [gkehubProjectsLocationsFeaturesList](#gkehubprojectslocationsfeatureslist) - Lists Features in a given project and location.
* [gkehubProjectsLocationsFleetsCreate](#gkehubprojectslocationsfleetscreate) - Creates a fleet.
* [gkehubProjectsLocationsFleetsList](#gkehubprojectslocationsfleetslist) - Returns all fleets within an organization or a project that the caller has access to.
* [gkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [gkehubProjectsLocationsMembershipsBindingsCreate](#gkehubprojectslocationsmembershipsbindingscreate) - Creates a MembershipBinding.
* [gkehubProjectsLocationsMembershipsBindingsList](#gkehubprojectslocationsmembershipsbindingslist) - Lists MembershipBindings.
* [gkehubProjectsLocationsMembershipsCreate](#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [gkehubProjectsLocationsMembershipsGenerateConnectManifest](#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [gkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkehubProjectsLocationsMembershipsList](#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [gkehubProjectsLocationsMembershipsListAdmin](#gkehubprojectslocationsmembershipslistadmin) - Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.
* [gkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkehubProjectsLocationsMembershipsValidateCreate](#gkehubprojectslocationsmembershipsvalidatecreate) - ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.
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
import org.openapis.openapi.models.shared.CloudAuditLoggingFeatureSpec;
import org.openapis.openapi.models.shared.CloudBuildMembershipSpec;
import org.openapis.openapi.models.shared.CloudBuildMembershipSpecSecurityPolicyEnum;
import org.openapis.openapi.models.shared.CommonFeatureSpec;
import org.openapis.openapi.models.shared.CommonFeatureStateInput;
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
import org.openapis.openapi.models.shared.FeatureSpec;
import org.openapis.openapi.models.shared.FeatureSpecProvisionGoogleCaEnum;
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
import org.openapis.openapi.models.shared.MembershipSpecCertificateManagementEnum;
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
import org.openapis.openapi.models.shared.ServiceMeshMembershipSpecDefaultChannelEnum;
import org.openapis.openapi.models.shared.ServiceMeshMembershipSpecManagementEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.StatusCodeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsFeaturesCreateRequest req = new GkehubProjectsLocationsFeaturesCreateRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                featureInput = new FeatureInput() {{
                    fleetDefaultMemberConfig = new CommonFleetDefaultMemberConfigSpecInput() {{
                        identityservice = new IdentityServiceMembershipSpecInput() {{
                            authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                add(new IdentityServiceAuthMethodInput() {{
                                    azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                        clientId = "et";
                                        clientSecret = "esse";
                                        kubectlRedirectUri = "eveniet";
                                        tenant = "accusamus";
                                    }};
                                    googleConfig = new IdentityServiceGoogleConfig() {{
                                        disable = false;
                                    }};
                                    name = "Joy Schmidt";
                                    oidcConfig = new IdentityServiceOidcConfigInput() {{
                                        certificateAuthorityData = "aliquid";
                                        clientId = "quasi";
                                        clientSecret = "saepe";
                                        deployCloudConsoleProxy = false;
                                        enableAccessToken = false;
                                        extraParams = "vel";
                                        groupPrefix = "harum";
                                        groupsClaim = "molestiae";
                                        issuerUri = "rerum";
                                        kubectlRedirectUri = "occaecati";
                                        scopes = "minima";
                                        userClaim = "distinctio";
                                        userPrefix = "eligendi";
                                    }};
                                    proxy = "sit";
                                }}),
                                add(new IdentityServiceAuthMethodInput() {{
                                    azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                        clientId = "culpa";
                                        clientSecret = "tempore";
                                        kubectlRedirectUri = "adipisci";
                                        tenant = "cumque";
                                    }};
                                    googleConfig = new IdentityServiceGoogleConfig() {{
                                        disable = false;
                                    }};
                                    name = "Elizabeth Schinner";
                                    oidcConfig = new IdentityServiceOidcConfigInput() {{
                                        certificateAuthorityData = "consectetur";
                                        clientId = "esse";
                                        clientSecret = "blanditiis";
                                        deployCloudConsoleProxy = false;
                                        enableAccessToken = false;
                                        extraParams = "provident";
                                        groupPrefix = "a";
                                        groupsClaim = "nulla";
                                        issuerUri = "quas";
                                        kubectlRedirectUri = "esse";
                                        scopes = "quasi";
                                        userClaim = "a";
                                        userPrefix = "error";
                                    }};
                                    proxy = "sint";
                                }}),
                                add(new IdentityServiceAuthMethodInput() {{
                                    azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                        clientId = "pariatur";
                                        clientSecret = "possimus";
                                        kubectlRedirectUri = "quia";
                                        tenant = "eveniet";
                                    }};
                                    googleConfig = new IdentityServiceGoogleConfig() {{
                                        disable = false;
                                    }};
                                    name = "Carroll Bogan V";
                                    oidcConfig = new IdentityServiceOidcConfigInput() {{
                                        certificateAuthorityData = "culpa";
                                        clientId = "aliquid";
                                        clientSecret = "tenetur";
                                        deployCloudConsoleProxy = false;
                                        enableAccessToken = false;
                                        extraParams = "quae";
                                        groupPrefix = "earum";
                                        groupsClaim = "vel";
                                        issuerUri = "in";
                                        kubectlRedirectUri = "eius";
                                        scopes = "libero";
                                        userClaim = "illum";
                                        userPrefix = "soluta";
                                    }};
                                    proxy = "accusantium";
                                }}),
                            }};
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("sapiente", "dicta");
                        put("ullam", "reprehenderit");
                    }};
                    membershipSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.MembershipFeatureSpecInput>() {{
                        put("nisi", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "aut";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = CloudBuildMembershipSpecSecurityPolicyEnum.NON_PRIVILEGED;
                                version = "qui";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "quibusdam";
                                        httpsProxy = "ex";
                                        policyDir = "deleniti";
                                        secretType = "itaque";
                                        syncBranch = "dolorum";
                                        syncRepo = "architecto";
                                        syncRev = "omnis";
                                        syncWaitSecs = "tenetur";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "quasi";
                                        policyDir = "at";
                                        secretType = "et";
                                        syncRepo = "voluptate";
                                        syncWaitSecs = "ipsa";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "minima";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "veritatis";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("adipisci"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "aut";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("eum", "mollitia");
                                put("ab", "corrupti");
                                put("non", "voluptatem");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "occaecati";
                                            clientSecret = "numquam";
                                            kubectlRedirectUri = "impedit";
                                            tenant = "explicabo";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Dr. Maria Kulas";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "velit";
                                            clientId = "voluptatibus";
                                            clientSecret = "voluptas";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "asperiores";
                                            groupPrefix = "aperiam";
                                            groupsClaim = "ea";
                                            issuerUri = "quaerat";
                                            kubectlRedirectUri = "consequuntur";
                                            scopes = "repellendus";
                                            userClaim = "officia";
                                            userPrefix = "maxime";
                                        }};
                                        proxy = "dignissimos";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.AUTOMATIC;
                                defaultChannel = ServiceMeshMembershipSpecDefaultChannelEnum.STABLE;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_AUTOMATIC;
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "quae";
                                    constraintViolationLimit = "quaerat";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("quod", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "labore";
                                                    memory = "ab";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "adipisci";
                                                    memory = "fuga";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "suscipit";
                                                    key = "velit";
                                                    operator = "culpa";
                                                    value = "est";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "recusandae";
                                                    key = "totam";
                                                    operator = "fugiat";
                                                    value = "vel";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "ducimus";
                                                    key = "quos";
                                                    operator = "vel";
                                                    value = "labore";
                                                }}),
                                            }};
                                            replicaCount = "possimus";
                                        }});
                                        put("facilis", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "cum";
                                                    memory = "commodi";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "in";
                                                    memory = "corporis";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "assumenda";
                                                    key = "nemo";
                                                    operator = "recusandae";
                                                    value = "aliquid";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "aperiam";
                                                    key = "cum";
                                                    operator = "consectetur";
                                                    value = "in";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "exercitationem";
                                                    key = "earum";
                                                    operator = "facere";
                                                    value = "numquam";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "doloribus";
                                                    key = "suscipit";
                                                    operator = "reiciendis";
                                                    value = "quidem";
                                                }}),
                                            }};
                                            replicaCount = "saepe";
                                        }});
                                        put("necessitatibus", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "dolore";
                                                    memory = "sunt";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "asperiores";
                                                    memory = "adipisci";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "amet";
                                                    key = "beatae";
                                                    operator = "dignissimos";
                                                    value = "a";
                                                }}),
                                            }};
                                            replicaCount = "debitis";
                                        }});
                                        put("consectetur", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "corporis";
                                                    memory = "harum";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "laboriosam";
                                                    memory = "ipsa";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "libero";
                                                    key = "vitae";
                                                    operator = "accusamus";
                                                    value = "similique";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "tempora";
                                                    key = "aspernatur";
                                                    operator = "voluptas";
                                                    value = "voluptas";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "voluptas";
                                                    key = "minima";
                                                    operator = "nobis";
                                                    value = "dolorum";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "adipisci";
                                                    key = "minus";
                                                    operator = "dolores";
                                                    value = "blanditiis";
                                                }}),
                                            }};
                                            replicaCount = "in";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("aliquam"),
                                        add("officiis"),
                                    }};
                                    installSpec = PolicyControllerHubConfigInstallSpecEnum.INSTALL_SPEC_SUSPENDED;
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add(PolicyControllerMonitoringConfigBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(PolicyControllerMonitoringConfigBackendsEnum.CLOUD_MONITORING),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("quas", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("nesciunt"),
                                                    add("culpa"),
                                                    add("corrupti"),
                                                    add("pariatur"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                            put("hic", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("nobis"),
                                                    add("sit"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                            put("sed", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("explicabo"),
                                                    add("asperiores"),
                                                    add("facilis"),
                                                    add("voluptate"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                        }};
                                        templateLibrary = new PolicyControllerTemplateLibraryConfig() {{
                                            included = false;
                                            installation = PolicyControllerTemplateLibraryConfigInstallationEnum.INSTALLATION_UNSPECIFIED;
                                        }};
                                    }};
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                        installation = PolicyControllerTemplateLibraryConfigInstallationEnum.NOT_INSTALLED;
                                    }};
                                }};
                                version = "dolore";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = MembershipSpecCertificateManagementEnum.ENABLED;
                            }};
                        }});
                        put("sed", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "in";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = CloudBuildMembershipSpecSecurityPolicyEnum.NON_PRIVILEGED;
                                version = "quidem";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "explicabo";
                                        httpsProxy = "voluptas";
                                        policyDir = "unde";
                                        secretType = "architecto";
                                        syncBranch = "suscipit";
                                        syncRepo = "sapiente";
                                        syncRev = "debitis";
                                        syncWaitSecs = "illo";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "reiciendis";
                                        policyDir = "perferendis";
                                        secretType = "corrupti";
                                        syncRepo = "maiores";
                                        syncWaitSecs = "incidunt";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "sed";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "provident";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("necessitatibus"),
                                        add("ipsum"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "voluptatibus";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("tempora", "voluptate");
                                put("reiciendis", "ex");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "non";
                                            clientSecret = "officiis";
                                            kubectlRedirectUri = "praesentium";
                                            tenant = "facilis";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Amber Hintz";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "sit";
                                            clientId = "nobis";
                                            clientSecret = "error";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "veniam";
                                            groupPrefix = "minima";
                                            groupsClaim = "recusandae";
                                            issuerUri = "reiciendis";
                                            kubectlRedirectUri = "nulla";
                                            scopes = "magni";
                                            userClaim = "aperiam";
                                            userPrefix = "saepe";
                                        }};
                                        proxy = "numquam";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.CONTROL_PLANE_MANAGEMENT_UNSPECIFIED;
                                defaultChannel = ServiceMeshMembershipSpecDefaultChannelEnum.RAPID;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_MANUAL;
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "beatae";
                                    constraintViolationLimit = "laudantium";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("praesentium", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "cum";
                                                    memory = "laboriosam";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "dolorum";
                                                    memory = "voluptatum";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "hic";
                                                    key = "expedita";
                                                    operator = "debitis";
                                                    value = "neque";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "dolorum";
                                                    key = "nostrum";
                                                    operator = "officia";
                                                    value = "dolorum";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "corrupti";
                                                    key = "accusamus";
                                                    operator = "tempora";
                                                    value = "atque";
                                                }}),
                                            }};
                                            replicaCount = "fugit";
                                        }});
                                        put("ut", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "fugiat";
                                                    memory = "voluptatem";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "culpa";
                                                    memory = "expedita";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "consequatur";
                                                    key = "esse";
                                                    operator = "ipsam";
                                                    value = "sit";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "voluptatum";
                                                    key = "quas";
                                                    operator = "repudiandae";
                                                    value = "corporis";
                                                }}),
                                            }};
                                            replicaCount = "et";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("ex"),
                                        add("sed"),
                                        add("sit"),
                                    }};
                                    installSpec = PolicyControllerHubConfigInstallSpecEnum.INSTALL_SPEC_NOT_INSTALLED;
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add(PolicyControllerMonitoringConfigBackendsEnum.CLOUD_MONITORING),
                                            add(PolicyControllerMonitoringConfigBackendsEnum.PROMETHEUS),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("incidunt", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("dolorem"),
                                                    add("harum"),
                                                    add("dicta"),
                                                    add("architecto"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                        }};
                                        templateLibrary = new PolicyControllerTemplateLibraryConfig() {{
                                            included = false;
                                            installation = PolicyControllerTemplateLibraryConfigInstallationEnum.INSTALLATION_UNSPECIFIED;
                                        }};
                                    }};
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                        installation = PolicyControllerTemplateLibraryConfigInstallationEnum.ALL;
                                    }};
                                }};
                                version = "atque";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = MembershipSpecCertificateManagementEnum.ENABLED;
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = FeatureResourceStateStateEnum.UPDATING;
                    }};;
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("laboriosam", new java.util.HashMap<String, Object>() {{
                            put("amet", "deserunt");
                        }});
                        put("voluptate", new java.util.HashMap<String, Object>() {{
                            put("reiciendis", "provident");
                            put("repellendus", "delectus");
                            put("voluptates", "perferendis");
                        }});
                        put("est", new java.util.HashMap<String, Object>() {{
                            put("reprehenderit", "facere");
                            put("fuga", "praesentium");
                            put("mollitia", "veniam");
                        }});
                        put("voluptatem", new java.util.HashMap<String, Object>() {{
                            put("repudiandae", "quasi");
                            put("atque", "reprehenderit");
                            put("asperiores", "totam");
                            put("suscipit", "quidem");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "maxime";
                            }};;
                        }};;
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("esse", "amet");
                        }};
                        cloudauditlogging = new CloudAuditLoggingFeatureSpec() {{
                            allowlistedServiceAccounts = new String[]{{
                                add("ea"),
                                add("atque"),
                                add("error"),
                                add("officiis"),
                            }};
                        }};;
                        fleetobservability = new FleetObservabilityFeatureSpec() {{
                            loggingConfig = new FleetObservabilityLoggingConfig() {{
                                defaultConfig = new FleetObservabilityRoutingConfig() {{
                                    mode = FleetObservabilityRoutingConfigModeEnum.MOVE;
                                }};;
                                fleetScopeLogsConfig = new FleetObservabilityRoutingConfig() {{
                                    mode = FleetObservabilityRoutingConfigModeEnum.MOVE;
                                }};;
                            }};;
                        }};;
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = MultiClusterIngressFeatureSpecBillingEnum.PAY_AS_YOU_GO;
                            configMembership = "minima";
                        }};;
                        workloadcertificate = new FeatureSpec() {{
                            defaultConfig = new MembershipSpec() {{
                                certificateManagement = MembershipSpecCertificateManagementEnum.CERTIFICATE_MANAGEMENT_UNSPECIFIED;
                            }};;
                            provisionGoogleCa = FeatureSpecProvisionGoogleCaEnum.DISABLED;
                        }};;
                    }};;
                    state = new CommonFeatureStateInput() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = StatusCodeEnum.UNKNOWN;
                                description = "corrupti";
                            }};;
                        }};;
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("error", "blanditiis");
                            put("suscipit", "repudiandae");
                            put("atque", "atque");
                            put("sunt", "recusandae");
                        }};
                        state = new FeatureState() {{
                            code = FeatureStateCodeEnum.WARNING;
                            description = "repellendus";
                            updateTime = "labore";
                        }};;
                    }};;
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "repudiandae";
                featureId = "dicta";
                fields = "accusantium";
                key = "beatae";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "enim";
                requestId = "laboriosam";
                uploadType = "velit";
                uploadProtocol = "a";
            }};            

            GkehubProjectsLocationsFeaturesCreateResponse res = sdk.projects.gkehubProjectsLocationsFeaturesCreate(req, new GkehubProjectsLocationsFeaturesCreateSecurity("molestias", "magnam") {{
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

            GkehubProjectsLocationsFeaturesListRequest req = new GkehubProjectsLocationsFeaturesListRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "perspiciatis";
                fields = "in";
                filter = "adipisci";
                key = "eveniet";
                oauthToken = "occaecati";
                orderBy = "consequuntur";
                pageSize = 145870L;
                pageToken = "id";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "reprehenderit";
                uploadProtocol = "error";
            }};            

            GkehubProjectsLocationsFeaturesListResponse res = sdk.projects.gkehubProjectsLocationsFeaturesList(req, new GkehubProjectsLocationsFeaturesListSecurity("illo", "corporis") {{
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

            GkehubProjectsLocationsFleetsCreateRequest req = new GkehubProjectsLocationsFleetsCreateRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                fleetInput = new FleetInput() {{
                    displayName = "non";
                }};;
                accessToken = "vero";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "ipsa";
                key = "totam";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "eveniet";
                uploadProtocol = "qui";
            }};            

            GkehubProjectsLocationsFleetsCreateResponse res = sdk.projects.gkehubProjectsLocationsFleetsCreate(req, new GkehubProjectsLocationsFleetsCreateSecurity("cum", "iure") {{
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

            GkehubProjectsLocationsFleetsListRequest req = new GkehubProjectsLocationsFleetsListRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "rem";
                key = "aliquam";
                oauthToken = "ad";
                pageSize = 997963L;
                pageToken = "alias";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "perspiciatis";
                uploadProtocol = "nihil";
            }};            

            GkehubProjectsLocationsFleetsListResponse res = sdk.projects.gkehubProjectsLocationsFleetsList(req, new GkehubProjectsLocationsFleetsListSecurity("mollitia", "voluptas") {{
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

            GkehubProjectsLocationsListRequest req = new GkehubProjectsLocationsListRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "minima";
                filter = "dolore";
                key = "dolorum";
                oauthToken = "nesciunt";
                pageSize = 63207L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "quaerat";
                uploadProtocol = "molestiae";
            }};            

            GkehubProjectsLocationsListResponse res = sdk.projects.gkehubProjectsLocationsList(req, new GkehubProjectsLocationsListSecurity("ex", "ut") {{
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

            GkehubProjectsLocationsMembershipsBindingsCreateRequest req = new GkehubProjectsLocationsMembershipsBindingsCreateRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                membershipBindingInput = new MembershipBindingInput() {{
                    fleet = false;
                    name = "Armando Kemmer";
                    scope = "esse";
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "reiciendis";
                key = "provident";
                membershipBindingId = "aspernatur";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "animi";
                uploadProtocol = "nostrum";
            }};            

            GkehubProjectsLocationsMembershipsBindingsCreateResponse res = sdk.projects.gkehubProjectsLocationsMembershipsBindingsCreate(req, new GkehubProjectsLocationsMembershipsBindingsCreateSecurity("mollitia", "provident") {{
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

            GkehubProjectsLocationsMembershipsBindingsListRequest req = new GkehubProjectsLocationsMembershipsBindingsListRequest("possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "repellat";
                key = "doloribus";
                oauthToken = "ullam";
                pageSize = 448143L;
                pageToken = "nam";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "officia";
                uploadProtocol = "laborum";
            }};            

            GkehubProjectsLocationsMembershipsBindingsListResponse res = sdk.projects.gkehubProjectsLocationsMembershipsBindingsList(req, new GkehubProjectsLocationsMembershipsBindingsListSecurity("placeat", "modi") {{
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

            GkehubProjectsLocationsMembershipsCreateRequest req = new GkehubProjectsLocationsMembershipsCreateRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                membershipInput = new MembershipInput() {{
                    authority = new AuthorityInput() {{
                        issuer = "officiis";
                        oidcJwks = "sapiente";
                    }};;
                    endpoint = new MembershipEndpointInput() {{
                        applianceCluster = new ApplianceCluster() {{
                            resourceLink = "cumque";
                        }};;
                        edgeCluster = new EdgeCluster() {{
                            resourceLink = "vitae";
                        }};;
                        gkeCluster = new GkeClusterInput() {{
                            resourceLink = "rerum";
                        }};;
                        kubernetesResource = new KubernetesResourceInput() {{
                            membershipCrManifest = "tempora";
                            resourceOptions = new ResourceOptions() {{
                                connectVersion = "quis";
                                k8sVersion = "inventore";
                                v1beta1Crd = false;
                            }};;
                        }};;
                        multiCloudCluster = new MultiCloudClusterInput() {{
                            resourceLink = "fugit";
                        }};;
                        onPremCluster = new OnPremClusterInput() {{
                            adminCluster = false;
                            clusterType = OnPremClusterClusterTypeEnum.STANDALONE;
                            resourceLink = "quae";
                        }};;
                    }};;
                    externalId = "perferendis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aspernatur", "eum");
                    }};
                    monitoringConfig = new MonitoringConfig() {{
                        cluster = "eius";
                        clusterHash = "rem";
                        kubernetesMetricsPrefix = "at";
                        location = "impedit";
                        projectId = "eos";
                    }};;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "minima";
                key = "beatae";
                membershipId = "cupiditate";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "soluta";
                uploadType = "hic";
                uploadProtocol = "illum";
            }};            

            GkehubProjectsLocationsMembershipsCreateResponse res = sdk.projects.gkehubProjectsLocationsMembershipsCreate(req, new GkehubProjectsLocationsMembershipsCreateSecurity("eaque", "earum") {{
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

            GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest req = new GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "debitis";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "suscipit";
                imagePullSecretContent = "dolorem";
                isUpgrade = false;
                key = "fugit";
                namespace = "cumque";
                oauthToken = "fuga";
                prettyPrint = false;
                proxy = "ratione";
                quotaUser = "animi";
                registry = "necessitatibus";
                uploadType = "nulla";
                uploadProtocol = "consequatur";
                version = "quasi";
            }};            

            GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse res = sdk.projects.gkehubProjectsLocationsMembershipsGenerateConnectManifest(req, new GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity("et", "ducimus") {{
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

            GkehubProjectsLocationsMembershipsGetIamPolicyRequest req = new GkehubProjectsLocationsMembershipsGetIamPolicyRequest("natus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "magni";
                key = "doloribus";
                oauthToken = "nulla";
                optionsRequestedPolicyVersion = 896582L;
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "tempora";
                uploadProtocol = "nihil";
            }};            

            GkehubProjectsLocationsMembershipsGetIamPolicyResponse res = sdk.projects.gkehubProjectsLocationsMembershipsGetIamPolicy(req, new GkehubProjectsLocationsMembershipsGetIamPolicySecurity("molestiae", "dicta") {{
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

            GkehubProjectsLocationsMembershipsListRequest req = new GkehubProjectsLocationsMembershipsListRequest("iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                fields = "vel";
                filter = "architecto";
                key = "fugiat";
                oauthToken = "doloremque";
                orderBy = "dicta";
                pageSize = 483706L;
                pageToken = "tempora";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ex";
                uploadProtocol = "consectetur";
            }};            

            GkehubProjectsLocationsMembershipsListResponse res = sdk.projects.gkehubProjectsLocationsMembershipsList(req, new GkehubProjectsLocationsMembershipsListSecurity("aliquid", "ipsa") {{
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

## gkehubProjectsLocationsMembershipsListAdmin

Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsListAdminRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsListAdminResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsListAdminSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsListAdminRequest req = new GkehubProjectsLocationsMembershipsListAdminRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "aliquid";
                filter = "officia";
                key = "suscipit";
                oauthToken = "aliquid";
                orderBy = "perferendis";
                pageSize = 431760L;
                pageToken = "voluptas";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "id";
                uploadProtocol = "ab";
            }};            

            GkehubProjectsLocationsMembershipsListAdminResponse res = sdk.projects.gkehubProjectsLocationsMembershipsListAdmin(req, new GkehubProjectsLocationsMembershipsListAdminSecurity("error", "possimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAdminClusterMembershipsResponse != null) {
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

            GkehubProjectsLocationsMembershipsSetIamPolicyRequest req = new GkehubProjectsLocationsMembershipsSetIamPolicyRequest("voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deleniti"),
                                            add("enim"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ex"),
                                            add("quo"),
                                            add("ex"),
                                            add("ut"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatem"),
                                            add("molestias"),
                                            add("cum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "beatae";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("veritatis"),
                                            add("rerum"),
                                            add("est"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sapiente"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("fuga"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "debitis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deleniti"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "ex";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "rem";
                                    expression = "minus";
                                    location = "nemo";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("ullam"),
                                }};
                                role = "perferendis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "illum";
                                    expression = "totam";
                                    location = "impedit";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("ipsam"),
                                    add("culpa"),
                                    add("dolor"),
                                }};
                                role = "aliquam";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "inventore";
                                    expression = "deleniti";
                                    location = "veritatis";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("consequatur"),
                                }};
                                role = "architecto";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "sit";
                                    expression = "modi";
                                    location = "fugit";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("quae"),
                                    add("dolor"),
                                    add("fugiat"),
                                }};
                                role = "ipsam";
                            }}),
                        }};
                        etag = "consequuntur";
                        version = 55107;
                    }};;
                    updateMask = "quas";
                }};;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "esse";
                key = "necessitatibus";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "nesciunt";
                uploadProtocol = "expedita";
            }};            

            GkehubProjectsLocationsMembershipsSetIamPolicyResponse res = sdk.projects.gkehubProjectsLocationsMembershipsSetIamPolicy(req, new GkehubProjectsLocationsMembershipsSetIamPolicySecurity("eum", "vel") {{
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

            GkehubProjectsLocationsMembershipsTestIamPermissionsRequest req = new GkehubProjectsLocationsMembershipsTestIamPermissionsRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ab"),
                        add("porro"),
                    }};
                }};;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "recusandae";
                key = "consequuntur";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "necessitatibus";
                uploadProtocol = "quasi";
            }};            

            GkehubProjectsLocationsMembershipsTestIamPermissionsResponse res = sdk.projects.gkehubProjectsLocationsMembershipsTestIamPermissions(req, new GkehubProjectsLocationsMembershipsTestIamPermissionsSecurity("nisi", "at") {{
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

## gkehubProjectsLocationsMembershipsValidateCreate

ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsValidateCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsValidateCreateResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsMembershipsValidateCreateSecurity;
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
import org.openapis.openapi.models.shared.ValidateCreateMembershipRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsMembershipsValidateCreateRequest req = new GkehubProjectsLocationsMembershipsValidateCreateRequest("vero") {{
                dollarXgafv = XgafvEnum.TWO;
                validateCreateMembershipRequestInput = new ValidateCreateMembershipRequestInput() {{
                    membership = new MembershipInput() {{
                        authority = new AuthorityInput() {{
                            issuer = "harum";
                            oidcJwks = "sequi";
                        }};;
                        endpoint = new MembershipEndpointInput() {{
                            applianceCluster = new ApplianceCluster() {{
                                resourceLink = "doloribus";
                            }};;
                            edgeCluster = new EdgeCluster() {{
                                resourceLink = "repudiandae";
                            }};;
                            gkeCluster = new GkeClusterInput() {{
                                resourceLink = "optio";
                            }};;
                            kubernetesResource = new KubernetesResourceInput() {{
                                membershipCrManifest = "occaecati";
                                resourceOptions = new ResourceOptions() {{
                                    connectVersion = "nemo";
                                    k8sVersion = "voluptate";
                                    v1beta1Crd = false;
                                }};;
                            }};;
                            multiCloudCluster = new MultiCloudClusterInput() {{
                                resourceLink = "blanditiis";
                            }};;
                            onPremCluster = new OnPremClusterInput() {{
                                adminCluster = false;
                                clusterType = OnPremClusterClusterTypeEnum.STANDALONE;
                                resourceLink = "voluptas";
                            }};;
                        }};;
                        externalId = "numquam";
                        labels = new java.util.HashMap<String, String>() {{
                            put("quos", "eius");
                            put("aspernatur", "ducimus");
                        }};
                        monitoringConfig = new MonitoringConfig() {{
                            cluster = "nesciunt";
                            clusterHash = "fuga";
                            kubernetesMetricsPrefix = "laudantium";
                            location = "incidunt";
                            projectId = "quasi";
                        }};;
                    }};;
                    membershipId = "rem";
                }};;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "nisi";
                fields = "consequuntur";
                key = "consectetur";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "reiciendis";
                uploadProtocol = "soluta";
            }};            

            GkehubProjectsLocationsMembershipsValidateCreateResponse res = sdk.projects.gkehubProjectsLocationsMembershipsValidateCreate(req, new GkehubProjectsLocationsMembershipsValidateCreateSecurity("alias", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.validateCreateMembershipResponse != null) {
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

            GkehubProjectsLocationsNamespacesCreateRequest req = new GkehubProjectsLocationsNamespacesCreateRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                namespaceInput = new NamespaceInput() {{
                    name = "Ernest Bode";
                    scope = "voluptatibus";
                }};;
                accessToken = "distinctio";
                alt = AltEnum.MEDIA;
                callback = "delectus";
                fields = "minima";
                key = "praesentium";
                namespaceId = "maxime";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "quos";
                uploadProtocol = "commodi";
            }};            

            GkehubProjectsLocationsNamespacesCreateResponse res = sdk.projects.gkehubProjectsLocationsNamespacesCreate(req, new GkehubProjectsLocationsNamespacesCreateSecurity("itaque", "commodi") {{
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

            GkehubProjectsLocationsNamespacesListRequest req = new GkehubProjectsLocationsNamespacesListRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "voluptatem";
                key = "ipsam";
                oauthToken = "vel";
                pageSize = 1383L;
                pageToken = "quasi";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "maiores";
                uploadProtocol = "enim";
            }};            

            GkehubProjectsLocationsNamespacesListResponse res = sdk.projects.gkehubProjectsLocationsNamespacesList(req, new GkehubProjectsLocationsNamespacesListSecurity("sint", "nulla") {{
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

            GkehubProjectsLocationsNamespacesRbacrolebindingsCreateRequest req = new GkehubProjectsLocationsNamespacesRbacrolebindingsCreateRequest("deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                rbacRoleBindingInput = new RBACRoleBindingInput() {{
                    group = "nemo";
                    name = "Monique Harvey";
                    role = new Role() {{
                        predefinedRole = RolePredefinedRoleEnum.VIEW;
                    }};;
                    user = "hic";
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "voluptas";
                key = "debitis";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quae";
                rbacrolebindingId = "minus";
                uploadType = "fuga";
                uploadProtocol = "laborum";
            }};            

            GkehubProjectsLocationsNamespacesRbacrolebindingsCreateResponse res = sdk.projects.gkehubProjectsLocationsNamespacesRbacrolebindingsCreate(req, new GkehubProjectsLocationsNamespacesRbacrolebindingsCreateSecurity("consectetur", "velit") {{
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

            GkehubProjectsLocationsNamespacesRbacrolebindingsListRequest req = new GkehubProjectsLocationsNamespacesRbacrolebindingsListRequest("atque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "soluta";
                fields = "repudiandae";
                key = "nam";
                oauthToken = "dolore";
                pageSize = 482892L;
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "dignissimos";
                uploadProtocol = "neque";
            }};            

            GkehubProjectsLocationsNamespacesRbacrolebindingsListResponse res = sdk.projects.gkehubProjectsLocationsNamespacesRbacrolebindingsList(req, new GkehubProjectsLocationsNamespacesRbacrolebindingsListSecurity("quo", "deleniti") {{
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

            GkehubProjectsLocationsOperationsCancelRequest req = new GkehubProjectsLocationsOperationsCancelRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("voluptatibus", "vel");
                }};
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "inventore";
                fields = "facere";
                key = "libero";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "quia";
                uploadProtocol = "porro";
            }};            

            GkehubProjectsLocationsOperationsCancelResponse res = sdk.projects.gkehubProjectsLocationsOperationsCancel(req, new GkehubProjectsLocationsOperationsCancelSecurity("aliquam", "velit") {{
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

            GkehubProjectsLocationsOperationsListRequest req = new GkehubProjectsLocationsOperationsListRequest("illo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "vero";
                filter = "excepturi";
                key = "eum";
                oauthToken = "velit";
                pageSize = 284086L;
                pageToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "dicta";
                uploadProtocol = "impedit";
            }};            

            GkehubProjectsLocationsOperationsListResponse res = sdk.projects.gkehubProjectsLocationsOperationsList(req, new GkehubProjectsLocationsOperationsListSecurity("voluptatibus", "iste") {{
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

            GkehubProjectsLocationsScopesCreateRequest req = new GkehubProjectsLocationsScopesCreateRequest("itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                scopeInput = new ScopeInput() {{
                    allMemberships = false;
                    name = "Lorena Flatley";
                }};;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "doloremque";
                key = "consequatur";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "recusandae";
                scopeId = "ea";
                uploadType = "quidem";
                uploadProtocol = "voluptas";
            }};            

            GkehubProjectsLocationsScopesCreateResponse res = sdk.projects.gkehubProjectsLocationsScopesCreate(req, new GkehubProjectsLocationsScopesCreateSecurity("facilis", "placeat") {{
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

            GkehubProjectsLocationsScopesDeleteRequest req = new GkehubProjectsLocationsScopesDeleteRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "ullam";
                force = false;
                key = "unde";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "animi";
                requestId = "impedit";
                uploadType = "ipsam";
                uploadProtocol = "corporis";
            }};            

            GkehubProjectsLocationsScopesDeleteResponse res = sdk.projects.gkehubProjectsLocationsScopesDelete(req, new GkehubProjectsLocationsScopesDeleteSecurity("est", "error") {{
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

            GkehubProjectsLocationsScopesGetRequest req = new GkehubProjectsLocationsScopesGetRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "vitae";
                key = "inventore";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "qui";
                uploadProtocol = "iste";
            }};            

            GkehubProjectsLocationsScopesGetResponse res = sdk.projects.gkehubProjectsLocationsScopesGet(req, new GkehubProjectsLocationsScopesGetSecurity("ex", "nemo") {{
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

            GkehubProjectsLocationsScopesListRequest req = new GkehubProjectsLocationsScopesListRequest("soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "odio";
                fields = "fugit";
                key = "alias";
                oauthToken = "magni";
                pageSize = 425402L;
                pageToken = "quae";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "modi";
                uploadProtocol = "neque";
            }};            

            GkehubProjectsLocationsScopesListResponse res = sdk.projects.gkehubProjectsLocationsScopesList(req, new GkehubProjectsLocationsScopesListSecurity("exercitationem", "itaque") {{
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

            GkehubProjectsLocationsScopesPatchRequest req = new GkehubProjectsLocationsScopesPatchRequest("et") {{
                dollarXgafv = XgafvEnum.ONE;
                scopeInput = new ScopeInput() {{
                    allMemberships = false;
                    name = "Orville Ratke";
                }};;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "libero";
                key = "dicta";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "libero";
                updateMask = "fugiat";
                uploadType = "officia";
                uploadProtocol = "quos";
            }};            

            GkehubProjectsLocationsScopesPatchResponse res = sdk.projects.gkehubProjectsLocationsScopesPatch(req, new GkehubProjectsLocationsScopesPatchSecurity("placeat", "sit") {{
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
