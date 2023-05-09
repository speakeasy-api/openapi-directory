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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApigatewayAPIConfigInput: &shared.ApigatewayAPIConfigInput{
            DisplayName: sdk.String("laboriosam"),
            GatewayServiceAccount: sdk.String("hic"),
            GrpcServices: []shared.ApigatewayAPIConfigGrpcServiceDefinition{
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("fuga"),
                        Path: sdk.String("in"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("iste"),
                            Path: sdk.String("iure"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("saepe"),
                            Path: sdk.String("quidem"),
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("architecto"),
                        Path: sdk.String("ipsa"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("est"),
                            Path: sdk.String("mollitia"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("laborum"),
                            Path: sdk.String("dolores"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("dolorem"),
                            Path: sdk.String("corporis"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("explicabo"),
                            Path: sdk.String("nobis"),
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("enim"),
                        Path: sdk.String("omnis"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("minima"),
                            Path: sdk.String("excepturi"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("accusantium"),
                            Path: sdk.String("iure"),
                        },
                    },
                },
                shared.ApigatewayAPIConfigGrpcServiceDefinition{
                    FileDescriptorSet: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("culpa"),
                        Path: sdk.String("doloribus"),
                    },
                    Source: []shared.ApigatewayAPIConfigFile{
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("architecto"),
                            Path: sdk.String("mollitia"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("dolorem"),
                            Path: sdk.String("culpa"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("consequuntur"),
                            Path: sdk.String("repellat"),
                        },
                        shared.ApigatewayAPIConfigFile{
                            Contents: sdk.String("mollitia"),
                            Path: sdk.String("occaecati"),
                        },
                    },
                },
            },
            Labels: map[string]string{
                "commodi": "quam",
                "molestiae": "velit",
            },
            ManagedServiceConfigs: []shared.ApigatewayAPIConfigFile{
                shared.ApigatewayAPIConfigFile{
                    Contents: sdk.String("quia"),
                    Path: sdk.String("quis"),
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: sdk.String("vitae"),
                    Path: sdk.String("laborum"),
                },
                shared.ApigatewayAPIConfigFile{
                    Contents: sdk.String("animi"),
                    Path: sdk.String("enim"),
                },
            },
            OpenapiDocuments: []shared.ApigatewayAPIConfigOpenAPIDocument{
                shared.ApigatewayAPIConfigOpenAPIDocument{
                    Document: &shared.ApigatewayAPIConfigFile{
                        Contents: sdk.String("quo"),
                        Path: sdk.String("sequi"),
                    },
                },
            },
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        APIConfigID: sdk.String("id"),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("aut"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("error"),
        Parent: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("reiciendis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("voluptatibus"),
        Filter: sdk.String("ipsa"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("voluptate"),
        OrderBy: sdk.String("cum"),
        PageSize: sdk.Int64(19987),
        PageToken: sdk.String("doloremque"),
        Parent: "reprehenderit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("dicta"),
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
            DisplayName: sdk.String("dolore"),
            Labels: map[string]string{
                "dicta": "harum",
                "enim": "accusamus",
            },
            ManagedService: sdk.String("commodi"),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        APIID: sdk.String("ipsum"),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("pariatur"),
        Parent: "modi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("voluptates"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("itaque"),
        Filter: sdk.String("incidunt"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("consequatur"),
        OrderBy: sdk.String("est"),
        PageSize: sdk.Int64(842342),
        PageToken: sdk.String("explicabo"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("labore"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ApigatewayGatewayInput: &shared.ApigatewayGatewayInput{
            APIConfig: sdk.String("qui"),
            DisplayName: sdk.String("aliquid"),
            Labels: map[string]string{
                "quos": "perferendis",
                "magni": "assumenda",
                "ipsam": "alias",
            },
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("tempora"),
        GatewayID: sdk.String("facilis"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("labore"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("eligendi"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("sint"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("dolor"),
        OptionsRequestedPolicyVersion: sdk.Int64(891555),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        Resource: "dolorum",
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("in"),
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
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("magnam"),
        Filter: sdk.String("cumque"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("ea"),
        OrderBy: sdk.String("aliquid"),
        PageSize: sdk.Int64(675439),
        PageToken: sdk.String("accusamus"),
        Parent: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApigatewayGatewayInput: &shared.ApigatewayGatewayInput{
            APIConfig: sdk.String("quidem"),
            DisplayName: sdk.String("provident"),
            Labels: map[string]string{
                "id": "blanditiis",
                "deleniti": "sapiente",
                "amet": "deserunt",
            },
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("molestiae"),
        Name: "Marcia Gutkowski",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UpdateMask: sdk.String("suscipit"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("nobis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ApigatewaySetIamPolicyRequest: &shared.ApigatewaySetIamPolicyRequest{
            Policy: &shared.ApigatewayPolicy{
                AuditConfigs: []shared.ApigatewayAuditConfig{
                    shared.ApigatewayAuditConfig{
                        AuditLogConfigs: []shared.ApigatewayAuditLogConfig{
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "magnam",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("excepturi"),
                    },
                    shared.ApigatewayAuditConfig{
                        AuditLogConfigs: []shared.ApigatewayAuditLogConfig{
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "quos",
                                    "sint",
                                    "accusantium",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "mollitia",
                                    "ad",
                                    "eum",
                                    "dolor",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("odit"),
                    },
                    shared.ApigatewayAuditConfig{
                        AuditLogConfigs: []shared.ApigatewayAuditLogConfig{
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "iure",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "eius",
                                    "maxime",
                                    "deleniti",
                                    "facilis",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("architecto"),
                    },
                    shared.ApigatewayAuditConfig{
                        AuditLogConfigs: []shared.ApigatewayAuditLogConfig{
                            shared.ApigatewayAuditLogConfig{
                                ExemptedMembers: []string{
                                    "ullam",
                                    "expedita",
                                    "nihil",
                                    "repellat",
                                },
                                LogType: shared.ApigatewayAuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("sed"),
                    },
                },
                Bindings: []shared.ApigatewayBinding{
                    shared.ApigatewayBinding{
                        Condition: &shared.ApigatewayExpr{
                            Description: sdk.String("pariatur"),
                            Expression: sdk.String("accusantium"),
                            Location: sdk.String("consequuntur"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "magni",
                            "sunt",
                            "quo",
                        },
                        Role: sdk.String("illum"),
                    },
                    shared.ApigatewayBinding{
                        Condition: &shared.ApigatewayExpr{
                            Description: sdk.String("pariatur"),
                            Expression: sdk.String("maxime"),
                            Location: sdk.String("ea"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "ea",
                        },
                        Role: sdk.String("accusantium"),
                    },
                    shared.ApigatewayBinding{
                        Condition: &shared.ApigatewayExpr{
                            Description: sdk.String("ab"),
                            Expression: sdk.String("maiores"),
                            Location: sdk.String("quidem"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "autem",
                            "nam",
                        },
                        Role: sdk.String("eaque"),
                    },
                    shared.ApigatewayBinding{
                        Condition: &shared.ApigatewayExpr{
                            Description: sdk.String("pariatur"),
                            Expression: sdk.String("nemo"),
                            Location: sdk.String("voluptatibus"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "amet",
                            "aut",
                            "cumque",
                            "corporis",
                        },
                        Role: sdk.String("hic"),
                    },
                },
                Etag: sdk.String("libero"),
                Version: sdk.Int(749999),
            },
            UpdateMask: sdk.String("dolores"),
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        Resource: "perferendis",
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("minus"),
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
                "vero",
            },
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        Resource: "porro",
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("blanditiis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("adipisci"),
        Filter: sdk.String("asperiores"),
        Key: sdk.String("earum"),
        Name: "Sheryl Parisian",
        OauthToken: sdk.String("provident"),
        PageSize: sdk.Int64(750844),
        PageToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("quos"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "dolorem": "dolor",
        },
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
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("distinctio"),
        Name: "Jessie Emmerich",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
        View: operations.ApigatewayProjectsLocationsOperationsGetViewEnumConfigViewUnspecified.ToPointer(),
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
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("suscipit"),
        Filter: sdk.String("deserunt"),
        Key: sdk.String("provident"),
        Name: "Kari Leannon PhD",
        OauthToken: sdk.String("quaerat"),
        PageSize: sdk.Int64(273542),
        PageToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("qui"),
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
