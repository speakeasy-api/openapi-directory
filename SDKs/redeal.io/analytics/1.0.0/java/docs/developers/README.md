# developers

## Overview

Operations available to regular developers

### Available Operations

* [getEvents](#getevents) - get events for analytics

## getEvents

By passing in the company, site or deal Id a set of user interaction event records is returned. For pagination of a large result set use queryexecutionid and nexttoken instead.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsRequest;
import org.openapis.openapi.models.operations.GetEventsResponse;
import org.openapis.openapi.models.operations.GetEventsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsRequest req = new GetEventsRequest() {{
                company = "Mueller - Oberbrunner";
                deal = "suscipit";
                nexttoken = "iure";
                queryexecutionid = "magnam";
                site = "debitis";
                type = GetEventsTypeEnum.ALL;
            }};            

            GetEventsResponse res = sdk.developers.getEvents(req);

            if (res.eventRecords != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
