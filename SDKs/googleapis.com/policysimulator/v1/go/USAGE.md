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
        Security: operations.PolicysimulatorProjectsLocationsReplaysCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.PolicysimulatorProjectsLocationsReplaysCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GoogleCloudPolicysimulatorV1ReplayInput{
            Config: &shared.GoogleCloudPolicysimulatorV1ReplayConfig{
                LogSource: "LOG_SOURCE_UNSPECIFIED",
                PolicyOverlay: map[string]shared.GoogleIamV1Policy{
                    "magnam": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "tempora",
                                            "suscipit",
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
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "commodi",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "qui",
                                            "impedit",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "ipsum",
                                            "excepturi",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                },
                                Service: "perferendis",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "natus",
                                    Expression: "sed",
                                    Location: "iste",
                                    Title: "Mrs.",
                                },
                                Members: []string{
                                    "laboriosam",
                                    "hic",
                                    "saepe",
                                },
                                Role: "fuga",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "in",
                                    Expression: "corporis",
                                    Location: "iste",
                                    Title: "Ms.",
                                },
                                Members: []string{
                                    "quidem",
                                    "architecto",
                                    "ipsa",
                                    "reiciendis",
                                },
                                Role: "est",
                            },
                        },
                        Etag: "mollitia",
                        Version: 670638,
                    },
                    "dolores": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
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
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "doloribus",
                                    Expression: "sapiente",
                                    Location: "architecto",
                                    Title: "Miss",
                                },
                                Members: []string{
                                    "culpa",
                                },
                                Role: "consequuntur",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "repellat",
                                    Expression: "mollitia",
                                    Location: "occaecati",
                                    Title: "Mrs.",
                                },
                                Members: []string{
                                    "quam",
                                    "molestiae",
                                },
                                Role: "velit",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "error",
                                    Expression: "quia",
                                    Location: "quis",
                                    Title: "Mr.",
                                },
                                Members: []string{
                                    "animi",
                                    "enim",
                                    "odit",
                                },
                                Role: "quo",
                            },
                        },
                        Etag: "sequi",
                        Version: 949572,
                    },
                },
            },
            ResultsSummary: &shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary{
                DifferenceCount: 368725,
                ErrorCount: 662527,
                LogCount: 820994,
                NewestDate: &shared.GoogleTypeDate{
                    Day: 13571,
                    Month: 97101,
                    Year: 622846,
                },
                OldestDate: &shared.GoogleTypeDate{
                    Day: 837945,
                    Month: 673660,
                    Year: 96098,
                },
                UnchangedCount: 971945,
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.PolicysimulatorProjectsLocationsReplaysCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->