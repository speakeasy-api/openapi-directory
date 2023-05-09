<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEventsV3SendResponse;
import org.openapis.openapi.models.operations.PostEventsV3SendSecurity;
import org.openapis.openapi.models.shared.BehavioralEventHttpCompletionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BehavioralEventHttpCompletionRequest req = new BehavioralEventHttpCompletionRequest("corrupti",                 new java.util.HashMap<String, String>() {{
                                put("distinctio", "quibusdam");
                                put("unde", "nulla");
                                put("corrupti", "illum");
                            }}) {{
                email = "Linda.Oberbrunner@yahoo.com";
                objectId = "magnam";
                occurredAt = OffsetDateTime.parse("2022-10-30T21:34:57.850Z");
                utk = "delectus";
            }};            

            PostEventsV3SendResponse res = sdk.behavioralEventsTracking.postEventsV3Send(req, new PostEventsV3SendSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->