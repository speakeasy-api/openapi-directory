# Projects

### Available Operations

* [ApigatewayProjectsLocationsApisConfigsCreate](#apigatewayprojectslocationsapisconfigscreate) - Creates a new ApiConfig in a given project and location.
* [ApigatewayProjectsLocationsApisConfigsList](#apigatewayprojectslocationsapisconfigslist) - Lists ApiConfigs in a given project and location.
* [ApigatewayProjectsLocationsApisCreate](#apigatewayprojectslocationsapiscreate) - Creates a new Api in a given project and location.
* [ApigatewayProjectsLocationsApisList](#apigatewayprojectslocationsapislist) - Lists Apis in a given project and location.
* [ApigatewayProjectsLocationsGatewaysCreate](#apigatewayprojectslocationsgatewayscreate) - Creates a new Gateway in a given project and location.
* [ApigatewayProjectsLocationsGatewaysGetIamPolicy](#apigatewayprojectslocationsgatewaysgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ApigatewayProjectsLocationsGatewaysList](#apigatewayprojectslocationsgatewayslist) - Lists Gateways in a given project and location.
* [ApigatewayProjectsLocationsGatewaysPatch](#apigatewayprojectslocationsgatewayspatch) - Updates the parameters of a single Gateway.
* [ApigatewayProjectsLocationsGatewaysSetIamPolicy](#apigatewayprojectslocationsgatewayssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ApigatewayProjectsLocationsGatewaysTestIamPermissions](#apigatewayprojectslocationsgatewaystestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [ApigatewayProjectsLocationsList](#apigatewayprojectslocationslist) - Lists information about the supported locations for this service.
* [ApigatewayProjectsLocationsOperationsCancel](#apigatewayprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ApigatewayProjectsLocationsOperationsDelete](#apigatewayprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ApigatewayProjectsLocationsOperationsGet](#apigatewayprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ApigatewayProjectsLocationsOperationsList](#apigatewayprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## ApigatewayProjectsLocationsApisConfigsCreate

Creates a new ApiConfig in a given project and location.

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
    res, err := s.Projects.ApigatewayProjectsLocationsApisConfigsCreate(ctx, operations.ApigatewayProjectsLocationsApisConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ApigatewayAPIConfigInput: &shared.ApigatewayAPIConfigInput{
            DisplayName: sdk.String("molestiae"),
            GatewayConfig: &shared.ApigatewayGatewayConfig{
                BackendConfig: &shared.ApigatewayBackendConfig{
                    GoogleServiceAccount: sdk.String("modi"),
                },
            },
            GatewayServiceAccount: sdk.String("qui"),
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("cum"),
                        Path: sdk.String("esse"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("excepturi"),
                            Path: sdk.String("aspernatur"),
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("perferendis"),
                        Path: sdk.String("ad"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("sed"),
                            Path: sdk.String("iste"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("dolor"),
                            Path: sdk.String("natus"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("laboriosam"),
                            Path: sdk.String("hic"),
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("saepe"),
                        Path: sdk.String("fuga"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("corporis"),
                            Path: sdk.String("iste"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("iure"),
                            Path: sdk.String("saepe"),
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("quidem"),
                        Path: sdk.String("architecto"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("reiciendis"),
                            Path: sdk.String("est"),
                        },
                    },
                },
            },
            Labels: map[string]string{
                "laborum": "dolores",
                "dolorem": "corporis",
                "explicabo": "nobis",
            },
            ManagedServiceConfigs: []shared.ApigatewayAPIConfigFile{
                shared.ApigatewayAPIConfigFile{
                    Contents: sdk.String("omnis"),
                    Path: sdk.String("nemo"),
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: sdk.String("minima"),
                    Path: sdk.String("excepturi"),
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("iure"),
                        Path: sdk.String("culpa"),
                    },
                },
            },
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        APIConfigID: sdk.String("architecto"),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("consequuntur"),
        Parent: "repellat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.ApigatewayProjectsLocationsApisConfigsCreateSecurity{
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

## ApigatewayProjectsLocationsApisConfigsList

Lists ApiConfigs in a given project and location.

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
    res, err := s.Projects.ApigatewayProjectsLocationsApisConfigsList(ctx, operations.ApigatewayProjectsLocationsApisConfigsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Filter: sdk.String("quia"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("vitae"),
        OrderBy: sdk.String("laborum"),
        PageSize: sdk.Int64(656330),
        PageToken: sdk.String("enim"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.ApigatewayProjectsLocationsApisConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayListAPIConfigsResponse != nil {
        // handle response
    }
}
```

## ApigatewayProjectsLocationsApisCreate

Creates a new Api in a given project and location.

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
    res, err := s.Projects.ApigatewayProjectsLocationsApisCreate(ctx, operations.ApigatewayProjectsLocationsApisCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ApigatewayAPIInput: &shared.ApigatewayAPIInput{
            DisplayName: sdk.String("id"),
            Labels: map[string]string{
                "aut": "quasi",
                "error": "temporibus",
                "laborum": "quasi",
                "reiciendis": "voluptatibus",
            },
            ManagedService: sdk.String("vero"),
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumMedia.ToPointer(),
        APIID: sdk.String("voluptatibus"),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("cum"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("ut"),
    }, operations.ApigatewayProjectsLocationsApisCreateSecurity{
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

## ApigatewayProjectsLocationsApisList

Lists Apis in a given project and location.

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
    res, err := s.Projects.ApigatewayProjectsLocationsApisList(ctx, operations.ApigatewayProjectsLocationsApisListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("iusto"),
        Filter: sdk.String("dicta"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("enim"),
        OrderBy: sdk.String("accusamus"),
        PageSize: sdk.Int64(414263),
        PageToken: sdk.String("repudiandae"),
        Parent: "quae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("molestias"),
    }, operations.ApigatewayProjectsLocationsApisListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayListApisResponse != nil {
        // handle response
    }
}
```

## ApigatewayProjectsLocationsGatewaysCreate

Creates a new Gateway in a given project and location.

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
    res, err := s.Projects.ApigatewayProjectsLocationsGatewaysCreate(ctx, operations.ApigatewayProjectsLocationsGatewaysCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApigatewayGatewayInput: &shared.ApigatewayGatewayInput{
            APIConfig: sdk.String("pariatur"),
            DisplayName: sdk.String("modi"),
            Labels: map[string]string{
                "rem": "voluptates",
                "quasi": "repudiandae",
                "sint": "veritatis",
            },
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("consequatur"),
        GatewayID: sdk.String("est"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("explicabo"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("labore"),
    }, operations.ApigatewayProjectsLocationsGatewaysCreateSecurity{
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
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("quos"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("magni"),
        OptionsRequestedPolicyVersion: sdk.Int64(828940),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        Resource: "alias",
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("dolorum"),
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

## ApigatewayProjectsLocationsGatewaysList

Lists Gateways in a given project and location.

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
    res, err := s.Projects.ApigatewayProjectsLocationsGatewaysList(ctx, operations.ApigatewayProjectsLocationsGatewaysListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("labore"),
        Filter: sdk.String("delectus"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("non"),
        OrderBy: sdk.String("eligendi"),
        PageSize: sdk.Int64(576157),
        PageToken: sdk.String("aliquid"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("officia"),
    }, operations.ApigatewayProjectsLocationsGatewaysListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayListGatewaysResponse != nil {
        // handle response
    }
}
```

## ApigatewayProjectsLocationsGatewaysPatch

Updates the parameters of a single Gateway.

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
    res, err := s.Projects.ApigatewayProjectsLocationsGatewaysPatch(ctx, operations.ApigatewayProjectsLocationsGatewaysPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ApigatewayGatewayInput: &shared.ApigatewayGatewayInput{
            APIConfig: sdk.String("debitis"),
            DisplayName: sdk.String("a"),
            Labels: map[string]string{
                "in": "in",
                "illum": "maiores",
                "rerum": "dicta",
            },
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        Fields: sdk.String("ea"),
        Key: sdk.String("aliquid"),
        Name: "Tomas Friesen",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UpdateMask: sdk.String("quidem"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("nam"),
    }, operations.ApigatewayProjectsLocationsGatewaysPatchSecurity{
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
                                    "amet",
                                    "deserunt",
                                    "nisi",
                                    "vel",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "molestiae",
                                    "perferendis",
                                    "nihil",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "id",
                                    "labore",
                                    "labore",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("natus"),
                    },
                    shared.ApigatewayAuditConfig{
                        AuditLogConfigs: []shared.ApigatewayAuditLogConfig{
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "vero",
                                    "aspernatur",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "et",
                                    "excepturi",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "quos",
                                    "sint",
                                    "accusantium",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("reiciendis"),
                    },
                    shared.ApigatewayAuditConfig{
                        AuditLogConfigs: []shared.ApigatewayAuditLogConfig{
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "eum",
                                    "dolor",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "nemo",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "doloribus",
                                    "debitis",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("maxime"),
                    },
                },
                Bindings: []shared.ApigatewayBinding{
                    shared.ApigatewayBinding{
                        Condition: &shared.ApigatewayExpr{
                            Description: sdk.String("facilis"),
                            Expression: sdk.String("in"),
                            Location: sdk.String("architecto"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "ullam",
                            "expedita",
                            "nihil",
                            "repellat",
                        },
                        Role: sdk.String("quibusdam"),
                    },
                    shared.ApigatewayBinding{
                        Condition: &shared.ApigatewayExpr{
                            Description: sdk.String("sed"),
                            Expression: sdk.String("saepe"),
                            Location: sdk.String("pariatur"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "praesentium",
                        },
                        Role: sdk.String("natus"),
                    },
                    shared.ApigatewayBinding{
                        Condition: &shared.ApigatewayExpr{
                            Description: sdk.String("magni"),
                            Expression: sdk.String("sunt"),
                            Location: sdk.String("quo"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "maxime",
                            "ea",
                            "excepturi",
                            "odit",
                        },
                        Role: sdk.String("ea"),
                    },
                },
                Etag: sdk.String("accusantium"),
                Version: sdk.Int(69167),
            },
            UpdateMask: sdk.String("maiores"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("autem"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        Resource: "nemo",
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("perferendis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApigatewayTestIamPermissionsRequest: &shared.ApigatewayTestIamPermissionsRequest{
            Permissions: []string{
                "aut",
            },
        },
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("libero"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        Resource: "totam",
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("eaque"),
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
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("dolores"),
        Filter: sdk.String("minus"),
        Key: sdk.String("quam"),
        Name: "Eula Hegmann",
        OauthToken: sdk.String("omnis"),
        PageSize: sdk.Int64(704415),
        PageToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("consequuntur"),
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
            "eaque": "occaecati",
            "rerum": "adipisci",
            "asperiores": "earum",
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("pariatur"),
        Name: "Loren Renner",
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolorem"),
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
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("cum"),
        Name: "Marian Wisozk",
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("ipsa"),
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
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("voluptatibus"),
        Name: "Faye Daugherty PhD",
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("iusto"),
        View: operations.ApigatewayProjectsLocationsOperationsGetViewEnumBasic.ToPointer(),
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
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("distinctio"),
        Filter: sdk.String("asperiores"),
        Key: sdk.String("nihil"),
        Name: "Tamara Ondricka",
        OauthToken: sdk.String("aspernatur"),
        PageSize: sdk.Int64(20651),
        PageToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("ad"),
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
