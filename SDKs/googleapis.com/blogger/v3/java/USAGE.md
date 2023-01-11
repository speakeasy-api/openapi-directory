<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    blogId = "sit";
                    userId = "voluptas";
                }};
                queryParams = new BloggerBlogUserInfosGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "expedita";
                    alt = "proto";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    maxPosts = 8274930044578894929;
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
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