# two1UserStatisticsOptional

### Available Operations

* [userStatisticeDailyValueV1StatisticsIndividualDaily](#userstatisticedailyvaluev1statisticsindividualdaily) - User statistice - Daily value - v1/Statistics/individual/daily
* [userStatisticsAccumulatedValueV1StatisticsIndividual](#userstatisticsaccumulatedvaluev1statisticsindividual) - User statistics - Accumulated value - /v1/Statistics/individual

## userStatisticeDailyValueV1StatisticsIndividualDaily

User statistice - Daily value - v1/Statistics/individual/daily

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserStatisticeDailyValueV1StatisticsIndividualDailyRequest;
import org.openapis.openapi.models.operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserStatisticeDailyValueV1StatisticsIndividualDailyRequest req = new UserStatisticeDailyValueV1StatisticsIndividualDailyRequest() {{
                endDate = "2021-03-30";
                startDate = "2021-03-30";
            }};            

            UserStatisticeDailyValueV1StatisticsIndividualDailyResponse res = sdk.two1UserStatisticsOptional.userStatisticeDailyValueV1StatisticsIndividualDaily(req);

            if (res.userStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userStatisticsAccumulatedValueV1StatisticsIndividual

User statistics - Accumulated value - /v1/Statistics/individual

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserStatisticsAccumulatedValueV1StatisticsIndividualRequest;
import org.openapis.openapi.models.operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserStatisticsAccumulatedValueV1StatisticsIndividualRequest req = new UserStatisticsAccumulatedValueV1StatisticsIndividualRequest() {{
                endDate = "2021-01-30";
                startDate = "2021-01-01";
            }};            

            UserStatisticsAccumulatedValueV1StatisticsIndividualResponse res = sdk.two1UserStatisticsOptional.userStatisticsAccumulatedValueV1StatisticsIndividual(req);

            if (res.userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
