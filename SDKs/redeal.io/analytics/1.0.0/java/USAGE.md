<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetEventsTypeEnum;
import org.openapis.openapi.models.operations.GetEventsQueryParams;
import org.openapis.openapi.models.operations.GetEventsRequest;
import org.openapis.openapi.models.operations.GetEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsRequest req = new GetEventsRequest() {{
                queryParams = new GetEventsQueryParams() {{
                    company = "Medhurst - Rau";
                    deal = "quibusdam";
                    nexttoken = "unde";
                    queryexecutionid = "nulla";
                    site = "corrupti";
                    type = "contacts";
                }};
            }};            

            GetEventsResponse res = sdk.developers.getEvents(req);

            if (res.eventRecords.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->