# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/blogger/v3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BloggerBlogUserInfosGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    blog_id="quibusdam",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    max_posts=847252,
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
    user_id="iure",
)
    
res = s.blog_user_infos.blogger_blog_user_infos_get(req, operations.BloggerBlogUserInfosGetSecurity(
    option1=operations.BloggerBlogUserInfosGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.blog_user_info is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### blog_user_infos

* `blogger_blog_user_infos_get` - Gets one blog and user info pair by blog id and user id.

### blogs

* `blogger_blogs_get` - Gets a blog by id.
* `blogger_blogs_get_by_url` - Gets a blog by url.
* `blogger_blogs_list_by_user` - Lists blogs by user.

### comments

* `blogger_comments_approve` - Marks a comment as not spam by blog id, post id and comment id.
* `blogger_comments_delete` - Deletes a comment by blog id, post id and comment id.
* `blogger_comments_get` - Gets a comment by id.
* `blogger_comments_list` - Lists comments.
* `blogger_comments_list_by_blog` - Lists comments by blog.
* `blogger_comments_mark_as_spam` - Marks a comment as spam by blog id, post id and comment id.
* `blogger_comments_remove_content` - Removes the content of a comment by blog id, post id and comment id.

### page_views

* `blogger_page_views_get` - Gets page views by blog id.

### pages

* `blogger_pages_delete` - Deletes a page by blog id and page id.
* `blogger_pages_get` - Gets a page by blog id and page id.
* `blogger_pages_insert` - Inserts a page.
* `blogger_pages_list` - Lists pages.
* `blogger_pages_patch` - Patches a page.
* `blogger_pages_publish` - Publishes a page.
* `blogger_pages_revert` - Reverts a published or scheduled page to draft state.
* `blogger_pages_update` - Updates a page by blog id and page id.

### post_user_infos

* `blogger_post_user_infos_get` - Gets one post and user info pair, by post_id and user_id.
* `blogger_post_user_infos_list` - Lists post and user info pairs.

### posts

* `blogger_posts_delete` - Deletes a post by blog id and post id.
* `blogger_posts_get` - Gets a post by blog id and post id
* `blogger_posts_get_by_path` - Gets a post by path.
* `blogger_posts_insert` - Inserts a post.
* `blogger_posts_list` - Lists posts.
* `blogger_posts_patch` - Patches a post.
* `blogger_posts_publish` - Publishes a post.
* `blogger_posts_revert` - Reverts a published or scheduled post to draft state.
* `blogger_posts_search` - Searches for posts matching given query terms in the specified blog.
* `blogger_posts_update` - Updates a post by blog id and post id.

### users

* `blogger_users_get` - Gets one user by user_id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
