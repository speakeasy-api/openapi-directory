# threeForBackEndOptional

## Overview

# Introduction
The methods are required to have an admin authentication.

# How to get admin credentials
Please create admin credentials in [Datahub](https://userdatahub.com) and use method v1/Auth/Login (1. User management)

# Scheme
![Admin statistics integration](https://website-cliparts-datamotion.s3.us-east-2.amazonaws.com/Dev.portal/admin+statistics+integration.png)

### Available Operations

* [rootV1ScoringsConsolidated](#rootv1scoringsconsolidated) - /v1/Scorings/consolidated
* [rootV1ScoringsConsolidatedDaily](#rootv1scoringsconsolidateddaily) - /v1/Scorings/consolidated/daily
* [rootV1StatisticsConsolidated](#rootv1statisticsconsolidated) - /v1/Statistics/consolidated
* [rootV1StatisticsConsolidatedDaily](#rootv1statisticsconsolidateddaily) - /v1/Statistics/consolidated/daily

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
                appId = "nulla";
                companyId = "corrupti";
                deviceToken = "illum";
                endDate = "2021-01-18T01:04:22.840Z";
                instanceId = "vel";
                startDate = "2021-01-17T01:04:22.840Z";
                tag = "error";
            }};            

            RootV1ScoringsConsolidatedResponse res = sdk.threeForBackEndOptional.rootV1ScoringsConsolidated(req);

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
                appId = "deserunt";
                companyId = "suscipit";
                deviceToken = "iure";
                endDate = "2021-01-18T01:04:22.840Z";
                instanceId = "magnam";
                startDate = "2021-01-17T01:04:22.840Z";
                tag = "debitis";
            }};            

            RootV1ScoringsConsolidatedDailyResponse res = sdk.threeForBackEndOptional.rootV1ScoringsConsolidatedDaily(req);

            if (res.rootV1ScoringsConsolidatedDaily200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                appId = "ipsa";
                companyId = "delectus";
                deviceToken = "tempora";
                endDate = "2021-03-18";
                instanceId = "suscipit";
                startDate = "2021-01-18";
                tag = "molestiae";
            }};            

            RootV1StatisticsConsolidatedResponse res = sdk.threeForBackEndOptional.rootV1StatisticsConsolidated(req);

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
                appId = "minus";
                companyId = "placeat";
                deviceToken = "voluptatum";
                endDate = "2021-01-18";
                instanceId = "iusto";
                startDate = "2021-01-17";
                tag = "excepturi";
            }};            

            RootV1StatisticsConsolidatedDailyResponse res = sdk.threeForBackEndOptional.rootV1StatisticsConsolidatedDaily(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
