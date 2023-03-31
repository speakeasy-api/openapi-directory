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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### BlogUserInfos

* `BloggerBlogUserInfosGet` - Gets one blog and user info pair by blog id and user id.

### Blogs

* `BloggerBlogsGet` - Gets a blog by id.
* `BloggerBlogsGetByURL` - Gets a blog by url.
* `BloggerBlogsListByUser` - Lists blogs by user.

### Comments

* `BloggerCommentsApprove` - Marks a comment as not spam by blog id, post id and comment id.
* `BloggerCommentsDelete` - Deletes a comment by blog id, post id and comment id.
* `BloggerCommentsGet` - Gets a comment by id.
* `BloggerCommentsList` - Lists comments.
* `BloggerCommentsListByBlog` - Lists comments by blog.
* `BloggerCommentsMarkAsSpam` - Marks a comment as spam by blog id, post id and comment id.
* `BloggerCommentsRemoveContent` - Removes the content of a comment by blog id, post id and comment id.

### PageViews

* `BloggerPageViewsGet` - Gets page views by blog id.

### Pages

* `BloggerPagesDelete` - Deletes a page by blog id and page id.
* `BloggerPagesGet` - Gets a page by blog id and page id.
* `BloggerPagesInsert` - Inserts a page.
* `BloggerPagesList` - Lists pages.
* `BloggerPagesPatch` - Patches a page.
* `BloggerPagesPublish` - Publishes a page.
* `BloggerPagesRevert` - Reverts a published or scheduled page to draft state.
* `BloggerPagesUpdate` - Updates a page by blog id and page id.

### PostUserInfos

* `BloggerPostUserInfosGet` - Gets one post and user info pair, by post_id and user_id.
* `BloggerPostUserInfosList` - Lists post and user info pairs.

### Posts

* `BloggerPostsDelete` - Deletes a post by blog id and post id.
* `BloggerPostsGet` - Gets a post by blog id and post id
* `BloggerPostsGetByPath` - Gets a post by path.
* `BloggerPostsInsert` - Inserts a post.
* `BloggerPostsList` - Lists posts.
* `BloggerPostsPatch` - Patches a post.
* `BloggerPostsPublish` - Publishes a post.
* `BloggerPostsRevert` - Reverts a published or scheduled post to draft state.
* `BloggerPostsSearch` - Searches for posts matching given query terms in the specified blog.
* `BloggerPostsUpdate` - Updates a post by blog id and post id.

### Users

* `BloggerUsersGet` - Gets one user by user_id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
