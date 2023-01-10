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
            Parent: "rerum",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "ut",
            Alt: "media",
            Callback: "distinctio",
            FeatureID: "fugiat",
            Fields: "aperiam",
            Key: "est",
            OauthToken: "aut",
            PrettyPrint: true,
            QuotaUser: "sit",
            RequestID: "quisquam",
            UploadType: "placeat",
            UploadProtocol: "et",
        },
        Request: &shared.FeatureInput{
            Labels: map[string]string{
                "et": "est",
                "ex": "similique",
                "corporis": "ea",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "dolor": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "nostrum",
                                HTTPSProxy: "laboriosam",
                                PolicyDir: "exercitationem",
                                SecretType: "libero",
                                SyncBranch: "laborum",
                                SyncRepo: "corrupti",
                                SyncRev: "nisi",
                                SyncWaitSecs: "sunt",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "et",
                                PolicyDir: "sed",
                                SecretType: "ut",
                                SyncRepo: "veniam",
                                SyncWaitSecs: "velit",
                            },
                            PreventDrift: true,
                            SourceFormat: "qui",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "voluptas",
                            Enabled: true,
                            ExemptableNamespaces: []string{
                                "vitae",
                                "pariatur",
                            },
                            LogDeniesEnabled: true,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "CLOUD_MONITORING",
                                    "CLOUD_MONITORING",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: true,
                        },
                        Version: "fugit",
                    },
                    FleetInherited: true,
                    Fleetobservability: map[string]interface{}{
                        "impedit": "officiis",
                        "labore": "veniam",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "aspernatur",
                                    ClientSecret: "qui",
                                    KubectlRedirectURI: "magnam",
                                    Tenant: "voluptates",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "accusantium",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "qui",
                                    ClientID: "animi",
                                    ClientSecret: "adipisci",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: true,
                                    ExtraParams: "cupiditate",
                                    GroupPrefix: "eum",
                                    GroupsClaim: "est",
                                    IssuerURI: "explicabo",
                                    KubectlRedirectURI: "recusandae",
                                    Scopes: "eius",
                                    UserClaim: "incidunt",
                                    UserPrefix: "et",
                                },
                                Proxy: "eum",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "fugiat",
                                    ClientSecret: "iusto",
                                    KubectlRedirectURI: "repellendus",
                                    Tenant: "voluptatem",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "rem",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "adipisci",
                                    ClientID: "necessitatibus",
                                    ClientSecret: "in",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: false,
                                    ExtraParams: "placeat",
                                    GroupPrefix: "omnis",
                                    GroupsClaim: "aut",
                                    IssuerURI: "vitae",
                                    KubectlRedirectURI: "hic",
                                    Scopes: "cupiditate",
                                    UserClaim: "est",
                                    UserPrefix: "quia",
                                },
                                Proxy: "ut",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "omnis",
                                    ClientSecret: "dolores",
                                    KubectlRedirectURI: "iusto",
                                    Tenant: "ratione",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "libero",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "eius",
                                    ClientID: "illo",
                                    ClientSecret: "sapiente",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "dolore",
                                    GroupPrefix: "quod",
                                    GroupsClaim: "similique",
                                    IssuerURI: "tempore",
                                    KubectlRedirectURI: "sit",
                                    Scopes: "dolore",
                                    UserClaim: "libero",
                                    UserPrefix: "et",
                                },
                                Proxy: "distinctio",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_MANUAL",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "ACTIVE",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "corrupti": map[string]interface{}{
                    "id": "ut",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Appdevexperience: map[string]interface{}{
                    "quaerat": "quas",
                    "quaerat": "aut",
                    "hic": "rerum",
                },
                Fleetobservability: map[string]interface{}{
                    "iure": "voluptatem",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    ConfigMembership: "voluptas",
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
                    "maxime": "molestias",
                },
                State: &shared.FeatureState{
                    Code: "ERROR",
                    Description: "amet",
                    UpdateTime: "non",
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