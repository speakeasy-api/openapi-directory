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