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
            Parent: "voluptatibus",
        },
        QueryParams: operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "in",
            Alt: "media",
            Callback: "provident",
            Fields: "itaque",
            Key: "sed",
            OauthToken: "illo",
            PrettyPrint: true,
            QuotaUser: "minima",
            UploadType: "nam",
            UploadProtocol: "in",
        },
        Request: &shared.GoogleCloudPolicysimulatorV1ReplayInput{
            Config: &shared.GoogleCloudPolicysimulatorV1ReplayConfig{
                LogSource: "LOG_SOURCE_UNSPECIFIED",
                PolicyOverlay: map[string]shared.GoogleIamV1Policy{
                    "dolorum": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "id",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                },
                                Service: "est",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "sunt",
                                            "sit",
                                            "adipisci",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "beatae",
                                            "rem",
                                            "vero",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                },
                                Service: "placeat",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "consequuntur",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "placeat",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "officiis",
                                            "error",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                },
                                Service: "hic",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "quidem",
                                    Expression: "cum",
                                    Location: "qui",
                                    Title: "est",
                                },
                                Members: []string{
                                    "non",
                                    "beatae",
                                    "nisi",
                                },
                                Role: "molestias",
                            },
                        },
                        Etag: "voluptate",
                        Version: 1842414433445382149,
                    },
                },
            },
            ResultsSummary: &shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary{
                DifferenceCount: 4890125725358783375,
                ErrorCount: 8998515407898335770,
                LogCount: 6300255120863348113,
                NewestDate: &shared.GoogleTypeDate{
                    Day: 4291092762265598371,
                    Month: 7763248858195676002,
                    Year: 9220508215673052645,
                },
                OldestDate: &shared.GoogleTypeDate{
                    Day: 2064081863911492967,
                    Month: 4229773279581244754,
                    Year: 3791673220967892561,
                },
                UnchangedCount: 2862788932979735360,
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