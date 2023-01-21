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
            Parent: "sit",
        },
        QueryParams: operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleCloudPolicysimulatorV1ReplayInput{
            Config: &shared.GoogleCloudPolicysimulatorV1ReplayConfig{
                LogSource: "RECENT_ACCESSES",
                PolicyOverlay: map[string]shared.GoogleIamV1Policy{
                    "voluptatum": shared.GoogleIamV1Policy{
                        AuditConfigs: []shared.GoogleIamV1AuditConfig{
                            shared.GoogleIamV1AuditConfig{
                                AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "et",
                                            "voluptate",
                                            "iste",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "dolores",
                                            "illum",
                                            "debitis",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                    shared.GoogleIamV1AuditLogConfig{
                                        ExemptedMembers: []string{
                                            "dolore",
                                        },
                                        LogType: "LOG_TYPE_UNSPECIFIED",
                                    },
                                },
                                Service: "aspernatur",
                            },
                        },
                        Bindings: []shared.GoogleIamV1Binding{
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "totam",
                                    Expression: "commodi",
                                    Location: "quis",
                                    Title: "est",
                                },
                                Members: []string{
                                    "odit",
                                    "non",
                                    "voluptas",
                                },
                                Role: "omnis",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "aut",
                                    Expression: "illo",
                                    Location: "sed",
                                    Title: "officiis",
                                },
                                Members: []string{
                                    "consectetur",
                                    "nobis",
                                },
                                Role: "odio",
                            },
                            shared.GoogleIamV1Binding{
                                Condition: &shared.GoogleTypeExpr{
                                    Description: "qui",
                                    Expression: "recusandae",
                                    Location: "at",
                                    Title: "ipsum",
                                },
                                Members: []string{
                                    "modi",
                                    "sint",
                                },
                                Role: "inventore",
                            },
                        },
                        Etag: "ut",
                        Version: 406703151708498928,
                    },
                },
            },
            ResultsSummary: &shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary{
                DifferenceCount: 4756106358532488297,
                ErrorCount: 5837486892148644279,
                LogCount: 4736217237333769909,
                NewestDate: &shared.GoogleTypeDate{
                    Day: 2264299874001785192,
                    Month: 1061380815263676471,
                    Year: 7242748068272024738,
                },
                OldestDate: &shared.GoogleTypeDate{
                    Day: 7719717197379695442,
                    Month: 4112921325496946042,
                    Year: 2671030200101705776,
                },
                UnchangedCount: 3508963237347473586,
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
