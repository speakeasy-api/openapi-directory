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
                    Cloudbuild: &shared.MembershipSpec{
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
                        Management: "MANAGEMENT_MANUAL",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "aut",
                            ConstraintViolationLimit: "quasi",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "temporibus": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "laborum",
                                            Memory: "quasi",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "reiciendis",
                                            Memory: "voluptatibus",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "nihil",
                                            Key: "praesentium",
                                            Operator: "voluptatibus",
                                            Value: "ipsa",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "omnis",
                                            Key: "voluptate",
                                            Operator: "cum",
                                            Value: "perferendis",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "doloremque",
                                            Key: "reprehenderit",
                                            Operator: "ut",
                                            Value: "maiores",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "dicta",
                                            Key: "corporis",
                                            Operator: "dolore",
                                            Value: "iusto",
                                        },
                                    },
                                    ReplicaCount: "dicta",
                                },
                                "harum": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "enim",
                                            Memory: "accusamus",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "commodi",
                                            Memory: "repudiandae",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "ipsum",
                                            Key: "quidem",
                                            Operator: "molestias",
                                            Value: "excepturi",
                                        },
                                    },
                                    ReplicaCount: "pariatur",
                                },
                                "modi": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "praesentium",
                                            Memory: "rem",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "voluptates",
                                            Memory: "quasi",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "sint",
                                            Key: "veritatis",
                                            Operator: "itaque",
                                            Value: "incidunt",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "enim",
                                            Key: "consequatur",
                                            Operator: "est",
                                            Value: "quibusdam",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "explicabo",
                                            Key: "deserunt",
                                            Operator: "distinctio",
                                            Value: "quibusdam",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "labore",
                                            Key: "modi",
                                            Operator: "qui",
                                            Value: "aliquid",
                                        },
                                    },
                                    ReplicaCount: "cupiditate",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "perferendis",
                                "magni",
                                "assumenda",
                            },
                            InstallSpec: "INSTALL_SPEC_NOT_INSTALLED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "excepturi": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "facilis",
                                            "tempore",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                    "delectus": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "non",
                                            "eligendi",
                                        },
                                        Management: "INSTALLED",
                                    },
                                    "aliquid": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "necessitatibus",
                                            "sint",
                                            "officia",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
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
                                Installation: "ALL",
                            },
                        },
                        Version: "dolorum",
                    },
                },
                "in": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "in",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "PRIVILEGED",
                        Version: "maiores",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "rerum",
                                HTTPSProxy: "dicta",
                                PolicyDir: "magnam",
                                SecretType: "cumque",
                                SyncBranch: "facere",
                                SyncRepo: "ea",
                                SyncRev: "aliquid",
                                SyncWaitSecs: "laborum",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "accusamus",
                                PolicyDir: "non",
                                SecretType: "occaecati",
                                SyncRepo: "enim",
                                SyncWaitSecs: "accusamus",
                            },
                            PreventDrift: false,
                            SourceFormat: "delectus",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "quidem",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "nam",
                                "id",
                                "blanditiis",
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
                        Version: "nisi",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "natus": "omnis",
                        "molestiae": "perferendis",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "magnam",
                                    ClientSecret: "distinctio",
                                    KubectlRedirectURI: "id",
                                    Tenant: "labore",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "labore",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "suscipit",
                                    ClientID: "natus",
                                    ClientSecret: "nobis",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "eum",
                                    GroupPrefix: "vero",
                                    GroupsClaim: "aspernatur",
                                    IssuerURI: "architecto",
                                    KubectlRedirectURI: "magnam",
                                    Scopes: "et",
                                    UserClaim: "excepturi",
                                    UserPrefix: "ullam",
                                },
                                Proxy: "provident",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "quos",
                                    ClientSecret: "sint",
                                    KubectlRedirectURI: "accusantium",
                                    Tenant: "mollitia",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "reiciendis",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "mollitia",
                                    ClientID: "ad",
                                    ClientSecret: "eum",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "dolor",
                                    GroupPrefix: "necessitatibus",
                                    GroupsClaim: "odit",
                                    IssuerURI: "nemo",
                                    KubectlRedirectURI: "quasi",
                                    Scopes: "iure",
                                    UserClaim: "doloribus",
                                    UserPrefix: "debitis",
                                },
                                Proxy: "eius",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "MANUAL",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "facilis",
                            ConstraintViolationLimit: "in",
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "architecto": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: "repudiandae",
                                            Memory: "ullam",
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: "expedita",
                                            Memory: "nihil",
                                        },
                                    },
                                    PodAntiAffinity: false,
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: "quibusdam",
                                            Key: "sed",
                                            Operator: "saepe",
                                            Value: "pariatur",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "accusantium",
                                            Key: "consequuntur",
                                            Operator: "praesentium",
                                            Value: "natus",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "magni",
                                            Key: "sunt",
                                            Operator: "quo",
                                            Value: "illum",
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: "pariatur",
                                            Key: "maxime",
                                            Operator: "ea",
                                            Value: "excepturi",
                                        },
                                    },
                                    ReplicaCount: "odit",
                                },
                            },
                            ExemptableNamespaces: []string{
                                "accusantium",
                                "ab",
                            },
                            InstallSpec: "INSTALL_SPEC_SUSPENDED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "eaque": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "nemo",
                                            "voluptatibus",
                                            "perferendis",
                                            "fugiat",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                    "aut": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "corporis",
                                            "hic",
                                            "libero",
                                            "nobis",
                                        },
                                        Management: "MANAGEMENT_UNSPECIFIED",
                                    },
                                    "quis": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "dignissimos",
                                            "eaque",
                                            "quis",
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
                                Installation: "INSTALLATION_UNSPECIFIED",
                            },
                        },
                        Version: "dolores",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "UPDATING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "dolor": map[string]interface{}{
                    "nostrum": "hic",
                    "recusandae": "omnis",
                    "facilis": "perspiciatis",
                    "voluptatem": "porro",
                },
                "consequuntur": map[string]interface{}{
                    "error": "eaque",
                    "occaecati": "rerum",
                    "adipisci": "asperiores",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "earum",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "iste": "dolorum",
                    "deleniti": "pariatur",
                },
                Fleetobservability: map[string]interface{}{
                    "nobis": "libero",
                    "delectus": "quaerat",
                    "quos": "aliquid",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "BILLING_UNSPECIFIED",
                    ConfigMembership: "dolorem",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "CODE_UNSPECIFIED",
                        Description: "qui",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "hic": "excepturi",
                },
                State: &shared.FeatureState{
                    Code: "WARNING",
                    Description: "voluptate",
                    UpdateTime: "dignissimos",
                },
            },
        },
        AccessToken: "reiciendis",
        Alt: "json",
        Callback: "dolorum",
        FeatureID: "numquam",
        Fields: "veritatis",
        Key: "ipsa",
        OauthToken: "ipsa",
        Parent: "iure",
        PrettyPrint: false,
        QuotaUser: "odio",
        RequestID: "quaerat",
        UploadType: "accusamus",
        UploadProtocol: "quidem",
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