<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "quo",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "autem",
            Alt: "media",
            Callback: "ullam",
            FeatureID: "ipsum",
            Fields: "est",
            Key: "assumenda",
            OauthToken: "ducimus",
            PrettyPrint: false,
            QuotaUser: "quia",
            RequestID: "nemo",
            UploadType: "incidunt",
            UploadProtocol: "molestiae",
        },
        Request: &shared.FeatureInput{
            Labels: map[string]string{
                "eveniet": "ipsam",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "magni": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "dolorem",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "SECURITY_POLICY_UNSPECIFIED",
                        Version: "repellendus",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: true,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "vero",
                                HTTPSProxy: "quibusdam",
                                PolicyDir: "sit",
                                SecretType: "culpa",
                                SyncBranch: "delectus",
                                SyncRepo: "sunt",
                                SyncRev: "dolor",
                                SyncWaitSecs: "accusantium",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "ipsum",
                                PolicyDir: "et",
                                SecretType: "enim",
                                SyncRepo: "nesciunt",
                                SyncWaitSecs: "temporibus",
                            },
                            PreventDrift: false,
                            SourceFormat: "eaque",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: true,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "illo",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "assumenda",
                                "molestiae",
                            },
                            LogDeniesEnabled: true,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: true,
                        },
                        Version: "nesciunt",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "voluptatem": "sunt",
                        "rerum": "adipisci",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "quaerat",
                                    ClientSecret: "itaque",
                                    KubectlRedirectURI: "magni",
                                    Tenant: "aut",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "numquam",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "qui",
                                    ClientID: "modi",
                                    ClientSecret: "quo",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: false,
                                    ExtraParams: "est",
                                    GroupPrefix: "dicta",
                                    GroupsClaim: "odit",
                                    IssuerURI: "autem",
                                    KubectlRedirectURI: "nesciunt",
                                    Scopes: "ratione",
                                    UserClaim: "cum",
                                    UserPrefix: "dolor",
                                },
                                Proxy: "libero",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_MANUAL",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "dolorem",
                            ExemptableNamespaces: []string{
                                "pariatur",
                                "harum",
                            },
                            InstallSpec: "INSTALL_SPEC_SUSPENDED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "CLOUD_MONITORING",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: true,
                            },
                        },
                        Version: "aliquam",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "UPDATING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "non": map[string]interface{}{
                    "ut": "rerum",
                },
                "iusto": map[string]interface{}{
                    "deleniti": "inventore",
                    "quam": "sit",
                    "quas": "est",
                },
                "possimus": map[string]interface{}{
                    "quia": "illum",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: true,
                        EnableStackdriverOnApplications: true,
                        Version: "id",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "autem": "consequatur",
                },
                Fleetobservability: map[string]interface{}{
                    "ut": "quas",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "ANTHOS_LICENSE",
                    ConfigMembership: "consequuntur",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "UNKNOWN",
                        Description: "enim",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "pariatur": "quidem",
                },
                State: &shared.FeatureState{
                    Code: "WARNING",
                    Description: "voluptatum",
                    UpdateTime: "voluptatem",
                },
            },
        },
    }
    
    res, err := s.Projects.GkehubProjectsLocationsFeaturesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->