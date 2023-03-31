<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BloggerBlogsGetSecurity;
import org.openapis.openapi.models.operations.BloggerBlogsGetPathParams;
import org.openapis.openapi.models.operations.BloggerBlogsGetQueryParams;
import org.openapis.openapi.models.operations.BloggerBlogsGetRequest;
import org.openapis.openapi.models.operations.BloggerBlogsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    blogId = "corrupti";
                }};
                queryParams = new BloggerBlogsGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
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