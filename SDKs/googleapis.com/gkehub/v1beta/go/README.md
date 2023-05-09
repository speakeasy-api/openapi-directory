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
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: shared.MembershipSpecSecurityPolicyEnumSecurityPolicyUnspecified.ToPointer(),
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
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementAutomatic.ToPointer(),
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: sdk.String("quos"),
                            ConstraintViolationLimit: sdk.String("perferendis"),
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "assumenda": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("ipsam"),
                                            Memory: sdk.String("alias"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("fugit"),
                                            Memory: sdk.String("dolorum"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("tempora"),
                                            Key: sdk.String("facilis"),
                                            Operator: sdk.String("tempore"),
                                            Value: sdk.String("labore"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("delectus"),
                                            Key: sdk.String("eum"),
                                            Operator: sdk.String("non"),
                                            Value: sdk.String("eligendi"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("sint"),
                                            Key: sdk.String("aliquid"),
                                            Operator: sdk.String("provident"),
                                            Value: sdk.String("necessitatibus"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("sint"),
                                },
                            },
                            ExemptableNamespaces: []string{
                                "dolor",
                                "debitis",
                                "a",
                            },
                            InstallSpec: shared.PolicyControllerHubConfigInstallSpecEnumInstallSpecEnabled.ToPointer(),
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    shared.PolicyControllerMonitoringConfigBackendsEnumPrometheus,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumCloudMonitoring,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "rerum": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "magnam",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "facere": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "aliquid",
                                            "laborum",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "non": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "enim",
                                            "accusamus",
                                            "delectus",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "provident": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "id",
                                            "blanditiis",
                                            "deleniti",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
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
                                Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumNotInstalled.ToPointer(),
                            },
                        },
                        Version: sdk.String("nisi"),
                    },
                },
                "vel": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("natus"),
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: shared.MembershipSpecSecurityPolicyEnumNonPrivileged.ToPointer(),
                        Version: sdk.String("molestiae"),
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: sdk.Bool(false),
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("perferendis"),
                                HTTPSProxy: sdk.String("nihil"),
                                PolicyDir: sdk.String("magnam"),
                                SecretType: sdk.String("distinctio"),
                                SyncBranch: sdk.String("id"),
                                SyncRepo: sdk.String("labore"),
                                SyncRev: sdk.String("labore"),
                                SyncWaitSecs: sdk.String("suscipit"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("natus"),
                                PolicyDir: sdk.String("nobis"),
                                SecretType: sdk.String("eum"),
                                SyncRepo: sdk.String("vero"),
                                SyncWaitSecs: sdk.String("aspernatur"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("architecto"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("magnam"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "excepturi",
                            },
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryInstalled: sdk.Bool(false),
                        },
                        Version: sdk.String("sint"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "mollitia": "reiciendis",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("ad"),
                                    ClientSecret: sdk.String("eum"),
                                    KubectlRedirectURI: sdk.String("dolor"),
                                    Tenant: sdk.String("necessitatibus"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Vivian Boyle"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("debitis"),
                                    ClientID: sdk.String("eius"),
                                    ClientSecret: sdk.String("maxime"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("deleniti"),
                                    GroupPrefix: sdk.String("facilis"),
                                    GroupsClaim: sdk.String("in"),
                                    IssuerURI: sdk.String("architecto"),
                                    KubectlRedirectURI: sdk.String("architecto"),
                                    Scopes: sdk.String("repudiandae"),
                                    UserClaim: sdk.String("ullam"),
                                    UserPrefix: sdk.String("expedita"),
                                },
                                Proxy: sdk.String("nihil"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("repellat"),
                                    ClientSecret: sdk.String("quibusdam"),
                                    KubectlRedirectURI: sdk.String("sed"),
                                    Tenant: sdk.String("saepe"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Edward Crooks"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("magni"),
                                    ClientID: sdk.String("sunt"),
                                    ClientSecret: sdk.String("quo"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("illum"),
                                    GroupPrefix: sdk.String("pariatur"),
                                    GroupsClaim: sdk.String("maxime"),
                                    IssuerURI: sdk.String("ea"),
                                    KubectlRedirectURI: sdk.String("excepturi"),
                                    Scopes: sdk.String("odit"),
                                    UserClaim: sdk.String("ea"),
                                    UserPrefix: sdk.String("accusantium"),
                                },
                                Proxy: sdk.String("ab"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("maiores"),
                                    ClientSecret: sdk.String("quidem"),
                                    KubectlRedirectURI: sdk.String("ipsam"),
                                    Tenant: sdk.String("voluptate"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Candice Beatty"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("voluptatibus"),
                                    ClientID: sdk.String("perferendis"),
                                    ClientSecret: sdk.String("fugiat"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("amet"),
                                    GroupPrefix: sdk.String("aut"),
                                    GroupsClaim: sdk.String("cumque"),
                                    IssuerURI: sdk.String("corporis"),
                                    KubectlRedirectURI: sdk.String("hic"),
                                    Scopes: sdk.String("libero"),
                                    UserClaim: sdk.String("nobis"),
                                    UserPrefix: sdk.String("dolores"),
                                },
                                Proxy: sdk.String("quis"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumAutomatic.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementAutomatic.ToPointer(),
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: sdk.String("eaque"),
                            ConstraintViolationLimit: sdk.String("quis"),
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "eos": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("perferendis"),
                                            Memory: sdk.String("dolores"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("minus"),
                                            Memory: sdk.String("quam"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("vero"),
                                            Key: sdk.String("nostrum"),
                                            Operator: sdk.String("hic"),
                                            Value: sdk.String("recusandae"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("omnis"),
                                },
                            },
                            ExemptableNamespaces: []string{
                                "perspiciatis",
                                "voluptatem",
                                "porro",
                            },
                            InstallSpec: shared.PolicyControllerHubConfigInstallSpecEnumInstallSpecUnspecified.ToPointer(),
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    shared.PolicyControllerMonitoringConfigBackendsEnumPrometheus,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumMonitoringBackendUnspecified,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumPrometheus,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "adipisci": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "earum",
                                            "modi",
                                            "iste",
                                            "dolorum",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "pariatur": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "nobis",
                                            "libero",
                                            "delectus",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumManagementUnspecified.ToPointer(),
                                    },
                                    "quos": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "dolorem",
                                            "dolorem",
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
                        Version: sdk.String("hic"),
                    },
                },
                "excepturi": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("cum"),
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: shared.MembershipSpecSecurityPolicyEnumNonPrivileged.ToPointer(),
                        Version: sdk.String("dignissimos"),
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: sdk.Bool(false),
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("reiciendis"),
                                HTTPSProxy: sdk.String("amet"),
                                PolicyDir: sdk.String("dolorum"),
                                SecretType: sdk.String("numquam"),
                                SyncBranch: sdk.String("veritatis"),
                                SyncRepo: sdk.String("ipsa"),
                                SyncRev: sdk.String("ipsa"),
                                SyncWaitSecs: sdk.String("iure"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("odio"),
                                PolicyDir: sdk.String("quaerat"),
                                SecretType: sdk.String("accusamus"),
                                SyncRepo: sdk.String("quidem"),
                                SyncWaitSecs: sdk.String("voluptatibus"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("voluptas"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("natus"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "atque",
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
                        Version: sdk.String("ab"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "dolorum": "iusto",
                        "voluptate": "dolorum",
                        "deleniti": "omnis",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("distinctio"),
                                    ClientSecret: sdk.String("asperiores"),
                                    KubectlRedirectURI: sdk.String("nihil"),
                                    Tenant: sdk.String("ipsum"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Alberta Ullrich"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("perferendis"),
                                    ClientID: sdk.String("amet"),
                                    ClientSecret: sdk.String("optio"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("accusamus"),
                                    GroupPrefix: sdk.String("ad"),
                                    GroupsClaim: sdk.String("saepe"),
                                    IssuerURI: sdk.String("suscipit"),
                                    KubectlRedirectURI: sdk.String("deserunt"),
                                    Scopes: sdk.String("provident"),
                                    UserClaim: sdk.String("minima"),
                                    UserPrefix: sdk.String("repellendus"),
                                },
                                Proxy: sdk.String("totam"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("similique"),
                                    ClientSecret: sdk.String("alias"),
                                    KubectlRedirectURI: sdk.String("at"),
                                    Tenant: sdk.String("quaerat"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Gina Schmeler"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("dolorum"),
                                    ClientID: sdk.String("a"),
                                    ClientSecret: sdk.String("esse"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("harum"),
                                    GroupPrefix: sdk.String("iusto"),
                                    GroupsClaim: sdk.String("ipsum"),
                                    IssuerURI: sdk.String("quisquam"),
                                    KubectlRedirectURI: sdk.String("tenetur"),
                                    Scopes: sdk.String("amet"),
                                    UserClaim: sdk.String("tempore"),
                                    UserPrefix: sdk.String("accusamus"),
                                },
                                Proxy: sdk.String("numquam"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("enim"),
                                    ClientSecret: sdk.String("dolorem"),
                                    KubectlRedirectURI: sdk.String("sapiente"),
                                    Tenant: sdk.String("totam"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Karen Rath"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("vel"),
                                    ClientID: sdk.String("libero"),
                                    ClientSecret: sdk.String("voluptas"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("deserunt"),
                                    GroupPrefix: sdk.String("quam"),
                                    GroupsClaim: sdk.String("ipsum"),
                                    IssuerURI: sdk.String("incidunt"),
                                    KubectlRedirectURI: sdk.String("qui"),
                                    Scopes: sdk.String("cupiditate"),
                                    UserClaim: sdk.String("maxime"),
                                    UserPrefix: sdk.String("pariatur"),
                                },
                                Proxy: sdk.String("soluta"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("dicta"),
                                    ClientSecret: sdk.String("laborum"),
                                    KubectlRedirectURI: sdk.String("totam"),
                                    Tenant: sdk.String("incidunt"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Bonnie Raynor"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("quam"),
                                    ClientID: sdk.String("molestias"),
                                    ClientSecret: sdk.String("temporibus"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("qui"),
                                    GroupPrefix: sdk.String("neque"),
                                    GroupsClaim: sdk.String("fugit"),
                                    IssuerURI: sdk.String("magni"),
                                    KubectlRedirectURI: sdk.String("odio"),
                                    Scopes: sdk.String("sunt"),
                                    UserClaim: sdk.String("ullam"),
                                    UserPrefix: sdk.String("nam"),
                                },
                                Proxy: sdk.String("hic"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumControlPlaneManagementUnspecified.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementManual.ToPointer(),
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: sdk.String("soluta"),
                            ConstraintViolationLimit: sdk.String("nobis"),
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "saepe": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("ipsum"),
                                            Memory: sdk.String("veritatis"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("nobis"),
                                            Memory: sdk.String("quos"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("cupiditate"),
                                            Key: sdk.String("aperiam"),
                                            Operator: sdk.String("delectus"),
                                            Value: sdk.String("dolorem"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("dolore"),
                                            Key: sdk.String("labore"),
                                            Operator: sdk.String("adipisci"),
                                            Value: sdk.String("dolorum"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("architecto"),
                                            Key: sdk.String("quae"),
                                            Operator: sdk.String("aut"),
                                            Value: sdk.String("quas"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("itaque"),
                                },
                            },
                            ExemptableNamespaces: []string{
                                "est",
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
                                    "quae": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "odio",
                                            "occaecati",
                                            "voluptatibus",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                },
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: sdk.Bool(false),
                                    Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumAll.ToPointer(),
                                },
                            },
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: sdk.Bool(false),
                                Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumNotInstalled.ToPointer(),
                            },
                        },
                        Version: sdk.String("quis"),
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: shared.FeatureResourceStateStateEnumEnabling.ToPointer(),
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "voluptate": map[string]interface{}{
                    "vero": "tenetur",
                },
                "dignissimos": map[string]interface{}{
                    "distinctio": "quod",
                    "odio": "similique",
                    "facilis": "vero",
                    "ducimus": "dolore",
                },
                "quibusdam": map[string]interface{}{
                    "sequi": "natus",
                    "impedit": "aut",
                    "voluptatibus": "exercitationem",
                    "nulla": "fugit",
                },
                "porro": map[string]interface{}{
                    "doloribus": "iusto",
                    "eligendi": "ducimus",
                    "alias": "officia",
                    "tempora": "ipsam",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("ea"),
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "vel": "possimus",
                },
                Fleetobservability: &shared.FleetObservabilityFeatureSpec{
                    LoggingConfig: &shared.FleetObservabilityLoggingConfig{
                        DefaultConfig: &shared.FleetObservabilityRoutingConfig{
                            Mode: shared.FleetObservabilityRoutingConfigModeEnumModeUnspecified.ToPointer(),
                        },
                        FleetScopeLogsConfig: &shared.FleetObservabilityRoutingConfig{
                            Mode: shared.FleetObservabilityRoutingConfigModeEnumModeUnspecified.ToPointer(),
                        },
                    },
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: shared.MultiClusterIngressFeatureSpecBillingEnumPayAsYouGo.ToPointer(),
                    ConfigMembership: sdk.String("laudantium"),
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: shared.StatusCodeEnumCodeUnspecified.ToPointer(),
                        Description: sdk.String("dolor"),
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "quasi": "ex",
                    "nulla": "excepturi",
                    "voluptatibus": "nostrum",
                    "sapiente": "quisquam",
                },
                State: &shared.FeatureState{
                    Code: shared.FeatureStateCodeEnumError.ToPointer(),
                    Description: sdk.String("ea"),
                    UpdateTime: sdk.String("impedit"),
                },
            },
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        FeatureID: sdk.String("inventore"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("quo"),
        Parent: "consectetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        RequestID: sdk.String("aspernatur"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("eaque"),
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [GkehubProjectsLocationsFeaturesCreate](docs/projects/README.md#gkehubprojectslocationsfeaturescreate) - Adds a new Feature.
* [GkehubProjectsLocationsFeaturesList](docs/projects/README.md#gkehubprojectslocationsfeatureslist) - Lists Features in a given project and location.
* [GkehubProjectsLocationsFleetsCreate](docs/projects/README.md#gkehubprojectslocationsfleetscreate) - Creates a fleet.
* [GkehubProjectsLocationsFleetsList](docs/projects/README.md#gkehubprojectslocationsfleetslist) - Returns all fleets within an organization or a project that the caller has access to.
* [GkehubProjectsLocationsList](docs/projects/README.md#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [GkehubProjectsLocationsMembershipsBindingsCreate](docs/projects/README.md#gkehubprojectslocationsmembershipsbindingscreate) - Creates a MembershipBinding.
* [GkehubProjectsLocationsMembershipsBindingsList](docs/projects/README.md#gkehubprojectslocationsmembershipsbindingslist) - Lists MembershipBindings.
* [GkehubProjectsLocationsMembershipsGetIamPolicy](docs/projects/README.md#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [GkehubProjectsLocationsMembershipsSetIamPolicy](docs/projects/README.md#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [GkehubProjectsLocationsMembershipsTestIamPermissions](docs/projects/README.md#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [GkehubProjectsLocationsNamespacesCreate](docs/projects/README.md#gkehubprojectslocationsnamespacescreate) - Creates a fleet namespace.
* [GkehubProjectsLocationsNamespacesList](docs/projects/README.md#gkehubprojectslocationsnamespaceslist) - Lists fleet namespaces.
* [GkehubProjectsLocationsNamespacesRbacrolebindingsCreate](docs/projects/README.md#gkehubprojectslocationsnamespacesrbacrolebindingscreate) - Creates a RBACRoleBinding.
* [GkehubProjectsLocationsNamespacesRbacrolebindingsList](docs/projects/README.md#gkehubprojectslocationsnamespacesrbacrolebindingslist) - Lists RBACRoleBinding.
* [GkehubProjectsLocationsOperationsCancel](docs/projects/README.md#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [GkehubProjectsLocationsOperationsList](docs/projects/README.md#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [GkehubProjectsLocationsScopesCreate](docs/projects/README.md#gkehubprojectslocationsscopescreate) - Creates a Scope.
* [GkehubProjectsLocationsScopesDelete](docs/projects/README.md#gkehubprojectslocationsscopesdelete) - Deletes a Scope.
* [GkehubProjectsLocationsScopesGet](docs/projects/README.md#gkehubprojectslocationsscopesget) - Returns the details of a Scope.
* [GkehubProjectsLocationsScopesList](docs/projects/README.md#gkehubprojectslocationsscopeslist) - Lists Scopes.
* [GkehubProjectsLocationsScopesPatch](docs/projects/README.md#gkehubprojectslocationsscopespatch) - Updates a scopes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
