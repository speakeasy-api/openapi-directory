# Projects

### Available Operations

* [GkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [GkehubProjectsLocationsMembershipsCreate](#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [GkehubProjectsLocationsMembershipsGenerateConnectManifest](#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [GkehubProjectsLocationsMembershipsGenerateExclusivityManifest](#gkehubprojectslocationsmembershipsgenerateexclusivitymanifest) - GenerateExclusivityManifest generates the manifests to update the exclusivity artifacts in the cluster if needed. Exclusivity artifacts include the Membership custom resource definition (CRD) and the singleton Membership custom resource (CR). Combined with ValidateExclusivity, exclusivity artifacts guarantee that a Kubernetes cluster is only registered to a single GKE Hub. The Membership CRD is versioned, and may require conversion when the GKE Hub API server begins serving a newer version of the CRD and corresponding CR. The response will be the converted CRD and CR if there are any differences between the versions.
* [GkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [GkehubProjectsLocationsMembershipsList](#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [GkehubProjectsLocationsMembershipsPatch](#gkehubprojectslocationsmembershipspatch) - Updates an existing Membership.
* [GkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [GkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [GkehubProjectsLocationsMembershipsValidateExclusivity](#gkehubprojectslocationsmembershipsvalidateexclusivity) - ValidateExclusivity validates the state of exclusivity in the cluster. The validation does not depend on an existing Hub membership resource.
* [GkehubProjectsLocationsOperationsCancel](#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [GkehubProjectsLocationsOperationsDelete](#gkehubprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [GkehubProjectsLocationsOperationsGet](#gkehubprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [GkehubProjectsLocationsOperationsList](#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        Name: "Mrs. Sophie Smith MD",
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(368241),
        PageToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MembershipInput: &shared.MembershipInput{
            Authority: &shared.AuthorityInput{
                Issuer: sdk.String("at"),
                OidcJwks: sdk.String("maiores"),
            },
            Description: sdk.String("molestiae"),
            Endpoint: &shared.MembershipEndpointInput{
                ApplianceCluster: &shared.ApplianceCluster{
                    ResourceLink: sdk.String("quod"),
                },
                EdgeCluster: &shared.EdgeCluster{
                    ResourceLink: sdk.String("quod"),
                },
                GkeCluster: &shared.GkeClusterInput{
                    ResourceLink: sdk.String("esse"),
                },
                KubernetesResource: &shared.KubernetesResourceInput{
                    MembershipCrManifest: sdk.String("totam"),
                    ResourceOptions: &shared.ResourceOptions{
                        ConnectVersion: sdk.String("porro"),
                        K8sVersion: sdk.String("dolorum"),
                        V1beta1Crd: sdk.Bool(false),
                    },
                },
                MultiCloudCluster: &shared.MultiCloudClusterInput{
                    ResourceLink: sdk.String("dicta"),
                },
                OnPremCluster: &shared.OnPremClusterInput{
                    AdminCluster: sdk.Bool(false),
                    ClusterType: shared.OnPremClusterClusterTypeEnumStandalone.ToPointer(),
                    ResourceLink: sdk.String("officia"),
                },
            },
            ExternalID: sdk.String("occaecati"),
            InfrastructureType: shared.MembershipInfrastructureTypeEnumInfrastructureTypeUnspecified.ToPointer(),
            Labels: map[string]string{
                "hic": "optio",
                "totam": "beatae",
                "commodi": "molestiae",
            },
            MonitoringConfig: &shared.MonitoringConfig{
                Cluster: sdk.String("modi"),
                ClusterHash: sdk.String("qui"),
                KubernetesMetricsPrefix: sdk.String("impedit"),
                Location: sdk.String("cum"),
                ProjectID: sdk.String("esse"),
            },
            State: &shared.MembershipStateInput{
                Description: sdk.String("ipsum"),
                UpdateTime: sdk.String("excepturi"),
            },
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        MembershipID: sdk.String("iste"),
        OauthToken: sdk.String("dolor"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        RequestID: sdk.String("hic"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("fuga"),
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
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iure"),
        ConnectAgentName: sdk.String("saepe"),
        ConnectAgentNamespace: sdk.String("quidem"),
        ConnectAgentProxy: sdk.String("architecto"),
        Fields: sdk.String("ipsa"),
        ImagePullSecretContent: sdk.String("reiciendis"),
        IsUpgrade: sdk.Bool(false),
        Key: sdk.String("est"),
        Name: "Cameron Dach",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        Registry: sdk.String("enim"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("nemo"),
        Version: sdk.String("minima"),
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

## GkehubProjectsLocationsMembershipsGenerateExclusivityManifest

GenerateExclusivityManifest generates the manifests to update the exclusivity artifacts in the cluster if needed. Exclusivity artifacts include the Membership custom resource definition (CRD) and the singleton Membership custom resource (CR). Combined with ValidateExclusivity, exclusivity artifacts guarantee that a Kubernetes cluster is only registered to a single GKE Hub. The Membership CRD is versioned, and may require conversion when the GKE Hub API server begins serving a newer version of the CRD and corresponding CR. The response will be the converted CRD and CR if there are any differences between the versions.

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsGenerateExclusivityManifest(ctx, operations.GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        CrManifest: sdk.String("doloribus"),
        CrdManifest: sdk.String("sapiente"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("mollitia"),
        Name: "Cecilia Crooks",
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("quam"),
    }, operations.GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateExclusivityManifestResponse != nil {
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
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("quis"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("laborum"),
        OptionsRequestedPolicyVersion: sdk.Int64(656330),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        Resource: "odit",
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("sequi"),
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
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("aut"),
        Filter: sdk.String("quasi"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("temporibus"),
        OrderBy: sdk.String("laborum"),
        PageSize: sdk.Int64(96098),
        PageToken: sdk.String("reiciendis"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("praesentium"),
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

## GkehubProjectsLocationsMembershipsPatch

Updates an existing Membership.

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsPatch(ctx, operations.GkehubProjectsLocationsMembershipsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MembershipInput: &shared.MembershipInput{
            Authority: &shared.AuthorityInput{
                Issuer: sdk.String("ipsa"),
                OidcJwks: sdk.String("omnis"),
            },
            Description: sdk.String("voluptate"),
            Endpoint: &shared.MembershipEndpointInput{
                ApplianceCluster: &shared.ApplianceCluster{
                    ResourceLink: sdk.String("cum"),
                },
                EdgeCluster: &shared.EdgeCluster{
                    ResourceLink: sdk.String("perferendis"),
                },
                GkeCluster: &shared.GkeClusterInput{
                    ResourceLink: sdk.String("doloremque"),
                },
                KubernetesResource: &shared.KubernetesResourceInput{
                    MembershipCrManifest: sdk.String("reprehenderit"),
                    ResourceOptions: &shared.ResourceOptions{
                        ConnectVersion: sdk.String("ut"),
                        K8sVersion: sdk.String("maiores"),
                        V1beta1Crd: sdk.Bool(false),
                    },
                },
                MultiCloudCluster: &shared.MultiCloudClusterInput{
                    ResourceLink: sdk.String("dicta"),
                },
                OnPremCluster: &shared.OnPremClusterInput{
                    AdminCluster: sdk.Bool(false),
                    ClusterType: shared.OnPremClusterClusterTypeEnumBootstrap.ToPointer(),
                    ResourceLink: sdk.String("dolore"),
                },
            },
            ExternalID: sdk.String("iusto"),
            InfrastructureType: shared.MembershipInfrastructureTypeEnumInfrastructureTypeUnspecified.ToPointer(),
            Labels: map[string]string{
                "enim": "accusamus",
                "commodi": "repudiandae",
                "quae": "ipsum",
            },
            MonitoringConfig: &shared.MonitoringConfig{
                Cluster: sdk.String("quidem"),
                ClusterHash: sdk.String("molestias"),
                KubernetesMetricsPrefix: sdk.String("excepturi"),
                Location: sdk.String("pariatur"),
                ProjectID: sdk.String("modi"),
            },
            State: &shared.MembershipStateInput{
                Description: sdk.String("praesentium"),
                UpdateTime: sdk.String("rem"),
            },
        },
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("sint"),
        Key: sdk.String("veritatis"),
        Name: "Miss Randall Hamill",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        RequestID: sdk.String("distinctio"),
        UpdateMask: sdk.String("quibusdam"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("modi"),
    }, operations.GkehubProjectsLocationsMembershipsPatchSecurity{
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
                                    "perferendis",
                                    "magni",
                                    "assumenda",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "fugit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "tempora",
                                    "facilis",
                                    "tempore",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("delectus"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "eligendi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "provident",
                                    "necessitatibus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("officia"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("debitis"),
                            Expression: sdk.String("a"),
                            Location: sdk.String("dolorum"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "illum",
                            "maiores",
                        },
                        Role: sdk.String("rerum"),
                    },
                },
                Etag: sdk.String("dicta"),
                Version: sdk.Int(297437),
            },
            UpdateMask: sdk.String("cumque"),
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        Resource: "enim",
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("delectus"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "nam",
                "id",
                "blanditiis",
            },
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        Resource: "omnis",
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("perferendis"),
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

## GkehubProjectsLocationsMembershipsValidateExclusivity

ValidateExclusivity validates the state of exclusivity in the cluster. The validation does not depend on an existing Hub membership resource.

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
    res, err := s.Projects.GkehubProjectsLocationsMembershipsValidateExclusivity(ctx, operations.GkehubProjectsLocationsMembershipsValidateExclusivityRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        CrManifest: sdk.String("labore"),
        Fields: sdk.String("labore"),
        IntendedMembership: sdk.String("suscipit"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("nobis"),
        Parent: "eum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.GkehubProjectsLocationsMembershipsValidateExclusivitySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidateExclusivityResponse != nil {
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
            "excepturi": "ullam",
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("mollitia"),
        Name: "Shaun Hammes",
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("quasi"),
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

## GkehubProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

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
    res, err := s.Projects.GkehubProjectsLocationsOperationsDelete(ctx, operations.GkehubProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("maxime"),
        Force: sdk.Bool(false),
        Key: sdk.String("deleniti"),
        Name: "Dr. Arnold Bradtke",
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        RequestID: sdk.String("repellat"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("sed"),
    }, operations.GkehubProjectsLocationsOperationsDeleteSecurity{
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

## GkehubProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.GkehubProjectsLocationsOperationsGet(ctx, operations.GkehubProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("natus"),
        Name: "Joan Satterfield",
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("odit"),
    }, operations.GkehubProjectsLocationsOperationsGetSecurity{
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
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("quidem"),
        Filter: sdk.String("ipsam"),
        Key: sdk.String("voluptate"),
        Name: "Candice Beatty",
        OauthToken: sdk.String("voluptatibus"),
        PageSize: sdk.Int64(16627),
        PageToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("cumque"),
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
