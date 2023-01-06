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
