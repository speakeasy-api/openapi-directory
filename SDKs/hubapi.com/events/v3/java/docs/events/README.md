# events

### Available Operations

* [getEventsV3EventsGetPage](#geteventsv3eventsgetpage) - Returns a collection of events matching a query.

## getEventsV3EventsGetPage

Returns a collection of events matching a query.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsV3EventsGetPageRequest;
import org.openapis.openapi.models.operations.GetEventsV3EventsGetPageResponse;
import org.openapis.openapi.models.operations.GetEventsV3EventsGetPageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsV3EventsGetPageRequest req = new GetEventsV3EventsGetPageRequest() {{
                after = "debitis";
                before = "ipsa";
                eventType = "delectus";
                limit = 272656;
                objectId = 383441L;
                objectType = "molestiae";
                occurredAfter = OffsetDateTime.parse("2020-07-25T16:12:20.938Z");
                occurredBefore = OffsetDateTime.parse("2022-01-15T14:47:59.325Z");
                sort = new String[]{{
                    add("nisi"),
                    add("recusandae"),
                    add("temporibus"),
                }};
            }};            

            GetEventsV3EventsGetPageResponse res = sdk.events.getEventsV3EventsGetPage(req, new GetEventsV3EventsGetPageSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.collectionResponseExternalUnifiedEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
