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
                    Cloudbuild: &shared.MembershipSpec{
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
                        Management: "MANAGEMENT_MANUAL",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "a",
                            ConstraintViolationLimit: "aut",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "non": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "quidem",
                                            Memory: "neque",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "asperiores",
                                            Memory: "et",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "aliquam",
                                            Key: "esse",
                                            Operator: "totam",
                                            Value: "voluptatum",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "et",
                                            Key: "fuga",
                                            Operator: "nesciunt",
                                            Value: "laboriosam",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "aut",
                                            Key: "cum",
                                            Operator: "expedita",
                                            Value: "ipsam",
                                        },
                                    },
                                    ReplicaCount: "eos",
                                },
                                "omnis": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "adipisci",
                                            Memory: "hic",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "consequatur",
                                            Memory: "distinctio",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "perferendis",
                                            Key: "aspernatur",
                                            Operator: "fuga",
                                            Value: "quo",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "tempore",
                                            Key: "explicabo",
                                            Operator: "aut",
                                            Value: "reiciendis",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "debitis",
                                            Key: "totam",
                                            Operator: "molestias",
                                            Value: "reiciendis",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "illo",
                                            Key: "id",
                                            Operator: "qui",
                                            Value: "quod",
                                        },
                                    },
                                    ReplicaCount: "sit",
                                },
                                "eaque": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "odio",
                                            Memory: "veniam",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "reiciendis",
                                            Memory: "sed",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "exercitationem",
                                            Key: "deleniti",
                                            Operator: "sed",
                                            Value: "est",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "voluptatem",
                                            Key: "aut",
                                            Operator: "esse",
                                            Value: "sint",
                                        },
                                    },
                                    ReplicaCount: "veritatis",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "eligendi",
                            },
                            InstallSpec: "INSTALL_SPEC_ENABLED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "CLOUD_MONITORING",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "sint": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "et",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "vitae": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "minima",
                                            "voluptatem",
                                            "aut",
                                            "libero",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "magni": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "porro",
                                            "voluptas",
                                            "nostrum",
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
                        Version: "sit",
                    },
                },
                "in": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "officia",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "voluptatem",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "dolorem",
                                HTTPSProxy: "eum",
                                PolicyDir: "quis",
                                SecretType: "consequatur",
                                SyncBranch: "ratione",
                                SyncRepo: "cum",
                                SyncRev: "similique",
                                SyncWaitSecs: "enim",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "nihil",
                                PolicyDir: "id",
                                SecretType: "quis",
                                SyncRepo: "sapiente",
                                SyncWaitSecs: "et",
                            },
                            PreventDrift: false,
                            SourceFormat: "dolore",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "possimus",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "qui",
                                "deserunt",
                                "eveniet",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "CLOUD_MONITORING",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "tenetur",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "ducimus": "ducimus",
                        "nulla": "reiciendis",
                        "cumque": "fugit",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "voluptas",
                                    ClientSecret: "vel",
                                    KubectlRedirectURI: "velit",
                                    Tenant: "qui",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "cum",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "aut",
                                    ClientID: "magnam",
                                    ClientSecret: "culpa",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "enim",
                                    GroupPrefix: "aut",
                                    GroupsClaim: "delectus",
                                    IssuerURI: "eligendi",
                                    KubectlRedirectURI: "officia",
                                    Scopes: "est",
                                    UserClaim: "distinctio",
                                    UserPrefix: "et",
                                },
                                Proxy: "provident",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "a",
                                    ClientSecret: "incidunt",
                                    KubectlRedirectURI: "facilis",
                                    Tenant: "qui",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "nihil",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "dolorum",
                                    ClientID: "id",
                                    ClientSecret: "voluptatum",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "sit",
                                    GroupPrefix: "rem",
                                    GroupsClaim: "corporis",
                                    IssuerURI: "porro",
                                    KubectlRedirectURI: "distinctio",
                                    Scopes: "quis",
                                    UserClaim: "nostrum",
                                    UserPrefix: "eum",
                                },
                                Proxy: "et",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "MANUAL",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "debitis",
                            ConstraintViolationLimit: "dolores",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "ullam": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "explicabo",
                                            Memory: "similique",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "ex",
                                            Memory: "deserunt",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "in",
                                            Key: "aperiam",
                                            Operator: "et",
                                            Value: "ut",
                                        },
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
                                    },
                                    ReplicaCount: "iusto",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "saepe",
                                "quaerat",
                                "aut",
                                "sed",
                            },
                            InstallSpec: "INSTALL_SPEC_ENABLED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "aliquid": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "totam",
                                            "repellat",
                                            "voluptas",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                    "et": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "eaque",
                                            "neque",
                                            "molestias",
                                            "et",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                    "quia": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "pariatur",
                                            "et",
                                            "consequatur",
                                            "velit",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "eos": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "aperiam",
                                            "quasi",
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
                        Version: "optio",
                    },
                },
                "quis": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "qui",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "quisquam",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "ab",
                                HTTPSProxy: "et",
                                PolicyDir: "consequatur",
                                SecretType: "aut",
                                SyncBranch: "sit",
                                SyncRepo: "vero",
                                SyncRev: "incidunt",
                                SyncWaitSecs: "aut",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "voluptas",
                                PolicyDir: "ea",
                                SecretType: "rerum",
                                SyncRepo: "qui",
                                SyncWaitSecs: "placeat",
                            },
                            PreventDrift: false,
                            SourceFormat: "ipsum",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "laboriosam",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "corrupti",
                                "illo",
                                "laboriosam",
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
                        Version: "sit",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "autem": "laudantium",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "officiis",
                                    ClientSecret: "nisi",
                                    KubectlRedirectURI: "rerum",
                                    Tenant: "non",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "est",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "nihil",
                                    ClientID: "mollitia",
                                    ClientSecret: "doloremque",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "repellendus",
                                    GroupPrefix: "dolorem",
                                    GroupsClaim: "et",
                                    IssuerURI: "dolorum",
                                    KubectlRedirectURI: "ab",
                                    Scopes: "in",
                                    UserClaim: "cumque",
                                    UserPrefix: "labore",
                                },
                                Proxy: "asperiores",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "MANUAL",
                        Management: "MANAGEMENT_UNSPECIFIED",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "laborum",
                            ConstraintViolationLimit: "soluta",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "et": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "officia",
                                            Memory: "placeat",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "qui",
                                            Memory: "delectus",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "iste",
                                            Key: "in",
                                            Operator: "non",
                                            Value: "non",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "modi",
                                            Key: "amet",
                                            Operator: "eius",
                                            Value: "rerum",
                                        },
                                    },
                                    ReplicaCount: "similique",
                                },
                                "quod": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "qui",
                                            Memory: "quos",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "ut",
                                            Memory: "tempora",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "aliquam",
                                            Key: "dicta",
                                            Operator: "inventore",
                                            Value: "inventore",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "iusto",
                                            Key: "corrupti",
                                            Operator: "enim",
                                            Value: "aut",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "optio",
                                            Key: "reiciendis",
                                            Operator: "vel",
                                            Value: "et",
                                        },
                                    },
                                    ReplicaCount: "dolor",
                                },
                                "perspiciatis": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "accusantium",
                                            Memory: "at",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "et",
                                            Memory: "maxime",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "deleniti",
                                            Key: "qui",
                                            Operator: "cum",
                                            Value: "sed",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "est",
                                            Key: "eveniet",
                                            Operator: "quo",
                                            Value: "doloribus",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "totam",
                                            Key: "eius",
                                            Operator: "blanditiis",
                                            Value: "nam",
                                        },
                                    },
                                    ReplicaCount: "et",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "eos",
                                "voluptatem",
                            },
                            InstallSpec: "INSTALL_SPEC_UNSPECIFIED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "CLOUD_MONITORING",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "CLOUD_MONITORING",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
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
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "UPDATING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "incidunt": map[string]interface{}{
                    "aut": "aliquam",
                    "ipsam": "numquam",
                    "a": "occaecati",
                },
                "rem": map[string]interface{}{
                    "quo": "quia",
                },
                "sequi": map[string]interface{}{
                    "qui": "autem",
                    "facilis": "laudantium",
                },
                "numquam": map[string]interface{}{
                    "amet": "officia",
                    "consequatur": "et",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "placeat",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "cum": "sint",
                },
                Fleetobservability: map[string]interface{}{
                    "magni": "quia",
                    "porro": "nihil",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "PAY_AS_YOU_GO",
                    ConfigMembership: "laudantium",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "FAILED",
                        Description: "voluptas",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "quia": "ratione",
                },
                State: &shared.FeatureState{
                    Code: "CODE_UNSPECIFIED",
                    Description: "corrupti",
                    UpdateTime: "consequuntur",
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