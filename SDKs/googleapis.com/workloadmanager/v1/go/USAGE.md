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

    req := operations.WorkloadmanagerProjectsLocationsEvaluationsCreateRequest{
        Security: operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.WorkloadmanagerProjectsLocationsEvaluationsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            EvaluationID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.EvaluationInput{
            Description: "ullam",
            Labels: map[string]string{
                "inventore": "sapiente",
                "enim": "eum",
                "voluptatum": "autem",
                "vel": "non",
            },
            Name: "deleniti",
            ResourceFilter: &shared.ResourceFilter{
                GceInstanceFilter: &shared.GceInstanceFilter{
                    ServiceAccounts: []string{
                        "reprehenderit",
                        "molestiae",
                        "quo",
                    },
                },
                InclusionLabels: map[string]string{
                    "laboriosam": "dicta",
                },
                ResourceIDPatterns: []string{
                    "voluptatem",
                    "consequatur",
                    "fugiat",
                },
                Scopes: []string{
                    "omnis",
                    "eos",
                    "accusamus",
                    "accusamus",
                },
            },
            ResourceStatus: &shared.ResourceStatus{
                RulesNewerVersions: []string{
                    "rem",
                    "quibusdam",
                    "et",
                    "praesentium",
                },
                State: "ACTIVE",
            },
            RuleNames: []string{
                "soluta",
                "sed",
                "quisquam",
                "rerum",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->