# Projects

### Available Operations

* [ApigatewayProjectsLocationsGatewaysGetIamPolicy](#apigatewayprojectslocationsgatewaysgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ApigatewayProjectsLocationsGatewaysSetIamPolicy](#apigatewayprojectslocationsgatewayssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ApigatewayProjectsLocationsGatewaysTestIamPermissions](#apigatewayprojectslocationsgatewaystestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [ApigatewayProjectsLocationsList](#apigatewayprojectslocationslist) - Lists information about the supported locations for this service.
* [ApigatewayProjectsLocationsOperationsCancel](#apigatewayprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ApigatewayProjectsLocationsOperationsDelete](#apigatewayprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ApigatewayProjectsLocationsOperationsGet](#apigatewayprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ApigatewayProjectsLocationsOperationsList](#apigatewayprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## ApigatewayProjectsLocationsGatewaysGetIamPolicy

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
    res, err := s.Projects.ApigatewayProjectsLocationsGatewaysGetIamPolicy(ctx, operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        OptionsRequestedPolicyVersion: sdk.Int64(477665),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        Resource: "placeat",
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayPolicy != nil {
        // handle response
    }
}
```

## ApigatewayProjectsLocationsGatewaysSetIamPolicy

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
    res, err := s.Projects.ApigatewayProjectsLocationsGatewaysSetIamPolicy(ctx, operations.ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApigatewaySetIamPolicyRequest: &shared.ApigatewaySetIamPolicyRequest{
            Policy: &shared.ApigatewayPolicy{
                AuditConfigs: []shared.ApigatewayAuditConfig{
                    shared.ApigatewayAuditConfig{
                        AuditLogConfigs: []shared.ApigatewayAuditLogConfig{
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "ab",
                                    "quis",
                                    "veritatis",
                                    "deserunt",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "repellendus",
                                    "sapiente",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "at",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "molestiae",
                                    "quod",
                                    "quod",
                                    "esse",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("porro"),
                    },
                    shared.ApigatewayAuditConfig{
                        AuditLogConfigs: []shared.ApigatewayAuditLogConfig{
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "nam",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "fugit",
                                    "deleniti",
                                    "hic",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "beatae",
                                    "commodi",
                                    "molestiae",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("qui"),
                    },
                },
                Bindings: []shared.ApigatewayBinding{
                    shared.ApigatewayBinding{
                        Condition: &shared.ApigatewayExpr{
                            Description: sdk.String("cum"),
                            Expression: sdk.String("esse"),
                            Location: sdk.String("ipsum"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "perferendis",
                        },
                        Role: sdk.String("ad"),
                    },
                    shared.ApigatewayBinding{
                        Condition: &shared.ApigatewayExpr{
                            Description: sdk.String("natus"),
                            Expression: sdk.String("sed"),
                            Location: sdk.String("iste"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "laboriosam",
                            "hic",
                            "saepe",
                        },
                        Role: sdk.String("fuga"),
                    },
                    shared.ApigatewayBinding{
                        Condition: &shared.ApigatewayExpr{
                            Description: sdk.String("in"),
                            Expression: sdk.String("corporis"),
                            Location: sdk.String("iste"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "quidem",
                            "architecto",
                            "ipsa",
                            "reiciendis",
                        },
                        Role: sdk.String("est"),
                    },
                    shared.ApigatewayBinding{
                        Condition: &shared.ApigatewayExpr{
                            Description: sdk.String("mollitia"),
                            Expression: sdk.String("laborum"),
                            Location: sdk.String("dolores"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "explicabo",
                            "nobis",
                        },
                        Role: sdk.String("enim"),
                    },
                },
                Etag: sdk.String("omnis"),
                Version: sdk.Int(363711),
            },
            UpdateMask: sdk.String("minima"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        Resource: "mollitia",
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayPolicy != nil {
        // handle response
    }
}
```

## ApigatewayProjectsLocationsGatewaysTestIamPermissions

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
    res, err := s.Projects.ApigatewayProjectsLocationsGatewaysTestIamPermissions(ctx, operations.ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ApigatewayTestIamPermissionsRequest: &shared.ApigatewayTestIamPermissionsRequest{
            Permissions: []string{
                "mollitia",
                "occaecati",
                "numquam",
                "commodi",
            },
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        Resource: "laborum",
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("enim"),
    }, operations.ApigatewayProjectsLocationsGatewaysTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayTestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## ApigatewayProjectsLocationsList

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
    res, err := s.Projects.ApigatewayProjectsLocationsList(ctx, operations.ApigatewayProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("ipsam"),
        Filter: sdk.String("id"),
        Key: sdk.String("possimus"),
        Name: "Joyce Mueller",
        OauthToken: sdk.String("quasi"),
        PageSize: sdk.Int64(971945),
        PageToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.ApigatewayProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayListLocationsResponse != nil {
        // handle response
    }
}
```

## ApigatewayProjectsLocationsOperationsCancel

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
    res, err := s.Projects.ApigatewayProjectsLocationsOperationsCancel(ctx, operations.ApigatewayProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "omnis": "voluptate",
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("ut"),
        Name: "Willie Hessel",
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.ApigatewayProjectsLocationsOperationsCancelSecurity{
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

## ApigatewayProjectsLocationsOperationsDelete

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
    res, err := s.Projects.ApigatewayProjectsLocationsOperationsDelete(ctx, operations.ApigatewayProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("molestias"),
        Name: "Ervin Gleason",
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("sint"),
    }, operations.ApigatewayProjectsLocationsOperationsDeleteSecurity{
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

## ApigatewayProjectsLocationsOperationsGet

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
    res, err := s.Projects.ApigatewayProjectsLocationsOperationsGet(ctx, operations.ApigatewayProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("est"),
        Name: "Benjamin O'Connell",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.ApigatewayProjectsLocationsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayOperation != nil {
        // handle response
    }
}
```

## ApigatewayProjectsLocationsOperationsList

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
    res, err := s.Projects.ApigatewayProjectsLocationsOperationsList(ctx, operations.ApigatewayProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("assumenda"),
        Filter: sdk.String("ipsam"),
        Key: sdk.String("alias"),
        Name: "Sonya Marks",
        OauthToken: sdk.String("tempore"),
        PageSize: sdk.Int64(288476),
        PageToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.ApigatewayProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayListOperationsResponse != nil {
        // handle response
    }
}
```
