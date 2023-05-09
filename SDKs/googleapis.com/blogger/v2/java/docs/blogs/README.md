# blogs

### Available Operations

* [bloggerBlogsGet](#bloggerblogsget) - Gets a blog by id.
* [bloggerBlogsList](#bloggerblogslist) - Lists blogs by user id, possibly filtered.

## bloggerBlogsGet

Gets a blog by id.

### Example Usage

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

            BloggerBlogsGetRequest req = new BloggerBlogsGetRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            BloggerBlogsGetResponse res = sdk.blogs.bloggerBlogsGet(req, new BloggerBlogsGetSecurity("excepturi", "nisi") {{
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

## bloggerBlogsList

Lists blogs by user id, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerBlogsListRequest;
import org.openapis.openapi.models.operations.BloggerBlogsListResponse;
import org.openapis.openapi.models.operations.BloggerBlogsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerBlogsListRequest req = new BloggerBlogsListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "sapiente";
                uploadProtocol = "quo";
            }};            

            BloggerBlogsListResponse res = sdk.blogs.bloggerBlogsList(req, new BloggerBlogsListSecurity("odit", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.blogList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
