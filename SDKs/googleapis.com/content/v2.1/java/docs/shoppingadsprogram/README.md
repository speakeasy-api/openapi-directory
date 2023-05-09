# shoppingadsprogram

### Available Operations

* [contentShoppingadsprogramGet](#contentshoppingadsprogramget) - Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* [contentShoppingadsprogramRequestreview](#contentshoppingadsprogramrequestreview) - Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.

## contentShoppingadsprogramGet

Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentShoppingadsprogramGetRequest;
import org.openapis.openapi.models.operations.ContentShoppingadsprogramGetResponse;
import org.openapis.openapi.models.operations.ContentShoppingadsprogramGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentShoppingadsprogramGetRequest req = new ContentShoppingadsprogramGetRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "dolores";
                key = "harum";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "iusto";
                uploadProtocol = "modi";
            }};            

            ContentShoppingadsprogramGetResponse res = sdk.shoppingadsprogram.contentShoppingadsprogramGet(req, new ContentShoppingadsprogramGetSecurity("ducimus", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.shoppingAdsProgramStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentShoppingadsprogramRequestreview

Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentShoppingadsprogramRequestreviewRequest;
import org.openapis.openapi.models.operations.ContentShoppingadsprogramRequestreviewResponse;
import org.openapis.openapi.models.operations.ContentShoppingadsprogramRequestreviewSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RequestReviewShoppingAdsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentShoppingadsprogramRequestreviewRequest req = new ContentShoppingadsprogramRequestreviewRequest("a") {{
                dollarXgafv = XgafvEnum.TWO;
                requestReviewShoppingAdsRequest = new RequestReviewShoppingAdsRequest() {{
                    regionCode = "modi";
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "quas";
                key = "dolores";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "nihil";
                uploadProtocol = "beatae";
            }};            

            ContentShoppingadsprogramRequestreviewResponse res = sdk.shoppingadsprogram.contentShoppingadsprogramRequestreview(req, new ContentShoppingadsprogramRequestreviewSecurity("suscipit", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
