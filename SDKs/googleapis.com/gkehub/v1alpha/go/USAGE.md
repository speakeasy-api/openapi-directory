<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            Parent: "unde",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            FeatureID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.FeatureInput{
            FleetDefaultMemberConfig: &shared.CommonFleetDefaultMemberConfigSpecInput{
                Identityservice: &shared.IdentityServiceMembershipSpecInput{
                    AuthMethods: []shared.IdentityServiceAuthMethodInput{
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: "saepe",
                                ClientSecret: "inventore",
                                KubectlRedirectURI: "sapiente",
                                Tenant: "enim",
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: false,
                            },
                            Name: "eum",
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: "voluptatum",
                                ClientID: "autem",
                                ClientSecret: "vel",
                                DeployCloudConsoleProxy: false,
                                EnableAccessToken: false,
                                ExtraParams: "non",
                                GroupPrefix: "deleniti",
                                GroupsClaim: "similique",
                                IssuerURI: "reprehenderit",
                                KubectlRedirectURI: "molestiae",
                                Scopes: "quo",
                                UserClaim: "quasi",
                                UserPrefix: "laboriosam",
                            },
                            Proxy: "dicta",
                        },
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: "est",
                                ClientSecret: "voluptatem",
                                KubectlRedirectURI: "consequatur",
                                Tenant: "fugiat",
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: false,
                            },
                            Name: "a",
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: "omnis",
                                ClientID: "eos",
                                ClientSecret: "accusamus",
                                DeployCloudConsoleProxy: false,
                                EnableAccessToken: false,
                                ExtraParams: "accusamus",
                                GroupPrefix: "reiciendis",
                                GroupsClaim: "rem",
                                IssuerURI: "quibusdam",
                                KubectlRedirectURI: "et",
                                Scopes: "praesentium",
                                UserClaim: "occaecati",
                                UserPrefix: "dolor",
                            },
                            Proxy: "soluta",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "quisquam": "rerum",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "qui": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "sed",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "PRIVILEGED",
                        Version: "possimus",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "occaecati",
                                HTTPSProxy: "odit",
                                PolicyDir: "esse",
                                SecretType: "rem",
                                SyncBranch: "voluptatem",
                                SyncRepo: "amet",
                                SyncRev: "est",
                                SyncWaitSecs: "id",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "blanditiis",
                                PolicyDir: "numquam",
                                SecretType: "similique",
                                SyncRepo: "dolores",
                                SyncWaitSecs: "sit",
                            },
                            PreventDrift: false,
                            SourceFormat: "quia",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "et",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "laborum",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "iure",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "ut": "soluta",
                        "qui": "ea",
                        "laborum": "iusto",
                        "ut": "optio",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "inventore",
                                    ClientSecret: "ut",
                                    KubectlRedirectURI: "libero",
                                    Tenant: "et",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "libero",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "ipsum",
                                    ClientID: "non",
                                    ClientSecret: "ea",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "magni",
                                    GroupPrefix: "placeat",
                                    GroupsClaim: "ipsam",
                                    IssuerURI: "est",
                                    KubectlRedirectURI: "commodi",
                                    Scopes: "quia",
                                    UserClaim: "similique",
                                    UserPrefix: "eaque",
                                },
                                Proxy: "odio",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        DefaultChannel: "STABLE",
                        Management: "MANAGEMENT_MANUAL",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "aut",
                            ConstraintViolationLimit: "et",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "quidem": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "neque",
                                            Memory: "asperiores",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "et",
                                            Memory: "culpa",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "esse",
                                            Key: "totam",
                                            Operator: "voluptatum",
                                            Value: "et",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "fuga",
                                            Key: "nesciunt",
                                            Operator: "laboriosam",
                                            Value: "aut",
                                        },
                                    },
                                    ReplicaCount: "cum",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "ipsam",
                                "eos",
                                "omnis",
                            },
                            InstallSpec: "INSTALL_SPEC_UNSPECIFIED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                    "CLOUD_MONITORING",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "fuga": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "tempore",
                                            "explicabo",
                                            "aut",
                                            "reiciendis",
                                        },
                                        Management: "INSTALLED",
                                    },
                                },
                            },
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "totam",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "DISABLED",
                    },
                },
                "reiciendis": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "illo",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "qui",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "quod",
                                HTTPSProxy: "sit",
                                PolicyDir: "eaque",
                                SecretType: "odio",
                                SyncBranch: "veniam",
                                SyncRepo: "reiciendis",
                                SyncRev: "sed",
                                SyncWaitSecs: "ea",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "exercitationem",
                                PolicyDir: "deleniti",
                                SecretType: "sed",
                                SyncRepo: "est",
                                SyncWaitSecs: "voluptatem",
                            },
                            PreventDrift: false,
                            SourceFormat: "aut",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "esse",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "veritatis",
                                "numquam",
                                "eligendi",
                                "error",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "CLOUD_MONITORING",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "cupiditate",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "explicabo": "et",
                        "in": "vitae",
                        "non": "minima",
                        "voluptatem": "aut",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "voluptas",
                                    ClientSecret: "magni",
                                    KubectlRedirectURI: "est",
                                    Tenant: "porro",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "voluptas",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "nostrum",
                                    ClientID: "voluptatem",
                                    ClientSecret: "sit",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "in",
                                    GroupPrefix: "officia",
                                    GroupsClaim: "omnis",
                                    IssuerURI: "voluptatem",
                                    KubectlRedirectURI: "dolorem",
                                    Scopes: "eum",
                                    UserClaim: "quis",
                                    UserPrefix: "consequatur",
                                },
                                Proxy: "ratione",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "cum",
                                    ClientSecret: "similique",
                                    KubectlRedirectURI: "enim",
                                    Tenant: "nihil",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "id",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "quis",
                                    ClientID: "sapiente",
                                    ClientSecret: "et",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "dolore",
                                    GroupPrefix: "possimus",
                                    GroupsClaim: "in",
                                    IssuerURI: "qui",
                                    KubectlRedirectURI: "deserunt",
                                    Scopes: "eveniet",
                                    UserClaim: "sunt",
                                    UserPrefix: "rerum",
                                },
                                Proxy: "modi",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "necessitatibus",
                                    ClientSecret: "tenetur",
                                    KubectlRedirectURI: "soluta",
                                    Tenant: "ducimus",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "ducimus",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "nulla",
                                    ClientID: "reiciendis",
                                    ClientSecret: "cumque",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "fugit",
                                    GroupPrefix: "ullam",
                                    GroupsClaim: "voluptas",
                                    IssuerURI: "vel",
                                    KubectlRedirectURI: "velit",
                                    Scopes: "qui",
                                    UserClaim: "cum",
                                    UserPrefix: "aut",
                                },
                                Proxy: "magnam",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        DefaultChannel: "RAPID",
                        Management: "MANAGEMENT_MANUAL",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "delectus",
                            ConstraintViolationLimit: "eligendi",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "est": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "distinctio",
                                            Memory: "et",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "provident",
                                            Memory: "a",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "facilis",
                                            Key: "qui",
                                            Operator: "nihil",
                                            Value: "dolorum",
                                        },
                                    },
                                    ReplicaCount: "id",
                                },
                                "voluptatum": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "sit",
                                            Memory: "rem",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "corporis",
                                            Memory: "porro",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "quis",
                                            Key: "nostrum",
                                            Operator: "eum",
                                            Value: "et",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "placeat",
                                            Key: "molestiae",
                                            Operator: "debitis",
                                            Value: "dolores",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "aut",
                                            Key: "ullam",
                                            Operator: "explicabo",
                                            Value: "similique",
                                        },
                                    },
                                    ReplicaCount: "ex",
                                },
                                "deserunt": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "omnis",
                                            Memory: "in",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "aperiam",
                                            Memory: "et",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "et",
                                            Key: "voluptatem",
                                            Operator: "et",
                                            Value: "modi",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "eveniet",
                                            Key: "qui",
                                            Operator: "consequatur",
                                            Value: "aspernatur",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "iusto",
                                            Key: "maiores",
                                            Operator: "saepe",
                                            Value: "quaerat",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "aut",
                                            Key: "sed",
                                            Operator: "nihil",
                                            Value: "ducimus",
                                        },
                                    },
                                    ReplicaCount: "aspernatur",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "sint",
                            },
                            InstallSpec: "INSTALL_SPEC_NOT_INSTALLED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
                                    "CLOUD_MONITORING",
                                    "CLOUD_MONITORING",
                                },
                            },
                            MutationEnabled: false,
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "et": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "eaque",
                                            "neque",
                                            "molestias",
                                            "et",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                },
                            },
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "quia",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "ENABLED",
                    },
                },
                "pariatur": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "et",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "PRIVILEGED",
                        Version: "velit",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "similique",
                                HTTPSProxy: "eos",
                                PolicyDir: "voluptate",
                                SecretType: "aperiam",
                                SyncBranch: "quasi",
                                SyncRepo: "voluptatibus",
                                SyncRev: "optio",
                                SyncWaitSecs: "quis",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "qui",
                                PolicyDir: "quam",
                                SecretType: "quisquam",
                                SyncRepo: "ab",
                                SyncWaitSecs: "et",
                            },
                            PreventDrift: false,
                            SourceFormat: "consequatur",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "aut",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "vero",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "voluptas",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "rerum": "qui",
                        "placeat": "ipsum",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "occaecati",
                                    ClientSecret: "corrupti",
                                    KubectlRedirectURI: "illo",
                                    Tenant: "laboriosam",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "velit",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "dolor",
                                    ClientID: "sit",
                                    ClientSecret: "ipsum",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "autem",
                                    GroupPrefix: "laudantium",
                                    GroupsClaim: "modi",
                                    IssuerURI: "officiis",
                                    KubectlRedirectURI: "nisi",
                                    Scopes: "rerum",
                                    UserClaim: "non",
                                    UserPrefix: "est",
                                },
                                Proxy: "nihil",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "mollitia",
                                    ClientSecret: "doloremque",
                                    KubectlRedirectURI: "repellendus",
                                    Tenant: "dolorem",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "et",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "dolorum",
                                    ClientID: "ab",
                                    ClientSecret: "in",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "cumque",
                                    GroupPrefix: "labore",
                                    GroupsClaim: "asperiores",
                                    IssuerURI: "recusandae",
                                    KubectlRedirectURI: "ut",
                                    Scopes: "laborum",
                                    UserClaim: "soluta",
                                    UserPrefix: "sed",
                                },
                                Proxy: "et",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        DefaultChannel: "STABLE",
                        Management: "MANAGEMENT_MANUAL",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "delectus",
                            ConstraintViolationLimit: "enim",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "in": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "non",
                                            Memory: "non",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "modi",
                                            Memory: "amet",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "rerum",
                                            Key: "similique",
                                            Operator: "quod",
                                            Value: "qui",
                                        },
                                    },
                                    ReplicaCount: "quos",
                                },
                                "ut": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "tempora",
                                            Memory: "soluta",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "aliquam",
                                            Memory: "dicta",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "inventore",
                                            Key: "iusto",
                                            Operator: "corrupti",
                                            Value: "enim",
                                        },
                                    },
                                    ReplicaCount: "aut",
                                },
                                "optio": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "reiciendis",
                                            Memory: "vel",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "et",
                                            Memory: "dolor",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "accusantium",
                                            Key: "at",
                                            Operator: "et",
                                            Value: "maxime",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "soluta",
                                            Key: "deleniti",
                                            Operator: "qui",
                                            Value: "cum",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "sed",
                                            Key: "est",
                                            Operator: "eveniet",
                                            Value: "quo",
                                        },
                                    },
                                    ReplicaCount: "doloribus",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "eius",
                                "blanditiis",
                            },
                            InstallSpec: "INSTALL_SPEC_ENABLED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "aut": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "et",
                                            "eum",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "officia": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "eum",
                                            "occaecati",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "alias": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "enim",
                                            "ad",
                                            "nihil",
                                            "quibusdam",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "amet": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "tenetur",
                                            "blanditiis",
                                            "est",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                },
                            },
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "numquam",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "ENABLED",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "SERVICE_UPDATING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "qui": map[string]interface{}{
                    "aliquam": "ipsam",
                    "numquam": "a",
                    "occaecati": "rem",
                    "accusantium": "quo",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "quia",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "nihil": "qui",
                },
                Cloudauditlogging: &shared.CloudAuditLoggingFeatureSpec{
                    AllowlistedServiceAccounts: []string{
                        "facilis",
                        "laudantium",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "minima": "amet",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "PAY_AS_YOU_GO",
                    ConfigMembership: "consequatur",
                },
                Workloadcertificate: &shared.FeatureSpec{
                    DefaultConfig: &shared.MembershipSpec{
                        CertificateManagement: "ENABLED",
                    },
                    ProvisionGoogleCa: "ENABLED",
                },
            },
            State: &shared.CommonFeatureStateInput{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "CODE_UNSPECIFIED",
                        Description: "cum",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "ad": "magni",
                    "quia": "porro",
                    "nihil": "qui",
                },
                State: &shared.FeatureState{
                    Code: "OK",
                    Description: "error",
                    UpdateTime: "voluptas",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.GkehubProjectsLocationsFeaturesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->