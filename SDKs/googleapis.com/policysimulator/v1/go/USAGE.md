<!-- Start SDK Example Usage -->
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudPolicysimulatorV1ReplayInput: &shared.GoogleCloudPolicysimulatorV1ReplayInput{
            Config: &shared.GoogleCloudPolicysimulatorV1ReplayConfig{
                LogSource: shared.GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnumRecentAccesses.ToPointer(),
                PolicyOverlay: map[string]shared.GoogleIamV1Policy{
                    "quibusdam": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "illum",
                                            "vel",
                                            "error",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "iure",
                                            "magnam",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "delectus",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "molestiae",
                                            "minus",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                                    },
                                },
                                Service: sdk.String("voluptatum"),
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "nisi",
                                            "recusandae",
                                            "temporibus",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "veritatis",
                                            "deserunt",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                                    },
                                },
                                Service: sdk.String("ipsam"),
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "quo",
                                            "odit",
                                            "at",
                                            "at",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "quod",
                                            "quod",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "porro",
                                            "dolorum",
                                            "dicta",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "occaecati",
                                            "fugit",
                                            "deleniti",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                                    },
                                },
                                Service: sdk.String("optio"),
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("beatae"),
                                    Expression: sdk.String("commodi"),
                                    Location: sdk.String("molestiae"),
                                    Title: sdk.String("Mrs."),
                                },
                                Members: []string{
                                    "impedit",
                                },
                                Role: sdk.String("cum"),
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
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
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("sed"),
                                    Expression: sdk.String("iste"),
                                    Location: sdk.String("dolor"),
                                    Title: sdk.String("Miss"),
                                },
                                Members: []string{
                                    "hic",
                                    "saepe",
                                },
                                Role: sdk.String("fuga"),
                            },
                        },
                        Etag: sdk.String("in"),
                        Version: sdk.Int(359508),
                    },
                    "iste": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "architecto",
                                            "ipsa",
                                            "reiciendis",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "laborum",
                                            "dolores",
                                            "dolorem",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "nobis",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "nemo",
                                            "minima",
                                            "excepturi",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                                    },
                                },
                                Service: sdk.String("iure"),
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "sapiente",
                                            "architecto",
                                            "mollitia",
                                            "dolorem",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "repellat",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "numquam",
                                            "commodi",
                                            "quam",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                                    },
                                },
                                Service: sdk.String("velit"),
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("quia"),
                                    Expression: sdk.String("quis"),
                                    Location: sdk.String("vitae"),
                                    Title: sdk.String("Miss"),
                                },
                                Members: []string{
                                    "enim",
                                    "odit",
                                    "quo",
                                },
                                Role: sdk.String("sequi"),
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("tenetur"),
                                    Expression: sdk.String("ipsam"),
                                    Location: sdk.String("id"),
                                    Title: sdk.String("Dr."),
                                },
                                Members: []string{
                                    "quasi",
                                },
                                Role: sdk.String("error"),
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("temporibus"),
                                    Expression: sdk.String("laborum"),
                                    Location: sdk.String("quasi"),
                                    Title: sdk.String("Dr."),
                                },
                                Members: []string{
                                    "vero",
                                    "nihil",
                                    "praesentium",
                                    "voluptatibus",
                                },
                                Role: sdk.String("ipsa"),
                            },
                        },
                        Etag: sdk.String("omnis"),
                        Version: sdk.Int(451159),
                    },
                    "cum": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "ut",
                                            "maiores",
                                        },
                                        LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                                    },
                                },
                                Service: sdk.String("corporis"),
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("iusto"),
                                    Expression: sdk.String("dicta"),
                                    Location: sdk.String("harum"),
                                    Title: sdk.String("Mrs."),
                                },
                                Members: []string{
                                    "commodi",
                                    "repudiandae",
                                    "quae",
                                    "ipsum",
                                },
                                Role: sdk.String("quidem"),
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: sdk.String("molestias"),
                                    Expression: sdk.String("excepturi"),
                                    Location: sdk.String("pariatur"),
                                    Title: sdk.String("Mrs."),
                                },
                                Members: []string{
                                    "rem",
                                    "voluptates",
                                    "quasi",
                                },
                                Role: sdk.String("repudiandae"),
                            },
                        },
                        Etag: sdk.String("sint"),
                        Version: sdk.Int(83112),
                    },
                },
            },
            ResultsSummary: &shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary{
                DifferenceCount: sdk.Int(929297),
                ErrorCount: sdk.Int(277718),
                LogCount: sdk.Int(318569),
                NewestDate: &shared.GoogleTypeDate{
                    Day: sdk.Int(9356),
                    Month: sdk.Int(667411),
                    Year: sdk.Int(842342),
                },
                OldestDate: &shared.GoogleTypeDate{
                    Day: sdk.Int(131797),
                    Month: sdk.Int(647174),
                    Year: sdk.Int(716327),
                },
                UnchangedCount: sdk.Int(841386),
            },
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("quos"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("ipsam"),
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
<!-- End SDK Example Usage -->