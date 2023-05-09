<!-- Start SDK Example Usage -->
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

            GkehubProjectsLocationsFeaturesCreateRequest req = new GkehubProjectsLocationsFeaturesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                featureInput = new FeatureInput() {{
                    fleetDefaultMemberConfig = new CommonFleetDefaultMemberConfigSpecInput() {{
                        identityservice = new IdentityServiceMembershipSpecInput() {{
                            authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                add(new IdentityServiceAuthMethodInput() {{
                                    azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                        clientId = "quibusdam";
                                        clientSecret = "unde";
                                        kubectlRedirectUri = "nulla";
                                        tenant = "corrupti";
                                    }};
                                    googleConfig = new IdentityServiceGoogleConfig() {{
                                        disable = false;
                                    }};
                                    name = "Ben Mueller";
                                    oidcConfig = new IdentityServiceOidcConfigInput() {{
                                        certificateAuthorityData = "iure";
                                        clientId = "magnam";
                                        clientSecret = "debitis";
                                        deployCloudConsoleProxy = false;
                                        enableAccessToken = false;
                                        extraParams = "ipsa";
                                        groupPrefix = "delectus";
                                        groupsClaim = "tempora";
                                        issuerUri = "suscipit";
                                        kubectlRedirectUri = "molestiae";
                                        scopes = "minus";
                                        userClaim = "placeat";
                                        userPrefix = "voluptatum";
                                    }};
                                    proxy = "iusto";
                                }}),
                                add(new IdentityServiceAuthMethodInput() {{
                                    azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                        clientId = "excepturi";
                                        clientSecret = "nisi";
                                        kubectlRedirectUri = "recusandae";
                                        tenant = "temporibus";
                                    }};
                                    googleConfig = new IdentityServiceGoogleConfig() {{
                                        disable = false;
                                    }};
                                    name = "Erica Bogisich III";
                                    oidcConfig = new IdentityServiceOidcConfigInput() {{
                                        certificateAuthorityData = "repellendus";
                                        clientId = "sapiente";
                                        clientSecret = "quo";
                                        deployCloudConsoleProxy = false;
                                        enableAccessToken = false;
                                        extraParams = "odit";
                                        groupPrefix = "at";
                                        groupsClaim = "at";
                                        issuerUri = "maiores";
                                        kubectlRedirectUri = "molestiae";
                                        scopes = "quod";
                                        userClaim = "quod";
                                        userPrefix = "esse";
                                    }};
                                    proxy = "totam";
                                }}),
                                add(new IdentityServiceAuthMethodInput() {{
                                    azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                        clientId = "porro";
                                        clientSecret = "dolorum";
                                        kubectlRedirectUri = "dicta";
                                        tenant = "nam";
                                    }};
                                    googleConfig = new IdentityServiceGoogleConfig() {{
                                        disable = false;
                                    }};
                                    name = "Seth Conroy";
                                    oidcConfig = new IdentityServiceOidcConfigInput() {{
                                        certificateAuthorityData = "optio";
                                        clientId = "totam";
                                        clientSecret = "beatae";
                                        deployCloudConsoleProxy = false;
                                        enableAccessToken = false;
                                        extraParams = "commodi";
                                        groupPrefix = "molestiae";
                                        groupsClaim = "modi";
                                        issuerUri = "qui";
                                        kubectlRedirectUri = "impedit";
                                        scopes = "cum";
                                        userClaim = "esse";
                                        userPrefix = "ipsum";
                                    }};
                                    proxy = "excepturi";
                                }}),
                            }};
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("perferendis", "ad");
                    }};
                    membershipSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.MembershipFeatureSpecInput>() {{
                        put("sed", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "iste";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = MembershipSpecSecurityPolicyEnum.SECURITY_POLICY_UNSPECIFIED;
                                version = "natus";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "laboriosam";
                                        httpsProxy = "hic";
                                        policyDir = "saepe";
                                        secretType = "fuga";
                                        syncBranch = "in";
                                        syncRepo = "corporis";
                                        syncRev = "iste";
                                        syncWaitSecs = "iure";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "saepe";
                                        policyDir = "quidem";
                                        secretType = "architecto";
                                        syncRepo = "ipsa";
                                        syncWaitSecs = "reiciendis";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "est";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "mollitia";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("dolores"),
                                        add("dolorem"),
                                        add("corporis"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "enim";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("nemo", "minima");
                                put("excepturi", "accusantium");
                                put("iure", "culpa");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "sapiente";
                                            clientSecret = "architecto";
                                            kubectlRedirectUri = "mollitia";
                                            tenant = "dolorem";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Carlos Ziemann";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "numquam";
                                            clientId = "commodi";
                                            clientSecret = "quam";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "molestiae";
                                            groupPrefix = "velit";
                                            groupsClaim = "error";
                                            issuerUri = "quia";
                                            kubectlRedirectUri = "quis";
                                            scopes = "vitae";
                                            userClaim = "laborum";
                                            userPrefix = "animi";
                                        }};
                                        proxy = "enim";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "odit";
                                            clientSecret = "quo";
                                            kubectlRedirectUri = "sequi";
                                            tenant = "tenetur";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Mr. Alberta Schuster";
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
                                        name = "Shawna Carter";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "iusto";
                                            clientId = "dicta";
                                            clientSecret = "harum";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "enim";
                                            groupPrefix = "accusamus";
                                            groupsClaim = "commodi";
                                            issuerUri = "repudiandae";
                                            kubectlRedirectUri = "quae";
                                            scopes = "ipsum";
                                            userClaim = "quidem";
                                            userPrefix = "molestias";
                                        }};
                                        proxy = "excepturi";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "pariatur";
                                            clientSecret = "modi";
                                            kubectlRedirectUri = "praesentium";
                                            tenant = "rem";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Carl Waelchi DVM";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "incidunt";
                                            clientId = "enim";
                                            clientSecret = "consequatur";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "est";
                                            groupPrefix = "quibusdam";
                                            groupsClaim = "explicabo";
                                            issuerUri = "deserunt";
                                            kubectlRedirectUri = "distinctio";
                                            scopes = "quibusdam";
                                            userClaim = "labore";
                                            userPrefix = "modi";
                                        }};
                                        proxy = "qui";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.AUTOMATIC;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_AUTOMATIC;
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "quos";
                                    constraintViolationLimit = "perferendis";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("assumenda", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "ipsam";
                                                    memory = "alias";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "fugit";
                                                    memory = "dolorum";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "tempora";
                                                    key = "facilis";
                                                    operator = "tempore";
                                                    value = "labore";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "delectus";
                                                    key = "eum";
                                                    operator = "non";
                                                    value = "eligendi";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "sint";
                                                    key = "aliquid";
                                                    operator = "provident";
                                                    value = "necessitatibus";
                                                }}),
                                            }};
                                            replicaCount = "sint";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("dolor"),
                                        add("debitis"),
                                        add("a"),
                                    }};
                                    installSpec = PolicyControllerHubConfigInstallSpecEnum.INSTALL_SPEC_ENABLED;
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
                                            put("rerum", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("magnam"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                            put("facere", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("aliquid"),
                                                    add("laborum"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                            put("non", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("enim"),
                                                    add("accusamus"),
                                                    add("delectus"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                            put("provident", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("id"),
                                                    add("blanditiis"),
                                                    add("deleniti"),
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
                                version = "nisi";
                            }};
                        }});
                        put("vel", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "natus";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = MembershipSpecSecurityPolicyEnum.NON_PRIVILEGED;
                                version = "molestiae";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "perferendis";
                                        httpsProxy = "nihil";
                                        policyDir = "magnam";
                                        secretType = "distinctio";
                                        syncBranch = "id";
                                        syncRepo = "labore";
                                        syncRev = "labore";
                                        syncWaitSecs = "suscipit";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "natus";
                                        policyDir = "nobis";
                                        secretType = "eum";
                                        syncRepo = "vero";
                                        syncWaitSecs = "aspernatur";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "architecto";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "magnam";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("excepturi"),
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
                                version = "sint";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("mollitia", "reiciendis");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "ad";
                                            clientSecret = "eum";
                                            kubectlRedirectUri = "dolor";
                                            tenant = "necessitatibus";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Vivian Boyle";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "debitis";
                                            clientId = "eius";
                                            clientSecret = "maxime";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "deleniti";
                                            groupPrefix = "facilis";
                                            groupsClaim = "in";
                                            issuerUri = "architecto";
                                            kubectlRedirectUri = "architecto";
                                            scopes = "repudiandae";
                                            userClaim = "ullam";
                                            userPrefix = "expedita";
                                        }};
                                        proxy = "nihil";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "repellat";
                                            clientSecret = "quibusdam";
                                            kubectlRedirectUri = "sed";
                                            tenant = "saepe";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Edward Crooks";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "magni";
                                            clientId = "sunt";
                                            clientSecret = "quo";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "illum";
                                            groupPrefix = "pariatur";
                                            groupsClaim = "maxime";
                                            issuerUri = "ea";
                                            kubectlRedirectUri = "excepturi";
                                            scopes = "odit";
                                            userClaim = "ea";
                                            userPrefix = "accusantium";
                                        }};
                                        proxy = "ab";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "maiores";
                                            clientSecret = "quidem";
                                            kubectlRedirectUri = "ipsam";
                                            tenant = "voluptate";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Candice Beatty";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "voluptatibus";
                                            clientId = "perferendis";
                                            clientSecret = "fugiat";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "amet";
                                            groupPrefix = "aut";
                                            groupsClaim = "cumque";
                                            issuerUri = "corporis";
                                            kubectlRedirectUri = "hic";
                                            scopes = "libero";
                                            userClaim = "nobis";
                                            userPrefix = "dolores";
                                        }};
                                        proxy = "quis";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.AUTOMATIC;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_AUTOMATIC;
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "eaque";
                                    constraintViolationLimit = "quis";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("eos", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "perferendis";
                                                    memory = "dolores";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "minus";
                                                    memory = "quam";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "vero";
                                                    key = "nostrum";
                                                    operator = "hic";
                                                    value = "recusandae";
                                                }}),
                                            }};
                                            replicaCount = "omnis";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("perspiciatis"),
                                        add("voluptatem"),
                                        add("porro"),
                                    }};
                                    installSpec = PolicyControllerHubConfigInstallSpecEnum.INSTALL_SPEC_UNSPECIFIED;
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add(PolicyControllerMonitoringConfigBackendsEnum.PROMETHEUS),
                                            add(PolicyControllerMonitoringConfigBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(PolicyControllerMonitoringConfigBackendsEnum.PROMETHEUS),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("adipisci", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("earum"),
                                                    add("modi"),
                                                    add("iste"),
                                                    add("dolorum"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                            put("pariatur", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("nobis"),
                                                    add("libero"),
                                                    add("delectus"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.MANAGEMENT_UNSPECIFIED;
                                            }});
                                            put("quos", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("dolorem"),
                                                    add("dolorem"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.MANAGEMENT_UNSPECIFIED;
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
                                        installation = PolicyControllerTemplateLibraryConfigInstallationEnum.INSTALLATION_UNSPECIFIED;
                                    }};
                                }};
                                version = "hic";
                            }};
                        }});
                        put("excepturi", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "cum";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = MembershipSpecSecurityPolicyEnum.NON_PRIVILEGED;
                                version = "dignissimos";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "reiciendis";
                                        httpsProxy = "amet";
                                        policyDir = "dolorum";
                                        secretType = "numquam";
                                        syncBranch = "veritatis";
                                        syncRepo = "ipsa";
                                        syncRev = "ipsa";
                                        syncWaitSecs = "iure";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "odio";
                                        policyDir = "quaerat";
                                        secretType = "accusamus";
                                        syncRepo = "quidem";
                                        syncWaitSecs = "voluptatibus";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "voluptas";
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
                                        add("atque"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
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
                                put("dolorum", "iusto");
                                put("voluptate", "dolorum");
                                put("deleniti", "omnis");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "distinctio";
                                            clientSecret = "asperiores";
                                            kubectlRedirectUri = "nihil";
                                            tenant = "ipsum";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Alberta Ullrich";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "perferendis";
                                            clientId = "amet";
                                            clientSecret = "optio";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "accusamus";
                                            groupPrefix = "ad";
                                            groupsClaim = "saepe";
                                            issuerUri = "suscipit";
                                            kubectlRedirectUri = "deserunt";
                                            scopes = "provident";
                                            userClaim = "minima";
                                            userPrefix = "repellendus";
                                        }};
                                        proxy = "totam";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "similique";
                                            clientSecret = "alias";
                                            kubectlRedirectUri = "at";
                                            tenant = "quaerat";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Gina Schmeler";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "dolorum";
                                            clientId = "a";
                                            clientSecret = "esse";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "harum";
                                            groupPrefix = "iusto";
                                            groupsClaim = "ipsum";
                                            issuerUri = "quisquam";
                                            kubectlRedirectUri = "tenetur";
                                            scopes = "amet";
                                            userClaim = "tempore";
                                            userPrefix = "accusamus";
                                        }};
                                        proxy = "numquam";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "enim";
                                            clientSecret = "dolorem";
                                            kubectlRedirectUri = "sapiente";
                                            tenant = "totam";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Karen Rath";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "vel";
                                            clientId = "libero";
                                            clientSecret = "voluptas";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "deserunt";
                                            groupPrefix = "quam";
                                            groupsClaim = "ipsum";
                                            issuerUri = "incidunt";
                                            kubectlRedirectUri = "qui";
                                            scopes = "cupiditate";
                                            userClaim = "maxime";
                                            userPrefix = "pariatur";
                                        }};
                                        proxy = "soluta";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "dicta";
                                            clientSecret = "laborum";
                                            kubectlRedirectUri = "totam";
                                            tenant = "incidunt";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Bonnie Raynor";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "quam";
                                            clientId = "molestias";
                                            clientSecret = "temporibus";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "qui";
                                            groupPrefix = "neque";
                                            groupsClaim = "fugit";
                                            issuerUri = "magni";
                                            kubectlRedirectUri = "odio";
                                            scopes = "sunt";
                                            userClaim = "ullam";
                                            userPrefix = "nam";
                                        }};
                                        proxy = "hic";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.CONTROL_PLANE_MANAGEMENT_UNSPECIFIED;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_MANUAL;
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "soluta";
                                    constraintViolationLimit = "nobis";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("saepe", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "ipsum";
                                                    memory = "veritatis";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "nobis";
                                                    memory = "quos";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "cupiditate";
                                                    key = "aperiam";
                                                    operator = "delectus";
                                                    value = "dolorem";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "dolore";
                                                    key = "labore";
                                                    operator = "adipisci";
                                                    value = "dolorum";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "architecto";
                                                    key = "quae";
                                                    operator = "aut";
                                                    value = "quas";
                                                }}),
                                            }};
                                            replicaCount = "itaque";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("est"),
                                    }};
                                    installSpec = PolicyControllerHubConfigInstallSpecEnum.INSTALL_SPEC_SUSPENDED;
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add(PolicyControllerMonitoringConfigBackendsEnum.CLOUD_MONITORING),
                                            add(PolicyControllerMonitoringConfigBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(PolicyControllerMonitoringConfigBackendsEnum.CLOUD_MONITORING),
                                            add(PolicyControllerMonitoringConfigBackendsEnum.PROMETHEUS),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("quae", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("odio"),
                                                    add("occaecati"),
                                                    add("voluptatibus"),
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
                                version = "quis";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = FeatureResourceStateStateEnum.ENABLING;
                    }};;
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("voluptate", new java.util.HashMap<String, Object>() {{
                            put("vero", "tenetur");
                        }});
                        put("dignissimos", new java.util.HashMap<String, Object>() {{
                            put("distinctio", "quod");
                            put("odio", "similique");
                            put("facilis", "vero");
                            put("ducimus", "dolore");
                        }});
                        put("quibusdam", new java.util.HashMap<String, Object>() {{
                            put("sequi", "natus");
                            put("impedit", "aut");
                            put("voluptatibus", "exercitationem");
                            put("nulla", "fugit");
                        }});
                        put("porro", new java.util.HashMap<String, Object>() {{
                            put("doloribus", "iusto");
                            put("eligendi", "ducimus");
                            put("alias", "officia");
                            put("tempora", "ipsam");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "ea";
                            }};;
                        }};;
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("vel", "possimus");
                        }};
                        fleetobservability = new FleetObservabilityFeatureSpec() {{
                            loggingConfig = new FleetObservabilityLoggingConfig() {{
                                defaultConfig = new FleetObservabilityRoutingConfig() {{
                                    mode = FleetObservabilityRoutingConfigModeEnum.MODE_UNSPECIFIED;
                                }};;
                                fleetScopeLogsConfig = new FleetObservabilityRoutingConfig() {{
                                    mode = FleetObservabilityRoutingConfigModeEnum.MODE_UNSPECIFIED;
                                }};;
                            }};;
                        }};;
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = MultiClusterIngressFeatureSpecBillingEnum.PAY_AS_YOU_GO;
                            configMembership = "laudantium";
                        }};;
                    }};;
                    state = new CommonFeatureState() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = StatusCodeEnum.CODE_UNSPECIFIED;
                                description = "dolor";
                            }};;
                        }};;
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("quasi", "ex");
                            put("nulla", "excepturi");
                            put("voluptatibus", "nostrum");
                            put("sapiente", "quisquam");
                        }};
                        state = new FeatureState() {{
                            code = FeatureStateCodeEnum.ERROR;
                            description = "ea";
                            updateTime = "impedit";
                        }};;
                    }};;
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "aliquid";
                featureId = "inventore";
                fields = "magnam";
                key = "ea";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "consectetur";
                requestId = "recusandae";
                uploadType = "aspernatur";
                uploadProtocol = "minima";
            }};            

            GkehubProjectsLocationsFeaturesCreateResponse res = sdk.projects.gkehubProjectsLocationsFeaturesCreate(req, new GkehubProjectsLocationsFeaturesCreateSecurity("eaque", "a") {{
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
<!-- End SDK Example Usage -->