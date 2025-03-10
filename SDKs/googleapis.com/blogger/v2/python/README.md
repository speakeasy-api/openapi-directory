# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/blogger/v2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BloggerBlogsGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    blog_id="quibusdam",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.blogs.blogger_blogs_get(req, operations.BloggerBlogsGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.blog is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### blogs

* `blogger_blogs_get` - Gets a blog by id.
* `blogger_blogs_list` - Lists blogs by user id, possibly filtered.

### comments

* `blogger_comments_get` - Gets a comment by blog id, post id and comment id.
* `blogger_comments_list` - Lists comments.

### pages

* `blogger_pages_get` - Gets a page by blog id and page id.
* `blogger_pages_list` - Lists pages.

### posts

* `blogger_posts_get` - Gets a post by blog id and post id
* `blogger_posts_list` - Lists posts.

### users

* `blogger_users_get` - Gets a user by user id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
