# V1p4beta1

### Available Operations

* [CloudassetAnalyzeIamPolicy](#cloudassetanalyzeiampolicy) - Analyzes IAM policies to answer which identities have what accesses on which resources.
* [CloudassetExportIamPolicyAnalysis](#cloudassetexportiampolicyanalysis) - Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.

## CloudassetAnalyzeIamPolicy

Analyzes IAM policies to answer which identities have what accesses on which resources.

### Example Usage

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
    res, err := s.V1p4beta1.CloudassetAnalyzeIamPolicy(ctx, operations.CloudassetAnalyzeIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AnalysisQueryAccessSelectorPermissions: []string{
            "recusandae",
            "temporibus",
        },
        AnalysisQueryAccessSelectorRoles: []string{
            "quis",
        },
        AnalysisQueryIdentitySelectorIdentity: sdk.String("veritatis"),
        AnalysisQueryResourceSelectorFullResourceName: sdk.String("deserunt"),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("sapiente"),
        OptionsAnalyzeServiceAccountImpersonation: sdk.Bool(false),
        OptionsExecutionTimeout: sdk.String("quo"),
        OptionsExpandGroups: sdk.Bool(false),
        OptionsExpandResources: sdk.Bool(false),
        OptionsExpandRoles: sdk.Bool(false),
        OptionsOutputGroupEdges: sdk.Bool(false),
        OptionsOutputResourceEdges: sdk.Bool(false),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.CloudassetAnalyzeIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeIamPolicyResponse != nil {
        // handle response
    }
}
```

## CloudassetExportIamPolicyAnalysis

Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.

### Example Usage

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
    res, err := s.V1p4beta1.CloudassetExportIamPolicyAnalysis(ctx, operations.CloudassetExportIamPolicyAnalysisRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ExportIamPolicyAnalysisRequest: &shared.ExportIamPolicyAnalysisRequest{
            AnalysisQuery: &shared.IamPolicyAnalysisQuery{
                AccessSelector: &shared.AccessSelector{
                    Permissions: []string{
                        "quod",
                        "esse",
                        "totam",
                        "porro",
                    },
                    Roles: []string{
                        "dicta",
                        "nam",
                        "officia",
                    },
                },
                IdentitySelector: &shared.IdentitySelector{
                    Identity: sdk.String("occaecati"),
                },
                Parent: sdk.String("fugit"),
                ResourceSelector: &shared.ResourceSelector{
                    FullResourceName: sdk.String("deleniti"),
                },
            },
            Options: &shared.Options{
                AnalyzeServiceAccountImpersonation: sdk.Bool(false),
                ExpandGroups: sdk.Bool(false),
                ExpandResources: sdk.Bool(false),
                ExpandRoles: sdk.Bool(false),
                OutputGroupEdges: sdk.Bool(false),
                OutputResourceEdges: sdk.Bool(false),
            },
            OutputConfig: &shared.IamPolicyAnalysisOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    URI: sdk.String("https://sizzling-locust.com"),
                },
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("cum"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.CloudassetExportIamPolicyAnalysisSecurity{
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
