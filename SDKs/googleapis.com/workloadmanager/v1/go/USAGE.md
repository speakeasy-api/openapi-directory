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
            Parent: "perspiciatis",
        },
        QueryParams: operations.WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "aut",
            Alt: "json",
            Callback: "vero",
            EvaluationID: "quibusdam",
            Fields: "qui",
            Key: "sint",
            OauthToken: "ullam",
            PrettyPrint: false,
            QuotaUser: "eos",
            RequestID: "et",
            UploadType: "voluptas",
            UploadProtocol: "qui",
        },
        Request: &shared.EvaluationInput{
            Description: "ab",
            Labels: map[string]string{
                "deleniti": "mollitia",
                "dolore": "neque",
                "quo": "dolor",
            },
            Name: "quasi",
            ResourceFilter: &shared.ResourceFilter{
                GceInstanceFilter: &shared.GceInstanceFilter{
                    ServiceAccounts: []string{
                        "vel",
                        "in",
                    },
                },
                InclusionLabels: map[string]string{
                    "omnis": "neque",
                    "beatae": "temporibus",
                },
                ResourceIDPatterns: []string{
                    "et",
                    "enim",
                    "in",
                },
                Scopes: []string{
                    "in",
                    "et",
                },
            },
            ResourceStatus: &shared.ResourceStatus{
                RulesNewerVersions: []string{
                    "sint",
                    "tempora",
                },
                State: "ACTIVE",
            },
            RuleNames: []string{
                "assumenda",
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