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
            Scope: "eveniet",
        },
        QueryParams: operations.CloudassetIamPoliciesSearchAllQueryParams{
            DollarXgafv: "2",
            AccessToken: "in",
            Alt: "media",
            Callback: "vitae",
            Fields: "ut",
            Key: "magni",
            OauthToken: "reiciendis",
            PageSize: 1379337464305259067,
            PageToken: "nesciunt",
            PrettyPrint: false,
            Query: "ut",
            QuotaUser: "magni",
            UploadType: "architecto",
            UploadProtocol: "alias",
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