# Projects

### Available Operations

* [RuntimeconfigProjectsConfigsCreate](#runtimeconfigprojectsconfigscreate) - Creates a new RuntimeConfig resource. The configuration name must be unique within project.
* [RuntimeconfigProjectsConfigsGetIamPolicy](#runtimeconfigprojectsconfigsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [RuntimeconfigProjectsConfigsList](#runtimeconfigprojectsconfigslist) - Lists all the RuntimeConfig resources within project.
* [RuntimeconfigProjectsConfigsSetIamPolicy](#runtimeconfigprojectsconfigssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [RuntimeconfigProjectsConfigsVariablesCreate](#runtimeconfigprojectsconfigsvariablescreate) - Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix. To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.
* [RuntimeconfigProjectsConfigsVariablesList](#runtimeconfigprojectsconfigsvariableslist) - Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.
* [RuntimeconfigProjectsConfigsVariablesUpdate](#runtimeconfigprojectsconfigsvariablesupdate) - Updates an existing variable with a new value.
* [RuntimeconfigProjectsConfigsVariablesWatch](#runtimeconfigprojectsconfigsvariableswatch) - Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out. If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`. If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.
* [RuntimeconfigProjectsConfigsWaitersCreate](#runtimeconfigprojectsconfigswaiterscreate) - Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.
* [RuntimeconfigProjectsConfigsWaitersDelete](#runtimeconfigprojectsconfigswaitersdelete) - Deletes the waiter with the specified name.
* [RuntimeconfigProjectsConfigsWaitersGet](#runtimeconfigprojectsconfigswaitersget) - Gets information about a single waiter.
* [RuntimeconfigProjectsConfigsWaitersList](#runtimeconfigprojectsconfigswaiterslist) - List waiters within the given configuration.
* [RuntimeconfigProjectsConfigsWaitersTestIamPermissions](#runtimeconfigprojectsconfigswaiterstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## RuntimeconfigProjectsConfigsCreate

Creates a new RuntimeConfig resource. The configuration name must be unique within project.

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsCreate(ctx, operations.RuntimeconfigProjectsConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RuntimeConfig: &shared.RuntimeConfig{
            Description: sdk.String("molestiae"),
            Name: sdk.String("Irving Lehner"),
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("ab"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("veritatis"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        RequestID: sdk.String("ipsam"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.RuntimeconfigProjectsConfigsCreateSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RuntimeConfig != nil {
        // handle response
    }
}
```

## RuntimeconfigProjectsConfigsGetIamPolicy

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsGetIamPolicy(ctx, operations.RuntimeconfigProjectsConfigsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("quod"),
        OptionsRequestedPolicyVersion: sdk.Int64(800911),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        Resource: "totam",
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.RuntimeconfigProjectsConfigsGetIamPolicySecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1{
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

## RuntimeconfigProjectsConfigsList

Lists all the RuntimeConfig resources within project.

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsList(ctx, operations.RuntimeconfigProjectsConfigsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("hic"),
        PageSize: sdk.Int64(758616),
        PageToken: sdk.String("totam"),
        Parent: "beatae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("modi"),
    }, operations.RuntimeconfigProjectsConfigsListSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConfigsResponse != nil {
        // handle response
    }
}
```

## RuntimeconfigProjectsConfigsSetIamPolicy

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsSetIamPolicy(ctx, operations.RuntimeconfigProjectsConfigsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
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
                    shared.Binding{
                        Condition: &shared.Expr{
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
                    shared.Binding{
                        Condition: &shared.Expr{
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
                    shared.Binding{
                        Condition: &shared.Expr{
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
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("iure"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        Resource: "architecto",
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.RuntimeconfigProjectsConfigsSetIamPolicySecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1{
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

## RuntimeconfigProjectsConfigsVariablesCreate

Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix. To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsVariablesCreate(ctx, operations.RuntimeconfigProjectsConfigsVariablesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Variable: &shared.Variable{
            Name: sdk.String("Jaime O'Hara"),
            State: shared.VariableStateEnumUpdated.ToPointer(),
            Text: sdk.String("quam"),
            UpdateTime: sdk.String("molestiae"),
            Value: sdk.String("velit"),
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("animi"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        RequestID: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.RuntimeconfigProjectsConfigsVariablesCreateSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Variable != nil {
        // handle response
    }
}
```

## RuntimeconfigProjectsConfigsVariablesList

Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsVariablesList(ctx, operations.RuntimeconfigProjectsConfigsVariablesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("quasi"),
        Filter: sdk.String("error"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("laborum"),
        PageSize: sdk.Int64(96098),
        PageToken: sdk.String("reiciendis"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        ReturnValues: sdk.Bool(false),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.RuntimeconfigProjectsConfigsVariablesListSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsVariablesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVariablesResponse != nil {
        // handle response
    }
}
```

## RuntimeconfigProjectsConfigsVariablesUpdate

Updates an existing variable with a new value.

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsVariablesUpdate(ctx, operations.RuntimeconfigProjectsConfigsVariablesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Variable: &shared.Variable{
            Name: sdk.String("Geneva Klein Jr."),
            State: shared.VariableStateEnumUpdated.ToPointer(),
            Text: sdk.String("ut"),
            UpdateTime: sdk.String("maiores"),
            Value: sdk.String("dicta"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("harum"),
        Name: "Sophia Jerde I",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.RuntimeconfigProjectsConfigsVariablesUpdateSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Variable != nil {
        // handle response
    }
}
```

## RuntimeconfigProjectsConfigsVariablesWatch

Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out. If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`. If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsVariablesWatch(ctx, operations.RuntimeconfigProjectsConfigsVariablesWatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WatchVariableRequest: &shared.WatchVariableRequest{
            NewerThan: sdk.String("praesentium"),
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        Name: "Patti Gottlieb MD",
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.RuntimeconfigProjectsConfigsVariablesWatchSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Variable != nil {
        // handle response
    }
}
```

## RuntimeconfigProjectsConfigsWaitersCreate

Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsWaitersCreate(ctx, operations.RuntimeconfigProjectsConfigsWaitersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Waiter: &shared.Waiter{
            CreateTime: sdk.String("labore"),
            Done: sdk.Bool(false),
            Error: &shared.Status{
                Code: sdk.Int(264730),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "cupiditate": "quos",
                        "perferendis": "magni",
                    },
                },
                Message: sdk.String("assumenda"),
            },
            Failure: &shared.EndCondition{
                Cardinality: &shared.Cardinality{
                    Number: sdk.Int(369808),
                    Path: sdk.String("alias"),
                },
            },
            Name: sdk.String("Sonya Marks"),
            Success: &shared.EndCondition{
                Cardinality: &shared.Cardinality{
                    Number: sdk.Int(735194),
                    Path: sdk.String("labore"),
                },
            },
            Timeout: sdk.String("delectus"),
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("sint"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("provident"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        RequestID: sdk.String("officia"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.RuntimeconfigProjectsConfigsWaitersCreateSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## RuntimeconfigProjectsConfigsWaitersDelete

Deletes the waiter with the specified name.

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsWaitersDelete(ctx, operations.RuntimeconfigProjectsConfigsWaitersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("illum"),
        Key: sdk.String("maiores"),
        Name: "Keith Gulgowski",
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        Recursive: sdk.Bool(false),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.RuntimeconfigProjectsConfigsWaitersDeleteSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption1{
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

## RuntimeconfigProjectsConfigsWaitersGet

Gets information about a single waiter.

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsWaitersGet(ctx, operations.RuntimeconfigProjectsConfigsWaitersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
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
    }, operations.RuntimeconfigProjectsConfigsWaitersGetSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsWaitersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Waiter != nil {
        // handle response
    }
}
```

## RuntimeconfigProjectsConfigsWaitersList

List waiters within the given configuration.

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsWaitersList(ctx, operations.RuntimeconfigProjectsConfigsWaitersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("magnam"),
        PageSize: sdk.Int64(716075),
        PageToken: sdk.String("id"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("natus"),
    }, operations.RuntimeconfigProjectsConfigsWaitersListSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsWaitersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWaitersResponse != nil {
        // handle response
    }
}
```

## RuntimeconfigProjectsConfigsWaitersTestIamPermissions

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
    res, err := s.Projects.RuntimeconfigProjectsConfigsWaitersTestIamPermissions(ctx, operations.RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "vero",
                "aspernatur",
            },
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        Resource: "sint",
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurityOption1{
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
