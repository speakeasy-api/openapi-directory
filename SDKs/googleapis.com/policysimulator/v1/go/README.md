# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/policysimulator/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Parent: "unde",
        },
        QueryParams: operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleCloudPolicysimulatorV1ReplayInput{
            Config: &shared.GoogleCloudPolicysimulatorV1ReplayConfig{
                LogSource: "LOG_SOURCE_UNSPECIFIED",
                PolicyOverlay: map[string]shared.GoogleIamV1Policy{
                    "ullam": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "enim",
                                            "eum",
                                            "voluptatum",
                                            "autem",
                                        },
                                        LogType: "DATA_READ",
                                    },
                                },
                                Service: "non",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "reprehenderit",
                                            "molestiae",
                                            "quo",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "dicta",
                                            "est",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                },
                                Service: "consequatur",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "omnis",
                                            "eos",
                                            "accusamus",
                                            "accusamus",
                                        },
                                        LogType: "DATA_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "quibusdam",
                                            "et",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "dolor",
                                            "soluta",
                                            "sed",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "culpa",
                                            "qui",
                                            "sed",
                                        },
                                        LogType: "DATA_READ",
                                    },
                                },
                                Service: "possimus",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "esse",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "amet",
                                            "est",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "numquam",
                                            "similique",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                },
                                Service: "sit",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "et",
                                    Expression: "voluptatem",
                                    Location: "laborum",
                                    Title: "Dynamic Communications Coordinator",
                                },
                                Members: []string{
                                    "ut",
                                    "soluta",
                                    "qui",
                                    "ea",
                                },
                                Role: "laborum",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "iusto",
                                    Expression: "ut",
                                    Location: "optio",
                                    Title: "Direct Brand Strategist",
                                },
                                Members: []string{
                                    "et",
                                    "libero",
                                    "ipsum",
                                },
                                Role: "non",
                            },
                        },
                        Etag: "ea",
                        Version: 128926,
                    },
                    "placeat": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "quia",
                                            "similique",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "harum",
                                            "doloribus",
                                        },
                                        LogType: "DATA_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "et",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                },
                                Service: "quidem",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "et",
                                            "culpa",
                                            "aliquam",
                                            "esse",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                },
                                Service: "voluptatum",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "fuga",
                                    Expression: "nesciunt",
                                    Location: "laboriosam",
                                    Title: "Direct Branding Technician",
                                },
                                Members: []string{
                                    "eos",
                                    "omnis",
                                },
                                Role: "adipisci",
                            },
                        },
                        Etag: "hic",
                        Version: 368725,
                    },
                },
            },
            ResultsSummary: &shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary{
                DifferenceCount: 662527,
                ErrorCount: 820994,
                LogCount: 13571,
                NewestDate: &shared.GoogleTypeDate{
                    Day: 97101,
                    Month: 622846,
                    Year: 837945,
                },
                OldestDate: &shared.GoogleTypeDate{
                    Day: 673660,
                    Month: 96098,
                    Year: 971945,
                },
                UnchangedCount: 976460,
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Projects

* `PolicysimulatorProjectsLocationsReplaysCreate` - Creates and starts a Replay using the given ReplayConfig.
* `PolicysimulatorProjectsLocationsReplaysOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `PolicysimulatorProjectsLocationsReplaysResultsList` - Lists the results of running a Replay.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
