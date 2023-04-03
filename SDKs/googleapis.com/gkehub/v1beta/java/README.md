# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateSecurity;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
                            cloudbuild = new MembershipSpec() {{
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
                                management = "MANAGEMENT_MANUAL";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "aut";
                                    constraintViolationLimit = "quasi";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("temporibus", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "laborum";
                                                    memory = "quasi";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "reiciendis";
                                                    memory = "voluptatibus";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "nihil";
                                                    key = "praesentium";
                                                    operator = "voluptatibus";
                                                    value = "ipsa";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "omnis";
                                                    key = "voluptate";
                                                    operator = "cum";
                                                    value = "perferendis";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "doloremque";
                                                    key = "reprehenderit";
                                                    operator = "ut";
                                                    value = "maiores";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "dicta";
                                                    key = "corporis";
                                                    operator = "dolore";
                                                    value = "iusto";
                                                }}),
                                            }};
                                            replicaCount = "dicta";
                                        }});
                                        put("harum", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "enim";
                                                    memory = "accusamus";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "commodi";
                                                    memory = "repudiandae";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "ipsum";
                                                    key = "quidem";
                                                    operator = "molestias";
                                                    value = "excepturi";
                                                }}),
                                            }};
                                            replicaCount = "pariatur";
                                        }});
                                        put("modi", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "praesentium";
                                                    memory = "rem";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "voluptates";
                                                    memory = "quasi";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "sint";
                                                    key = "veritatis";
                                                    operator = "itaque";
                                                    value = "incidunt";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "enim";
                                                    key = "consequatur";
                                                    operator = "est";
                                                    value = "quibusdam";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "explicabo";
                                                    key = "deserunt";
                                                    operator = "distinctio";
                                                    value = "quibusdam";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "labore";
                                                    key = "modi";
                                                    operator = "qui";
                                                    value = "aliquid";
                                                }}),
                                            }};
                                            replicaCount = "cupiditate";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("perferendis"),
                                        add("magni"),
                                        add("assumenda"),
                                    }};
                                    installSpec = "INSTALL_SPEC_NOT_INSTALLED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("excepturi", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("facilis"),
                                                    add("tempore"),
                                                }};
                                                management = "MANAGEMENT_UNSPECIFIED";
                                            }});
                                            put("delectus", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("non"),
                                                    add("eligendi"),
                                                }};
                                                management = "INSTALLED";
                                            }});
                                            put("aliquid", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("necessitatibus"),
                                                    add("sint"),
                                                    add("officia"),
                                                }};
                                                management = "MANAGEMENT_UNSPECIFIED";
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
                                        installation = "ALL";
                                    }};
                                }};
                                version = "dolorum";
                            }};
                        }});
                        put("in", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "in";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = "PRIVILEGED";
                                version = "maiores";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "rerum";
                                        httpsProxy = "dicta";
                                        policyDir = "magnam";
                                        secretType = "cumque";
                                        syncBranch = "facere";
                                        syncRepo = "ea";
                                        syncRev = "aliquid";
                                        syncWaitSecs = "laborum";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "accusamus";
                                        policyDir = "non";
                                        secretType = "occaecati";
                                        syncRepo = "enim";
                                        syncWaitSecs = "accusamus";
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
                                    auditIntervalSeconds = "quidem";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("nam"),
                                        add("id"),
                                        add("blanditiis"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add("CLOUD_MONITORING"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "nisi";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("natus", "omnis");
                                put("molestiae", "perferendis");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "magnam";
                                            clientSecret = "distinctio";
                                            kubectlRedirectUri = "id";
                                            tenant = "labore";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "labore";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "suscipit";
                                            clientId = "natus";
                                            clientSecret = "nobis";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "eum";
                                            groupPrefix = "vero";
                                            groupsClaim = "aspernatur";
                                            issuerUri = "architecto";
                                            kubectlRedirectUri = "magnam";
                                            scopes = "et";
                                            userClaim = "excepturi";
                                            userPrefix = "ullam";
                                        }};
                                        proxy = "provident";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "quos";
                                            clientSecret = "sint";
                                            kubectlRedirectUri = "accusantium";
                                            tenant = "mollitia";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "reiciendis";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "mollitia";
                                            clientId = "ad";
                                            clientSecret = "eum";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "dolor";
                                            groupPrefix = "necessitatibus";
                                            groupsClaim = "odit";
                                            issuerUri = "nemo";
                                            kubectlRedirectUri = "quasi";
                                            scopes = "iure";
                                            userClaim = "doloribus";
                                            userPrefix = "debitis";
                                        }};
                                        proxy = "eius";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "MANUAL";
                                management = "MANAGEMENT_AUTOMATIC";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "facilis";
                                    constraintViolationLimit = "in";
                                    deploymentConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerPolicyControllerDeploymentConfig>() {{
                                        put("architecto", new PolicyControllerPolicyControllerDeploymentConfig() {{
                                            containerResources = new PolicyControllerResourceRequirements() {{
                                                limits = new PolicyControllerResourceList() {{
                                                    cpu = "repudiandae";
                                                    memory = "ullam";
                                                }};
                                                requests = new PolicyControllerResourceList() {{
                                                    cpu = "expedita";
                                                    memory = "nihil";
                                                }};
                                            }};
                                            podAntiAffinity = false;
                                            podTolerations = new org.openapis.openapi.models.shared.PolicyControllerToleration[]{{
                                                add(new PolicyControllerToleration() {{
                                                    effect = "quibusdam";
                                                    key = "sed";
                                                    operator = "saepe";
                                                    value = "pariatur";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "accusantium";
                                                    key = "consequuntur";
                                                    operator = "praesentium";
                                                    value = "natus";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "magni";
                                                    key = "sunt";
                                                    operator = "quo";
                                                    value = "illum";
                                                }}),
                                                add(new PolicyControllerToleration() {{
                                                    effect = "pariatur";
                                                    key = "maxime";
                                                    operator = "ea";
                                                    value = "excepturi";
                                                }}),
                                            }};
                                            replicaCount = "odit";
                                        }});
                                    }};
                                    exemptableNamespaces = new String[]{{
                                        add("accusantium"),
                                        add("ab"),
                                    }};
                                    installSpec = "INSTALL_SPEC_SUSPENDED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new org.openapis.openapi.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]{{
                                            add("PROMETHEUS"),
                                            add("PROMETHEUS"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    policyContent = new PolicyControllerPolicyContentSpec() {{
                                        bundles = new java.util.HashMap<String, org.openapis.openapi.models.shared.PolicyControllerBundleInstallSpec>() {{
                                            put("eaque", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("nemo"),
                                                    add("voluptatibus"),
                                                    add("perferendis"),
                                                    add("fugiat"),
                                                }};
                                                management = "MANAGEMENT_UNSPECIFIED";
                                            }});
                                            put("aut", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("corporis"),
                                                    add("hic"),
                                                    add("libero"),
                                                    add("nobis"),
                                                }};
                                                management = "MANAGEMENT_UNSPECIFIED";
                                            }});
                                            put("quis", new PolicyControllerBundleInstallSpec() {{
                                                exemptedNamespaces = new String[]{{
                                                    add("dignissimos"),
                                                    add("eaque"),
                                                    add("quis"),
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
                                        installation = "INSTALLATION_UNSPECIFIED";
                                    }};
                                }};
                                version = "dolores";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = "UPDATING";
                    }};
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("dolor", new java.util.HashMap<String, Object>() {{
                            put("nostrum", "hic");
                            put("recusandae", "omnis");
                            put("facilis", "perspiciatis");
                            put("voluptatem", "porro");
                        }});
                        put("consequuntur", new java.util.HashMap<String, Object>() {{
                            put("error", "eaque");
                            put("occaecati", "rerum");
                            put("adipisci", "asperiores");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "earum";
                            }};
                        }};
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("iste", "dolorum");
                            put("deleniti", "pariatur");
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("nobis", "libero");
                            put("delectus", "quaerat");
                            put("quos", "aliquid");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = "BILLING_UNSPECIFIED";
                            configMembership = "dolorem";
                        }};
                    }};
                    state = new CommonFeatureState() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "CODE_UNSPECIFIED";
                                description = "qui";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("hic", "excepturi");
                        }};
                        state = new FeatureState() {{
                            code = "WARNING";
                            description = "voluptate";
                            updateTime = "dignissimos";
                        }};
                    }};
                }};
                accessToken = "reiciendis";
                alt = "json";
                callback = "dolorum";
                featureId = "numquam";
                fields = "veritatis";
                key = "ipsa";
                oauthToken = "ipsa";
                parent = "iure";
                prettyPrint = false;
                quotaUser = "odio";
                requestId = "quaerat";
                uploadType = "accusamus";
                uploadProtocol = "quidem";
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `gkehubProjectsLocationsFeaturesCreate` - Adds a new Feature.
* `gkehubProjectsLocationsFeaturesList` - Lists Features in a given project and location.
* `gkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `gkehubProjectsLocationsMembershipsBindingsCreate` - Creates a MembershipBinding.
* `gkehubProjectsLocationsMembershipsBindingsList` - Lists MembershipBindings.
* `gkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehubProjectsLocationsNamespacesCreate` - Creates a fleet namespace.
* `gkehubProjectsLocationsNamespacesList` - Lists fleet namespaces.
* `gkehubProjectsLocationsNamespacesRbacrolebindingsCreate` - Creates a RBACRoleBinding.
* `gkehubProjectsLocationsNamespacesRbacrolebindingsList` - Lists RBACRoleBinding.
* `gkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `gkehubProjectsLocationsScopesCreate` - Creates a Scope.
* `gkehubProjectsLocationsScopesDelete` - Deletes a Scope.
* `gkehubProjectsLocationsScopesGet` - Returns the details of a Scope.
* `gkehubProjectsLocationsScopesList` - Lists Scopes.
* `gkehubProjectsLocationsScopesPatch` - Updates a scopes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
