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
            Parent: "itaque",
        },
        QueryParams: operations.CloudassetAnalyzeIamPolicyQueryParams{
            DollarXgafv: "1",
            AccessToken: "aliquam",
            Alt: "json",
            AnalysisQueryAccessSelectorPermissions: []string{
                "sint",
                "earum",
                "quia",
            },
            AnalysisQueryAccessSelectorRoles: []string{
                "architecto",
                "praesentium",
                "et",
            },
            AnalysisQueryIdentitySelectorIdentity: "magni",
            AnalysisQueryResourceSelectorFullResourceName: "fuga",
            Callback: "dolorum",
            Fields: "rerum",
            Key: "magnam",
            OauthToken: "consectetur",
            OptionsAnalyzeServiceAccountImpersonation: true,
            OptionsExecutionTimeout: "placeat",
            OptionsExpandGroups: false,
            OptionsExpandResources: false,
            OptionsExpandRoles: false,
            OptionsOutputGroupEdges: true,
            OptionsOutputResourceEdges: true,
            PrettyPrint: true,
            QuotaUser: "cum",
            UploadType: "asperiores",
            UploadProtocol: "veritatis",
        },
    }
    
    res, err := s.V1p4beta1.CloudassetAnalyzeIamPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeIamPolicyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->