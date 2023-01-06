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
            Parent: "quia",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "ut",
            Alt: "proto",
            Callback: "repudiandae",
            FeatureID: "tempore",
            Fields: "et",
            Key: "aut",
            OauthToken: "iure",
            PrettyPrint: false,
            QuotaUser: "sint",
            RequestID: "animi",
            UploadType: "repudiandae",
            UploadProtocol: "non",
        },
        Request: &shared.FeatureInput{
            Labels: map[string]string{
                "iure": "est",
                "ut": "distinctio",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "dolor": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: true,
                        EnableStackdriverOnApplications: false,
                        Version: "ipsa",
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "qui",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: true,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "quis",
                                HTTPSProxy: "tempore",
                                PolicyDir: "quasi",
                                SecretType: "architecto",
                                SyncBranch: "suscipit",
                                SyncRepo: "voluptates",
                                SyncRev: "ad",
                                SyncWaitSecs: "laborum",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "id",
                                PolicyDir: "odio",
                                SecretType: "saepe",
                                SyncRepo: "saepe",
                                SyncWaitSecs: "hic",
                            },
                            PreventDrift: true,
                            SourceFormat: "reprehenderit",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "tempora",
                            Enabled: true,
                            ExemptableNamespaces: []string{
                                "ipsam",
                            },
                            LogDeniesEnabled: true,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: true,
                        },
                        Version: "vel",
                    },
                    FleetInherited: true,
                    Fleetobservability: map[string]interface{}{
                        "tenetur": "incidunt",
                        "voluptatem": "eos",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "qui",
                                    ClientSecret: "nemo",
                                    KubectlRedirectURI: "ad",
                                    Tenant: "saepe",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "ex",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "molestiae",
                                    ClientID: "excepturi",
                                    ClientSecret: "eligendi",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "nam",
                                    GroupPrefix: "eaque",
                                    GroupsClaim: "eos",
                                    IssuerURI: "voluptas",
                                    KubectlRedirectURI: "magnam",
                                    Scopes: "repudiandae",
                                    UserClaim: "tempora",
                                    UserPrefix: "iusto",
                                },
                                Proxy: "vero",
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
                            AuditIntervalSeconds: "minima",
                            ExemptableNamespaces: []string{
                                "enim",
                            },
                            InstallSpec: "INSTALL_SPEC_ENABLED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "hic",
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
                "dolores": map[string]interface{}{
                    "corporis": "voluptatem",
                    "vel": "nostrum",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "ab",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "quia": "unde",
                },
                Cloudauditlogging: &shared.CloudAuditLoggingFeatureSpec{
                    AllowlistedServiceAccounts: []string{
                        "distinctio",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "exercitationem": "non",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "BILLING_UNSPECIFIED",
                    ConfigMembership: "rem",
                },
                Workloadcertificate: &shared.FeatureSpec{
                    DefaultConfig: &shared.MembershipSpec{
                        CertificateManagement: "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
                    },
                    ProvisionGoogleCa: "GOOGLE_CA_PROVISIONING_UNSPECIFIED",
                },
            },
            State: &shared.CommonFeatureState1{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "UNKNOWN",
                        Description: "velit",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "voluptatem": "qui",
                },
                State: &shared.FeatureState{
                    Code: "ERROR",
                    Description: "expedita",
                    UpdateTime: "rerum",
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