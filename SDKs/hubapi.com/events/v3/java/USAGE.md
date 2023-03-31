<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetEventsV3EventsGetPageSecurity;
import org.openapis.openapi.models.operations.GetEventsV3EventsGetPageQueryParams;
import org.openapis.openapi.models.operations.GetEventsV3EventsGetPageRequest;
import org.openapis.openapi.models.operations.GetEventsV3EventsGetPageResponse;
import org.openapis.openapi.models.shared.SchemeHapikey;
import org.openapis.openapi.models.shared.SchemeOauth2Legacy;
import org.openapis.openapi.models.shared.SchemePrivateAppsLegacy;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsV3EventsGetPageRequest req = new GetEventsV3EventsGetPageRequest() {{
                security = new GetEventsV3EventsGetPageSecurity() {{
                    hapikey = new SchemeHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetEventsV3EventsGetPageQueryParams() {{
                    after = "corrupti";
                    before = "provident";
                    eventType = "distinctio";
                    limit = 844266;
                    objectId = 602763;
                    objectType = "nulla";
                    occurredAfter = "2021-04-22T12:08:58.275Z";
                    occurredBefore = "2022-05-18T09:34:54.894Z";
                    sort = new String[]{{
                        add("suscipit"),
                        add("iure"),
                        add("magnam"),
                    }};
                }};
            }};            

            GetEventsV3EventsGetPageResponse res = sdk.events.getEventsV3EventsGetPage(req);

            if (res.collectionResponseExternalUnifiedEvent.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->