# accountSummaries

### Available Operations

* [analyticsadminAccountSummariesList](#analyticsadminaccountsummarieslist) - Returns summaries of all accounts accessible by the caller.

## analyticsadminAccountSummariesList

Returns summaries of all accounts accessible by the caller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListRequest;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListResponse;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListSecurity;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsadminAccountSummariesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsadminAccountSummariesListRequest req = new AnalyticsadminAccountSummariesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                pageSize = 812169L;
                pageToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            AnalyticsadminAccountSummariesListResponse res = sdk.accountSummaries.analyticsadminAccountSummariesList(req, new AnalyticsadminAccountSummariesListSecurity() {{
                option1 = new AnalyticsadminAccountSummariesListSecurityOption1("recusandae", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAnalyticsAdminV1alphaListAccountSummariesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
