# users

### Available Operations

* [bloggerUsersGet](#bloggerusersget) - Gets one user by user_id.

## bloggerUsersGet

Gets one user by user_id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerUsersGetRequest;
import org.openapis.openapi.models.operations.BloggerUsersGetResponse;
import org.openapis.openapi.models.operations.BloggerUsersGetSecurity;
import org.openapis.openapi.models.operations.BloggerUsersGetSecurityOption1;
import org.openapis.openapi.models.operations.BloggerUsersGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerUsersGetRequest req = new BloggerUsersGetRequest("maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "placeat";
                key = "voluptas";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "illo";
                uploadProtocol = "nihil";
            }};            

            BloggerUsersGetResponse res = sdk.users.bloggerUsersGet(req, new BloggerUsersGetSecurity() {{
                option1 = new BloggerUsersGetSecurityOption1("inventore", "libero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
