# meetingsSettingsSearches

## Overview

Meetings Settings - Searches

### Available Operations

* [postV2MeetingsSettingsSearchesJson](#postv2meetingssettingssearchesjson) - List meeting settings

## postV2MeetingsSettingsSearchesJson

Fetches multiple meeting setting records. The records can be filtered, paged, and sorted according to the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2MeetingsSettingsSearchesJsonRequest;
import org.openapis.openapi.models.operations.PostV2MeetingsSettingsSearchesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2MeetingsSettingsSearchesJsonRequest req = new PostV2MeetingsSettingsSearchesJsonRequest() {{
                calendarType = "quod";
                includePagingCounts = false;
                page = 288398L;
                perPage = 70447L;
                updatedAt = new String[]{{
                    add("fuga"),
                }};
                userGuids = new String[]{{
                    add("suscipit"),
                    add("velit"),
                    add("culpa"),
                }};
            }};            

            PostV2MeetingsSettingsSearchesJsonResponse res = sdk.meetingsSettingsSearches.postV2MeetingsSettingsSearchesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
