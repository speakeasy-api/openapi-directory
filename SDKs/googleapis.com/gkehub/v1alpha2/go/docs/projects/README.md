# Projects

### Available Operations

* [GkehubProjectsLocationsGlobalMembershipsInitializeHub](#gkehubprojectslocationsglobalmembershipsinitializehub) - Initializes the Hub in this project, which includes creating the default Hub Service Account and the Hub Workload Identity Pool. Initialization is optional, and happens automatically when the first Membership is created. InitializeHub should be called when the first Membership cannot be registered without these resources. A common example is granting the Hub Service Account access to another project, which requires the account to exist first.
* [GkehubProjectsLocationsList](#gkehubprojectslocationslist) - Lists information about the supported locations for this service.
* [GkehubProjectsLocationsMembershipsCreate](#gkehubprojectslocationsmembershipscreate) - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* [GkehubProjectsLocationsMembershipsGenerateConnectManifest](#gkehubprojectslocationsmembershipsgenerateconnectmanifest) - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* [GkehubProjectsLocationsMembershipsGetIamPolicy](#gkehubprojectslocationsmembershipsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [GkehubProjectsLocationsMembershipsList](#gkehubprojectslocationsmembershipslist) - Lists Memberships in a given project and location.
* [GkehubProjectsLocationsMembershipsPatch](#gkehubprojectslocationsmembershipspatch) - Updates an existing Membership.
* [GkehubProjectsLocationsMembershipsSetIamPolicy](#gkehubprojectslocationsmembershipssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [GkehubProjectsLocationsMembershipsTestIamPermissions](#gkehubprojectslocationsmembershipstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [GkehubProjectsLocationsOperationsCancel](#gkehubprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [GkehubProjectsLocationsOperationsDelete](#gkehubprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [GkehubProjectsLocationsOperationsGet](#gkehubprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [GkehubProjectsLocationsOperationsList](#gkehubprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## GkehubProjectsLocationsGlobalMembershipsInitializeHub

Initializes the Hub in this project, which includes creating the default Hub Service Account and the Hub Workload Identity Pool. Initialization is optional, and happens automatically when the first Membership is created. InitializeHub should be called when the first Membership cannot be registered without these resources. A common example is granting the Hub Service Account access to another project, which requires the account to exist first.

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
    res, err := s.Projects.GkehubProjectsLocationsGlobalMembershipsInitializeHub(ctx, operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "minus": "placeat",
            "voluptatum": "iusto",
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        Project: "veritatis",
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InitializeHubResponse != nil {
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
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("at"),
        Filter: sdk.String("at"),
        Key: sdk.String("maiores"),
        Name: "Bernadette Schmidt",
        OauthToken: sdk.String("porro"),
        PageSize: sdk.Int64(678880),
        PageToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("occaecati"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MembershipInput: &shared.MembershipInput{
            Authority: &shared.AuthorityInput{
                Issuer: sdk.String("deleniti"),
                OidcJwks: sdk.String("hic"),
            },
            Endpoint: &shared.MembershipEndpointInput{
                ApplianceCluster: &shared.ApplianceCluster{
                    ResourceLink: sdk.String("optio"),
                },
                EdgeCluster: &shared.EdgeCluster{
                    ResourceLink: sdk.String("totam"),
                },
                GkeCluster: &shared.GkeClusterInput{
                    ResourceLink: sdk.String("beatae"),
                },
                KubernetesResource: &shared.KubernetesResourceInput{
                    MembershipCrManifest: sdk.String("commodi"),
                    ResourceOptions: &shared.ResourceOptions{
                        ConnectVersion: sdk.String("molestiae"),
                        K8sVersion: sdk.String("modi"),
                        V1beta1Crd: sdk.Bool(false),
                    },
                },
                MultiCloudCluster: &shared.MultiCloudClusterInput{
                    ResourceLink: sdk.String("qui"),
                },
                OnPremCluster: &shared.OnPremClusterInput{
                    AdminCluster: sdk.Bool(false),
                    ClusterType: shared.OnPremClusterClusterTypeEnumStandalone.ToPointer(),
                    ResourceLink: sdk.String("cum"),
                },
            },
            ExternalID: sdk.String("esse"),
            InfrastructureType: shared.MembershipInfrastructureTypeEnumInfrastructureTypeUnspecified.ToPointer(),
            Labels: map[string]string{
                "aspernatur": "perferendis",
                "ad": "natus",
                "sed": "iste",
            },
            MonitoringConfig: &shared.MonitoringConfig{
                Cluster: sdk.String("dolor"),
                ClusterHash: sdk.String("natus"),
                KubernetesMetricsPrefix: sdk.String("laboriosam"),
                Location: sdk.String("hic"),
                ProjectID: sdk.String("saepe"),
            },
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("iste"),
        Key: sdk.String("iure"),
        MembershipID: sdk.String("saepe"),
        OauthToken: sdk.String("quidem"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("est"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("corporis"),
        ImagePullSecretContent: sdk.String("explicabo"),
        IsUpgrade: sdk.Bool(false),
        Key: sdk.String("nobis"),
        Name: "Guadalupe Hickle",
        Namespace: sdk.String("accusantium"),
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        Proxy: sdk.String("culpa"),
        QuotaUser: sdk.String("doloribus"),
        Registry: sdk.String("sapiente"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
        Version: sdk.String("dolorem"),
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
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("commodi"),
        OptionsRequestedPolicyVersion: sdk.Int64(466311),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        Resource: "velit",
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("quia"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vitae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("animi"),
        Fields: sdk.String("enim"),
        Filter: sdk.String("odit"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("sequi"),
        OrderBy: sdk.String("tenetur"),
        PageSize: sdk.Int64(368725),
        PageToken: sdk.String("id"),
        Parent: "possimus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("error"),
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
                Issuer: sdk.String("laborum"),
                OidcJwks: sdk.String("quasi"),
            },
            Endpoint: &shared.MembershipEndpointInput{
                ApplianceCluster: &shared.ApplianceCluster{
                    ResourceLink: sdk.String("reiciendis"),
                },
                EdgeCluster: &shared.EdgeCluster{
                    ResourceLink: sdk.String("voluptatibus"),
                },
                GkeCluster: &shared.GkeClusterInput{
                    ResourceLink: sdk.String("vero"),
                },
                KubernetesResource: &shared.KubernetesResourceInput{
                    MembershipCrManifest: sdk.String("nihil"),
                    ResourceOptions: &shared.ResourceOptions{
                        ConnectVersion: sdk.String("praesentium"),
                        K8sVersion: sdk.String("voluptatibus"),
                        V1beta1Crd: sdk.Bool(false),
                    },
                },
                MultiCloudCluster: &shared.MultiCloudClusterInput{
                    ResourceLink: sdk.String("ipsa"),
                },
                OnPremCluster: &shared.OnPremClusterInput{
                    AdminCluster: sdk.Bool(false),
                    ClusterType: shared.OnPremClusterClusterTypeEnumStandalone.ToPointer(),
                    ResourceLink: sdk.String("voluptate"),
                },
            },
            ExternalID: sdk.String("cum"),
            InfrastructureType: shared.MembershipInfrastructureTypeEnumInfrastructureTypeUnspecified.ToPointer(),
            Labels: map[string]string{
                "reprehenderit": "ut",
            },
            MonitoringConfig: &shared.MonitoringConfig{
                Cluster: sdk.String("maiores"),
                ClusterHash: sdk.String("dicta"),
                KubernetesMetricsPrefix: sdk.String("corporis"),
                Location: sdk.String("dolore"),
                ProjectID: sdk.String("iusto"),
            },
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("commodi"),
        Name: "Eric Emmerich",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UpdateMask: sdk.String("modi"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("rem"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "veritatis",
                                    "itaque",
                                    "incidunt",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "est",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "deserunt",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "labore",
                                    "modi",
                                    "qui",
                                    "aliquid",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("quos"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("magni"),
                            Expression: sdk.String("assumenda"),
                            Location: sdk.String("ipsam"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "dolorum",
                        },
                        Role: sdk.String("excepturi"),
                    },
                },
                Etag: sdk.String("tempora"),
                Version: sdk.Int(703737),
            },
            UpdateMask: sdk.String("tempore"),
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("non"),
        Key: sdk.String("eligendi"),
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        Resource: "provident",
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("sint"),
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
                "debitis",
            },
        },
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("in"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        Resource: "dicta",
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("cumque"),
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
            "aliquid": "laborum",
            "accusamus": "non",
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("quidem"),
        Name: "Marco Olson",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("nisi"),
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
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("perferendis"),
        Force: sdk.Bool(false),
        Key: sdk.String("nihil"),
        Name: "Verna Olson",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("eum"),
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
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("et"),
        Key: sdk.String("excepturi"),
        Name: "Ramona Lueilwitz MD",
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("eum"),
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
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("quasi"),
        Filter: sdk.String("iure"),
        Key: sdk.String("doloribus"),
        Name: "Frederick Schoen",
        OauthToken: sdk.String("in"),
        PageSize: sdk.Int64(100226),
        PageToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("expedita"),
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
