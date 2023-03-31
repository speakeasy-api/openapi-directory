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
        DollarXgafv: "2",
        EvaluationInput: &shared.EvaluationInput{
            Description: "provident",
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Name: "error",
            ResourceFilter: &shared.ResourceFilter{
                GceInstanceFilter: &shared.GceInstanceFilter{
                    ServiceAccounts: []string{
                        "suscipit",
                        "iure",
                        "magnam",
                    },
                },
                InclusionLabels: map[string]string{
                    "ipsa": "delectus",
                    "tempora": "suscipit",
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
                ResourceIDPatterns: []string{
                    "excepturi",
                    "nisi",
                },
                Scopes: []string{
                    "temporibus",
                    "ab",
                    "quis",
                    "veritatis",
                },
            },
            ResourceStatus: &shared.ResourceStatus{
                RulesNewerVersions: []string{
                    "perferendis",
                    "ipsam",
                    "repellendus",
                },
                State: "DELETING",
            },
            RuleNames: []string{
                "odit",
                "at",
                "at",
                "maiores",
            },
        },
        AccessToken: "molestiae",
        Alt: "proto",
        Callback: "quod",
        EvaluationID: "esse",
        Fields: "totam",
        Key: "porro",
        OauthToken: "dolorum",
        Parent: "dicta",
        PrettyPrint: false,
        QuotaUser: "nam",
        RequestID: "officia",
        UploadType: "occaecati",
        UploadProtocol: "fugit",
    }

    ctx := context.Background()
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsCreate(ctx, req, operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->