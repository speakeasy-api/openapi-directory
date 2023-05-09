# Projects

### Available Operations

* [BigqueryconnectionProjectsLocationsConnectionsCreate](#bigqueryconnectionprojectslocationsconnectionscreate) - Creates a new connection.
* [BigqueryconnectionProjectsLocationsConnectionsDelete](#bigqueryconnectionprojectslocationsconnectionsdelete) - Deletes connection and associated credential.
* [BigqueryconnectionProjectsLocationsConnectionsGet](#bigqueryconnectionprojectslocationsconnectionsget) - Returns specified connection.
* [BigqueryconnectionProjectsLocationsConnectionsGetIamPolicy](#bigqueryconnectionprojectslocationsconnectionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [BigqueryconnectionProjectsLocationsConnectionsList](#bigqueryconnectionprojectslocationsconnectionslist) - Returns a list of connections in the given project.
* [BigqueryconnectionProjectsLocationsConnectionsSetIamPolicy](#bigqueryconnectionprojectslocationsconnectionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [BigqueryconnectionProjectsLocationsConnectionsTestIamPermissions](#bigqueryconnectionprojectslocationsconnectionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [BigqueryconnectionProjectsLocationsConnectionsUpdateCredential](#bigqueryconnectionprojectslocationsconnectionsupdatecredential) - Sets the credential for the specified connection.

## BigqueryconnectionProjectsLocationsConnectionsCreate

Creates a new connection.

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
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsCreate(ctx, operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConnectionInput: &shared.ConnectionInput{
            CloudSQL: &shared.CloudSQLPropertiesInput{
                Credential: &shared.CloudSQLCredential{
                    Password: sdk.String("quis"),
                    Username: sdk.String("Ashlee36"),
                },
                Database: sdk.String("repellendus"),
                InstanceID: sdk.String("sapiente"),
                Type: shared.CloudSQLPropertiesTypeEnumMysql.ToPointer(),
            },
            Description: sdk.String("odit"),
            FriendlyName: sdk.String("at"),
            Name: sdk.String("Emilio Krajcik"),
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        ConnectionID: sdk.String("dolorum"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("officia"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("hic"),
    }, operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity{
        Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## BigqueryconnectionProjectsLocationsConnectionsDelete

Deletes connection and associated credential.

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
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsDelete(ctx, operations.BigqueryconnectionProjectsLocationsConnectionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("modi"),
        Name: "Krista Rippin",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ad"),
    }, operations.BigqueryconnectionProjectsLocationsConnectionsDeleteSecurity{
        Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## BigqueryconnectionProjectsLocationsConnectionsGet

Returns specified connection.

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
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsGet(ctx, operations.BigqueryconnectionProjectsLocationsConnectionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        Name: "Elias Parker",
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.BigqueryconnectionProjectsLocationsConnectionsGetSecurity{
        Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## BigqueryconnectionProjectsLocationsConnectionsGetIamPolicy

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
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicy(ctx, operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(60225),
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        Resource: "explicabo",
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("enim"),
    }, operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity{
        Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## BigqueryconnectionProjectsLocationsConnectionsList

Returns a list of connections in the given project.

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
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsList(ctx, operations.BigqueryconnectionProjectsLocationsConnectionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("iure"),
        MaxResults: sdk.Int64(634274),
        OauthToken: sdk.String("doloribus"),
        PageToken: sdk.String("sapiente"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.BigqueryconnectionProjectsLocationsConnectionsListSecurity{
        Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectionsResponse != nil {
        // handle response
    }
}
```

## BigqueryconnectionProjectsLocationsConnectionsSetIamPolicy

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
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicy(ctx, operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "numquam",
                                    "commodi",
                                    "quam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
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
                        },
                        Service: sdk.String("enim"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sequi",
                                    "tenetur",
                                    "ipsam",
                                    "id",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("aut"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "temporibus",
                                    "laborum",
                                    "quasi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("voluptatibus"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "praesentium",
                                    "voluptatibus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "voluptate",
                                    "cum",
                                    "perferendis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ut",
                                    "maiores",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolore",
                                    "iusto",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("harum"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("accusamus"),
                            Expression: sdk.String("commodi"),
                            Location: sdk.String("repudiandae"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "quidem",
                        },
                        Role: sdk.String("molestias"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("excepturi"),
                            Expression: sdk.String("pariatur"),
                            Location: sdk.String("modi"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "voluptates",
                            "quasi",
                            "repudiandae",
                        },
                        Role: sdk.String("sint"),
                    },
                },
                Etag: sdk.String("veritatis"),
                Version: sdk.Int(929297),
            },
            UpdateMask: sdk.String("incidunt"),
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        Resource: "quibusdam",
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("modi"),
    }, operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity{
        Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## BigqueryconnectionProjectsLocationsConnectionsTestIamPermissions

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
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissions(ctx, operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "cupiditate",
                "quos",
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        Resource: "excepturi",
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurity{
        Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## BigqueryconnectionProjectsLocationsConnectionsUpdateCredential

Sets the credential for the specified connection.

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
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsUpdateCredential(ctx, operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectionCredential: &shared.ConnectionCredential{
            CloudSQL: &shared.CloudSQLCredential{
                Password: sdk.String("labore"),
                Username: sdk.String("Vilma75"),
            },
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("sint"),
        Name: "Curtis Toy",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity{
        Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
