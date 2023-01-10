# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Parent: "tenetur",
        },
        QueryParams: operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "est",
            Alt: "proto",
            Callback: "aut",
            Fields: "rerum",
            Key: "iure",
            OauthToken: "explicabo",
            PrettyPrint: true,
            QuotaUser: "ducimus",
            UploadType: "nisi",
            UploadProtocol: "ut",
        },
        Request: &shared.GoogleCloudPolicysimulatorV1beta1ReplayInput{
            Config: &shared.GoogleCloudPolicysimulatorV1beta1ReplayConfig{
                LogSource: "LOG_SOURCE_UNSPECIFIED",
                PolicyOverlay: map[string]shared.GoogleIamV1Policy{
                    "reiciendis": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "ut",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                },
                                Service: "tempora",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "id",
                                    Expression: "eos",
                                    Location: "dolores",
                                    Title: "aut",
                                },
                                Members: []string{
                                    "ad",
                                    "dicta",
                                    "neque",
                                },
                                Role: "facere",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "dicta",
                                    Expression: "sed",
                                    Location: "rerum",
                                    Title: "consequatur",
                                },
                                Members: []string{
                                    "quod",
                                },
                                Role: "deleniti",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "molestiae",
                                    Expression: "perferendis",
                                    Location: "qui",
                                    Title: "nulla",
                                },
                                Members: []string{
                                    "expedita",
                                },
                                Role: "tenetur",
                            },
                        },
                        Etag: "omnis",
                        Version: 5999729721690653849,
                    },
                    "quo": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "velit",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "voluptas",
                                            "aut",
                                            "repellat",
                                        },
                                        LogType: "DATA_READ",
                                    },
                                },
                                Service: "eligendi",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "qui",
                                            "nihil",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "quo",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "earum",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                },
                                Service: "officia",
                            },
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "voluptas",
                                            "et",
                                            "sint",
                                        },
                                        LogType: "ADMIN_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "totam",
                                            "atque",
                                            "ut",
                                        },
                                        LogType: "DATA_READ",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "ut",
                                            "ad",
                                        },
                                        LogType: "DATA_WRITE",
                                    },
                                },
                                Service: "molestias",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "impedit",
                                    Expression: "deserunt",
                                    Location: "vero",
                                    Title: "error",
                                },
                                Members: []string{
                                    "beatae",
                                },
                                Role: "qui",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "molestiae",
                                    Expression: "deleniti",
                                    Location: "suscipit",
                                    Title: "aut",
                                },
                                Members: []string{
                                    "labore",
                                    "et",
                                },
                                Role: "omnis",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "blanditiis",
                                    Expression: "itaque",
                                    Location: "doloremque",
                                    Title: "est",
                                },
                                Members: []string{
                                    "est",
                                    "fuga",
                                },
                                Role: "inventore",
                            },
                        },
                        Etag: "impedit",
                        Version: 4818883313715258669,
                    },
                },
            },
            ResultsSummary: &shared.GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary{
                DifferenceCount: 8366996419462768188,
                ErrorCount: 8473441131434798447,
                LogCount: 9063643206236667702,
                NewestDate: &shared.GoogleTypeDate{
                    Day: 6678564548261309100,
                    Month: 4344067411313220386,
                    Year: 5948743529736996933,
                },
                OldestDate: &shared.GoogleTypeDate{
                    Day: 7733308612172317981,
                    Month: 6367668452330419632,
                    Year: 7502313555217038947,
                },
                UnchangedCount: 3760236141729247733,
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `PolicysimulatorProjectsLocationsReplaysCreate` - Creates and starts a Replay using the given ReplayConfig.
* `PolicysimulatorProjectsLocationsReplaysOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `PolicysimulatorProjectsLocationsReplaysResultsList` - Lists the results of running a Replay.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
