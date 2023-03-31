<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostEventsV3SendSecurity;
import org.openapis.openapi.models.operations.PostEventsV3SendRequest;
import org.openapis.openapi.models.operations.PostEventsV3SendResponse;
import org.openapis.openapi.models.shared.BehavioralEventHttpCompletionRequest;
import org.openapis.openapi.models.shared.SchemeHapikey;
import org.openapis.openapi.models.shared.SchemeOauth2Legacy;
import org.openapis.openapi.models.shared.SchemePrivateAppsLegacy;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostEventsV3SendRequest req = new PostEventsV3SendRequest() {{
                security = new PostEventsV3SendSecurity() {{
                    hapikey = new SchemeHapikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new BehavioralEventHttpCompletionRequest() {{
                    email = "Larue_Rau85@yahoo.com";
                    eventName = "corrupti";
                    objectId = "illum";
                    occurredAt = "2022-05-18T09:34:54.894Z";
                    properties = new java.util.HashMap<String, String>() {{
                        put("suscipit", "iure");
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    utk = "tempora";
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