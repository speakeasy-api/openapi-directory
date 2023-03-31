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
                            cloudbuild = new CloudBuildMembershipSpec() {{
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
                                defaultChannel = "STABLE";
                                management = "MANAGEMENT_MANUAL";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "architecto";
                                    constraintViolationLimit = "mollitia";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("culpa", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "consequuntur";
                                                    memory = "repellat";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "mollitia";
                                                    memory = "occaecati";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "commodi";
                                                    key = "quam";
                                                    operator = "molestiae";
                                                    value = "velit";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "error";
                                                    key = "quia";
                                                    operator = "quis";
                                                    value = "vitae";
                                                }}),
                                            }};
                                            replicaCount = "laborum";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("enim"),
                                        add("odit"),
                                        add("quo"),
                                    }};
                                    installSpec = "INSTALL_SPEC_UNSPECIFIED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add("PROMETHEUS"),
                                            add("PROMETHEUS"),
                                            add("CLOUD_MONITORING"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("error", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("laborum"),
                                                    add("quasi"),
                                                    add("reiciendis"),
                                                    add("voluptatibus"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                        }};
                                        templateLibrary = new PolicyControllerTemplateLibraryConfig() {{
                                            included = false;
                                            installation = "NOT_INSTALLED";
                                        }};
                                    }};
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                        installation = "NOT_INSTALLED";
                                    }};
                                }};
                                version = "voluptatibus";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = "CERTIFICATE_MANAGEMENT_UNSPECIFIED";
                            }};
                        }});
                        put("omnis", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "voluptate";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "PRIVILEGED";
                                version = "perferendis";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "doloremque";
                                        httpsProxy = "reprehenderit";
                                        policyDir = "ut";
                                        secretType = "maiores";
                                        syncBranch = "dicta";
                                        syncRepo = "corporis";
                                        syncRev = "dolore";
                                        syncWaitSecs = "iusto";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "dicta";
                                        policyDir = "harum";
                                        secretType = "enim";
                                        syncRepo = "accusamus";
                                        syncWaitSecs = "commodi";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "repudiandae";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "quae";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("quidem"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add("PROMETHEUS"),
                                            add("CLOUD_MONITORING"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "praesentium";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("voluptates", "quasi");
                                put("repudiandae", "sint");
                                put("veritatis", "itaque");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "enim";
                                            clientSecret = "consequatur";
                                            kubectlRedirectUri = "est";
                                            tenant = "quibusdam";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "explicabo";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "deserunt";
                                            clientId = "distinctio";
                                            clientSecret = "quibusdam";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "labore";
                                            groupPrefix = "modi";
                                            groupsClaim = "qui";
                                            issuerUri = "aliquid";
                                            kubectlRedirectUri = "cupiditate";
                                            scopes = "quos";
                                            userClaim = "perferendis";
                                            userPrefix = "magni";
                                        }};
                                        proxy = "assumenda";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "ipsam";
                                            clientSecret = "alias";
                                            kubectlRedirectUri = "fugit";
                                            tenant = "dolorum";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "excepturi";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "tempora";
                                            clientId = "facilis";
                                            clientSecret = "tempore";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "labore";
                                            groupPrefix = "delectus";
                                            groupsClaim = "eum";
                                            issuerUri = "non";
                                            kubectlRedirectUri = "eligendi";
                                            scopes = "sint";
                                            userClaim = "aliquid";
                                            userPrefix = "provident";
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
                                    auditIntervalSeconds = "debitis";
                                    constraintViolationLimit = "a";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("in", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "in";
                                                    memory = "illum";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "maiores";
                                                    memory = "rerum";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "magnam";
                                                    key = "cumque";
                                                    operator = "facere";
                                                    value = "ea";
                                                }}),
                                            }};
                                            replicaCount = "aliquid";
                                        }});
                                        put("laborum", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "accusamus";
                                                    memory = "non";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "occaecati";
                                                    memory = "enim";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "delectus";
                                                    key = "quidem";
                                                    operator = "provident";
                                                    value = "nam";
                                                }}),
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
                                    installSpec = "INSTALL_SPEC_ENABLED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add("PROMETHEUS"),
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
                                                management = "INSTALLED";
                                            }});
                                            put("odit", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("quasi"),
                                                    add("iure"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                            put("debitis", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("maxime"),
                                                    add("deleniti"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                            put("in", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("architecto"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                        }};
                                        templateLibrary = new PolicyControllerTemplateLibraryConfig() {{
                                            included = false;
                                            installation = "NOT_INSTALLED";
                                        }};
                                    }};
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                        installation = "ALL";
                                    }};
                                }};
                                version = "nihil";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = "ENABLED";
                            }};
                        }});
                        put("quibusdam", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "sed";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "PRIVILEGED";
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
                                            add("PROMETHEUS"),
                                            add("PROMETHEUS"),
                                            add("PROMETHEUS"),
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
                                        name = "cumque";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "corporis";
                                            clientId = "hic";
                                            clientSecret = "libero";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "nobis";
                                            groupPrefix = "dolores";
                                            groupsClaim = "quis";
                                            issuerUri = "totam";
                                            kubectlRedirectUri = "dignissimos";
                                            scopes = "eaque";
                                            userClaim = "quis";
                                            userPrefix = "nesciunt";
                                        }};
                                        proxy = "eos";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "perferendis";
                                            clientSecret = "dolores";
                                            kubectlRedirectUri = "minus";
                                            tenant = "quam";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "dolor";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "vero";
                                            clientId = "nostrum";
                                            clientSecret = "hic";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "recusandae";
                                            groupPrefix = "omnis";
                                            groupsClaim = "facilis";
                                            issuerUri = "perspiciatis";
                                            kubectlRedirectUri = "voluptatem";
                                            scopes = "porro";
                                            userClaim = "consequuntur";
                                            userPrefix = "blanditiis";
                                        }};
                                        proxy = "error";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "eaque";
                                            clientSecret = "occaecati";
                                            kubectlRedirectUri = "rerum";
                                            tenant = "adipisci";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "asperiores";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "earum";
                                            clientId = "modi";
                                            clientSecret = "iste";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "dolorum";
                                            groupPrefix = "deleniti";
                                            groupsClaim = "pariatur";
                                            issuerUri = "provident";
                                            kubectlRedirectUri = "nobis";
                                            scopes = "libero";
                                            userClaim = "delectus";
                                            userPrefix = "quaerat";
                                        }};
                                        proxy = "quos";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "aliquid";
                                            clientSecret = "dolorem";
                                            kubectlRedirectUri = "dolorem";
                                            tenant = "dolor";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "qui";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "ipsum";
                                            clientId = "hic";
                                            clientSecret = "excepturi";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "cum";
                                            groupPrefix = "voluptate";
                                            groupsClaim = "dignissimos";
                                            issuerUri = "reiciendis";
                                            kubectlRedirectUri = "amet";
                                            scopes = "dolorum";
                                            userClaim = "numquam";
                                            userPrefix = "veritatis";
                                        }};
                                        proxy = "ipsa";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED";
                                defaultChannel = "RAPID";
                                management = "MANAGEMENT_AUTOMATIC";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "quaerat";
                                    constraintViolationLimit = "accusamus";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("voluptatibus", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "voluptas";
                                                    memory = "natus";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "eos";
                                                    memory = "atque";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "fugiat";
                                                    key = "ab";
                                                    operator = "soluta";
                                                    value = "dolorum";
                                                }}),
                                            }};
                                            replicaCount = "iusto";
                                        }});
                                        put("voluptate", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "dolorum";
                                                    memory = "deleniti";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "omnis";
                                                    memory = "necessitatibus";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "asperiores";
                                                    key = "nihil";
                                                    operator = "ipsum";
                                                    value = "voluptate";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "id";
                                                    key = "saepe";
                                                    operator = "eius";
                                                    value = "aspernatur";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "perferendis";
                                                    key = "amet";
                                                    operator = "optio";
                                                    value = "accusamus";
                                                }}),
                                            }};
                                            replicaCount = "ad";
                                        }});
                                        put("saepe", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "suscipit";
                                                    memory = "deserunt";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "provident";
                                                    memory = "minima";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "totam";
                                                    key = "similique";
                                                    operator = "alias";
                                                    value = "at";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "quaerat";
                                                    key = "tempora";
                                                    operator = "vel";
                                                    value = "quod";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "officiis";
                                                    key = "qui";
                                                    operator = "dolorum";
                                                    value = "a";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "esse";
                                                    key = "harum";
                                                    operator = "iusto";
                                                    value = "ipsum";
                                                }}),
                                            }};
                                            replicaCount = "quisquam";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("amet"),
                                        add("tempore"),
                                        add("accusamus"),
                                        add("numquam"),
                                    }};
                                    installSpec = "INSTALL_SPEC_NOT_INSTALLED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add("CLOUD_MONITORING"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("nihil", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("expedita"),
                                                }};
                                                management = "MANAGEMENT_UNSPECIFIED";
                                            }});
                                            put("sed", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("libero"),
                                                    add("voluptas"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                            put("quam", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("incidunt"),
                                                }};
                                                management = "MANAGEMENT_UNSPECIFIED";
                                            }});
                                        }};
                                        templateLibrary = new PolicyControllerTemplateLibraryConfig() {{
                                            included = false;
                                            installation = "NOT_INSTALLED";
                                        }};
                                    }};
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                        installation = "ALL";
                                    }};
                                }};
                                version = "pariatur";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = "ENABLED";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = "STATE_UNSPECIFIED";
                    }};
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("totam", new java.util.HashMap<String, Object>() {{
                            put("aspernatur", "dolores");
                            put("distinctio", "facilis");
                        }});
                        put("aliquid", new java.util.HashMap<String, Object>() {{
                            put("molestias", "temporibus");
                            put("qui", "neque");
                        }});
                        put("fugit", new java.util.HashMap<String, Object>() {{
                            put("odio", "sunt");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "ullam";
                            }};
                        }};
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("hic", "voluptatem");
                            put("cumque", "soluta");
                            put("nobis", "et");
                        }};
                        cloudauditlogging = new CloudAuditLoggingFeatureSpec() {{
                            allowlistedServiceAccounts = new String[]{{
                                add("ipsum"),
                                add("veritatis"),
                                add("nobis"),
                                add("quos"),
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("cupiditate", "aperiam");
                            put("delectus", "dolorem");
                            put("dolore", "labore");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = "BILLING_UNSPECIFIED";
                            configMembership = "dolorum";
                        }};
                        workloadcertificate = new FeatureSpec() {{
                            defaultConfig = new MembershipSpec() {{
                                certificateManagement = "CERTIFICATE_MANAGEMENT_UNSPECIFIED";
                            }};
                            provisionGoogleCa = "GOOGLE_CA_PROVISIONING_UNSPECIFIED";
                        }};
                    }};
                    state = new CommonFeatureStateInput() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "CODE_UNSPECIFIED";
                                description = "quas";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("consequatur", "est");
                            put("repellendus", "porro");
                            put("doloribus", "ut");
                            put("facilis", "cupiditate");
                        }};
                        state = new FeatureState() {{
                            code = "CODE_UNSPECIFIED";
                            description = "quae";
                            updateTime = "laudantium";
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