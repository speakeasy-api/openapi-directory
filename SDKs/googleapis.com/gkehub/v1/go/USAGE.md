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
            FleetDefaultMemberConfig: map[string]interface{}{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            Labels: map[string]string{
                "error": "deserunt",
                "suscipit": "iure",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "debitis": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "ipsa",
                                HTTPSProxy: "delectus",
                                PolicyDir: "tempora",
                                SecretType: "suscipit",
                                SyncBranch: "molestiae",
                                SyncRepo: "minus",
                                SyncRev: "placeat",
                                SyncWaitSecs: "voluptatum",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "iusto",
                                PolicyDir: "excepturi",
                                SecretType: "nisi",
                                SyncRepo: "recusandae",
                                SyncWaitSecs: "temporibus",
                            },
                            PreventDrift: false,
                            SourceFormat: "ab",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "quis",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "deserunt",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "repellendus",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "quo": "odit",
                        "at": "at",
                        "maiores": "molestiae",
                        "quod": "quod",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "totam",
                                    ClientSecret: "porro",
                                    KubectlRedirectURI: "dolorum",
                                    Tenant: "dicta",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "nam",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "officia",
                                    ClientID: "occaecati",
                                    ClientSecret: "fugit",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "deleniti",
                                    GroupPrefix: "hic",
                                    GroupsClaim: "optio",
                                    IssuerURI: "totam",
                                    KubectlRedirectURI: "beatae",
                                    Scopes: "commodi",
                                    UserClaim: "molestiae",
                                    UserPrefix: "modi",
                                },
                                Proxy: "qui",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "impedit",
                                    ClientSecret: "cum",
                                    KubectlRedirectURI: "esse",
                                    Tenant: "ipsum",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "excepturi",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "aspernatur",
                                    ClientID: "perferendis",
                                    ClientSecret: "ad",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "natus",
                                    GroupPrefix: "sed",
                                    GroupsClaim: "iste",
                                    IssuerURI: "dolor",
                                    KubectlRedirectURI: "natus",
                                    Scopes: "laboriosam",
                                    UserClaim: "hic",
                                    UserPrefix: "saepe",
                                },
                                Proxy: "fuga",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                },
                "iste": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "iure",
                                HTTPSProxy: "saepe",
                                PolicyDir: "quidem",
                                SecretType: "architecto",
                                SyncBranch: "ipsa",
                                SyncRepo: "reiciendis",
                                SyncRev: "est",
                                SyncWaitSecs: "mollitia",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "laborum",
                                PolicyDir: "dolores",
                                SecretType: "dolorem",
                                SyncRepo: "corporis",
                                SyncWaitSecs: "explicabo",
                            },
                            PreventDrift: false,
                            SourceFormat: "nobis",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "enim",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "nemo",
                                "minima",
                                "excepturi",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "culpa",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "sapiente": "architecto",
                        "mollitia": "dolorem",
                        "culpa": "consequuntur",
                        "repellat": "mollitia",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
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
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "id",
                                    ClientSecret: "possimus",
                                    KubectlRedirectURI: "aut",
                                    Tenant: "quasi",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "error",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "temporibus",
                                    ClientID: "laborum",
                                    ClientSecret: "quasi",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "reiciendis",
                                    GroupPrefix: "voluptatibus",
                                    GroupsClaim: "vero",
                                    IssuerURI: "nihil",
                                    KubectlRedirectURI: "praesentium",
                                    Scopes: "voluptatibus",
                                    UserClaim: "ipsa",
                                    UserPrefix: "omnis",
                                },
                                Proxy: "voluptate",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: "cum",
                                    ClientSecret: "perferendis",
                                    KubectlRedirectURI: "doloremque",
                                    Tenant: "reprehenderit",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "ut",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "maiores",
                                    ClientID: "dicta",
                                    ClientSecret: "corporis",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "dolore",
                                    GroupPrefix: "iusto",
                                    GroupsClaim: "dicta",
                                    IssuerURI: "harum",
                                    KubectlRedirectURI: "enim",
                                    Scopes: "accusamus",
                                    UserClaim: "commodi",
                                    UserPrefix: "repudiandae",
                                },
                                Proxy: "quae",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
                        Management: "MANAGEMENT_MANUAL",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "DISABLING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "pariatur": map[string]interface{}{
                    "praesentium": "rem",
                    "voluptates": "quasi",
                },
                "repudiandae": map[string]interface{}{
                    "veritatis": "itaque",
                    "incidunt": "enim",
                    "consequatur": "est",
                },
                "quibusdam": map[string]interface{}{
                    "deserunt": "distinctio",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Appdevexperience: map[string]interface{}{
                    "labore": "modi",
                    "qui": "aliquid",
                    "cupiditate": "quos",
                    "perferendis": "magni",
                },
                Fleetobservability: map[string]interface{}{
                    "ipsam": "alias",
                    "fugit": "dolorum",
                    "excepturi": "tempora",
                    "facilis": "tempore",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    ConfigMembership: "labore",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "UNKNOWN",
                        Description: "eum",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "eligendi": "sint",
                },
                State: &shared.FeatureState{
                    Code: "OK",
                    Description: "provident",
                    UpdateTime: "necessitatibus",
                },
            },
        },
        AccessToken: "sint",
        Alt: "media",
        Callback: "dolor",
        FeatureID: "debitis",
        Fields: "a",
        Key: "dolorum",
        OauthToken: "in",
        Parent: "in",
        PrettyPrint: false,
        QuotaUser: "illum",
        RequestID: "maiores",
        UploadType: "rerum",
        UploadProtocol: "dicta",
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