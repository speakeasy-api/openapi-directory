# feed

## Overview

Operations with NearEarthObjects

### Available Operations

* [retrieveNEOFeedToday](#retrieveneofeedtoday) - Find Near Earth Objects for today
* [retrieveNearEarthObjectFeed](#retrievenearearthobjectfeed) - Find Near Earth Objects by date

## retrieveNEOFeedToday

Get a list of Near Earth Objects for today

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveNEOFeedTodayRequest;
import org.openapis.openapi.models.operations.RetrieveNEOFeedTodayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveNEOFeedTodayRequest req = new RetrieveNEOFeedTodayRequest() {{
                detailed = false;
            }};            

            RetrieveNEOFeedTodayResponse res = sdk.feed.retrieveNEOFeedToday(req);

            if (res.nearEarthObjectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveNearEarthObjectFeed

Get a list of Near Earth Objects within a date range, The max range in one query is 7 days

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveNearEarthObjectFeedRequest;
import org.openapis.openapi.models.operations.RetrieveNearEarthObjectFeedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveNearEarthObjectFeedRequest req = new RetrieveNearEarthObjectFeedRequest() {{
                detailed = false;
                endDate = "corrupti";
                startDate = "provident";
            }};            

            RetrieveNearEarthObjectFeedResponse res = sdk.feed.retrieveNearEarthObjectFeed(req);

            if (res.nearEarthObjectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
