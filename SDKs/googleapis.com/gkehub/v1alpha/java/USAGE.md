<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateSecurity;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FeatureInput;
import org.openapis.openapi.models.shared.CommonFeatureStateInput;
import org.openapis.openapi.models.shared.FeatureStateCodeEnum;
import org.openapis.openapi.models.shared.FeatureState;
import org.openapis.openapi.models.shared.AppDevExperienceFeatureState;
import org.openapis.openapi.models.shared.StatusCodeEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.CommonFeatureSpec;
import org.openapis.openapi.models.shared.FeatureSpecProvisionGoogleCaEnum;
import org.openapis.openapi.models.shared.FeatureSpec;
import org.openapis.openapi.models.shared.MembershipSpecCertificateManagementEnum;
import org.openapis.openapi.models.shared.MembershipSpec;
import org.openapis.openapi.models.shared.MultiClusterIngressFeatureSpecBillingEnum;
import org.openapis.openapi.models.shared.MultiClusterIngressFeatureSpec;
import org.openapis.openapi.models.shared.CloudAuditLoggingFeatureSpec;
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
import org.openapis.openapi.models.shared.ServiceMeshMembershipSpecDefaultChannelEnum;
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
import org.openapis.openapi.models.shared.CloudBuildMembershipSpecSecurityPolicyEnum;
import org.openapis.openapi.models.shared.CloudBuildMembershipSpec;
import org.openapis.openapi.models.shared.CommonFleetDefaultMemberConfigSpecInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsFeaturesCreateRequest req = new GkehubProjectsLocationsFeaturesCreateRequest() {{
                dollarXgafv = "2";
                featureInput = new FeatureInput() {{
                    fleetDefaultMemberConfig = new CommonFleetDefaultMemberConfigSpecInput() {{
                        identityservice = new IdentityServiceMembershipSpecInput() {{
                            authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                add(new IdentityServiceAuthMethodInput() {{
                                    azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                        clientId = "distinctio";
                                        clientSecret = "quibusdam";
                                        kubectlRedirectUri = "unde";
                                        tenant = "nulla";
                                    }};
                                    googleConfig = new IdentityServiceGoogleConfig() {{
                                        disable = false;
                                    }};
                                    name = "corrupti";
                                    oidcConfig = new IdentityServiceOidcConfigInput() {{
                                        certificateAuthorityData = "illum";
                                        clientId = "vel";
                                        clientSecret = "error";
                                        deployCloudConsoleProxy = false;
                                        enableAccessToken = false;
                                        extraParams = "deserunt";
                                        groupPrefix = "suscipit";
                                        groupsClaim = "iure";
                                        issuerUri = "magnam";
                                        kubectlRedirectUri = "debitis";
                                        scopes = "ipsa";
                                        userClaim = "delectus";
                                        userPrefix = "tempora";
                                    }};
                                    proxy = "suscipit";
                                }}),
                                add(new IdentityServiceAuthMethodInput() {{
                                    azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                        clientId = "molestiae";
                                        clientSecret = "minus";
                                        kubectlRedirectUri = "placeat";
                                        tenant = "voluptatum";
                                    }};
                                    googleConfig = new IdentityServiceGoogleConfig() {{
                                        disable = false;
                                    }};
                                    name = "iusto";
                                    oidcConfig = new IdentityServiceOidcConfigInput() {{
                                        certificateAuthorityData = "excepturi";
                                        clientId = "nisi";
                                        clientSecret = "recusandae";
                                        deployCloudConsoleProxy = false;
                                        enableAccessToken = false;
                                        extraParams = "temporibus";
                                        groupPrefix = "ab";
                                        groupsClaim = "quis";
                                        issuerUri = "veritatis";
                                        kubectlRedirectUri = "deserunt";
                                        scopes = "perferendis";
                                        userClaim = "ipsam";
                                        userPrefix = "repellendus";
                                    }};
                                    proxy = "sapiente";
                                }}),
                                add(new IdentityServiceAuthMethodInput() {{
                                    azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                        clientId = "quo";
                                        clientSecret = "odit";
                                        kubectlRedirectUri = "at";
                                        tenant = "at";
                                    }};
                                    googleConfig = new IdentityServiceGoogleConfig() {{
                                        disable = false;
                                    }};
                                    name = "maiores";
                                    oidcConfig = new IdentityServiceOidcConfigInput() {{
                                        certificateAuthorityData = "molestiae";
                                        clientId = "quod";
                                        clientSecret = "quod";
                                        deployCloudConsoleProxy = false;
                                        enableAccessToken = false;
                                        extraParams = "esse";
                                        groupPrefix = "totam";
                                        groupsClaim = "porro";
                                        issuerUri = "dolorum";
                                        kubectlRedirectUri = "dicta";
                                        scopes = "nam";
                                        userClaim = "officia";
                                        userPrefix = "occaecati";
                                    }};
                                    proxy = "fugit";
                                }}),
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("hic", "optio");
                        put("totam", "beatae");
                        put("commodi", "molestiae");
                    }};
                    membershipSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.MembershipFeatureSpecInput>() {{
                        put("qui", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "impedit";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "PRIVILEGED";
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
                                        gcpServiceAccountEmail = "ipsum";
                                        httpsProxy = "excepturi";
                                        policyDir = "aspernatur";
                                        secretType = "perferendis";
                                        syncBranch = "ad";
                                        syncRepo = "natus";
                                        syncRev = "sed";
                                        syncWaitSecs = "iste";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "dolor";
                                        policyDir = "natus";
                                        secretType = "laboriosam";
                                        syncRepo = "hic";
                                        syncWaitSecs = "saepe";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "fuga";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "in";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("iste"),
                                        add("iure"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add("CLOUD_MONITORING"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("CLOUD_MONITORING"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "est";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("laborum", "dolores");
                                put("dolorem", "corporis");
                                put("explicabo", "nobis");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "omnis";
                                            clientSecret = "nemo";
                                            kubectlRedirectUri = "minima";
                                            tenant = "excepturi";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "accusantium";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "iure";
                                            clientId = "culpa";
                                            clientSecret = "doloribus";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "sapiente";
                                            groupPrefix = "architecto";
                                            groupsClaim = "mollitia";
                                            issuerUri = "dolorem";
                                            kubectlRedirectUri = "culpa";
                                            scopes = "consequuntur";
                                            userClaim = "repellat";
                                            userPrefix = "mollitia";
                                        }};
                                        proxy = "occaecati";
                                    }}),
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
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                defaultChannel = "STABLE";
                                management = "MANAGEMENT_UNSPECIFIED";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "quasi";
                                    constraintViolationLimit = "error";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("laborum", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "quasi";
                                                    memory = "reiciendis";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "voluptatibus";
                                                    memory = "vero";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "praesentium";
                                                    key = "voluptatibus";
                                                    operator = "ipsa";
                                                    value = "omnis";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "voluptate";
                                                    key = "cum";
                                                    operator = "perferendis";
                                                    value = "doloremque";
                                                }}),
                                            }};
                                            replicaCount = "reprehenderit";
                                        }});
                                        put("ut", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "maiores";
                                                    memory = "dicta";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "corporis";
                                                    memory = "dolore";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "dicta";
                                                    key = "harum";
                                                    operator = "enim";
                                                    value = "accusamus";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "commodi";
                                                    key = "repudiandae";
                                                    operator = "quae";
                                                    value = "ipsum";
                                                }}),
                                            }};
                                            replicaCount = "quidem";
                                        }});
                                        put("molestias", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "excepturi";
                                                    memory = "pariatur";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "modi";
                                                    memory = "praesentium";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "voluptates";
                                                    key = "quasi";
                                                    operator = "repudiandae";
                                                    value = "sint";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "veritatis";
                                                    key = "itaque";
                                                    operator = "incidunt";
                                                    value = "enim";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "consequatur";
                                                    key = "est";
                                                    operator = "quibusdam";
                                                    value = "explicabo";
                                                }}),
                                            }};
                                            replicaCount = "deserunt";
                                        }});
                                        put("distinctio", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "quibusdam";
                                                    memory = "labore";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "modi";
                                                    memory = "qui";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "cupiditate";
                                                    key = "quos";
                                                    operator = "perferendis";
                                                    value = "magni";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "assumenda";
                                                    key = "ipsam";
                                                    operator = "alias";
                                                    value = "fugit";
                                                }}),
                                            }};
                                            replicaCount = "dolorum";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("tempora"),
                                        add("facilis"),
                                        add("tempore"),
                                    }};
                                    installSpec = "INSTALL_SPEC_NOT_INSTALLED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add("PROMETHEUS"),
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
                                                    add("sint"),
                                                    add("officia"),
                                                    add("dolor"),
                                                    add("debitis"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                            put("dolorum", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("in"),
                                                    add("illum"),
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
                                        installation = "INSTALLATION_UNSPECIFIED";
                                    }};
                                }};
                                version = "magnam";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = "ENABLED";
                            }};
                        }});
                        put("facere", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "ea";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "NON_PRIVILEGED";
                                version = "laborum";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "accusamus";
                                        httpsProxy = "non";
                                        policyDir = "occaecati";
                                        secretType = "enim";
                                        syncBranch = "accusamus";
                                        syncRepo = "delectus";
                                        syncRev = "quidem";
                                        syncWaitSecs = "provident";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "nam";
                                        policyDir = "id";
                                        secretType = "blanditiis";
                                        syncRepo = "deleniti";
                                        syncWaitSecs = "sapiente";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "amet";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "deserunt";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("vel"),
                                        add("natus"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add("PROMETHEUS"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "magnam";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("id", "labore");
                                put("labore", "suscipit");
                                put("natus", "nobis");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "vero";
                                            clientSecret = "aspernatur";
                                            kubectlRedirectUri = "architecto";
                                            tenant = "magnam";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "et";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "excepturi";
                                            clientId = "ullam";
                                            clientSecret = "provident";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "quos";
                                            groupPrefix = "sint";
                                            groupsClaim = "accusantium";
                                            issuerUri = "mollitia";
                                            kubectlRedirectUri = "reiciendis";
                                            scopes = "mollitia";
                                            userClaim = "ad";
                                            userPrefix = "eum";
                                        }};
                                        proxy = "dolor";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "necessitatibus";
                                            clientSecret = "odit";
                                            kubectlRedirectUri = "nemo";
                                            tenant = "quasi";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "iure";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "doloribus";
                                            clientId = "debitis";
                                            clientSecret = "eius";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "maxime";
                                            groupPrefix = "deleniti";
                                            groupsClaim = "facilis";
                                            issuerUri = "in";
                                            kubectlRedirectUri = "architecto";
                                            scopes = "architecto";
                                            userClaim = "repudiandae";
                                            userPrefix = "ullam";
                                        }};
                                        proxy = "expedita";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                defaultChannel = "STABLE";
                                management = "MANAGEMENT_MANUAL";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "sed";
                                    constraintViolationLimit = "saepe";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("accusantium", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "consequuntur";
                                                    memory = "praesentium";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "natus";
                                                    memory = "magni";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "quo";
                                                    key = "illum";
                                                    operator = "pariatur";
                                                    value = "maxime";
                                                }}),
                                            }};
                                            replicaCount = "ea";
                                        }});
                                        put("excepturi", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "odit";
                                                    memory = "ea";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "accusantium";
                                                    memory = "ab";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "quidem";
                                                    key = "ipsam";
                                                    operator = "voluptate";
                                                    value = "autem";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "nam";
                                                    key = "eaque";
                                                    operator = "pariatur";
                                                    value = "nemo";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "voluptatibus";
                                                    key = "perferendis";
                                                    operator = "fugiat";
                                                    value = "amet";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "aut";
                                                    key = "cumque";
                                                    operator = "corporis";
                                                    value = "hic";
                                                }}),
                                            }};
                                            replicaCount = "libero";
                                        }});
                                        put("nobis", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "dolores";
                                                    memory = "quis";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "totam";
                                                    memory = "dignissimos";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "quis";
                                                    key = "nesciunt";
                                                    operator = "eos";
                                                    value = "perferendis";
                                                }}),
                                            }};
                                            replicaCount = "dolores";
                                        }});
                                        put("minus", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "quam";
                                                    memory = "dolor";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "vero";
                                                    memory = "nostrum";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "recusandae";
                                                    key = "omnis";
                                                    operator = "facilis";
                                                    value = "perspiciatis";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "voluptatem";
                                                    key = "porro";
                                                    operator = "consequuntur";
                                                    value = "blanditiis";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "error";
                                                    key = "eaque";
                                                    operator = "occaecati";
                                                    value = "rerum";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "adipisci";
                                                    key = "asperiores";
                                                    operator = "earum";
                                                    value = "modi";
                                                }}),
                                            }};
                                            replicaCount = "iste";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("deleniti"),
                                        add("pariatur"),
                                        add("provident"),
                                    }};
                                    installSpec = "INSTALL_SPEC_SUSPENDED";
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
                                            put("dolorem", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("dolor"),
                                                }};
                                                management = "MANAGEMENT_UNSPECIFIED";
                                            }});
                                            put("ipsum", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("excepturi"),
                                                    add("cum"),
                                                    add("voluptate"),
                                                    add("dignissimos"),
                                                }};
                                                management = "INSTALLED";
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
                                version = "numquam";
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
                        put("iure", new java.util.HashMap<String, Object>() {{
                            put("quaerat", "accusamus");
                            put("quidem", "voluptatibus");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "voluptas";
                            }};
                        }};
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("eos", "atque");
                            put("sit", "fugiat");
                            put("ab", "soluta");
                        }};
                        cloudauditlogging = new CloudAuditLoggingFeatureSpec() {{
                            allowlistedServiceAccounts = new String[]{{
                                add("iusto"),
                                add("voluptate"),
                                add("dolorum"),
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("omnis", "necessitatibus");
                            put("distinctio", "asperiores");
                            put("nihil", "ipsum");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = "PAY_AS_YOU_GO";
                            configMembership = "id";
                        }};
                        workloadcertificate = new FeatureSpec() {{
                            defaultConfig = new MembershipSpec() {{
                                certificateManagement = "ENABLED";
                            }};
                            provisionGoogleCa = "GOOGLE_CA_PROVISIONING_UNSPECIFIED";
                        }};
                    }};
                    state = new CommonFeatureStateInput() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "CODE_UNSPECIFIED";
                                description = "perferendis";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("optio", "accusamus");
                        }};
                        state = new FeatureState() {{
                            code = "OK";
                            description = "saepe";
                            updateTime = "suscipit";
                        }};
                    }};
                }};
                accessToken = "deserunt";
                alt = "media";
                callback = "minima";
                featureId = "repellendus";
                fields = "totam";
                key = "similique";
                oauthToken = "alias";
                parent = "at";
                prettyPrint = false;
                quotaUser = "quaerat";
                requestId = "tempora";
                uploadType = "vel";
                uploadProtocol = "quod";
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