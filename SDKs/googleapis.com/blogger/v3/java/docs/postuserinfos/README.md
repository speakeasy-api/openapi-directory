# postUserInfos

### Available Operations

* [bloggerPostUserInfosGet](#bloggerpostuserinfosget) - Gets one post and user info pair, by post_id and user_id.
* [bloggerPostUserInfosList](#bloggerpostuserinfoslist) - Lists post and user info pairs.

## bloggerPostUserInfosGet

Gets one post and user info pair, by post_id and user_id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostUserInfosGetRequest;
import org.openapis.openapi.models.operations.BloggerPostUserInfosGetResponse;
import org.openapis.openapi.models.operations.BloggerPostUserInfosGetSecurity;
import org.openapis.openapi.models.operations.BloggerPostUserInfosGetSecurityOption1;
import org.openapis.openapi.models.operations.BloggerPostUserInfosGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostUserInfosGetRequest req = new BloggerPostUserInfosGetRequest("odio", "eius", "esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "reprehenderit";
                fields = "quidem";
                key = "fugiat";
                maxComments = 283519L;
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "assumenda";
                uploadProtocol = "eos";
            }};            

            BloggerPostUserInfosGetResponse res = sdk.postUserInfos.bloggerPostUserInfosGet(req, new BloggerPostUserInfosGetSecurity() {{
                option1 = new BloggerPostUserInfosGetSecurityOption1("praesentium", "quisquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.postUserInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPostUserInfosList

Lists post and user info pairs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPostUserInfosListOrderByEnum;
import org.openapis.openapi.models.operations.BloggerPostUserInfosListRequest;
import org.openapis.openapi.models.operations.BloggerPostUserInfosListResponse;
import org.openapis.openapi.models.operations.BloggerPostUserInfosListSecurity;
import org.openapis.openapi.models.operations.BloggerPostUserInfosListSecurityOption1;
import org.openapis.openapi.models.operations.BloggerPostUserInfosListSecurityOption2;
import org.openapis.openapi.models.operations.BloggerPostUserInfosListStatusEnum;
import org.openapis.openapi.models.operations.BloggerPostUserInfosListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPostUserInfosListRequest req = new BloggerPostUserInfosListRequest("veritatis", "ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "quo";
                endDate = "illum";
                fetchBodies = false;
                fields = "quo";
                key = "fuga";
                labels = "eius";
                maxResults = 178367L;
                oauthToken = "voluptas";
                orderBy = BloggerPostUserInfosListOrderByEnum.ORDER_BY_UNSPECIFIED;
                pageToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "consequatur";
                startDate = "tempora";
                status = new org.openapis.openapi.models.operations.BloggerPostUserInfosListStatusEnum[]{{
                    add(BloggerPostUserInfosListStatusEnum.DRAFT),
                    add(BloggerPostUserInfosListStatusEnum.LIVE),
                    add(BloggerPostUserInfosListStatusEnum.LIVE),
                    add(BloggerPostUserInfosListStatusEnum.SOFT_TRASHED),
                }};
                uploadType = "esse";
                uploadProtocol = "recusandae";
                view = BloggerPostUserInfosListViewEnum.VIEW_TYPE_UNSPECIFIED;
            }};            

            BloggerPostUserInfosListResponse res = sdk.postUserInfos.bloggerPostUserInfosList(req, new BloggerPostUserInfosListSecurity() {{
                option1 = new BloggerPostUserInfosListSecurityOption1("distinctio", "quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.postUserInfosList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
