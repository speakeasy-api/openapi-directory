# Debugger

### Available Operations

* [ClouddebuggerDebuggerDebuggeesBreakpointsDelete](#clouddebuggerdebuggerdebuggeesbreakpointsdelete) - Deletes the breakpoint from the debuggee.
* [ClouddebuggerDebuggerDebuggeesBreakpointsGet](#clouddebuggerdebuggerdebuggeesbreakpointsget) - Gets breakpoint information.
* [ClouddebuggerDebuggerDebuggeesBreakpointsList](#clouddebuggerdebuggerdebuggeesbreakpointslist) - Lists all breakpoints for the debuggee.
* [ClouddebuggerDebuggerDebuggeesBreakpointsSet](#clouddebuggerdebuggerdebuggeesbreakpointsset) - Sets the breakpoint to the debuggee.
* [ClouddebuggerDebuggerDebuggeesList](#clouddebuggerdebuggerdebuggeeslist) - Lists all the debuggees that the user has access to.

## ClouddebuggerDebuggerDebuggeesBreakpointsDelete

Deletes the breakpoint from the debuggee.

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
    res, err := s.Debugger.ClouddebuggerDebuggerDebuggeesBreakpointsDelete(ctx, operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BreakpointID: "quas",
        Callback: sdk.String("itaque"),
        ClientVersion: sdk.String("consequatur"),
        DebuggeeID: "est",
        Fields: sdk.String("repellendus"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity{
        Option1: &operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1{
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

## ClouddebuggerDebuggerDebuggeesBreakpointsGet

Gets breakpoint information.

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
    res, err := s.Debugger.ClouddebuggerDebuggerDebuggeesBreakpointsGet(ctx, operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BreakpointID: "odio",
        Callback: sdk.String("occaecati"),
        ClientVersion: sdk.String("voluptatibus"),
        DebuggeeID: "quisquam",
        Fields: sdk.String("vero"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity{
        Option1: &operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBreakpointResponse != nil {
        // handle response
    }
}
```

## ClouddebuggerDebuggerDebuggeesBreakpointsList

Lists all breakpoints for the debuggee.

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
    res, err := s.Debugger.ClouddebuggerDebuggerDebuggeesBreakpointsList(ctx, operations.ClouddebuggerDebuggerDebuggeesBreakpointsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vero"),
        ActionValue: operations.ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnumLog.ToPointer(),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        ClientVersion: sdk.String("distinctio"),
        DebuggeeID: "quod",
        Fields: sdk.String("odio"),
        IncludeAllUsers: sdk.Bool(false),
        IncludeInactive: sdk.Bool(false),
        Key: sdk.String("similique"),
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        StripResults: sdk.Bool(false),
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("dolore"),
        WaitToken: sdk.String("quibusdam"),
    }, operations.ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity{
        Option1: &operations.ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBreakpointsResponse != nil {
        // handle response
    }
}
```

## ClouddebuggerDebuggerDebuggeesBreakpointsSet

Sets the breakpoint to the debuggee.

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
    res, err := s.Debugger.ClouddebuggerDebuggerDebuggeesBreakpointsSet(ctx, operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Breakpoint: &shared.Breakpoint{
            Action: shared.BreakpointActionEnumCapture.ToPointer(),
            CanaryExpireTime: sdk.String("natus"),
            Condition: sdk.String("impedit"),
            CreateTime: sdk.String("aut"),
            EvaluatedExpressions: []shared.Variable{
                shared.Variable{
                    Members: []shared.Variable{
                        shared.Variable{},
                        shared.Variable{},
                    },
                    Name: sdk.String("Louis Sauer"),
                    Status: &shared.StatusMessage{
                        Description: &shared.FormatMessage{
                            Format: sdk.String("iusto"),
                            Parameters: []string{
                                "ducimus",
                                "alias",
                                "officia",
                                "tempora",
                            },
                        },
                        IsError: sdk.Bool(false),
                        RefersTo: shared.StatusMessageRefersToEnumBreakpointCondition.ToPointer(),
                    },
                    Type: sdk.String("ea"),
                    Value: sdk.String("aspernatur"),
                    VarTableIndex: sdk.Int(428224),
                },
                shared.Variable{
                    Members: []shared.Variable{
                        shared.Variable{},
                        shared.Variable{},
                        shared.Variable{},
                        shared.Variable{},
                    },
                    Name: sdk.String("Paula Jacobs I"),
                    Status: &shared.StatusMessage{
                        Description: &shared.FormatMessage{
                            Format: sdk.String("maiores"),
                            Parameters: []string{
                                "ex",
                            },
                        },
                        IsError: sdk.Bool(false),
                        RefersTo: shared.StatusMessageRefersToEnumVariableName.ToPointer(),
                    },
                    Type: sdk.String("excepturi"),
                    Value: sdk.String("voluptatibus"),
                    VarTableIndex: sdk.Int(343605),
                },
                shared.Variable{
                    Members: []shared.Variable{
                        shared.Variable{},
                        shared.Variable{},
                        shared.Variable{},
                        shared.Variable{},
                    },
                    Name: sdk.String("Elbert Jenkins"),
                    Status: &shared.StatusMessage{
                        Description: &shared.FormatMessage{
                            Format: sdk.String("veniam"),
                            Parameters: []string{
                                "inventore",
                                "magnam",
                            },
                        },
                        IsError: sdk.Bool(false),
                        RefersTo: shared.StatusMessageRefersToEnumBreakpointExpression.ToPointer(),
                    },
                    Type: sdk.String("quo"),
                    Value: sdk.String("consectetur"),
                    VarTableIndex: sdk.Int(926213),
                },
                shared.Variable{
                    Members: []shared.Variable{
                        shared.Variable{},
                    },
                    Name: sdk.String("Shirley Wilderman Jr."),
                    Status: &shared.StatusMessage{
                        Description: &shared.FormatMessage{
                            Format: sdk.String("deleniti"),
                            Parameters: []string{
                                "aliquam",
                                "fugit",
                                "accusamus",
                                "inventore",
                            },
                        },
                        IsError: sdk.Bool(false),
                        RefersTo: shared.StatusMessageRefersToEnumBreakpointCondition.ToPointer(),
                    },
                    Type: sdk.String("et"),
                    Value: sdk.String("dolorum"),
                    VarTableIndex: sdk.Int(672048),
                },
            },
            Expressions: []string{
                "velit",
                "eum",
                "autem",
                "nobis",
            },
            FinalTime: sdk.String("quas"),
            ID: sdk.String("dd6b1442-9074-4747-b8a7-bd466d28c10a"),
            IsFinalState: sdk.Bool(false),
            Labels: map[string]string{
                "neque": "quo",
                "illum": "quo",
                "fuga": "eius",
            },
            Location: &shared.SourceLocation{
                Column: sdk.Int(178367),
                Line: sdk.Int(373813),
                Path: sdk.String("ab"),
            },
            LogLevel: shared.BreakpointLogLevelEnumWarning.ToPointer(),
            LogMessageFormat: sdk.String("consequatur"),
            StackFrames: []shared.StackFrame{
                shared.StackFrame{
                    Arguments: []shared.Variable{
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Emily Satterfield"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("aperiam"),
                                    Parameters: []string{
                                        "quod",
                                        "dignissimos",
                                        "inventore",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumBreakpointExpression.ToPointer(),
                            },
                            Type: sdk.String("totam"),
                            Value: sdk.String("accusamus"),
                            VarTableIndex: sdk.Int(306810),
                        },
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Leslie Williamson"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("molestiae"),
                                    Parameters: []string{
                                        "porro",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumBreakpointExpression.ToPointer(),
                            },
                            Type: sdk.String("quas"),
                            Value: sdk.String("praesentium"),
                            VarTableIndex: sdk.Int(159867),
                        },
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Lee O'Conner"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("explicabo"),
                                    Parameters: []string{
                                        "nisi",
                                        "fugit",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumVariableValue.ToPointer(),
                            },
                            Type: sdk.String("consequuntur"),
                            Value: sdk.String("ratione"),
                            VarTableIndex: sdk.Int(129412),
                        },
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Ivan Bosco"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("accusamus"),
                                    Parameters: []string{
                                        "esse",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumVariableName.ToPointer(),
                            },
                            Type: sdk.String("nam"),
                            Value: sdk.String("vero"),
                            VarTableIndex: sdk.Int(399025),
                        },
                    },
                    Function: sdk.String("quasi"),
                    Locals: []shared.Variable{
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Javier Price"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("distinctio"),
                                    Parameters: []string{
                                        "sit",
                                        "culpa",
                                        "tempore",
                                        "adipisci",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumVariableName.ToPointer(),
                            },
                            Type: sdk.String("consequuntur"),
                            Value: sdk.String("consequatur"),
                            VarTableIndex: sdk.Int(796392),
                        },
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Glenn Koch"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("a"),
                                    Parameters: []string{
                                        "quas",
                                        "esse",
                                        "quasi",
                                        "a",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumBreakpointAge.ToPointer(),
                            },
                            Type: sdk.String("sint"),
                            Value: sdk.String("pariatur"),
                            VarTableIndex: sdk.Int(820767),
                        },
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                            },
                            Name: sdk.String("Mr. Marlon Schultz V"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("culpa"),
                                    Parameters: []string{
                                        "tenetur",
                                        "quae",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumVariableValue.ToPointer(),
                            },
                            Type: sdk.String("vel"),
                            Value: sdk.String("in"),
                            VarTableIndex: sdk.Int(258684),
                        },
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Gerardo Bartoletti"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("dicta"),
                                    Parameters: []string{
                                        "reprehenderit",
                                        "ullam",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumBreakpointExpression.ToPointer(),
                            },
                            Type: sdk.String("aut"),
                            Value: sdk.String("voluptatum"),
                            VarTableIndex: sdk.Int(185232),
                        },
                    },
                    Location: &shared.SourceLocation{
                        Column: sdk.Int(845358),
                        Line: sdk.Int(401259),
                        Path: sdk.String("deleniti"),
                    },
                },
                shared.StackFrame{
                    Arguments: []shared.Variable{
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Dr. Belinda West III"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("ipsa"),
                                    Parameters: []string{
                                        "veritatis",
                                        "consectetur",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumBreakpointSourceLocation.ToPointer(),
                            },
                            Type: sdk.String("iste"),
                            Value: sdk.String("temporibus"),
                            VarTableIndex: sdk.Int(33074),
                        },
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Marsha Keebler IV"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("non"),
                                    Parameters: []string{
                                        "dolor",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumBreakpointAge.ToPointer(),
                            },
                            Type: sdk.String("numquam"),
                            Value: sdk.String("impedit"),
                            VarTableIndex: sdk.Int(131055),
                        },
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Marian Buckridge"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("velit"),
                                    Parameters: []string{
                                        "voluptas",
                                        "asperiores",
                                        "aperiam",
                                        "ea",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumBreakpointCondition.ToPointer(),
                            },
                            Type: sdk.String("consequuntur"),
                            Value: sdk.String("repellendus"),
                            VarTableIndex: sdk.Int(638762),
                        },
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Blanche Yundt II"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("porro"),
                                    Parameters: []string{
                                        "labore",
                                        "ab",
                                        "adipisci",
                                        "fuga",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumBreakpointCanaryFailed.ToPointer(),
                            },
                            Type: sdk.String("suscipit"),
                            Value: sdk.String("velit"),
                            VarTableIndex: sdk.Int(633931),
                        },
                    },
                    Function: sdk.String("est"),
                    Locals: []shared.Variable{
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Chester Kuphal"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("labore"),
                                    Parameters: []string{
                                        "facilis",
                                        "cum",
                                        "commodi",
                                        "in",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumBreakpointCondition.ToPointer(),
                            },
                            Type: sdk.String("reiciendis"),
                            Value: sdk.String("assumenda"),
                            VarTableIndex: sdk.Int(363161),
                        },
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Kimberly Ritchie"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("exercitationem"),
                                    Parameters: []string{
                                        "facere",
                                        "numquam",
                                        "doloribus",
                                        "suscipit",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumVariableValue.ToPointer(),
                            },
                            Type: sdk.String("quidem"),
                            Value: sdk.String("saepe"),
                            VarTableIndex: sdk.Int(897071),
                        },
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                                shared.Variable{},
                            },
                            Name: sdk.String("Ollie Flatley"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("beatae"),
                                    Parameters: []string{
                                        "a",
                                        "debitis",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumBreakpointSourceLocation.ToPointer(),
                            },
                            Type: sdk.String("corporis"),
                            Value: sdk.String("harum"),
                            VarTableIndex: sdk.Int(385237),
                        },
                        shared.Variable{
                            Members: []shared.Variable{
                                shared.Variable{},
                            },
                            Name: sdk.String("Randolph Bruen"),
                            Status: &shared.StatusMessage{
                                Description: &shared.FormatMessage{
                                    Format: sdk.String("tempora"),
                                    Parameters: []string{
                                        "voluptas",
                                    },
                                },
                                IsError: sdk.Bool(false),
                                RefersTo: shared.StatusMessageRefersToEnumBreakpointCondition.ToPointer(),
                            },
                            Type: sdk.String("voluptas"),
                            Value: sdk.String("minima"),
                            VarTableIndex: sdk.Int(748789),
                        },
                    },
                    Location: &shared.SourceLocation{
                        Column: sdk.Int(680116),
                        Line: sdk.Int(237807),
                        Path: sdk.String("minus"),
                    },
                },
            },
            State: shared.BreakpointStateEnumStateUnspecified.ToPointer(),
            Status: &shared.StatusMessage{
                Description: &shared.FormatMessage{
                    Format: sdk.String("blanditiis"),
                    Parameters: []string{
                        "dolore",
                        "aliquam",
                    },
                },
                IsError: sdk.Bool(false),
                RefersTo: shared.StatusMessageRefersToEnumVariableValue.ToPointer(),
            },
            UserEmail: sdk.String("temporibus"),
            VariableTable: []shared.Variable{
                shared.Variable{
                    Members: []shared.Variable{
                        shared.Variable{},
                    },
                    Name: sdk.String("Guy Luettgen"),
                    Status: &shared.StatusMessage{
                        Description: &shared.FormatMessage{
                            Format: sdk.String("culpa"),
                            Parameters: []string{
                                "pariatur",
                                "totam",
                                "hic",
                            },
                        },
                        IsError: sdk.Bool(false),
                        RefersTo: shared.StatusMessageRefersToEnumBreakpointCondition.ToPointer(),
                    },
                    Type: sdk.String("nobis"),
                    Value: sdk.String("sit"),
                    VarTableIndex: sdk.Int(699575),
                },
                shared.Variable{
                    Members: []shared.Variable{
                        shared.Variable{},
                    },
                    Name: sdk.String("Benjamin Ziemann"),
                    Status: &shared.StatusMessage{
                        Description: &shared.FormatMessage{
                            Format: sdk.String("expedita"),
                            Parameters: []string{
                                "iste",
                            },
                        },
                        IsError: sdk.Bool(false),
                        RefersTo: shared.StatusMessageRefersToEnumBreakpointCondition.ToPointer(),
                    },
                    Type: sdk.String("laborum"),
                    Value: sdk.String("sed"),
                    VarTableIndex: sdk.Int(447516),
                },
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        CanaryOption: operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnumCanaryOptionTryEnable.ToPointer(),
        ClientVersion: sdk.String("unde"),
        DebuggeeID: "architecto",
        Fields: sdk.String("suscipit"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity{
        Option1: &operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetBreakpointResponse != nil {
        // handle response
    }
}
```

## ClouddebuggerDebuggerDebuggeesList

Lists all the debuggees that the user has access to.

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
    res, err := s.Debugger.ClouddebuggerDebuggerDebuggeesList(ctx, operations.ClouddebuggerDebuggerDebuggeesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sed"),
        ClientVersion: sdk.String("provident"),
        Fields: sdk.String("eius"),
        IncludeInactive: sdk.Bool(false),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        Project: sdk.String("ea"),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.ClouddebuggerDebuggerDebuggeesListSecurity{
        Option1: &operations.ClouddebuggerDebuggerDebuggeesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDebuggeesResponse != nil {
        // handle response
    }
}
```
