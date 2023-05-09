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
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = CloudBuildMembershipSpecSecurityPolicyEnum.SECURITY_POLICY_UNSPECIFIED;
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
                                defaultChannel = ServiceMeshMembershipSpecDefaultChannelEnum.REGULAR;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_AUTOMATIC;
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "perferendis";
                                    constraintViolationLimit = "magni";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("ipsam", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "alias";
                                                    memory = "fugit";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "dolorum";
                                                    memory = "excepturi";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "facilis";
                                                    key = "tempore";
                                                    operator = "labore";
                                                    value = "delectus";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "eum";
                                                    key = "non";
                                                    operator = "eligendi";
                                                    value = "sint";
                                                }}),
                                            }};
                                            replicaCount = "aliquid";
                                        }});
                                        put("provident", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "necessitatibus";
                                                    memory = "sint";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "officia";
                                                    memory = "dolor";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "a";
                                                    key = "dolorum";
                                                    operator = "in";
                                                    value = "in";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "illum";
                                                    key = "maiores";
                                                    operator = "rerum";
                                                    value = "dicta";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "magnam";
                                                    key = "cumque";
                                                    operator = "facere";
                                                    value = "ea";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "aliquid";
                                                    key = "laborum";
                                                    operator = "accusamus";
                                                    value = "non";
                                                }}),
                                            }};
                                            replicaCount = "occaecati";
                                        }});
                                        put("enim", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "accusamus";
                                                    memory = "delectus";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "quidem";
                                                    memory = "provident";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "id";
                                                    key = "blanditiis";
                                                    operator = "deleniti";
                                                    value = "sapiente";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "amet";
                                                    key = "deserunt";
                                                    operator = "nisi";
                                                    value = "vel";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "natus";
                                                    key = "omnis";
                                                    operator = "molestiae";
                                                    value = "perferendis";
                                                }}),
                                            }};
                                            replicaCount = "nihil";
                                        }});
                                        put("magnam", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "distinctio";
                                                    memory = "id";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "labore";
                                                    memory = "labore";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "natus";
                                                    key = "nobis";
                                                    operator = "eum";
                                                    value = "vero";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "aspernatur";
                                                    key = "architecto";
                                                    operator = "magnam";
                                                    value = "et";
                                                }}),
                                            }};
                                            replicaCount = "excepturi";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("provident"),
                                        add("quos"),
                                    }};
                                    installSpec = PolicyControllerHubConfigInstallSpecEnum.INSTALL_SPEC_ENABLED;
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add(PolicyControllerMonitoringConfigBackendsEnum.PROMETHEUS),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("mollitia", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("eum"),
                                                    add("dolor"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                            put("odit", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("quasi"),
                                                    add("iure"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                            put("debitis", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("maxime"),
                                                    add("deleniti"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                            put("in", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("architecto"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                        }};
                                        templateLibrary = new PolicyControllerTemplateLibraryConfig() {{
                                            included = false;
                                            installation = PolicyControllerTemplateLibraryConfigInstallationEnum.NOT_INSTALLED;
                                        }};
                                    }};
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                        installation = PolicyControllerTemplateLibraryConfigInstallationEnum.ALL;
                                    }};
                                }};
                                version = "nihil";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = MembershipSpecCertificateManagementEnum.ENABLED;
                            }};
                        }});
                        put("quibusdam", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "sed";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = CloudBuildMembershipSpecSecurityPolicyEnum.PRIVILEGED;
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
                                        gcpServiceAccountEmail = "accusantium";
                                        httpsProxy = "consequuntur";
                                        policyDir = "praesentium";
                                        secretType = "natus";
                                        syncBranch = "magni";
                                        syncRepo = "sunt";
                                        syncRev = "quo";
                                        syncWaitSecs = "illum";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "pariatur";
                                        policyDir = "maxime";
                                        secretType = "ea";
                                        syncRepo = "excepturi";
                                        syncWaitSecs = "odit";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "ea";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "accusantium";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("maiores"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
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
                                put("pariatur", "nemo");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "perferendis";
                                            clientSecret = "fugiat";
                                            kubectlRedirectUri = "amet";
                                            tenant = "aut";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Lewis Welch";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "dolores";
                                            clientId = "quis";
                                            clientSecret = "totam";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "dignissimos";
                                            groupPrefix = "eaque";
                                            groupsClaim = "quis";
                                            issuerUri = "nesciunt";
                                            kubectlRedirectUri = "eos";
                                            scopes = "perferendis";
                                            userClaim = "dolores";
                                            userPrefix = "minus";
                                        }};
                                        proxy = "quam";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "dolor";
                                            clientSecret = "vero";
                                            kubectlRedirectUri = "nostrum";
                                            tenant = "hic";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Alejandro Purdy DDS";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "consequuntur";
                                            clientId = "blanditiis";
                                            clientSecret = "error";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "eaque";
                                            groupPrefix = "occaecati";
                                            groupsClaim = "rerum";
                                            issuerUri = "adipisci";
                                            kubectlRedirectUri = "asperiores";
                                            scopes = "earum";
                                            userClaim = "modi";
                                            userPrefix = "iste";
                                        }};
                                        proxy = "dolorum";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "deleniti";
                                            clientSecret = "pariatur";
                                            kubectlRedirectUri = "provident";
                                            tenant = "nobis";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Toby Hahn";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "dolorem";
                                            clientId = "dolorem";
                                            clientSecret = "dolor";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "qui";
                                            groupPrefix = "ipsum";
                                            groupsClaim = "hic";
                                            issuerUri = "excepturi";
                                            kubectlRedirectUri = "cum";
                                            scopes = "voluptate";
                                            userClaim = "dignissimos";
                                            userPrefix = "reiciendis";
                                        }};
                                        proxy = "amet";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "dolorum";
                                            clientSecret = "numquam";
                                            kubectlRedirectUri = "veritatis";
                                            tenant = "ipsa";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Vera Kuhlman";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "quidem";
                                            clientId = "voluptatibus";
                                            clientSecret = "voluptas";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "natus";
                                            groupPrefix = "eos";
                                            groupsClaim = "atque";
                                            issuerUri = "sit";
                                            kubectlRedirectUri = "fugiat";
                                            scopes = "ab";
                                            userClaim = "soluta";
                                            userPrefix = "dolorum";
                                        }};
                                        proxy = "iusto";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.AUTOMATIC;
                                defaultChannel = ServiceMeshMembershipSpecDefaultChannelEnum.REGULAR;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_AUTOMATIC;
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "omnis";
                                    constraintViolationLimit = "necessitatibus";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("asperiores", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "nihil";
                                                    memory = "ipsum";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "voluptate";
                                                    memory = "id";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "eius";
                                                    key = "aspernatur";
                                                    operator = "perferendis";
                                                    value = "amet";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "optio";
                                                    key = "accusamus";
                                                    operator = "ad";
                                                    value = "saepe";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "suscipit";
                                                    key = "deserunt";
                                                    operator = "provident";
                                                    value = "minima";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "repellendus";
                                                    key = "totam";
                                                    operator = "similique";
                                                    value = "alias";
                                                }}),
                                            }};
                                            replicaCount = "at";
                                        }});
                                        put("quaerat", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "tempora";
                                                    memory = "vel";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "quod";
                                                    memory = "officiis";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "dolorum";
                                                    key = "a";
                                                    operator = "esse";
                                                    value = "harum";
                                                }}),
                                            }};
                                            replicaCount = "iusto";
                                        }});
                                        put("ipsum", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "quisquam";
                                                    memory = "tenetur";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "amet";
                                                    memory = "tempore";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "numquam";
                                                    key = "enim";
                                                    operator = "dolorem";
                                                    value = "sapiente";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "totam";
                                                    key = "nihil";
                                                    operator = "sit";
                                                    value = "expedita";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "neque";
                                                    key = "sed";
                                                    operator = "vel";
                                                    value = "libero";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "voluptas";
                                                    key = "deserunt";
                                                    operator = "quam";
                                                    value = "ipsum";
                                                }}),
                                            }};
                                            replicaCount = "incidunt";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("cupiditate"),
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
                                            put("aspernatur", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("distinctio"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.INSTALLED;
                                            }});
                                            put("aliquid", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("molestias"),
                                                    add("temporibus"),
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
                                version = "magni";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = MembershipSpecCertificateManagementEnum.DISABLED;
                            }};
                        }});
                        put("sunt", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "ullam";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = CloudBuildMembershipSpecSecurityPolicyEnum.PRIVILEGED;
                                version = "hic";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "voluptatem";
                                        httpsProxy = "cumque";
                                        policyDir = "soluta";
                                        secretType = "nobis";
                                        syncBranch = "et";
                                        syncRepo = "saepe";
                                        syncRev = "ipsum";
                                        syncWaitSecs = "veritatis";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "nobis";
                                        policyDir = "quos";
                                        secretType = "tempore";
                                        syncRepo = "cupiditate";
                                        syncWaitSecs = "aperiam";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "delectus";
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
                                        add("labore"),
                                        add("adipisci"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "quas";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("consequatur", "est");
                                put("repellendus", "porro");
                                put("doloribus", "ut");
                                put("facilis", "cupiditate");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "quae";
                                            clientSecret = "laudantium";
                                            kubectlRedirectUri = "odio";
                                            tenant = "occaecati";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Wilson Terry";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "ipsum";
                                            clientId = "delectus";
                                            clientSecret = "voluptate";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "consectetur";
                                            groupPrefix = "vero";
                                            groupsClaim = "tenetur";
                                            issuerUri = "dignissimos";
                                            kubectlRedirectUri = "hic";
                                            scopes = "distinctio";
                                            userClaim = "quod";
                                            userPrefix = "odio";
                                        }};
                                        proxy = "similique";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.MANUAL;
                                defaultChannel = ServiceMeshMembershipSpecDefaultChannelEnum.STABLE;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_AUTOMATIC;
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "dolore";
                                    constraintViolationLimit = "quibusdam";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("sequi", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "natus";
                                                    memory = "impedit";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "aut";
                                                    memory = "voluptatibus";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "nulla";
                                                    key = "fugit";
                                                    operator = "porro";
                                                    value = "maiores";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "doloribus";
                                                    key = "iusto";
                                                    operator = "eligendi";
                                                    value = "ducimus";
                                                }}),
                                            }};
                                            replicaCount = "alias";
                                        }});
                                        put("officia", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "tempora";
                                                    memory = "ipsam";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "ea";
                                                    memory = "aspernatur";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "possimus";
                                                    key = "magnam";
                                                    operator = "ratione";
                                                    value = "ex";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "laudantium";
                                                    key = "dicta";
                                                    operator = "dolor";
                                                    value = "maiores";
                                                }}),
                                            }};
                                            replicaCount = "quasi";
                                        }});
                                        put("ex", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "nulla";
                                                    memory = "excepturi";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "voluptatibus";
                                                    memory = "nostrum";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "quisquam";
                                                    key = "saepe";
                                                    operator = "ea";
                                                    value = "impedit";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "corporis";
                                                    key = "veniam";
                                                    operator = "aliquid";
                                                    value = "inventore";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "magnam";
                                                    key = "ea";
                                                    operator = "quo";
                                                    value = "consectetur";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "recusandae";
                                                    key = "aspernatur";
                                                    operator = "minima";
                                                    value = "eaque";
                                                }}),
                                            }};
                                            replicaCount = "a";
                                        }});
                                        put("libero", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "aut";
                                                    memory = "aut";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "deleniti";
                                                    memory = "impedit";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "fugit";
                                                    key = "accusamus";
                                                    operator = "inventore";
                                                    value = "non";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "et";
                                                    key = "dolorum";
                                                    operator = "laborum";
                                                    value = "placeat";
                                                }}),
                                            }};
                                            replicaCount = "velit";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("autem"),
                                        add("nobis"),
                                    }};
                                    installSpec = PolicyControllerHubConfigInstallSpecEnum.INSTALL_SPEC_ENABLED;
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add(PolicyControllerMonitoringConfigBackendsEnum.CLOUD_MONITORING),
                                            add(PolicyControllerMonitoringConfigBackendsEnum.PROMETHEUS),
                                            add(PolicyControllerMonitoringConfigBackendsEnum.CLOUD_MONITORING),
                                            add(PolicyControllerMonitoringConfigBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("numquam", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("provident"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.MANAGEMENT_UNSPECIFIED;
                                            }});
                                            put("molestiae", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("odio"),
                                                    add("eius"),
                                                }};
                                                management = PolicyControllerBundleInstallSpecManagementEnum.MANAGEMENT_UNSPECIFIED;
                                            }});
                                        }};
                                        templateLibrary = new PolicyControllerTemplateLibraryConfig() {{
                                            included = false;
                                            installation = PolicyControllerTemplateLibraryConfigInstallationEnum.NOT_INSTALLED;
                                        }};
                                    }};
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                        installation = PolicyControllerTemplateLibraryConfigInstallationEnum.NOT_INSTALLED;
                                    }};
                                }};
                                version = "fuga";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = MembershipSpecCertificateManagementEnum.DISABLED;
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = FeatureResourceStateStateEnum.UPDATING;
                    }};;
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("ut", new java.util.HashMap<String, Object>() {{
                            put("suscipit", "assumenda");
                            put("eos", "praesentium");
                        }});
                        put("quisquam", new java.util.HashMap<String, Object>() {{
                            put("ipsa", "id");
                        }});
                        put("quidem", new java.util.HashMap<String, Object>() {{
                            put("quo", "illum");
                        }});
                        put("quo", new java.util.HashMap<String, Object>() {{
                            put("eius", "eos");
                            put("voluptas", "ab");
                            put("cupiditate", "consequatur");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "tempora";
                            }};;
                        }};;
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("ipsam", "aspernatur");
                            put("sequi", "quo");
                            put("esse", "recusandae");
                            put("aperiam", "distinctio");
                        }};
                        cloudauditlogging = new CloudAuditLoggingFeatureSpec() {{
                            allowlistedServiceAccounts = new String[]{{
                                add("dignissimos"),
                                add("inventore"),
                                add("nihil"),
                                add("totam"),
                            }};
                        }};;
                        fleetobservability = new FleetObservabilityFeatureSpec() {{
                            loggingConfig = new FleetObservabilityLoggingConfig() {{
                                defaultConfig = new FleetObservabilityRoutingConfig() {{
                                    mode = FleetObservabilityRoutingConfigModeEnum.MOVE;
                                }};;
                                fleetScopeLogsConfig = new FleetObservabilityRoutingConfig() {{
                                    mode = FleetObservabilityRoutingConfigModeEnum.MODE_UNSPECIFIED;
                                }};;
                            }};;
                        }};;
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = MultiClusterIngressFeatureSpecBillingEnum.PAY_AS_YOU_GO;
                            configMembership = "occaecati";
                        }};;
                        workloadcertificate = new FeatureSpec() {{
                            defaultConfig = new MembershipSpec() {{
                                certificateManagement = MembershipSpecCertificateManagementEnum.DISABLED;
                            }};;
                            provisionGoogleCa = FeatureSpecProvisionGoogleCaEnum.ENABLED;
                        }};;
                    }};;
                    state = new CommonFeatureStateInput() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = StatusCodeEnum.CODE_UNSPECIFIED;
                                description = "deserunt";
                            }};;
                        }};;
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("accusantium", "porro");
                            put("eum", "quas");
                        }};
                        state = new FeatureState() {{
                            code = FeatureStateCodeEnum.WARNING;
                            description = "consequuntur";
                            updateTime = "deleniti";
                        }};;
                    }};;
                }};;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                featureId = "incidunt";
                fields = "atque";
                key = "explicabo";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "nisi";
                requestId = "fugit";
                uploadType = "sapiente";
                uploadProtocol = "consequuntur";
            }};            

            GkehubProjectsLocationsFeaturesCreateResponse res = sdk.projects.gkehubProjectsLocationsFeaturesCreate(req, new GkehubProjectsLocationsFeaturesCreateSecurity("ratione", "explicabo") {{
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