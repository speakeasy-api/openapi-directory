# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogUserInfosGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogUserInfosGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogUserInfosGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BloggerBlogUserInfosGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BloggerBlogUserInfosGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->blogId = 'quibusdam';
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->maxPosts = 847252;
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';
    $request->userId = 'iure';

    $requestSecurity = new BloggerBlogUserInfosGetSecurity();
    $requestSecurity->option1 = new BloggerBlogUserInfosGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->blogUserInfos->bloggerBlogUserInfosGet($request, $requestSecurity);

    if ($response->blogUserInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [blogUserInfos](docs/bloguserinfos/README.md)

* [bloggerBlogUserInfosGet](docs/bloguserinfos/README.md#bloggerbloguserinfosget) - Gets one blog and user info pair by blog id and user id.

### [blogs](docs/blogs/README.md)

* [bloggerBlogsGet](docs/blogs/README.md#bloggerblogsget) - Gets a blog by id.
* [bloggerBlogsGetByUrl](docs/blogs/README.md#bloggerblogsgetbyurl) - Gets a blog by url.
* [bloggerBlogsListByUser](docs/blogs/README.md#bloggerblogslistbyuser) - Lists blogs by user.

### [comments](docs/comments/README.md)

* [bloggerCommentsApprove](docs/comments/README.md#bloggercommentsapprove) - Marks a comment as not spam by blog id, post id and comment id.
* [bloggerCommentsDelete](docs/comments/README.md#bloggercommentsdelete) - Deletes a comment by blog id, post id and comment id.
* [bloggerCommentsGet](docs/comments/README.md#bloggercommentsget) - Gets a comment by id.
* [bloggerCommentsList](docs/comments/README.md#bloggercommentslist) - Lists comments.
* [bloggerCommentsListByBlog](docs/comments/README.md#bloggercommentslistbyblog) - Lists comments by blog.
* [bloggerCommentsMarkAsSpam](docs/comments/README.md#bloggercommentsmarkasspam) - Marks a comment as spam by blog id, post id and comment id.
* [bloggerCommentsRemoveContent](docs/comments/README.md#bloggercommentsremovecontent) - Removes the content of a comment by blog id, post id and comment id.

### [pageViews](docs/pageviews/README.md)

* [bloggerPageViewsGet](docs/pageviews/README.md#bloggerpageviewsget) - Gets page views by blog id.

### [pages](docs/pages/README.md)

* [bloggerPagesDelete](docs/pages/README.md#bloggerpagesdelete) - Deletes a page by blog id and page id.
* [bloggerPagesGet](docs/pages/README.md#bloggerpagesget) - Gets a page by blog id and page id.
* [bloggerPagesInsert](docs/pages/README.md#bloggerpagesinsert) - Inserts a page.
* [bloggerPagesList](docs/pages/README.md#bloggerpageslist) - Lists pages.
* [bloggerPagesPatch](docs/pages/README.md#bloggerpagespatch) - Patches a page.
* [bloggerPagesPublish](docs/pages/README.md#bloggerpagespublish) - Publishes a page.
* [bloggerPagesRevert](docs/pages/README.md#bloggerpagesrevert) - Reverts a published or scheduled page to draft state.
* [bloggerPagesUpdate](docs/pages/README.md#bloggerpagesupdate) - Updates a page by blog id and page id.

### [postUserInfos](docs/postuserinfos/README.md)

* [bloggerPostUserInfosGet](docs/postuserinfos/README.md#bloggerpostuserinfosget) - Gets one post and user info pair, by post_id and user_id.
* [bloggerPostUserInfosList](docs/postuserinfos/README.md#bloggerpostuserinfoslist) - Lists post and user info pairs.

### [posts](docs/posts/README.md)

* [bloggerPostsDelete](docs/posts/README.md#bloggerpostsdelete) - Deletes a post by blog id and post id.
* [bloggerPostsGet](docs/posts/README.md#bloggerpostsget) - Gets a post by blog id and post id
* [bloggerPostsGetByPath](docs/posts/README.md#bloggerpostsgetbypath) - Gets a post by path.
* [bloggerPostsInsert](docs/posts/README.md#bloggerpostsinsert) - Inserts a post.
* [bloggerPostsList](docs/posts/README.md#bloggerpostslist) - Lists posts.
* [bloggerPostsPatch](docs/posts/README.md#bloggerpostspatch) - Patches a post.
* [bloggerPostsPublish](docs/posts/README.md#bloggerpostspublish) - Publishes a post.
* [bloggerPostsRevert](docs/posts/README.md#bloggerpostsrevert) - Reverts a published or scheduled post to draft state.
* [bloggerPostsSearch](docs/posts/README.md#bloggerpostssearch) - Searches for posts matching given query terms in the specified blog.
* [bloggerPostsUpdate](docs/posts/README.md#bloggerpostsupdate) - Updates a post by blog id and post id.

### [users](docs/users/README.md)

* [bloggerUsersGet](docs/users/README.md#bloggerusersget) - Gets one user by user_id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
