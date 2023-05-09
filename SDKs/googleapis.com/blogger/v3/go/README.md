# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/blogger/v3/go
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
    res, err := s.BlogUserInfos.BloggerBlogUserInfosGet(ctx, operations.BloggerBlogUserInfosGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "quibusdam",
        Callback: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        MaxPosts: sdk.Int64(847252),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
        UserID: "iure",
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [BlogUserInfos](docs/bloguserinfos/README.md)

* [BloggerBlogUserInfosGet](docs/bloguserinfos/README.md#bloggerbloguserinfosget) - Gets one blog and user info pair by blog id and user id.

### [Blogs](docs/blogs/README.md)

* [BloggerBlogsGet](docs/blogs/README.md#bloggerblogsget) - Gets a blog by id.
* [BloggerBlogsGetByURL](docs/blogs/README.md#bloggerblogsgetbyurl) - Gets a blog by url.
* [BloggerBlogsListByUser](docs/blogs/README.md#bloggerblogslistbyuser) - Lists blogs by user.

### [Comments](docs/comments/README.md)

* [BloggerCommentsApprove](docs/comments/README.md#bloggercommentsapprove) - Marks a comment as not spam by blog id, post id and comment id.
* [BloggerCommentsDelete](docs/comments/README.md#bloggercommentsdelete) - Deletes a comment by blog id, post id and comment id.
* [BloggerCommentsGet](docs/comments/README.md#bloggercommentsget) - Gets a comment by id.
* [BloggerCommentsList](docs/comments/README.md#bloggercommentslist) - Lists comments.
* [BloggerCommentsListByBlog](docs/comments/README.md#bloggercommentslistbyblog) - Lists comments by blog.
* [BloggerCommentsMarkAsSpam](docs/comments/README.md#bloggercommentsmarkasspam) - Marks a comment as spam by blog id, post id and comment id.
* [BloggerCommentsRemoveContent](docs/comments/README.md#bloggercommentsremovecontent) - Removes the content of a comment by blog id, post id and comment id.

### [PageViews](docs/pageviews/README.md)

* [BloggerPageViewsGet](docs/pageviews/README.md#bloggerpageviewsget) - Gets page views by blog id.

### [Pages](docs/pages/README.md)

* [BloggerPagesDelete](docs/pages/README.md#bloggerpagesdelete) - Deletes a page by blog id and page id.
* [BloggerPagesGet](docs/pages/README.md#bloggerpagesget) - Gets a page by blog id and page id.
* [BloggerPagesInsert](docs/pages/README.md#bloggerpagesinsert) - Inserts a page.
* [BloggerPagesList](docs/pages/README.md#bloggerpageslist) - Lists pages.
* [BloggerPagesPatch](docs/pages/README.md#bloggerpagespatch) - Patches a page.
* [BloggerPagesPublish](docs/pages/README.md#bloggerpagespublish) - Publishes a page.
* [BloggerPagesRevert](docs/pages/README.md#bloggerpagesrevert) - Reverts a published or scheduled page to draft state.
* [BloggerPagesUpdate](docs/pages/README.md#bloggerpagesupdate) - Updates a page by blog id and page id.

### [PostUserInfos](docs/postuserinfos/README.md)

* [BloggerPostUserInfosGet](docs/postuserinfos/README.md#bloggerpostuserinfosget) - Gets one post and user info pair, by post_id and user_id.
* [BloggerPostUserInfosList](docs/postuserinfos/README.md#bloggerpostuserinfoslist) - Lists post and user info pairs.

### [Posts](docs/posts/README.md)

* [BloggerPostsDelete](docs/posts/README.md#bloggerpostsdelete) - Deletes a post by blog id and post id.
* [BloggerPostsGet](docs/posts/README.md#bloggerpostsget) - Gets a post by blog id and post id
* [BloggerPostsGetByPath](docs/posts/README.md#bloggerpostsgetbypath) - Gets a post by path.
* [BloggerPostsInsert](docs/posts/README.md#bloggerpostsinsert) - Inserts a post.
* [BloggerPostsList](docs/posts/README.md#bloggerpostslist) - Lists posts.
* [BloggerPostsPatch](docs/posts/README.md#bloggerpostspatch) - Patches a post.
* [BloggerPostsPublish](docs/posts/README.md#bloggerpostspublish) - Publishes a post.
* [BloggerPostsRevert](docs/posts/README.md#bloggerpostsrevert) - Reverts a published or scheduled post to draft state.
* [BloggerPostsSearch](docs/posts/README.md#bloggerpostssearch) - Searches for posts matching given query terms in the specified blog.
* [BloggerPostsUpdate](docs/posts/README.md#bloggerpostsupdate) - Updates a post by blog id and post id.

### [Users](docs/users/README.md)

* [BloggerUsersGet](docs/users/README.md#bloggerusersget) - Gets one user by user_id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
