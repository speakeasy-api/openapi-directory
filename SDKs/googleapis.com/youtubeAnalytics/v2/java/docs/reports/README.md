# reports

### Available Operations

* [youtubeAnalyticsReportsQuery](#youtubeanalyticsreportsquery) - Retrieve your YouTube Analytics reports.

## youtubeAnalyticsReportsQuery

Retrieve your YouTube Analytics reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeAnalyticsReportsQueryRequest;
import org.openapis.openapi.models.operations.YoutubeAnalyticsReportsQueryResponse;
import org.openapis.openapi.models.operations.YoutubeAnalyticsReportsQuerySecurity;
import org.openapis.openapi.models.operations.YoutubeAnalyticsReportsQuerySecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAnalyticsReportsQuerySecurityOption2;
import org.openapis.openapi.models.operations.YoutubeAnalyticsReportsQuerySecurityOption3;
import org.openapis.openapi.models.operations.YoutubeAnalyticsReportsQuerySecurityOption4;
import org.openapis.openapi.models.operations.YoutubeAnalyticsReportsQuerySecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeAnalyticsReportsQueryRequest req = new YoutubeAnalyticsReportsQueryRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.PROTO;
                callback = "esse";
                currency = "harum";
                dimensions = "iusto";
                endDate = "ipsum";
                fields = "quisquam";
                filters = "tenetur";
                ids = "amet";
                includeHistoricalChannelData = false;
                key = "tempore";
                maxResults = 880298L;
                metrics = "numquam";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "dolorem";
                sort = "sapiente";
                startDate = "totam";
                startIndex = 471752L;
                uploadType = "sit";
                uploadProtocol = "expedita";
            }};            

            YoutubeAnalyticsReportsQueryResponse res = sdk.reports.youtubeAnalyticsReportsQuery(req, new YoutubeAnalyticsReportsQuerySecurity() {{
                option1 = new YoutubeAnalyticsReportsQuerySecurityOption1("neque", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.queryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
