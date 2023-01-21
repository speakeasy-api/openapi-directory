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
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: true,
                        Version: "vitae",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "PRIVILEGED",
                        Version: "dolores",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: true,
                            Enabled: false,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "odio",
                                HTTPSProxy: "dolore",
                                PolicyDir: "id",
                                SecretType: "aspernatur",
                                SyncBranch: "accusantium",
                                SyncRepo: "totam",
                                SyncRev: "commodi",
                                SyncWaitSecs: "quis",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "est",
                                PolicyDir: "aut",
                                SecretType: "odit",
                                SyncRepo: "non",
                                SyncWaitSecs: "voluptas",
                            },
                            PreventDrift: true,
                            SourceFormat: "aut",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: false,
                            Enabled: false,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "autem",
                            Enabled: true,
                            ExemptableNamespaces: []string{
                                "odio",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: true,
                        },
                        Version: "ut",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "reprehenderit": "tempore",
                        "maiores": "incidunt",
                        "dolor": "beatae",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "in",
                                    ClientSecret: "et",
                                    KubectlRedirectURI: "omnis",
                                    Tenant: "ipsum",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "dolores",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "placeat",
                                    ClientID: "vel",
                                    ClientSecret: "rerum",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: true,
                                    ExtraParams: "quam",
                                    GroupPrefix: "reprehenderit",
                                    GroupsClaim: "qui",
                                    IssuerURI: "qui",
                                    KubectlRedirectURI: "unde",
                                    Scopes: "in",
                                    UserClaim: "autem",
                                    UserPrefix: "qui",
                                },
                                Proxy: "ut",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "itaque",
                                    ClientSecret: "ab",
                                    KubectlRedirectURI: "neque",
                                    Tenant: "ullam",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "accusantium",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "esse",
                                    ClientID: "architecto",
                                    ClientSecret: "quam",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "soluta",
                                    GroupPrefix: "sunt",
                                    GroupsClaim: "voluptates",
                                    IssuerURI: "magni",
                                    KubectlRedirectURI: "et",
                                    Scopes: "optio",
                                    UserClaim: "qui",
                                    UserPrefix: "earum",
                                },
                                Proxy: "illo",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "AUTOMATIC",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "consequatur",
                            ExemptableNamespaces: []string{
                                "commodi",
                                "error",
                            },
                            InstallSpec: "INSTALL_SPEC_SUSPENDED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "soluta",
                    },
                },
                "aut": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: true,
                        EnableStackdriverOnApplications: true,
                        Version: "laudantium",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "SECURITY_POLICY_UNSPECIFIED",
                        Version: "ipsa",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: false,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: false,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "atque",
                                HTTPSProxy: "ratione",
                                PolicyDir: "quisquam",
                                SecretType: "explicabo",
                                SyncBranch: "ea",
                                SyncRepo: "maxime",
                                SyncRev: "eum",
                                SyncWaitSecs: "perferendis",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "et",
                                PolicyDir: "rerum",
                                SecretType: "reiciendis",
                                SyncRepo: "quis",
                                SyncWaitSecs: "cumque",
                            },
                            PreventDrift: true,
                            SourceFormat: "necessitatibus",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: true,
                            Enabled: true,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "labore",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "ad",
                                "expedita",
                            },
                            LogDeniesEnabled: true,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                    "MONITORING_BACKEND_UNSPECIFIED",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: false,
                        },
                        Version: "sunt",
                    },
                    FleetInherited: false,
                    Fleetobservability: map[string]interface{}{
                        "quis": "vel",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "placeat",
                                    ClientSecret: "qui",
                                    KubectlRedirectURI: "nisi",
                                    Tenant: "quis",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "porro",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "rerum",
                                    ClientID: "et",
                                    ClientSecret: "accusamus",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: false,
                                    ExtraParams: "rerum",
                                    GroupPrefix: "ut",
                                    GroupsClaim: "laborum",
                                    IssuerURI: "fugit",
                                    KubectlRedirectURI: "quis",
                                    Scopes: "minus",
                                    UserClaim: "soluta",
                                    UserPrefix: "aperiam",
                                },
                                Proxy: "consequuntur",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "excepturi",
                                    ClientSecret: "mollitia",
                                    KubectlRedirectURI: "inventore",
                                    Tenant: "delectus",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "animi",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "animi",
                                    ClientID: "ut",
                                    ClientSecret: "aliquam",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "sed",
                                    GroupPrefix: "et",
                                    GroupsClaim: "consequuntur",
                                    IssuerURI: "non",
                                    KubectlRedirectURI: "cupiditate",
                                    Scopes: "provident",
                                    UserClaim: "molestiae",
                                    UserPrefix: "pariatur",
                                },
                                Proxy: "quasi",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "MANUAL",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "qui",
                            ExemptableNamespaces: []string{
                                "possimus",
                                "modi",
                            },
                            InstallSpec: "INSTALL_SPEC_ENABLED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "voluptatem",
                    },
                },
                "quia": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: false,
                        EnableStackdriverOnApplications: false,
                        Version: "quae",
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: "NON_PRIVILEGED",
                        Version: "ut",
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: true,
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: true,
                            Enabled: true,
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: "voluptatem",
                                HTTPSProxy: "dolorum",
                                PolicyDir: "doloribus",
                                SecretType: "saepe",
                                SyncBranch: "sunt",
                                SyncRepo: "earum",
                                SyncRev: "et",
                                SyncWaitSecs: "ut",
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: "asperiores",
                                PolicyDir: "et",
                                SecretType: "est",
                                SyncRepo: "ipsum",
                                SyncWaitSecs: "quam",
                            },
                            PreventDrift: false,
                            SourceFormat: "nihil",
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: true,
                            EnablePodTreeLabels: false,
                            Enabled: true,
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: "non",
                            Enabled: false,
                            ExemptableNamespaces: []string{
                                "possimus",
                                "illo",
                                "qui",
                            },
                            LogDeniesEnabled: false,
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: true,
                            ReferentialRulesEnabled: true,
                            TemplateLibraryInstalled: true,
                        },
                        Version: "dolore",
                    },
                    FleetInherited: true,
                    Fleetobservability: map[string]interface{}{
                        "officia": "modi",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "voluptas",
                                    ClientSecret: "amet",
                                    KubectlRedirectURI: "et",
                                    Tenant: "a",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: false,
                                },
                                Name: "excepturi",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "autem",
                                    ClientID: "corporis",
                                    ClientSecret: "dicta",
                                    DeployCloudConsoleProxy: true,
                                    EnableAccessToken: true,
                                    ExtraParams: "quae",
                                    GroupPrefix: "nisi",
                                    GroupsClaim: "recusandae",
                                    IssuerURI: "qui",
                                    KubectlRedirectURI: "minus",
                                    Scopes: "et",
                                    UserClaim: "rerum",
                                    UserPrefix: "ut",
                                },
                                Proxy: "rem",
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureAdConfigInput{
                                    ClientID: "eos",
                                    ClientSecret: "et",
                                    KubectlRedirectURI: "reiciendis",
                                    Tenant: "aspernatur",
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: true,
                                },
                                Name: "porro",
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: "nihil",
                                    ClientID: "adipisci",
                                    ClientSecret: "consequatur",
                                    DeployCloudConsoleProxy: false,
                                    EnableAccessToken: false,
                                    ExtraParams: "atque",
                                    GroupPrefix: "amet",
                                    GroupsClaim: "nisi",
                                    IssuerURI: "quidem",
                                    KubectlRedirectURI: "est",
                                    Scopes: "quo",
                                    UserClaim: "vero",
                                    UserPrefix: "alias",
                                },
                                Proxy: "totam",
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
                        Management: "MANAGEMENT_AUTOMATIC",
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: "repellat",
                            ExemptableNamespaces: []string{
                                "omnis",
                                "totam",
                                "aut",
                            },
                            InstallSpec: "INSTALL_SPEC_UNSPECIFIED",
                            LogDeniesEnabled: false,
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    "PROMETHEUS",
                                    "PROMETHEUS",
                                },
                            },
                            MutationEnabled: false,
                            ReferentialRulesEnabled: false,
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: false,
                            },
                        },
                        Version: "veniam",
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: "ENABLING",
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "rerum": map[string]interface{}{
                    "et": "saepe",
                    "commodi": "in",
                    "quibusdam": "asperiores",
                },
                "quo": map[string]interface{}{
                    "soluta": "tempora",
                },
                "commodi": map[string]interface{}{
                    "facere": "in",
                    "et": "odit",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: true,
                        EnableStackdriverOnApplications: true,
                        Version: "ipsum",
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "perspiciatis": "et",
                },
                Fleetobservability: map[string]interface{}{
                    "voluptatem": "ex",
                    "magni": "vero",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: "BILLING_UNSPECIFIED",
                    ConfigMembership: "cumque",
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: "UNKNOWN",
                        Description: "non",
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "nam": "beatae",
                    "quae": "qui",
                    "magni": "minus",
                },
                State: &shared.FeatureState{
                    Code: "CODE_UNSPECIFIED",
                    Description: "aut",
                    UpdateTime: "neque",
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
* `GkehubProjectsLocationsFeaturesPatch` - Updates an existing Feature.
* `GkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `GkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `GkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `GkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `GkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `GkehubProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `GkehubProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `GkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
