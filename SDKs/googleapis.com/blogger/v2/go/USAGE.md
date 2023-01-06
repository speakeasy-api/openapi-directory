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
    
    req := operations.BloggerBlogsGetRequest{
        Security: operations.BloggerBlogsGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BloggerBlogsGetPathParams{
            BlogID: "et",
        },
        QueryParams: operations.BloggerBlogsGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "nihil",
            Alt: "json",
            Callback: "esse",
            Fields: "eum",
            Key: "pariatur",
            OauthToken: "sed",
            PrettyPrint: true,
            QuotaUser: "perferendis",
            UploadType: "aperiam",
            UploadProtocol: "dolorem",
        },
    }
    
    res, err := s.Blogs.BloggerBlogsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Blog != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->