# Projects

### Available Operations

* [GkehubProjectsLocationsFeaturesCreate](#gkehubprojectslocationsfeaturescreate) - Adds a new Feature.
* [GkehubProjectsLocationsFeaturesList](#gkehubprojectslocationsfeatureslist) - Lists Features in a given project and location.
* [GkehubProjectsLocationsFleetsCreate](#gkehubprojectslocationsfleetscreate) - Creates a fleet.
* [GkehubProjectsLocationsFleetsList](#gkehubprojectslocationsfleetslist) - Returns all fleets within an organization or a project that the caller has access to.
* [GkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [GkehubProjectsLocationsMembershipsBindingsCreate](#gkehubprojectslocationsmembershipsbindingscreate) - Creates a MembershipBinding.
* [GkehubProjectsLocationsMembershipsBindingsList](#gkehubprojectslocationsmembershipsbindingslist) - Lists MembershipBindings.
* [GkehubProjectsLocationsMembershipsCreate](#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [GkehubProjectsLocationsMembershipsGenerateConnectManifest](#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [GkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [GkehubProjectsLocationsMembershipsList](#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [GkehubProjectsLocationsMembershipsListAdmin](#gkehubprojectslocationsmembershipslistadmin) - Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.
* [GkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [GkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [GkehubProjectsLocationsMembershipsValidateCreate](#gkehubprojectslocationsmembershipsvalidatecreate) - ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.
* [GkehubProjectsLocationsNamespacesCreate](#gkehubprojectslocationsnamespacescreate) - Creates a fleet namespace.
* [GkehubProjectsLocationsNamespacesList](#gkehubprojectslocationsnamespaceslist) - Lists fleet namespaces.
* [GkehubProjectsLocationsNamespacesRbacrolebindingsCreate](#gkehubprojectslocationsnamespacesrbacrolebindingscreate) - Creates a RBACRoleBinding.
* [GkehubProjectsLocationsNamespacesRbacrolebindingsList](#gkehubprojectslocationsnamespacesrbacrolebindingslist) - Lists RBACRoleBinding.
* [GkehubProjectsLocationsOperationsCancel](#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [GkehubProjectsLocationsOperationsList](#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [GkehubProjectsLocationsScopesCreate](#gkehubprojectslocationsscopescreate) - Creates a Scope.
* [GkehubProjectsLocationsScopesDelete](#gkehubprojectslocationsscopesdelete) - Deletes a Scope.
* [GkehubProjectsLocationsScopesGet](#gkehubprojectslocationsscopesget) - Returns the details of a Scope.
* [GkehubProjectsLocationsScopesList](#gkehubprojectslocationsscopeslist) - Lists Scopes.
* [GkehubProjectsLocationsScopesPatch](#gkehubprojectslocationsscopespatch) - Updates a scopes.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FeatureInput: &shared.FeatureInput{
            FleetDefaultMemberConfig: &shared.CommonFleetDefaultMemberConfigSpecInput{
                Identityservice: &shared.IdentityServiceMembershipSpecInput{
                    AuthMethods: []shared.IdentityServiceAuthMethodInput{
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: sdk.String("occaecati"),
                                ClientSecret: sdk.String("atque"),
                                KubectlRedirectURI: sdk.String("et"),
                                Tenant: sdk.String("esse"),
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: sdk.Bool(false),
                            },
                            Name: sdk.String("Sheldon Boehm"),
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: sdk.String("nam"),
                                ClientID: sdk.String("vero"),
                                ClientSecret: sdk.String("aliquid"),
                                DeployCloudConsoleProxy: sdk.Bool(false),
                                EnableAccessToken: sdk.Bool(false),
                                ExtraParams: sdk.String("quasi"),
                                GroupPrefix: sdk.String("saepe"),
                                GroupsClaim: sdk.String("vel"),
                                IssuerURI: sdk.String("harum"),
                                KubectlRedirectURI: sdk.String("molestiae"),
                                Scopes: sdk.String("rerum"),
                                UserClaim: sdk.String("occaecati"),
                                UserPrefix: sdk.String("minima"),
                            },
                            Proxy: sdk.String("distinctio"),
                        },
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: sdk.String("eligendi"),
                                ClientSecret: sdk.String("sit"),
                                KubectlRedirectURI: sdk.String("culpa"),
                                Tenant: sdk.String("tempore"),
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: sdk.Bool(false),
                            },
                            Name: sdk.String("Miss Blanca Cronin"),
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: sdk.String("sapiente"),
                                ClientID: sdk.String("consectetur"),
                                ClientSecret: sdk.String("esse"),
                                DeployCloudConsoleProxy: sdk.Bool(false),
                                EnableAccessToken: sdk.Bool(false),
                                ExtraParams: sdk.String("blanditiis"),
                                GroupPrefix: sdk.String("provident"),
                                GroupsClaim: sdk.String("a"),
                                IssuerURI: sdk.String("nulla"),
                                KubectlRedirectURI: sdk.String("quas"),
                                Scopes: sdk.String("esse"),
                                UserClaim: sdk.String("quasi"),
                                UserPrefix: sdk.String("a"),
                            },
                            Proxy: sdk.String("error"),
                        },
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: sdk.String("sint"),
                                ClientSecret: sdk.String("pariatur"),
                                KubectlRedirectURI: sdk.String("possimus"),
                                Tenant: sdk.String("quia"),
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: sdk.Bool(false),
                            },
                            Name: sdk.String("Mr. Marlon Schultz V"),
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: sdk.String("culpa"),
                                ClientID: sdk.String("aliquid"),
                                ClientSecret: sdk.String("tenetur"),
                                DeployCloudConsoleProxy: sdk.Bool(false),
                                EnableAccessToken: sdk.Bool(false),
                                ExtraParams: sdk.String("quae"),
                                GroupPrefix: sdk.String("earum"),
                                GroupsClaim: sdk.String("vel"),
                                IssuerURI: sdk.String("in"),
                                KubectlRedirectURI: sdk.String("eius"),
                                Scopes: sdk.String("libero"),
                                UserClaim: sdk.String("illum"),
                                UserPrefix: sdk.String("soluta"),
                            },
                            Proxy: sdk.String("accusantium"),
                        },
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: sdk.String("aliquam"),
                                ClientSecret: sdk.String("sapiente"),
                                KubectlRedirectURI: sdk.String("dicta"),
                                Tenant: sdk.String("ullam"),
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: sdk.Bool(false),
                            },
                            Name: sdk.String("Ms. Dana Huel"),
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: sdk.String("quibusdam"),
                                ClientID: sdk.String("ex"),
                                ClientSecret: sdk.String("deleniti"),
                                DeployCloudConsoleProxy: sdk.Bool(false),
                                EnableAccessToken: sdk.Bool(false),
                                ExtraParams: sdk.String("itaque"),
                                GroupPrefix: sdk.String("dolorum"),
                                GroupsClaim: sdk.String("architecto"),
                                IssuerURI: sdk.String("omnis"),
                                KubectlRedirectURI: sdk.String("tenetur"),
                                Scopes: sdk.String("quasi"),
                                UserClaim: sdk.String("at"),
                                UserPrefix: sdk.String("et"),
                            },
                            Proxy: sdk.String("voluptate"),
                        },
                    },
                },
            },
            Labels: map[string]string{
                "minima": "veritatis",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "adipisci": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("iste"),
                    },
                    Cloudbuild: &shared.CloudBuildMembershipSpec{
                        SecurityPolicy: shared.CloudBuildMembershipSpecSecurityPolicyEnumPrivileged.ToPointer(),
                        Version: sdk.String("accusantium"),
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: sdk.Bool(false),
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("rem"),
                                HTTPSProxy: sdk.String("aut"),
                                PolicyDir: sdk.String("laudantium"),
                                SecretType: sdk.String("eum"),
                                SyncBranch: sdk.String("mollitia"),
                                SyncRepo: sdk.String("ab"),
                                SyncRev: sdk.String("corrupti"),
                                SyncWaitSecs: sdk.String("non"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("voluptatem"),
                                PolicyDir: sdk.String("dolor"),
                                SecretType: sdk.String("occaecati"),
                                SyncRepo: sdk.String("numquam"),
                                SyncWaitSecs: sdk.String("impedit"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("explicabo"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("voluptas"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "dignissimos",
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
                        Version: sdk.String("natus"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "voluptatibus": "voluptas",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("aperiam"),
                                    ClientSecret: sdk.String("ea"),
                                    KubectlRedirectURI: sdk.String("quaerat"),
                                    Tenant: sdk.String("consequuntur"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Luke Schoen"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("asperiores"),
                                    ClientID: sdk.String("nemo"),
                                    ClientSecret: sdk.String("quae"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("quaerat"),
                                    GroupPrefix: sdk.String("porro"),
                                    GroupsClaim: sdk.String("quod"),
                                    IssuerURI: sdk.String("labore"),
                                    KubectlRedirectURI: sdk.String("ab"),
                                    Scopes: sdk.String("adipisci"),
                                    UserClaim: sdk.String("fuga"),
                                    UserPrefix: sdk.String("id"),
                                },
                                Proxy: sdk.String("suscipit"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("velit"),
                                    ClientSecret: sdk.String("culpa"),
                                    KubectlRedirectURI: sdk.String("est"),
                                    Tenant: sdk.String("recusandae"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Nicolas Kassulke"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("vel"),
                                    ClientID: sdk.String("labore"),
                                    ClientSecret: sdk.String("possimus"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("facilis"),
                                    GroupPrefix: sdk.String("cum"),
                                    GroupsClaim: sdk.String("commodi"),
                                    IssuerURI: sdk.String("in"),
                                    KubectlRedirectURI: sdk.String("corporis"),
                                    Scopes: sdk.String("reiciendis"),
                                    UserClaim: sdk.String("assumenda"),
                                    UserPrefix: sdk.String("nemo"),
                                },
                                Proxy: sdk.String("recusandae"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("aliquid"),
                                    ClientSecret: sdk.String("aperiam"),
                                    KubectlRedirectURI: sdk.String("cum"),
                                    Tenant: sdk.String("consectetur"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Annette Wehner"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("doloribus"),
                                    ClientID: sdk.String("suscipit"),
                                    ClientSecret: sdk.String("reiciendis"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("quidem"),
                                    GroupPrefix: sdk.String("saepe"),
                                    GroupsClaim: sdk.String("necessitatibus"),
                                    IssuerURI: sdk.String("dolore"),
                                    KubectlRedirectURI: sdk.String("sunt"),
                                    Scopes: sdk.String("asperiores"),
                                    UserClaim: sdk.String("adipisci"),
                                    UserPrefix: sdk.String("non"),
                                },
                                Proxy: sdk.String("amet"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("beatae"),
                                    ClientSecret: sdk.String("dignissimos"),
                                    KubectlRedirectURI: sdk.String("a"),
                                    Tenant: sdk.String("debitis"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Stacy Pollich DVM"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("libero"),
                                    ClientID: sdk.String("vitae"),
                                    ClientSecret: sdk.String("accusamus"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("similique"),
                                    GroupPrefix: sdk.String("tempora"),
                                    GroupsClaim: sdk.String("aspernatur"),
                                    IssuerURI: sdk.String("voluptas"),
                                    KubectlRedirectURI: sdk.String("voluptas"),
                                    Scopes: sdk.String("voluptas"),
                                    UserClaim: sdk.String("minima"),
                                    UserPrefix: sdk.String("nobis"),
                                },
                                Proxy: sdk.String("dolorum"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumControlPlaneManagementUnspecified.ToPointer(),
                        DefaultChannel: shared.ServiceMeshMembershipSpecDefaultChannelEnumStable.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementUnspecified.ToPointer(),
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: sdk.String("blanditiis"),
                            ConstraintViolationLimit: sdk.String("in"),
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "aliquam": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("officiis"),
                                            Memory: sdk.String("temporibus"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("ullam"),
                                            Memory: sdk.String("adipisci"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("blanditiis"),
                                            Key: sdk.String("quas"),
                                            Operator: sdk.String("hic"),
                                            Value: sdk.String("nesciunt"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("culpa"),
                                            Key: sdk.String("corrupti"),
                                            Operator: sdk.String("pariatur"),
                                            Value: sdk.String("totam"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("hic"),
                                            Key: sdk.String("exercitationem"),
                                            Operator: sdk.String("nobis"),
                                            Value: sdk.String("sit"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("rerum"),
                                },
                                "sed": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("reiciendis"),
                                            Memory: sdk.String("explicabo"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("asperiores"),
                                            Memory: sdk.String("facilis"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("expedita"),
                                            Key: sdk.String("ab"),
                                            Operator: sdk.String("iste"),
                                            Value: sdk.String("dolore"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("laborum"),
                                            Key: sdk.String("sed"),
                                            Operator: sdk.String("in"),
                                            Value: sdk.String("commodi"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("quidem"),
                                },
                            },
                            ExemptableNamespaces: []string{
                                "voluptas",
                            },
                            InstallSpec: shared.PolicyControllerHubConfigInstallSpecEnumInstallSpecEnabled.ToPointer(),
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    shared.PolicyControllerMonitoringConfigBackendsEnumPrometheus,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "debitis": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "reiciendis",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumManagementUnspecified.ToPointer(),
                                    },
                                    "corrupti": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "incidunt",
                                            "sed",
                                            "provident",
                                            "eius",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "ipsum": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "occaecati",
                                            "quos",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "tempora": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "voluptate",
                                            "reiciendis",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumManagementUnspecified.ToPointer(),
                                    },
                                },
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: sdk.Bool(false),
                                    Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumInstallationUnspecified.ToPointer(),
                                },
                            },
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: sdk.Bool(false),
                                Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumInstallationUnspecified.ToPointer(),
                            },
                        },
                        Version: sdk.String("officiis"),
                    },
                    Workloadcertificate: &shared.MembershipSpec{
                        CertificateManagement: shared.MembershipSpecCertificateManagementEnumDisabled.ToPointer(),
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: shared.FeatureResourceStateStateEnumUpdating.ToPointer(),
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "incidunt": map[string]interface{}{
                    "debitis": "rem",
                    "sit": "nobis",
                },
                "error": map[string]interface{}{
                    "minima": "recusandae",
                    "reiciendis": "nulla",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("magni"),
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "saepe": "numquam",
                },
                Cloudauditlogging: &shared.CloudAuditLoggingFeatureSpec{
                    AllowlistedServiceAccounts: []string{
                        "in",
                        "officiis",
                    },
                },
                Fleetobservability: &shared.FleetObservabilityFeatureSpec{
                    LoggingConfig: &shared.FleetObservabilityLoggingConfig{
                        DefaultConfig: &shared.FleetObservabilityRoutingConfig{
                            Mode: shared.FleetObservabilityRoutingConfigModeEnumModeUnspecified.ToPointer(),
                        },
                        FleetScopeLogsConfig: &shared.FleetObservabilityRoutingConfig{
                            Mode: shared.FleetObservabilityRoutingConfigModeEnumCopy.ToPointer(),
                        },
                    },
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: shared.MultiClusterIngressFeatureSpecBillingEnumPayAsYouGo.ToPointer(),
                    ConfigMembership: sdk.String("praesentium"),
                },
                Workloadcertificate: &shared.FeatureSpec{
                    DefaultConfig: &shared.MembershipSpec{
                        CertificateManagement: shared.MembershipSpecCertificateManagementEnumEnabled.ToPointer(),
                    },
                    ProvisionGoogleCa: shared.FeatureSpecProvisionGoogleCaEnumDisabled.ToPointer(),
                },
            },
            State: &shared.CommonFeatureStateInput{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: shared.StatusCodeEnumFailed.ToPointer(),
                        Description: sdk.String("voluptatum"),
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "hic": "expedita",
                    "debitis": "neque",
                    "dolorum": "nostrum",
                },
                State: &shared.FeatureState{
                    Code: shared.FeatureStateCodeEnumWarning.ToPointer(),
                    Description: sdk.String("dolorum"),
                    UpdateTime: sdk.String("corrupti"),
                },
            },
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        FeatureID: sdk.String("fugit"),
        Fields: sdk.String("ut"),
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("voluptatem"),
        Parent: "culpa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        RequestID: sdk.String("magnam"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("esse"),
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
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("repudiandae"),
        Filter: sdk.String("corporis"),
        Key: sdk.String("et"),
        OauthToken: sdk.String("blanditiis"),
        OrderBy: sdk.String("ex"),
        PageSize: sdk.Int64(153627),
        PageToken: sdk.String("sit"),
        Parent: "vel",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("error"),
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

## GkehubProjectsLocationsFleetsCreate

Creates a fleet.

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
    res, err := s.Projects.GkehubProjectsLocationsFleetsCreate(ctx, operations.GkehubProjectsLocationsFleetsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FleetInput: &shared.FleetInput{
            DisplayName: sdk.String("incidunt"),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("occaecati"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.GkehubProjectsLocationsFleetsCreateSecurity{
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

## GkehubProjectsLocationsFleetsList

Returns all fleets within an organization or a project that the caller has access to.

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
    res, err := s.Projects.GkehubProjectsLocationsFleetsList(ctx, operations.GkehubProjectsLocationsFleetsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("amet"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("voluptate"),
        PageSize: sdk.Int64(600392),
        PageToken: sdk.String("reiciendis"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.GkehubProjectsLocationsFleetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFleetsResponse != nil {
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
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("facere"),
        Filter: sdk.String("fuga"),
        Key: sdk.String("praesentium"),
        Name: "Floyd Barrows",
        OauthToken: sdk.String("quasi"),
        PageSize: sdk.Int64(542457),
        PageToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("suscipit"),
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
            Name: sdk.String("Henry Koepp"),
            Scope: sdk.String("ea"),
        },
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("accusamus"),
        MembershipBindingID: sdk.String("natus"),
        OauthToken: sdk.String("minima"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("corrupti"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("atque"),
        PageSize: sdk.Int64(120919),
        PageToken: sdk.String("recusandae"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("reiciendis"),
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
                Issuer: sdk.String("repudiandae"),
                OidcJwks: sdk.String("dicta"),
            },
            Endpoint: &shared.MembershipEndpointInput{
                ApplianceCluster: &shared.ApplianceCluster{
                    ResourceLink: sdk.String("accusantium"),
                },
                EdgeCluster: &shared.EdgeCluster{
                    ResourceLink: sdk.String("beatae"),
                },
                GkeCluster: &shared.GkeClusterInput{
                    ResourceLink: sdk.String("dolores"),
                },
                KubernetesResource: &shared.KubernetesResourceInput{
                    MembershipCrManifest: sdk.String("enim"),
                    ResourceOptions: &shared.ResourceOptions{
                        ConnectVersion: sdk.String("laboriosam"),
                        K8sVersion: sdk.String("velit"),
                        V1beta1Crd: sdk.Bool(false),
                    },
                },
                MultiCloudCluster: &shared.MultiCloudClusterInput{
                    ResourceLink: sdk.String("a"),
                },
                OnPremCluster: &shared.OnPremClusterInput{
                    AdminCluster: sdk.Bool(false),
                    ClusterType: shared.OnPremClusterClusterTypeEnumHybrid.ToPointer(),
                    ResourceLink: sdk.String("magnam"),
                },
            },
            ExternalID: sdk.String("saepe"),
            Labels: map[string]string{
                "occaecati": "officiis",
            },
            MonitoringConfig: &shared.MonitoringConfig{
                Cluster: sdk.String("perspiciatis"),
                ClusterHash: sdk.String("in"),
                KubernetesMetricsPrefix: sdk.String("adipisci"),
                Location: sdk.String("eveniet"),
                ProjectID: sdk.String("occaecati"),
            },
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("quis"),
        Key: sdk.String("reprehenderit"),
        MembershipID: sdk.String("error"),
        OauthToken: sdk.String("illo"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        RequestID: sdk.String("eveniet"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("vero"),
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
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("quae"),
        ImagePullSecretContent: sdk.String("molestiae"),
        IsUpgrade: sdk.Bool(false),
        Key: sdk.String("eveniet"),
        Name: "Karla Kerluke",
        Namespace: sdk.String("laborum"),
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        Proxy: sdk.String("voluptatum"),
        QuotaUser: sdk.String("rem"),
        Registry: sdk.String("aliquam"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("repellat"),
        Version: sdk.String("alias"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("maiores"),
        OptionsRequestedPolicyVersion: sdk.Int64(970222),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        Resource: "id",
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("dolore"),
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
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("omnis"),
        Filter: sdk.String("quaerat"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("ex"),
        OrderBy: sdk.String("ut"),
        PageSize: sdk.Int64(633062),
        PageToken: sdk.String("adipisci"),
        Parent: "debitis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("nemo"),
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

## GkehubProjectsLocationsMembershipsListAdmin

Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsListAdmin(ctx, operations.GkehubProjectsLocationsMembershipsListAdminRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("eum"),
        Filter: sdk.String("reiciendis"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("aspernatur"),
        OrderBy: sdk.String("ullam"),
        PageSize: sdk.Int64(96804),
        PageToken: sdk.String("animi"),
        Parent: "nostrum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.GkehubProjectsLocationsMembershipsListAdminSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdminClusterMembershipsResponse != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "repellat",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "in",
                                    "nam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("officia"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "modi",
                                    "voluptatibus",
                                    "molestias",
                                    "officiis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "vitae",
                                    "rerum",
                                    "tempora",
                                    "quis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "cumque",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("perferendis"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("aspernatur"),
                            Expression: sdk.String("eum"),
                            Location: sdk.String("eius"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "impedit",
                            "eos",
                            "sapiente",
                            "eum",
                        },
                        Role: sdk.String("dicta"),
                    },
                },
                Etag: sdk.String("minima"),
                Version: sdk.Int(107004),
            },
            UpdateMask: sdk.String("cupiditate"),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("hic"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        Resource: "perspiciatis",
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("debitis"),
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
                "suscipit",
                "dolorem",
                "fugit",
                "cumque",
            },
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("animi"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("consequatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        Resource: "et",
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("natus"),
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

## GkehubProjectsLocationsMembershipsValidateCreate

ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsValidateCreate(ctx, operations.GkehubProjectsLocationsMembershipsValidateCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ValidateCreateMembershipRequestInput: &shared.ValidateCreateMembershipRequestInput{
            Membership: &shared.MembershipInput{
                Authority: &shared.AuthorityInput{
                    Issuer: sdk.String("suscipit"),
                    OidcJwks: sdk.String("adipisci"),
                },
                Endpoint: &shared.MembershipEndpointInput{
                    ApplianceCluster: &shared.ApplianceCluster{
                        ResourceLink: sdk.String("quasi"),
                    },
                    EdgeCluster: &shared.EdgeCluster{
                        ResourceLink: sdk.String("magni"),
                    },
                    GkeCluster: &shared.GkeClusterInput{
                        ResourceLink: sdk.String("doloribus"),
                    },
                    KubernetesResource: &shared.KubernetesResourceInput{
                        MembershipCrManifest: sdk.String("nulla"),
                        ResourceOptions: &shared.ResourceOptions{
                            ConnectVersion: sdk.String("necessitatibus"),
                            K8sVersion: sdk.String("ipsa"),
                            V1beta1Crd: sdk.Bool(false),
                        },
                    },
                    MultiCloudCluster: &shared.MultiCloudClusterInput{
                        ResourceLink: sdk.String("tempora"),
                    },
                    OnPremCluster: &shared.OnPremClusterInput{
                        AdminCluster: sdk.Bool(false),
                        ClusterType: shared.OnPremClusterClusterTypeEnumHybrid.ToPointer(),
                        ResourceLink: sdk.String("molestiae"),
                    },
                },
                ExternalID: sdk.String("dicta"),
                Labels: map[string]string{
                    "esse": "praesentium",
                    "maiores": "reiciendis",
                },
                MonitoringConfig: &shared.MonitoringConfig{
                    Cluster: sdk.String("vel"),
                    ClusterHash: sdk.String("architecto"),
                    KubernetesMetricsPrefix: sdk.String("fugiat"),
                    Location: sdk.String("doloremque"),
                    ProjectID: sdk.String("dicta"),
                },
            },
            MembershipID: sdk.String("odio"),
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("consectetur"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("ipsa"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.GkehubProjectsLocationsMembershipsValidateCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidateCreateMembershipResponse != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsNamespacesCreate

Creates a fleet namespace.

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
    res, err := s.Projects.GkehubProjectsLocationsNamespacesCreate(ctx, operations.GkehubProjectsLocationsNamespacesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        NamespaceInput: &shared.NamespaceInput{
            Name: sdk.String("Brandi Homenick III"),
            Scope: sdk.String("voluptas"),
        },
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("error"),
        Key: sdk.String("possimus"),
        NamespaceID: sdk.String("voluptates"),
        OauthToken: sdk.String("mollitia"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.GkehubProjectsLocationsNamespacesCreateSecurity{
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

## GkehubProjectsLocationsNamespacesList

Lists fleet namespaces.

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
    res, err := s.Projects.GkehubProjectsLocationsNamespacesList(ctx, operations.GkehubProjectsLocationsNamespacesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vitae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("quo"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("ut"),
        PageSize: sdk.Int64(321043),
        PageToken: sdk.String("expedita"),
        Parent: "voluptatem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.GkehubProjectsLocationsNamespacesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNamespacesResponse != nil {
        // handle response
    }
}
```

## GkehubProjectsLocationsNamespacesRbacrolebindingsCreate

Creates a RBACRoleBinding.

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
    res, err := s.Projects.GkehubProjectsLocationsNamespacesRbacrolebindingsCreate(ctx, operations.GkehubProjectsLocationsNamespacesRbacrolebindingsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RBACRoleBindingInput: &shared.RBACRoleBindingInput{
            Group: sdk.String("voluptatum"),
            Name: sdk.String("Peter Prosacco"),
            Role: &shared.Role{
                PredefinedRole: shared.RolePredefinedRoleEnumUnknown.ToPointer(),
            },
            User: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("voluptatem"),
        Parent: "alias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        RbacrolebindingID: sdk.String("earum"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.GkehubProjectsLocationsNamespacesRbacrolebindingsCreateSecurity{
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

## GkehubProjectsLocationsNamespacesRbacrolebindingsList

Lists RBACRoleBinding.

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
    res, err := s.Projects.GkehubProjectsLocationsNamespacesRbacrolebindingsList(ctx, operations.GkehubProjectsLocationsNamespacesRbacrolebindingsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("ratione"),
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(848341),
        PageToken: sdk.String("totam"),
        Parent: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.GkehubProjectsLocationsNamespacesRbacrolebindingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRBACRoleBindingsResponse != nil {
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
            "aliquam": "inventore",
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("consequatur"),
        Name: "Karen Gleason IV",
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("ipsam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("impedit"),
        Filter: sdk.String("officiis"),
        Key: sdk.String("esse"),
        Name: "Aaron Hartmann",
        OauthToken: sdk.String("eum"),
        PageSize: sdk.Int64(426943),
        PageToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("exercitationem"),
        UploadProtocol: sdk.String("ab"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ScopeInput: &shared.ScopeInput{
            AllMemberships: sdk.Bool(false),
            Name: sdk.String("Della Howell"),
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("at"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        ScopeID: sdk.String("harum"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("doloribus"),
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
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("voluptate"),
        Force: sdk.Bool(false),
        Key: sdk.String("blanditiis"),
        Name: "Hector Funk",
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        RequestID: sdk.String("ducimus"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("fuga"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("dicta"),
        Name: "Ms. Marilyn Feest",
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("eos"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("inventore"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("voluptatibus"),
        PageSize: sdk.Int64(719620),
        PageToken: sdk.String("omnis"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("maxime"),
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

## GkehubProjectsLocationsScopesPatch

Updates a scopes.

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
    res, err := s.Projects.GkehubProjectsLocationsScopesPatch(ctx, operations.GkehubProjectsLocationsScopesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ScopeInput: &shared.ScopeInput{
            AllMemberships: sdk.Bool(false),
            Name: sdk.String("Byron Johns"),
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("nam"),
        Key: sdk.String("vero"),
        Name: "Mr. Holly Kautzer",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UpdateMask: sdk.String("sint"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.GkehubProjectsLocationsScopesPatchSecurity{
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
