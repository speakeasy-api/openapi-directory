<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.GkehubProjectsLocationsFeaturesCreate(ctx, operations.GkehubProjectsLocationsFeaturesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FeatureInput: &shared.FeatureInput{
            FleetDefaultMemberConfig: &shared.CommonFleetDefaultMemberConfigSpecInput{
                Identityservice: &shared.IdentityServiceMembershipSpecInput{
                    AuthMethods: []shared.IdentityServiceAuthMethodInput{
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: sdk.String("distinctio"),
                                ClientSecret: sdk.String("quibusdam"),
                                KubectlRedirectURI: sdk.String("unde"),
                                Tenant: sdk.String("nulla"),
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: sdk.Bool(false),
                            },
                            Name: sdk.String("Dallas Kassulke"),
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: sdk.String("suscipit"),
                                ClientID: sdk.String("iure"),
                                ClientSecret: sdk.String("magnam"),
                                DeployCloudConsoleProxy: sdk.Bool(false),
                                EnableAccessToken: sdk.Bool(false),
                                ExtraParams: sdk.String("debitis"),
                                GroupPrefix: sdk.String("ipsa"),
                                GroupsClaim: sdk.String("delectus"),
                                IssuerURI: sdk.String("tempora"),
                                KubectlRedirectURI: sdk.String("suscipit"),
                                Scopes: sdk.String("molestiae"),
                                UserClaim: sdk.String("minus"),
                                UserPrefix: sdk.String("placeat"),
                            },
                            Proxy: sdk.String("voluptatum"),
                        },
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: sdk.String("iusto"),
                                ClientSecret: sdk.String("excepturi"),
                                KubectlRedirectURI: sdk.String("nisi"),
                                Tenant: sdk.String("recusandae"),
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: sdk.Bool(false),
                            },
                            Name: sdk.String("Miss Raymond Hauck III"),
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: sdk.String("repellendus"),
                                ClientID: sdk.String("sapiente"),
                                ClientSecret: sdk.String("quo"),
                                DeployCloudConsoleProxy: sdk.Bool(false),
                                EnableAccessToken: sdk.Bool(false),
                                ExtraParams: sdk.String("odit"),
                                GroupPrefix: sdk.String("at"),
                                GroupsClaim: sdk.String("at"),
                                IssuerURI: sdk.String("maiores"),
                                KubectlRedirectURI: sdk.String("molestiae"),
                                Scopes: sdk.String("quod"),
                                UserClaim: sdk.String("quod"),
                                UserPrefix: sdk.String("esse"),
                            },
                            Proxy: sdk.String("totam"),
                        },
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: sdk.String("porro"),
                                ClientSecret: sdk.String("dolorum"),
                                KubectlRedirectURI: sdk.String("dicta"),
                                Tenant: sdk.String("nam"),
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: sdk.Bool(false),
                            },
                            Name: sdk.String("Seth Conroy"),
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: sdk.String("optio"),
                                ClientID: sdk.String("totam"),
                                ClientSecret: sdk.String("beatae"),
                                DeployCloudConsoleProxy: sdk.Bool(false),
                                EnableAccessToken: sdk.Bool(false),
                                ExtraParams: sdk.String("commodi"),
                                GroupPrefix: sdk.String("molestiae"),
                                GroupsClaim: sdk.String("modi"),
                                IssuerURI: sdk.String("qui"),
                                KubectlRedirectURI: sdk.String("impedit"),
                                Scopes: sdk.String("cum"),
                                UserClaim: sdk.String("esse"),
                                UserPrefix: sdk.String("ipsum"),
                            },
                            Proxy: sdk.String("excepturi"),
                        },
                    },
                },
            },
            Labels: map[string]string{
                "perferendis": "ad",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "sed": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("iste"),
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: shared.CloudBuildMembershipSpecSecurityPolicyEnumSecurityPolicyUnspecified.ToPointer(),
                        Version: sdk.String("natus"),
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: sdk.Bool(false),
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("laboriosam"),
                                HTTPSProxy: sdk.String("hic"),
                                PolicyDir: sdk.String("saepe"),
                                SecretType: sdk.String("fuga"),
                                SyncBranch: sdk.String("in"),
                                SyncRepo: sdk.String("corporis"),
                                SyncRev: sdk.String("iste"),
                                SyncWaitSecs: sdk.String("iure"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("saepe"),
                                PolicyDir: sdk.String("quidem"),
                                SecretType: sdk.String("architecto"),
                                SyncRepo: sdk.String("ipsa"),
                                SyncWaitSecs: sdk.String("reiciendis"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("est"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("mollitia"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "dolores",
                                "dolorem",
                                "corporis",
                            },
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumCloudMonitoring,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryInstalled: sdk.Bool(false),
                        },
                        Version: sdk.String("enim"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "nemo": "minima",
                        "excepturi": "accusantium",
                        "iure": "culpa",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("sapiente"),
                                    ClientSecret: sdk.String("architecto"),
                                    KubectlRedirectURI: sdk.String("mollitia"),
                                    Tenant: sdk.String("dolorem"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Carlos Ziemann"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("numquam"),
                                    ClientID: sdk.String("commodi"),
                                    ClientSecret: sdk.String("quam"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("molestiae"),
                                    GroupPrefix: sdk.String("velit"),
                                    GroupsClaim: sdk.String("error"),
                                    IssuerURI: sdk.String("quia"),
                                    KubectlRedirectURI: sdk.String("quis"),
                                    Scopes: sdk.String("vitae"),
                                    UserClaim: sdk.String("laborum"),
                                    UserPrefix: sdk.String("animi"),
                                },
                                Proxy: sdk.String("enim"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("odit"),
                                    ClientSecret: sdk.String("quo"),
                                    KubectlRedirectURI: sdk.String("sequi"),
                                    Tenant: sdk.String("tenetur"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Mr. Alberta Schuster"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("temporibus"),
                                    ClientID: sdk.String("laborum"),
                                    ClientSecret: sdk.String("quasi"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("reiciendis"),
                                    GroupPrefix: sdk.String("voluptatibus"),
                                    GroupsClaim: sdk.String("vero"),
                                    IssuerURI: sdk.String("nihil"),
                                    KubectlRedirectURI: sdk.String("praesentium"),
                                    Scopes: sdk.String("voluptatibus"),
                                    UserClaim: sdk.String("ipsa"),
                                    UserPrefix: sdk.String("omnis"),
                                },
                                Proxy: sdk.String("voluptate"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("cum"),
                                    ClientSecret: sdk.String("perferendis"),
                                    KubectlRedirectURI: sdk.String("doloremque"),
                                    Tenant: sdk.String("reprehenderit"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Shawna Carter"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("iusto"),
                                    ClientID: sdk.String("dicta"),
                                    ClientSecret: sdk.String("harum"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("enim"),
                                    GroupPrefix: sdk.String("accusamus"),
                                    GroupsClaim: sdk.String("commodi"),
                                    IssuerURI: sdk.String("repudiandae"),
                                    KubectlRedirectURI: sdk.String("quae"),
                                    Scopes: sdk.String("ipsum"),
                                    UserClaim: sdk.String("quidem"),
                                    UserPrefix: sdk.String("molestias"),
                                },
                                Proxy: sdk.String("excepturi"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("pariatur"),
                                    ClientSecret: sdk.String("modi"),
                                    KubectlRedirectURI: sdk.String("praesentium"),
                                    Tenant: sdk.String("rem"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Carl Waelchi DVM"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("incidunt"),
                                    ClientID: sdk.String("enim"),
                                    ClientSecret: sdk.String("consequatur"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("est"),
                                    GroupPrefix: sdk.String("quibusdam"),
                                    GroupsClaim: sdk.String("explicabo"),
                                    IssuerURI: sdk.String("deserunt"),
                                    KubectlRedirectURI: sdk.String("distinctio"),
                                    Scopes: sdk.String("quibusdam"),
                                    UserClaim: sdk.String("labore"),
                                    UserPrefix: sdk.String("modi"),
                                },
                                Proxy: sdk.String("qui"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumAutomatic.ToPointer(),
                        DefaultChannel: shared.ServiceMeshMembershipSpecDefaultChannelEnumRegular.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementAutomatic.ToPointer(),
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: sdk.String("perferendis"),
                            ConstraintViolationLimit: sdk.String("magni"),
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "ipsam": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("alias"),
                                            Memory: sdk.String("fugit"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("dolorum"),
                                            Memory: sdk.String("excepturi"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("facilis"),
                                            Key: sdk.String("tempore"),
                                            Operator: sdk.String("labore"),
                                            Value: sdk.String("delectus"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("eum"),
                                            Key: sdk.String("non"),
                                            Operator: sdk.String("eligendi"),
                                            Value: sdk.String("sint"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("aliquid"),
                                },
                                "provident": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("necessitatibus"),
                                            Memory: sdk.String("sint"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("officia"),
                                            Memory: sdk.String("dolor"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("a"),
                                            Key: sdk.String("dolorum"),
                                            Operator: sdk.String("in"),
                                            Value: sdk.String("in"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("illum"),
                                            Key: sdk.String("maiores"),
                                            Operator: sdk.String("rerum"),
                                            Value: sdk.String("dicta"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("magnam"),
                                            Key: sdk.String("cumque"),
                                            Operator: sdk.String("facere"),
                                            Value: sdk.String("ea"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("aliquid"),
                                            Key: sdk.String("laborum"),
                                            Operator: sdk.String("accusamus"),
                                            Value: sdk.String("non"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("occaecati"),
                                },
                                "enim": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("accusamus"),
                                            Memory: sdk.String("delectus"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("quidem"),
                                            Memory: sdk.String("provident"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("id"),
                                            Key: sdk.String("blanditiis"),
                                            Operator: sdk.String("deleniti"),
                                            Value: sdk.String("sapiente"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("amet"),
                                            Key: sdk.String("deserunt"),
                                            Operator: sdk.String("nisi"),
                                            Value: sdk.String("vel"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("natus"),
                                            Key: sdk.String("omnis"),
                                            Operator: sdk.String("molestiae"),
                                            Value: sdk.String("perferendis"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("nihil"),
                                },
                                "magnam": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("distinctio"),
                                            Memory: sdk.String("id"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("labore"),
                                            Memory: sdk.String("labore"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("natus"),
                                            Key: sdk.String("nobis"),
                                            Operator: sdk.String("eum"),
                                            Value: sdk.String("vero"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("aspernatur"),
                                            Key: sdk.String("architecto"),
                                            Operator: sdk.String("magnam"),
                                            Value: sdk.String("et"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("excepturi"),
                                },
                            },
                            ExemptableNamespaces: []string{
                                "provident",
                                "quos",
                            },
                            InstallSpec: shared.PolicyControllerHubConfigInstallSpecEnumInstallSpecEnabled.ToPointer(),
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    shared.PolicyControllerMonitoringConfigBackendsEnumPrometheus,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "mollitia": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "eum",
                                            "dolor",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "odit": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "quasi",
                                            "iure",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "debitis": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "maxime",
                                            "deleniti",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "in": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "architecto",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                },
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: sdk.Bool(false),
                                    Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumNotInstalled.ToPointer(),
                                },
                            },
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: sdk.Bool(false),
                                Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumAll.ToPointer(),
                            },
                        },
                        Version: sdk.String("nihil"),
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: shared.MembershipSpecCertificateManagementEnumEnabled.ToPointer(),
                    },
                },
                "quibusdam": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("sed"),
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: shared.CloudBuildMembershipSpecSecurityPolicyEnumPrivileged.ToPointer(),
                        Version: sdk.String("pariatur"),
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: sdk.Bool(false),
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("accusantium"),
                                HTTPSProxy: sdk.String("consequuntur"),
                                PolicyDir: sdk.String("praesentium"),
                                SecretType: sdk.String("natus"),
                                SyncBranch: sdk.String("magni"),
                                SyncRepo: sdk.String("sunt"),
                                SyncRev: sdk.String("quo"),
                                SyncWaitSecs: sdk.String("illum"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("pariatur"),
                                PolicyDir: sdk.String("maxime"),
                                SecretType: sdk.String("ea"),
                                SyncRepo: sdk.String("excepturi"),
                                SyncWaitSecs: sdk.String("odit"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("ea"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("accusantium"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "maiores",
                            },
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryInstalled: sdk.Bool(false),
                        },
                        Version: sdk.String("nam"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "pariatur": "nemo",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("perferendis"),
                                    ClientSecret: sdk.String("fugiat"),
                                    KubectlRedirectURI: sdk.String("amet"),
                                    Tenant: sdk.String("aut"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Lewis Welch"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("dolores"),
                                    ClientID: sdk.String("quis"),
                                    ClientSecret: sdk.String("totam"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("dignissimos"),
                                    GroupPrefix: sdk.String("eaque"),
                                    GroupsClaim: sdk.String("quis"),
                                    IssuerURI: sdk.String("nesciunt"),
                                    KubectlRedirectURI: sdk.String("eos"),
                                    Scopes: sdk.String("perferendis"),
                                    UserClaim: sdk.String("dolores"),
                                    UserPrefix: sdk.String("minus"),
                                },
                                Proxy: sdk.String("quam"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("dolor"),
                                    ClientSecret: sdk.String("vero"),
                                    KubectlRedirectURI: sdk.String("nostrum"),
                                    Tenant: sdk.String("hic"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Alejandro Purdy DDS"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("consequuntur"),
                                    ClientID: sdk.String("blanditiis"),
                                    ClientSecret: sdk.String("error"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("eaque"),
                                    GroupPrefix: sdk.String("occaecati"),
                                    GroupsClaim: sdk.String("rerum"),
                                    IssuerURI: sdk.String("adipisci"),
                                    KubectlRedirectURI: sdk.String("asperiores"),
                                    Scopes: sdk.String("earum"),
                                    UserClaim: sdk.String("modi"),
                                    UserPrefix: sdk.String("iste"),
                                },
                                Proxy: sdk.String("dolorum"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("deleniti"),
                                    ClientSecret: sdk.String("pariatur"),
                                    KubectlRedirectURI: sdk.String("provident"),
                                    Tenant: sdk.String("nobis"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Toby Hahn"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("dolorem"),
                                    ClientID: sdk.String("dolorem"),
                                    ClientSecret: sdk.String("dolor"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("qui"),
                                    GroupPrefix: sdk.String("ipsum"),
                                    GroupsClaim: sdk.String("hic"),
                                    IssuerURI: sdk.String("excepturi"),
                                    KubectlRedirectURI: sdk.String("cum"),
                                    Scopes: sdk.String("voluptate"),
                                    UserClaim: sdk.String("dignissimos"),
                                    UserPrefix: sdk.String("reiciendis"),
                                },
                                Proxy: sdk.String("amet"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("dolorum"),
                                    ClientSecret: sdk.String("numquam"),
                                    KubectlRedirectURI: sdk.String("veritatis"),
                                    Tenant: sdk.String("ipsa"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Vera Kuhlman"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("quidem"),
                                    ClientID: sdk.String("voluptatibus"),
                                    ClientSecret: sdk.String("voluptas"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("natus"),
                                    GroupPrefix: sdk.String("eos"),
                                    GroupsClaim: sdk.String("atque"),
                                    IssuerURI: sdk.String("sit"),
                                    KubectlRedirectURI: sdk.String("fugiat"),
                                    Scopes: sdk.String("ab"),
                                    UserClaim: sdk.String("soluta"),
                                    UserPrefix: sdk.String("dolorum"),
                                },
                                Proxy: sdk.String("iusto"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumAutomatic.ToPointer(),
                        DefaultChannel: shared.ServiceMeshMembershipSpecDefaultChannelEnumRegular.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementAutomatic.ToPointer(),
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: sdk.String("omnis"),
                            ConstraintViolationLimit: sdk.String("necessitatibus"),
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "asperiores": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("nihil"),
                                            Memory: sdk.String("ipsum"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("voluptate"),
                                            Memory: sdk.String("id"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("eius"),
                                            Key: sdk.String("aspernatur"),
                                            Operator: sdk.String("perferendis"),
                                            Value: sdk.String("amet"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("optio"),
                                            Key: sdk.String("accusamus"),
                                            Operator: sdk.String("ad"),
                                            Value: sdk.String("saepe"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("suscipit"),
                                            Key: sdk.String("deserunt"),
                                            Operator: sdk.String("provident"),
                                            Value: sdk.String("minima"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("repellendus"),
                                            Key: sdk.String("totam"),
                                            Operator: sdk.String("similique"),
                                            Value: sdk.String("alias"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("at"),
                                },
                                "quaerat": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("tempora"),
                                            Memory: sdk.String("vel"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("quod"),
                                            Memory: sdk.String("officiis"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("dolorum"),
                                            Key: sdk.String("a"),
                                            Operator: sdk.String("esse"),
                                            Value: sdk.String("harum"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("iusto"),
                                },
                                "ipsum": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("quisquam"),
                                            Memory: sdk.String("tenetur"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("amet"),
                                            Memory: sdk.String("tempore"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("numquam"),
                                            Key: sdk.String("enim"),
                                            Operator: sdk.String("dolorem"),
                                            Value: sdk.String("sapiente"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("totam"),
                                            Key: sdk.String("nihil"),
                                            Operator: sdk.String("sit"),
                                            Value: sdk.String("expedita"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("neque"),
                                            Key: sdk.String("sed"),
                                            Operator: sdk.String("vel"),
                                            Value: sdk.String("libero"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("voluptas"),
                                            Key: sdk.String("deserunt"),
                                            Operator: sdk.String("quam"),
                                            Value: sdk.String("ipsum"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("incidunt"),
                                },
                            },
                            ExemptableNamespaces: []string{
                                "cupiditate",
                            },
                            InstallSpec: shared.PolicyControllerHubConfigInstallSpecEnumInstallSpecSuspended.ToPointer(),
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    shared.PolicyControllerMonitoringConfigBackendsEnumCloudMonitoring,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumMonitoringBackendUnspecified,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumCloudMonitoring,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumPrometheus,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "aspernatur": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "distinctio",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "aliquid": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "molestias",
                                            "temporibus",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumManagementUnspecified.ToPointer(),
                                    },
                                },
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: sdk.Bool(false),
                                    Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumInstallationUnspecified.ToPointer(),
                                },
                            },
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: sdk.Bool(false),
                                Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumInstallationUnspecified.ToPointer(),
                            },
                        },
                        Version: sdk.String("magni"),
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: shared.MembershipSpecCertificateManagementEnumDisabled.ToPointer(),
                    },
                },
                "sunt": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("ullam"),
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: shared.CloudBuildMembershipSpecSecurityPolicyEnumPrivileged.ToPointer(),
                        Version: sdk.String("hic"),
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: sdk.Bool(false),
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("voluptatem"),
                                HTTPSProxy: sdk.String("cumque"),
                                PolicyDir: sdk.String("soluta"),
                                SecretType: sdk.String("nobis"),
                                SyncBranch: sdk.String("et"),
                                SyncRepo: sdk.String("saepe"),
                                SyncRev: sdk.String("ipsum"),
                                SyncWaitSecs: sdk.String("veritatis"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("nobis"),
                                PolicyDir: sdk.String("quos"),
                                SecretType: sdk.String("tempore"),
                                SyncRepo: sdk.String("cupiditate"),
                                SyncWaitSecs: sdk.String("aperiam"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("delectus"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("dolorem"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "labore",
                                "adipisci",
                            },
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumMonitoringBackendUnspecified,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumMonitoringBackendUnspecified,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumMonitoringBackendUnspecified,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryInstalled: sdk.Bool(false),
                        },
                        Version: sdk.String("quas"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "consequatur": "est",
                        "repellendus": "porro",
                        "doloribus": "ut",
                        "facilis": "cupiditate",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("quae"),
                                    ClientSecret: sdk.String("laudantium"),
                                    KubectlRedirectURI: sdk.String("odio"),
                                    Tenant: sdk.String("occaecati"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Wilson Terry"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("ipsum"),
                                    ClientID: sdk.String("delectus"),
                                    ClientSecret: sdk.String("voluptate"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("consectetur"),
                                    GroupPrefix: sdk.String("vero"),
                                    GroupsClaim: sdk.String("tenetur"),
                                    IssuerURI: sdk.String("dignissimos"),
                                    KubectlRedirectURI: sdk.String("hic"),
                                    Scopes: sdk.String("distinctio"),
                                    UserClaim: sdk.String("quod"),
                                    UserPrefix: sdk.String("odio"),
                                },
                                Proxy: sdk.String("similique"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumManual.ToPointer(),
                        DefaultChannel: shared.ServiceMeshMembershipSpecDefaultChannelEnumStable.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementAutomatic.ToPointer(),
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: sdk.String("dolore"),
                            ConstraintViolationLimit: sdk.String("quibusdam"),
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "sequi": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("natus"),
                                            Memory: sdk.String("impedit"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("aut"),
                                            Memory: sdk.String("voluptatibus"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("nulla"),
                                            Key: sdk.String("fugit"),
                                            Operator: sdk.String("porro"),
                                            Value: sdk.String("maiores"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("doloribus"),
                                            Key: sdk.String("iusto"),
                                            Operator: sdk.String("eligendi"),
                                            Value: sdk.String("ducimus"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("alias"),
                                },
                                "officia": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("tempora"),
                                            Memory: sdk.String("ipsam"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("ea"),
                                            Memory: sdk.String("aspernatur"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("possimus"),
                                            Key: sdk.String("magnam"),
                                            Operator: sdk.String("ratione"),
                                            Value: sdk.String("ex"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("laudantium"),
                                            Key: sdk.String("dicta"),
                                            Operator: sdk.String("dolor"),
                                            Value: sdk.String("maiores"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("quasi"),
                                },
                                "ex": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("nulla"),
                                            Memory: sdk.String("excepturi"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("voluptatibus"),
                                            Memory: sdk.String("nostrum"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("quisquam"),
                                            Key: sdk.String("saepe"),
                                            Operator: sdk.String("ea"),
                                            Value: sdk.String("impedit"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("corporis"),
                                            Key: sdk.String("veniam"),
                                            Operator: sdk.String("aliquid"),
                                            Value: sdk.String("inventore"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("magnam"),
                                            Key: sdk.String("ea"),
                                            Operator: sdk.String("quo"),
                                            Value: sdk.String("consectetur"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("recusandae"),
                                            Key: sdk.String("aspernatur"),
                                            Operator: sdk.String("minima"),
                                            Value: sdk.String("eaque"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("a"),
                                },
                                "libero": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("aut"),
                                            Memory: sdk.String("aut"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("deleniti"),
                                            Memory: sdk.String("impedit"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("fugit"),
                                            Key: sdk.String("accusamus"),
                                            Operator: sdk.String("inventore"),
                                            Value: sdk.String("non"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("et"),
                                            Key: sdk.String("dolorum"),
                                            Operator: sdk.String("laborum"),
                                            Value: sdk.String("placeat"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("velit"),
                                },
                            },
                            ExemptableNamespaces: []string{
                                "autem",
                                "nobis",
                            },
                            InstallSpec: shared.PolicyControllerHubConfigInstallSpecEnumInstallSpecEnabled.ToPointer(),
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    shared.PolicyControllerMonitoringConfigBackendsEnumCloudMonitoring,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumPrometheus,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumCloudMonitoring,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumMonitoringBackendUnspecified,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "numquam": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "provident",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumManagementUnspecified.ToPointer(),
                                    },
                                    "molestiae": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "odio",
                                            "eius",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumManagementUnspecified.ToPointer(),
                                    },
                                },
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: sdk.Bool(false),
                                    Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumNotInstalled.ToPointer(),
                                },
                            },
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: sdk.Bool(false),
                                Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumNotInstalled.ToPointer(),
                            },
                        },
                        Version: sdk.String("fuga"),
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: shared.MembershipSpecCertificateManagementEnumDisabled.ToPointer(),
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: shared.FeatureResourceStateStateEnumUpdating.ToPointer(),
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "ut": map[string]interface{}{
                    "suscipit": "assumenda",
                    "eos": "praesentium",
                },
                "quisquam": map[string]interface{}{
                    "ipsa": "id",
                },
                "quidem": map[string]interface{}{
                    "quo": "illum",
                },
                "quo": map[string]interface{}{
                    "eius": "eos",
                    "voluptas": "ab",
                    "cupiditate": "consequatur",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("tempora"),
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "ipsam": "aspernatur",
                    "sequi": "quo",
                    "esse": "recusandae",
                    "aperiam": "distinctio",
                },
                Cloudauditlogging: &shared.CloudAuditLoggingFeatureSpec{
                    AllowlistedServiceAccounts: []string{
                        "dignissimos",
                        "inventore",
                        "nihil",
                        "totam",
                    },
                },
                Fleetobservability: &shared.FleetObservabilityFeatureSpec{
                    LoggingConfig: &shared.FleetObservabilityLoggingConfig{
                        DefaultConfig: &shared.FleetObservabilityRoutingConfig{
                            Mode: shared.FleetObservabilityRoutingConfigModeEnumMove.ToPointer(),
                        },
                        FleetScopeLogsConfig: &shared.FleetObservabilityRoutingConfig{
                            Mode: shared.FleetObservabilityRoutingConfigModeEnumModeUnspecified.ToPointer(),
                        },
                    },
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: shared.MultiClusterIngressFeatureSpecBillingEnumPayAsYouGo.ToPointer(),
                    ConfigMembership: sdk.String("occaecati"),
                },
                Workloadcertificate: &shared.FeatureSpec{
                    DefaultConfig: &shared.MembershipSpec{
                        CertificateManagement: shared.MembershipSpecCertificateManagementEnumDisabled.ToPointer(),
                    },
                    ProvisionGoogleCa: shared.FeatureSpecProvisionGoogleCaEnumEnabled.ToPointer(),
                },
            },
            State: &shared.CommonFeatureStateInput{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: shared.StatusCodeEnumCodeUnspecified.ToPointer(),
                        Description: sdk.String("deserunt"),
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "accusantium": "porro",
                    "eum": "quas",
                },
                State: &shared.FeatureState{
                    Code: shared.FeatureStateCodeEnumWarning.ToPointer(),
                    Description: sdk.String("consequuntur"),
                    UpdateTime: sdk.String("deleniti"),
                },
            },
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        FeatureID: sdk.String("incidunt"),
        Fields: sdk.String("atque"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("minima"),
        Parent: "nisi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        RequestID: sdk.String("sapiente"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("ratione"),
    }, operations.GkehubProjectsLocationsFeaturesCreateSecurity{
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