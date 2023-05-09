# Projects

### Available Operations

* [IdsProjectsLocationsEndpointsCreate](#idsprojectslocationsendpointscreate) - Creates a new Endpoint in a given project and location.
* [IdsProjectsLocationsEndpointsGetIamPolicy](#idsprojectslocationsendpointsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [IdsProjectsLocationsEndpointsList](#idsprojectslocationsendpointslist) - Lists Endpoints in a given project and location.
* [IdsProjectsLocationsEndpointsPatch](#idsprojectslocationsendpointspatch) - Updates the parameters of a single Endpoint.
* [IdsProjectsLocationsEndpointsSetIamPolicy](#idsprojectslocationsendpointssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [IdsProjectsLocationsEndpointsTestIamPermissions](#idsprojectslocationsendpointstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [IdsProjectsLocationsList](#idsprojectslocationslist) - Lists information about the supported locations for this service.
* [IdsProjectsLocationsOperationsCancel](#idsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [IdsProjectsLocationsOperationsDelete](#idsprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [IdsProjectsLocationsOperationsGet](#idsprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [IdsProjectsLocationsOperationsList](#idsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## IdsProjectsLocationsEndpointsCreate

Creates a new Endpoint in a given project and location.

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
    res, err := s.Projects.IdsProjectsLocationsEndpointsCreate(ctx, operations.IdsProjectsLocationsEndpointsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EndpointInput: &shared.EndpointInput{
            Description: sdk.String("temporibus"),
            Labels: map[string]string{
                "quis": "veritatis",
            },
            Network: sdk.String("deserunt"),
            Severity: shared.EndpointSeverityEnumSeverityUnspecified.ToPointer(),
            ThreatExceptions: []string{
                "repellendus",
                "sapiente",
            },
            TrafficLogs: sdk.Bool(false),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("at"),
        EndpointID: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("quod"),
        Parent: "quod",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        RequestID: sdk.String("totam"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.IdsProjectsLocationsEndpointsCreateSecurity{
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

## IdsProjectsLocationsEndpointsGetIamPolicy

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
    res, err := s.Projects.IdsProjectsLocationsEndpointsGetIamPolicy(ctx, operations.IdsProjectsLocationsEndpointsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("hic"),
        OptionsRequestedPolicyVersion: sdk.Int64(758616),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        Resource: "beatae",
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.IdsProjectsLocationsEndpointsGetIamPolicySecurity{
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

## IdsProjectsLocationsEndpointsList

Lists Endpoints in a given project and location.

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
    res, err := s.Projects.IdsProjectsLocationsEndpointsList(ctx, operations.IdsProjectsLocationsEndpointsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("esse"),
        Filter: sdk.String("ipsum"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("aspernatur"),
        OrderBy: sdk.String("perferendis"),
        PageSize: sdk.Int64(324141),
        PageToken: sdk.String("natus"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("natus"),
    }, operations.IdsProjectsLocationsEndpointsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEndpointsResponse != nil {
        // handle response
    }
}
```

## IdsProjectsLocationsEndpointsPatch

Updates the parameters of a single Endpoint.

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
    res, err := s.Projects.IdsProjectsLocationsEndpointsPatch(ctx, operations.IdsProjectsLocationsEndpointsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EndpointInput: &shared.EndpointInput{
            Description: sdk.String("hic"),
            Labels: map[string]string{
                "fuga": "in",
                "corporis": "iste",
                "iure": "saepe",
                "quidem": "architecto",
            },
            Network: sdk.String("ipsa"),
            Severity: shared.EndpointSeverityEnumCritical.ToPointer(),
            ThreatExceptions: []string{
                "mollitia",
                "laborum",
                "dolores",
            },
            TrafficLogs: sdk.Bool(false),
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("enim"),
        Name: "Corey Hane III",
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        RequestID: sdk.String("sapiente"),
        UpdateMask: sdk.String("architecto"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.IdsProjectsLocationsEndpointsPatchSecurity{
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

## IdsProjectsLocationsEndpointsSetIamPolicy

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
    res, err := s.Projects.IdsProjectsLocationsEndpointsSetIamPolicy(ctx, operations.IdsProjectsLocationsEndpointsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "occaecati",
                                    "numquam",
                                    "commodi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "velit",
                                    "error",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "vitae",
                                    "laborum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "odit",
                                    "quo",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("tenetur"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("id"),
                            Expression: sdk.String("possimus"),
                            Location: sdk.String("aut"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "temporibus",
                            "laborum",
                            "quasi",
                        },
                        Role: sdk.String("reiciendis"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("voluptatibus"),
                            Expression: sdk.String("vero"),
                            Location: sdk.String("nihil"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "ipsa",
                            "omnis",
                            "voluptate",
                            "cum",
                        },
                        Role: sdk.String("perferendis"),
                    },
                },
                Etag: sdk.String("doloremque"),
                Version: sdk.Int(441711),
            },
            UpdateMask: sdk.String("ut"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        Resource: "enim",
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.IdsProjectsLocationsEndpointsSetIamPolicySecurity{
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

## IdsProjectsLocationsEndpointsTestIamPermissions

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
    res, err := s.Projects.IdsProjectsLocationsEndpointsTestIamPermissions(ctx, operations.IdsProjectsLocationsEndpointsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "ipsum",
            },
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        Resource: "voluptates",
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.IdsProjectsLocationsEndpointsTestIamPermissionsSecurity{
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

## IdsProjectsLocationsList

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
    res, err := s.Projects.IdsProjectsLocationsList(ctx, operations.IdsProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("enim"),
        Filter: sdk.String("consequatur"),
        Key: sdk.String("est"),
        Name: "Benjamin O'Connell",
        OauthToken: sdk.String("labore"),
        PageSize: sdk.Int64(264730),
        PageToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("quos"),
    }, operations.IdsProjectsLocationsListSecurity{
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

## IdsProjectsLocationsOperationsCancel

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
    res, err := s.Projects.IdsProjectsLocationsOperationsCancel(ctx, operations.IdsProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "assumenda": "ipsam",
        },
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("tempora"),
        Name: "Geoffrey Green",
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.IdsProjectsLocationsOperationsCancelSecurity{
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

## IdsProjectsLocationsOperationsDelete

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
    res, err := s.Projects.IdsProjectsLocationsOperationsDelete(ctx, operations.IdsProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("debitis"),
        Name: "Wilbur King",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        RequestID: sdk.String("dicta"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.IdsProjectsLocationsOperationsDeleteSecurity{
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

## IdsProjectsLocationsOperationsGet

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
    res, err := s.Projects.IdsProjectsLocationsOperationsGet(ctx, operations.IdsProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("non"),
        Name: "Jon Tillman",
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.IdsProjectsLocationsOperationsGetSecurity{
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

## IdsProjectsLocationsOperationsList

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
    res, err := s.Projects.IdsProjectsLocationsOperationsList(ctx, operations.IdsProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("nisi"),
        Filter: sdk.String("vel"),
        Key: sdk.String("natus"),
        Name: "Fernando Aufderhar",
        OauthToken: sdk.String("distinctio"),
        PageSize: sdk.Int64(660174),
        PageToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("natus"),
    }, operations.IdsProjectsLocationsOperationsListSecurity{
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
