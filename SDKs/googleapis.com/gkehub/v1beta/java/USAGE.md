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
                            cloudbuild = new MembershipSpec() {{
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
                                management = "MANAGEMENT_AUTOMATIC";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "consequatur";
                                    exemptableNamespaces = new String[]() {{
                                        add("commodi"),
                                        add("error"),
                                    }};
                                    installSpec = "INSTALL_SPEC_SUSPENDED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new openapisdk.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]() {{
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = true;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                    }};
                                }};
                                version = "soluta";
                            }};
                        }});
                        put("aut", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = true;
                                enableStackdriverOnApplications = true;
                                version = "laudantium";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = "SECURITY_POLICY_UNSPECIFIED";
                                version = "ipsa";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = false;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = true;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "atque";
                                        httpsProxy = "ratione";
                                        policyDir = "quisquam";
                                        secretType = "explicabo";
                                        syncBranch = "ea";
                                        syncRepo = "maxime";
                                        syncRev = "eum";
                                        syncWaitSecs = "perferendis";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "et";
                                        policyDir = "rerum";
                                        secretType = "reiciendis";
                                        syncRepo = "quis";
                                        syncWaitSecs = "cumque";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "necessitatibus";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = true;
                                    enablePodTreeLabels = true;
                                    enabled = true;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "labore";
                                    enabled = false;
                                    exemptableNamespaces = new String[]() {{
                                        add("ad"),
                                        add("expedita"),
                                    }};
                                    logDeniesEnabled = true;
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
                                version = "sunt";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("quis", "vel");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "placeat";
                                            clientSecret = "qui";
                                            kubectlRedirectUri = "nisi";
                                            tenant = "quis";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "porro";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "rerum";
                                            clientId = "et";
                                            clientSecret = "accusamus";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = false;
                                            extraParams = "rerum";
                                            groupPrefix = "ut";
                                            groupsClaim = "laborum";
                                            issuerUri = "fugit";
                                            kubectlRedirectUri = "quis";
                                            scopes = "minus";
                                            userClaim = "soluta";
                                            userPrefix = "aperiam";
                                        }};
                                        proxy = "consequuntur";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "excepturi";
                                            clientSecret = "mollitia";
                                            kubectlRedirectUri = "inventore";
                                            tenant = "delectus";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "animi";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "animi";
                                            clientId = "ut";
                                            clientSecret = "aliquam";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "sed";
                                            groupPrefix = "et";
                                            groupsClaim = "consequuntur";
                                            issuerUri = "non";
                                            kubectlRedirectUri = "cupiditate";
                                            scopes = "provident";
                                            userClaim = "molestiae";
                                            userPrefix = "pariatur";
                                        }};
                                        proxy = "quasi";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "MANUAL";
                                management = "MANAGEMENT_AUTOMATIC";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "qui";
                                    exemptableNamespaces = new String[]() {{
                                        add("possimus"),
                                        add("modi"),
                                    }};
                                    installSpec = "INSTALL_SPEC_ENABLED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new openapisdk.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]() {{
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                    }};
                                }};
                                version = "voluptatem";
                            }};
                        }});
                        put("quia", new MembershipFeatureSpecInput() {{
                            anthosobservability = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = false;
                                enableStackdriverOnApplications = false;
                                version = "quae";
                            }};
                            cloudbuild = new MembershipSpec() {{
                                securityPolicy = "NON_PRIVILEGED";
                                version = "ut";
                            }};
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                binauthz = new ConfigManagementBinauthzConfig() {{
                                    enabled = true;
                                }};
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = true;
                                    enabled = true;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "voluptatem";
                                        httpsProxy = "dolorum";
                                        policyDir = "doloribus";
                                        secretType = "saepe";
                                        syncBranch = "sunt";
                                        syncRepo = "earum";
                                        syncRev = "et";
                                        syncWaitSecs = "ut";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "asperiores";
                                        policyDir = "et";
                                        secretType = "est";
                                        syncRepo = "ipsum";
                                        syncWaitSecs = "quam";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "nihil";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = true;
                                    enablePodTreeLabels = false;
                                    enabled = true;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "non";
                                    enabled = false;
                                    exemptableNamespaces = new String[]() {{
                                        add("possimus"),
                                        add("illo"),
                                        add("qui"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("PROMETHEUS"),
                                            add("PROMETHEUS"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = true;
                                    templateLibraryInstalled = true;
                                }};
                                version = "dolore";
                            }};
                            fleetInherited = true;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("officia", "modi");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "voluptas";
                                            clientSecret = "amet";
                                            kubectlRedirectUri = "et";
                                            tenant = "a";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "excepturi";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "autem";
                                            clientId = "corporis";
                                            clientSecret = "dicta";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = true;
                                            extraParams = "quae";
                                            groupPrefix = "nisi";
                                            groupsClaim = "recusandae";
                                            issuerUri = "qui";
                                            kubectlRedirectUri = "minus";
                                            scopes = "et";
                                            userClaim = "rerum";
                                            userPrefix = "ut";
                                        }};
                                        proxy = "rem";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "eos";
                                            clientSecret = "et";
                                            kubectlRedirectUri = "reiciendis";
                                            tenant = "aspernatur";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "porro";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "nihil";
                                            clientId = "adipisci";
                                            clientSecret = "consequatur";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "atque";
                                            groupPrefix = "amet";
                                            groupsClaim = "nisi";
                                            issuerUri = "quidem";
                                            kubectlRedirectUri = "est";
                                            scopes = "quo";
                                            userClaim = "vero";
                                            userPrefix = "alias";
                                        }};
                                        proxy = "totam";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED";
                                management = "MANAGEMENT_AUTOMATIC";
                            }};
                            policycontroller = new PolicyControllerMembershipSpec() {{
                                policyControllerHubConfig = new PolicyControllerHubConfig() {{
                                    auditIntervalSeconds = "repellat";
                                    exemptableNamespaces = new String[]() {{
                                        add("omnis"),
                                        add("totam"),
                                        add("aut"),
                                    }};
                                    installSpec = "INSTALL_SPEC_UNSPECIFIED";
                                    logDeniesEnabled = false;
                                    monitoring = new PolicyControllerMonitoringConfig() {{
                                        backends = new openapisdk.models.shared.PolicyControllerMonitoringConfigBackendsEnum[]() {{
                                            add("PROMETHEUS"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryConfig = new PolicyControllerTemplateLibraryConfig() {{
                                        included = false;
                                    }};
                                }};
                                version = "veniam";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = "ENABLING";
                    }};
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("rerum", new java.util.HashMap<String, Object>() {{
                            put("et", "saepe");
                            put("commodi", "in");
                            put("quibusdam", "asperiores");
                        }});
                        put("quo", new java.util.HashMap<String, Object>() {{
                            put("soluta", "tempora");
                        }});
                        put("commodi", new java.util.HashMap<String, Object>() {{
                            put("facere", "in");
                            put("et", "odit");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        anthosobservability = new AnthosObservabilityFeatureSpec() {{
                            defaultMembershipSpec = new AnthosObservabilityMembershipSpec() {{
                                doNotOptimizeMetrics = true;
                                enableStackdriverOnApplications = true;
                                version = "ipsum";
                            }};
                        }};
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("perspiciatis", "et");
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("voluptatem", "ex");
                            put("magni", "vero");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            billing = "BILLING_UNSPECIFIED";
                            configMembership = "cumque";
                        }};
                    }};
                    state = new CommonFeatureState() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "UNKNOWN";
                                description = "non";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("nam", "beatae");
                            put("quae", "qui");
                            put("magni", "minus");
                        }};
                        state = new FeatureState() {{
                            code = "CODE_UNSPECIFIED";
                            description = "aut";
                            updateTime = "neque";
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