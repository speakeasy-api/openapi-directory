# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/gkehub/v1alpha/go
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
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
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
                        DefaultChannel: "STABLE",
                        Management: "MANAGEMENT_MANUAL",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "architecto",
                            ConstraintViolationLimit: "mollitia",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "culpa": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "consequuntur",
                                            Memory: "repellat",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "mollitia",
                                            Memory: "occaecati",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "commodi",
                                            Key: "quam",
                                            Operator: "molestiae",
                                            Value: "velit",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "error",
                                            Key: "quia",
                                            Operator: "quis",
                                            Value: "vitae",
                                        },
                                    },
                                    ReplicaCount: "laborum",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "enim",
                                "odit",
                                "quo",
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
                                    "error": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "laborum",
                                            "quasi",
                                            "reiciendis",
                                            "voluptatibus",
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
                        Version: "voluptatibus",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
                    },
                },
                "omnis": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "voluptate",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "PRIVILEGED",
                        Version: "perferendis",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "doloremque",
                                HTTPSProxy: "reprehenderit",
                                PolicyDir: "ut",
                                SecretType: "maiores",
                                SyncBranch: "dicta",
                                SyncRepo: "corporis",
                                SyncRev: "dolore",
                                SyncWaitSecs: "iusto",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "dicta",
                                PolicyDir: "harum",
                                SecretType: "enim",
                                SyncRepo: "accusamus",
                                SyncWaitSecs: "commodi",
                            },
                            PreventDrift: false,
                            SourceFormat: "repudiandae",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "quae",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "quidem",
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
                        Version: "praesentium",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "voluptates": "quasi",
                        "repudiandae": "sint",
                        "veritatis": "itaque",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "enim",
                                    ClientSecret: "consequatur",
                                    KubectlRedirectURI: "est",
                                    Tenant: "quibusdam",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "explicabo",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "deserunt",
                                    ClientID: "distinctio",
                                    ClientSecret: "quibusdam",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "labore",
                                    GroupPrefix: "modi",
                                    GroupsClaim: "qui",
                                    IssuerURI: "aliquid",
                                    KubectlRedirectURI: "cupiditate",
                                    Scopes: "quos",
                                    UserClaim: "perferendis",
                                    UserPrefix: "magni",
                                },
                                Proxy: "assumenda",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "ipsam",
                                    ClientSecret: "alias",
                                    KubectlRedirectURI: "fugit",
                                    Tenant: "dolorum",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "excepturi",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "tempora",
                                    ClientID: "facilis",
                                    ClientSecret: "tempore",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "labore",
                                    GroupPrefix: "delectus",
                                    GroupsClaim: "eum",
                                    IssuerURI: "non",
                                    KubectlRedirectURI: "eligendi",
                                    Scopes: "sint",
                                    UserClaim: "aliquid",
                                    UserPrefix: "provident",
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
                            AuditIntervalSeconds: "debitis",
                            ConstraintViolationLimit: "a",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "in": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "in",
                                            Memory: "illum",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "maiores",
                                            Memory: "rerum",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "magnam",
                                            Key: "cumque",
                                            Operator: "facere",
                                            Value: "ea",
                                        },
                                    },
                                    ReplicaCount: "aliquid",
                                },
                                "laborum": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "accusamus",
                                            Memory: "non",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "occaecati",
                                            Memory: "enim",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "delectus",
                                            Key: "quidem",
                                            Operator: "provident",
                                            Value: "nam",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "id",
                                            Key: "blanditiis",
                                            Operator: "deleniti",
                                            Value: "sapiente",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "amet",
                                            Key: "deserunt",
                                            Operator: "nisi",
                                            Value: "vel",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "natus",
                                            Key: "omnis",
                                            Operator: "molestiae",
                                            Value: "perferendis",
                                        },
                                    },
                                    ReplicaCount: "nihil",
                                },
                                "magnam": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "distinctio",
                                            Memory: "id",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "labore",
                                            Memory: "labore",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "natus",
                                            Key: "nobis",
                                            Operator: "eum",
                                            Value: "vero",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "aspernatur",
                                            Key: "architecto",
                                            Operator: "magnam",
                                            Value: "et",
                                        },
                                    },
                                    ReplicaCount: "excepturi",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "provident",
                                "quos",
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
                                    "mollitia": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "eum",
                                            "dolor",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "odit": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "quasi",
                                            "iure",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "debitis": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "maxime",
                                            "deleniti",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "in": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "architecto",
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
                        Version: "nihil",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "ENABLED",
                    },
                },
                "quibusdam": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "sed",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "PRIVILEGED",
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
                                GcpServiceAccountEmail: "accusantium",
                                HTTPSProxy: "consequuntur",
                                PolicyDir: "praesentium",
                                SecretType: "natus",
                                SyncBranch: "magni",
                                SyncRepo: "sunt",
                                SyncRev: "quo",
                                SyncWaitSecs: "illum",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "pariatur",
                                PolicyDir: "maxime",
                                SecretType: "ea",
                                SyncRepo: "excepturi",
                                SyncWaitSecs: "odit",
                            },
                            PreventDrift: false,
                            SourceFormat: "ea",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "accusantium",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "maiores",
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
                        Version: "nam",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "pariatur": "nemo",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "perferendis",
                                    ClientSecret: "fugiat",
                                    KubectlRedirectURI: "amet",
                                    Tenant: "aut",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "cumque",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "corporis",
                                    ClientID: "hic",
                                    ClientSecret: "libero",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "nobis",
                                    GroupPrefix: "dolores",
                                    GroupsClaim: "quis",
                                    IssuerURI: "totam",
                                    KubectlRedirectURI: "dignissimos",
                                    Scopes: "eaque",
                                    UserClaim: "quis",
                                    UserPrefix: "nesciunt",
                                },
                                Proxy: "eos",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "perferendis",
                                    ClientSecret: "dolores",
                                    KubectlRedirectURI: "minus",
                                    Tenant: "quam",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "dolor",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "vero",
                                    ClientID: "nostrum",
                                    ClientSecret: "hic",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "recusandae",
                                    GroupPrefix: "omnis",
                                    GroupsClaim: "facilis",
                                    IssuerURI: "perspiciatis",
                                    KubectlRedirectURI: "voluptatem",
                                    Scopes: "porro",
                                    UserClaim: "consequuntur",
                                    UserPrefix: "blanditiis",
                                },
                                Proxy: "error",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "eaque",
                                    ClientSecret: "occaecati",
                                    KubectlRedirectURI: "rerum",
                                    Tenant: "adipisci",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "asperiores",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "earum",
                                    ClientID: "modi",
                                    ClientSecret: "iste",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "dolorum",
                                    GroupPrefix: "deleniti",
                                    GroupsClaim: "pariatur",
                                    IssuerURI: "provident",
                                    KubectlRedirectURI: "nobis",
                                    Scopes: "libero",
                                    UserClaim: "delectus",
                                    UserPrefix: "quaerat",
                                },
                                Proxy: "quos",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "aliquid",
                                    ClientSecret: "dolorem",
                                    KubectlRedirectURI: "dolorem",
                                    Tenant: "dolor",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "qui",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "ipsum",
                                    ClientID: "hic",
                                    ClientSecret: "excepturi",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "cum",
                                    GroupPrefix: "voluptate",
                                    GroupsClaim: "dignissimos",
                                    IssuerURI: "reiciendis",
                                    KubectlRedirectURI: "amet",
                                    Scopes: "dolorum",
                                    UserClaim: "numquam",
                                    UserPrefix: "veritatis",
                                },
                                Proxy: "ipsa",
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
                            AuditIntervalSeconds: "quaerat",
                            ConstraintViolationLimit: "accusamus",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "voluptatibus": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "voluptas",
                                            Memory: "natus",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "eos",
                                            Memory: "atque",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "fugiat",
                                            Key: "ab",
                                            Operator: "soluta",
                                            Value: "dolorum",
                                        },
                                    },
                                    ReplicaCount: "iusto",
                                },
                                "voluptate": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "dolorum",
                                            Memory: "deleniti",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "omnis",
                                            Memory: "necessitatibus",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "asperiores",
                                            Key: "nihil",
                                            Operator: "ipsum",
                                            Value: "voluptate",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "id",
                                            Key: "saepe",
                                            Operator: "eius",
                                            Value: "aspernatur",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "perferendis",
                                            Key: "amet",
                                            Operator: "optio",
                                            Value: "accusamus",
                                        },
                                    },
                                    ReplicaCount: "ad",
                                },
                                "saepe": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "suscipit",
                                            Memory: "deserunt",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "provident",
                                            Memory: "minima",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "totam",
                                            Key: "similique",
                                            Operator: "alias",
                                            Value: "at",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "quaerat",
                                            Key: "tempora",
                                            Operator: "vel",
                                            Value: "quod",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "officiis",
                                            Key: "qui",
                                            Operator: "dolorum",
                                            Value: "a",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "esse",
                                            Key: "harum",
                                            Operator: "iusto",
                                            Value: "ipsum",
                                        },
                                    },
                                    ReplicaCount: "quisquam",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "amet",
                                "tempore",
                                "accusamus",
                                "numquam",
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
                                    "nihil": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "expedita",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                    "sed": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "libero",
                                            "voluptas",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "quam": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "incidunt",
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
                        Version: "pariatur",
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
                "totam": map[string]interface{}{
                    "aspernatur": "dolores",
                    "distinctio": "facilis",
                },
                "aliquid": map[string]interface{}{
                    "molestias": "temporibus",
                    "qui": "neque",
                },
                "fugit": map[string]interface{}{
                    "odio": "sunt",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "ullam",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "hic": "voluptatem",
                    "cumque": "soluta",
                    "nobis": "et",
                },
                Cloudauditlogging: &shared.CloudAuditLoggingFeatureSpec{
                    AllowlistedServiceAccounts: []string{
                        "ipsum",
                        "veritatis",
                        "nobis",
                        "quos",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "cupiditate": "aperiam",
                    "delectus": "dolorem",
                    "dolore": "labore",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "BILLING_UNSPECIFIED",
                    ConfigMembership: "dolorum",
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
                        Description: "quas",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "consequatur": "est",
                    "repellendus": "porro",
                    "doloribus": "ut",
                    "facilis": "cupiditate",
                },
                State: &shared.FeatureState{
                    Code: "CODE_UNSPECIFIED",
                    Description: "quae",
                    UpdateTime: "laudantium",
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
* `GkehubProjectsLocationsFleetsCreate` - Creates a fleet.
* `GkehubProjectsLocationsFleetsList` - Returns all fleets within an organization or a project that the caller has access to.
* `GkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `GkehubProjectsLocationsMembershipsBindingsCreate` - Creates a MembershipBinding.
* `GkehubProjectsLocationsMembershipsBindingsList` - Lists MembershipBindings.
* `GkehubProjectsLocationsMembershipsCreate` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `GkehubProjectsLocationsMembershipsGenerateConnectManifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `GkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `GkehubProjectsLocationsMembershipsList` - Lists Memberships in a given project and location.
* `GkehubProjectsLocationsMembershipsListAdmin` - Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.
* `GkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `GkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `GkehubProjectsLocationsMembershipsValidateCreate` - ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.
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
