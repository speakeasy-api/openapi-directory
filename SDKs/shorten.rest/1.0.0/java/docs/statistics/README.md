# statistics

### Available Operations

* [getStatistics](#getstatistics) - Get clicks statistics

## getStatistics

Retrieve the raw click statistics for your account. Clicks are retrieved by creation date in descending order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatisticsResponse;
import org.openapis.openapi.models.operations.GetStatisticsSecurity;
import org.openapis.openapi.models.shared.ClicksFilterModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ClicksFilterModel req = new ClicksFilterModel() {{
                aliasId = "aBcDe012";
                dateFrom = "2001-05-02";
                dateTo = "2001-05-02";
                domain = "short.fyi";
                lastId = 100L;
            }};            

            GetStatisticsResponse res = sdk.statistics.getStatistics(req, new GetStatisticsSecurity("repudiandae") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.clickModelPg != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
