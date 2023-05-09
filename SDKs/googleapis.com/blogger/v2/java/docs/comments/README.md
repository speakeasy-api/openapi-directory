# comments

### Available Operations

* [bloggerCommentsGet](#bloggercommentsget) - Gets a comment by blog id, post id and comment id.
* [bloggerCommentsList](#bloggercommentslist) - Lists comments.

## bloggerCommentsGet

Gets a comment by blog id, post id and comment id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerCommentsGetRequest;
import org.openapis.openapi.models.operations.BloggerCommentsGetResponse;
import org.openapis.openapi.models.operations.BloggerCommentsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerCommentsGetRequest req = new BloggerCommentsGetRequest("at", "maiores", "molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            BloggerCommentsGetResponse res = sdk.comments.bloggerCommentsGet(req, new BloggerCommentsGetSecurity("fugit", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerCommentsList

Lists comments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerCommentsListRequest;
import org.openapis.openapi.models.operations.BloggerCommentsListResponse;
import org.openapis.openapi.models.operations.BloggerCommentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerCommentsListRequest req = new BloggerCommentsListRequest("hic", "optio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fetchBodies = false;
                fields = "modi";
                key = "qui";
                maxResults = 774234L;
                oauthToken = "cum";
                pageToken = "esse";
                prettyPrint = false;
                quotaUser = "ipsum";
                startDate = "excepturi";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            BloggerCommentsListResponse res = sdk.comments.bloggerCommentsList(req, new BloggerCommentsListSecurity("ad", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.commentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
