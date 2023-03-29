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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.LintPolicyRequest{
            Condition: &shared.Expr{
                Description: "facilis",
                Expression: "eum",
                Location: "iusto",
                Title: "Product Accountability Associate",
            },
            FullResourceName: "sapiente",
        },
    }

    ctx := context.Background()
    res, err := s.IamPolicies.IamIamPoliciesLintPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.LintPolicyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->