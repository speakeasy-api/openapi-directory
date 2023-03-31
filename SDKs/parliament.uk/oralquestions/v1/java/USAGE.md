<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PublishedEarlyDayMotionGetPathParams;
import org.openapis.openapi.models.operations.PublishedEarlyDayMotionGetRequest;
import org.openapis.openapi.models.operations.PublishedEarlyDayMotionGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishedEarlyDayMotionGetRequest req = new PublishedEarlyDayMotionGetRequest() {{
                pathParams = new PublishedEarlyDayMotionGetPathParams() {{
                    id = 548814;
                }};
            }};            

            PublishedEarlyDayMotionGetResponse res = sdk.earlyDayMotions.publishedEarlyDayMotionGet(req);

            if (res.apiResponseListPublishedWrittenQuestion.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->