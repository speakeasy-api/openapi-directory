# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudasset/v1p4beta1/go
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

    req := operations.CloudassetAnalyzeIamPolicyRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        AnalysisQueryAccessSelectorPermissions: []string{
            "unde",
            "nulla",
            "corrupti",
            "illum",
        },
        AnalysisQueryAccessSelectorRoles: []string{
            "error",
            "deserunt",
        },
        AnalysisQueryIdentitySelectorIdentity: "suscipit",
        AnalysisQueryResourceSelectorFullResourceName: "iure",
        Callback: "magnam",
        Fields: "debitis",
        Key: "ipsa",
        OauthToken: "delectus",
        OptionsAnalyzeServiceAccountImpersonation: false,
        OptionsExecutionTimeout: "tempora",
        OptionsExpandGroups: false,
        OptionsExpandResources: false,
        OptionsExpandRoles: false,
        OptionsOutputGroupEdges: false,
        OptionsOutputResourceEdges: false,
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "molestiae",
        UploadType: "minus",
        UploadProtocol: "placeat",
    }

    ctx := context.Background()
    res, err := s.V1p4beta1.CloudassetAnalyzeIamPolicy(ctx, req, operations.CloudassetAnalyzeIamPolicySecurity{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### V1p4beta1

* `CloudassetAnalyzeIamPolicy` - Analyzes IAM policies to answer which identities have what accesses on which resources.
* `CloudassetExportIamPolicyAnalysis` - Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
