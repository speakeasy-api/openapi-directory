# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BloggerBlogUserInfosGetSecurityOption1;
import org.openapis.openapi.models.operations.BloggerBlogUserInfosGetSecurityOption2;
import org.openapis.openapi.models.operations.BloggerBlogUserInfosGetSecurity;
import org.openapis.openapi.models.operations.BloggerBlogUserInfosGetPathParams;
import org.openapis.openapi.models.operations.BloggerBlogUserInfosGetQueryParams;
import org.openapis.openapi.models.operations.BloggerBlogUserInfosGetRequest;
import org.openapis.openapi.models.operations.BloggerBlogUserInfosGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerBlogUserInfosGetRequest req = new BloggerBlogUserInfosGetRequest() {{
                security = new BloggerBlogUserInfosGetSecurity() {{
                    option1 = new BloggerBlogUserInfosGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new BloggerBlogUserInfosGetPathParams() {{
                    blogId = "corrupti";
                    userId = "provident";
                }};
                queryParams = new BloggerBlogUserInfosGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quibusdam";
                    alt = "media";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    maxPosts = 423655;
                    oauthToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            BloggerBlogUserInfosGetResponse res = sdk.blogUserInfos.bloggerBlogUserInfosGet(req);

            if (res.blogUserInfo.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### blogUserInfos

* `bloggerBlogUserInfosGet` - Gets one blog and user info pair by blog id and user id.

### blogs

* `bloggerBlogsGet` - Gets a blog by id.
* `bloggerBlogsGetByUrl` - Gets a blog by url.
* `bloggerBlogsListByUser` - Lists blogs by user.

### comments

* `bloggerCommentsApprove` - Marks a comment as not spam by blog id, post id and comment id.
* `bloggerCommentsDelete` - Deletes a comment by blog id, post id and comment id.
* `bloggerCommentsGet` - Gets a comment by id.
* `bloggerCommentsList` - Lists comments.
* `bloggerCommentsListByBlog` - Lists comments by blog.
* `bloggerCommentsMarkAsSpam` - Marks a comment as spam by blog id, post id and comment id.
* `bloggerCommentsRemoveContent` - Removes the content of a comment by blog id, post id and comment id.

### pageViews

* `bloggerPageViewsGet` - Gets page views by blog id.

### pages

* `bloggerPagesDelete` - Deletes a page by blog id and page id.
* `bloggerPagesGet` - Gets a page by blog id and page id.
* `bloggerPagesInsert` - Inserts a page.
* `bloggerPagesList` - Lists pages.
* `bloggerPagesPatch` - Patches a page.
* `bloggerPagesPublish` - Publishes a page.
* `bloggerPagesRevert` - Reverts a published or scheduled page to draft state.
* `bloggerPagesUpdate` - Updates a page by blog id and page id.

### postUserInfos

* `bloggerPostUserInfosGet` - Gets one post and user info pair, by post_id and user_id.
* `bloggerPostUserInfosList` - Lists post and user info pairs.

### posts

* `bloggerPostsDelete` - Deletes a post by blog id and post id.
* `bloggerPostsGet` - Gets a post by blog id and post id
* `bloggerPostsGetByPath` - Gets a post by path.
* `bloggerPostsInsert` - Inserts a post.
* `bloggerPostsList` - Lists posts.
* `bloggerPostsPatch` - Patches a post.
* `bloggerPostsPublish` - Publishes a post.
* `bloggerPostsRevert` - Reverts a published or scheduled post to draft state.
* `bloggerPostsSearch` - Searches for posts matching given query terms in the specified blog.
* `bloggerPostsUpdate` - Updates a post by blog id and post id.

### users

* `bloggerUsersGet` - Gets one user by user_id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
