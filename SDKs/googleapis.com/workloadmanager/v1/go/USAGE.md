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
            Parent: "sit",
        },
        QueryParams: operations.WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            EvaluationID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
        Request: &shared.EvaluationInput{
            Description: "voluptatum",
            Labels: map[string]string{
                "ut": "dolorem",
            },
            Name: "et",
            ResourceFilter: &shared.ResourceFilter{
                GceInstanceFilter: &shared.GceInstanceFilter{
                    ServiceAccounts: []string{
                        "iste",
                    },
                },
                InclusionLabels: map[string]string{
                    "totam": "dolores",
                },
                ResourceIDPatterns: []string{
                    "debitis",
                    "vel",
                    "odio",
                },
                Scopes: []string{
                    "id",
                    "aspernatur",
                },
            },
            ResourceStatus: &shared.ResourceStatus{
                RulesNewerVersions: []string{
                    "totam",
                    "commodi",
                    "quis",
                },
                State: "CREATING",
            },
            RuleNames: []string{
                "odit",
                "non",
                "voluptas",
            },
        },
    }
    
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->