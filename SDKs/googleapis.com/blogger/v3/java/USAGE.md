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
                    blogId = "voluptates";
                    userId = "et";
                }};
                queryParams = new BloggerBlogUserInfosGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "eum";
                    alt = "media";
                    callback = "qui";
                    fields = "eum";
                    key = "corporis";
                    maxPosts = 9063924056762439300;
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "omnis";
                    uploadType = "sed";
                    uploadProtocol = "qui";
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