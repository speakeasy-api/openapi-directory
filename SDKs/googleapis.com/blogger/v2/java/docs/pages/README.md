# pages

### Available Operations

* [bloggerPagesGet](#bloggerpagesget) - Gets a page by blog id and page id.
* [bloggerPagesList](#bloggerpageslist) - Lists pages.

## bloggerPagesGet

Gets a page by blog id and page id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPagesGetRequest;
import org.openapis.openapi.models.operations.BloggerPagesGetResponse;
import org.openapis.openapi.models.operations.BloggerPagesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPagesGetRequest req = new BloggerPagesGetRequest("sed", "iste") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "saepe";
                key = "fuga";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "iste";
                uploadProtocol = "iure";
            }};            

            BloggerPagesGetResponse res = sdk.pages.bloggerPagesGet(req, new BloggerPagesGetSecurity("saepe", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bloggerPagesList

Lists pages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPagesListRequest;
import org.openapis.openapi.models.operations.BloggerPagesListResponse;
import org.openapis.openapi.models.operations.BloggerPagesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPagesListRequest req = new BloggerPagesListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fetchBodies = false;
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "explicabo";
                uploadProtocol = "nobis";
            }};            

            BloggerPagesListResponse res = sdk.pages.bloggerPagesList(req, new BloggerPagesListSecurity("enim", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pageList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
