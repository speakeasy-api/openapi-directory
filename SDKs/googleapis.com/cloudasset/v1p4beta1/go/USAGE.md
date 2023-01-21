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
            Parent: "sit",
        },
        QueryParams: operations.CloudassetAnalyzeIamPolicyQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            AnalysisQueryAccessSelectorPermissions: []string{
                "dolor",
                "expedita",
                "voluptas",
            },
            AnalysisQueryAccessSelectorRoles: []string{
                "et",
            },
            AnalysisQueryIdentitySelectorIdentity: "nihil",
            AnalysisQueryResourceSelectorFullResourceName: "rerum",
            Callback: "dicta",
            Fields: "debitis",
            Key: "voluptatum",
            OauthToken: "et",
            OptionsAnalyzeServiceAccountImpersonation: false,
            OptionsExecutionTimeout: "dolorem",
            OptionsExpandGroups: false,
            OptionsExpandResources: false,
            OptionsExpandRoles: true,
            OptionsOutputGroupEdges: true,
            OptionsOutputResourceEdges: true,
            PrettyPrint: true,
            QuotaUser: "illum",
            UploadType: "debitis",
            UploadProtocol: "vel",
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