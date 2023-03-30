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
            Parent: "corrupti",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            FeatureID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
        Request: &shared.FeatureInput{
            FleetDefaultMemberConfig: &shared.CommonFleetDefaultMemberConfigSpecInput{
                Identityservice: &shared.IdentityServiceMembershipSpecInput{
                    AuthMethods: []shared.IdentityServiceAuthMethodInput{
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: "debitis",
                                ClientSecret: "ipsa",
                                KubectlRedirectURI: "delectus",
                                Tenant: "tempora",
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: false,
                            },
                            Name: "suscipit",
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: "molestiae",
                                ClientID: "minus",
                                ClientSecret: "placeat",
                                DeployCloudConsoleProxy: false,
                                EnableAccessToken: false,
                                ExtraParams: "voluptatum",
                                GroupPrefix: "iusto",
                                GroupsClaim: "excepturi",
                                IssuerURI: "nisi",
                                KubectlRedirectURI: "recusandae",
                                Scopes: "temporibus",
                                UserClaim: "ab",
                                UserPrefix: "quis",
                            },
                            Proxy: "veritatis",
                        },
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: "deserunt",
                                ClientSecret: "perferendis",
                                KubectlRedirectURI: "ipsam",
                                Tenant: "repellendus",
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: false,
                            },
                            Name: "sapiente",
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: "quo",
                                ClientID: "odit",
                                ClientSecret: "at",
                                DeployCloudConsoleProxy: false,
                                EnableAccessToken: false,
                                ExtraParams: "at",
                                GroupPrefix: "maiores",
                                GroupsClaim: "molestiae",
                                IssuerURI: "quod",
                                KubectlRedirectURI: "quod",
                                Scopes: "esse",
                                UserClaim: "totam",
                                UserPrefix: "porro",
                            },
                            Proxy: "dolorum",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "nam": "officia",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "fugit": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "deleniti",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "PRIVILEGED",
                        Version: "optio",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "totam",
                                HTTPSProxy: "beatae",
                                PolicyDir: "commodi",
                                SecretType: "molestiae",
                                SyncBranch: "modi",
                                SyncRepo: "qui",
                                SyncRev: "impedit",
                                SyncWaitSecs: "cum",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "esse",
                                PolicyDir: "ipsum",
                                SecretType: "excepturi",
                                SyncRepo: "aspernatur",
                                SyncWaitSecs: "perferendis",
                            },
                            PreventDrift: false,
                            SourceFormat: "ad",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "natus",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "iste",
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
                        Version: "laboriosam",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "saepe": "fuga",
                        "in": "corporis",
                        "iste": "iure",
                        "saepe": "quidem",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "ipsa",
                                    ClientSecret: "reiciendis",
                                    KubectlRedirectURI: "est",
                                    Tenant: "mollitia",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "laborum",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "dolores",
                                    ClientID: "dolorem",
                                    ClientSecret: "corporis",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "explicabo",
                                    GroupPrefix: "nobis",
                                    GroupsClaim: "enim",
                                    IssuerURI: "omnis",
                                    KubectlRedirectURI: "nemo",
                                    Scopes: "minima",
                                    UserClaim: "excepturi",
                                    UserPrefix: "accusantium",
                                },
                                Proxy: "iure",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_MANUAL",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "sapiente",
                            ConstraintViolationLimit: "architecto",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "dolorem": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "culpa",
                                            Memory: "consequuntur",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "repellat",
                                            Memory: "mollitia",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "numquam",
                                            Key: "commodi",
                                            Operator: "quam",
                                            Value: "molestiae",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "velit",
                                            Key: "error",
                                            Operator: "quia",
                                            Value: "quis",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "vitae",
                                            Key: "laborum",
                                            Operator: "animi",
                                            Value: "enim",
                                        },
                                    },
                                    ReplicaCount: "odit",
                                },
                                "quo": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "sequi",
                                            Memory: "tenetur",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "ipsam",
                                            Memory: "id",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "aut",
                                            Key: "quasi",
                                            Operator: "error",
                                            Value: "temporibus",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "laborum",
                                            Key: "quasi",
                                            Operator: "reiciendis",
                                            Value: "voluptatibus",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "vero",
                                            Key: "nihil",
                                            Operator: "praesentium",
                                            Value: "voluptatibus",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "ipsa",
                                            Key: "omnis",
                                            Operator: "voluptate",
                                            Value: "cum",
                                        },
                                    },
                                    ReplicaCount: "perferendis",
                                },
                                "doloremque": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "reprehenderit",
                                            Memory: "ut",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "maiores",
                                            Memory: "dicta",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "dolore",
                                            Key: "iusto",
                                            Operator: "dicta",
                                            Value: "harum",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "enim",
                                            Key: "accusamus",
                                            Operator: "commodi",
                                            Value: "repudiandae",
                                        },
                                    },
                                    ReplicaCount: "quae",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "quidem",
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
                                    "voluptates": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "repudiandae",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "veritatis": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "incidunt",
                                            "enim",
                                            "consequatur",
                                            "est",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "explicabo": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "distinctio",
                                            "quibusdam",
                                            "labore",
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
                        Version: "cupiditate",
                    },
                },
                "quos": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "perferendis",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "SECURITY_POLICY_UNSPECIFIED",
                        Version: "assumenda",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "ipsam",
                                HTTPSProxy: "alias",
                                PolicyDir: "fugit",
                                SecretType: "dolorum",
                                SyncBranch: "excepturi",
                                SyncRepo: "tempora",
                                SyncRev: "facilis",
                                SyncWaitSecs: "tempore",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "labore",
                                PolicyDir: "delectus",
                                SecretType: "eum",
                                SyncRepo: "non",
                                SyncWaitSecs: "eligendi",
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
                            AuditIntervalSeconds: "aliquid",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "necessitatibus",
                                "sint",
                                "officia",
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
                        Version: "a",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "in": "in",
                        "illum": "maiores",
                        "rerum": "dicta",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "cumque",
                                    ClientSecret: "facere",
                                    KubectlRedirectURI: "ea",
                                    Tenant: "aliquid",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "laborum",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "accusamus",
                                    ClientID: "non",
                                    ClientSecret: "occaecati",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "enim",
                                    GroupPrefix: "accusamus",
                                    GroupsClaim: "delectus",
                                    IssuerURI: "quidem",
                                    KubectlRedirectURI: "provident",
                                    Scopes: "nam",
                                    UserClaim: "id",
                                    UserPrefix: "blanditiis",
                                },
                                Proxy: "deleniti",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "sapiente",
                                    ClientSecret: "amet",
                                    KubectlRedirectURI: "deserunt",
                                    Tenant: "nisi",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "vel",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "natus",
                                    ClientID: "omnis",
                                    ClientSecret: "molestiae",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "perferendis",
                                    GroupPrefix: "nihil",
                                    GroupsClaim: "magnam",
                                    IssuerURI: "distinctio",
                                    KubectlRedirectURI: "id",
                                    Scopes: "labore",
                                    UserClaim: "labore",
                                    UserPrefix: "suscipit",
                                },
                                Proxy: "natus",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "MANUAL",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "vero",
                            ConstraintViolationLimit: "aspernatur",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "magnam": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "et",
                                            Memory: "excepturi",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "ullam",
                                            Memory: "provident",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "sint",
                                            Key: "accusantium",
                                            Operator: "mollitia",
                                            Value: "reiciendis",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "mollitia",
                                            Key: "ad",
                                            Operator: "eum",
                                            Value: "dolor",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "necessitatibus",
                                            Key: "odit",
                                            Operator: "nemo",
                                            Value: "quasi",
                                        },
                                    },
                                    ReplicaCount: "iure",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "debitis",
                                "eius",
                                "maxime",
                                "deleniti",
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
                                    "ullam": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "nihil",
                                            "repellat",
                                            "quibusdam",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                    "saepe": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "accusantium",
                                            "consequuntur",
                                            "praesentium",
                                            "natus",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                    "sunt": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "illum",
                                            "pariatur",
                                            "maxime",
                                            "ea",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "odit": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "accusantium",
                                            "ab",
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
                        Version: "voluptate",
                    },
                },
                "autem": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "nam",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "SECURITY_POLICY_UNSPECIFIED",
                        Version: "pariatur",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "nemo",
                                HTTPSProxy: "voluptatibus",
                                PolicyDir: "perferendis",
                                SecretType: "fugiat",
                                SyncBranch: "amet",
                                SyncRepo: "aut",
                                SyncRev: "cumque",
                                SyncWaitSecs: "corporis",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "hic",
                                PolicyDir: "libero",
                                SecretType: "nobis",
                                SyncRepo: "dolores",
                                SyncWaitSecs: "quis",
                            },
                            PreventDrift: false,
                            SourceFormat: "totam",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "dignissimos",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "quis",
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
                        Version: "perferendis",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "minus": "quam",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "vero",
                                    ClientSecret: "nostrum",
                                    KubectlRedirectURI: "hic",
                                    Tenant: "recusandae",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "omnis",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "facilis",
                                    ClientID: "perspiciatis",
                                    ClientSecret: "voluptatem",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "porro",
                                    GroupPrefix: "consequuntur",
                                    GroupsClaim: "blanditiis",
                                    IssuerURI: "error",
                                    KubectlRedirectURI: "eaque",
                                    Scopes: "occaecati",
                                    UserClaim: "rerum",
                                    UserPrefix: "adipisci",
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
                            AuditIntervalSeconds: "iste",
                            ConstraintViolationLimit: "dolorum",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "pariatur": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "provident",
                                            Memory: "nobis",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "libero",
                                            Memory: "delectus",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "quos",
                                            Key: "aliquid",
                                            Operator: "dolorem",
                                            Value: "dolorem",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "dolor",
                                            Key: "qui",
                                            Operator: "ipsum",
                                            Value: "hic",
                                        },
                                    },
                                    ReplicaCount: "excepturi",
                                },
                                "cum": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "voluptate",
                                            Memory: "dignissimos",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "reiciendis",
                                            Memory: "amet",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "numquam",
                                            Key: "veritatis",
                                            Operator: "ipsa",
                                            Value: "ipsa",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "iure",
                                            Key: "odio",
                                            Operator: "quaerat",
                                            Value: "accusamus",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "quidem",
                                            Key: "voluptatibus",
                                            Operator: "voluptas",
                                            Value: "natus",
                                        },
                                    },
                                    ReplicaCount: "eos",
                                },
                                "atque": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "sit",
                                            Memory: "fugiat",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "ab",
                                            Memory: "soluta",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "iusto",
                                            Key: "voluptate",
                                            Operator: "dolorum",
                                            Value: "deleniti",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "omnis",
                                            Key: "necessitatibus",
                                            Operator: "distinctio",
                                            Value: "asperiores",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "nihil",
                                            Key: "ipsum",
                                            Operator: "voluptate",
                                            Value: "id",
                                        },
                                    },
                                    ReplicaCount: "saepe",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "aspernatur",
                                "perferendis",
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
                                    "provident": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "repellendus",
                                            "totam",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "alias": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "quaerat",
                                            "tempora",
                                            "vel",
                                            "quod",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "qui": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "a",
                                            "esse",
                                            "harum",
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
                        Version: "tenetur",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "ENABLING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "accusamus": map[string]interface{}{
                    "enim": "dolorem",
                    "sapiente": "totam",
                },
                "nihil": map[string]interface{}{
                    "expedita": "neque",
                },
                "sed": map[string]interface{}{
                    "libero": "voluptas",
                    "deserunt": "quam",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "ipsum",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "qui": "cupiditate",
                    "maxime": "pariatur",
                },
                Fleetobservability: map[string]interface{}{
                    "dicta": "laborum",
                    "totam": "incidunt",
                    "aspernatur": "dolores",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "ANTHOS_LICENSE",
                    ConfigMembership: "facilis",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "OK",
                        Description: "quam",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "temporibus": "qui",
                    "neque": "fugit",
                    "magni": "odio",
                },
                State: &shared.FeatureState{
                    Code: "CODE_UNSPECIFIED",
                    Description: "ullam",
                    UpdateTime: "nam",
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