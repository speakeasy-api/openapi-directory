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
                    parent = "sit";
                }};
                queryParams = new GkehubProjectsLocationsFeaturesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    featureId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    requestId = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
                request = new FeatureInput() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("et", "ut");
                    }};
                    membershipSpecs = new java.util.HashMap<String, openapisdk.models.shared.MembershipFeatureSpecInput>() {{
                        put("et", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = true;
                                version = "vitae";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "PRIVILEGED";
                                version = "dolores";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = true;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "odio";
                                        httpsProxy = "dolore";
                                        policyDir = "id";
                                        secretType = "aspernatur";
                                        syncBranch = "accusantium";
                                        syncRepo = "totam";
                                        syncRev = "commodi";
                                        syncWaitSecs = "quis";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "est";
                                        policyDir = "aut";
                                        secretType = "odit";
                                        syncRepo = "non";
                                        syncWaitSecs = "voluptas";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "aut";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = true;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "autem";
                                    enabled = true;
                                    exemptableNamespaces = new String[]() {{
                                        add("odio"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("PROMETHEUS"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = true;
                                    templateLibraryInstalled = true;
                                }};
                                version = "ut";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("reprehenderit", "tempore");
                                put("maiores", "incidunt");
                                put("dolor", "beatae");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "in";
                                            clientSecret = "et";
                                            kubectlRedirectUri = "omnis";
                                            tenant = "ipsum";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "dolores";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "placeat";
                                            clientId = "vel";
                                            clientSecret = "rerum";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = true;
                                            extraParams = "quam";
                                            groupPrefix = "reprehenderit";
                                            groupsClaim = "qui";
                                            issuerUri = "qui";
                                            kubectlRedirectUri = "unde";
                                            scopes = "in";
                                            userClaim = "autem";
                                            userPrefix = "qui";
                                        }};
                                        proxy = "ut";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "itaque";
                                            clientSecret = "ab";
                                            kubectlRedirectUri = "neque";
                                            tenant = "ullam";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "accusantium";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "esse";
                                            clientId = "architecto";
                                            clientSecret = "quam";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "soluta";
                                            groupPrefix = "sunt";
                                            groupsClaim = "voluptates";
                                            issuerUri = "magni";
                                            kubectlRedirectUri = "et";
                                            scopes = "optio";
                                            userClaim = "qui";
                                            userPrefix = "earum";
                                        }};
                                        proxy = "illo";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                defaultChannel = "REGULAR";
                                management = "MANAGEMENT_MANUAL";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "dolor";
                                    exemptableNamespaces = new String[]() {{
                                        add("error"),
                                        add("reprehenderit"),
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
                                version = "aut";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = "ENABLED";
                            }};
                        }});
                        put("consequuntur", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = true;
                                version = "ipsa";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "NON_PRIVILEGED";
                                version = "doloremque";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = true;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = true;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "quisquam";
                                        httpsProxy = "explicabo";
                                        policyDir = "ea";
                                        secretType = "maxime";
                                        syncBranch = "eum";
                                        syncRepo = "perferendis";
                                        syncRev = "et";
                                        syncWaitSecs = "rerum";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "reiciendis";
                                        policyDir = "quis";
                                        secretType = "cumque";
                                        syncRepo = "minima";
                                        syncWaitSecs = "necessitatibus";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "quis";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = true;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "impedit";
                                    enabled = true;
                                    exemptableNamespaces = new String[]() {{
                                        add("vel"),
                                        add("qui"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("CLOUD_MONITORING"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "sit";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("vel", "vel");
                                put("placeat", "qui");
                                put("nisi", "quis");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "porro";
                                            clientSecret = "rerum";
                                            kubectlRedirectUri = "et";
                                            tenant = "accusamus";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "laborum";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "rerum";
                                            clientId = "ut";
                                            clientSecret = "laborum";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "minus";
                                            groupPrefix = "soluta";
                                            groupsClaim = "aperiam";
                                            issuerUri = "consequuntur";
                                            kubectlRedirectUri = "excepturi";
                                            scopes = "mollitia";
                                            userClaim = "inventore";
                                            userPrefix = "delectus";
                                        }};
                                        proxy = "ipsa";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "animi";
                                            clientSecret = "animi";
                                            kubectlRedirectUri = "ut";
                                            tenant = "aliquam";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "sed";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "sed";
                                            clientId = "et";
                                            clientSecret = "consequuntur";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = true;
                                            extraParams = "provident";
                                            groupPrefix = "molestiae";
                                            groupsClaim = "pariatur";
                                            issuerUri = "quasi";
                                            kubectlRedirectUri = "corrupti";
                                            scopes = "enim";
                                            userClaim = "qui";
                                            userPrefix = "sit";
                                        }};
                                        proxy = "possimus";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                defaultChannel = "REGULAR";
                                management = "MANAGEMENT_MANUAL";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "quia";
                                    exemptableNamespaces = new String[]() {{
                                        add("est"),
                                        add("occaecati"),
                                    }};
                                    installSpec = "INSTALL_SPEC_NOT_INSTALLED";
                                    logDeniesEnabled = true;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new openapisdk.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]() {{
                                            add("CLOUD_MONITORING"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = true;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = true;
                                    }};
                                }};
                                version = "in";
                            }};
                            workloadcertificate = new MembershipSpec() {{
                                certificateManagement = "ENABLED";
                            }};
                        }});
                        put("voluptatem", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = true;
                                enableStackdriverOnApplications = true;
                                version = "saepe";
                            }};
                            cloudbuild = new CloudBuildMembershipSpec() {{
                                securityPolicy = "NON_PRIVILEGED";
                                version = "earum";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = true;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = true;
                                    enabled = true;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "et";
                                        httpsProxy = "est";
                                        policyDir = "ipsum";
                                        secretType = "quam";
                                        syncBranch = "voluptas";
                                        syncRepo = "nihil";
                                        syncRev = "dolores";
                                        syncWaitSecs = "suscipit";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "impedit";
                                        policyDir = "non";
                                        secretType = "magnam";
                                        syncRepo = "ut";
                                        syncWaitSecs = "possimus";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "qui";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "enim";
                                    enabled = true;
                                    exemptableNamespaces = new String[]() {{
                                        add("delectus"),
                                    }};
                                    logDeniesEnabled = true;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = true;
                                    templateLibraryInstalled = false;
                                }};
                                version = "voluptas";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("a", "qui");
                                put("excepturi", "autem");
                                put("corporis", "dicta");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "doloremque";
                                            clientSecret = "quae";
                                            kubectlRedirectUri = "nisi";
                                            tenant = "recusandae";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "minus";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "et";
                                            clientId = "rerum";
                                            clientSecret = "ut";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = false;
                                            extraParams = "et";
                                            groupPrefix = "reiciendis";
                                            groupsClaim = "aspernatur";
                                            issuerUri = "praesentium";
                                            kubectlRedirectUri = "porro";
                                            scopes = "nihil";
                                            userClaim = "adipisci";
                                            userPrefix = "consequatur";
                                        }};
                                        proxy = "illum";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "accusantium";
                                            clientSecret = "atque";
                                            kubectlRedirectUri = "amet";
                                            tenant = "nisi";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "est";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "quo";
                                            clientId = "vero";
                                            clientSecret = "alias";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = true;
                                            extraParams = "eius";
                                            groupPrefix = "repellat";
                                            groupsClaim = "beatae";
                                            issuerUri = "omnis";
                                            kubectlRedirectUri = "totam";
                                            scopes = "aut";
                                            userClaim = "et";
                                            userPrefix = "magni";
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
                                    auditIntervalSeconds = "voluptas";
                                    exemptableNamespaces = new String[]() {{
                                        add("veniam"),
                                        add("architecto"),
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
                                    mutationEnabled = true;
                                    referentialRulesEnabled = true;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = true;
                                    }};
                                }};
                                version = "quo";
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
                        put("commodi", new java.util.HashMap<String, Object>() {{
                            put("facere", "in");
                            put("et", "odit");
                        }});
                        put("est", new java.util.HashMap<String, Object>() {{
                            put("ipsum", "aut");
                            put("perspiciatis", "et");
                            put("vero", "voluptatem");
                        }});
                        put("ex", new java.util.HashMap<String, Object>() {{
                            put("vero", "distinctio");
                            put("cumque", "ea");
                            put("non", "non");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = true;
                                enableStackdriverOnApplications = true;
                                version = "quae";
                            }};
                        }};
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("magni", "minus");
                        }};
                        cloudauditlogging = new CloudAuditLoggingFeatureSpec() {{
                            allowlistedServiceAccounts = new String[]() {{
                                add("aut"),
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("iusto", "quia");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = "PAY_AS_YOU_GO";
                            configMembership = "debitis";
                        }};
                        workloadcertificate = new FeatureSpec() {{
                            defaultConfig = new MembershipSpec() {{
                                certificateManagement = "CERTIFICATE_MANAGEMENT_UNSPECIFIED";
                            }};
                            provisionGoogleCa = "DISABLED";
                        }};
                    }};
                    state = new CommonFeatureState1() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "OK";
                                description = "ut";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("nihil", "laborum");
                            put("recusandae", "nihil");
                            put("exercitationem", "iste");
                        }};
                        state = new FeatureState() {{
                            code = "ERROR";
                            description = "id";
                            updateTime = "autem";
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