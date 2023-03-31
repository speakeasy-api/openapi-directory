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
import org.openapis.openapi.models.shared.MultiClusterIngressFeatureSpecBillingEnum;
import org.openapis.openapi.models.shared.MultiClusterIngressFeatureSpec;
import org.openapis.openapi.models.shared.AnthosObservabilityFeatureSpec;
import org.openapis.openapi.models.shared.AnthosObservabilityMembershipSpec;
import org.openapis.openapi.models.shared.FeatureResourceStateStateEnum;
import org.openapis.openapi.models.shared.FeatureResourceState;
import org.openapis.openapi.models.shared.MembershipFeatureSpecInput;
import org.openapis.openapi.models.shared.PolicyControllerMembershipSpec;
import org.openapis.openapi.models.shared.PolicyControllerHubConfigInstallSpecEnum;
import org.openapis.openapi.models.shared.PolicyControllerHubConfig;
import org.openapis.openapi.models.shared.PolicyControllerTemplateLibraryConfigInstallationEnum;
import org.openapis.openapi.models.shared.PolicyControllerTemplateLibraryConfig;
import org.openapis.openapi.models.shared.PolicyControllerPolicyContentSpec;
import org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpecManagementEnum;
import org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec;
import org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum;
import org.openapis.openapi.models.shared.PolicyControllerMonitoringConfig;
import org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig;
import org.openapis.openapi.models.shared.PolicyControllerToleration;
import org.openapis.openapi.models.shared.PolicyControllerResourceRequirements;
import org.openapis.openapi.models.shared.PolicyControllerResourceList;
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
import org.openapis.openapi.models.shared.ConfigManagementBinauthzConfig;
import org.openapis.openapi.models.shared.MembershipSpecSecurityPolicyEnum;
import org.openapis.openapi.models.shared.MembershipSpec;
import org.openapis.openapi.models.shared.CommonFleetDefaultMemberConfigSpecInput;
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
                    fleetDefaultMemberConfig = new CommonFleetDefaultMemberConfigSpecInput() {{
                        identityservice = new IdentityServiceMembershipSpecInput() {{
                            authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                add(new IdentityServiceAuthMethodInput() {{
                                    azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                        clientId = "debitis";
                                        clientSecret = "ipsa";
                                        kubectlRedirectUri = "delectus";
                                        tenant = "tempora";
                                    }};
                                    googleConfig = new IdentityServiceGoogleConfig() {{
                                        disable = false;
                                    }};
                                    name = "suscipit";
                                    oidcConfig = new IdentityServiceOidcConfigInput() {{
                                        certificateAuthorityData = "molestiae";
                                        clientId = "minus";
                                        clientSecret = "placeat";
                                        deployCloudConsoleProxy = false;
                                        enableAccessToken = false;
                                        extraParams = "voluptatum";
                                        groupPrefix = "iusto";
                                        groupsClaim = "excepturi";
                                        issuerUri = "nisi";
                                        kubectlRedirectUri = "recusandae";
                                        scopes = "temporibus";
                                        userClaim = "ab";
                                        userPrefix = "quis";
                                    }};
                                    proxy = "veritatis";
                                }}),
                                add(new IdentityServiceAuthMethodInput() {{
                                    azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                        clientId = "deserunt";
                                        clientSecret = "perferendis";
                                        kubectlRedirectUri = "ipsam";
                                        tenant = "repellendus";
                                    }};
                                    googleConfig = new IdentityServiceGoogleConfig() {{
                                        disable = false;
                                    }};
                                    name = "sapiente";
                                    oidcConfig = new IdentityServiceOidcConfigInput() {{
                                        certificateAuthorityData = "quo";
                                        clientId = "odit";
                                        clientSecret = "at";
                                        deployCloudConsoleProxy = false;
                                        enableAccessToken = false;
                                        extraParams = "at";
                                        groupPrefix = "maiores";
                                        groupsClaim = "molestiae";
                                        issuerUri = "quod";
                                        kubectlRedirectUri = "quod";
                                        scopes = "esse";
                                        userClaim = "totam";
                                        userPrefix = "porro";
                                    }};
                                    proxy = "dolorum";
                                }}),
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("nam", "officia");
                    }};
                    membershipSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.MembershipFeatureSpecInput>() {{
                        put("fugit", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "deleniti";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = "PRIVILEGED";
                                version = "optio";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "totam";
                                        httpsProxy = "beatae";
                                        policyDir = "commodi";
                                        secretType = "molestiae";
                                        syncBranch = "modi";
                                        syncRepo = "qui";
                                        syncRev = "impedit";
                                        syncWaitSecs = "cum";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "esse";
                                        policyDir = "ipsum";
                                        secretType = "excepturi";
                                        syncRepo = "aspernatur";
                                        syncWaitSecs = "perferendis";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "ad";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "natus";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("iste"),
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
                                version = "laboriosam";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("saepe", "fuga");
                                put("in", "corporis");
                                put("iste", "iure");
                                put("saepe", "quidem");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "ipsa";
                                            clientSecret = "reiciendis";
                                            kubectlRedirectUri = "est";
                                            tenant = "mollitia";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "laborum";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "dolores";
                                            clientId = "dolorem";
                                            clientSecret = "corporis";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "explicabo";
                                            groupPrefix = "nobis";
                                            groupsClaim = "enim";
                                            issuerUri = "omnis";
                                            kubectlRedirectUri = "nemo";
                                            scopes = "minima";
                                            userClaim = "excepturi";
                                            userPrefix = "accusantium";
                                        }};
                                        proxy = "iure";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                management = "MANAGEMENT_MANUAL";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "sapiente";
                                    constraintViolationLimit = "architecto";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("dolorem", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "culpa";
                                                    memory = "consequuntur";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "repellat";
                                                    memory = "mollitia";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "numquam";
                                                    key = "commodi";
                                                    operator = "quam";
                                                    value = "molestiae";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "velit";
                                                    key = "error";
                                                    operator = "quia";
                                                    value = "quis";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "vitae";
                                                    key = "laborum";
                                                    operator = "animi";
                                                    value = "enim";
                                                }}),
                                            }};
                                            replicaCount = "odit";
                                        }});
                                        put("quo", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "sequi";
                                                    memory = "tenetur";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "ipsam";
                                                    memory = "id";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "aut";
                                                    key = "quasi";
                                                    operator = "error";
                                                    value = "temporibus";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "laborum";
                                                    key = "quasi";
                                                    operator = "reiciendis";
                                                    value = "voluptatibus";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "vero";
                                                    key = "nihil";
                                                    operator = "praesentium";
                                                    value = "voluptatibus";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "ipsa";
                                                    key = "omnis";
                                                    operator = "voluptate";
                                                    value = "cum";
                                                }}),
                                            }};
                                            replicaCount = "perferendis";
                                        }});
                                        put("doloremque", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "reprehenderit";
                                                    memory = "ut";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "maiores";
                                                    memory = "dicta";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "dolore";
                                                    key = "iusto";
                                                    operator = "dicta";
                                                    value = "harum";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "enim";
                                                    key = "accusamus";
                                                    operator = "commodi";
                                                    value = "repudiandae";
                                                }}),
                                            }};
                                            replicaCount = "quae";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("quidem"),
                                    }};
                                    installSpec = "INSTALL_SPEC_ENABLED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add("CLOUD_MONITORING"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("voluptates", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("repudiandae"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                            put("veritatis", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("incidunt"),
                                                    add("enim"),
                                                    add("consequatur"),
                                                    add("est"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                            put("explicabo", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("distinctio"),
                                                    add("quibusdam"),
                                                    add("labore"),
                                                }};
                                                management = "MANAGEMENT_UNSPECIFIED";
                                            }});
                                        }};
                                        templateLibrary = new PolicyControllerTemplateLibraryConfig() {{
                                            included = false;
                                            installation = "INSTALLATION_UNSPECIFIED";
                                        }};
                                    }};
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                        installation = "NOT_INSTALLED";
                                    }};
                                }};
                                version = "cupiditate";
                            }};
                        }});
                        put("quos", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "perferendis";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = "SECURITY_POLICY_UNSPECIFIED";
                                version = "assumenda";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "ipsam";
                                        httpsProxy = "alias";
                                        policyDir = "fugit";
                                        secretType = "dolorum";
                                        syncBranch = "excepturi";
                                        syncRepo = "tempora";
                                        syncRev = "facilis";
                                        syncWaitSecs = "tempore";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "labore";
                                        policyDir = "delectus";
                                        secretType = "eum";
                                        syncRepo = "non";
                                        syncWaitSecs = "eligendi";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "sint";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "aliquid";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("necessitatibus"),
                                        add("sint"),
                                        add("officia"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add("CLOUD_MONITORING"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "a";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("in", "in");
                                put("illum", "maiores");
                                put("rerum", "dicta");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "cumque";
                                            clientSecret = "facere";
                                            kubectlRedirectUri = "ea";
                                            tenant = "aliquid";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "laborum";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "accusamus";
                                            clientId = "non";
                                            clientSecret = "occaecati";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "enim";
                                            groupPrefix = "accusamus";
                                            groupsClaim = "delectus";
                                            issuerUri = "quidem";
                                            kubectlRedirectUri = "provident";
                                            scopes = "nam";
                                            userClaim = "id";
                                            userPrefix = "blanditiis";
                                        }};
                                        proxy = "deleniti";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "sapiente";
                                            clientSecret = "amet";
                                            kubectlRedirectUri = "deserunt";
                                            tenant = "nisi";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "vel";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "natus";
                                            clientId = "omnis";
                                            clientSecret = "molestiae";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "perferendis";
                                            groupPrefix = "nihil";
                                            groupsClaim = "magnam";
                                            issuerUri = "distinctio";
                                            kubectlRedirectUri = "id";
                                            scopes = "labore";
                                            userClaim = "labore";
                                            userPrefix = "suscipit";
                                        }};
                                        proxy = "natus";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "MANUAL";
                                management = "MANAGEMENT_AUTOMATIC";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "vero";
                                    constraintViolationLimit = "aspernatur";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("magnam", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "et";
                                                    memory = "excepturi";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "ullam";
                                                    memory = "provident";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "sint";
                                                    key = "accusantium";
                                                    operator = "mollitia";
                                                    value = "reiciendis";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "mollitia";
                                                    key = "ad";
                                                    operator = "eum";
                                                    value = "dolor";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "necessitatibus";
                                                    key = "odit";
                                                    operator = "nemo";
                                                    value = "quasi";
                                                }}),
                                            }};
                                            replicaCount = "iure";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("debitis"),
                                        add("eius"),
                                        add("maxime"),
                                        add("deleniti"),
                                    }};
                                    installSpec = "INSTALL_SPEC_ENABLED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("ullam", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("nihil"),
                                                    add("repellat"),
                                                    add("quibusdam"),
                                                }};
                                                management = "MANAGEMENT_UNSPECIFIED";
                                            }});
                                            put("saepe", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("accusantium"),
                                                    add("consequuntur"),
                                                    add("praesentium"),
                                                    add("natus"),
                                                }};
                                                management = "MANAGEMENT_UNSPECIFIED";
                                            }});
                                            put("sunt", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("illum"),
                                                    add("pariatur"),
                                                    add("maxime"),
                                                    add("ea"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                            put("odit", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("accusantium"),
                                                    add("ab"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                        }};
                                        templateLibrary = new PolicyControllerTemplateLibraryConfig() {{
                                            included = false;
                                            installation = "ALL";
                                        }};
                                    }};
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                        installation = "NOT_INSTALLED";
                                    }};
                                }};
                                version = "voluptate";
                            }};
                        }});
                        put("autem", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "nam";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = "SECURITY_POLICY_UNSPECIFIED";
                                version = "pariatur";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "nemo";
                                        httpsProxy = "voluptatibus";
                                        policyDir = "perferendis";
                                        secretType = "fugiat";
                                        syncBranch = "amet";
                                        syncRepo = "aut";
                                        syncRev = "cumque";
                                        syncWaitSecs = "corporis";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "hic";
                                        policyDir = "libero";
                                        secretType = "nobis";
                                        syncRepo = "dolores";
                                        syncWaitSecs = "quis";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "totam";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "dignissimos";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("quis"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "perferendis";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("minus", "quam");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "vero";
                                            clientSecret = "nostrum";
                                            kubectlRedirectUri = "hic";
                                            tenant = "recusandae";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "omnis";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "facilis";
                                            clientId = "perspiciatis";
                                            clientSecret = "voluptatem";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "porro";
                                            groupPrefix = "consequuntur";
                                            groupsClaim = "blanditiis";
                                            issuerUri = "error";
                                            kubectlRedirectUri = "eaque";
                                            scopes = "occaecati";
                                            userClaim = "rerum";
                                            userPrefix = "adipisci";
                                        }};
                                        proxy = "asperiores";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "MANUAL";
                                management = "MANAGEMENT_UNSPECIFIED";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "iste";
                                    constraintViolationLimit = "dolorum";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("pariatur", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "provident";
                                                    memory = "nobis";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "libero";
                                                    memory = "delectus";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "quos";
                                                    key = "aliquid";
                                                    operator = "dolorem";
                                                    value = "dolorem";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "dolor";
                                                    key = "qui";
                                                    operator = "ipsum";
                                                    value = "hic";
                                                }}),
                                            }};
                                            replicaCount = "excepturi";
                                        }});
                                        put("cum", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "voluptate";
                                                    memory = "dignissimos";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "reiciendis";
                                                    memory = "amet";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "numquam";
                                                    key = "veritatis";
                                                    operator = "ipsa";
                                                    value = "ipsa";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "iure";
                                                    key = "odio";
                                                    operator = "quaerat";
                                                    value = "accusamus";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "quidem";
                                                    key = "voluptatibus";
                                                    operator = "voluptas";
                                                    value = "natus";
                                                }}),
                                            }};
                                            replicaCount = "eos";
                                        }});
                                        put("atque", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "sit";
                                                    memory = "fugiat";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "ab";
                                                    memory = "soluta";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "iusto";
                                                    key = "voluptate";
                                                    operator = "dolorum";
                                                    value = "deleniti";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "omnis";
                                                    key = "necessitatibus";
                                                    operator = "distinctio";
                                                    value = "asperiores";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "nihil";
                                                    key = "ipsum";
                                                    operator = "voluptate";
                                                    value = "id";
                                                }}),
                                            }};
                                            replicaCount = "saepe";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("aspernatur"),
                                        add("perferendis"),
                                    }};
                                    installSpec = "INSTALL_SPEC_UNSPECIFIED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add("CLOUD_MONITORING"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("CLOUD_MONITORING"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("provident", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("repellendus"),
                                                    add("totam"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                            put("alias", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("quaerat"),
                                                    add("tempora"),
                                                    add("vel"),
                                                    add("quod"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                            put("qui", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("a"),
                                                    add("esse"),
                                                    add("harum"),
                                                }};
                                                management = "MANAGEMENT_UNSPECIFIED";
                                            }});
                                        }};
                                        templateLibrary = new PolicyControllerTemplateLibraryConfig() {{
                                            included = false;
                                            installation = "INSTALLATION_UNSPECIFIED";
                                        }};
                                    }};
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                        installation = "ALL";
                                    }};
                                }};
                                version = "tenetur";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = "ENABLING";
                    }};
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("accusamus", new java.util.HashMap<String, Object>() {{
                            put("enim", "dolorem");
                            put("sapiente", "totam");
                        }});
                        put("nihil", new java.util.HashMap<String, Object>() {{
                            put("expedita", "neque");
                        }});
                        put("sed", new java.util.HashMap<String, Object>() {{
                            put("libero", "voluptas");
                            put("deserunt", "quam");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "ipsum";
                            }};
                        }};
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("qui", "cupiditate");
                            put("maxime", "pariatur");
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("dicta", "laborum");
                            put("totam", "incidunt");
                            put("aspernatur", "dolores");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = "ANTHOS_LICENSE";
                            configMembership = "facilis";
                        }};
                    }};
                    state = new CommonFeatureState() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "OK";
                                description = "quam";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("temporibus", "qui");
                            put("neque", "fugit");
                            put("magni", "odio");
                        }};
                        state = new FeatureState() {{
                            code = "CODE_UNSPECIFIED";
                            description = "ullam";
                            updateTime = "nam";
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