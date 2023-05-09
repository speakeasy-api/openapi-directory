<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveNEOFeedTodayRequest;
import org.openapis.openapi.models.operations.RetrieveNEOFeedTodayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveNEOFeedTodayRequest req = new RetrieveNEOFeedTodayRequest() {{
                detailed = false;
            }};            

            RetrieveNEOFeedTodayResponse res = sdk.feed.retrieveNEOFeedToday(req);

            if (res.nearEarthObjectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->