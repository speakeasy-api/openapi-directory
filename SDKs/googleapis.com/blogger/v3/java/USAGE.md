<!-- Start SDK Example Usage -->
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

            BloggerBlogUserInfosGetRequest req = new BloggerBlogUserInfosGetRequest("corrupti", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                maxPosts = 423655L;
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            BloggerBlogUserInfosGetResponse res = sdk.blogUserInfos.bloggerBlogUserInfosGet(req, new BloggerBlogUserInfosGetSecurity() {{
                option1 = new BloggerBlogUserInfosGetSecurityOption1("magnam", "debitis") {{
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
<!-- End SDK Example Usage -->