# quality

### Available Operations

* [qualityGetDailyDataQualityForSite](#qualitygetdailydataqualityforsite) - Get Site DailyQuality
* [qualityGetOverallDataQualityForSites](#qualitygetoveralldataqualityforsites) - Get Site OverallQuality

## qualityGetDailyDataQualityForSite

Get Site DailyQuality

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QualityGetDailyDataQualityForSiteRequest;
import org.openapis.openapi.models.operations.QualityGetDailyDataQualityForSiteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QualityGetDailyDataQualityForSiteRequest req = new QualityGetDailyDataQualityForSiteRequest("unde", "nulla", "corrupti", "illum");            

            QualityGetDailyDataQualityForSiteResponse res = sdk.quality.qualityGetDailyDataQualityForSite(req);

            if (res.dailyQualityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## qualityGetOverallDataQualityForSites

Get Site OverallQuality

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QualityGetOverallDataQualityForSitesRequest;
import org.openapis.openapi.models.operations.QualityGetOverallDataQualityForSitesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QualityGetOverallDataQualityForSitesRequest req = new QualityGetOverallDataQualityForSitesRequest("vel", "error", "deserunt", "suscipit");            

            QualityGetOverallDataQualityForSitesResponse res = sdk.quality.qualityGetOverallDataQualityForSites(req);

            if (res.overallQualityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
