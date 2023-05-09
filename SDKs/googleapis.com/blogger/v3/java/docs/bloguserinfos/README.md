# blogUserInfos

### Available Operations

* [bloggerBlogUserInfosGet](#bloggerbloguserinfosget) - Gets one blog and user info pair by blog id and user id.

## bloggerBlogUserInfosGet

Gets one blog and user info pair by blog id and user id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerBlogUserInfosGetRequest;
import org.openapis.openapi.models.operations.BloggerBlogUserInfosGetResponse;
import org.openapis.openapi.models.operations.BloggerBlogUserInfosGetSecurity;
import org.openapis.openapi.models.operations.BloggerBlogUserInfosGetSecurityOption1;
import org.openapis.openapi.models.operations.BloggerBlogUserInfosGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerBlogUserInfosGetRequest req = new BloggerBlogUserInfosGetRequest("ipsa", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                key = "voluptatum";
                maxPosts = 479977L;
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            BloggerBlogUserInfosGetResponse res = sdk.blogUserInfos.bloggerBlogUserInfosGet(req, new BloggerBlogUserInfosGetSecurity() {{
                option1 = new BloggerBlogUserInfosGetSecurityOption1("ab", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.blogUserInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
