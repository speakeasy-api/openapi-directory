# meetingSettings

## Overview

Meetings Settings

### Available Operations

* [putV2MeetingsSettingsIdJson](#putv2meetingssettingsidjson) - Update a meeting setting

## putV2MeetingsSettingsIdJson

Updates a meeting setting, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2MeetingsSettingsIdJsonRequest;
import org.openapis.openapi.models.operations.PutV2MeetingsSettingsIdJsonRequestBody;
import org.openapis.openapi.models.operations.PutV2MeetingsSettingsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2MeetingsSettingsIdJsonRequest req = new PutV2MeetingsSettingsIdJsonRequest("quasi") {{
                requestBody = new PutV2MeetingsSettingsIdJsonRequestBody() {{
                    allowBookingOnBehalf = false;
                    allowBookingOvertime = false;
                    allowEventOverlap = false;
                    availabilityLimit = 869489L;
                    availabilityLimitEnabled = false;
                    bufferTimeDuration = 92027L;
                    calendarType = "voluptate";
                    defaultMeetingLength = 55965L;
                    description = "minima";
                    enableCalendarSync = false;
                    enableDynamicLocation = false;
                    location = "veritatis";
                    primaryCalendarConnectionFailed = false;
                    primaryCalendarId = "consectetur";
                    primaryCalendarName = "adipisci";
                    rescheduleMeetingsEnabled = false;
                    scheduleBufferEnabled = false;
                    scheduleDelay = 614465L;
                    shareEventDetail = false;
                    timeZone = "temporibus";
                    timesAvailable = new java.util.HashMap<String, Object>() {{
                        put("rem", "aut");
                    }};
                    title = "Ms.";
                }};;
            }};            

            PutV2MeetingsSettingsIdJsonResponse res = sdk.meetingSettings.putV2MeetingsSettingsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
