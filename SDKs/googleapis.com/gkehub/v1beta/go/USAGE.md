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
            Parent: "modi",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "illum",
            Alt: "proto",
            Callback: "et",
            FeatureID: "aperiam",
            Fields: "ipsam",
            Key: "vel",
            OauthToken: "laudantium",
            PrettyPrint: true,
            QuotaUser: "quod",
            RequestID: "provident",
            UploadType: "facilis",
            UploadProtocol: "fuga",
        },
        Request: &shared.FeatureInput{
            Labels: map[string]string{
                "aut": "at",
                "eum": "et",
                "assumenda": "ut",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "ut": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "beatae",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "aliquid",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: true,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: true,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "est",
                                HTTPSProxy: "et",
                                PolicyDir: "veniam",
                                SecretType: "consectetur",
                                SyncBranch: "amet",
                                SyncRepo: "consequuntur",
                                SyncRev: "ad",
                                SyncWaitSecs: "qui",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "sunt",
                                PolicyDir: "et",
                                SecretType: "aut",
                                SyncRepo: "accusantium",
                                SyncWaitSecs: "aut",
                            },
                            PreventDrift: true,
                            SourceFormat: "accusamus",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "molestias",
                            Enabled: true,
                            ExemptableNamespaces: []string{
                                "quis",
                                "nihil",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "CLOUD_MONITORING",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: true,
                        },
                        Version: "commodi",
                    },
                    FleetInherited: true,
                    Fleetobservability: map[string]interface{}{
                        "illo": "blanditiis",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "accusamus",
                                    ClientSecret: "adipisci",
                                    KubectlRedirectURI: "beatae",
                                    Tenant: "autem",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "sit",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "animi",
                                    ClientID: "possimus",
                                    ClientSecret: "ut",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "expedita",
                                    GroupPrefix: "aspernatur",
                                    GroupsClaim: "recusandae",
                                    IssuerURI: "fugiat",
                                    KubectlRedirectURI: "non",
                                    Scopes: "odit",
                                    UserClaim: "et",
                                    UserPrefix: "reprehenderit",
                                },
                                Proxy: "qui",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "ipsum",
                                    ClientSecret: "laborum",
                                    KubectlRedirectURI: "molestiae",
                                    Tenant: "eum",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "alias",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "recusandae",
                                    ClientID: "aliquid",
                                    ClientSecret: "asperiores",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: true,
                                    ExtraParams: "accusantium",
                                    GroupPrefix: "voluptatibus",
                                    GroupsClaim: "ut",
                                    IssuerURI: "quidem",
                                    KubectlRedirectURI: "nesciunt",
                                    Scopes: "quisquam",
                                    UserClaim: "et",
                                    UserPrefix: "tempore",
                                },
                                Proxy: "dolorum",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_UNSPECIFIED",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "minima",
                            ExemptableNamespaces: []string{
                                "soluta",
                                "veniam",
                            },
                            InstallSpec: "INSTALL_SPEC_ENABLED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
                                    "CLOUD_MONITORING",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: true,
                            },
                        },
                        Version: "nisi",
                    },
                },
                "cum": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: true,
                        Version: "nihil",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "PRIVILEGED",
                        Version: "voluptatum",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: true,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "porro",
                                HTTPSProxy: "est",
                                PolicyDir: "nobis",
                                SecretType: "quibusdam",
                                SyncBranch: "assumenda",
                                SyncRepo: "natus",
                                SyncRev: "voluptas",
                                SyncWaitSecs: "repudiandae",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "in",
                                PolicyDir: "explicabo",
                                SecretType: "aliquid",
                                SyncRepo: "delectus",
                                SyncWaitSecs: "sunt",
                            },
                            PreventDrift: true,
                            SourceFormat: "fugiat",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: false,
                            Enabled: true,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "quae",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "quia",
                                "accusantium",
                            },
                            LogDeniesEnabled: true,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "quod",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "neque": "sunt",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "minima",
                                    ClientSecret: "blanditiis",
                                    KubectlRedirectURI: "sunt",
                                    Tenant: "officia",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "autem",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "asperiores",
                                    ClientID: "rerum",
                                    ClientSecret: "perspiciatis",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: true,
                                    ExtraParams: "aut",
                                    GroupPrefix: "non",
                                    GroupsClaim: "ea",
                                    IssuerURI: "pariatur",
                                    KubectlRedirectURI: "incidunt",
                                    Scopes: "debitis",
                                    UserClaim: "ut",
                                    UserPrefix: "quo",
                                },
                                Proxy: "dolorem",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "est",
                                    ClientSecret: "cum",
                                    KubectlRedirectURI: "dolor",
                                    Tenant: "necessitatibus",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "omnis",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "quia",
                                    ClientID: "porro",
                                    ClientSecret: "corrupti",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: true,
                                    ExtraParams: "ut",
                                    GroupPrefix: "occaecati",
                                    GroupsClaim: "quaerat",
                                    IssuerURI: "qui",
                                    KubectlRedirectURI: "dolor",
                                    Scopes: "similique",
                                    UserClaim: "quam",
                                    UserPrefix: "dolor",
                                },
                                Proxy: "quo",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_UNSPECIFIED",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "error",
                            ExemptableNamespaces: []string{
                                "ab",
                                "aspernatur",
                            },
                            InstallSpec: "INSTALL_SPEC_SUSPENDED",
                            LogDeniesEnabled: true,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
                                    "CLOUD_MONITORING",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "in",
                    },
                },
                "nulla": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "quibusdam",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "accusamus",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "atque",
                                HTTPSProxy: "velit",
                                PolicyDir: "in",
                                SecretType: "maiores",
                                SyncBranch: "quae",
                                SyncRepo: "aspernatur",
                                SyncRev: "inventore",
                                SyncWaitSecs: "ea",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "commodi",
                                PolicyDir: "qui",
                                SecretType: "aperiam",
                                SyncRepo: "explicabo",
                                SyncWaitSecs: "quam",
                            },
                            PreventDrift: false,
                            SourceFormat: "et",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: true,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "et",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "laudantium",
                                "aut",
                                "et",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "eligendi",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "voluptatem": "animi",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "eum",
                                    ClientSecret: "non",
                                    KubectlRedirectURI: "eos",
                                    Tenant: "dolor",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "rerum",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "voluptatem",
                                    ClientID: "possimus",
                                    ClientSecret: "nesciunt",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "at",
                                    GroupPrefix: "suscipit",
                                    GroupsClaim: "soluta",
                                    IssuerURI: "est",
                                    KubectlRedirectURI: "corporis",
                                    Scopes: "voluptatem",
                                    UserClaim: "natus",
                                    UserPrefix: "quae",
                                },
                                Proxy: "laboriosam",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "qui",
                                    ClientSecret: "labore",
                                    KubectlRedirectURI: "non",
                                    Tenant: "ullam",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "commodi",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "voluptas",
                                    ClientID: "voluptate",
                                    ClientSecret: "mollitia",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "quis",
                                    GroupPrefix: "dolores",
                                    GroupsClaim: "cum",
                                    IssuerURI: "excepturi",
                                    KubectlRedirectURI: "in",
                                    Scopes: "in",
                                    UserClaim: "odio",
                                    UserPrefix: "odit",
                                },
                                Proxy: "ipsam",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_UNSPECIFIED",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "aliquid",
                            ExemptableNamespaces: []string{
                                "nihil",
                                "et",
                                "velit",
                            },
                            InstallSpec: "INSTALL_SPEC_NOT_INSTALLED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "sit",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "UPDATING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "et": map[string]interface{}{
                    "rerum": "asperiores",
                    "soluta": "dolorem",
                },
                "totam": map[string]interface{}{
                    "ipsum": "facere",
                    "et": "voluptas",
                },
                "dicta": map[string]interface{}{
                    "quis": "nulla",
                    "qui": "ea",
                    "pariatur": "ipsa",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: true,
                        EnableStackdriverOnApplications: false,
                        Version: "beatae",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "eveniet": "necessitatibus",
                },
                Fleetobservability: map[string]interface{}{
                    "et": "iure",
                    "quia": "non",
                    "nostrum": "itaque",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "ANTHOS_LICENSE",
                    ConfigMembership: "esse",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "OK",
                        Description: "ipsam",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "dolorem": "esse",
                    "quia": "non",
                },
                State: &shared.FeatureState{
                    Code: "OK",
                    Description: "similique",
                    UpdateTime: "vel",
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