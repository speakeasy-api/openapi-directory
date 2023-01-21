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
            Scope: "sit",
        },
        QueryParams: operations.CloudassetIamPoliciesSearchAllQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PageSize: 8274930044578894929,
            PageToken: "et",
            PrettyPrint: true,
            Query: "rerum",
            QuotaUser: "dicta",
            UploadType: "debitis",
            UploadProtocol: "voluptatum",
        },
    }
    
    res, err := s.IamPolicies.CloudassetIamPoliciesSearchAll(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAllIamPoliciesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->