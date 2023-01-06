<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "deserunt",
        },
        QueryParams: operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "beatae",
            Alt: "json",
            Callback: "rerum",
            Fields: "nihil",
            Key: "animi",
            OauthToken: "alias",
            PrettyPrint: true,
            QuotaUser: "saepe",
            UploadType: "tenetur",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleCloudPolicysimulatorV1beta1ReplayInput{
            Config: &shared.GoogleCloudPolicysimulatorV1beta1ReplayConfig{
                LogSource: "RECENT_ACCESSES",
                PolicyOverlay: map[string]shared.GoogleIamV1Policy{
                    "deserunt": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "ut",
                                            "nam",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "qui",
                                            "quod",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                },
                                Service: "mollitia",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "ipsa",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "suscipit",
                                            "quaerat",
                                            "quisquam",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                },
                                Service: "culpa",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "est",
                                    Expression: "consequatur",
                                    Location: "delectus",
                                    Title: "pariatur",
                                },
                                Members: []string{
                                    "illum",
                                    "voluptas",
                                },
                                Role: "ea",
                            },
                        },
                        Etag: "velit",
                        Version: 7876716416154225660,
                    },
                    "amet": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "libero",
                                            "recusandae",
                                            "inventore",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                },
                                Service: "dolor",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "et",
                                            "assumenda",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                },
                                Service: "est",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "voluptas",
                                    Expression: "voluptatibus",
                                    Location: "nesciunt",
                                    Title: "quasi",
                                },
                                Members: []string{
                                    "quam",
                                    "labore",
                                    "eveniet",
                                },
                                Role: "similique",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "quia",
                                    Expression: "et",
                                    Location: "exercitationem",
                                    Title: "quod",
                                },
                                Members: []string{
                                    "magnam",
                                },
                                Role: "iste",
                            },
                        },
                        Etag: "fuga",
                        Version: 9159538837741665431,
                    },
                },
            },
            ResultsSummary: &shared.GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary{
                DifferenceCount: 4812891310758310104,
                ErrorCount: 3651553649710107286,
                LogCount: 776958749886165584,
                NewestDate: &shared.GoogleTypeDate{
                    Day: 2972447337519991991,
                    Month: 5344022812337031526,
                    Year: 1726851175559612443,
                },
                OldestDate: &shared.GoogleTypeDate{
                    Day: 1118524486210013976,
                    Month: 4671388267200997225,
                    Year: 1904814060164949035,
                },
                UnchangedCount: 6300662986209687778,
            },
        },
    }
    
    res, err := s.Projects.PolicysimulatorProjectsLocationsReplaysCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->