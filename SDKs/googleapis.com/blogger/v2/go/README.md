# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/blogger/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Blogs.BloggerBlogsGet(ctx, operations.BloggerBlogsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "quibusdam",
        Callback: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.BloggerBlogsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Blog != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Blogs](docs/blogs/README.md)

* [BloggerBlogsGet](docs/blogs/README.md#bloggerblogsget) - Gets a blog by id.
* [BloggerBlogsList](docs/blogs/README.md#bloggerblogslist) - Lists blogs by user id, possibly filtered.

### [Comments](docs/comments/README.md)

* [BloggerCommentsGet](docs/comments/README.md#bloggercommentsget) - Gets a comment by blog id, post id and comment id.
* [BloggerCommentsList](docs/comments/README.md#bloggercommentslist) - Lists comments.

### [Pages](docs/pages/README.md)

* [BloggerPagesGet](docs/pages/README.md#bloggerpagesget) - Gets a page by blog id and page id.
* [BloggerPagesList](docs/pages/README.md#bloggerpageslist) - Lists pages.

### [Posts](docs/posts/README.md)

* [BloggerPostsGet](docs/posts/README.md#bloggerpostsget) - Gets a post by blog id and post id
* [BloggerPostsList](docs/posts/README.md#bloggerpostslist) - Lists posts.

### [Users](docs/users/README.md)

* [BloggerUsersGet](docs/users/README.md#bloggerusersget) - Gets a user by user id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
