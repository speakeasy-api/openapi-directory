<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GkehubProjectsLocationsFeaturesCreateRequest{
        Security: operations.GkehubProjectsLocationsFeaturesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GkehubProjectsLocationsFeaturesCreatePathParams{
            Parent: "sit",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            FeatureID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
        Request: &shared.FeatureInput{
            Labels: map[string]string{
                "et": "ut",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "et": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: true,
                        Version: "vitae",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "PRIVILEGED",
                        Version: "dolores",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: true,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "odio",
                                HTTPSProxy: "dolore",
                                PolicyDir: "id",
                                SecretType: "aspernatur",
                                SyncBranch: "accusantium",
                                SyncRepo: "totam",
                                SyncRev: "commodi",
                                SyncWaitSecs: "quis",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "est",
                                PolicyDir: "aut",
                                SecretType: "odit",
                                SyncRepo: "non",
                                SyncWaitSecs: "voluptas",
                            },
                            PreventDrift: true,
                            SourceFormat: "aut",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "autem",
                            Enabled: true,
                            ExemptableNamespaces: []string{
                                "odio",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: true,
                        },
                        Version: "ut",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "reprehenderit": "tempore",
                        "maiores": "incidunt",
                        "dolor": "beatae",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "in",
                                    ClientSecret: "et",
                                    KubectlRedirectURI: "omnis",
                                    Tenant: "ipsum",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "dolores",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "placeat",
                                    ClientID: "vel",
                                    ClientSecret: "rerum",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: true,
                                    ExtraParams: "quam",
                                    GroupPrefix: "reprehenderit",
                                    GroupsClaim: "qui",
                                    IssuerURI: "qui",
                                    KubectlRedirectURI: "unde",
                                    Scopes: "in",
                                    UserClaim: "autem",
                                    UserPrefix: "qui",
                                },
                                Proxy: "ut",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "itaque",
                                    ClientSecret: "ab",
                                    KubectlRedirectURI: "neque",
                                    Tenant: "ullam",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "accusantium",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "esse",
                                    ClientID: "architecto",
                                    ClientSecret: "quam",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "soluta",
                                    GroupPrefix: "sunt",
                                    GroupsClaim: "voluptates",
                                    IssuerURI: "magni",
                                    KubectlRedirectURI: "et",
                                    Scopes: "optio",
                                    UserClaim: "qui",
                                    UserPrefix: "earum",
                                },
                                Proxy: "illo",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        DefaultChannel: "REGULAR",
                        Management: "MANAGEMENT_MANUAL",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "dolor",
                            ExemptableNamespaces: []string{
                                "error",
                                "reprehenderit",
                            },
                            InstallSpec: "INSTALL_SPEC_SUSPENDED",
                            LogDeniesEnabled: true,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "CLOUD_MONITORING",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: true,
                            },
                        },
                        Version: "aut",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "ENABLED",
                    },
                },
                "consequuntur": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: true,
                        Version: "ipsa",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "doloremque",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: true,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "quisquam",
                                HTTPSProxy: "explicabo",
                                PolicyDir: "ea",
                                SecretType: "maxime",
                                SyncBranch: "eum",
                                SyncRepo: "perferendis",
                                SyncRev: "et",
                                SyncWaitSecs: "rerum",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "reiciendis",
                                PolicyDir: "quis",
                                SecretType: "cumque",
                                SyncRepo: "minima",
                                SyncWaitSecs: "necessitatibus",
                            },
                            PreventDrift: true,
                            SourceFormat: "quis",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "impedit",
                            Enabled: true,
                            ExemptableNamespaces: []string{
                                "vel",
                                "qui",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "CLOUD_MONITORING",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "sit",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "vel": "vel",
                        "placeat": "qui",
                        "nisi": "quis",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "porro",
                                    ClientSecret: "rerum",
                                    KubectlRedirectURI: "et",
                                    Tenant: "accusamus",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "laborum",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "rerum",
                                    ClientID: "ut",
                                    ClientSecret: "laborum",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "minus",
                                    GroupPrefix: "soluta",
                                    GroupsClaim: "aperiam",
                                    IssuerURI: "consequuntur",
                                    KubectlRedirectURI: "excepturi",
                                    Scopes: "mollitia",
                                    UserClaim: "inventore",
                                    UserPrefix: "delectus",
                                },
                                Proxy: "ipsa",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "animi",
                                    ClientSecret: "animi",
                                    KubectlRedirectURI: "ut",
                                    Tenant: "aliquam",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "sed",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "sed",
                                    ClientID: "et",
                                    ClientSecret: "consequuntur",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: true,
                                    ExtraParams: "provident",
                                    GroupPrefix: "molestiae",
                                    GroupsClaim: "pariatur",
                                    IssuerURI: "quasi",
                                    KubectlRedirectURI: "corrupti",
                                    Scopes: "enim",
                                    UserClaim: "qui",
                                    UserPrefix: "sit",
                                },
                                Proxy: "possimus",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        DefaultChannel: "REGULAR",
                        Management: "MANAGEMENT_MANUAL",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "quia",
                            ExemptableNamespaces: []string{
                                "est",
                                "occaecati",
                            },
                            InstallSpec: "INSTALL_SPEC_NOT_INSTALLED",
                            LogDeniesEnabled: true,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "CLOUD_MONITORING",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: true,
                            },
                        },
                        Version: "in",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "ENABLED",
                    },
                },
                "voluptatem": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: true,
                        EnableStackdriverOnApplications: true,
                        Version: "saepe",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "earum",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: true,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: true,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "et",
                                HTTPSProxy: "est",
                                PolicyDir: "ipsum",
                                SecretType: "quam",
                                SyncBranch: "voluptas",
                                SyncRepo: "nihil",
                                SyncRev: "dolores",
                                SyncWaitSecs: "suscipit",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "impedit",
                                PolicyDir: "non",
                                SecretType: "magnam",
                                SyncRepo: "ut",
                                SyncWaitSecs: "possimus",
                            },
                            PreventDrift: true,
                            SourceFormat: "qui",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "enim",
                            Enabled: true,
                            ExemptableNamespaces: []string{
                                "delectus",
                            },
                            LogDeniesEnabled: true,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "voluptas",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "a": "qui",
                        "excepturi": "autem",
                        "corporis": "dicta",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "doloremque",
                                    ClientSecret: "quae",
                                    KubectlRedirectURI: "nisi",
                                    Tenant: "recusandae",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "minus",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "et",
                                    ClientID: "rerum",
                                    ClientSecret: "ut",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: false,
                                    ExtraParams: "et",
                                    GroupPrefix: "reiciendis",
                                    GroupsClaim: "aspernatur",
                                    IssuerURI: "praesentium",
                                    KubectlRedirectURI: "porro",
                                    Scopes: "nihil",
                                    UserClaim: "adipisci",
                                    UserPrefix: "consequatur",
                                },
                                Proxy: "illum",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "accusantium",
                                    ClientSecret: "atque",
                                    KubectlRedirectURI: "amet",
                                    Tenant: "nisi",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "est",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "quo",
                                    ClientID: "vero",
                                    ClientSecret: "alias",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: true,
                                    ExtraParams: "eius",
                                    GroupPrefix: "repellat",
                                    GroupsClaim: "beatae",
                                    IssuerURI: "omnis",
                                    KubectlRedirectURI: "totam",
                                    Scopes: "aut",
                                    UserClaim: "et",
                                    UserPrefix: "magni",
                                },
                                Proxy: "necessitatibus",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        DefaultChannel: "REGULAR",
                        Management: "MANAGEMENT_UNSPECIFIED",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "voluptas",
                            ExemptableNamespaces: []string{
                                "veniam",
                                "architecto",
                            },
                            InstallSpec: "INSTALL_SPEC_SUSPENDED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "CLOUD_MONITORING",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: true,
                            },
                        },
                        Version: "quo",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "STATE_UNSPECIFIED",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "commodi": map[string]interface{}{
                    "facere": "in",
                    "et": "odit",
                },
                "est": map[string]interface{}{
                    "ipsum": "aut",
                    "perspiciatis": "et",
                    "vero": "voluptatem",
                },
                "ex": map[string]interface{}{
                    "vero": "distinctio",
                    "cumque": "ea",
                    "non": "non",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: true,
                        EnableStackdriverOnApplications: true,
                        Version: "quae",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "magni": "minus",
                },
                Cloudauditlogging: &shared.CloudAuditLoggingFeatureSpec{
                    AllowlistedServiceAccounts: []string{
                        "aut",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "iusto": "quia",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "PAY_AS_YOU_GO",
                    ConfigMembership: "debitis",
                },
                Workloadcertificate: &shared.FeatureSpec{
                    DefaultConfig: &shared.MembershipSpec{
                        CertificateManagement: "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
                    },
                    ProvisionGoogleCa: "DISABLED",
                },
            },
            State: &shared.CommonFeatureState1{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "OK",
                        Description: "ut",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "nihil": "laborum",
                    "recusandae": "nihil",
                    "exercitationem": "iste",
                },
                State: &shared.FeatureState{
                    Code: "ERROR",
                    Description: "id",
                    UpdateTime: "autem",
                },
            },
        },
    }
    
    res, err := s.Projects.GkehubProjectsLocationsFeaturesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->