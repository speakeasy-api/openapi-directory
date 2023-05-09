# pageViews

### Available Operations

* [bloggerPageViewsGet](#bloggerpageviewsget) - Gets page views by blog id.

## bloggerPageViewsGet

Gets page views by blog id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BloggerPageViewsGetRangeEnum;
import org.openapis.openapi.models.operations.BloggerPageViewsGetRequest;
import org.openapis.openapi.models.operations.BloggerPageViewsGetResponse;
import org.openapis.openapi.models.operations.BloggerPageViewsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BloggerPageViewsGetRequest req = new BloggerPageViewsGetRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "fugit";
                key = "dolorum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "tempora";
                range = new org.openapis.openapi.models.operations.BloggerPageViewsGetRangeEnum[]{{
                    add(BloggerPageViewsGetRangeEnum.SEVEN_DAYS),
                    add(BloggerPageViewsGetRangeEnum.ALL),
                    add(BloggerPageViewsGetRangeEnum.SEVEN_DAYS),
                }};
                uploadType = "eum";
                uploadProtocol = "non";
            }};            

            BloggerPageViewsGetResponse res = sdk.pageViews.bloggerPageViewsGet(req, new BloggerPageViewsGetSecurity("eligendi", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pageviews != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
