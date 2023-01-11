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

            PostEventsV3SendRequest req = new PostEventsV3SendRequest() {{
                security = new PostEventsV3SendSecurity() {{
                    hapikey = new SchemeHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new BehavioralEventHttpCompletionRequest() {{
                    email = "sit";
                    eventName = "voluptas";
                    objectId = "culpa";
                    occurredAt = "2019-04-21T07:38:14Z";
                    properties = new java.util.HashMap<String, String>() {{
                        put("dolor", "expedita");
                        put("voluptas", "fugit");
                        put("et", "nihil");
                    }};
                    utk = "rerum";
                }};
            }};

            PostEventsV3SendResponse res = sdk.behavioralEventsTracking.postEventsV3Send(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->