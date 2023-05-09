# Controller

### Available Operations

* [ClouddebuggerControllerDebuggeesBreakpointsList](#clouddebuggercontrollerdebuggeesbreakpointslist) - Returns the list of all active breakpoints for the debuggee. The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics. This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.
* [ClouddebuggerControllerDebuggeesBreakpointsUpdate](#clouddebuggercontrollerdebuggeesbreakpointsupdate) - Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.
* [ClouddebuggerControllerDebuggeesRegister](#clouddebuggercontrollerdebuggeesregister) - Registers the debuggee with the controller service. All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method. This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.

## ClouddebuggerControllerDebuggeesBreakpointsList

Returns the list of all active breakpoints for the debuggee. The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics. This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.

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
    res, err := s.Controller.ClouddebuggerControllerDebuggeesBreakpointsList(ctx, operations.ClouddebuggerControllerDebuggeesBreakpointsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        AgentID: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        DebuggeeID: "suscipit",
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        SuccessOnTimeout: sdk.Bool(false),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("excepturi"),
        WaitToken: sdk.String("nisi"),
    }, operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurity{
        Option1: &operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActiveBreakpointsResponse != nil {
        // handle response
    }
}
```

## ClouddebuggerControllerDebuggeesBreakpointsUpdate

Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.

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
    res, err := s.Controller.ClouddebuggerControllerDebuggeesBreakpointsUpdate(ctx, operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpdateActiveBreakpointRequest: &shared.UpdateActiveBreakpointRequest{
            Breakpoint: &shared.Breakpoint{
                Action: shared.BreakpointActionEnumLog.ToPointer(),
                CanaryExpireTime: sdk.String("ab"),
                Condition: sdk.String("quis"),
                CreateTime: sdk.String("veritatis"),
                EvaluatedExpressions: []shared.Variable{
                    shared.Variable{
                        Members: []shared.Variable{
                            shared.Variable{},
                        },
                        Name: sdk.String("Estelle Will"),
                        Status: &shared.StatusMessage{
                            Description: &shared.FormatMessage{
                                Format: sdk.String("at"),
                                Parameters: []string{
                                    "maiores",
                                    "molestiae",
                                    "quod",
                                    "quod",
                                },
                            },
                            IsError: sdk.Bool(false),
                            RefersTo: shared.StatusMessageRefersToEnumBreakpointExpression.ToPointer(),
                        },
                        Type: sdk.String("totam"),
                        Value: sdk.String("porro"),
                        VarTableIndex: sdk.Int(678880),
                    },
                    shared.Variable{
                        Members: []shared.Variable{
                            shared.Variable{},
                        },
                        Name: sdk.String("Luke McCullough"),
                        Status: &shared.StatusMessage{
                            Description: &shared.FormatMessage{
                                Format: sdk.String("hic"),
                                Parameters: []string{
                                    "totam",
                                    "beatae",
                                    "commodi",
                                    "molestiae",
                                },
                            },
                            IsError: sdk.Bool(false),
                            RefersTo: shared.StatusMessageRefersToEnumBreakpointCondition.ToPointer(),
                        },
                        Type: sdk.String("qui"),
                        Value: sdk.String("impedit"),
                        VarTableIndex: sdk.Int(736918),
                    },
                    shared.Variable{
                        Members: []shared.Variable{
                            shared.Variable{},
                            shared.Variable{},
                        },
                        Name: sdk.String("Mrs. Miriam Collier"),
                        Status: &shared.StatusMessage{
                            Description: &shared.FormatMessage{
                                Format: sdk.String("sed"),
                                Parameters: []string{
                                    "dolor",
                                    "natus",
                                    "laboriosam",
                                },
                            },
                            IsError: sdk.Bool(false),
                            RefersTo: shared.StatusMessageRefersToEnumVariableValue.ToPointer(),
                        },
                        Type: sdk.String("saepe"),
                        Value: sdk.String("fuga"),
                        VarTableIndex: sdk.Int(449950),
                    },
                },
                Expressions: []string{
                    "iste",
                    "iure",
                },
                FinalTime: sdk.String("saepe"),
                ID: sdk.String("b10faaa2-352c-4595-9907-aff1a3a2fa94"),
                IsFinalState: sdk.Bool(false),
                Labels: map[string]string{
                    "quam": "molestiae",
                    "velit": "error",
                },
                Location: &shared.SourceLocation{
                    Column: sdk.Int(158969),
                    Line: sdk.Int(338007),
                    Path: sdk.String("vitae"),
                },
                LogLevel: shared.BreakpointLogLevelEnumError.ToPointer(),
                LogMessageFormat: sdk.String("animi"),
                StackFrames: []shared.StackFrame{
                    shared.StackFrame{
                        Arguments: []shared.Variable{
                            shared.Variable{
                                Members: []shared.Variable{
                                    shared.Variable{},
                                    shared.Variable{},
                                    shared.Variable{},
                                    shared.Variable{},
                                },
                                Name: sdk.String("Mandy Hills"),
                                Status: &shared.StatusMessage{
                                    Description: &shared.FormatMessage{
                                        Format: sdk.String("aut"),
                                        Parameters: []string{
                                            "error",
                                        },
                                    },
                                    IsError: sdk.Bool(false),
                                    RefersTo: shared.StatusMessageRefersToEnumVariableName.ToPointer(),
                                },
                                Type: sdk.String("laborum"),
                                Value: sdk.String("quasi"),
                                VarTableIndex: sdk.Int(971945),
                            },
                        },
                        Function: sdk.String("voluptatibus"),
                        Locals: []shared.Variable{
                            shared.Variable{
                                Members: []shared.Variable{
                                    shared.Variable{},
                                    shared.Variable{},
                                },
                                Name: sdk.String("Jan Bednar"),
                                Status: &shared.StatusMessage{
                                    Description: &shared.FormatMessage{
                                        Format: sdk.String("cum"),
                                        Parameters: []string{
                                            "doloremque",
                                        },
                                    },
                                    IsError: sdk.Bool(false),
                                    RefersTo: shared.StatusMessageRefersToEnumBreakpointExpression.ToPointer(),
                                },
                                Type: sdk.String("ut"),
                                Value: sdk.String("maiores"),
                                VarTableIndex: sdk.Int(120196),
                            },
                            shared.Variable{
                                Members: []shared.Variable{
                                    shared.Variable{},
                                    shared.Variable{},
                                },
                                Name: sdk.String("Heidi Carter"),
                                Status: &shared.StatusMessage{
                                    Description: &shared.FormatMessage{
                                        Format: sdk.String("accusamus"),
                                        Parameters: []string{
                                            "repudiandae",
                                            "quae",
                                        },
                                    },
                                    IsError: sdk.Bool(false),
                                    RefersTo: shared.StatusMessageRefersToEnumBreakpointSourceLocation.ToPointer(),
                                },
                                Type: sdk.String("quidem"),
                                Value: sdk.String("molestias"),
                                VarTableIndex: sdk.Int(566602),
                            },
                            shared.Variable{
                                Members: []shared.Variable{
                                    shared.Variable{},
                                    shared.Variable{},
                                    shared.Variable{},
                                    shared.Variable{},
                                },
                                Name: sdk.String("Irma Ledner DVM"),
                                Status: &shared.StatusMessage{
                                    Description: &shared.FormatMessage{
                                        Format: sdk.String("sint"),
                                        Parameters: []string{
                                            "itaque",
                                        },
                                    },
                                    IsError: sdk.Bool(false),
                                    RefersTo: shared.StatusMessageRefersToEnumBreakpointCondition.ToPointer(),
                                },
                                Type: sdk.String("enim"),
                                Value: sdk.String("consequatur"),
                                VarTableIndex: sdk.Int(667411),
                            },
                            shared.Variable{
                                Members: []shared.Variable{
                                    shared.Variable{},
                                    shared.Variable{},
                                    shared.Variable{},
                                    shared.Variable{},
                                },
                                Name: sdk.String("Joanna Rau"),
                                Status: &shared.StatusMessage{
                                    Description: &shared.FormatMessage{
                                        Format: sdk.String("modi"),
                                        Parameters: []string{
                                            "aliquid",
                                        },
                                    },
                                    IsError: sdk.Bool(false),
                                    RefersTo: shared.StatusMessageRefersToEnumBreakpointAge.ToPointer(),
                                },
                                Type: sdk.String("quos"),
                                Value: sdk.String("perferendis"),
                                VarTableIndex: sdk.Int(164940),
                            },
                        },
                        Location: &shared.SourceLocation{
                            Column: sdk.Int(828940),
                            Line: sdk.Int(369808),
                            Path: sdk.String("alias"),
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
                                Name: sdk.String("Eddie Prosacco"),
                                Status: &shared.StatusMessage{
                                    Description: &shared.FormatMessage{
                                        Format: sdk.String("delectus"),
                                        Parameters: []string{
                                            "non",
                                            "eligendi",
                                        },
                                    },
                                    IsError: sdk.Bool(false),
                                    RefersTo: shared.StatusMessageRefersToEnumBreakpointAge.ToPointer(),
                                },
                                Type: sdk.String("aliquid"),
                                Value: sdk.String("provident"),
                                VarTableIndex: sdk.Int(896039),
                            },
                        },
                        Function: sdk.String("sint"),
                        Locals: []shared.Variable{
                            shared.Variable{
                                Members: []shared.Variable{
                                    shared.Variable{},
                                },
                                Name: sdk.String("Randal Parisian"),
                                Status: &shared.StatusMessage{
                                    Description: &shared.FormatMessage{
                                        Format: sdk.String("illum"),
                                        Parameters: []string{
                                            "rerum",
                                            "dicta",
                                            "magnam",
                                            "cumque",
                                        },
                                    },
                                    IsError: sdk.Bool(false),
                                    RefersTo: shared.StatusMessageRefersToEnumVariableName.ToPointer(),
                                },
                                Type: sdk.String("ea"),
                                Value: sdk.String("aliquid"),
                                VarTableIndex: sdk.Int(675439),
                            },
                            shared.Variable{
                                Members: []shared.Variable{
                                    shared.Variable{},
                                    shared.Variable{},
                                    shared.Variable{},
                                    shared.Variable{},
                                },
                                Name: sdk.String("Toni Haley"),
                                Status: &shared.StatusMessage{
                                    Description: &shared.FormatMessage{
                                        Format: sdk.String("quidem"),
                                        Parameters: []string{
                                            "nam",
                                            "id",
                                            "blanditiis",
                                        },
                                    },
                                    IsError: sdk.Bool(false),
                                    RefersTo: shared.StatusMessageRefersToEnumBreakpointAge.ToPointer(),
                                },
                                Type: sdk.String("sapiente"),
                                Value: sdk.String("amet"),
                                VarTableIndex: sdk.Int(643990),
                            },
                            shared.Variable{
                                Members: []shared.Variable{
                                    shared.Variable{},
                                    shared.Variable{},
                                },
                                Name: sdk.String("Ada Moen IV"),
                                Status: &shared.StatusMessage{
                                    Description: &shared.FormatMessage{
                                        Format: sdk.String("magnam"),
                                        Parameters: []string{
                                            "id",
                                            "labore",
                                            "labore",
                                        },
                                    },
                                    IsError: sdk.Bool(false),
                                    RefersTo: shared.StatusMessageRefersToEnumBreakpointExpression.ToPointer(),
                                },
                                Type: sdk.String("natus"),
                                Value: sdk.String("nobis"),
                                VarTableIndex: sdk.Int(428769),
                            },
                        },
                        Location: &shared.SourceLocation{
                            Column: sdk.Int(878453),
                            Line: sdk.Int(135474),
                            Path: sdk.String("architecto"),
                        },
                    },
                },
                State: shared.BreakpointStateEnumStateCanaryPendingAgents.ToPointer(),
                Status: &shared.StatusMessage{
                    Description: &shared.FormatMessage{
                        Format: sdk.String("et"),
                        Parameters: []string{
                            "ullam",
                            "provident",
                            "quos",
                        },
                    },
                    IsError: sdk.Bool(false),
                    RefersTo: shared.StatusMessageRefersToEnumBreakpointAge.ToPointer(),
                },
                UserEmail: sdk.String("accusantium"),
                VariableTable: []shared.Variable{
                    shared.Variable{
                        Members: []shared.Variable{
                            shared.Variable{},
                            shared.Variable{},
                            shared.Variable{},
                            shared.Variable{},
                        },
                        Name: sdk.String("Tommy Kemmer"),
                        Status: &shared.StatusMessage{
                            Description: &shared.FormatMessage{
                                Format: sdk.String("odit"),
                                Parameters: []string{
                                    "quasi",
                                    "iure",
                                },
                            },
                            IsError: sdk.Bool(false),
                            RefersTo: shared.StatusMessageRefersToEnumVariableValue.ToPointer(),
                        },
                        Type: sdk.String("debitis"),
                        Value: sdk.String("eius"),
                        VarTableIndex: sdk.Int(806194),
                    },
                    shared.Variable{
                        Members: []shared.Variable{
                            shared.Variable{},
                            shared.Variable{},
                            shared.Variable{},
                        },
                        Name: sdk.String("Dr. Arnold Bradtke"),
                        Status: &shared.StatusMessage{
                            Description: &shared.FormatMessage{
                                Format: sdk.String("expedita"),
                                Parameters: []string{
                                    "repellat",
                                    "quibusdam",
                                },
                            },
                            IsError: sdk.Bool(false),
                            RefersTo: shared.StatusMessageRefersToEnumBreakpointSourceLocation.ToPointer(),
                        },
                        Type: sdk.String("saepe"),
                        Value: sdk.String("pariatur"),
                        VarTableIndex: sdk.Int(37559),
                    },
                    shared.Variable{
                        Members: []shared.Variable{
                            shared.Variable{},
                        },
                        Name: sdk.String("Miss Nick Cummerata"),
                        Status: &shared.StatusMessage{
                            Description: &shared.FormatMessage{
                                Format: sdk.String("pariatur"),
                                Parameters: []string{
                                    "ea",
                                    "excepturi",
                                    "odit",
                                    "ea",
                                },
                            },
                            IsError: sdk.Bool(false),
                            RefersTo: shared.StatusMessageRefersToEnumUnspecified.ToPointer(),
                        },
                        Type: sdk.String("ab"),
                        Value: sdk.String("maiores"),
                        VarTableIndex: sdk.Int(697429),
                    },
                },
            },
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("autem"),
        DebuggeeID: "nam",
        Fields: sdk.String("eaque"),
        ID: "d5f0d30c-5fbb-4258-b053-202c73d5fe9b",
        Key: sdk.String("perspiciatis"),
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity{
        Option1: &operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateActiveBreakpointResponse != nil {
        // handle response
    }
}
```

## ClouddebuggerControllerDebuggeesRegister

Registers the debuggee with the controller service. All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method. This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.

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
    res, err := s.Controller.ClouddebuggerControllerDebuggeesRegister(ctx, operations.ClouddebuggerControllerDebuggeesRegisterRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RegisterDebuggeeRequest: &shared.RegisterDebuggeeRequest{
            Debuggee: &shared.Debuggee{
                AgentVersion: sdk.String("eaque"),
                CanaryMode: shared.DebuggeeCanaryModeEnumCanaryModeAlwaysDisabled.ToPointer(),
                Description: sdk.String("rerum"),
                ExtSourceContexts: []shared.ExtendedSourceContext{
                    shared.ExtendedSourceContext{
                        Context: &shared.SourceContext{
                            CloudRepo: &shared.CloudRepoSourceContext{
                                AliasContext: &shared.AliasContext{
                                    Kind: shared.AliasContextKindEnumOther.ToPointer(),
                                    Name: sdk.String("Edwin Morar"),
                                },
                                AliasName: sdk.String("pariatur"),
                                RepoID: &shared.RepoID{
                                    ProjectRepoID: &shared.ProjectRepoID{
                                        ProjectID: sdk.String("provident"),
                                        RepoName: sdk.String("nobis"),
                                    },
                                    UID: sdk.String("libero"),
                                },
                                RevisionID: sdk.String("delectus"),
                            },
                            CloudWorkspace: &shared.CloudWorkspaceSourceContext{
                                SnapshotID: sdk.String("quaerat"),
                                WorkspaceID: &shared.CloudWorkspaceID{
                                    Name: sdk.String("Gene Effertz"),
                                    RepoID: &shared.RepoID{
                                        ProjectRepoID: &shared.ProjectRepoID{
                                            ProjectID: sdk.String("qui"),
                                            RepoName: sdk.String("ipsum"),
                                        },
                                        UID: sdk.String("hic"),
                                    },
                                },
                            },
                            Gerrit: &shared.GerritSourceContext{
                                AliasContext: &shared.AliasContext{
                                    Kind: shared.AliasContextKindEnumMovable.ToPointer(),
                                    Name: sdk.String("Adrian Kuhn"),
                                },
                                AliasName: sdk.String("dolorum"),
                                GerritProject: sdk.String("numquam"),
                                HostURI: sdk.String("veritatis"),
                                RevisionID: sdk.String("ipsa"),
                            },
                            Git: &shared.GitSourceContext{
                                RevisionID: sdk.String("ipsa"),
                                URL: sdk.String("iure"),
                            },
                        },
                        Labels: map[string]string{
                            "quaerat": "accusamus",
                            "quidem": "voluptatibus",
                        },
                    },
                },
                ID: sdk.String("69280d1b-a77a-489e-bf73-7ae4203ce5e6"),
                IsDisabled: sdk.Bool(false),
                IsInactive: sdk.Bool(false),
                Labels: map[string]string{
                    "provident": "minima",
                    "repellendus": "totam",
                    "similique": "alias",
                },
                Project: sdk.String("at"),
                SourceContexts: []shared.SourceContext{
                    shared.SourceContext{
                        CloudRepo: &shared.CloudRepoSourceContext{
                            AliasContext: &shared.AliasContext{
                                Kind: shared.AliasContextKindEnumFixed.ToPointer(),
                                Name: sdk.String("Bernadette Torp"),
                            },
                            AliasName: sdk.String("a"),
                            RepoID: &shared.RepoID{
                                ProjectRepoID: &shared.ProjectRepoID{
                                    ProjectID: sdk.String("esse"),
                                    RepoName: sdk.String("harum"),
                                },
                                UID: sdk.String("iusto"),
                            },
                            RevisionID: sdk.String("ipsum"),
                        },
                        CloudWorkspace: &shared.CloudWorkspaceSourceContext{
                            SnapshotID: sdk.String("quisquam"),
                            WorkspaceID: &shared.CloudWorkspaceID{
                                Name: sdk.String("Marvin Renner"),
                                RepoID: &shared.RepoID{
                                    ProjectRepoID: &shared.ProjectRepoID{
                                        ProjectID: sdk.String("enim"),
                                        RepoName: sdk.String("dolorem"),
                                    },
                                    UID: sdk.String("sapiente"),
                                },
                            },
                        },
                        Gerrit: &shared.GerritSourceContext{
                            AliasContext: &shared.AliasContext{
                                Kind: shared.AliasContextKindEnumMovable.ToPointer(),
                                Name: sdk.String("Karen Rath"),
                            },
                            AliasName: sdk.String("vel"),
                            GerritProject: sdk.String("libero"),
                            HostURI: sdk.String("voluptas"),
                            RevisionID: sdk.String("deserunt"),
                        },
                        Git: &shared.GitSourceContext{
                            RevisionID: sdk.String("quam"),
                            URL: sdk.String("ipsum"),
                        },
                    },
                    shared.SourceContext{
                        CloudRepo: &shared.CloudRepoSourceContext{
                            AliasContext: &shared.AliasContext{
                                Kind: shared.AliasContextKindEnumFixed.ToPointer(),
                                Name: sdk.String("Shelly Schoen"),
                            },
                            AliasName: sdk.String("dicta"),
                            RepoID: &shared.RepoID{
                                ProjectRepoID: &shared.ProjectRepoID{
                                    ProjectID: sdk.String("laborum"),
                                    RepoName: sdk.String("totam"),
                                },
                                UID: sdk.String("incidunt"),
                            },
                            RevisionID: sdk.String("aspernatur"),
                        },
                        CloudWorkspace: &shared.CloudWorkspaceSourceContext{
                            SnapshotID: sdk.String("dolores"),
                            WorkspaceID: &shared.CloudWorkspaceID{
                                Name: sdk.String("Cesar Hyatt"),
                                RepoID: &shared.RepoID{
                                    ProjectRepoID: &shared.ProjectRepoID{
                                        ProjectID: sdk.String("temporibus"),
                                        RepoName: sdk.String("qui"),
                                    },
                                    UID: sdk.String("neque"),
                                },
                            },
                        },
                        Gerrit: &shared.GerritSourceContext{
                            AliasContext: &shared.AliasContext{
                                Kind: shared.AliasContextKindEnumAny.ToPointer(),
                                Name: sdk.String("Courtney Cassin"),
                            },
                            AliasName: sdk.String("hic"),
                            GerritProject: sdk.String("voluptatem"),
                            HostURI: sdk.String("cumque"),
                            RevisionID: sdk.String("soluta"),
                        },
                        Git: &shared.GitSourceContext{
                            RevisionID: sdk.String("nobis"),
                            URL: sdk.String("et"),
                        },
                    },
                },
                Status: &shared.StatusMessage{
                    Description: &shared.FormatMessage{
                        Format: sdk.String("saepe"),
                        Parameters: []string{
                            "veritatis",
                        },
                    },
                    IsError: sdk.Bool(false),
                    RefersTo: shared.StatusMessageRefersToEnumBreakpointCanaryFailed.ToPointer(),
                },
                Uniquifier: sdk.String("quos"),
            },
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.ClouddebuggerControllerDebuggeesRegisterSecurity{
        Option1: &operations.ClouddebuggerControllerDebuggeesRegisterSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterDebuggeeResponse != nil {
        // handle response
    }
}
```
