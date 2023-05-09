# data

### Available Operations

* [analyticsDataGet](#analyticsdataget) - Returns Analytics report data for a view (profile).

## analyticsDataGet

Returns Analytics report data for a view (profile).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsDataGetRequest;
import org.openapis.openapi.models.operations.AnalyticsDataGetResponse;
import org.openapis.openapi.models.operations.AnalyticsDataGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsDataGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsDataGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDataGetRequest req = new AnalyticsDataGetRequest("tempora", "suscipit", "molestiae", "minus") {{
                alt = AltEnum.ATOM;
                dimensions = "placeat";
                fields = "voluptatum";
                filters = "iusto";
                key = "excepturi";
                maxResults = 392785L;
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                segment = "ab";
                sort = "quis";
                startIndex = 87129L;
                userIp = "deserunt";
            }};            

            AnalyticsDataGetResponse res = sdk.data.analyticsDataGet(req, new AnalyticsDataGetSecurity() {{
                option1 = new AnalyticsDataGetSecurityOption1("perferendis", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
