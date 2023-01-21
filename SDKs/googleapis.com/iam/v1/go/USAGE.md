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
    
    req := operations.IamIamPoliciesLintPolicyRequest{
        Security: operations.IamIamPoliciesLintPolicySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.IamIamPoliciesLintPolicyQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.LintPolicyRequest{
            Condition: &shared.Expr{
                Description: "rerum",
                Expression: "dicta",
                Location: "debitis",
                Title: "voluptatum",
            },
            FullResourceName: "et",
        },
    }
    
    res, err := s.IamPolicies.IamIamPoliciesLintPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.LintPolicyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->