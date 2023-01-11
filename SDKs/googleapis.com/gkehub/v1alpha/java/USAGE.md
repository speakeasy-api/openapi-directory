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
                    parent = "provident";
                }};
                queryParams = new GkehubProjectsLocationsFeaturesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "vero";
                    alt = "media";
                    callback = "sapiente";
                    featureId = "et";
                    fields = "aut";
                    key = "rerum";
                    oauthToken = "sunt";
                    prettyPrint = true;
                    quotaUser = "incidunt";
                    requestId = "provident";
                    uploadType = "voluptas";
                    uploadProtocol = "assumenda";
                }};
                request = new FeatureInput() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("nemo", "ut");
                    }};
                    membershipSpecs = new java.util.HashMap<String, openapisdk.models.shared.MembershipFeatureSpecInput>() {{
                        put("voluptatem", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = true;
                                enableStackdriverOnApplications = false;
                                version = "mollitia";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "SECURITY_POLICY_UNSPECIFIED";
                                version = "est";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "quo";
                                        httpsProxy = "voluptatem";
                                        policyDir = "totam";
                                        secretType = "assumenda";
                                        syncBranch = "temporibus";
                                        syncRepo = "enim";
                                        syncRev = "ipsam";
                                        syncWaitSecs = "id";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "autem";
                                        policyDir = "vitae";
                                        secretType = "dolore";
                                        syncRepo = "quas";
                                        syncWaitSecs = "et";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "deserunt";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "architecto";
                                    enabled = true;
                                    exemptableNamespaces = new String[]() {{
                                        add("debitis"),
                                        add("sunt"),
                                        add("ipsum"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("PROMETHEUS"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = true;
                                    templateLibraryInstalled = false;
                                }};
                                version = "aut";
                            }};
                            fleetInherited = true;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("beatae", "tenetur");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "voluptatum";
                                            clientSecret = "aut";
                                            kubectlRedirectUri = "possimus";
                                            tenant = "maxime";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "possimus";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "ea";
                                            clientId = "temporibus";
                                            clientSecret = "perspiciatis";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = true;
                                            extraParams = "natus";
                                            groupPrefix = "fugit";
                                            groupsClaim = "qui";
                                            issuerUri = "aut";
                                            kubectlRedirectUri = "et";
                                            scopes = "ullam";
                                            userClaim = "eveniet";
                                            userPrefix = "porro";
                                        }};
                                        proxy = "sit";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "modi";
                                            clientSecret = "est";
                                            kubectlRedirectUri = "placeat";
                                            tenant = "cum";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "qui";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "at";
                                            clientId = "ex";
                                            clientSecret = "fugiat";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = false;
                                            extraParams = "exercitationem";
                                            groupPrefix = "repudiandae";
                                            groupsClaim = "possimus";
                                            issuerUri = "rerum";
                                            kubectlRedirectUri = "iusto";
                                            scopes = "architecto";
                                            userClaim = "eaque";
                                            userPrefix = "debitis";
                                        }};
                                        proxy = "vel";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "ullam";
                                            clientSecret = "ut";
                                            kubectlRedirectUri = "numquam";
                                            tenant = "saepe";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "dolores";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "culpa";
                                            clientId = "ullam";
                                            clientSecret = "corrupti";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = false;
                                            extraParams = "quasi";
                                            groupPrefix = "nesciunt";
                                            groupsClaim = "ex";
                                            issuerUri = "odit";
                                            kubectlRedirectUri = "earum";
                                            scopes = "ipsam";
                                            userClaim = "minima";
                                            userPrefix = "nostrum";
                                        }};
                                        proxy = "voluptatem";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                defaultChannel = "RAPID";
                                management = "MANAGEMENT_UNSPECIFIED";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "soluta";
                                    exemptableNamespaces = new String[]() {{
                                        add("dolores"),
                                        add("consequatur"),
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
                                    mutationEnabled = false;
                                    referentialRulesEnabled = true;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = true;
                                    }};
                                }};
                                version = "accusamus";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = "ENABLED";
                            }};
                        }});
                        put("sint", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "a";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "NON_PRIVILEGED";
                                version = "velit";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = true;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = true;
                                    enabled = true;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "illo";
                                        httpsProxy = "sit";
                                        policyDir = "enim";
                                        secretType = "libero";
                                        syncBranch = "dolor";
                                        syncRepo = "commodi";
                                        syncRev = "suscipit";
                                        syncWaitSecs = "amet";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "aut";
                                        policyDir = "ea";
                                        secretType = "earum";
                                        syncRepo = "error";
                                        syncWaitSecs = "veniam";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "modi";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = true;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "nam";
                                    enabled = false;
                                    exemptableNamespaces = new String[]() {{
                                        add("est"),
                                    }};
                                    logDeniesEnabled = true;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = true;
                                    templateLibraryInstalled = false;
                                }};
                                version = "sint";
                            }};
                            fleetInherited = true;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("est", "aut");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "dignissimos";
                                            clientSecret = "et";
                                            kubectlRedirectUri = "sed";
                                            tenant = "omnis";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "voluptas";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "esse";
                                            clientId = "soluta";
                                            clientSecret = "et";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = true;
                                            extraParams = "debitis";
                                            groupPrefix = "est";
                                            groupsClaim = "dolorum";
                                            issuerUri = "aperiam";
                                            kubectlRedirectUri = "velit";
                                            scopes = "magni";
                                            userClaim = "facilis";
                                            userPrefix = "dolorem";
                                        }};
                                        proxy = "eligendi";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "alias";
                                            clientSecret = "non";
                                            kubectlRedirectUri = "itaque";
                                            tenant = "iusto";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "eligendi";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "in";
                                            clientId = "qui";
                                            clientSecret = "repellendus";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "necessitatibus";
                                            groupPrefix = "sequi";
                                            groupsClaim = "et";
                                            issuerUri = "pariatur";
                                            kubectlRedirectUri = "qui";
                                            scopes = "aut";
                                            userClaim = "est";
                                            userPrefix = "nulla";
                                        }};
                                        proxy = "similique";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "MANUAL";
                                defaultChannel = "CHANNEL_UNSPECIFIED";
                                management = "MANAGEMENT_MANUAL";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "repellendus";
                                    exemptableNamespaces = new String[]() {{
                                        add("necessitatibus"),
                                        add("sed"),
                                    }};
                                    installSpec = "INSTALL_SPEC_NOT_INSTALLED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new openapisdk.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]() {{
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = true;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                    }};
                                }};
                                version = "expedita";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = "CERTIFICATE_MANAGEMENT_UNSPECIFIED";
                            }};
                        }});
                        put("voluptatem", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = true;
                                version = "nesciunt";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "PRIVILEGED";
                                version = "ducimus";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "possimus";
                                        httpsProxy = "qui";
                                        policyDir = "dolorem";
                                        secretType = "ea";
                                        syncBranch = "rerum";
                                        syncRepo = "blanditiis";
                                        syncRev = "libero";
                                        syncWaitSecs = "aspernatur";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "illo";
                                        policyDir = "et";
                                        secretType = "qui";
                                        syncRepo = "consequatur";
                                        syncWaitSecs = "repudiandae";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "vitae";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = true;
                                    enablePodTreeLabels = true;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "similique";
                                    enabled = false;
                                    exemptableNamespaces = new String[]() {{
                                        add("voluptate"),
                                        add("dolorem"),
                                        add("nihil"),
                                    }};
                                    logDeniesEnabled = true;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = true;
                                    templateLibraryInstalled = false;
                                }};
                                version = "sed";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("accusamus", "sunt");
                                put("cupiditate", "sit");
                                put("quam", "voluptas");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "in";
                                            clientSecret = "qui";
                                            kubectlRedirectUri = "expedita";
                                            tenant = "dicta";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "voluptatem";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "et";
                                            clientId = "quibusdam";
                                            clientSecret = "blanditiis";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = true;
                                            extraParams = "voluptate";
                                            groupPrefix = "minima";
                                            groupsClaim = "libero";
                                            issuerUri = "et";
                                            kubectlRedirectUri = "ratione";
                                            scopes = "veniam";
                                            userClaim = "dolor";
                                            userPrefix = "minima";
                                        }};
                                        proxy = "velit";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "corporis";
                                            clientSecret = "illum";
                                            kubectlRedirectUri = "quia";
                                            tenant = "tempore";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "qui";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "laborum";
                                            clientId = "et";
                                            clientSecret = "ex";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "dolores";
                                            groupPrefix = "molestiae";
                                            groupsClaim = "aperiam";
                                            issuerUri = "maxime";
                                            kubectlRedirectUri = "amet";
                                            scopes = "sit";
                                            userClaim = "quia";
                                            userPrefix = "deserunt";
                                        }};
                                        proxy = "cupiditate";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED";
                                defaultChannel = "RAPID";
                                management = "MANAGEMENT_MANUAL";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "dolor";
                                    exemptableNamespaces = new String[]() {{
                                        add("excepturi"),
                                        add("autem"),
                                    }};
                                    installSpec = "INSTALL_SPEC_SUSPENDED";
                                    logDeniesEnabled = true;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new openapisdk.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]() {{
                                            add("CLOUD_MONITORING"),
                                            add("PROMETHEUS"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = true;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                    }};
                                }};
                                version = "nihil";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = "CERTIFICATE_MANAGEMENT_UNSPECIFIED";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = "DISABLING";
                    }};
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("libero", new java.util.HashMap<String, Object>() {{
                            put("qui", "quae");
                            put("iste", "animi");
                            put("nulla", "pariatur");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = true;
                                enableStackdriverOnApplications = true;
                                version = "eligendi";
                            }};
                        }};
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("unde", "et");
                        }};
                        cloudauditlogging = new CloudAuditLoggingFeatureSpec() {{
                            allowlistedServiceAccounts = new String[]() {{
                                add("neque"),
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("tempora", "praesentium");
                            put("itaque", "sed");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = "BILLING_UNSPECIFIED";
                            configMembership = "dolores";
                        }};
                        workloadcertificate = new FeatureSpec() {{
                            defaultConfig = new MembershipSpec() {{
                                certificateManagement = "ENABLED";
                            }};
                            provisionGoogleCa = "DISABLED";
                        }};
                    }};
                    state = new CommonFeatureState1() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "CODE_UNSPECIFIED";
                                description = "et";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("placeat", "atque");
                            put("autem", "suscipit");
                            put("quis", "esse");
                        }};
                        state = new FeatureState() {{
                            code = "WARNING";
                            description = "saepe";
                            updateTime = "voluptatum";
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