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
        DollarXgafv: "2",
        FeatureInput: &shared.FeatureInput{
            FleetDefaultMemberConfig: &shared.CommonFleetDefaultMemberConfigSpecInput{
                Identityservice: &shared.IdentityServiceMembershipSpecInput{
                    AuthMethods: []shared.IdentityServiceAuthMethodInput{
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: "distinctio",
                                ClientSecret: "quibusdam",
                                KubectlRedirectURI: "unde",
                                Tenant: "nulla",
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: false,
                            },
                            Name: "corrupti",
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: "illum",
                                ClientID: "vel",
                                ClientSecret: "error",
                                DeployCloudConsoleProxy: false,
                                EnableAccessToken: false,
                                ExtraParams: "deserunt",
                                GroupPrefix: "suscipit",
                                GroupsClaim: "iure",
                                IssuerURI: "magnam",
                                KubectlRedirectURI: "debitis",
                                Scopes: "ipsa",
                                UserClaim: "delectus",
                                UserPrefix: "tempora",
                            },
                            Proxy: "suscipit",
                        },
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: "molestiae",
                                ClientSecret: "minus",
                                KubectlRedirectURI: "placeat",
                                Tenant: "voluptatum",
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: false,
                            },
                            Name: "iusto",
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: "excepturi",
                                ClientID: "nisi",
                                ClientSecret: "recusandae",
                                DeployCloudConsoleProxy: false,
                                EnableAccessToken: false,
                                ExtraParams: "temporibus",
                                GroupPrefix: "ab",
                                GroupsClaim: "quis",
                                IssuerURI: "veritatis",
                                KubectlRedirectURI: "deserunt",
                                Scopes: "perferendis",
                                UserClaim: "ipsam",
                                UserPrefix: "repellendus",
                            },
                            Proxy: "sapiente",
                        },
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: "quo",
                                ClientSecret: "odit",
                                KubectlRedirectURI: "at",
                                Tenant: "at",
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: false,
                            },
                            Name: "maiores",
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: "molestiae",
                                ClientID: "quod",
                                ClientSecret: "quod",
                                DeployCloudConsoleProxy: false,
                                EnableAccessToken: false,
                                ExtraParams: "esse",
                                GroupPrefix: "totam",
                                GroupsClaim: "porro",
                                IssuerURI: "dolorum",
                                KubectlRedirectURI: "dicta",
                                Scopes: "nam",
                                UserClaim: "officia",
                                UserPrefix: "occaecati",
                            },
                            Proxy: "fugit",
                        },
                    },
                },
            },
            Labels: map[string]string{
                "hic": "optio",
                "totam": "beatae",
                "commodi": "molestiae",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "qui": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "impedit",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "PRIVILEGED",
                        Version: "esse",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "ipsum",
                                HTTPSProxy: "excepturi",
                                PolicyDir: "aspernatur",
                                SecretType: "perferendis",
                                SyncBranch: "ad",
                                SyncRepo: "natus",
                                SyncRev: "sed",
                                SyncWaitSecs: "iste",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "dolor",
                                PolicyDir: "natus",
                                SecretType: "laboriosam",
                                SyncRepo: "hic",
                                SyncWaitSecs: "saepe",
                            },
                            PreventDrift: false,
                            SourceFormat: "fuga",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "in",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "iste",
                                "iure",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "CLOUD_MONITORING",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "CLOUD_MONITORING",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "est",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "laborum": "dolores",
                        "dolorem": "corporis",
                        "explicabo": "nobis",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "omnis",
                                    ClientSecret: "nemo",
                                    KubectlRedirectURI: "minima",
                                    Tenant: "excepturi",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "accusantium",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "iure",
                                    ClientID: "culpa",
                                    ClientSecret: "doloribus",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "sapiente",
                                    GroupPrefix: "architecto",
                                    GroupsClaim: "mollitia",
                                    IssuerURI: "dolorem",
                                    KubectlRedirectURI: "culpa",
                                    Scopes: "consequuntur",
                                    UserClaim: "repellat",
                                    UserPrefix: "mollitia",
                                },
                                Proxy: "occaecati",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "numquam",
                                    ClientSecret: "commodi",
                                    KubectlRedirectURI: "quam",
                                    Tenant: "molestiae",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "velit",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "error",
                                    ClientID: "quia",
                                    ClientSecret: "quis",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "vitae",
                                    GroupPrefix: "laborum",
                                    GroupsClaim: "animi",
                                    IssuerURI: "enim",
                                    KubectlRedirectURI: "odit",
                                    Scopes: "quo",
                                    UserClaim: "sequi",
                                    UserPrefix: "tenetur",
                                },
                                Proxy: "ipsam",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        DefaultChannel: "STABLE",
                        Management: "MANAGEMENT_UNSPECIFIED",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "quasi",
                            ConstraintViolationLimit: "error",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "laborum": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "quasi",
                                            Memory: "reiciendis",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "voluptatibus",
                                            Memory: "vero",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "praesentium",
                                            Key: "voluptatibus",
                                            Operator: "ipsa",
                                            Value: "omnis",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "voluptate",
                                            Key: "cum",
                                            Operator: "perferendis",
                                            Value: "doloremque",
                                        },
                                    },
                                    ReplicaCount: "reprehenderit",
                                },
                                "ut": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "maiores",
                                            Memory: "dicta",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "corporis",
                                            Memory: "dolore",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "dicta",
                                            Key: "harum",
                                            Operator: "enim",
                                            Value: "accusamus",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "commodi",
                                            Key: "repudiandae",
                                            Operator: "quae",
                                            Value: "ipsum",
                                        },
                                    },
                                    ReplicaCount: "quidem",
                                },
                                "molestias": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "excepturi",
                                            Memory: "pariatur",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "modi",
                                            Memory: "praesentium",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "voluptates",
                                            Key: "quasi",
                                            Operator: "repudiandae",
                                            Value: "sint",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "veritatis",
                                            Key: "itaque",
                                            Operator: "incidunt",
                                            Value: "enim",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "consequatur",
                                            Key: "est",
                                            Operator: "quibusdam",
                                            Value: "explicabo",
                                        },
                                    },
                                    ReplicaCount: "deserunt",
                                },
                                "distinctio": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "quibusdam",
                                            Memory: "labore",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "modi",
                                            Memory: "qui",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "cupiditate",
                                            Key: "quos",
                                            Operator: "perferendis",
                                            Value: "magni",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "assumenda",
                                            Key: "ipsam",
                                            Operator: "alias",
                                            Value: "fugit",
                                        },
                                    },
                                    ReplicaCount: "dolorum",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "tempora",
                                "facilis",
                                "tempore",
                            },
                            InstallSpec: "INSTALL_SPEC_NOT_INSTALLED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
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
                                            "sint",
                                            "officia",
                                            "dolor",
                                            "debitis",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "dolorum": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "in",
                                            "illum",
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
                                Installation: "INSTALLATION_UNSPECIFIED",
                            },
                        },
                        Version: "magnam",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "ENABLED",
                    },
                },
                "facere": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "ea",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "laborum",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "accusamus",
                                HTTPSProxy: "non",
                                PolicyDir: "occaecati",
                                SecretType: "enim",
                                SyncBranch: "accusamus",
                                SyncRepo: "delectus",
                                SyncRev: "quidem",
                                SyncWaitSecs: "provident",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "nam",
                                PolicyDir: "id",
                                SecretType: "blanditiis",
                                SyncRepo: "deleniti",
                                SyncWaitSecs: "sapiente",
                            },
                            PreventDrift: false,
                            SourceFormat: "amet",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "deserunt",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "vel",
                                "natus",
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
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "magnam",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "id": "labore",
                        "labore": "suscipit",
                        "natus": "nobis",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "vero",
                                    ClientSecret: "aspernatur",
                                    KubectlRedirectURI: "architecto",
                                    Tenant: "magnam",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "et",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "excepturi",
                                    ClientID: "ullam",
                                    ClientSecret: "provident",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "quos",
                                    GroupPrefix: "sint",
                                    GroupsClaim: "accusantium",
                                    IssuerURI: "mollitia",
                                    KubectlRedirectURI: "reiciendis",
                                    Scopes: "mollitia",
                                    UserClaim: "ad",
                                    UserPrefix: "eum",
                                },
                                Proxy: "dolor",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "necessitatibus",
                                    ClientSecret: "odit",
                                    KubectlRedirectURI: "nemo",
                                    Tenant: "quasi",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "iure",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "doloribus",
                                    ClientID: "debitis",
                                    ClientSecret: "eius",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "maxime",
                                    GroupPrefix: "deleniti",
                                    GroupsClaim: "facilis",
                                    IssuerURI: "in",
                                    KubectlRedirectURI: "architecto",
                                    Scopes: "architecto",
                                    UserClaim: "repudiandae",
                                    UserPrefix: "ullam",
                                },
                                Proxy: "expedita",
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
                            AuditIntervalSeconds: "sed",
                            ConstraintViolationLimit: "saepe",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "accusantium": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "consequuntur",
                                            Memory: "praesentium",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "natus",
                                            Memory: "magni",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "quo",
                                            Key: "illum",
                                            Operator: "pariatur",
                                            Value: "maxime",
                                        },
                                    },
                                    ReplicaCount: "ea",
                                },
                                "excepturi": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "odit",
                                            Memory: "ea",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "accusantium",
                                            Memory: "ab",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "quidem",
                                            Key: "ipsam",
                                            Operator: "voluptate",
                                            Value: "autem",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "nam",
                                            Key: "eaque",
                                            Operator: "pariatur",
                                            Value: "nemo",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "voluptatibus",
                                            Key: "perferendis",
                                            Operator: "fugiat",
                                            Value: "amet",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "aut",
                                            Key: "cumque",
                                            Operator: "corporis",
                                            Value: "hic",
                                        },
                                    },
                                    ReplicaCount: "libero",
                                },
                                "nobis": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "dolores",
                                            Memory: "quis",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "totam",
                                            Memory: "dignissimos",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "quis",
                                            Key: "nesciunt",
                                            Operator: "eos",
                                            Value: "perferendis",
                                        },
                                    },
                                    ReplicaCount: "dolores",
                                },
                                "minus": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "quam",
                                            Memory: "dolor",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "vero",
                                            Memory: "nostrum",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "recusandae",
                                            Key: "omnis",
                                            Operator: "facilis",
                                            Value: "perspiciatis",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "voluptatem",
                                            Key: "porro",
                                            Operator: "consequuntur",
                                            Value: "blanditiis",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "error",
                                            Key: "eaque",
                                            Operator: "occaecati",
                                            Value: "rerum",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "adipisci",
                                            Key: "asperiores",
                                            Operator: "earum",
                                            Value: "modi",
                                        },
                                    },
                                    ReplicaCount: "iste",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "deleniti",
                                "pariatur",
                                "provident",
                            },
                            InstallSpec: "INSTALL_SPEC_SUSPENDED",
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
                                    "dolorem": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "dolor",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                    "ipsum": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "excepturi",
                                            "cum",
                                            "voluptate",
                                            "dignissimos",
                                        },
                                        Management: "INSTALLED",
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
                        Version: "numquam",
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
                "iure": map[string]interface{}{
                    "quaerat": "accusamus",
                    "quidem": "voluptatibus",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "voluptas",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "eos": "atque",
                    "sit": "fugiat",
                    "ab": "soluta",
                },
                Cloudauditlogging: &shared.CloudAuditLoggingFeatureSpec{
                    AllowlistedServiceAccounts: []string{
                        "iusto",
                        "voluptate",
                        "dolorum",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "omnis": "necessitatibus",
                    "distinctio": "asperiores",
                    "nihil": "ipsum",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "PAY_AS_YOU_GO",
                    ConfigMembership: "id",
                },
                Workloadcertificate: &shared.FeatureSpec{
                    DefaultConfig: &shared.MembershipSpec{
                        CertificateManagement: "ENABLED",
                    },
                    ProvisionGoogleCa: "GOOGLE_CA_PROVISIONING_UNSPECIFIED",
                },
            },
            State: &shared.CommonFeatureStateInput{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "CODE_UNSPECIFIED",
                        Description: "perferendis",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "optio": "accusamus",
                },
                State: &shared.FeatureState{
                    Code: "OK",
                    Description: "saepe",
                    UpdateTime: "suscipit",
                },
            },
        },
        AccessToken: "deserunt",
        Alt: "media",
        Callback: "minima",
        FeatureID: "repellendus",
        Fields: "totam",
        Key: "similique",
        OauthToken: "alias",
        Parent: "at",
        PrettyPrint: false,
        QuotaUser: "quaerat",
        RequestID: "tempora",
        UploadType: "vel",
        UploadProtocol: "quod",
    }

    ctx := context.Background()
    res, err := s.Projects.GkehubProjectsLocationsFeaturesCreate(ctx, req, operations.GkehubProjectsLocationsFeaturesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
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
## Available Resources and Operations


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

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
