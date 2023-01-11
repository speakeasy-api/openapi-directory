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

            GetEventsRequest req = new GetEventsRequest() {{
                queryParams = new GetEventsQueryParams() {{
                    company = "autem";
                    deal = "consectetur";
                    nexttoken = "nobis";
                    queryexecutionid = "odio";
                    site = "qui";
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