# consolidatedSafeScoring

### Available Operations

* [rootV1ScoringsConsolidated](#rootv1scoringsconsolidated) - /v1/Scorings/consolidated
* [rootV1ScoringsConsolidatedDaily](#rootv1scoringsconsolidateddaily) - /v1/Scorings/consolidated/daily

## rootV1ScoringsConsolidated

/v1/Scorings/consolidated

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RootV1ScoringsConsolidatedRequest;
import org.openapis.openapi.models.operations.RootV1ScoringsConsolidatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RootV1ScoringsConsolidatedRequest req = new RootV1ScoringsConsolidatedRequest() {{
                appId = "nisi";
                companyId = "recusandae";
                deviceToken = "temporibus";
                endDate = "2021-01-18T01:04:22.840Z";
                instanceId = "ab";
                startDate = "2021-01-17T01:04:22.840Z";
                tag = "quis";
            }};            

            RootV1ScoringsConsolidatedResponse res = sdk.consolidatedSafeScoring.rootV1ScoringsConsolidated(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rootV1ScoringsConsolidatedDaily

/v1/Scorings/consolidated/daily

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RootV1ScoringsConsolidatedDailyRequest;
import org.openapis.openapi.models.operations.RootV1ScoringsConsolidatedDailyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RootV1ScoringsConsolidatedDailyRequest req = new RootV1ScoringsConsolidatedDailyRequest() {{
                appId = "veritatis";
                companyId = "deserunt";
                deviceToken = "perferendis";
                endDate = "2021-01-18T01:04:22.840Z";
                instanceId = "ipsam";
                startDate = "2021-01-17T01:04:22.840Z";
                tag = "repellendus";
            }};            

            RootV1ScoringsConsolidatedDailyResponse res = sdk.consolidatedSafeScoring.rootV1ScoringsConsolidatedDaily(req);

            if (res.rootV1ScoringsConsolidatedDaily200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
