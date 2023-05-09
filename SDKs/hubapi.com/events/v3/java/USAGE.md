<!-- Start SDK Example Usage -->
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
                after = "corrupti";
                before = "provident";
                eventType = "distinctio";
                limit = 844266;
                objectId = 602763L;
                objectType = "nulla";
                occurredAfter = OffsetDateTime.parse("2021-04-22T12:08:58.275Z");
                occurredBefore = OffsetDateTime.parse("2022-05-18T09:34:54.894Z");
                sort = new String[]{{
                    add("suscipit"),
                    add("iure"),
                    add("magnam"),
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
<!-- End SDK Example Usage -->