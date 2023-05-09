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
import org.openapis.openapi.models.operations.BloggerBlogsGetRequest;
import org.openapis.openapi.models.operations.BloggerBlogsGetResponse;
import org.openapis.openapi.models.operations.BloggerBlogsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerBlogsGetRequest req = new BloggerBlogsGetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            BloggerBlogsGetResponse res = sdk.blogs.bloggerBlogsGet(req, new BloggerBlogsGetSecurity("suscipit", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.blog != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [blogs](docs/blogs/README.md)

* [bloggerBlogsGet](docs/blogs/README.md#bloggerblogsget) - Gets a blog by id.
* [bloggerBlogsList](docs/blogs/README.md#bloggerblogslist) - Lists blogs by user id, possibly filtered.

### [comments](docs/comments/README.md)

* [bloggerCommentsGet](docs/comments/README.md#bloggercommentsget) - Gets a comment by blog id, post id and comment id.
* [bloggerCommentsList](docs/comments/README.md#bloggercommentslist) - Lists comments.

### [pages](docs/pages/README.md)

* [bloggerPagesGet](docs/pages/README.md#bloggerpagesget) - Gets a page by blog id and page id.
* [bloggerPagesList](docs/pages/README.md#bloggerpageslist) - Lists pages.

### [posts](docs/posts/README.md)

* [bloggerPostsGet](docs/posts/README.md#bloggerpostsget) - Gets a post by blog id and post id
* [bloggerPostsList](docs/posts/README.md#bloggerpostslist) - Lists posts.

### [users](docs/users/README.md)

* [bloggerUsersGet](docs/users/README.md#bloggerusersget) - Gets a user by user id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
