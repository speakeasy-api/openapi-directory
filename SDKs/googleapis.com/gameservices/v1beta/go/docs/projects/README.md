# Projects

### Available Operations

* [GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicy](#gameservicesprojectslocationsgameserverdeploymentsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicy](#gameservicesprojectslocationsgameserverdeploymentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissions](#gameservicesprojectslocationsgameserverdeploymentstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [GameservicesProjectsLocationsList](#gameservicesprojectslocationslist) - Lists information about the supported locations for this service.
* [GameservicesProjectsLocationsOperationsCancel](#gameservicesprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [GameservicesProjectsLocationsOperationsDelete](#gameservicesprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [GameservicesProjectsLocationsOperationsGet](#gameservicesprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [GameservicesProjectsLocationsOperationsList](#gameservicesprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicy

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
    res, err := s.Projects.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicy(ctx, operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest{
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
    }, operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity{
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

## GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicy

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
    res, err := s.Projects.GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicy(ctx, operations.GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ab",
                                    "quis",
                                    "veritatis",
                                    "deserunt",
                                },
                                IgnoreChildExemptions: sdk.Bool(false),
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "repellendus",
                                    "sapiente",
                                },
                                IgnoreChildExemptions: sdk.Bool(false),
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "at",
                                },
                                IgnoreChildExemptions: sdk.Bool(false),
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "molestiae",
                                    "quod",
                                    "quod",
                                    "esse",
                                },
                                IgnoreChildExemptions: sdk.Bool(false),
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("porro"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nam",
                                },
                                IgnoreChildExemptions: sdk.Bool(false),
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "fugit",
                                    "deleniti",
                                    "hic",
                                },
                                IgnoreChildExemptions: sdk.Bool(false),
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "beatae",
                                    "commodi",
                                    "molestiae",
                                },
                                IgnoreChildExemptions: sdk.Bool(false),
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("qui"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        BindingID: sdk.String("cum"),
                        Condition: &shared.Expr{
                            Description: sdk.String("esse"),
                            Expression: sdk.String("ipsum"),
                            Location: sdk.String("excepturi"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "ad",
                        },
                        Role: sdk.String("natus"),
                    },
                    shared.Binding{
                        BindingID: sdk.String("sed"),
                        Condition: &shared.Expr{
                            Description: sdk.String("iste"),
                            Expression: sdk.String("dolor"),
                            Location: sdk.String("natus"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "saepe",
                            "fuga",
                            "in",
                            "corporis",
                        },
                        Role: sdk.String("iste"),
                    },
                    shared.Binding{
                        BindingID: sdk.String("iure"),
                        Condition: &shared.Expr{
                            Description: sdk.String("saepe"),
                            Expression: sdk.String("quidem"),
                            Location: sdk.String("architecto"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "est",
                            "mollitia",
                            "laborum",
                            "dolores",
                        },
                        Role: sdk.String("dolorem"),
                    },
                    shared.Binding{
                        BindingID: sdk.String("corporis"),
                        Condition: &shared.Expr{
                            Description: sdk.String("explicabo"),
                            Expression: sdk.String("nobis"),
                            Location: sdk.String("enim"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "minima",
                            "excepturi",
                        },
                        Role: sdk.String("accusantium"),
                    },
                },
                Etag: sdk.String("iure"),
                Rules: []shared.Rule{
                    shared.Rule{
                        Action: shared.RuleActionEnumLog.ToPointer(),
                        Conditions: []shared.Condition{
                            shared.Condition{
                                Iam: shared.ConditionIamEnumNoAttr.ToPointer(),
                                Op: shared.ConditionOpEnumIn.ToPointer(),
                                Svc: sdk.String("dolorem"),
                                Sys: shared.ConditionSysEnumName.ToPointer(),
                                Values: []string{
                                    "repellat",
                                },
                            },
                            shared.Condition{
                                Iam: shared.ConditionIamEnumJustificationType.ToPointer(),
                                Op: shared.ConditionOpEnumIn.ToPointer(),
                                Svc: sdk.String("numquam"),
                                Sys: shared.ConditionSysEnumService.ToPointer(),
                                Values: []string{
                                    "molestiae",
                                    "velit",
                                },
                            },
                            shared.Condition{
                                Iam: shared.ConditionIamEnumApprover.ToPointer(),
                                Op: shared.ConditionOpEnumNoOp.ToPointer(),
                                Svc: sdk.String("quis"),
                                Sys: shared.ConditionSysEnumNoAttr.ToPointer(),
                                Values: []string{
                                    "animi",
                                    "enim",
                                    "odit",
                                },
                            },
                            shared.Condition{
                                Iam: shared.ConditionIamEnumCredentialsType.ToPointer(),
                                Op: shared.ConditionOpEnumEquals.ToPointer(),
                                Svc: sdk.String("tenetur"),
                                Sys: shared.ConditionSysEnumRegion.ToPointer(),
                                Values: []string{
                                    "possimus",
                                    "aut",
                                    "quasi",
                                },
                            },
                        },
                        Description: sdk.String("error"),
                        In: []string{
                            "laborum",
                            "quasi",
                            "reiciendis",
                            "voluptatibus",
                        },
                        LogConfig: []shared.LogConfig{
                            shared.LogConfig{
                                CloudAudit: &shared.CloudAuditOptions{
                                    AuthorizationLoggingOptions: &shared.AuthorizationLoggingOptions{
                                        PermissionType: shared.AuthorizationLoggingOptionsPermissionTypeEnumAdminWrite.ToPointer(),
                                    },
                                    LogName: shared.CloudAuditOptionsLogNameEnumAdminActivity.ToPointer(),
                                },
                                Counter: &shared.CounterOptions{
                                    CustomFields: []shared.CustomField{
                                        shared.CustomField{
                                            Name: sdk.String("Geneva Klein Jr."),
                                            Value: sdk.String("reprehenderit"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Shawna Carter"),
                                            Value: sdk.String("iusto"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Maryann Hamill"),
                                            Value: sdk.String("repudiandae"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Edna Pouros"),
                                            Value: sdk.String("pariatur"),
                                        },
                                    },
                                    Field: sdk.String("modi"),
                                    Metric: sdk.String("praesentium"),
                                },
                                DataAccess: &shared.DataAccessOptions{
                                    LogMode: shared.DataAccessOptionsLogModeEnumLogFailClosed.ToPointer(),
                                },
                            },
                            shared.LogConfig{
                                CloudAudit: &shared.CloudAuditOptions{
                                    AuthorizationLoggingOptions: &shared.AuthorizationLoggingOptions{
                                        PermissionType: shared.AuthorizationLoggingOptionsPermissionTypeEnumDataWrite.ToPointer(),
                                    },
                                    LogName: shared.CloudAuditOptionsLogNameEnumUnspecifiedLogName.ToPointer(),
                                },
                                Counter: &shared.CounterOptions{
                                    CustomFields: []shared.CustomField{
                                        shared.CustomField{
                                            Name: sdk.String("Patrick Ward"),
                                            Value: sdk.String("consequatur"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Taylor Cole"),
                                            Value: sdk.String("quibusdam"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Pauline Deckow"),
                                            Value: sdk.String("quos"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Louise Simonis Sr."),
                                            Value: sdk.String("dolorum"),
                                        },
                                    },
                                    Field: sdk.String("excepturi"),
                                    Metric: sdk.String("tempora"),
                                },
                                DataAccess: &shared.DataAccessOptions{
                                    LogMode: shared.DataAccessOptionsLogModeEnumLogFailClosed.ToPointer(),
                                },
                            },
                            shared.LogConfig{
                                CloudAudit: &shared.CloudAuditOptions{
                                    AuthorizationLoggingOptions: &shared.AuthorizationLoggingOptions{
                                        PermissionType: shared.AuthorizationLoggingOptionsPermissionTypeEnumDataRead.ToPointer(),
                                    },
                                    LogName: shared.CloudAuditOptionsLogNameEnumUnspecifiedLogName.ToPointer(),
                                },
                                Counter: &shared.CounterOptions{
                                    CustomFields: []shared.CustomField{
                                        shared.CustomField{
                                            Name: sdk.String("Ethel Roob"),
                                            Value: sdk.String("provident"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Perry Nikolaus"),
                                            Value: sdk.String("a"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Arnold Kirlin"),
                                            Value: sdk.String("rerum"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Valerie Runolfsson"),
                                            Value: sdk.String("aliquid"),
                                        },
                                    },
                                    Field: sdk.String("laborum"),
                                    Metric: sdk.String("accusamus"),
                                },
                                DataAccess: &shared.DataAccessOptions{
                                    LogMode: shared.DataAccessOptionsLogModeEnumLogModeUnspecified.ToPointer(),
                                },
                            },
                            shared.LogConfig{
                                CloudAudit: &shared.CloudAuditOptions{
                                    AuthorizationLoggingOptions: &shared.AuthorizationLoggingOptions{
                                        PermissionType: shared.AuthorizationLoggingOptionsPermissionTypeEnumAdminWrite.ToPointer(),
                                    },
                                    LogName: shared.CloudAuditOptionsLogNameEnumUnspecifiedLogName.ToPointer(),
                                },
                                Counter: &shared.CounterOptions{
                                    CustomFields: []shared.CustomField{
                                        shared.CustomField{
                                            Name: sdk.String("Abraham McKenzie"),
                                            Value: sdk.String("blanditiis"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Timmy Feeney"),
                                            Value: sdk.String("vel"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Ms. Arturo Krajcik"),
                                            Value: sdk.String("distinctio"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Leroy Greenfelder"),
                                            Value: sdk.String("nobis"),
                                        },
                                    },
                                    Field: sdk.String("eum"),
                                    Metric: sdk.String("vero"),
                                },
                                DataAccess: &shared.DataAccessOptions{
                                    LogMode: shared.DataAccessOptionsLogModeEnumLogModeUnspecified.ToPointer(),
                                },
                            },
                        },
                        NotIn: []string{
                            "magnam",
                        },
                        Permissions: []string{
                            "excepturi",
                        },
                    },
                    shared.Rule{
                        Action: shared.RuleActionEnumAllowWithLog.ToPointer(),
                        Conditions: []shared.Condition{
                            shared.Condition{
                                Iam: shared.ConditionIamEnumApprover.ToPointer(),
                                Op: shared.ConditionOpEnumIn.ToPointer(),
                                Svc: sdk.String("accusantium"),
                                Sys: shared.ConditionSysEnumName.ToPointer(),
                                Values: []string{
                                    "mollitia",
                                    "ad",
                                    "eum",
                                    "dolor",
                                },
                            },
                            shared.Condition{
                                Iam: shared.ConditionIamEnumCredsAssertion.ToPointer(),
                                Op: shared.ConditionOpEnumNoOp.ToPointer(),
                                Svc: sdk.String("nemo"),
                                Sys: shared.ConditionSysEnumNoAttr.ToPointer(),
                                Values: []string{
                                    "doloribus",
                                    "debitis",
                                },
                            },
                            shared.Condition{
                                Iam: shared.ConditionIamEnumAttribution.ToPointer(),
                                Op: shared.ConditionOpEnumNotIn.ToPointer(),
                                Svc: sdk.String("deleniti"),
                                Sys: shared.ConditionSysEnumName.ToPointer(),
                                Values: []string{
                                    "architecto",
                                    "architecto",
                                },
                            },
                        },
                        Description: sdk.String("repudiandae"),
                        In: []string{
                            "expedita",
                            "nihil",
                        },
                        LogConfig: []shared.LogConfig{
                            shared.LogConfig{
                                CloudAudit: &shared.CloudAuditOptions{
                                    AuthorizationLoggingOptions: &shared.AuthorizationLoggingOptions{
                                        PermissionType: shared.AuthorizationLoggingOptionsPermissionTypeEnumDataWrite.ToPointer(),
                                    },
                                    LogName: shared.CloudAuditOptionsLogNameEnumUnspecifiedLogName.ToPointer(),
                                },
                                Counter: &shared.CounterOptions{
                                    CustomFields: []shared.CustomField{
                                        shared.CustomField{
                                            Name: sdk.String("Edward Crooks"),
                                            Value: sdk.String("magni"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Angelica Stanton"),
                                            Value: sdk.String("ea"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Mr. Harry Jaskolski"),
                                            Value: sdk.String("quidem"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Colleen Johnston PhD"),
                                            Value: sdk.String("nemo"),
                                        },
                                    },
                                    Field: sdk.String("voluptatibus"),
                                    Metric: sdk.String("perferendis"),
                                },
                                DataAccess: &shared.DataAccessOptions{
                                    LogMode: shared.DataAccessOptionsLogModeEnumLogFailClosed.ToPointer(),
                                },
                            },
                            shared.LogConfig{
                                CloudAudit: &shared.CloudAuditOptions{
                                    AuthorizationLoggingOptions: &shared.AuthorizationLoggingOptions{
                                        PermissionType: shared.AuthorizationLoggingOptionsPermissionTypeEnumAdminRead.ToPointer(),
                                    },
                                    LogName: shared.CloudAuditOptionsLogNameEnumUnspecifiedLogName.ToPointer(),
                                },
                                Counter: &shared.CounterOptions{
                                    CustomFields: []shared.CustomField{
                                        shared.CustomField{
                                            Name: sdk.String("Mindy Renner"),
                                            Value: sdk.String("quis"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Lance Becker"),
                                            Value: sdk.String("eos"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Jacqueline Schimmel"),
                                            Value: sdk.String("vero"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Mindy Walter"),
                                            Value: sdk.String("perspiciatis"),
                                        },
                                    },
                                    Field: sdk.String("voluptatem"),
                                    Metric: sdk.String("porro"),
                                },
                                DataAccess: &shared.DataAccessOptions{
                                    LogMode: shared.DataAccessOptionsLogModeEnumLogModeUnspecified.ToPointer(),
                                },
                            },
                            shared.LogConfig{
                                CloudAudit: &shared.CloudAuditOptions{
                                    AuthorizationLoggingOptions: &shared.AuthorizationLoggingOptions{
                                        PermissionType: shared.AuthorizationLoggingOptionsPermissionTypeEnumAdminWrite.ToPointer(),
                                    },
                                    LogName: shared.CloudAuditOptionsLogNameEnumAdminActivity.ToPointer(),
                                },
                                Counter: &shared.CounterOptions{
                                    CustomFields: []shared.CustomField{
                                        shared.CustomField{
                                            Name: sdk.String("Jean Ferry"),
                                            Value: sdk.String("modi"),
                                        },
                                    },
                                    Field: sdk.String("iste"),
                                    Metric: sdk.String("dolorum"),
                                },
                                DataAccess: &shared.DataAccessOptions{
                                    LogMode: shared.DataAccessOptionsLogModeEnumLogFailClosed.ToPointer(),
                                },
                            },
                            shared.LogConfig{
                                CloudAudit: &shared.CloudAuditOptions{
                                    AuthorizationLoggingOptions: &shared.AuthorizationLoggingOptions{
                                        PermissionType: shared.AuthorizationLoggingOptionsPermissionTypeEnumDataWrite.ToPointer(),
                                    },
                                    LogName: shared.CloudAuditOptionsLogNameEnumAdminActivity.ToPointer(),
                                },
                                Counter: &shared.CounterOptions{
                                    CustomFields: []shared.CustomField{
                                        shared.CustomField{
                                            Name: sdk.String("Toby Hahn"),
                                            Value: sdk.String("dolorem"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Rosa Dibbert"),
                                            Value: sdk.String("excepturi"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Adrian Kuhn"),
                                            Value: sdk.String("dolorum"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Ms. Christine Beer"),
                                            Value: sdk.String("quaerat"),
                                        },
                                    },
                                    Field: sdk.String("accusamus"),
                                    Metric: sdk.String("quidem"),
                                },
                                DataAccess: &shared.DataAccessOptions{
                                    LogMode: shared.DataAccessOptionsLogModeEnumLogFailClosed.ToPointer(),
                                },
                            },
                        },
                        NotIn: []string{
                            "natus",
                            "eos",
                        },
                        Permissions: []string{
                            "sit",
                            "fugiat",
                            "ab",
                        },
                    },
                    shared.Rule{
                        Action: shared.RuleActionEnumDenyWithLog.ToPointer(),
                        Conditions: []shared.Condition{
                            shared.Condition{
                                Iam: shared.ConditionIamEnumSecurityRealm.ToPointer(),
                                Op: shared.ConditionOpEnumNotEquals.ToPointer(),
                                Svc: sdk.String("dolorum"),
                                Sys: shared.ConditionSysEnumService.ToPointer(),
                                Values: []string{
                                    "necessitatibus",
                                    "distinctio",
                                    "asperiores",
                                },
                            },
                            shared.Condition{
                                Iam: shared.ConditionIamEnumSecurityRealm.ToPointer(),
                                Op: shared.ConditionOpEnumEquals.ToPointer(),
                                Svc: sdk.String("voluptate"),
                                Sys: shared.ConditionSysEnumName.ToPointer(),
                                Values: []string{
                                    "eius",
                                    "aspernatur",
                                    "perferendis",
                                    "amet",
                                },
                            },
                            shared.Condition{
                                Iam: shared.ConditionIamEnumCredentialsType.ToPointer(),
                                Op: shared.ConditionOpEnumDischarged.ToPointer(),
                                Svc: sdk.String("ad"),
                                Sys: shared.ConditionSysEnumIP.ToPointer(),
                                Values: []string{
                                    "deserunt",
                                    "provident",
                                },
                            },
                        },
                        Description: sdk.String("minima"),
                        In: []string{
                            "totam",
                            "similique",
                            "alias",
                            "at",
                        },
                        LogConfig: []shared.LogConfig{
                            shared.LogConfig{
                                CloudAudit: &shared.CloudAuditOptions{
                                    AuthorizationLoggingOptions: &shared.AuthorizationLoggingOptions{
                                        PermissionType: shared.AuthorizationLoggingOptionsPermissionTypeEnumAdminRead.ToPointer(),
                                    },
                                    LogName: shared.CloudAuditOptionsLogNameEnumAdminActivity.ToPointer(),
                                },
                                Counter: &shared.CounterOptions{
                                    CustomFields: []shared.CustomField{
                                        shared.CustomField{
                                            Name: sdk.String("Clarence Parisian"),
                                            Value: sdk.String("harum"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Tracy Schamberger"),
                                            Value: sdk.String("tempore"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Francis Haley"),
                                            Value: sdk.String("totam"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Karen Rath"),
                                            Value: sdk.String("vel"),
                                        },
                                    },
                                    Field: sdk.String("libero"),
                                    Metric: sdk.String("voluptas"),
                                },
                                DataAccess: &shared.DataAccessOptions{
                                    LogMode: shared.DataAccessOptionsLogModeEnumLogFailClosed.ToPointer(),
                                },
                            },
                            shared.LogConfig{
                                CloudAudit: &shared.CloudAuditOptions{
                                    AuthorizationLoggingOptions: &shared.AuthorizationLoggingOptions{
                                        PermissionType: shared.AuthorizationLoggingOptionsPermissionTypeEnumAdminWrite.ToPointer(),
                                    },
                                    LogName: shared.CloudAuditOptionsLogNameEnumUnspecifiedLogName.ToPointer(),
                                },
                                Counter: &shared.CounterOptions{
                                    CustomFields: []shared.CustomField{
                                        shared.CustomField{
                                            Name: sdk.String("Shelly Schoen"),
                                            Value: sdk.String("dicta"),
                                        },
                                        shared.CustomField{
                                            Name: sdk.String("Felix Gorczany"),
                                            Value: sdk.String("distinctio"),
                                        },
                                    },
                                    Field: sdk.String("facilis"),
                                    Metric: sdk.String("aliquid"),
                                },
                                DataAccess: &shared.DataAccessOptions{
                                    LogMode: shared.DataAccessOptionsLogModeEnumLogModeUnspecified.ToPointer(),
                                },
                            },
                        },
                        NotIn: []string{
                            "temporibus",
                            "qui",
                            "neque",
                        },
                        Permissions: []string{
                            "magni",
                        },
                    },
                },
                Version: sdk.Int(488056),
            },
            UpdateMask: sdk.String("sunt"),
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        Resource: "et",
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.GameservicesProjectsLocationsGameServerDeploymentsSetIamPolicySecurity{
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

## GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissions

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
    res, err := s.Projects.GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissions(ctx, operations.GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "quos",
                "tempore",
                "cupiditate",
            },
        },
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        Resource: "architecto",
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("aut"),
    }, operations.GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity{
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

## GameservicesProjectsLocationsList

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
    res, err := s.Projects.GameservicesProjectsLocationsList(ctx, operations.GameservicesProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("repellendus"),
        Filter: sdk.String("porro"),
        IncludeUnrevealedLocations: sdk.Bool(false),
        Key: sdk.String("doloribus"),
        Name: "Olivia McGlynn IV",
        OauthToken: sdk.String("odio"),
        PageSize: sdk.Int64(580447),
        PageToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.GameservicesProjectsLocationsListSecurity{
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

## GameservicesProjectsLocationsOperationsCancel

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
    res, err := s.Projects.GameservicesProjectsLocationsOperationsCancel(ctx, operations.GameservicesProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "delectus": "voluptate",
        },
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("hic"),
        Name: "Jermaine Kuhic",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.GameservicesProjectsLocationsOperationsCancelSecurity{
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

## GameservicesProjectsLocationsOperationsDelete

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
    res, err := s.Projects.GameservicesProjectsLocationsOperationsDelete(ctx, operations.GameservicesProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("aut"),
        Key: sdk.String("voluptatibus"),
        Name: "Freda Cormier",
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.GameservicesProjectsLocationsOperationsDeleteSecurity{
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

## GameservicesProjectsLocationsOperationsGet

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
    res, err := s.Projects.GameservicesProjectsLocationsOperationsGet(ctx, operations.GameservicesProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("ea"),
        Key: sdk.String("aspernatur"),
        Name: "Elena Gulgowski",
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.GameservicesProjectsLocationsOperationsGetSecurity{
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

## GameservicesProjectsLocationsOperationsList

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
    res, err := s.Projects.GameservicesProjectsLocationsOperationsList(ctx, operations.GameservicesProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("voluptatibus"),
        Filter: sdk.String("nostrum"),
        Key: sdk.String("sapiente"),
        Name: "Elbert Jenkins",
        OauthToken: sdk.String("veniam"),
        PageSize: sdk.Int64(399499),
        PageToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("quo"),
    }, operations.GameservicesProjectsLocationsOperationsListSecurity{
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
