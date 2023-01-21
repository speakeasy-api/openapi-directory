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
            BlogID: "sit",
            UserID: "voluptas",
        },
        QueryParams: operations.BloggerBlogUserInfosGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "expedita",
            Alt: "proto",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            MaxPosts: 8274930044578894929,
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
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