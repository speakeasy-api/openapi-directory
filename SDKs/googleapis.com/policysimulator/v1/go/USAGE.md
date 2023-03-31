<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.PolicysimulatorProjectsLocationsReplaysCreateRequest{
        DollarXgafv: "2",
        GoogleCloudPolicysimulatorV1ReplayInput: &shared.GoogleCloudPolicysimulatorV1ReplayInput{
            Config: &shared.GoogleCloudPolicysimulatorV1ReplayConfig{
                LogSource: "RECENT_ACCESSES",
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
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "iure",
                                            "magnam",
                                        },
                                        LogType: "DATA_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "delectus",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "molestiae",
                                            "minus",
                                        },
                                        LogType: "DATA_READ",
                                    },
                                },
                                Service: "voluptatum",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "nisi",
                                            "recusandae",
                                            "temporibus",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "veritatis",
                                            "deserunt",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                },
                                Service: "ipsam",
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
                                        LogType: "DATA_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "quod",
                                            "quod",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "porro",
                                            "dolorum",
                                            "dicta",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "occaecati",
                                            "fugit",
                                            "deleniti",
                                        },
                                        LogType: "DATA_READ",
                                    },
                                },
                                Service: "optio",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "beatae",
                                    Expression: "commodi",
                                    Location: "molestiae",
                                    Title: "Mrs.",
                                },
                                Members: []string{
                                    "impedit",
                                },
                                Role: "cum",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "esse",
                                    Expression: "ipsum",
                                    Location: "excepturi",
                                    Title: "Mr.",
                                },
                                Members: []string{
                                    "ad",
                                },
                                Role: "natus",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "sed",
                                    Expression: "iste",
                                    Location: "dolor",
                                    Title: "Miss",
                                },
                                Members: []string{
                                    "hic",
                                    "saepe",
                                },
                                Role: "fuga",
                            },
                        },
                        Etag: "in",
                        Version: 359508,
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
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "laborum",
                                            "dolores",
                                            "dolorem",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "nobis",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "nemo",
                                            "minima",
                                            "excepturi",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                },
                                Service: "iure",
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
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "repellat",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "numquam",
                                            "commodi",
                                            "quam",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                },
                                Service: "velit",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "quia",
                                    Expression: "quis",
                                    Location: "vitae",
                                    Title: "Miss",
                                },
                                Members: []string{
                                    "enim",
                                    "odit",
                                    "quo",
                                },
                                Role: "sequi",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "tenetur",
                                    Expression: "ipsam",
                                    Location: "id",
                                    Title: "Dr.",
                                },
                                Members: []string{
                                    "quasi",
                                },
                                Role: "error",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "temporibus",
                                    Expression: "laborum",
                                    Location: "quasi",
                                    Title: "Dr.",
                                },
                                Members: []string{
                                    "vero",
                                    "nihil",
                                    "praesentium",
                                    "voluptatibus",
                                },
                                Role: "ipsa",
                            },
                        },
                        Etag: "omnis",
                        Version: 451159,
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
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                },
                                Service: "corporis",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "iusto",
                                    Expression: "dicta",
                                    Location: "harum",
                                    Title: "Mrs.",
                                },
                                Members: []string{
                                    "commodi",
                                    "repudiandae",
                                    "quae",
                                    "ipsum",
                                },
                                Role: "quidem",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "molestias",
                                    Expression: "excepturi",
                                    Location: "pariatur",
                                    Title: "Mrs.",
                                },
                                Members: []string{
                                    "rem",
                                    "voluptates",
                                    "quasi",
                                },
                                Role: "repudiandae",
                            },
                        },
                        Etag: "sint",
                        Version: 83112,
                    },
                },
            },
            ResultsSummary: &shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary{
                DifferenceCount: 929297,
                ErrorCount: 277718,
                LogCount: 318569,
                NewestDate: &shared.GoogleTypeDate{
                    Day: 9356,
                    Month: 667411,
                    Year: 842342,
                },
                OldestDate: &shared.GoogleTypeDate{
                    Day: 131797,
                    Month: 647174,
                    Year: 716327,
                },
                UnchangedCount: 841386,
            },
        },
        AccessToken: "labore",
        Alt: "json",
        Callback: "qui",
        Fields: "aliquid",
        Key: "cupiditate",
        OauthToken: "quos",
        Parent: "perferendis",
        PrettyPrint: false,
        QuotaUser: "magni",
        UploadType: "assumenda",
        UploadProtocol: "ipsam",
    }

    ctx := context.Background()
    res, err := s.Projects.PolicysimulatorProjectsLocationsReplaysCreate(ctx, req, operations.PolicysimulatorProjectsLocationsReplaysCreateSecurity{
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