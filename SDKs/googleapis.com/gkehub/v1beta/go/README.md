# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/gkehub/v1beta/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: false,
                                    Installation: "INSTALLATION_UNSPECIFIED",
                                },
                            },
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                                Installation: "NOT_INSTALLED",
                            },
                        },
                        Version: "officia",
                    },
                },
                "omnis": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "voluptatem",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "SECURITY_POLICY_UNSPECIFIED",
                        Version: "eum",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "quis",
                                HTTPSProxy: "consequatur",
                                PolicyDir: "ratione",
                                SecretType: "cum",
                                SyncBranch: "similique",
                                SyncRepo: "enim",
                                SyncRev: "nihil",
                                SyncWaitSecs: "id",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "quis",
                                PolicyDir: "sapiente",
                                SecretType: "et",
                                SyncRepo: "dolore",
                                SyncWaitSecs: "possimus",
                            },
                            PreventDrift: false,
                            SourceFormat: "in",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "qui",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "eveniet",
                                "sunt",
                                "rerum",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
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
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: false,
                                    Installation: "ALL",
                                },
                            },
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                                Installation: "NOT_INSTALLED",
                            },
                        },
                        Version: "qui",
                    },
                },
                "quam": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "quisquam",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "SECURITY_POLICY_UNSPECIFIED",
                        Version: "et",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "consequatur",
                                HTTPSProxy: "aut",
                                PolicyDir: "sit",
                                SecretType: "vero",
                                SyncBranch: "incidunt",
                                SyncRepo: "aut",
                                SyncRev: "voluptas",
                                SyncWaitSecs: "ea",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "rerum",
                                PolicyDir: "qui",
                                SecretType: "placeat",
                                SyncRepo: "ipsum",
                                SyncWaitSecs: "laboriosam",
                            },
                            PreventDrift: false,
                            SourceFormat: "occaecati",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "corrupti",
                            Enabled: false,
                            ExemptableNamespaces: []string{
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
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: false,
                                    Installation: "INSTALLATION_UNSPECIFIED",
                                },
                            },
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                                Installation: "ALL",
                            },
                        },
                        Version: "rerum",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "ENABLING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "aut": map[string]interface{}{
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
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "numquam",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "amet": "officia",
                    "consequatur": "et",
                },
                Fleetobservability: map[string]interface{}{
                    "sed": "cum",
                    "sint": "ad",
                    "magni": "quia",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "ANTHOS_LICENSE",
                    ConfigMembership: "nihil",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "OK",
                        Description: "laudantium",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "voluptas": "sit",
                    "quia": "ratione",
                    "dolorem": "corrupti",
                },
                State: &shared.FeatureState{
                    Code: "CODE_UNSPECIFIED",
                    Description: "ex",
                    UpdateTime: "quisquam",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Projects

* `GkehubProjectsLocationsFeaturesCreate` - Adds a new Feature.
* `GkehubProjectsLocationsFeaturesList` - Lists Features in a given project and location.
* `GkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `GkehubProjectsLocationsMembershipsBindingsCreate` - Creates a MembershipBinding.
* `GkehubProjectsLocationsMembershipsBindingsList` - Lists MembershipBindings.
* `GkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `GkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `GkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `GkehubProjectsLocationsNamespacesCreate` - Creates a fleet namespace.
* `GkehubProjectsLocationsNamespacesList` - Lists fleet namespaces.
* `GkehubProjectsLocationsNamespacesRbacrolebindingsCreate` - Creates a RBACRoleBinding.
* `GkehubProjectsLocationsNamespacesRbacrolebindingsList` - Lists RBACRoleBinding.
* `GkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `GkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `GkehubProjectsLocationsScopesCreate` - Creates a Scope.
* `GkehubProjectsLocationsScopesDelete` - Deletes a Scope.
* `GkehubProjectsLocationsScopesGet` - Returns the details of a Scope.
* `GkehubProjectsLocationsScopesList` - Lists Scopes.
* `GkehubProjectsLocationsScopesPatch` - Updates a scopes.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
