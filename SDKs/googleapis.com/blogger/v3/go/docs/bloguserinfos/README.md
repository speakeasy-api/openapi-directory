# BlogUserInfos

### Available Operations

* [BloggerBlogUserInfosGet](#bloggerbloguserinfosget) - Gets one blog and user info pair by blog id and user id.

## BloggerBlogUserInfosGet

Gets one blog and user info pair by blog id and user id.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BlogUserInfos.BloggerBlogUserInfosGet(ctx, operations.BloggerBlogUserInfosGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "delectus",
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        MaxPosts: sdk.Int64(791725),
        OauthToken: sdk.String("placeat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("excepturi"),
        UserID: "nisi",
    }, operations.BloggerBlogUserInfosGetSecurity{
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
