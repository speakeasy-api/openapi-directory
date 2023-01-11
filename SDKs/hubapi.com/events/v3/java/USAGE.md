<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetEventsV3EventsGetPageRequest req = new GetEventsV3EventsGetPageRequest() {{
                security = new GetEventsV3EventsGetPageSecurity() {{
                    hapikey = new SchemeHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetEventsV3EventsGetPageQueryParams() {{
                    after = "sit";
                    before = "voluptas";
                    eventType = "culpa";
                    limit = 501233450539197794;
                    objectId = 3390393562759376202;
                    objectType = "dolor";
                    occurredAfter = "2009-11-26T21:53:53Z";
                    occurredBefore = "1978-05-28T16:08:43Z";
                    sort = new String[]() {{
                        add("et"),
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