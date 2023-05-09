# Posts

### Available Operations

* [BloggerPostsGet](#bloggerpostsget) - Gets a post by blog id and post id
* [BloggerPostsList](#bloggerpostslist) - Lists posts.

## BloggerPostsGet

Gets a post by blog id and post id

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
    res, err := s.Posts.BloggerPostsGet(ctx, operations.BloggerPostsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BlogID: "reiciendis",
        Callback: sdk.String("est"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("dolores"),
        PostID: "dolorem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.BloggerPostsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Post != nil {
        // handle response
    }
}
```

## BloggerPostsList

Lists posts.

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
    res, err := s.Posts.BloggerPostsList(ctx, operations.BloggerPostsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BlogID: "minima",
        Callback: sdk.String("excepturi"),
        FetchBodies: sdk.Bool(false),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("iure"),
        MaxResults: sdk.Int64(634274),
        OauthToken: sdk.String("doloribus"),
        PageToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        StartDate: sdk.String("mollitia"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.BloggerPostsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostList != nil {
        // handle response
    }
}
```
