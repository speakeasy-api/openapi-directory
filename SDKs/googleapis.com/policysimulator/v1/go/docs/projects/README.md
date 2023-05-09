# Projects

### Available Operations

* [PolicysimulatorProjectsLocationsReplaysCreate](#policysimulatorprojectslocationsreplayscreate) - Creates and starts a Replay using the given ReplayConfig.
* [PolicysimulatorProjectsLocationsReplaysOperationsList](#policysimulatorprojectslocationsreplaysoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [PolicysimulatorProjectsLocationsReplaysResultsList](#policysimulatorprojectslocationsreplaysresultslist) - Lists the results of running a Replay.

## PolicysimulatorProjectsLocationsReplaysCreate

Creates and starts a Replay using the given ReplayConfig.

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
    res, err := s.Projects.PolicysimulatorProjectsLocationsReplaysCreate(ctx, operations.PolicysimulatorProjectsLocationsReplaysCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudPolicysimulatorV1ReplayInput: &shared.GoogleCloudPolicysimulatorV1ReplayInput{
            Config: &shared.GoogleCloudPolicysimulatorV1ReplayConfig{
                LogSource: shared.GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnumLogSourceUnspecified.ToPointer(),
                PolicyOverlay: map[string]shared.GoogleIamV1Policy{
                    "excepturi": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "labore",
                                            "delectus",
                                            "eum",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "sint",
                                            "aliquid",
                                            "provident",
                                            "necessitatibus",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "dolor",
                                            "debitis",
                                            "a",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                                    },
                                },
                                Service: sdk.String("in"),
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "maiores",
                                            "rerum",
                                            "dicta",
                                            "magnam",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "ea",
                                            "aliquid",
                                            "laborum",
                                            "accusamus",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                                    },
                                },
                                Service: sdk.String("occaecati"),
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("accusamus"),
                                    Expression: sdk.String("delectus"),
                                    Location: sdk.String("quidem"),
                                    Title: sdk.String("Ms."),
                                },
                                Members: []string{
                                    "id",
                                    "blanditiis",
                                    "deleniti",
                                },
                                Role: sdk.String("sapiente"),
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("amet"),
                                    Expression: sdk.String("deserunt"),
                                    Location: sdk.String("nisi"),
                                    Title: sdk.String("Ms."),
                                },
                                Members: []string{
                                    "omnis",
                                    "molestiae",
                                    "perferendis",
                                },
                                Role: sdk.String("nihil"),
                            },
                        },
                        Etag: sdk.String("magnam"),
                        Version: sdk.Int(716075),
                    },
                    "id": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "natus",
                                            "nobis",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "aspernatur",
                                            "architecto",
                                            "magnam",
                                            "et",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                                    },
                                },
                                Service: sdk.String("ullam"),
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "sint",
                                            "accusantium",
                                            "mollitia",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "ad",
                                            "eum",
                                            "dolor",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "nemo",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                                    },
                                },
                                Service: sdk.String("iure"),
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("debitis"),
                                    Expression: sdk.String("eius"),
                                    Location: sdk.String("maxime"),
                                    Title: sdk.String("Ms."),
                                },
                                Members: []string{
                                    "in",
                                    "architecto",
                                    "architecto",
                                },
                                Role: sdk.String("repudiandae"),
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("ullam"),
                                    Expression: sdk.String("expedita"),
                                    Location: sdk.String("nihil"),
                                    Title: sdk.String("Dr."),
                                },
                                Members: []string{
                                    "sed",
                                    "saepe",
                                    "pariatur",
                                    "accusantium",
                                },
                                Role: sdk.String("consequuntur"),
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("praesentium"),
                                    Expression: sdk.String("natus"),
                                    Location: sdk.String("magni"),
                                    Title: sdk.String("Mr."),
                                },
                                Members: []string{
                                    "illum",
                                    "pariatur",
                                    "maxime",
                                    "ea",
                                },
                                Role: sdk.String("excepturi"),
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("odit"),
                                    Expression: sdk.String("ea"),
                                    Location: sdk.String("accusantium"),
                                    Title: sdk.String("Mr."),
                                },
                                Members: []string{
                                    "quidem",
                                    "ipsam",
                                    "voluptate",
                                    "autem",
                                },
                                Role: sdk.String("nam"),
                            },
                        },
                        Etag: sdk.String("eaque"),
                        Version: sdk.Int(866383),
                    },
                    "nemo": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "amet",
                                            "aut",
                                            "cumque",
                                            "corporis",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                                    },
                                },
                                Service: sdk.String("libero"),
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "quis",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "eaque",
                                            "quis",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "perferendis",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                                    },
                                },
                                Service: sdk.String("minus"),
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "vero",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "recusandae",
                                            "omnis",
                                            "facilis",
                                            "perspiciatis",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                                    },
                                },
                                Service: sdk.String("porro"),
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "error",
                                            "eaque",
                                            "occaecati",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                                    },
                                },
                                Service: sdk.String("adipisci"),
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("earum"),
                                    Expression: sdk.String("modi"),
                                    Location: sdk.String("iste"),
                                    Title: sdk.String("Miss"),
                                },
                                Members: []string{
                                    "pariatur",
                                    "provident",
                                    "nobis",
                                },
                                Role: sdk.String("libero"),
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("delectus"),
                                    Expression: sdk.String("quaerat"),
                                    Location: sdk.String("quos"),
                                    Title: sdk.String("Mrs."),
                                },
                                Members: []string{
                                    "dolorem",
                                },
                                Role: sdk.String("dolor"),
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("qui"),
                                    Expression: sdk.String("ipsum"),
                                    Location: sdk.String("hic"),
                                    Title: sdk.String("Ms."),
                                },
                                Members: []string{
                                    "voluptate",
                                    "dignissimos",
                                    "reiciendis",
                                },
                                Role: sdk.String("amet"),
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("dolorum"),
                                    Expression: sdk.String("numquam"),
                                    Location: sdk.String("veritatis"),
                                    Title: sdk.String("Mr."),
                                },
                                Members: []string{
                                    "iure",
                                },
                                Role: sdk.String("odio"),
                            },
                        },
                        Etag: sdk.String("quaerat"),
                        Version: sdk.Int(881005),
                    },
                },
            },
            ResultsSummary: &shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary{
                DifferenceCount: sdk.Int(696344),
                ErrorCount: sdk.Int(976405),
                LogCount: sdk.Int(377752),
                NewestDate: &shared.GoogleTypeDate{
                    Day: sdk.Int(617658),
                    Month: sdk.Int(179603),
                    Year: sdk.Int(542499),
                },
                OldestDate: &shared.GoogleTypeDate{
                    Day: sdk.Int(24678),
                    Month: sdk.Int(854614),
                    Year: sdk.Int(67249),
                },
                UnchangedCount: sdk.Int(743835),
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("omnis"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.PolicysimulatorProjectsLocationsReplaysCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## PolicysimulatorProjectsLocationsReplaysOperationsList

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
    res, err := s.Projects.PolicysimulatorProjectsLocationsReplaysOperationsList(ctx, operations.PolicysimulatorProjectsLocationsReplaysOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("eius"),
        Filter: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        Name: "Marianne Thompson",
        OauthToken: sdk.String("suscipit"),
        PageSize: sdk.Int64(645785),
        PageToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("totam"),
    }, operations.PolicysimulatorProjectsLocationsReplaysOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```

## PolicysimulatorProjectsLocationsReplaysResultsList

Lists the results of running a Replay.

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
    res, err := s.Projects.PolicysimulatorProjectsLocationsReplaysResultsList(ctx, operations.PolicysimulatorProjectsLocationsReplaysResultsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("quod"),
        PageSize: sdk.Int64(885338),
        PageToken: sdk.String("qui"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("harum"),
    }, operations.PolicysimulatorProjectsLocationsReplaysResultsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPolicysimulatorV1ListReplayResultsResponse != nil {
        // handle response
    }
}
```
