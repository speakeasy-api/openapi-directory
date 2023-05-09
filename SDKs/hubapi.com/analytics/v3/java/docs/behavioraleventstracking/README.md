# behavioralEventsTracking

### Available Operations

* [postEventsV3Send](#posteventsv3send) - Sends Custom Behavioral Event

## postEventsV3Send

Endpoint to send an instance of a behavioral event

### Example Usage

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

            org.openapis.openapi.models.shared.BehavioralEventHttpCompletionRequest req = new BehavioralEventHttpCompletionRequest("tempora",                 new java.util.HashMap<String, String>() {{
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }}) {{
                email = "Kenyon_Huel7@yahoo.com";
                objectId = "quis";
                occurredAt = OffsetDateTime.parse("2022-05-09T10:00:51.349Z");
                utk = "perferendis";
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
