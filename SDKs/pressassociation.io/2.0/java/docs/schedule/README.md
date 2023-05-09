# schedule

### Available Operations

* [listSchedule](#listschedule) - Schedule Collection

## listSchedule

The schedule endpoint produces a linear TV schedule for a given channel and date range.

 - The date range supplied must be no larger than 21 days.
 - If no end data is passed the API will default to start date + 24 hours.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListScheduleRequest;
import org.openapis.openapi.models.operations.ListScheduleResponse;
import org.openapis.openapi.models.operations.ListScheduleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListScheduleRequest req = new ListScheduleRequest("nam", "officia") {{
                aliases = false;
                end = "occaecati";
            }};            

            ListScheduleResponse res = sdk.schedule.listSchedule(req, new ListScheduleSecurity("fugit") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.listSchedule200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
