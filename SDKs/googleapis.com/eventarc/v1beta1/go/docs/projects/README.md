# Projects

### Available Operations

* [EventarcProjectsLocationsList](#eventarcprojectslocationslist) - Lists information about the supported locations for this service.
* [EventarcProjectsLocationsOperationsCancel](#eventarcprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [EventarcProjectsLocationsOperationsList](#eventarcprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [EventarcProjectsLocationsTriggersCreate](#eventarcprojectslocationstriggerscreate) - Create a new trigger in a particular project and location.
* [EventarcProjectsLocationsTriggersDelete](#eventarcprojectslocationstriggersdelete) - Delete a single trigger.
* [EventarcProjectsLocationsTriggersGet](#eventarcprojectslocationstriggersget) - Get a single trigger.
* [EventarcProjectsLocationsTriggersGetIamPolicy](#eventarcprojectslocationstriggersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [EventarcProjectsLocationsTriggersList](#eventarcprojectslocationstriggerslist) - List triggers.
* [EventarcProjectsLocationsTriggersPatch](#eventarcprojectslocationstriggerspatch) - Update a single trigger.
* [EventarcProjectsLocationsTriggersSetIamPolicy](#eventarcprojectslocationstriggerssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [EventarcProjectsLocationsTriggersTestIamPermissions](#eventarcprojectslocationstriggerstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## EventarcProjectsLocationsList

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
    res, err := s.Projects.EventarcProjectsLocationsList(ctx, operations.EventarcProjectsLocationsListRequest{
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
    }, operations.EventarcProjectsLocationsListSecurity{
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

## EventarcProjectsLocationsOperationsCancel

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
    res, err := s.Projects.EventarcProjectsLocationsOperationsCancel(ctx, operations.EventarcProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "maiores": "molestiae",
            "quod": "quod",
            "esse": "totam",
            "porro": "dolorum",
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("fugit"),
        Name: "Irvin Rosenbaum III",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.EventarcProjectsLocationsOperationsCancelSecurity{
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

## EventarcProjectsLocationsOperationsList

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
    res, err := s.Projects.EventarcProjectsLocationsOperationsList(ctx, operations.EventarcProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("aspernatur"),
        Filter: sdk.String("perferendis"),
        Key: sdk.String("ad"),
        Name: "Louis Moore",
        OauthToken: sdk.String("laboriosam"),
        PageSize: sdk.Int64(943749),
        PageToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.EventarcProjectsLocationsOperationsListSecurity{
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

## EventarcProjectsLocationsTriggersCreate

Create a new trigger in a particular project and location.

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersCreate(ctx, operations.EventarcProjectsLocationsTriggersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TriggerInput: &shared.TriggerInput{
            Destination: &shared.Destination{
                CloudRunService: &shared.CloudRunService{
                    Path: sdk.String("iure"),
                    Region: sdk.String("saepe"),
                    Service: sdk.String("quidem"),
                },
            },
            Labels: map[string]string{
                "ipsa": "reiciendis",
            },
            MatchingCriteria: []shared.MatchingCriteria{
                shared.MatchingCriteria{
                    Attribute: sdk.String("mollitia"),
                    Value: sdk.String("laborum"),
                },
                shared.MatchingCriteria{
                    Attribute: sdk.String("dolores"),
                    Value: sdk.String("dolorem"),
                },
                shared.MatchingCriteria{
                    Attribute: sdk.String("corporis"),
                    Value: sdk.String("explicabo"),
                },
            },
            Name: sdk.String("Ronnie Mohr"),
            ServiceAccount: sdk.String("excepturi"),
            Transport: &shared.TransportInput{
                Pubsub: &shared.PubsubInput{
                    Topic: sdk.String("accusantium"),
                },
            },
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("mollitia"),
        Parent: "dolorem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        TriggerID: sdk.String("consequuntur"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
        ValidateOnly: sdk.Bool(false),
    }, operations.EventarcProjectsLocationsTriggersCreateSecurity{
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

## EventarcProjectsLocationsTriggersDelete

Delete a single trigger.

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersDelete(ctx, operations.EventarcProjectsLocationsTriggersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Etag: sdk.String("molestiae"),
        Fields: sdk.String("velit"),
        Key: sdk.String("error"),
        Name: "Beatrice Brown",
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("sequi"),
        ValidateOnly: sdk.Bool(false),
    }, operations.EventarcProjectsLocationsTriggersDeleteSecurity{
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

## EventarcProjectsLocationsTriggersGet

Get a single trigger.

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersGet(ctx, operations.EventarcProjectsLocationsTriggersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("aut"),
        Key: sdk.String("quasi"),
        Name: "Dr. Jake Pacocha",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.EventarcProjectsLocationsTriggersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Trigger != nil {
        // handle response
    }
}
```

## EventarcProjectsLocationsTriggersGetIamPolicy

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersGetIamPolicy(ctx, operations.EventarcProjectsLocationsTriggersGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("reprehenderit"),
        OptionsRequestedPolicyVersion: sdk.Int64(282807),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        Resource: "dicta",
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.EventarcProjectsLocationsTriggersGetIamPolicySecurity{
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

## EventarcProjectsLocationsTriggersList

List triggers.

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersList(ctx, operations.EventarcProjectsLocationsTriggersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("repudiandae"),
        OrderBy: sdk.String("quae"),
        PageSize: sdk.Int64(216822),
        PageToken: sdk.String("quidem"),
        Parent: "molestias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("modi"),
    }, operations.EventarcProjectsLocationsTriggersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTriggersResponse != nil {
        // handle response
    }
}
```

## EventarcProjectsLocationsTriggersPatch

Update a single trigger.

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersPatch(ctx, operations.EventarcProjectsLocationsTriggersPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TriggerInput: &shared.TriggerInput{
            Destination: &shared.Destination{
                CloudRunService: &shared.CloudRunService{
                    Path: sdk.String("rem"),
                    Region: sdk.String("voluptates"),
                    Service: sdk.String("quasi"),
                },
            },
            Labels: map[string]string{
                "sint": "veritatis",
                "itaque": "incidunt",
                "enim": "consequatur",
                "est": "quibusdam",
            },
            MatchingCriteria: []shared.MatchingCriteria{
                shared.MatchingCriteria{
                    Attribute: sdk.String("deserunt"),
                    Value: sdk.String("distinctio"),
                },
            },
            Name: sdk.String("Francisco Gleason"),
            ServiceAccount: sdk.String("cupiditate"),
            Transport: &shared.TransportInput{
                Pubsub: &shared.PubsubInput{
                    Topic: sdk.String("quos"),
                },
            },
        },
        AccessToken: sdk.String("perferendis"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("alias"),
        Name: "Sonya Marks",
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UpdateMask: sdk.String("delectus"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("non"),
        ValidateOnly: sdk.Bool(false),
    }, operations.EventarcProjectsLocationsTriggersPatchSecurity{
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

## EventarcProjectsLocationsTriggersSetIamPolicy

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersSetIamPolicy(ctx, operations.EventarcProjectsLocationsTriggersSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "necessitatibus",
                                    "sint",
                                    "officia",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "a",
                                    "dolorum",
                                    "in",
                                    "in",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("maiores"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "magnam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ea",
                                    "aliquid",
                                    "laborum",
                                    "accusamus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "enim",
                                    "accusamus",
                                    "delectus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("provident"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "blanditiis",
                                    "deleniti",
                                    "sapiente",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nisi",
                                    "vel",
                                    "natus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "perferendis",
                                    "nihil",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("distinctio"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("labore"),
                            Expression: sdk.String("labore"),
                            Location: sdk.String("suscipit"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "eum",
                            "vero",
                            "aspernatur",
                        },
                        Role: sdk.String("architecto"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("magnam"),
                            Expression: sdk.String("et"),
                            Location: sdk.String("excepturi"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "quos",
                            "sint",
                            "accusantium",
                        },
                        Role: sdk.String("mollitia"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("reiciendis"),
                            Expression: sdk.String("mollitia"),
                            Location: sdk.String("ad"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "necessitatibus",
                        },
                        Role: sdk.String("odit"),
                    },
                },
                Etag: sdk.String("nemo"),
                Version: sdk.Int(97260),
            },
            UpdateMask: sdk.String("iure"),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        Resource: "architecto",
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.EventarcProjectsLocationsTriggersSetIamPolicySecurity{
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

## EventarcProjectsLocationsTriggersTestIamPermissions

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
    res, err := s.Projects.EventarcProjectsLocationsTriggersTestIamPermissions(ctx, operations.EventarcProjectsLocationsTriggersTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "nihil",
                "repellat",
                "quibusdam",
            },
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        Resource: "magni",
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("quo"),
    }, operations.EventarcProjectsLocationsTriggersTestIamPermissionsSecurity{
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
