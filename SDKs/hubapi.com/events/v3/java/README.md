# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [events](docs/events/README.md)

* [getEventsV3EventsGetPage](docs/events/README.md#geteventsv3eventsgetpage) - Returns a collection of events matching a query.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
