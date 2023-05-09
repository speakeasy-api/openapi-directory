# blog

### Available Operations

* [getBlogPosts](#getblogposts) - Get blog posts - ordered by created desc by default

## getBlogPosts

Get blog posts - ordered by created desc by default

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlogPostsRequest;
import org.openapis.openapi.models.operations.GetBlogPostsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetBlogPostsRequest req = new GetBlogPostsRequest() {{
                fallback = false;
                locale = "beatae";
                page = 414662L;
                perPage = 473600L;
            }};            

            GetBlogPostsResponse res = sdk.blog.getBlogPosts(req);

            if (res.blogArticleList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
