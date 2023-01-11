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
                    parent = "qui";
                }};
                queryParams = new GkehubProjectsLocationsFeaturesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "ad";
                    alt = "proto";
                    callback = "voluptatem";
                    featureId = "iure";
                    fields = "quo";
                    key = "mollitia";
                    oauthToken = "totam";
                    prettyPrint = true;
                    quotaUser = "sunt";
                    requestId = "enim";
                    uploadType = "qui";
                    uploadProtocol = "deleniti";
                }};
                request = new FeatureInput() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("est", "ut");
                        put("tenetur", "cumque");
                        put("reprehenderit", "blanditiis");
                    }};
                    membershipSpecs = new java.util.HashMap<String, openapisdk.models.shared.MembershipFeatureSpecInput>() {{
                        put("dolores", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "dolor";
                                        httpsProxy = "quas";
                                        policyDir = "maiores";
                                        secretType = "repudiandae";
                                        syncBranch = "est";
                                        syncRepo = "ut";
                                        syncRev = "voluptatem";
                                        syncWaitSecs = "magni";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "soluta";
                                        policyDir = "illum";
                                        secretType = "recusandae";
                                        syncRepo = "velit";
                                        syncWaitSecs = "vel";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "quo";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = true;
                                    enabled = true;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "ut";
                                    enabled = true;
                                    exemptableNamespaces = new String[]() {{
                                        add("numquam"),
                                        add("est"),
                                        add("consequuntur"),
                                    }};
                                    logDeniesEnabled = true;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("CLOUD_MONITORING"),
                                            add("PROMETHEUS"),
                                            add("CLOUD_MONITORING"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "repudiandae";
                            }};
                            fleetInherited = true;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("ab", "commodi");
                                put("deleniti", "saepe");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "vitae";
                                            clientSecret = "non";
                                            kubectlRedirectUri = "quae";
                                            tenant = "sunt";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "ratione";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "delectus";
                                            clientId = "dolores";
                                            clientSecret = "eligendi";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "reprehenderit";
                                            groupPrefix = "quod";
                                            groupsClaim = "doloribus";
                                            issuerUri = "nihil";
                                            kubectlRedirectUri = "commodi";
                                            scopes = "consequatur";
                                            userClaim = "voluptatem";
                                            userPrefix = "reprehenderit";
                                        }};
                                        proxy = "tempore";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "consequatur";
                                            clientSecret = "nulla";
                                            kubectlRedirectUri = "soluta";
                                            tenant = "molestiae";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "illum";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "omnis";
                                            clientId = "molestiae";
                                            clientSecret = "id";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "minima";
                                            groupPrefix = "dignissimos";
                                            groupsClaim = "quas";
                                            issuerUri = "ut";
                                            kubectlRedirectUri = "quos";
                                            scopes = "omnis";
                                            userClaim = "laboriosam";
                                            userPrefix = "quaerat";
                                        }};
                                        proxy = "at";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "voluptatem";
                                            clientSecret = "voluptas";
                                            kubectlRedirectUri = "doloremque";
                                            tenant = "sint";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "incidunt";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "ad";
                                            clientId = "explicabo";
                                            clientSecret = "sunt";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = true;
                                            extraParams = "expedita";
                                            groupPrefix = "rerum";
                                            groupsClaim = "iste";
                                            issuerUri = "modi";
                                            kubectlRedirectUri = "error";
                                            scopes = "ut";
                                            userClaim = "ut";
                                            userPrefix = "temporibus";
                                        }};
                                        proxy = "sint";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "AUTOMATIC";
                                management = "MANAGEMENT_UNSPECIFIED";
                            }};
                        }});
                        put("quia", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "provident";
                                        httpsProxy = "aut";
                                        policyDir = "illo";
                                        secretType = "minima";
                                        syncBranch = "aspernatur";
                                        syncRepo = "illo";
                                        syncRev = "ut";
                                        syncWaitSecs = "et";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "non";
                                        policyDir = "aliquam";
                                        secretType = "ipsa";
                                        syncRepo = "expedita";
                                        syncWaitSecs = "totam";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "temporibus";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = true;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "ea";
                                    enabled = true;
                                    exemptableNamespaces = new String[]() {{
                                        add("asperiores"),
                                        add("sit"),
                                        add("dolorum"),
                                    }};
                                    logDeniesEnabled = true;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("CLOUD_MONITORING"),
                                            add("PROMETHEUS"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = true;
                                    templateLibraryInstalled = false;
                                }};
                                version = "aut";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("sit", "sit");
                                put("expedita", "sunt");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "non";
                                            clientSecret = "sapiente";
                                            kubectlRedirectUri = "culpa";
                                            tenant = "sed";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "et";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "rerum";
                                            clientId = "veniam";
                                            clientSecret = "quis";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "officiis";
                                            groupPrefix = "sequi";
                                            groupsClaim = "magni";
                                            issuerUri = "et";
                                            kubectlRedirectUri = "maiores";
                                            scopes = "ducimus";
                                            userClaim = "distinctio";
                                            userPrefix = "neque";
                                        }};
                                        proxy = "ipsum";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "libero";
                                            clientSecret = "hic";
                                            kubectlRedirectUri = "et";
                                            tenant = "rerum";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "reprehenderit";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "a";
                                            clientId = "odio";
                                            clientSecret = "ut";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = true;
                                            extraParams = "nesciunt";
                                            groupPrefix = "labore";
                                            groupsClaim = "et";
                                            issuerUri = "consequatur";
                                            kubectlRedirectUri = "esse";
                                            scopes = "commodi";
                                            userClaim = "exercitationem";
                                            userPrefix = "soluta";
                                        }};
                                        proxy = "nihil";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "ducimus";
                                            clientSecret = "non";
                                            kubectlRedirectUri = "amet";
                                            tenant = "iusto";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "et";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "qui";
                                            clientId = "eligendi";
                                            clientSecret = "sit";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = true;
                                            extraParams = "cum";
                                            groupPrefix = "alias";
                                            groupsClaim = "deleniti";
                                            issuerUri = "et";
                                            kubectlRedirectUri = "amet";
                                            scopes = "magnam";
                                            userClaim = "nihil";
                                            userPrefix = "ipsa";
                                        }};
                                        proxy = "consequuntur";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "MANUAL";
                                management = "MANAGEMENT_UNSPECIFIED";
                            }};
                        }});
                        put("aliquid", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = true;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "sunt";
                                        httpsProxy = "nisi";
                                        policyDir = "velit";
                                        secretType = "quis";
                                        syncBranch = "odio";
                                        syncRepo = "suscipit";
                                        syncRev = "eveniet";
                                        syncWaitSecs = "et";
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "quasi";
                                        policyDir = "at";
                                        secretType = "non";
                                        syncRepo = "atque";
                                        syncWaitSecs = "sint";
                                    }};
                                    preventDrift = true;
                                    sourceFormat = "excepturi";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = true;
                                    enablePodTreeLabels = true;
                                    enabled = true;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "repellat";
                                    enabled = true;
                                    exemptableNamespaces = new String[]() {{
                                        add("non"),
                                        add("minima"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new openapisdk.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]() {{
                                            add("CLOUD_MONITORING"),
                                            add("MONITORING_BACKEND_UNSPECIFIED"),
                                        }};
                                    }};
                                    mutationEnabled = true;
                                    referentialRulesEnabled = true;
                                    templateLibraryInstalled = false;
                                }};
                                version = "porro";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("sit", "sapiente");
                                put("vel", "et");
                                put("itaque", "similique");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new openapisdk.models.shared.IdentityServiceAuthMethodInput[]() {{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "rerum";
                                            clientSecret = "iusto";
                                            kubectlRedirectUri = "adipisci";
                                            tenant = "repellendus";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = true;
                                        }};
                                        name = "et";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "ea";
                                            clientId = "maiores";
                                            clientSecret = "blanditiis";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "distinctio";
                                            groupPrefix = "necessitatibus";
                                            groupsClaim = "nostrum";
                                            issuerUri = "vel";
                                            kubectlRedirectUri = "repudiandae";
                                            scopes = "nihil";
                                            userClaim = "cumque";
                                            userPrefix = "ipsa";
                                        }};
                                        proxy = "enim";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "animi";
                                            clientSecret = "iusto";
                                            kubectlRedirectUri = "veritatis";
                                            tenant = "ea";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "minus";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "ab";
                                            clientId = "assumenda";
                                            clientSecret = "fuga";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = true;
                                            extraParams = "est";
                                            groupPrefix = "perspiciatis";
                                            groupsClaim = "porro";
                                            issuerUri = "ut";
                                            kubectlRedirectUri = "aut";
                                            scopes = "quas";
                                            userClaim = "est";
                                            userPrefix = "iusto";
                                        }};
                                        proxy = "delectus";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureAdConfigInput() {{
                                            clientId = "molestias";
                                            clientSecret = "rerum";
                                            kubectlRedirectUri = "ab";
                                            tenant = "hic";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "consectetur";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "aliquam";
                                            clientId = "quaerat";
                                            clientSecret = "ab";
                                            deployCloudConsoleProxy = true;
                                            enableAccessToken = false;
                                            extraParams = "dignissimos";
                                            groupPrefix = "earum";
                                            groupsClaim = "quas";
                                            issuerUri = "dolor";
                                            kubectlRedirectUri = "quisquam";
                                            scopes = "ducimus";
                                            userClaim = "eaque";
                                            userPrefix = "aut";
                                        }};
                                        proxy = "adipisci";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED";
                                management = "MANAGEMENT_MANUAL";
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = "UPDATING";
                    }};
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("maiores", new java.util.HashMap<String, Object>() {{
                            put("nihil", "velit");
                        }});
                        put("sint", new java.util.HashMap<String, Object>() {{
                            put("aspernatur", "in");
                            put("fugiat", "reprehenderit");
                            put("quia", "voluptatum");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("sit", "repellendus");
                            put("ea", "eos");
                            put("perferendis", "esse");
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("nihil", "ea");
                            put("doloremque", "consequatur");
                            put("iusto", "quia");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            configMembership = "molestiae";
                        }};
                    }};
                    state = new CommonFeatureState() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = "CODE_UNSPECIFIED";
                                description = "sed";
                            }};
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("harum", "quasi");
                            put("eos", "laudantium");
                        }};
                        state = new FeatureState() {{
                            code = "ERROR";
                            description = "modi";
                            updateTime = "est";
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