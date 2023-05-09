# Projects

### Available Operations

* [GkehubProjectsLocationsFeaturesCreate](#gkehubprojectslocationsfeaturescreate) - Adds a new Feature.
* [GkehubProjectsLocationsFeaturesList](#gkehubprojectslocationsfeatureslist) - Lists Features in a given project and location.
* [GkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [GkehubProjectsLocationsMembershipsBindingsCreate](#gkehubprojectslocationsmembershipsbindingscreate) - Creates a MembershipBinding.
* [GkehubProjectsLocationsMembershipsBindingsList](#gkehubprojectslocationsmembershipsbindingslist) - Lists MembershipBindings.
* [GkehubProjectsLocationsMembershipsBindingsPatch](#gkehubprojectslocationsmembershipsbindingspatch) - Updates a MembershipBinding.
* [GkehubProjectsLocationsMembershipsCreate](#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [GkehubProjectsLocationsMembershipsGenerateConnectManifest](#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [GkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [GkehubProjectsLocationsMembershipsList](#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [GkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [GkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [GkehubProjectsLocationsOperationsCancel](#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [GkehubProjectsLocationsOperationsList](#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [GkehubProjectsLocationsScopesCreate](#gkehubprojectslocationsscopescreate) - Creates a Scope.
* [GkehubProjectsLocationsScopesDelete](#gkehubprojectslocationsscopesdelete) - Deletes a Scope.
* [GkehubProjectsLocationsScopesGet](#gkehubprojectslocationsscopesget) - Returns the details of a Scope.
* [GkehubProjectsLocationsScopesList](#gkehubprojectslocationsscopeslist) - Lists Scopes.

## GkehubProjectsLocationsFeaturesCreate

Adds a new Feature.

### Example Usage

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
                "deserunt": "distinctio",
            },
            Labels: map[string]string{
                "labore": "modi",
                "qui": "aliquid",
                "cupiditate": "quos",
                "perferendis": "magni",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "ipsam": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("alias"),
                                HTTPSProxy: sdk.String("fugit"),
                                PolicyDir: sdk.String("dolorum"),
                                SecretType: sdk.String("excepturi"),
                                SyncBranch: sdk.String("tempora"),
                                SyncRepo: sdk.String("facilis"),
                                SyncRev: sdk.String("tempore"),
                                SyncWaitSecs: sdk.String("labore"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("delectus"),
                                PolicyDir: sdk.String("eum"),
                                SecretType: sdk.String("non"),
                                SyncRepo: sdk.String("eligendi"),
                                SyncWaitSecs: sdk.String("sint"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("aliquid"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("provident"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "sint",
                                "officia",
                                "dolor",
                                "debitis",
                            },
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumCloudMonitoring,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumCloudMonitoring,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryInstalled: sdk.Bool(false),
                        },
                        Version: sdk.String("maiores"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "dicta": "magnam",
                        "cumque": "facere",
                        "ea": "aliquid",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("accusamus"),
                                    ClientSecret: sdk.String("non"),
                                    KubectlRedirectURI: sdk.String("occaecati"),
                                    Tenant: sdk.String("enim"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Toby Pouros"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("id"),
                                    ClientID: sdk.String("blanditiis"),
                                    ClientSecret: sdk.String("deleniti"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("sapiente"),
                                    GroupPrefix: sdk.String("amet"),
                                    GroupsClaim: sdk.String("deserunt"),
                                    IssuerURI: sdk.String("nisi"),
                                    KubectlRedirectURI: sdk.String("vel"),
                                    Scopes: sdk.String("natus"),
                                    UserClaim: sdk.String("omnis"),
                                    UserPrefix: sdk.String("molestiae"),
                                },
                                Proxy: sdk.String("perferendis"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("nihil"),
                                    ClientSecret: sdk.String("magnam"),
                                    KubectlRedirectURI: sdk.String("distinctio"),
                                    Tenant: sdk.String("id"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Jamie Hoppe"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("eum"),
                                    ClientID: sdk.String("vero"),
                                    ClientSecret: sdk.String("aspernatur"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("architecto"),
                                    GroupPrefix: sdk.String("magnam"),
                                    GroupsClaim: sdk.String("et"),
                                    IssuerURI: sdk.String("excepturi"),
                                    KubectlRedirectURI: sdk.String("ullam"),
                                    Scopes: sdk.String("provident"),
                                    UserClaim: sdk.String("quos"),
                                    UserPrefix: sdk.String("sint"),
                                },
                                Proxy: sdk.String("accusantium"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("mollitia"),
                                    ClientSecret: sdk.String("reiciendis"),
                                    KubectlRedirectURI: sdk.String("mollitia"),
                                    Tenant: sdk.String("ad"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Carmen Treutel"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("quasi"),
                                    ClientID: sdk.String("iure"),
                                    ClientSecret: sdk.String("doloribus"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("debitis"),
                                    GroupPrefix: sdk.String("eius"),
                                    GroupsClaim: sdk.String("maxime"),
                                    IssuerURI: sdk.String("deleniti"),
                                    KubectlRedirectURI: sdk.String("facilis"),
                                    Scopes: sdk.String("in"),
                                    UserClaim: sdk.String("architecto"),
                                    UserPrefix: sdk.String("architecto"),
                                },
                                Proxy: sdk.String("repudiandae"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumAutomatic.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementManual.ToPointer(),
                    },
                },
                "nihil": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("repellat"),
                                HTTPSProxy: sdk.String("quibusdam"),
                                PolicyDir: sdk.String("sed"),
                                SecretType: sdk.String("saepe"),
                                SyncBranch: sdk.String("pariatur"),
                                SyncRepo: sdk.String("accusantium"),
                                SyncRev: sdk.String("consequuntur"),
                                SyncWaitSecs: sdk.String("praesentium"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("natus"),
                                PolicyDir: sdk.String("magni"),
                                SecretType: sdk.String("sunt"),
                                SyncRepo: sdk.String("quo"),
                                SyncWaitSecs: sdk.String("illum"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("pariatur"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("maxime"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "excepturi",
                                "odit",
                            },
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumMonitoringBackendUnspecified,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumMonitoringBackendUnspecified,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryInstalled: sdk.Bool(false),
                        },
                        Version: sdk.String("maiores"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "ipsam": "voluptate",
                        "autem": "nam",
                        "eaque": "pariatur",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("voluptatibus"),
                                    ClientSecret: sdk.String("perferendis"),
                                    KubectlRedirectURI: sdk.String("fugiat"),
                                    Tenant: sdk.String("amet"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Erma Hessel"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("nobis"),
                                    ClientID: sdk.String("dolores"),
                                    ClientSecret: sdk.String("quis"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("totam"),
                                    GroupPrefix: sdk.String("dignissimos"),
                                    GroupsClaim: sdk.String("eaque"),
                                    IssuerURI: sdk.String("quis"),
                                    KubectlRedirectURI: sdk.String("nesciunt"),
                                    Scopes: sdk.String("eos"),
                                    UserClaim: sdk.String("perferendis"),
                                    UserPrefix: sdk.String("dolores"),
                                },
                                Proxy: sdk.String("minus"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("quam"),
                                    ClientSecret: sdk.String("dolor"),
                                    KubectlRedirectURI: sdk.String("vero"),
                                    Tenant: sdk.String("nostrum"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Percy Mohr"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("voluptatem"),
                                    ClientID: sdk.String("porro"),
                                    ClientSecret: sdk.String("consequuntur"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("blanditiis"),
                                    GroupPrefix: sdk.String("error"),
                                    GroupsClaim: sdk.String("eaque"),
                                    IssuerURI: sdk.String("occaecati"),
                                    KubectlRedirectURI: sdk.String("rerum"),
                                    Scopes: sdk.String("adipisci"),
                                    UserClaim: sdk.String("asperiores"),
                                    UserPrefix: sdk.String("earum"),
                                },
                                Proxy: sdk.String("modi"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumAutomatic.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementManual.ToPointer(),
                    },
                },
                "deleniti": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("pariatur"),
                                HTTPSProxy: sdk.String("provident"),
                                PolicyDir: sdk.String("nobis"),
                                SecretType: sdk.String("libero"),
                                SyncBranch: sdk.String("delectus"),
                                SyncRepo: sdk.String("quaerat"),
                                SyncRev: sdk.String("quos"),
                                SyncWaitSecs: sdk.String("aliquid"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("dolorem"),
                                PolicyDir: sdk.String("dolorem"),
                                SecretType: sdk.String("dolor"),
                                SyncRepo: sdk.String("qui"),
                                SyncWaitSecs: sdk.String("ipsum"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("hic"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("excepturi"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "voluptate",
                                "dignissimos",
                                "reiciendis",
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
                        Version: sdk.String("numquam"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "ipsa": "ipsa",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("odio"),
                                    ClientSecret: sdk.String("quaerat"),
                                    KubectlRedirectURI: sdk.String("accusamus"),
                                    Tenant: sdk.String("quidem"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Hector Mosciski"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("sit"),
                                    ClientID: sdk.String("fugiat"),
                                    ClientSecret: sdk.String("ab"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("soluta"),
                                    GroupPrefix: sdk.String("dolorum"),
                                    GroupsClaim: sdk.String("iusto"),
                                    IssuerURI: sdk.String("voluptate"),
                                    KubectlRedirectURI: sdk.String("dolorum"),
                                    Scopes: sdk.String("deleniti"),
                                    UserClaim: sdk.String("omnis"),
                                    UserPrefix: sdk.String("necessitatibus"),
                                },
                                Proxy: sdk.String("distinctio"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("asperiores"),
                                    ClientSecret: sdk.String("nihil"),
                                    KubectlRedirectURI: sdk.String("ipsum"),
                                    Tenant: sdk.String("voluptate"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Elbert Gislason I"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("optio"),
                                    ClientID: sdk.String("accusamus"),
                                    ClientSecret: sdk.String("ad"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("saepe"),
                                    GroupPrefix: sdk.String("suscipit"),
                                    GroupsClaim: sdk.String("deserunt"),
                                    IssuerURI: sdk.String("provident"),
                                    KubectlRedirectURI: sdk.String("minima"),
                                    Scopes: sdk.String("repellendus"),
                                    UserClaim: sdk.String("totam"),
                                    UserPrefix: sdk.String("similique"),
                                },
                                Proxy: sdk.String("alias"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumManual.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementUnspecified.ToPointer(),
                    },
                },
                "tempora": shared.MembershipFeatureSpecInput{
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("vel"),
                                HTTPSProxy: sdk.String("quod"),
                                PolicyDir: sdk.String("officiis"),
                                SecretType: sdk.String("qui"),
                                SyncBranch: sdk.String("dolorum"),
                                SyncRepo: sdk.String("a"),
                                SyncRev: sdk.String("esse"),
                                SyncWaitSecs: sdk.String("harum"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("iusto"),
                                PolicyDir: sdk.String("ipsum"),
                                SecretType: sdk.String("quisquam"),
                                SyncRepo: sdk.String("tenetur"),
                                SyncWaitSecs: sdk.String("amet"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("tempore"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("accusamus"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "enim",
                                "dolorem",
                            },
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumMonitoringBackendUnspecified,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumCloudMonitoring,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryInstalled: sdk.Bool(false),
                        },
                        Version: sdk.String("neque"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "vel": "libero",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("deserunt"),
                                    ClientSecret: sdk.String("quam"),
                                    KubectlRedirectURI: sdk.String("ipsum"),
                                    Tenant: sdk.String("incidunt"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Shelly Schoen"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("dicta"),
                                    ClientID: sdk.String("laborum"),
                                    ClientSecret: sdk.String("totam"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("incidunt"),
                                    GroupPrefix: sdk.String("aspernatur"),
                                    GroupsClaim: sdk.String("dolores"),
                                    IssuerURI: sdk.String("distinctio"),
                                    KubectlRedirectURI: sdk.String("facilis"),
                                    Scopes: sdk.String("aliquid"),
                                    UserClaim: sdk.String("quam"),
                                    UserPrefix: sdk.String("molestias"),
                                },
                                Proxy: sdk.String("temporibus"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("qui"),
                                    ClientSecret: sdk.String("neque"),
                                    KubectlRedirectURI: sdk.String("fugit"),
                                    Tenant: sdk.String("magni"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Ashley Hermiston"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("voluptatem"),
                                    ClientID: sdk.String("cumque"),
                                    ClientSecret: sdk.String("soluta"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("nobis"),
                                    GroupPrefix: sdk.String("et"),
                                    GroupsClaim: sdk.String("saepe"),
                                    IssuerURI: sdk.String("ipsum"),
                                    KubectlRedirectURI: sdk.String("veritatis"),
                                    Scopes: sdk.String("nobis"),
                                    UserClaim: sdk.String("quos"),
                                    UserPrefix: sdk.String("tempore"),
                                },
                                Proxy: sdk.String("cupiditate"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumControlPlaneManagementUnspecified.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementManual.ToPointer(),
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: shared.FeatureResourceStateStateEnumEnabling.ToPointer(),
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "labore": map[string]interface{}{
                    "dolorum": "architecto",
                },
                "quae": map[string]interface{}{
                    "quas": "itaque",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Appdevexperience: map[string]interface{}{
                    "est": "repellendus",
                },
                Fleetobservability: map[string]interface{}{
                    "doloribus": "ut",
                    "facilis": "cupiditate",
                    "qui": "quae",
                    "laudantium": "odio",
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    ConfigMembership: sdk.String("occaecati"),
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: shared.StatusCodeEnumUnknown.ToPointer(),
                        Description: sdk.String("quisquam"),
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "omnis": "quis",
                    "ipsum": "delectus",
                    "voluptate": "consectetur",
                    "vero": "tenetur",
                },
                State: &shared.FeatureState{
                    Code: shared.FeatureStateCodeEnumOk.ToPointer(),
                    Description: sdk.String("hic"),
                    UpdateTime: sdk.String("distinctio"),
                },
            },
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("similique"),
        FeatureID: sdk.String("facilis"),
        Fields: sdk.String("vero"),
        Key: sdk.String("ducimus"),
        OauthToken: sdk.String("dolore"),
        Parent: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        RequestID: sdk.String("sequi"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("impedit"),
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

## GkehubProjectsLocationsFeaturesList

Lists Features in a given project and location.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsFeaturesList(ctx, operations.GkehubProjectsLocationsFeaturesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("fugit"),
        Filter: sdk.String("porro"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("doloribus"),
        OrderBy: sdk.String("iusto"),
        PageSize: sdk.Int64(753570),
        PageToken: sdk.String("ducimus"),
        Parent: "alias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.GkehubProjectsLocationsFeaturesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFeaturesResponse != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsList(ctx, operations.GkehubProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("magnam"),
        Filter: sdk.String("ratione"),
        Key: sdk.String("ex"),
        Name: "Willie Fahey III",
        OauthToken: sdk.String("nulla"),
        PageSize: sdk.Int64(569211),
        PageToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.GkehubProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsMembershipsBindingsCreate

Creates a MembershipBinding.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsBindingsCreate(ctx, operations.GkehubProjectsLocationsMembershipsBindingsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MembershipBindingInput: &shared.MembershipBindingInput{
            Fleet: sdk.Bool(false),
            Name: sdk.String("Krista Herzog"),
            Scope: sdk.String("inventore"),
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("consectetur"),
        Key: sdk.String("recusandae"),
        MembershipBindingID: sdk.String("aspernatur"),
        OauthToken: sdk.String("minima"),
        Parent: "eaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("aut"),
    }, operations.GkehubProjectsLocationsMembershipsBindingsCreateSecurity{
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

## GkehubProjectsLocationsMembershipsBindingsList

Lists MembershipBindings.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsBindingsList(ctx, operations.GkehubProjectsLocationsMembershipsBindingsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("inventore"),
        PageSize: sdk.Int64(250622),
        PageToken: sdk.String("et"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("placeat"),
        UploadProtocol: sdk.String("velit"),
    }, operations.GkehubProjectsLocationsMembershipsBindingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMembershipBindingsResponse != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsMembershipsBindingsPatch

Updates a MembershipBinding.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsBindingsPatch(ctx, operations.GkehubProjectsLocationsMembershipsBindingsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MembershipBindingInput: &shared.MembershipBindingInput{
            Fleet: sdk.Bool(false),
            Name: sdk.String("Vicky Lynch"),
            Scope: sdk.String("voluptas"),
        },
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("explicabo"),
        Name: "Jose Kreiger",
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UpdateMask: sdk.String("esse"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.GkehubProjectsLocationsMembershipsBindingsPatchSecurity{
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

## GkehubProjectsLocationsMembershipsCreate

Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsCreate(ctx, operations.GkehubProjectsLocationsMembershipsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MembershipInput: &shared.MembershipInput{
            Authority: &shared.AuthorityInput{
                Issuer: sdk.String("quidem"),
                OidcJwks: sdk.String("fugiat"),
            },
            Endpoint: &shared.MembershipEndpointInput{
                ApplianceCluster: &shared.ApplianceCluster{
                    ResourceLink: sdk.String("ut"),
                },
                EdgeCluster: &shared.EdgeCluster{
                    ResourceLink: sdk.String("eum"),
                },
                GkeCluster: &shared.GkeClusterInput{
                    ResourceLink: sdk.String("suscipit"),
                },
                KubernetesResource: &shared.KubernetesResourceInput{
                    MembershipCrManifest: sdk.String("assumenda"),
                    ResourceOptions: &shared.ResourceOptions{
                        ConnectVersion: sdk.String("eos"),
                        K8sVersion: sdk.String("praesentium"),
                        V1beta1Crd: sdk.Bool(false),
                    },
                },
                MultiCloudCluster: &shared.MultiCloudClusterInput{
                    ResourceLink: sdk.String("quisquam"),
                },
                OnPremCluster: &shared.OnPremClusterInput{
                    AdminCluster: sdk.Bool(false),
                    ClusterType: shared.OnPremClusterClusterTypeEnumClustertypeUnspecified.ToPointer(),
                    ResourceLink: sdk.String("ipsa"),
                },
            },
            ExternalID: sdk.String("id"),
            Labels: map[string]string{
                "neque": "quo",
                "illum": "quo",
                "fuga": "eius",
            },
            MonitoringConfig: &shared.MonitoringConfig{
                Cluster: sdk.String("eos"),
                ClusterHash: sdk.String("voluptas"),
                KubernetesMetricsPrefix: sdk.String("ab"),
                Location: sdk.String("cupiditate"),
                ProjectID: sdk.String("consequatur"),
            },
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("sequi"),
        MembershipID: sdk.String("quo"),
        OauthToken: sdk.String("esse"),
        Parent: "recusandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        RequestID: sdk.String("distinctio"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.GkehubProjectsLocationsMembershipsCreateSecurity{
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

## GkehubProjectsLocationsMembershipsGenerateConnectManifest

Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsGenerateConnectManifest(ctx, operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("aliquam"),
        ImagePullSecretContent: sdk.String("odio"),
        IsUpgrade: sdk.Bool(false),
        Key: sdk.String("occaecati"),
        Name: "Miranda Daniel",
        Namespace: sdk.String("accusantium"),
        OauthToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        Proxy: sdk.String("eum"),
        QuotaUser: sdk.String("quas"),
        Registry: sdk.String("praesentium"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("deleniti"),
        Version: sdk.String("fugit"),
    }, operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateConnectManifestResponse != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsMembershipsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsGetIamPolicy(ctx, operations.GkehubProjectsLocationsMembershipsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("nisi"),
        OptionsRequestedPolicyVersion: sdk.Int64(147014),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        Resource: "consequuntur",
        UploadType: sdk.String("ratione"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.GkehubProjectsLocationsMembershipsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsMembershipsList

Lists Memberships in a given project and location.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsList(ctx, operations.GkehubProjectsLocationsMembershipsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("esse"),
        Filter: sdk.String("eveniet"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("veritatis"),
        OrderBy: sdk.String("esse"),
        PageSize: sdk.Int64(800379),
        PageToken: sdk.String("nam"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.GkehubProjectsLocationsMembershipsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMembershipsResponse != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsMembershipsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsSetIamPolicy(ctx, operations.GkehubProjectsLocationsMembershipsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "occaecati",
                                    "minima",
                                    "distinctio",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "culpa",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("adipisci"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "consequatur",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sapiente",
                                    "consectetur",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "provident",
                                    "a",
                                    "nulla",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quasi",
                                    "a",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("sint"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quia",
                                    "eveniet",
                                    "asperiores",
                                    "facere",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quasi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "aliquid",
                                    "tenetur",
                                    "quae",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "in",
                                    "eius",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("illum"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("accusantium"),
                            Expression: sdk.String("aliquam"),
                            Location: sdk.String("sapiente"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "reprehenderit",
                            "ullam",
                        },
                        Role: sdk.String("nisi"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("aut"),
                            Expression: sdk.String("voluptatum"),
                            Location: sdk.String("qui"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "deleniti",
                            "itaque",
                        },
                        Role: sdk.String("dolorum"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("architecto"),
                            Expression: sdk.String("omnis"),
                            Location: sdk.String("tenetur"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "et",
                            "voluptate",
                            "ipsa",
                            "minima",
                        },
                        Role: sdk.String("veritatis"),
                    },
                },
                Etag: sdk.String("consectetur"),
                Version: sdk.Int(237173),
            },
            UpdateMask: sdk.String("iste"),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("aut"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        Resource: "ab",
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("non"),
    }, operations.GkehubProjectsLocationsMembershipsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsMembershipsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsTestIamPermissions(ctx, operations.GkehubProjectsLocationsMembershipsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "occaecati",
            },
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        Resource: "maiores",
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("velit"),
    }, operations.GkehubProjectsLocationsMembershipsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsOperationsCancel(ctx, operations.GkehubProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "asperiores": "aperiam",
            "ea": "quaerat",
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("dignissimos"),
        Name: "Mrs. Aubrey Hills",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.GkehubProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsOperationsList(ctx, operations.GkehubProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("culpa"),
        Filter: sdk.String("est"),
        Key: sdk.String("recusandae"),
        Name: "Nicolas Kassulke",
        OauthToken: sdk.String("vel"),
        PageSize: sdk.Int64(287051),
        PageToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.GkehubProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsScopesCreate

Creates a Scope.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsScopesCreate(ctx, operations.GkehubProjectsLocationsScopesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ScopeInput: &shared.ScopeInput{
            AllMemberships: sdk.Bool(false),
            Name: sdk.String("Lela Shields"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("consectetur"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("exercitationem"),
        Parent: "earum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        ScopeID: sdk.String("numquam"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.GkehubProjectsLocationsScopesCreateSecurity{
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

## GkehubProjectsLocationsScopesDelete

Deletes a Scope.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsScopesDelete(ctx, operations.GkehubProjectsLocationsScopesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("dolore"),
        Force: sdk.Bool(false),
        Key: sdk.String("sunt"),
        Name: "Chad Franey IV",
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        RequestID: sdk.String("consectetur"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("harum"),
    }, operations.GkehubProjectsLocationsScopesDeleteSecurity{
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

## GkehubProjectsLocationsScopesGet

Returns the details of a Scope.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsScopesGet(ctx, operations.GkehubProjectsLocationsScopesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("accusamus"),
        Name: "Ricky Cole",
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.GkehubProjectsLocationsScopesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Scope != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsScopesList

Lists Scopes.

### Example Usage

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
    res, err := s.Projects.GkehubProjectsLocationsScopesList(ctx, operations.GkehubProjectsLocationsScopesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("in"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("aliquam"),
        PageSize: sdk.Int64(885963),
        PageToken: sdk.String("temporibus"),
        Parent: "ullam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.GkehubProjectsLocationsScopesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListScopesResponse != nil {
        // handle response
    }
}
```
