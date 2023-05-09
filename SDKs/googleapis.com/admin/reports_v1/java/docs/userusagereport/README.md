# userUsageReport

### Available Operations

* [reportsUserUsageReportGet](#reportsuserusagereportget) - Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.

## reportsUserUsageReportGet

Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportsUserUsageReportGetRequest;
import org.openapis.openapi.models.operations.ReportsUserUsageReportGetResponse;
import org.openapis.openapi.models.operations.ReportsUserUsageReportGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReportsUserUsageReportGetRequest req = new ReportsUserUsageReportGetRequest("debitis", "a") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "illum";
                customerId = "maiores";
                fields = "rerum";
                filters = "dicta";
                groupIdFilter = "magnam";
                key = "cumque";
                maxResults = 813798L;
                oauthToken = "ea";
                orgUnitID = "aliquid";
                pageToken = "laborum";
                parameters = "accusamus";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "occaecati";
                uploadProtocol = "enim";
            }};            

            ReportsUserUsageReportGetResponse res = sdk.userUsageReport.reportsUserUsageReportGet(req, new ReportsUserUsageReportGetSecurity("accusamus", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.usageReports != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
