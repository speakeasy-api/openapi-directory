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
            UserID: "et",
        },
        QueryParams: operations.BloggerBlogUserInfosGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "ut",
            Alt: "media",
            Callback: "et",
            Fields: "sint",
            Key: "reiciendis",
            MaxPosts: 7414068409150291056,
            OauthToken: "nihil",
            PrettyPrint: true,
            QuotaUser: "dolore",
            UploadType: "placeat",
            UploadProtocol: "ut",
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