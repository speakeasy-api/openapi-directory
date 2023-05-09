# Projects

### Available Operations

* [GkehubProjectsLocationsFeaturesCreate](#gkehubprojectslocationsfeaturescreate) - Adds a new Feature.
* [GkehubProjectsLocationsFeaturesList](#gkehubprojectslocationsfeatureslist) - Lists Features in a given project and location.
* [GkehubProjectsLocationsFleetsCreate](#gkehubprojectslocationsfleetscreate) - Creates a fleet.
* [GkehubProjectsLocationsFleetsList](#gkehubprojectslocationsfleetslist) - Returns all fleets within an organization or a project that the caller has access to.
* [GkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [GkehubProjectsLocationsMembershipsBindingsCreate](#gkehubprojectslocationsmembershipsbindingscreate) - Creates a MembershipBinding.
* [GkehubProjectsLocationsMembershipsBindingsList](#gkehubprojectslocationsmembershipsbindingslist) - Lists MembershipBindings.
* [GkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [GkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [GkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FeatureInput: &shared.FeatureInput{
            FleetDefaultMemberConfig: &shared.CommonFleetDefaultMemberConfigSpecInput{
                Identityservice: &shared.IdentityServiceMembershipSpecInput{
                    AuthMethods: []shared.IdentityServiceAuthMethodInput{
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: sdk.String("aut"),
                                ClientSecret: sdk.String("aut"),
                                KubectlRedirectURI: sdk.String("deleniti"),
                                Tenant: sdk.String("impedit"),
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: sdk.Bool(false),
                            },
                            Name: sdk.String("Mrs. Denise Tillman MD"),
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: sdk.String("laborum"),
                                ClientID: sdk.String("placeat"),
                                ClientSecret: sdk.String("velit"),
                                DeployCloudConsoleProxy: sdk.Bool(false),
                                EnableAccessToken: sdk.Bool(false),
                                ExtraParams: sdk.String("eum"),
                                GroupPrefix: sdk.String("autem"),
                                GroupsClaim: sdk.String("nobis"),
                                IssuerURI: sdk.String("quas"),
                                KubectlRedirectURI: sdk.String("assumenda"),
                                Scopes: sdk.String("nulla"),
                                UserClaim: sdk.String("voluptas"),
                                UserPrefix: sdk.String("libero"),
                            },
                            Proxy: sdk.String("quasi"),
                        },
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: sdk.String("tempora"),
                                ClientSecret: sdk.String("numquam"),
                                KubectlRedirectURI: sdk.String("explicabo"),
                                Tenant: sdk.String("provident"),
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: sdk.Bool(false),
                            },
                            Name: sdk.String("Minnie Gutkowski"),
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: sdk.String("esse"),
                                ClientID: sdk.String("esse"),
                                ClientSecret: sdk.String("rem"),
                                DeployCloudConsoleProxy: sdk.Bool(false),
                                EnableAccessToken: sdk.Bool(false),
                                ExtraParams: sdk.String("fuga"),
                                GroupPrefix: sdk.String("reprehenderit"),
                                GroupsClaim: sdk.String("quidem"),
                                IssuerURI: sdk.String("fugiat"),
                                KubectlRedirectURI: sdk.String("ut"),
                                Scopes: sdk.String("eum"),
                                UserClaim: sdk.String("suscipit"),
                                UserPrefix: sdk.String("assumenda"),
                            },
                            Proxy: sdk.String("eos"),
                        },
                        shared.IdentityServiceAuthMethodInput{
                            AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                ClientID: sdk.String("praesentium"),
                                ClientSecret: sdk.String("quisquam"),
                                KubectlRedirectURI: sdk.String("veritatis"),
                                Tenant: sdk.String("ipsa"),
                            },
                            GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                Disable: sdk.Bool(false),
                            },
                            Name: sdk.String("Rickey DuBuque"),
                            OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                CertificateAuthorityData: sdk.String("quo"),
                                ClientID: sdk.String("fuga"),
                                ClientSecret: sdk.String("eius"),
                                DeployCloudConsoleProxy: sdk.Bool(false),
                                EnableAccessToken: sdk.Bool(false),
                                ExtraParams: sdk.String("eos"),
                                GroupPrefix: sdk.String("voluptas"),
                                GroupsClaim: sdk.String("ab"),
                                IssuerURI: sdk.String("cupiditate"),
                                KubectlRedirectURI: sdk.String("consequatur"),
                                Scopes: sdk.String("tempora"),
                                UserClaim: sdk.String("debitis"),
                                UserPrefix: sdk.String("ipsam"),
                            },
                            Proxy: sdk.String("aspernatur"),
                        },
                    },
                },
            },
            Labels: map[string]string{
                "quo": "esse",
            },
            MembershipSpecs: map[string]shared.MembershipFeatureSpecInput{
                "aperiam": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("distinctio"),
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: shared.MembershipSpecSecurityPolicyEnumPrivileged.ToPointer(),
                        Version: sdk.String("dignissimos"),
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: sdk.Bool(false),
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("inventore"),
                                HTTPSProxy: sdk.String("nihil"),
                                PolicyDir: sdk.String("totam"),
                                SecretType: sdk.String("accusamus"),
                                SyncBranch: sdk.String("aliquam"),
                                SyncRepo: sdk.String("odio"),
                                SyncRev: sdk.String("occaecati"),
                                SyncWaitSecs: sdk.String("commodi"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("sapiente"),
                                PolicyDir: sdk.String("dolores"),
                                SecretType: sdk.String("deserunt"),
                                SyncRepo: sdk.String("molestiae"),
                                SyncWaitSecs: sdk.String("accusantium"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("porro"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("eum"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "praesentium",
                                "consequuntur",
                                "deleniti",
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
                        "atque": "explicabo",
                        "minima": "nisi",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("sapiente"),
                                    ClientSecret: sdk.String("consequuntur"),
                                    KubectlRedirectURI: sdk.String("ratione"),
                                    Tenant: sdk.String("explicabo"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Ms. Marion Little"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("accusamus"),
                                    ClientID: sdk.String("veritatis"),
                                    ClientSecret: sdk.String("esse"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("quod"),
                                    GroupPrefix: sdk.String("nam"),
                                    GroupsClaim: sdk.String("vero"),
                                    IssuerURI: sdk.String("aliquid"),
                                    KubectlRedirectURI: sdk.String("quasi"),
                                    Scopes: sdk.String("saepe"),
                                    UserClaim: sdk.String("vel"),
                                    UserPrefix: sdk.String("harum"),
                                },
                                Proxy: sdk.String("molestiae"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumManual.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementAutomatic.ToPointer(),
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: sdk.String("minima"),
                            ConstraintViolationLimit: sdk.String("distinctio"),
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "sit": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("culpa"),
                                            Memory: sdk.String("tempore"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("adipisci"),
                                            Memory: sdk.String("cumque"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("consequatur"),
                                            Key: sdk.String("minus"),
                                            Operator: sdk.String("quaerat"),
                                            Value: sdk.String("sapiente"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("consectetur"),
                                },
                                "esse": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("blanditiis"),
                                            Memory: sdk.String("provident"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("a"),
                                            Memory: sdk.String("nulla"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("esse"),
                                            Key: sdk.String("quasi"),
                                            Operator: sdk.String("a"),
                                            Value: sdk.String("error"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("sint"),
                                            Key: sdk.String("pariatur"),
                                            Operator: sdk.String("possimus"),
                                            Value: sdk.String("quia"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("eveniet"),
                                            Key: sdk.String("asperiores"),
                                            Operator: sdk.String("facere"),
                                            Value: sdk.String("veritatis"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("consequuntur"),
                                },
                                "quasi": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("similique"),
                                            Memory: sdk.String("culpa"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("aliquid"),
                                            Memory: sdk.String("tenetur"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("earum"),
                                            Key: sdk.String("vel"),
                                            Operator: sdk.String("in"),
                                            Value: sdk.String("eius"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("libero"),
                                },
                                "illum": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("soluta"),
                                            Memory: sdk.String("accusantium"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("aliquam"),
                                            Memory: sdk.String("sapiente"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("ullam"),
                                            Key: sdk.String("reprehenderit"),
                                            Operator: sdk.String("ullam"),
                                            Value: sdk.String("nisi"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("aut"),
                                },
                            },
                            ExemptableNamespaces: []string{
                                "qui",
                                "quibusdam",
                                "ex",
                            },
                            InstallSpec: shared.PolicyControllerHubConfigInstallSpecEnumInstallSpecEnabled.ToPointer(),
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    shared.PolicyControllerMonitoringConfigBackendsEnumCloudMonitoring,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumMonitoringBackendUnspecified,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumPrometheus,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumCloudMonitoring,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "at": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "voluptate",
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
                        Version: sdk.String("consectetur"),
                    },
                },
                "adipisci": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("iste"),
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: shared.MembershipSpecSecurityPolicyEnumPrivileged.ToPointer(),
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
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementManual.ToPointer(),
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: sdk.String("dolores"),
                            ConstraintViolationLimit: sdk.String("blanditiis"),
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "dolore": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("aliquam"),
                                            Memory: sdk.String("officiis"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("temporibus"),
                                            Memory: sdk.String("ullam"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("cum"),
                                            Key: sdk.String("blanditiis"),
                                            Operator: sdk.String("quas"),
                                            Value: sdk.String("hic"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("nesciunt"),
                                },
                                "culpa": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("corrupti"),
                                            Memory: sdk.String("pariatur"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("totam"),
                                            Memory: sdk.String("hic"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("nobis"),
                                            Key: sdk.String("sit"),
                                            Operator: sdk.String("rerum"),
                                            Value: sdk.String("sed"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("reiciendis"),
                                            Key: sdk.String("explicabo"),
                                            Operator: sdk.String("asperiores"),
                                            Value: sdk.String("facilis"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("voluptate"),
                                },
                            },
                            ExemptableNamespaces: []string{
                                "ab",
                                "iste",
                                "dolore",
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
                                    "quidem": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "voluptas",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "architecto": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "sapiente",
                                            "debitis",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumManagementUnspecified.ToPointer(),
                                    },
                                },
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: sdk.Bool(false),
                                    Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumAll.ToPointer(),
                                },
                            },
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: sdk.Bool(false),
                                Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumInstallationUnspecified.ToPointer(),
                            },
                        },
                        Version: sdk.String("corrupti"),
                    },
                },
                "maiores": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("incidunt"),
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: shared.MembershipSpecSecurityPolicyEnumSecurityPolicyUnspecified.ToPointer(),
                        Version: sdk.String("provident"),
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: sdk.Bool(false),
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("eius"),
                                HTTPSProxy: sdk.String("necessitatibus"),
                                PolicyDir: sdk.String("ipsum"),
                                SecretType: sdk.String("ea"),
                                SyncBranch: sdk.String("occaecati"),
                                SyncRepo: sdk.String("quos"),
                                SyncRev: sdk.String("voluptatibus"),
                                SyncWaitSecs: sdk.String("tempora"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("tempora"),
                                PolicyDir: sdk.String("voluptate"),
                                SecretType: sdk.String("reiciendis"),
                                SyncRepo: sdk.String("ex"),
                                SyncWaitSecs: sdk.String("sit"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("non"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("officiis"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "facilis",
                                "quaerat",
                                "incidunt",
                            },
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumCloudMonitoring,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryInstalled: sdk.Bool(false),
                        },
                        Version: sdk.String("sit"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "error": "veniam",
                        "minima": "recusandae",
                        "reiciendis": "nulla",
                        "magni": "aperiam",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("numquam"),
                                    ClientSecret: sdk.String("veniam"),
                                    KubectlRedirectURI: sdk.String("in"),
                                    Tenant: sdk.String("officiis"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Marsha Heidenreich"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("laboriosam"),
                                    ClientID: sdk.String("dolorum"),
                                    ClientSecret: sdk.String("voluptatum"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("error"),
                                    GroupPrefix: sdk.String("hic"),
                                    GroupsClaim: sdk.String("expedita"),
                                    IssuerURI: sdk.String("debitis"),
                                    KubectlRedirectURI: sdk.String("neque"),
                                    Scopes: sdk.String("dolorum"),
                                    UserClaim: sdk.String("nostrum"),
                                    UserPrefix: sdk.String("officia"),
                                },
                                Proxy: sdk.String("dolorum"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("corrupti"),
                                    ClientSecret: sdk.String("accusamus"),
                                    KubectlRedirectURI: sdk.String("tempora"),
                                    Tenant: sdk.String("atque"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Miss April Stiedemann"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("magnam"),
                                    ClientID: sdk.String("consequatur"),
                                    ClientSecret: sdk.String("esse"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("ipsam"),
                                    GroupPrefix: sdk.String("sit"),
                                    GroupsClaim: sdk.String("voluptatum"),
                                    IssuerURI: sdk.String("quas"),
                                    KubectlRedirectURI: sdk.String("repudiandae"),
                                    Scopes: sdk.String("corporis"),
                                    UserClaim: sdk.String("et"),
                                    UserPrefix: sdk.String("blanditiis"),
                                },
                                Proxy: sdk.String("ex"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("sed"),
                                    ClientSecret: sdk.String("sit"),
                                    KubectlRedirectURI: sdk.String("vel"),
                                    Tenant: sdk.String("nostrum"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Evan Altenwerth"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("dolorem"),
                                    ClientID: sdk.String("harum"),
                                    ClientSecret: sdk.String("dicta"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("architecto"),
                                    GroupPrefix: sdk.String("occaecati"),
                                    GroupsClaim: sdk.String("labore"),
                                    IssuerURI: sdk.String("quidem"),
                                    KubectlRedirectURI: sdk.String("atque"),
                                    Scopes: sdk.String("laborum"),
                                    UserClaim: sdk.String("nam"),
                                    UserPrefix: sdk.String("tenetur"),
                                },
                                Proxy: sdk.String("laboriosam"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("alias"),
                                    ClientSecret: sdk.String("amet"),
                                    KubectlRedirectURI: sdk.String("deserunt"),
                                    Tenant: sdk.String("voluptate"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Boyd McKenzie"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("voluptates"),
                                    ClientID: sdk.String("perferendis"),
                                    ClientSecret: sdk.String("est"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("quidem"),
                                    GroupPrefix: sdk.String("reprehenderit"),
                                    GroupsClaim: sdk.String("facere"),
                                    IssuerURI: sdk.String("fuga"),
                                    KubectlRedirectURI: sdk.String("praesentium"),
                                    Scopes: sdk.String("mollitia"),
                                    UserClaim: sdk.String("veniam"),
                                    UserPrefix: sdk.String("voluptatem"),
                                },
                                Proxy: sdk.String("quisquam"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumManual.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementUnspecified.ToPointer(),
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: sdk.String("atque"),
                            ConstraintViolationLimit: sdk.String("reprehenderit"),
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "totam": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("suscipit"),
                                            Memory: sdk.String("quidem"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("maxime"),
                                            Memory: sdk.String("et"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("amet"),
                                            Key: sdk.String("assumenda"),
                                            Operator: sdk.String("ea"),
                                            Value: sdk.String("atque"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("error"),
                                            Key: sdk.String("officiis"),
                                            Operator: sdk.String("officiis"),
                                            Value: sdk.String("accusamus"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("natus"),
                                },
                                "minima": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("aspernatur"),
                                            Memory: sdk.String("ex"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("maiores"),
                                            Memory: sdk.String("corrupti"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("error"),
                                            Key: sdk.String("blanditiis"),
                                            Operator: sdk.String("suscipit"),
                                            Value: sdk.String("repudiandae"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("atque"),
                                            Key: sdk.String("atque"),
                                            Operator: sdk.String("sunt"),
                                            Value: sdk.String("recusandae"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("dolorum"),
                                            Key: sdk.String("repellendus"),
                                            Operator: sdk.String("labore"),
                                            Value: sdk.String("reiciendis"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("doloremque"),
                                            Key: sdk.String("repudiandae"),
                                            Operator: sdk.String("dicta"),
                                            Value: sdk.String("accusantium"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("beatae"),
                                },
                                "dolores": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("enim"),
                                            Memory: sdk.String("laboriosam"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("velit"),
                                            Memory: sdk.String("a"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("magnam"),
                                            Key: sdk.String("saepe"),
                                            Operator: sdk.String("consequuntur"),
                                            Value: sdk.String("occaecati"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("officiis"),
                                            Key: sdk.String("perspiciatis"),
                                            Operator: sdk.String("in"),
                                            Value: sdk.String("adipisci"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("eveniet"),
                                            Key: sdk.String("occaecati"),
                                            Operator: sdk.String("consequuntur"),
                                            Value: sdk.String("fugit"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("id"),
                                },
                                "quis": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("reprehenderit"),
                                            Memory: sdk.String("error"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("illo"),
                                            Memory: sdk.String("corporis"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("eveniet"),
                                            Key: sdk.String("non"),
                                            Operator: sdk.String("vero"),
                                            Value: sdk.String("doloremque"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("iure"),
                                            Key: sdk.String("ipsa"),
                                            Operator: sdk.String("totam"),
                                            Value: sdk.String("quae"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("molestiae"),
                                            Key: sdk.String("eveniet"),
                                            Operator: sdk.String("qui"),
                                            Value: sdk.String("cum"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("iure"),
                                },
                            },
                            ExemptableNamespaces: []string{
                                "ratione",
                                "laborum",
                                "distinctio",
                                "voluptatum",
                            },
                            InstallSpec: shared.PolicyControllerHubConfigInstallSpecEnumInstallSpecEnabled.ToPointer(),
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    shared.PolicyControllerMonitoringConfigBackendsEnumMonitoringBackendUnspecified,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumCloudMonitoring,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "corporis": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "nihil",
                                            "mollitia",
                                            "voluptas",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumManagementUnspecified.ToPointer(),
                                    },
                                },
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: sdk.Bool(false),
                                    Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumAll.ToPointer(),
                                },
                            },
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: sdk.Bool(false),
                                Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumAll.ToPointer(),
                            },
                        },
                        Version: sdk.String("dolores"),
                    },
                },
                "id": shared.MembershipFeatureSpecInput{
                    Anthosobservability: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("minima"),
                    },
                    Cloudbuild: &shared.MembershipSpec{
                        SecurityPolicy: shared.MembershipSpecSecurityPolicyEnumSecurityPolicyUnspecified.ToPointer(),
                        Version: sdk.String("dolorum"),
                    },
                    Configmanagement: &shared.ConfigManagementMembershipSpec{
                        Binauthz: &shared.ConfigManagementBinauthzConfig{
                            Enabled: sdk.Bool(false),
                        },
                        ConfigSync: &shared.ConfigManagementConfigSync{
                            AllowVerticalScale: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            Git: &shared.ConfigManagementGitConfig{
                                GcpServiceAccountEmail: sdk.String("nesciunt"),
                                HTTPSProxy: sdk.String("quae"),
                                PolicyDir: sdk.String("recusandae"),
                                SecretType: sdk.String("omnis"),
                                SyncBranch: sdk.String("quaerat"),
                                SyncRepo: sdk.String("molestiae"),
                                SyncRev: sdk.String("ex"),
                                SyncWaitSecs: sdk.String("ut"),
                            },
                            Managed: &shared.ConfigManagementManaged{
                                Enabled: sdk.Bool(false),
                            },
                            Oci: &shared.ConfigManagementOciConfig{
                                GcpServiceAccountEmail: sdk.String("culpa"),
                                PolicyDir: sdk.String("adipisci"),
                                SecretType: sdk.String("debitis"),
                                SyncRepo: sdk.String("laudantium"),
                                SyncWaitSecs: sdk.String("eum"),
                            },
                            PreventDrift: sdk.Bool(false),
                            SourceFormat: sdk.String("nemo"),
                        },
                        HierarchyController: &shared.ConfigManagementHierarchyControllerConfig{
                            EnableHierarchicalResourceQuota: sdk.Bool(false),
                            EnablePodTreeLabels: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                        },
                        PolicyController: &shared.ConfigManagementPolicyController{
                            AuditIntervalSeconds: sdk.String("recusandae"),
                            Enabled: sdk.Bool(false),
                            ExemptableNamespaces: []string{
                                "provident",
                                "quis",
                            },
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.ConfigManagementPolicyControllerMonitoring{
                                Backends: []shared.ConfigManagementPolicyControllerMonitoringBackendsEnum{
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumCloudMonitoring,
                                    shared.ConfigManagementPolicyControllerMonitoringBackendsEnumPrometheus,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryInstalled: sdk.Bool(false),
                        },
                        Version: sdk.String("aspernatur"),
                    },
                    FleetInherited: sdk.Bool(false),
                    Fleetobservability: map[string]interface{}{
                        "quasi": "animi",
                        "nostrum": "mollitia",
                    },
                    Identityservice: &shared.IdentityServiceMembershipSpecInput{
                        AuthMethods: []shared.IdentityServiceAuthMethodInput{
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("possimus"),
                                    ClientSecret: sdk.String("animi"),
                                    KubectlRedirectURI: sdk.String("ex"),
                                    Tenant: sdk.String("aliquid"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Kristie Wyman"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("nam"),
                                    ClientID: sdk.String("earum"),
                                    ClientSecret: sdk.String("officia"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("laborum"),
                                    GroupPrefix: sdk.String("placeat"),
                                    GroupsClaim: sdk.String("modi"),
                                    IssuerURI: sdk.String("voluptatibus"),
                                    KubectlRedirectURI: sdk.String("molestias"),
                                    Scopes: sdk.String("officiis"),
                                    UserClaim: sdk.String("sapiente"),
                                    UserPrefix: sdk.String("cumque"),
                                },
                                Proxy: sdk.String("vitae"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("rerum"),
                                    ClientSecret: sdk.String("tempora"),
                                    KubectlRedirectURI: sdk.String("quis"),
                                    Tenant: sdk.String("inventore"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Mrs. Erma Berge"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("eum"),
                                    ClientID: sdk.String("eius"),
                                    ClientSecret: sdk.String("rem"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("at"),
                                    GroupPrefix: sdk.String("impedit"),
                                    GroupsClaim: sdk.String("eos"),
                                    IssuerURI: sdk.String("sapiente"),
                                    KubectlRedirectURI: sdk.String("eum"),
                                    Scopes: sdk.String("dicta"),
                                    UserClaim: sdk.String("minima"),
                                    UserPrefix: sdk.String("beatae"),
                                },
                                Proxy: sdk.String("cupiditate"),
                            },
                            shared.IdentityServiceAuthMethodInput{
                                AzureadConfig: &shared.IdentityServiceAzureADConfigInput{
                                    ClientID: sdk.String("provident"),
                                    ClientSecret: sdk.String("earum"),
                                    KubectlRedirectURI: sdk.String("soluta"),
                                    Tenant: sdk.String("hic"),
                                },
                                GoogleConfig: &shared.IdentityServiceGoogleConfig{
                                    Disable: sdk.Bool(false),
                                },
                                Name: sdk.String("Timothy Weber"),
                                OidcConfig: &shared.IdentityServiceOidcConfigInput{
                                    CertificateAuthorityData: sdk.String("debitis"),
                                    ClientID: sdk.String("aliquid"),
                                    ClientSecret: sdk.String("porro"),
                                    DeployCloudConsoleProxy: sdk.Bool(false),
                                    EnableAccessToken: sdk.Bool(false),
                                    ExtraParams: sdk.String("suscipit"),
                                    GroupPrefix: sdk.String("dolorem"),
                                    GroupsClaim: sdk.String("fugit"),
                                    IssuerURI: sdk.String("cumque"),
                                    KubectlRedirectURI: sdk.String("fuga"),
                                    Scopes: sdk.String("ratione"),
                                    UserClaim: sdk.String("animi"),
                                    UserPrefix: sdk.String("necessitatibus"),
                                },
                                Proxy: sdk.String("nulla"),
                            },
                        },
                    },
                    Mesh: &shared.ServiceMeshMembershipSpec{
                        ControlPlane: shared.ServiceMeshMembershipSpecControlPlaneEnumControlPlaneManagementUnspecified.ToPointer(),
                        Management: shared.ServiceMeshMembershipSpecManagementEnumManagementUnspecified.ToPointer(),
                    },
                    Policycontroller: &shared.PolicyControllerMembershipSpec{
                        PolicyControllerHubConfig: &shared.PolicyControllerHubConfig{
                            AuditIntervalSeconds: sdk.String("et"),
                            ConstraintViolationLimit: sdk.String("ducimus"),
                            DeploymentConfigs: map[string]shared.PolicyControllerPolicyControllerDeploymentConfig{
                                "occaecati": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("suscipit"),
                                            Memory: sdk.String("adipisci"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("quasi"),
                                            Memory: sdk.String("magni"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("nulla"),
                                            Key: sdk.String("necessitatibus"),
                                            Operator: sdk.String("ipsa"),
                                            Value: sdk.String("tempora"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("nihil"),
                                            Key: sdk.String("molestiae"),
                                            Operator: sdk.String("dicta"),
                                            Value: sdk.String("iusto"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("esse"),
                                            Key: sdk.String("praesentium"),
                                            Operator: sdk.String("maiores"),
                                            Value: sdk.String("reiciendis"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("vel"),
                                            Key: sdk.String("architecto"),
                                            Operator: sdk.String("fugiat"),
                                            Value: sdk.String("doloremque"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("dicta"),
                                },
                                "odio": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("tempora"),
                                            Memory: sdk.String("esse"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("ex"),
                                            Memory: sdk.String("consectetur"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("ipsa"),
                                            Key: sdk.String("laborum"),
                                            Operator: sdk.String("sunt"),
                                            Value: sdk.String("nostrum"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("fugiat"),
                                            Key: sdk.String("expedita"),
                                            Operator: sdk.String("aliquid"),
                                            Value: sdk.String("officia"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("suscipit"),
                                },
                                "aliquid": shared.PolicyControllerPolicyControllerDeploymentConfig{
                                    ContainerResources: &shared.PolicyControllerResourceRequirements{
                                        Limits: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("perferendis"),
                                            Memory: sdk.String("eum"),
                                        },
                                        Requests: &shared.PolicyControllerResourceList{
                                            CPU: sdk.String("voluptas"),
                                            Memory: sdk.String("iste"),
                                        },
                                    },
                                    PodAntiAffinity: sdk.Bool(false),
                                    PodTolerations: []shared.PolicyControllerToleration{
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("ab"),
                                            Key: sdk.String("error"),
                                            Operator: sdk.String("possimus"),
                                            Value: sdk.String("voluptates"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("mollitia"),
                                            Key: sdk.String("laborum"),
                                            Operator: sdk.String("libero"),
                                            Value: sdk.String("ad"),
                                        },
                                        shared.PolicyControllerToleration{
                                            Effect: sdk.String("deleniti"),
                                            Key: sdk.String("enim"),
                                            Operator: sdk.String("vitae"),
                                            Value: sdk.String("repellendus"),
                                        },
                                    },
                                    ReplicaCount: sdk.String("ex"),
                                },
                            },
                            ExemptableNamespaces: []string{
                                "ex",
                                "ut",
                                "ad",
                                "expedita",
                            },
                            InstallSpec: shared.PolicyControllerHubConfigInstallSpecEnumInstallSpecUnspecified.ToPointer(),
                            LogDeniesEnabled: sdk.Bool(false),
                            Monitoring: &shared.PolicyControllerMonitoringConfig{
                                Backends: []shared.PolicyControllerMonitoringConfigBackendsEnum{
                                    shared.PolicyControllerMonitoringConfigBackendsEnumCloudMonitoring,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumPrometheus,
                                    shared.PolicyControllerMonitoringConfigBackendsEnumMonitoringBackendUnspecified,
                                },
                            },
                            MutationEnabled: sdk.Bool(false),
                            PolicyContent: &shared.PolicyControllerPolicyContentSpec{
                                Bundles: map[string]shared.PolicyControllerBundleInstallSpec{
                                    "omnis": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "rerum",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "culpa": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "sapiente",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumInstalled.ToPointer(),
                                    },
                                    "architecto": shared.PolicyControllerBundleInstallSpec{
                                        ExemptedNamespaces: []string{
                                            "pariatur",
                                            "debitis",
                                            "voluptatem",
                                        },
                                        Management: shared.PolicyControllerBundleInstallSpecManagementEnumManagementUnspecified.ToPointer(),
                                    },
                                },
                                TemplateLibrary: &shared.PolicyControllerTemplateLibraryConfig{
                                    Included: sdk.Bool(false),
                                    Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumNotInstalled.ToPointer(),
                                },
                            },
                            ReferentialRulesEnabled: sdk.Bool(false),
                            TemplateLibraryConfig: &shared.PolicyControllerTemplateLibraryConfig{
                                Included: sdk.Bool(false),
                                Installation: shared.PolicyControllerTemplateLibraryConfigInstallationEnumAll.ToPointer(),
                            },
                        },
                        Version: sdk.String("ex"),
                    },
                },
            },
            ResourceState: &shared.FeatureResourceState{
                State: shared.FeatureResourceStateStateEnumServiceUpdating.ToPointer(),
            },
            ScopeSpecs: map[string]map[string]interface{}{
                "minus": map[string]interface{}{
                    "asperiores": "ratione",
                    "ullam": "perferendis",
                },
                "illum": map[string]interface{}{
                    "impedit": "quibusdam",
                    "nam": "ipsam",
                    "culpa": "dolor",
                },
                "aliquam": map[string]interface{}{
                    "deleniti": "veritatis",
                },
            },
            Spec: &shared.CommonFeatureSpec{
                Anthosobservability: &shared.AnthosObservabilityFeatureSpec{
                    DefaultMembershipSpec: &shared.AnthosObservabilityMembershipSpec{
                        DoNotOptimizeMetrics: sdk.Bool(false),
                        EnableStackdriverOnApplications: sdk.Bool(false),
                        Version: sdk.String("tempora"),
                    },
                },
                Appdevexperience: map[string]interface{}{
                    "consequatur": "architecto",
                },
                Fleetobservability: &shared.FleetObservabilityFeatureSpec{
                    LoggingConfig: &shared.FleetObservabilityLoggingConfig{
                        DefaultConfig: &shared.FleetObservabilityRoutingConfig{
                            Mode: shared.FleetObservabilityRoutingConfigModeEnumModeUnspecified.ToPointer(),
                        },
                        FleetScopeLogsConfig: &shared.FleetObservabilityRoutingConfig{
                            Mode: shared.FleetObservabilityRoutingConfigModeEnumModeUnspecified.ToPointer(),
                        },
                    },
                },
                Multiclusteringress: &shared.MultiClusterIngressFeatureSpec{
                    Billing: shared.MultiClusterIngressFeatureSpecBillingEnumBillingUnspecified.ToPointer(),
                    ConfigMembership: sdk.String("ab"),
                },
            },
            State: &shared.CommonFeatureState{
                Appdevexperience: &shared.AppDevExperienceFeatureState{
                    NetworkingInstallSucceeded: &shared.Status{
                        Code: shared.StatusCodeEnumFailed.ToPointer(),
                        Description: sdk.String("quae"),
                    },
                },
                Fleetobservability: map[string]interface{}{
                    "fugiat": "ipsam",
                },
                State: &shared.FeatureState{
                    Code: shared.FeatureStateCodeEnumCodeUnspecified.ToPointer(),
                    Description: sdk.String("ipsa"),
                    UpdateTime: sdk.String("quas"),
                },
            },
        },
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        FeatureID: sdk.String("esse"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("veniam"),
        Parent: "nesciunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        RequestID: sdk.String("eum"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("voluptatum"),
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
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("autem"),
        Filter: sdk.String("nobis"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("recusandae"),
        OrderBy: sdk.String("consequuntur"),
        PageSize: sdk.Int64(28952),
        PageToken: sdk.String("exercitationem"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("at"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FleetInput: &shared.FleetInput{
            DisplayName: sdk.String("est"),
        },
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("optio"),
        OauthToken: sdk.String("occaecati"),
        Parent: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("officia"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("eius"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("ducimus"),
        PageSize: sdk.Int64(200516),
        PageToken: sdk.String("fuga"),
        Parent: "laudantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("rem"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("consectetur"),
        Filter: sdk.String("aperiam"),
        Key: sdk.String("cupiditate"),
        Name: "Dominic Abernathy",
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(612867),
        PageToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("accusamus"),
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
            Name: sdk.String("Alejandro Wisoky"),
            Scope: sdk.String("maxime"),
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("itaque"),
        MembershipBindingID: sdk.String("commodi"),
        OauthToken: sdk.String("totam"),
        Parent: "earum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("vero"),
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
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("non"),
        OauthToken: sdk.String("maiores"),
        PageSize: sdk.Int64(318233),
        PageToken: sdk.String("sint"),
        Parent: "nulla",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("nemo"),
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
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("hic"),
        OptionsRequestedPolicyVersion: sdk.Int64(900103),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        Resource: "ex",
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("debitis"),
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
                                    "laborum",
                                    "consectetur",
                                    "velit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "impedit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "repudiandae",
                                    "nam",
                                    "dolore",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sequi",
                                    "dignissimos",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("quo"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("quibusdam"),
                            Expression: sdk.String("iure"),
                            Location: sdk.String("odit"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "magnam",
                            "quibusdam",
                        },
                        Role: sdk.String("inventore"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("facere"),
                            Expression: sdk.String("libero"),
                            Location: sdk.String("architecto"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "porro",
                        },
                        Role: sdk.String("aliquam"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("velit"),
                            Expression: sdk.String("illo"),
                            Location: sdk.String("accusantium"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "beatae",
                            "vero",
                        },
                        Role: sdk.String("excepturi"),
                    },
                },
                Etag: sdk.String("eum"),
                Version: sdk.Int(246557),
            },
            UpdateMask: sdk.String("ut"),
        },
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        Resource: "alias",
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("itaque"),
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
                "non",
                "dolor",
                "iusto",
            },
        },
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("officia"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        Resource: "voluptas",
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("placeat"),
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
            Name: sdk.String("Alfredo Wilkinson"),
            Scope: sdk.String("unde"),
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("corporis"),
        NamespaceID: sdk.String("est"),
        OauthToken: sdk.String("error"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("vero"),
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
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("ad"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("iste"),
        PageSize: sdk.Int64(403026),
        PageToken: sdk.String("nemo"),
        Parent: "soluta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("dolorum"),
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
            Group: sdk.String("fugit"),
            Name: sdk.String("Mr. Anne Kautzer"),
            Role: &shared.Role{
                PredefinedRole: shared.RolePredefinedRoleEnumUnknown.ToPointer(),
            },
            User: sdk.String("exercitationem"),
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("distinctio"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        RbacrolebindingID: sdk.String("quia"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("omnis"),
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
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("quos"),
        PageSize: sdk.Int64(811939),
        PageToken: sdk.String("sit"),
        Parent: "iusto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("inventore"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "dolore": "eligendi",
            "distinctio": "voluptatem",
            "autem": "esse",
        },
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("est"),
        Key: sdk.String("facere"),
        Name: "Javier McKenzie",
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("autem"),
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
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("officiis"),
        Filter: sdk.String("voluptatibus"),
        Key: sdk.String("cum"),
        Name: "Robert Crona",
        OauthToken: sdk.String("repudiandae"),
        PageSize: sdk.Int64(34070),
        PageToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("quibusdam"),
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
            Name: sdk.String("Fred Champlin"),
        },
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("similique"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("quidem"),
        Parent: "quis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        ScopeID: sdk.String("unde"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("delectus"),
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
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("nesciunt"),
        Force: sdk.Bool(false),
        Key: sdk.String("at"),
        Name: "Cody Rowe",
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        RequestID: sdk.String("voluptatum"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("minima"),
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
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("minus"),
        Key: sdk.String("eum"),
        Name: "Dana Gusikowski",
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("ratione"),
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
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("quo"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("minus"),
        PageSize: sdk.Int64(684553),
        PageToken: sdk.String("nostrum"),
        Parent: "est",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempore"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ScopeInput: &shared.ScopeInput{
            AllMemberships: sdk.Bool(false),
            Name: sdk.String("Winifred Streich"),
        },
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("in"),
        Key: sdk.String("ducimus"),
        Name: "Ms. Phillip Mraz",
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UpdateMask: sdk.String("similique"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("ex"),
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
