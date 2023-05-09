# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/gkehub/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.GkehubProjectsLocationsFeaturesCreate(ctx, operations.GkehubProjectsLocationsFeaturesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
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
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("ipsa"),
                                HTTPSProxy: sdk.String("delectus"),
                                PolicyDir: sdk.String("tempora"),
                                SecretType: sdk.String("suscipit"),
                                SyncBranch: sdk.String("molestiae"),
                                SyncRepo: sdk.String("minus"),
                                SyncRev: sdk.String("placeat"),
                                SyncWaitSecs: sdk.String("voluptatum"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("iusto"),
                                PolicyDir: sdk.String("excepturi"),
                                SecretType: sdk.String("nisi"),
                                SyncRepo: sdk.String("recusandae"),
                                SyncWaitSecs: sdk.String("temporibus"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("ab"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("quis"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "deserunt",
                            },
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryInstalled: sdk.Bool(false),
                        },
                        Version: sdk.String("repellendus"),
                    },
                    FleetInherited: sdk.Bool(false),
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
                                    ClientID: sdk.String("totam"),
                                    ClientSecret: sdk.String("porro"),
                                    KubectlRedirectURI: sdk.String("dolorum"),
                                    Tenant: sdk.String("dicta"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Luke McCullough"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("hic"),
                                    ClientID: sdk.String("optio"),
                                    ClientSecret: sdk.String("totam"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("beatae"),
                                    GroupPrefix: sdk.String("commodi"),
                                    GroupsClaim: sdk.String("molestiae"),
                                    IssuerURI: sdk.String("modi"),
                                    KubectlRedirectURI: sdk.String("qui"),
                                    Scopes: sdk.String("impedit"),
                                    UserClaim: sdk.String("cum"),
                                    UserPrefix: sdk.String("esse"),
                                },
                                Proxy: sdk.String("ipsum"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("excepturi"),
                                    ClientSecret: sdk.String("aspernatur"),
                                    KubectlRedirectURI: sdk.String("perferendis"),
                                    Tenant: sdk.String("ad"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Louis Moore"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("laboriosam"),
                                    ClientID: sdk.String("hic"),
                                    ClientSecret: sdk.String("saepe"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("fuga"),
                                    GroupPrefix: sdk.String("in"),
                                    GroupsClaim: sdk.String("corporis"),
                                    IssuerURI: sdk.String("iste"),
                                    KubectlRedirectURI: sdk.String("iure"),
                                    Scopes: sdk.String("saepe"),
                                    UserClaim: sdk.String("quidem"),
                                    UserPrefix: sdk.String("architecto"),
                                },
                                Proxy: sdk.String("ipsa"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumManual.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementManual.ToPointer(),
                    },
                },
                "mollitia": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("laborum"),
                                HTTPSProxy: sdk.String("dolores"),
                                PolicyDir: sdk.String("dolorem"),
                                SecretType: sdk.String("corporis"),
                                SyncBranch: sdk.String("explicabo"),
                                SyncRepo: sdk.String("nobis"),
                                SyncRev: sdk.String("enim"),
                                SyncWaitSecs: sdk.String("omnis"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("nemo"),
                                PolicyDir: sdk.String("minima"),
                                SecretType: sdk.String("excepturi"),
                                SyncRepo: sdk.String("accusantium"),
                                SyncWaitSecs: sdk.String("iure"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("culpa"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("doloribus"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "architecto",
                                "mollitia",
                                "dolorem",
                                "culpa",
                            },
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumCloudMonitoring,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryInstalled: sdk.Bool(false),
                        },
                        Version: sdk.String("mollitia"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "numquam": "commodi",
                        "quam": "molestiae",
                        "velit": "error",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("quis"),
                                    ClientSecret: sdk.String("vitae"),
                                    KubectlRedirectURI: sdk.String("laborum"),
                                    Tenant: sdk.String("animi"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Christina Satterfield"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("ipsam"),
                                    ClientID: sdk.String("id"),
                                    ClientSecret: sdk.String("possimus"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("aut"),
                                    GroupPrefix: sdk.String("quasi"),
                                    GroupsClaim: sdk.String("error"),
                                    IssuerURI: sdk.String("temporibus"),
                                    KubectlRedirectURI: sdk.String("laborum"),
                                    Scopes: sdk.String("quasi"),
                                    UserClaim: sdk.String("reiciendis"),
                                    UserPrefix: sdk.String("voluptatibus"),
                                },
                                Proxy: sdk.String("vero"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumAutomatic.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementAutomatic.ToPointer(),
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: shared.FeatureResourceStateStateEnumServiceUpdating.ToPointer(),
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "omnis": map[string]interface{}{
                    "cum": "perferendis",
                    "doloremque": "reprehenderit",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Appdevexperience: map[string]interface{}{
                    "maiores": "dicta",
                    "corporis": "dolore",
                },
                Fleetobservability: map[string]interface{}{
                    "dicta": "harum",
                    "enim": "accusamus",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    ConfigMembership: sdk.String("commodi"),
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: shared.StatusCodeEnumUnknown.ToPointer(),
                        Description: sdk.String("quae"),
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "quidem": "molestias",
                },
                State: &shared.FeatureState{
                    Code: shared.FeatureStateCodeEnumWarning.ToPointer(),
                    Description: sdk.String("pariatur"),
                    UpdateTime: sdk.String("modi"),
                },
            },
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptates"),
        FeatureID: sdk.String("quasi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("veritatis"),
        Parent: "itaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        RequestID: sdk.String("enim"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("est"),
    }, operations.GkehubProjectsLocationsFeaturesCreateSecurity{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [GkehubProjectsLocationsFeaturesCreate](docs/projects/README.md#gkehubprojectslocationsfeaturescreate) - Adds a new Feature.
* [GkehubProjectsLocationsFeaturesList](docs/projects/README.md#gkehubprojectslocationsfeatureslist) - Lists Features in a given project and location.
* [GkehubProjectsLocationsList](docs/projects/README.md#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [GkehubProjectsLocationsMembershipsBindingsCreate](docs/projects/README.md#gkehubprojectslocationsmembershipsbindingscreate) - Creates a MembershipBinding.
* [GkehubProjectsLocationsMembershipsBindingsList](docs/projects/README.md#gkehubprojectslocationsmembershipsbindingslist) - Lists MembershipBindings.
* [GkehubProjectsLocationsMembershipsBindingsPatch](docs/projects/README.md#gkehubprojectslocationsmembershipsbindingspatch) - Updates a MembershipBinding.
* [GkehubProjectsLocationsMembershipsCreate](docs/projects/README.md#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [GkehubProjectsLocationsMembershipsGenerateConnectManifest](docs/projects/README.md#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [GkehubProjectsLocationsMembershipsGetIamPolicy](docs/projects/README.md#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [GkehubProjectsLocationsMembershipsList](docs/projects/README.md#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [GkehubProjectsLocationsMembershipsSetIamPolicy](docs/projects/README.md#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [GkehubProjectsLocationsMembershipsTestIamPermissions](docs/projects/README.md#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [GkehubProjectsLocationsOperationsCancel](docs/projects/README.md#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [GkehubProjectsLocationsOperationsList](docs/projects/README.md#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [GkehubProjectsLocationsScopesCreate](docs/projects/README.md#gkehubprojectslocationsscopescreate) - Creates a Scope.
* [GkehubProjectsLocationsScopesDelete](docs/projects/README.md#gkehubprojectslocationsscopesdelete) - Deletes a Scope.
* [GkehubProjectsLocationsScopesGet](docs/projects/README.md#gkehubprojectslocationsscopesget) - Returns the details of a Scope.
* [GkehubProjectsLocationsScopesList](docs/projects/README.md#gkehubprojectslocationsscopeslist) - Lists Scopes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
