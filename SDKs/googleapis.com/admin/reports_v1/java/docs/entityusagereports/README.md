# entityUsageReports

### Available Operations

* [reportsEntityUsageReportsGet](#reportsentityusagereportsget) - Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.

## reportsEntityUsageReportsGet

Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReportsEntityUsageReportsGetEntityTypeEnum;
import org.openapis.openapi.models.operations.ReportsEntityUsageReportsGetRequest;
import org.openapis.openapi.models.operations.ReportsEntityUsageReportsGetResponse;
import org.openapis.openapi.models.operations.ReportsEntityUsageReportsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReportsEntityUsageReportsGetRequest req = new ReportsEntityUsageReportsGetRequest("alias", "fugit", ReportsEntityUsageReportsGetEntityTypeEnum.GPLUS_COMMUNITIES) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                customerId = "tempore";
                fields = "labore";
                filters = "delectus";
                key = "eum";
                maxResults = 248753L;
                oauthToken = "eligendi";
                pageToken = "sint";
                parameters = "aliquid";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "necessitatibus";
                uploadProtocol = "sint";
            }};            

            ReportsEntityUsageReportsGetResponse res = sdk.entityUsageReports.reportsEntityUsageReportsGet(req, new ReportsEntityUsageReportsGetSecurity("officia", "dolor") {{
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
