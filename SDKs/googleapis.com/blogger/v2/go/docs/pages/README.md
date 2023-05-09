# Pages

### Available Operations

* [BloggerPagesGet](#bloggerpagesget) - Gets a page by blog id and page id.
* [BloggerPagesList](#bloggerpageslist) - Lists pages.

## BloggerPagesGet

Gets a page by blog id and page id.

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
    res, err := s.Pages.BloggerPagesGet(ctx, operations.BloggerPagesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "esse",
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("perferendis"),
        PageID: "ad",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("iste"),
    }, operations.BloggerPagesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## BloggerPagesList

Lists pages.

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
    res, err := s.Pages.BloggerPagesList(ctx, operations.BloggerPagesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BlogID: "hic",
        Callback: sdk.String("saepe"),
        FetchBodies: sdk.Bool(false),
        Fields: sdk.String("fuga"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.BloggerPagesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageList != nil {
        // handle response
    }
}
```
