<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsRequest;
import org.openapis.openapi.models.operations.GetEventsResponse;
import org.openapis.openapi.models.operations.GetEventsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsRequest req = new GetEventsRequest() {{
                company = "Medhurst - Rau";
                deal = "quibusdam";
                nexttoken = "unde";
                queryexecutionid = "nulla";
                site = "corrupti";
                type = GetEventsTypeEnum.CONTACTS;
            }};            

            GetEventsResponse res = sdk.developers.getEvents(req);

            if (res.eventRecords != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->