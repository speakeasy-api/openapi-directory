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
            DollarXgafv: "2",
            AccessToken: "doloribus",
            Alt: "json",
            Callback: "excepturi",
            Fields: "id",
            Key: "quo",
            OauthToken: "quia",
            PrettyPrint: true,
            QuotaUser: "eum",
            UploadType: "placeat",
            UploadProtocol: "itaque",
        },
        Request: &shared.LintPolicyRequest{
            Condition: &shared.Expr{
                Description: "impedit",
                Expression: "placeat",
                Location: "esse",
                Title: "sunt",
            },
            FullResourceName: "sapiente",
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