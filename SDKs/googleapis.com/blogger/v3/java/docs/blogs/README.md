# blogs

### Available Operations

* [bloggerBlogsGet](#bloggerblogsget) - Gets a blog by id.
* [bloggerBlogsGetByUrl](#bloggerblogsgetbyurl) - Gets a blog by url.
* [bloggerBlogsListByUser](#bloggerblogslistbyuser) - Lists blogs by user.

## bloggerBlogsGet

Gets a blog by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerBlogsGetRequest;
import org.openapis.openapi.models.operations.BloggerBlogsGetResponse;
import org.openapis.openapi.models.operations.BloggerBlogsGetSecurity;
import org.openapis.openapi.models.operations.BloggerBlogsGetSecurityOption1;
import org.openapis.openapi.models.operations.BloggerBlogsGetSecurityOption2;
import org.openapis.openapi.models.operations.BloggerBlogsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerBlogsGetRequest req = new BloggerBlogsGetRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "sapiente";
                key = "quo";
                maxPosts = 140350L;
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
                view = BloggerBlogsGetViewEnum.ADMIN;
            }};            

            BloggerBlogsGetResponse res = sdk.blogs.bloggerBlogsGet(req, new BloggerBlogsGetSecurity() {{
                option1 = new BloggerBlogsGetSecurityOption1("quod", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.blog != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerBlogsGetByUrl

Gets a blog by url.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerBlogsGetByUrlRequest;
import org.openapis.openapi.models.operations.BloggerBlogsGetByUrlResponse;
import org.openapis.openapi.models.operations.BloggerBlogsGetByUrlSecurity;
import org.openapis.openapi.models.operations.BloggerBlogsGetByUrlSecurityOption1;
import org.openapis.openapi.models.operations.BloggerBlogsGetByUrlSecurityOption2;
import org.openapis.openapi.models.operations.BloggerBlogsGetByUrlViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerBlogsGetByUrlRequest req = new BloggerBlogsGetByUrlRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "officia";
                key = "occaecati";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
                view = BloggerBlogsGetByUrlViewEnum.AUTHOR;
            }};            

            BloggerBlogsGetByUrlResponse res = sdk.blogs.bloggerBlogsGetByUrl(req, new BloggerBlogsGetByUrlSecurity() {{
                option1 = new BloggerBlogsGetByUrlSecurityOption1("beatae", "commodi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.blog != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerBlogsListByUser

Lists blogs by user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerBlogsListByUserRequest;
import org.openapis.openapi.models.operations.BloggerBlogsListByUserResponse;
import org.openapis.openapi.models.operations.BloggerBlogsListByUserRoleEnum;
import org.openapis.openapi.models.operations.BloggerBlogsListByUserSecurity;
import org.openapis.openapi.models.operations.BloggerBlogsListByUserSecurityOption1;
import org.openapis.openapi.models.operations.BloggerBlogsListByUserSecurityOption2;
import org.openapis.openapi.models.operations.BloggerBlogsListByUserStatusEnum;
import org.openapis.openapi.models.operations.BloggerBlogsListByUserViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerBlogsListByUserRequest req = new BloggerBlogsListByUserRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "cum";
                fetchUserInfo = false;
                fields = "esse";
                key = "ipsum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                role = new org.openapis.openapi.models.operations.BloggerBlogsListByUserRoleEnum[]{{
                    add(BloggerBlogsListByUserRoleEnum.READER),
                }};
                status = new org.openapis.openapi.models.operations.BloggerBlogsListByUserStatusEnum[]{{
                    add(BloggerBlogsListByUserStatusEnum.LIVE),
                    add(BloggerBlogsListByUserStatusEnum.DELETED),
                    add(BloggerBlogsListByUserStatusEnum.LIVE),
                }};
                uploadType = "natus";
                uploadProtocol = "laboriosam";
                view = BloggerBlogsListByUserViewEnum.ADMIN;
            }};            

            BloggerBlogsListByUserResponse res = sdk.blogs.bloggerBlogsListByUser(req, new BloggerBlogsListByUserSecurity() {{
                option1 = new BloggerBlogsListByUserSecurityOption1("saepe", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.blogList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
