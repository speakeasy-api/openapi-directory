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
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        BlogID: "quibusdam",
        Callback: "unde",
        Fields: "nulla",
        Key: "corrupti",
        MaxPosts: 847252,
        OauthToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
        UserID: "iure",
    }

    ctx := context.Background()
    res, err := s.BlogUserInfos.BloggerBlogUserInfosGet(ctx, req, operations.BloggerBlogUserInfosGetSecurity{
        Option1: &operations.BloggerBlogUserInfosGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BlogUserInfo != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->