<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsCreate(ctx, operations.WorkloadmanagerProjectsLocationsEvaluationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EvaluationInput: &shared.EvaluationInput{
            Description: sdk.String("provident"),
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Name: sdk.String("Doug Hoppe"),
            ResourceFilter: &shared.ResourceFilter{
                GceInstanceFilter: &shared.GceInstanceFilter{
                    ServiceAccounts: []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                },
                InclusionLabels: map[string]string{
                    "minus": "placeat",
                    "voluptatum": "iusto",
                },
                ResourceIDPatterns: []string{
                    "nisi",
                    "recusandae",
                    "temporibus",
                },
                Scopes: []string{
                    "quis",
                },
            },
            ResourceStatus: &shared.ResourceStatus{
                RulesNewerVersions: []string{
                    "deserunt",
                },
                State: shared.ResourceStatusStateEnumStateUnspecified.ToPointer(),
            },
            RuleNames: []string{
                "repellendus",
                "sapiente",
            },
            Schedule: sdk.String("quo"),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        EvaluationID: sdk.String("maiores"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        RequestID: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity{
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