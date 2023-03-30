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
        Security: operations.CloudassetAnalyzeIamPolicySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudassetAnalyzeIamPolicyPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.CloudassetAnalyzeIamPolicyQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            AnalysisQueryAccessSelectorPermissions: []string{
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
            PrettyPrint: false,
            QuotaUser: "suscipit",
            UploadType: "molestiae",
            UploadProtocol: "minus",
        },
    }

    ctx := context.Background()
    res, err := s.V1p4beta1.CloudassetAnalyzeIamPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeIamPolicyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->