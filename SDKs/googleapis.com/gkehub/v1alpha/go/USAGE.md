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
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: false,
                                    Installation: "NOT_INSTALLED",
                                },
                            },
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                                Installation: "NOT_INSTALLED",
                            },
                        },
                        Version: "reiciendis",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
                    },
                },
                "id": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "qui",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "PRIVILEGED",
                        Version: "sit",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "eaque",
                                HTTPSProxy: "odio",
                                PolicyDir: "veniam",
                                SecretType: "reiciendis",
                                SyncBranch: "sed",
                                SyncRepo: "ea",
                                SyncRev: "exercitationem",
                                SyncWaitSecs: "deleniti",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "sed",
                                PolicyDir: "est",
                                SecretType: "voluptatem",
                                SyncRepo: "aut",
                                SyncWaitSecs: "esse",
                            },
                            PreventDrift: false,
                            SourceFormat: "sint",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "veritatis",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "eligendi",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                    "CLOUD_MONITORING",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "molestias",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "sint": "explicabo",
                        "et": "in",
                        "vitae": "non",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "voluptatem",
                                    ClientSecret: "aut",
                                    KubectlRedirectURI: "libero",
                                    Tenant: "voluptas",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "magni",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "est",
                                    ClientID: "porro",
                                    ClientSecret: "voluptas",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "nostrum",
                                    GroupPrefix: "voluptatem",
                                    GroupsClaim: "sit",
                                    IssuerURI: "in",
                                    KubectlRedirectURI: "officia",
                                    Scopes: "omnis",
                                    UserClaim: "voluptatem",
                                    UserPrefix: "dolorem",
                                },
                                Proxy: "eum",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "quis",
                                    ClientSecret: "consequatur",
                                    KubectlRedirectURI: "ratione",
                                    Tenant: "cum",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "similique",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "enim",
                                    ClientID: "nihil",
                                    ClientSecret: "id",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "quis",
                                    GroupPrefix: "sapiente",
                                    GroupsClaim: "et",
                                    IssuerURI: "dolore",
                                    KubectlRedirectURI: "possimus",
                                    Scopes: "in",
                                    UserClaim: "qui",
                                    UserPrefix: "deserunt",
                                },
                                Proxy: "eveniet",
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
                            AuditIntervalSeconds: "necessitatibus",
                            ConstraintViolationLimit: "tenetur",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "ducimus": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "ducimus",
                                            Memory: "nulla",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "reiciendis",
                                            Memory: "cumque",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "ullam",
                                            Key: "voluptas",
                                            Operator: "vel",
                                            Value: "velit",
                                        },
                                    },
                                    ReplicaCount: "qui",
                                },
                                "cum": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "aut",
                                            Memory: "magnam",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "culpa",
                                            Memory: "enim",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "delectus",
                                            Key: "eligendi",
                                            Operator: "officia",
                                            Value: "est",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "distinctio",
                                            Key: "et",
                                            Operator: "provident",
                                            Value: "a",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "incidunt",
                                            Key: "facilis",
                                            Operator: "qui",
                                            Value: "nihil",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "dolorum",
                                            Key: "id",
                                            Operator: "voluptatum",
                                            Value: "sit",
                                        },
                                    },
                                    ReplicaCount: "rem",
                                },
                                "corporis": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "porro",
                                            Memory: "distinctio",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "quis",
                                            Memory: "nostrum",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "et",
                                            Key: "placeat",
                                            Operator: "molestiae",
                                            Value: "debitis",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "dolores",
                                            Key: "aut",
                                            Operator: "ullam",
                                            Value: "explicabo",
                                        },
                                    },
                                    ReplicaCount: "similique",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "deserunt",
                                "omnis",
                            },
                            InstallSpec: "INSTALL_SPEC_ENABLED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "et": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "et",
                                            "modi",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "qui": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "aspernatur",
                                            "iusto",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "saepe": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "aut",
                                            "sed",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "ducimus": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "aspernatur",
                                        },
                                        Management: "INSTALLED",
                                    },
                                },
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: false,
                                    Installation: "NOT_INSTALLED",
                                },
                            },
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                                Installation: "ALL",
                            },
                        },
                        Version: "totam",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "ENABLED",
                    },
                },
                "voluptas": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "voluptatem",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "PRIVILEGED",
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
                                GcpServiceAccountEmail: "eaque",
                                HTTPSProxy: "neque",
                                PolicyDir: "molestias",
                                SecretType: "et",
                                SyncBranch: "dolorem",
                                SyncRepo: "quia",
                                SyncRev: "omnis",
                                SyncWaitSecs: "pariatur",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "et",
                                PolicyDir: "consequatur",
                                SecretType: "velit",
                                SyncRepo: "similique",
                                SyncWaitSecs: "eos",
                            },
                            PreventDrift: false,
                            SourceFormat: "voluptate",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "aperiam",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "voluptatibus",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "quisquam",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "et": "consequatur",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "sit",
                                    ClientSecret: "vero",
                                    KubectlRedirectURI: "incidunt",
                                    Tenant: "aut",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "voluptas",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "ea",
                                    ClientID: "rerum",
                                    ClientSecret: "qui",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "placeat",
                                    GroupPrefix: "ipsum",
                                    GroupsClaim: "laboriosam",
                                    IssuerURI: "occaecati",
                                    KubectlRedirectURI: "corrupti",
                                    Scopes: "illo",
                                    UserClaim: "laboriosam",
                                    UserPrefix: "velit",
                                },
                                Proxy: "dolor",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "sit",
                                    ClientSecret: "ipsum",
                                    KubectlRedirectURI: "autem",
                                    Tenant: "laudantium",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "modi",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "officiis",
                                    ClientID: "nisi",
                                    ClientSecret: "rerum",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "non",
                                    GroupPrefix: "est",
                                    GroupsClaim: "nihil",
                                    IssuerURI: "mollitia",
                                    KubectlRedirectURI: "doloremque",
                                    Scopes: "repellendus",
                                    UserClaim: "dolorem",
                                    UserPrefix: "et",
                                },
                                Proxy: "dolorum",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "ab",
                                    ClientSecret: "in",
                                    KubectlRedirectURI: "cumque",
                                    Tenant: "labore",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "asperiores",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "recusandae",
                                    ClientID: "ut",
                                    ClientSecret: "laborum",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "soluta",
                                    GroupPrefix: "sed",
                                    GroupsClaim: "et",
                                    IssuerURI: "officia",
                                    KubectlRedirectURI: "placeat",
                                    Scopes: "qui",
                                    UserClaim: "delectus",
                                    UserPrefix: "enim",
                                },
                                Proxy: "iste",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "in",
                                    ClientSecret: "non",
                                    KubectlRedirectURI: "non",
                                    Tenant: "modi",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "amet",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "eius",
                                    ClientID: "rerum",
                                    ClientSecret: "similique",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "quod",
                                    GroupPrefix: "qui",
                                    GroupsClaim: "quos",
                                    IssuerURI: "ut",
                                    KubectlRedirectURI: "tempora",
                                    Scopes: "soluta",
                                    UserClaim: "aliquam",
                                    UserPrefix: "dicta",
                                },
                                Proxy: "inventore",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
                        DefaultChannel: "RAPID",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "enim",
                            ConstraintViolationLimit: "aut",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "reiciendis": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "vel",
                                            Memory: "et",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "dolor",
                                            Memory: "perspiciatis",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "at",
                                            Key: "et",
                                            Operator: "maxime",
                                            Value: "soluta",
                                        },
                                    },
                                    ReplicaCount: "deleniti",
                                },
                                "qui": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "cum",
                                            Memory: "sed",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "est",
                                            Memory: "eveniet",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "doloribus",
                                            Key: "totam",
                                            Operator: "eius",
                                            Value: "blanditiis",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "nam",
                                            Key: "et",
                                            Operator: "voluptatem",
                                            Value: "eos",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "voluptatem",
                                            Key: "incidunt",
                                            Operator: "possimus",
                                            Value: "aut",
                                        },
                                    },
                                    ReplicaCount: "voluptatem",
                                },
                                "et": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "eum",
                                            Memory: "facilis",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "officia",
                                            Memory: "quia",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "occaecati",
                                            Key: "et",
                                            Operator: "alias",
                                            Value: "officiis",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "enim",
                                            Key: "ad",
                                            Operator: "nihil",
                                            Value: "quibusdam",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "rerum",
                                            Key: "amet",
                                            Operator: "soluta",
                                            Value: "tenetur",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "blanditiis",
                                            Key: "est",
                                            Operator: "atque",
                                            Value: "numquam",
                                        },
                                    },
                                    ReplicaCount: "temporibus",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "incidunt",
                                "qui",
                                "aut",
                                "aliquam",
                            },
                            InstallSpec: "INSTALL_SPEC_NOT_INSTALLED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "CLOUD_MONITORING",
                                },
                            },
                            MutationEnabled: false,
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "rem": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "quo",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                    "sequi": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "qui",
                                            "autem",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "laudantium": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "minima",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                },
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: false,
                                    Installation: "NOT_INSTALLED",
                                },
                            },
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                                Installation: "ALL",
                            },
                        },
                        Version: "et",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "ENABLED",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "STATE_UNSPECIFIED",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "sint": map[string]interface{}{
                    "magni": "quia",
                    "porro": "nihil",
                },
                "qui": map[string]interface{}{
                    "error": "voluptas",
                    "sit": "quia",
                },
                "ratione": map[string]interface{}{
                    "corrupti": "consequuntur",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "ex",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "earum": "doloremque",
                    "voluptas": "placeat",
                    "placeat": "explicabo",
                },
                Cloudauditlogging: &shared.CloudAuditLoggingFeatureSpec{
                    AllowlistedServiceAccounts: []string{
                        "eius",
                        "vitae",
                        "placeat",
                        "omnis",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "qui": "quae",
                    "sapiente": "non",
                    "nostrum": "quis",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "BILLING_UNSPECIFIED",
                    ConfigMembership: "cum",
                },
                Workloadcertificate: &shared.FeatureSpec{
                    DefaultConfig: &shared.MembershipSpec{
                        CertificateManagement: "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
                    },
                    ProvisionGoogleCa: "GOOGLE_CA_PROVISIONING_UNSPECIFIED",
                },
            },
            State: &shared.CommonFeatureStateInput{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "CODE_UNSPECIFIED",
                        Description: "iste",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "aut": "libero",
                    "fugiat": "repellendus",
                    "maiores": "veniam",
                    "nihil": "officia",
                },
                State: &shared.FeatureState{
                    Code: "CODE_UNSPECIFIED",
                    Description: "veritatis",
                    UpdateTime: "excepturi",
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