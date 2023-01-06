# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Parent: "totam",
        },
        QueryParams: operations.GkehubProjectsLocationsFeaturesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "nisi",
            Alt: "proto",
            Callback: "provident",
            FeatureID: "omnis",
            Fields: "omnis",
            Key: "qui",
            OauthToken: "sapiente",
            PrettyPrint: true,
            QuotaUser: "accusamus",
            RequestID: "perferendis",
            UploadType: "voluptatem",
            UploadProtocol: "et",
        },
        Request: &shared.FeatureInput{
            Labels: map[string]string{
                "reprehenderit": "sequi",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "ea": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "veritatis",
                                HTTPSProxy: "aspernatur",
                                PolicyDir: "velit",
                                SecretType: "nostrum",
                                SyncBranch: "minus",
                                SyncRepo: "qui",
                                SyncRev: "eius",
                                SyncWaitSecs: "delectus",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "sunt",
                                PolicyDir: "et",
                                SecretType: "consequuntur",
                                SyncRepo: "itaque",
                                SyncWaitSecs: "architecto",
                            },
                            PreventDrift: false,
                            SourceFormat: "repellat",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: true,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "voluptas",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "qui",
                                "minima",
                            },
                            LogDeniesEnabled: true,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "CLOUD_MONITORING",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "ex",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "saepe": "nesciunt",
                        "qui": "nesciunt",
                        "quis": "sint",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "esse",
                                    ClientSecret: "et",
                                    KubectlRedirectURI: "repellendus",
                                    Tenant: "et",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "maxime",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "iure",
                                    ClientID: "numquam",
                                    ClientSecret: "molestias",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "eius",
                                    GroupPrefix: "officiis",
                                    GroupsClaim: "adipisci",
                                    IssuerURI: "omnis",
                                    KubectlRedirectURI: "quia",
                                    Scopes: "saepe",
                                    UserClaim: "ut",
                                    UserPrefix: "eligendi",
                                },
                                Proxy: "non",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "consectetur",
                                    ClientSecret: "omnis",
                                    KubectlRedirectURI: "fugit",
                                    Tenant: "sed",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "at",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "officia",
                                    ClientID: "pariatur",
                                    ClientSecret: "earum",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: true,
                                    ExtraParams: "et",
                                    GroupPrefix: "qui",
                                    GroupsClaim: "id",
                                    IssuerURI: "enim",
                                    KubectlRedirectURI: "molestiae",
                                    Scopes: "repudiandae",
                                    UserClaim: "facere",
                                    UserPrefix: "nam",
                                },
                                Proxy: "aut",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "cumque",
                                    ClientSecret: "sint",
                                    KubectlRedirectURI: "repellendus",
                                    Tenant: "cumque",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "asperiores",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "ut",
                                    ClientID: "quia",
                                    ClientSecret: "tenetur",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: true,
                                    ExtraParams: "sit",
                                    GroupPrefix: "ullam",
                                    GroupsClaim: "voluptas",
                                    IssuerURI: "mollitia",
                                    KubectlRedirectURI: "laborum",
                                    Scopes: "voluptatem",
                                    UserClaim: "libero",
                                    UserPrefix: "et",
                                },
                                Proxy: "velit",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
                        Management: "MANAGEMENT_MANUAL",
                    },
                },
                "aut": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: true,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "eum",
                                HTTPSProxy: "quibusdam",
                                PolicyDir: "quo",
                                SecretType: "enim",
                                SyncBranch: "enim",
                                SyncRepo: "reprehenderit",
                                SyncRev: "nisi",
                                SyncWaitSecs: "deleniti",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "maiores",
                                PolicyDir: "cumque",
                                SecretType: "aut",
                                SyncRepo: "quo",
                                SyncWaitSecs: "ad",
                            },
                            PreventDrift: false,
                            SourceFormat: "praesentium",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: false,
                            EnablePodTreeLabels: true,
                            Enabled: true,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "laboriosam",
                            Enabled: true,
                            ExemptableNamespaces: []string{
                                "veritatis",
                                "fugit",
                            },
                            LogDeniesEnabled: true,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryInstalled: true,
                        },
                        Version: "et",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "voluptas": "cumque",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "voluptatem",
                                    ClientSecret: "tempore",
                                    KubectlRedirectURI: "cum",
                                    Tenant: "ratione",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "eius",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "et",
                                    ClientID: "consequatur",
                                    ClientSecret: "quasi",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: true,
                                    ExtraParams: "voluptas",
                                    GroupPrefix: "et",
                                    GroupsClaim: "quia",
                                    IssuerURI: "possimus",
                                    KubectlRedirectURI: "sit",
                                    Scopes: "nostrum",
                                    UserClaim: "nesciunt",
                                    UserPrefix: "vero",
                                },
                                Proxy: "quae",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "modi",
                                    ClientSecret: "incidunt",
                                    KubectlRedirectURI: "ad",
                                    Tenant: "animi",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "laudantium",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "repellendus",
                                    ClientID: "ea",
                                    ClientSecret: "facilis",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: true,
                                    ExtraParams: "atque",
                                    GroupPrefix: "pariatur",
                                    GroupsClaim: "beatae",
                                    IssuerURI: "et",
                                    KubectlRedirectURI: "cum",
                                    Scopes: "occaecati",
                                    UserClaim: "quo",
                                    UserPrefix: "totam",
                                },
                                Proxy: "in",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "MANUAL",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "UPDATING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "eaque": map[string]interface{}{
                    "consequatur": "laudantium",
                },
                "fugit": map[string]interface{}{
                    "ducimus": "dolor",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Appdevexperience: map[string]interface{}{
                    "amet": "exercitationem",
                    "et": "aut",
                    "corrupti": "consequuntur",
                },
                Fleetobservability: map[string]interface{}{
                    "consequatur": "iusto",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    ConfigMembership: "est",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "OK",
                        Description: "quia",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "quibusdam": "et",
                    "recusandae": "voluptatibus",
                    "consequatur": "tenetur",
                },
                State: &shared.FeatureState{
                    Code: "OK",
                    Description: "sit",
                    UpdateTime: "amet",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `GkehubProjectsLocationsFeaturesCreate` - Adds a new Feature.
* `GkehubProjectsLocationsFeaturesList` - Lists Features in a given project and location.
* `GkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `GkehubProjectsLocationsMembershipsCreate` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `GkehubProjectsLocationsMembershipsGenerateConnectManifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `GkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `GkehubProjectsLocationsMembershipsList` - Lists Memberships in a given project and location.
* `GkehubProjectsLocationsMembershipsPatch` - Updates an existing Membership.
* `GkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `GkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `GkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `GkehubProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `GkehubProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `GkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
