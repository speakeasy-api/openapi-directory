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

import org.openapis.openapi.models.operations.BloggerBlogsGetSecurity;
import org.openapis.openapi.models.operations.BloggerBlogsGetPathParams;
import org.openapis.openapi.models.operations.BloggerBlogsGetQueryParams;
import org.openapis.openapi.models.operations.BloggerBlogsGetRequest;
import org.openapis.openapi.models.operations.BloggerBlogsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerBlogsGetRequest req = new BloggerBlogsGetRequest() {{
                security = new BloggerBlogsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BloggerBlogsGetPathParams() {{
                    blogId = "corrupti";
                }};
                queryParams = new BloggerBlogsGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            BloggerBlogsGetResponse res = sdk.blogs.bloggerBlogsGet(req);

            if (res.blog.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### blogs

* `bloggerBlogsGet` - Gets a blog by id.
* `bloggerBlogsList` - Lists blogs by user id, possibly filtered.

### comments

* `bloggerCommentsGet` - Gets a comment by blog id, post id and comment id.
* `bloggerCommentsList` - Lists comments.

### pages

* `bloggerPagesGet` - Gets a page by blog id and page id.
* `bloggerPagesList` - Lists pages.

### posts

* `bloggerPostsGet` - Gets a post by blog id and post id
* `bloggerPostsList` - Lists posts.

### users

* `bloggerUsersGet` - Gets a user by user id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
