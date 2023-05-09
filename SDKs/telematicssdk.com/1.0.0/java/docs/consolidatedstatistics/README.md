# consolidatedStatistics

### Available Operations

* [rootV1StatisticsConsolidated](#rootv1statisticsconsolidated) - /v1/Statistics/consolidated
* [rootV1StatisticsConsolidatedDaily](#rootv1statisticsconsolidateddaily) - /v1/Statistics/consolidated/daily

## rootV1StatisticsConsolidated

/v1/Statistics/consolidated

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RootV1StatisticsConsolidatedRequest;
import org.openapis.openapi.models.operations.RootV1StatisticsConsolidatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RootV1StatisticsConsolidatedRequest req = new RootV1StatisticsConsolidatedRequest() {{
                appId = "sapiente";
                companyId = "quo";
                deviceToken = "odit";
                endDate = "2021-03-18";
                instanceId = "at";
                startDate = "2021-01-18";
                tag = "at";
            }};            

            RootV1StatisticsConsolidatedResponse res = sdk.consolidatedStatistics.rootV1StatisticsConsolidated(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rootV1StatisticsConsolidatedDaily

/v1/Statistics/consolidated/daily

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RootV1StatisticsConsolidatedDailyRequest;
import org.openapis.openapi.models.operations.RootV1StatisticsConsolidatedDailyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RootV1StatisticsConsolidatedDailyRequest req = new RootV1StatisticsConsolidatedDailyRequest() {{
                appId = "maiores";
                companyId = "molestiae";
                deviceToken = "quod";
                endDate = "2021-01-18";
                instanceId = "quod";
                startDate = "2021-01-17";
                tag = "esse";
            }};            

            RootV1StatisticsConsolidatedDailyResponse res = sdk.consolidatedStatistics.rootV1StatisticsConsolidatedDaily(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
