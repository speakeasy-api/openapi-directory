# meetings

## Overview

Meetings

### Available Operations

* [getV2MeetingsJson](#getv2meetingsjson) - List meetings
* [putV2MeetingsIdJson](#putv2meetingsidjson) - Update a meeting

## getV2MeetingsJson

Fetches multiple meeting records. The records can be filtered, paged, and sorted according to the respective parameters.
Meetings resource is responsible for events created via the Salesloft platform using calendaring features.
These events can relate to cadences, people, and accounts.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2MeetingsJsonRequest;
import org.openapis.openapi.models.operations.GetV2MeetingsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2MeetingsJsonRequest req = new GetV2MeetingsJsonRequest() {{
                accountId = "eum";
                createdAt = new String[]{{
                    add("ab"),
                    add("corrupti"),
                    add("non"),
                }};
                eventIds = new String[]{{
                    add("dolor"),
                }};
                iCalUids = new String[]{{
                    add("numquam"),
                    add("impedit"),
                    add("explicabo"),
                }};
                ids = new Long[]{{
                    add(12036L),
                    add(491025L),
                }};
                includeMeetingsSettings = false;
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 115484L;
                perPage = 981640L;
                personId = "natus";
                personIds = new Long[]{{
                    add(974257L),
                }};
                showDeleted = false;
                sortBy = "voluptas";
                sortDirection = "asperiores";
                startTime = new String[]{{
                    add("ea"),
                }};
                status = "quaerat";
                taskIds = new Long[]{{
                    add(831520L),
                }};
                userGuids = new String[]{{
                    add("maxime"),
                    add("dignissimos"),
                    add("officia"),
                }};
            }};            

            GetV2MeetingsJsonResponse res = sdk.meetings.getV2MeetingsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2MeetingsIdJson

Updates a meeting, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2MeetingsIdJsonRequest;
import org.openapis.openapi.models.operations.PutV2MeetingsIdJsonRequestBody;
import org.openapis.openapi.models.operations.PutV2MeetingsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2MeetingsIdJsonRequest req = new PutV2MeetingsIdJsonRequest("asperiores") {{
                requestBody = new PutV2MeetingsIdJsonRequestBody() {{
                    eventId = "nemo";
                    iCalUid = "quae";
                    noShow = false;
                    rescheduleStatus = "quaerat";
                    status = "porro";
                }};;
            }};            

            PutV2MeetingsIdJsonResponse res = sdk.meetings.putV2MeetingsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
