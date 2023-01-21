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
            Parent: "sit",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            FeatureID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
        Request: &shared.FeatureInput{
            Labels: map[string]string{
                "et": "ut",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "et": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "vitae",
                                HTTPSProxy: "totam",
                                PolicyDir: "dolores",
                                SecretType: "illum",
                                SyncBranch: "debitis",
                                SyncRepo: "vel",
                                SyncRev: "odio",
                                SyncWaitSecs: "dolore",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "id",
                                PolicyDir: "aspernatur",
                                SecretType: "accusantium",
                                SyncRepo: "totam",
                                SyncWaitSecs: "commodi",
                            },
                            PreventDrift: true,
                            SourceFormat: "est",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: true,
                            Enabled: true,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "voluptas",
                            Enabled: true,
                            ExemptableNamespaces: []string{
                                "illo",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "recusandae",
                    },
                    FleetInherited: true,
                    Fleetobservability: map[string]interface{}{
                        "eveniet": "modi",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "inventore",
                                    ClientSecret: "ut",
                                    KubectlRedirectURI: "exercitationem",
                                    Tenant: "aut",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "tempore",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "maiores",
                                    ClientID: "incidunt",
                                    ClientSecret: "dolor",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: true,
                                    ExtraParams: "in",
                                    GroupPrefix: "et",
                                    GroupsClaim: "omnis",
                                    IssuerURI: "ipsum",
                                    KubectlRedirectURI: "ex",
                                    Scopes: "dolores",
                                    UserClaim: "placeat",
                                    UserPrefix: "vel",
                                },
                                Proxy: "rerum",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                },
                "quam": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "qui",
                                HTTPSProxy: "unde",
                                PolicyDir: "in",
                                SecretType: "autem",
                                SyncBranch: "qui",
                                SyncRepo: "ut",
                                SyncRev: "itaque",
                                SyncWaitSecs: "ab",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "neque",
                                PolicyDir: "ullam",
                                SecretType: "et",
                                SyncRepo: "accusantium",
                                SyncWaitSecs: "esse",
                            },
                            PreventDrift: true,
                            SourceFormat: "quam",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: true,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "sunt",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "et",
                                "optio",
                                "qui",
                            },
                            LogDeniesEnabled: true,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: true,
                        },
                        Version: "commodi",
                    },
                    FleetInherited: true,
                    Fleetobservability: map[string]interface{}{
                        "consectetur": "nostrum",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "laboriosam",
                                    ClientSecret: "sed",
                                    KubectlRedirectURI: "a",
                                    Tenant: "soluta",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "quas",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "consequuntur",
                                    ClientID: "laudantium",
                                    ClientSecret: "autem",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: false,
                                    ExtraParams: "doloremque",
                                    GroupPrefix: "perferendis",
                                    GroupsClaim: "atque",
                                    IssuerURI: "ratione",
                                    KubectlRedirectURI: "quisquam",
                                    Scopes: "explicabo",
                                    UserClaim: "ea",
                                    UserPrefix: "maxime",
                                },
                                Proxy: "eum",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_UNSPECIFIED",
                    },
                },
                "rerum": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: true,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "cumque",
                                HTTPSProxy: "minima",
                                PolicyDir: "necessitatibus",
                                SecretType: "est",
                                SyncBranch: "quis",
                                SyncRepo: "eum",
                                SyncRev: "labore",
                                SyncWaitSecs: "et",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "impedit",
                                PolicyDir: "ad",
                                SecretType: "expedita",
                                SyncRepo: "vel",
                                SyncWaitSecs: "qui",
                            },
                            PreventDrift: false,
                            SourceFormat: "nihil",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: true,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "sunt",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "quis",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "porro",
                    },
                    FleetInherited: true,
                    Fleetobservability: map[string]interface{}{
                        "accusamus": "numquam",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "rerum",
                                    ClientSecret: "ut",
                                    KubectlRedirectURI: "laborum",
                                    Tenant: "fugit",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "minus",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "soluta",
                                    ClientID: "aperiam",
                                    ClientSecret: "consequuntur",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: true,
                                    ExtraParams: "inventore",
                                    GroupPrefix: "delectus",
                                    GroupsClaim: "ipsa",
                                    IssuerURI: "animi",
                                    KubectlRedirectURI: "animi",
                                    Scopes: "ut",
                                    UserClaim: "aliquam",
                                    UserPrefix: "fuga",
                                },
                                Proxy: "sed",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "sed",
                                    ClientSecret: "et",
                                    KubectlRedirectURI: "consequuntur",
                                    Tenant: "non",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "provident",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "molestiae",
                                    ClientID: "pariatur",
                                    ClientSecret: "quasi",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "qui",
                                    GroupPrefix: "sit",
                                    GroupsClaim: "possimus",
                                    IssuerURI: "modi",
                                    KubectlRedirectURI: "neque",
                                    Scopes: "consequuntur",
                                    UserClaim: "quia",
                                    UserPrefix: "et",
                                },
                                Proxy: "est",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "occaecati",
                                    ClientSecret: "ex",
                                    KubectlRedirectURI: "voluptatem",
                                    Tenant: "quia",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "velit",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "quae",
                                    ClientID: "est",
                                    ClientSecret: "ut",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: true,
                                    ExtraParams: "possimus",
                                    GroupPrefix: "voluptatem",
                                    GroupsClaim: "dolorum",
                                    IssuerURI: "doloribus",
                                    KubectlRedirectURI: "saepe",
                                    Scopes: "sunt",
                                    UserClaim: "earum",
                                    UserPrefix: "et",
                                },
                                Proxy: "ut",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
                        Management: "MANAGEMENT_UNSPECIFIED",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "DISABLING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "quam": map[string]interface{}{
                    "nihil": "dolores",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Appdevexperience: map[string]interface{}{
                    "impedit": "non",
                    "magnam": "ut",
                },
                Fleetobservability: map[string]interface{}{
                    "illo": "qui",
                    "quia": "ipsam",
                    "ducimus": "enim",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    ConfigMembership: "blanditiis",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "CODE_UNSPECIFIED",
                        Description: "delectus",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "dolore": "repellat",
                    "velit": "officia",
                },
                State: &shared.FeatureState{
                    Code: "OK",
                    Description: "sunt",
                    UpdateTime: "voluptas",
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