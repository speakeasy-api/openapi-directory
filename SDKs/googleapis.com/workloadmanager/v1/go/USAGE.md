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
            Parent: "sed",
        },
        QueryParams: operations.WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "soluta",
            Alt: "proto",
            Callback: "amet",
            EvaluationID: "pariatur",
            Fields: "laboriosam",
            Key: "et",
            OauthToken: "consequatur",
            PrettyPrint: false,
            QuotaUser: "dolorem",
            RequestID: "animi",
            UploadType: "molestiae",
            UploadProtocol: "ipsa",
        },
        Request: &shared.EvaluationInput{
            Description: "quasi",
            Labels: map[string]string{
                "voluptatibus": "voluptas",
                "quos": "est",
                "saepe": "quo",
            },
            Name: "enim",
            ResourceFilter: &shared.ResourceFilter{
                GceInstanceFilter: &shared.GceInstanceFilter{
                    ServiceAccounts: []string{
                        "asperiores",
                        "quibusdam",
                    },
                },
                InclusionLabels: map[string]string{
                    "minima": "maxime",
                    "porro": "blanditiis",
                },
                ResourceIDPatterns: []string{
                    "repellendus",
                    "asperiores",
                },
                Scopes: []string{
                    "animi",
                    "quaerat",
                },
            },
            ResourceStatus: &shared.ResourceStatus{
                RulesNewerVersions: []string{
                    "qui",
                },
                State: "STATE_UNSPECIFIED",
            },
            RuleNames: []string{
                "qui",
                "quis",
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