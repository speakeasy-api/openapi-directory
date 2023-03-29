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
            Parent: "unde",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            FeatureID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.FeatureInput{
            FleetDefaultMemberConfig: map[string]interface{}{
                "saepe": "inventore",
                "sapiente": "enim",
            },
            Labels: map[string]string{
                "voluptatum": "autem",
                "vel": "non",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "similique": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "reprehenderit",
                                HTTPSProxy: "molestiae",
                                PolicyDir: "quo",
                                SecretType: "quasi",
                                SyncBranch: "laboriosam",
                                SyncRepo: "dicta",
                                SyncRev: "est",
                                SyncWaitSecs: "voluptatem",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "consequatur",
                                PolicyDir: "fugiat",
                                SecretType: "a",
                                SyncRepo: "omnis",
                                SyncWaitSecs: "eos",
                            },
                            PreventDrift: false,
                            SourceFormat: "accusamus",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "accusamus",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "rem",
                                "quibusdam",
                                "et",
                                "praesentium",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "CLOUD_MONITORING",
                                    "CLOUD_MONITORING",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "quisquam",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "culpa": "qui",
                        "sed": "rerum",
                        "possimus": "occaecati",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "esse",
                                    ClientSecret: "rem",
                                    KubectlRedirectURI: "voluptatem",
                                    Tenant: "amet",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "est",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "id",
                                    ClientID: "blanditiis",
                                    ClientSecret: "numquam",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "similique",
                                    GroupPrefix: "dolores",
                                    GroupsClaim: "sit",
                                    IssuerURI: "quia",
                                    KubectlRedirectURI: "et",
                                    Scopes: "voluptatem",
                                    UserClaim: "laborum",
                                    UserPrefix: "modi",
                                },
                                Proxy: "et",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_MANUAL",
                    },
                },
                "ut": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "soluta",
                                HTTPSProxy: "qui",
                                PolicyDir: "ea",
                                SecretType: "laborum",
                                SyncBranch: "iusto",
                                SyncRepo: "ut",
                                SyncRev: "optio",
                                SyncWaitSecs: "aspernatur",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "inventore",
                                PolicyDir: "ut",
                                SecretType: "libero",
                                SyncRepo: "et",
                                SyncWaitSecs: "libero",
                            },
                            PreventDrift: false,
                            SourceFormat: "ipsum",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "non",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "magni",
                                "placeat",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "quia",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "eaque": "odio",
                        "harum": "doloribus",
                        "a": "aut",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "non",
                                    ClientSecret: "quidem",
                                    KubectlRedirectURI: "neque",
                                    Tenant: "asperiores",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "et",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "culpa",
                                    ClientID: "aliquam",
                                    ClientSecret: "esse",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "totam",
                                    GroupPrefix: "voluptatum",
                                    GroupsClaim: "et",
                                    IssuerURI: "fuga",
                                    KubectlRedirectURI: "nesciunt",
                                    Scopes: "laboriosam",
                                    UserClaim: "aut",
                                    UserPrefix: "cum",
                                },
                                Proxy: "expedita",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "ipsam",
                                    ClientSecret: "eos",
                                    KubectlRedirectURI: "omnis",
                                    Tenant: "adipisci",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "hic",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "consequatur",
                                    ClientID: "distinctio",
                                    ClientSecret: "qui",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "perferendis",
                                    GroupPrefix: "aspernatur",
                                    GroupsClaim: "fuga",
                                    IssuerURI: "quo",
                                    KubectlRedirectURI: "tempore",
                                    Scopes: "explicabo",
                                    UserClaim: "aut",
                                    UserPrefix: "reiciendis",
                                },
                                Proxy: "debitis",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "totam",
                                    ClientSecret: "molestias",
                                    KubectlRedirectURI: "reiciendis",
                                    Tenant: "illo",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "id",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "qui",
                                    ClientID: "quod",
                                    ClientSecret: "sit",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "eaque",
                                    GroupPrefix: "odio",
                                    GroupsClaim: "veniam",
                                    IssuerURI: "reiciendis",
                                    KubectlRedirectURI: "sed",
                                    Scopes: "ea",
                                    UserClaim: "exercitationem",
                                    UserPrefix: "deleniti",
                                },
                                Proxy: "sed",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "MANUAL",
                        Management: "MANAGEMENT_UNSPECIFIED",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "SERVICE_UPDATING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "sint": map[string]interface{}{
                    "numquam": "eligendi",
                },
                "error": map[string]interface{}{
                    "et": "ut",
                    "molestias": "cupiditate",
                    "sint": "explicabo",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Appdevexperience: map[string]interface{}{
                    "in": "vitae",
                    "non": "minima",
                    "voluptatem": "aut",
                    "libero": "voluptas",
                },
                Fleetobservability: map[string]interface{}{
                    "est": "porro",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    ConfigMembership: "voluptas",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "OK",
                        Description: "voluptatem",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "in": "officia",
                },
                State: &shared.FeatureState{
                    Code: "WARNING",
                    Description: "voluptatem",
                    UpdateTime: "dolorem",
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