# performanceReport

### Available Operations

* [adexchangebuyerPerformanceReportList](#adexchangebuyerperformancereportlist) - Retrieves the authenticated user's list of performance metrics.

## adexchangebuyerPerformanceReportList

Retrieves the authenticated user's list of performance metrics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerPerformanceReportListRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerPerformanceReportListResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerPerformanceReportListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerPerformanceReportListRequest req = new AdexchangebuyerPerformanceReportListRequest("hic", "libero", "nobis") {{
                alt = AltEnum.JSON;
                fields = "dolores";
                key = "quis";
                maxResults = 521037L;
                oauthToken = "dignissimos";
                pageToken = "eaque";
                prettyPrint = false;
                quotaUser = "quis";
                userIp = "nesciunt";
            }};            

            AdexchangebuyerPerformanceReportListResponse res = sdk.performanceReport.adexchangebuyerPerformanceReportList(req, new AdexchangebuyerPerformanceReportListSecurity("eos", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.performanceReportList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
