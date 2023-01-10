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
            Parent: "dignissimos",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "nihil",
            Alt: "json",
            Callback: "tempore",
            FeatureID: "exercitationem",
            Fields: "et",
            Key: "dolorem",
            OauthToken: "quaerat",
            PrettyPrint: true,
            QuotaUser: "inventore",
            RequestID: "reiciendis",
            UploadType: "quidem",
            UploadProtocol: "ut",
        },
        Request: &shared.FeatureInput{
            Labels: map[string]string{
                "quo": "assumenda",
                "quisquam": "ad",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "est": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: true,
                        EnableStackdriverOnApplications: false,
                        Version: "necessitatibus",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "SECURITY_POLICY_UNSPECIFIED",
                        Version: "corporis",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: true,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "dolorum",
                                HTTPSProxy: "praesentium",
                                PolicyDir: "totam",
                                SecretType: "voluptates",
                                SyncBranch: "et",
                                SyncRepo: "consectetur",
                                SyncRev: "ratione",
                                SyncWaitSecs: "rerum",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "commodi",
                                PolicyDir: "enim",
                                SecretType: "distinctio",
                                SyncRepo: "voluptatem",
                                SyncWaitSecs: "omnis",
                            },
                            PreventDrift: true,
                            SourceFormat: "modi",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: true,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "dolor",
                            Enabled: true,
                            ExemptableNamespaces: []string{
                                "quisquam",
                                "quo",
                                "deleniti",
                            },
                            LogDeniesEnabled: true,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "CLOUD_MONITORING",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "CLOUD_MONITORING",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "voluptatibus",
                    },
                    FleetInherited: true,
                    Fleetobservability: map[string]interface{}{
                        "sit": "ut",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "officia",
                                    ClientSecret: "aliquam",
                                    KubectlRedirectURI: "veniam",
                                    Tenant: "autem",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "impedit",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "et",
                                    ClientID: "sed",
                                    ClientSecret: "facere",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: true,
                                    ExtraParams: "architecto",
                                    GroupPrefix: "nemo",
                                    GroupsClaim: "quos",
                                    IssuerURI: "deserunt",
                                    KubectlRedirectURI: "mollitia",
                                    Scopes: "ipsam",
                                    UserClaim: "dolor",
                                    UserPrefix: "rerum",
                                },
                                Proxy: "architecto",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        DefaultChannel: "REGULAR",
                        Management: "MANAGEMENT_MANUAL",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "dignissimos",
                            ExemptableNamespaces: []string{
                                "voluptates",
                                "libero",
                                "mollitia",
                            },
                            InstallSpec: "INSTALL_SPEC_SUSPENDED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "CLOUD_MONITORING",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "delectus",
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: "DISABLED",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "DISABLING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "qui": map[string]interface{}{
                    "et": "ex",
                    "quia": "exercitationem",
                },
                "debitis": map[string]interface{}{
                    "eum": "possimus",
                },
                "enim": map[string]interface{}{
                    "eligendi": "sequi",
                    "sit": "vitae",
                    "unde": "facilis",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: true,
                        EnableStackdriverOnApplications: false,
                        Version: "aut",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "harum": "quo",
                    "aut": "consequatur",
                    "iste": "aut",
                },
                Cloudauditlogging: &shared.CloudAuditLoggingFeatureSpec{
                    AllowlistedServiceAccounts: []string{
                        "facilis",
                        "a",
                        "ut",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "maxime": "odio",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "ANTHOS_LICENSE",
                    ConfigMembership: "quia",
                },
                Workloadcertificate: &shared.FeatureSpec{
                    DefaultConfig: &shared.MembershipSpec{
                        CertificateManagement: "DISABLED",
                    },
                    ProvisionGoogleCa: "GOOGLE_CA_PROVISIONING_UNSPECIFIED",
                },
            },
            State: &shared.CommonFeatureState1{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "CODE_UNSPECIFIED",
                        Description: "ea",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "nisi": "sint",
                    "itaque": "doloremque",
                },
                State: &shared.FeatureState{
                    Code: "OK",
                    Description: "cumque",
                    UpdateTime: "et",
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