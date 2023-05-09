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
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsFeaturesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppDevExperienceFeatureState;
import org.openapis.openapi.models.shared.CommonFeatureSpec;
import org.openapis.openapi.models.shared.CommonFeatureState;
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
import org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput;
import org.openapis.openapi.models.shared.IdentityServiceAzureADConfigInput;
import org.openapis.openapi.models.shared.IdentityServiceGoogleConfig;
import org.openapis.openapi.models.shared.IdentityServiceMembershipSpecInput;
import org.openapis.openapi.models.shared.IdentityServiceOidcConfigInput;
import org.openapis.openapi.models.shared.MembershipFeatureSpecInput;
import org.openapis.openapi.models.shared.MultiClusterIngressFeatureSpec;
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
                    fleetDefaultMemberConfig = new java.util.HashMap<String, Object>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    membershipSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.MembershipFeatureSpecInput>() {{
                        put("tempora", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "suscipit";
                                        httpsProxy = "molestiae";
                                        policyDir = "minus";
                                        secretType = "placeat";
                                        syncBranch = "voluptatum";
                                        syncRepo = "iusto";
                                        syncRev = "excepturi";
                                        syncWaitSecs = "nisi";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "recusandae";
                                        policyDir = "temporibus";
                                        secretType = "ab";
                                        syncRepo = "quis";
                                        syncWaitSecs = "veritatis";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "deserunt";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "perferendis";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("repellendus"),
                                        add("sapiente"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "molestiae";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("quod", "esse");
                                put("totam", "porro");
                                put("dolorum", "dicta");
                                put("nam", "officia");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "fugit";
                                            clientSecret = "deleniti";
                                            kubectlRedirectUri = "hic";
                                            tenant = "optio";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Jack Johns";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "qui";
                                            clientId = "impedit";
                                            clientSecret = "cum";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "esse";
                                            groupPrefix = "ipsum";
                                            groupsClaim = "excepturi";
                                            issuerUri = "aspernatur";
                                            kubectlRedirectUri = "perferendis";
                                            scopes = "ad";
                                            userClaim = "natus";
                                            userPrefix = "sed";
                                        }};
                                        proxy = "iste";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "dolor";
                                            clientSecret = "natus";
                                            kubectlRedirectUri = "laboriosam";
                                            tenant = "hic";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Wilbur Kirlin";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "iure";
                                            clientId = "saepe";
                                            clientSecret = "quidem";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "architecto";
                                            groupPrefix = "ipsa";
                                            groupsClaim = "reiciendis";
                                            issuerUri = "est";
                                            kubectlRedirectUri = "mollitia";
                                            scopes = "laborum";
                                            userClaim = "dolores";
                                            userPrefix = "dolorem";
                                        }};
                                        proxy = "corporis";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "explicabo";
                                            clientSecret = "nobis";
                                            kubectlRedirectUri = "enim";
                                            tenant = "omnis";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Ms. Cathy Marks";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "doloribus";
                                            clientId = "sapiente";
                                            clientSecret = "architecto";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "mollitia";
                                            groupPrefix = "dolorem";
                                            groupsClaim = "culpa";
                                            issuerUri = "consequuntur";
                                            kubectlRedirectUri = "repellat";
                                            scopes = "mollitia";
                                            userClaim = "occaecati";
                                            userPrefix = "numquam";
                                        }};
                                        proxy = "commodi";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.AUTOMATIC;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_AUTOMATIC;
                            }};
                        }});
                        put("velit", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "error";
                                        httpsProxy = "quia";
                                        policyDir = "quis";
                                        secretType = "vitae";
                                        syncBranch = "laborum";
                                        syncRepo = "animi";
                                        syncRev = "enim";
                                        syncWaitSecs = "odit";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "quo";
                                        policyDir = "sequi";
                                        secretType = "tenetur";
                                        syncRepo = "ipsam";
                                        syncWaitSecs = "id";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "possimus";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "aut";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("error"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "vero";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("praesentium", "voluptatibus");
                                put("ipsa", "omnis");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
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
                        }});
                        put("quos", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "perferendis";
                                        httpsProxy = "magni";
                                        policyDir = "assumenda";
                                        secretType = "ipsam";
                                        syncBranch = "alias";
                                        syncRepo = "fugit";
                                        syncRev = "dolorum";
                                        syncWaitSecs = "excepturi";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "tempora";
                                        policyDir = "facilis";
                                        secretType = "tempore";
                                        syncRepo = "labore";
                                        syncWaitSecs = "delectus";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "eum";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "non";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("sint"),
                                        add("aliquid"),
                                        add("provident"),
                                        add("necessitatibus"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.CLOUD_MONITORING),
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
                                        name = "Tomas Friesen";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "accusamus";
                                            clientId = "delectus";
                                            clientSecret = "quidem";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "provident";
                                            groupPrefix = "nam";
                                            groupsClaim = "id";
                                            issuerUri = "blanditiis";
                                            kubectlRedirectUri = "deleniti";
                                            scopes = "sapiente";
                                            userClaim = "amet";
                                            userPrefix = "deserunt";
                                        }};
                                        proxy = "nisi";
                                    }}),
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "vel";
                                            clientSecret = "natus";
                                            kubectlRedirectUri = "omnis";
                                            tenant = "molestiae";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Marcia Gutkowski";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "labore";
                                            clientId = "labore";
                                            clientSecret = "suscipit";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "natus";
                                            groupPrefix = "nobis";
                                            groupsClaim = "eum";
                                            issuerUri = "vero";
                                            kubectlRedirectUri = "aspernatur";
                                            scopes = "architecto";
                                            userClaim = "magnam";
                                            userPrefix = "et";
                                        }};
                                        proxy = "excepturi";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.AUTOMATIC;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_AUTOMATIC;
                            }};
                        }});
                        put("quos", new MembershipFeatureSpecInput() {{
                            configmanagement = new ConfigManagementMembershipSpec() {{
                                configSync = new ConfigManagementConfigSync() {{
                                    allowVerticalScale = false;
                                    enabled = false;
                                    git = new ConfigManagementGitConfig() {{
                                        gcpServiceAccountEmail = "sint";
                                        httpsProxy = "accusantium";
                                        policyDir = "mollitia";
                                        secretType = "reiciendis";
                                        syncBranch = "mollitia";
                                        syncRepo = "ad";
                                        syncRev = "eum";
                                        syncWaitSecs = "dolor";
                                    }};
                                    managed = new ConfigManagementManaged() {{
                                        enabled = false;
                                    }};
                                    oci = new ConfigManagementOciConfig() {{
                                        gcpServiceAccountEmail = "necessitatibus";
                                        policyDir = "odit";
                                        secretType = "nemo";
                                        syncRepo = "quasi";
                                        syncWaitSecs = "iure";
                                    }};
                                    preventDrift = false;
                                    sourceFormat = "doloribus";
                                }};
                                hierarchyController = new ConfigManagementHierarchyControllerConfig() {{
                                    enableHierarchicalResourceQuota = false;
                                    enablePodTreeLabels = false;
                                    enabled = false;
                                }};
                                policyController = new ConfigManagementPolicyController() {{
                                    auditIntervalSeconds = "debitis";
                                    enabled = false;
                                    exemptableNamespaces = new String[]{{
                                        add("maxime"),
                                        add("deleniti"),
                                    }};
                                    logDeniesEnabled = false;
                                    monitoring = new ConfigManagementPolicyControllerMonitoring() {{
                                        backends = new org.openapis.openapi.models.shared.ConfigManagementPolicyControllerMonitoringBackendsEnum[]{{
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.PROMETHEUS),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                            add(ConfigManagementPolicyControllerMonitoringBackendsEnum.MONITORING_BACKEND_UNSPECIFIED),
                                        }};
                                    }};
                                    mutationEnabled = false;
                                    referentialRulesEnabled = false;
                                    templateLibraryInstalled = false;
                                }};
                                version = "repudiandae";
                            }};
                            fleetInherited = false;
                            fleetobservability = new java.util.HashMap<String, Object>() {{
                                put("expedita", "nihil");
                                put("repellat", "quibusdam");
                            }};
                            identityservice = new IdentityServiceMembershipSpecInput() {{
                                authMethods = new org.openapis.openapi.models.shared.IdentityServiceAuthMethodInput[]{{
                                    add(new IdentityServiceAuthMethodInput() {{
                                        azureadConfig = new IdentityServiceAzureADConfigInput() {{
                                            clientId = "saepe";
                                            clientSecret = "pariatur";
                                            kubectlRedirectUri = "accusantium";
                                            tenant = "consequuntur";
                                        }};
                                        googleConfig = new IdentityServiceGoogleConfig() {{
                                            disable = false;
                                        }};
                                        name = "Miss Nick Cummerata";
                                        oidcConfig = new IdentityServiceOidcConfigInput() {{
                                            certificateAuthorityData = "pariatur";
                                            clientId = "maxime";
                                            clientSecret = "ea";
                                            deployCloudConsoleProxy = false;
                                            enableAccessToken = false;
                                            extraParams = "excepturi";
                                            groupPrefix = "odit";
                                            groupsClaim = "ea";
                                            issuerUri = "accusantium";
                                            kubectlRedirectUri = "ab";
                                            scopes = "maiores";
                                            userClaim = "quidem";
                                            userPrefix = "ipsam";
                                        }};
                                        proxy = "voluptate";
                                    }}),
                                }};
                            }};
                            mesh = new ServiceMeshMembershipSpec() {{
                                controlPlane = ServiceMeshMembershipSpecControlPlaneEnum.AUTOMATIC;
                                management = ServiceMeshMembershipSpecManagementEnum.MANAGEMENT_MANUAL;
                            }};
                        }});
                    }};
                    resourceState = new FeatureResourceState() {{
                        state = FeatureResourceStateStateEnum.STATE_UNSPECIFIED;
                    }};;
                    scopeSpecs = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                        put("nemo", new java.util.HashMap<String, Object>() {{
                            put("perferendis", "fugiat");
                            put("amet", "aut");
                            put("cumque", "corporis");
                            put("hic", "libero");
                        }});
                        put("nobis", new java.util.HashMap<String, Object>() {{
                            put("quis", "totam");
                        }});
                        put("dignissimos", new java.util.HashMap<String, Object>() {{
                            put("quis", "nesciunt");
                        }});
                        put("eos", new java.util.HashMap<String, Object>() {{
                            put("dolores", "minus");
                        }});
                    }};
                    spec = new CommonFeatureSpec() {{
                        appdevexperience = new java.util.HashMap<String, Object>() {{
                            put("dolor", "vero");
                            put("nostrum", "hic");
                        }};
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("omnis", "facilis");
                            put("perspiciatis", "voluptatem");
                            put("porro", "consequuntur");
                            put("blanditiis", "error");
                        }};
                        multiclusteringress = new MultiClusterIngressFeatureSpec() {{
                            configMembership = "eaque";
                        }};;
                    }};;
                    state = new CommonFeatureState() {{
                        appdevexperience = new AppDevExperienceFeatureState() {{
                            networkingInstallSucceeded = new Status() {{
                                code = StatusCodeEnum.FAILED;
                                description = "rerum";
                            }};;
                        }};;
                        fleetobservability = new java.util.HashMap<String, Object>() {{
                            put("asperiores", "earum");
                        }};
                        state = new FeatureState() {{
                            code = FeatureStateCodeEnum.OK;
                            description = "iste";
                            updateTime = "dolorum";
                        }};;
                    }};;
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "provident";
                featureId = "nobis";
                fields = "libero";
                key = "delectus";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "quos";
                requestId = "aliquid";
                uploadType = "dolorem";
                uploadProtocol = "dolorem";
            }};            

            GkehubProjectsLocationsFeaturesCreateResponse res = sdk.projects.gkehubProjectsLocationsFeaturesCreate(req, new GkehubProjectsLocationsFeaturesCreateSecurity("dolor", "qui") {{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [gkehubProjectsLocationsFeaturesCreate](docs/projects/README.md#gkehubprojectslocationsfeaturescreate) - Adds a new Feature.
* [gkehubProjectsLocationsFeaturesList](docs/projects/README.md#gkehubprojectslocationsfeatureslist) - Lists Features in a given project and location.
* [gkehubProjectsLocationsList](docs/projects/README.md#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [gkehubProjectsLocationsMembershipsBindingsCreate](docs/projects/README.md#gkehubprojectslocationsmembershipsbindingscreate) - Creates a MembershipBinding.
* [gkehubProjectsLocationsMembershipsBindingsList](docs/projects/README.md#gkehubprojectslocationsmembershipsbindingslist) - Lists MembershipBindings.
* [gkehubProjectsLocationsMembershipsBindingsPatch](docs/projects/README.md#gkehubprojectslocationsmembershipsbindingspatch) - Updates a MembershipBinding.
* [gkehubProjectsLocationsMembershipsCreate](docs/projects/README.md#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [gkehubProjectsLocationsMembershipsGenerateConnectManifest](docs/projects/README.md#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [gkehubProjectsLocationsMembershipsGetIamPolicy](docs/projects/README.md#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkehubProjectsLocationsMembershipsList](docs/projects/README.md#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [gkehubProjectsLocationsMembershipsSetIamPolicy](docs/projects/README.md#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkehubProjectsLocationsMembershipsTestIamPermissions](docs/projects/README.md#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [gkehubProjectsLocationsOperationsCancel](docs/projects/README.md#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkehubProjectsLocationsOperationsList](docs/projects/README.md#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [gkehubProjectsLocationsScopesCreate](docs/projects/README.md#gkehubprojectslocationsscopescreate) - Creates a Scope.
* [gkehubProjectsLocationsScopesDelete](docs/projects/README.md#gkehubprojectslocationsscopesdelete) - Deletes a Scope.
* [gkehubProjectsLocationsScopesGet](docs/projects/README.md#gkehubprojectslocationsscopesget) - Returns the details of a Scope.
* [gkehubProjectsLocationsScopesList](docs/projects/README.md#gkehubprojectslocationsscopeslist) - Lists Scopes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
