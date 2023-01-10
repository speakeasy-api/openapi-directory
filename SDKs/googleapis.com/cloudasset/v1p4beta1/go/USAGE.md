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
            Parent: "minus",
        },
        QueryParams: operations.CloudassetAnalyzeIamPolicyQueryParams{
            DollarXgafv: "1",
            AccessToken: "eligendi",
            Alt: "proto",
            AnalysisQueryAccessSelectorPermissions: []string{
                "voluptatem",
                "culpa",
                "voluptas",
            },
            AnalysisQueryAccessSelectorRoles: []string{
                "velit",
                "et",
                "voluptates",
            },
            AnalysisQueryIdentitySelectorIdentity: "sunt",
            AnalysisQueryResourceSelectorFullResourceName: "neque",
            Callback: "iste",
            Fields: "aut",
            Key: "quae",
            OauthToken: "fugit",
            OptionsAnalyzeServiceAccountImpersonation: true,
            OptionsExecutionTimeout: "tempora",
            OptionsExpandGroups: true,
            OptionsExpandResources: true,
            OptionsExpandRoles: true,
            OptionsOutputGroupEdges: false,
            OptionsOutputResourceEdges: true,
            PrettyPrint: false,
            QuotaUser: "reprehenderit",
            UploadType: "iusto",
            UploadProtocol: "ex",
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