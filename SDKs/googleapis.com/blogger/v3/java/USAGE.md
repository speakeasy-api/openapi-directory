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