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

            BloggerBlogsGetRequest req = new BloggerBlogsGetRequest() {{
                security = new BloggerBlogsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BloggerBlogsGetPathParams() {{
                    blogId = "repellat";
                }};
                queryParams = new BloggerBlogsGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "necessitatibus";
                    alt = "json";
                    callback = "in";
                    fields = "veritatis";
                    key = "sed";
                    oauthToken = "praesentium";
                    prettyPrint = true;
                    quotaUser = "ea";
                    uploadType = "iure";
                    uploadProtocol = "rerum";
                }};
            }};

            BloggerBlogsGetResponse res = sdk.blogs.bloggerBlogsGet(req);

            if (res.blog.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->