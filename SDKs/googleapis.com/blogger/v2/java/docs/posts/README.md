# posts

### Available Operations

* [bloggerPostsGet](#bloggerpostsget) - Gets a post by blog id and post id
* [bloggerPostsList](#bloggerpostslist) - Lists posts.

## bloggerPostsGet

Gets a post by blog id and post id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostsGetRequest;
import org.openapis.openapi.models.operations.BloggerPostsGetResponse;
import org.openapis.openapi.models.operations.BloggerPostsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostsGetRequest req = new BloggerPostsGetRequest("nemo", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "doloribus";
                key = "sapiente";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "dolorem";
                uploadProtocol = "culpa";
            }};            

            BloggerPostsGetResponse res = sdk.posts.bloggerPostsGet(req, new BloggerPostsGetSecurity("consequuntur", "repellat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.post != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPostsList

Lists posts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostsListRequest;
import org.openapis.openapi.models.operations.BloggerPostsListResponse;
import org.openapis.openapi.models.operations.BloggerPostsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostsListRequest req = new BloggerPostsListRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fetchBodies = false;
                fields = "molestiae";
                key = "velit";
                maxResults = 623510L;
                oauthToken = "quia";
                pageToken = "quis";
                prettyPrint = false;
                quotaUser = "vitae";
                startDate = "laborum";
                uploadType = "animi";
                uploadProtocol = "enim";
            }};            

            BloggerPostsListResponse res = sdk.posts.bloggerPostsList(req, new BloggerPostsListSecurity("odit", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.postList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
