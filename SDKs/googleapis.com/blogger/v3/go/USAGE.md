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
            BlogID: "corrupti",
            UserID: "provident",
        },
        QueryParams: operations.BloggerBlogUserInfosGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "quibusdam",
            Alt: "media",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            MaxPosts: 423655,
            OauthToken: "error",
            PrettyPrint: false,
            QuotaUser: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.BlogUserInfos.BloggerBlogUserInfosGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BlogUserInfo != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->