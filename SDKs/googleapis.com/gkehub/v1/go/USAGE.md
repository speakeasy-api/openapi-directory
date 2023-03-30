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
            Parent: "corrupti",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            FeatureID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
        Request: &shared.FeatureInput{
            FleetDefaultMemberConfig: map[string]interface{}{
                "debitis": "ipsa",
                "delectus": "tempora",
            },
            Labels: map[string]string{
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "excepturi": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "nisi",
                                HTTPSProxy: "recusandae",
                                PolicyDir: "temporibus",
                                SecretType: "ab",
                                SyncBranch: "quis",
                                SyncRepo: "veritatis",
                                SyncRev: "deserunt",
                                SyncWaitSecs: "perferendis",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "ipsam",
                                PolicyDir: "repellendus",
                                SecretType: "sapiente",
                                SyncRepo: "quo",
                                SyncWaitSecs: "odit",
                            },
                            PreventDrift: false,
                            SourceFormat: "at",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "at",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "molestiae",
                                "quod",
                                "quod",
                                "esse",
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
                        Version: "nam",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "occaecati": "fugit",
                        "deleniti": "hic",
                        "optio": "totam",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "commodi",
                                    ClientSecret: "molestiae",
                                    KubectlRedirectURI: "modi",
                                    Tenant: "qui",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "impedit",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "cum",
                                    ClientID: "esse",
                                    ClientSecret: "ipsum",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "excepturi",
                                    GroupPrefix: "aspernatur",
                                    GroupsClaim: "perferendis",
                                    IssuerURI: "ad",
                                    KubectlRedirectURI: "natus",
                                    Scopes: "sed",
                                    UserClaim: "iste",
                                    UserPrefix: "dolor",
                                },
                                Proxy: "natus",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_MANUAL",
                    },
                },
                "saepe": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "fuga",
                                HTTPSProxy: "in",
                                PolicyDir: "corporis",
                                SecretType: "iste",
                                SyncBranch: "iure",
                                SyncRepo: "saepe",
                                SyncRev: "quidem",
                                SyncWaitSecs: "architecto",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "ipsa",
                                PolicyDir: "reiciendis",
                                SecretType: "est",
                                SyncRepo: "mollitia",
                                SyncWaitSecs: "laborum",
                            },
                            PreventDrift: false,
                            SourceFormat: "dolores",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "dolorem",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "explicabo",
                                "nobis",
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
                        Version: "minima",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "accusantium": "iure",
                        "culpa": "doloribus",
                        "sapiente": "architecto",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "dolorem",
                                    ClientSecret: "culpa",
                                    KubectlRedirectURI: "consequuntur",
                                    Tenant: "repellat",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "mollitia",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "occaecati",
                                    ClientID: "numquam",
                                    ClientSecret: "commodi",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "quam",
                                    GroupPrefix: "molestiae",
                                    GroupsClaim: "velit",
                                    IssuerURI: "error",
                                    KubectlRedirectURI: "quia",
                                    Scopes: "quis",
                                    UserClaim: "vitae",
                                    UserPrefix: "laborum",
                                },
                                Proxy: "animi",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "enim",
                                    ClientSecret: "odit",
                                    KubectlRedirectURI: "quo",
                                    Tenant: "sequi",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "tenetur",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "ipsam",
                                    ClientID: "id",
                                    ClientSecret: "possimus",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "aut",
                                    GroupPrefix: "quasi",
                                    GroupsClaim: "error",
                                    IssuerURI: "temporibus",
                                    KubectlRedirectURI: "laborum",
                                    Scopes: "quasi",
                                    UserClaim: "reiciendis",
                                    UserPrefix: "voluptatibus",
                                },
                                Proxy: "vero",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "nihil",
                                    ClientSecret: "praesentium",
                                    KubectlRedirectURI: "voluptatibus",
                                    Tenant: "ipsa",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "omnis",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "voluptate",
                                    ClientID: "cum",
                                    ClientSecret: "perferendis",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "doloremque",
                                    GroupPrefix: "reprehenderit",
                                    GroupsClaim: "ut",
                                    IssuerURI: "maiores",
                                    KubectlRedirectURI: "dicta",
                                    Scopes: "corporis",
                                    UserClaim: "dolore",
                                    UserPrefix: "iusto",
                                },
                                Proxy: "dicta",
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
                "repudiandae": map[string]interface{}{
                    "ipsum": "quidem",
                },
                "molestias": map[string]interface{}{
                    "pariatur": "modi",
                    "praesentium": "rem",
                    "voluptates": "quasi",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Appdevexperience: map[string]interface{}{
                    "sint": "veritatis",
                    "itaque": "incidunt",
                    "enim": "consequatur",
                    "est": "quibusdam",
                },
                Fleetobservability: map[string]interface{}{
                    "deserunt": "distinctio",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    ConfigMembership: "quibusdam",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "OK",
                        Description: "modi",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "aliquid": "cupiditate",
                },
                State: &shared.FeatureState{
                    Code: "WARNING",
                    Description: "perferendis",
                    UpdateTime: "magni",
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