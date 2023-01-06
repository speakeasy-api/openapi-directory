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
            Scope: "voluptas",
        },
        QueryParams: operations.CloudassetIamPoliciesSearchAllQueryParams{
            DollarXgafv: "2",
            AccessToken: "accusantium",
            Alt: "proto",
            Callback: "placeat",
            Fields: "temporibus",
            Key: "ut",
            OauthToken: "odio",
            PageSize: 9009661000501843419,
            PageToken: "omnis",
            PrettyPrint: false,
            Query: "debitis",
            QuotaUser: "suscipit",
            UploadType: "nihil",
            UploadProtocol: "officia",
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