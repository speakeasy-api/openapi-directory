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

            RetrieveNeoFeedTodayRequest req = new RetrieveNeoFeedTodayRequest() {{
                queryParams = new RetrieveNeoFeedTodayQueryParams() {{
                    detailed = true;
                }};
            }};

            RetrieveNeoFeedTodayResponse res = sdk.feed.retrieveNeoFeedToday(req);

            if (res.nearEarthObjectList.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->