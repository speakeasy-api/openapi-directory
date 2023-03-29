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

    req := operations.CloudassetIamPoliciesSearchAllRequest{
        Security: operations.CloudassetIamPoliciesSearchAllSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudassetIamPoliciesSearchAllPathParams{
            Scope: "unde",
        },
        QueryParams: operations.CloudassetIamPoliciesSearchAllQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PageSize: 423655,
            PageToken: "fuga",
            PrettyPrint: false,
            Query: "facilis",
            QuotaUser: "eum",
            UploadType: "iusto",
            UploadProtocol: "ullam",
        },
    }

    ctx := context.Background()
    res, err := s.IamPolicies.CloudassetIamPoliciesSearchAll(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAllIamPoliciesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->