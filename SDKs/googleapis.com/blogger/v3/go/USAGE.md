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
    
    req := operations.BloggerBlogUserInfosGetRequest{
        Security: operations.BloggerBlogUserInfosGetSecurity{
            Option1: &operations.BloggerBlogUserInfosGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.BloggerBlogUserInfosGetPathParams{
            BlogID: "ut",
            UserID: "occaecati",
        },
        QueryParams: operations.BloggerBlogUserInfosGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "aspernatur",
            Alt: "json",
            Callback: "maxime",
            Fields: "voluptas",
            Key: "facere",
            MaxPosts: 1266950290742665870,
            OauthToken: "sit",
            PrettyPrint: false,
            QuotaUser: "reiciendis",
            UploadType: "hic",
            UploadProtocol: "et",
        },
    }
    
    res, err := s.BlogUserInfos.BloggerBlogUserInfosGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BlogUserInfo != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->