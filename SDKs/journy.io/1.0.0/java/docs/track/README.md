# track

## Overview

Endpoints for tracking events.

### Available Operations

* [trackEvent](#trackevent) - Track event

## trackEvent

Endpoint used to track an event for a user or an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrackEventRequestBody;
import org.openapis.openapi.models.operations.TrackEventRequestBodyIdentification;
import org.openapis.openapi.models.operations.TrackEventRequestBodyIdentificationAccount;
import org.openapis.openapi.models.operations.TrackEventRequestBodyIdentificationUser;
import org.openapis.openapi.models.operations.TrackEventResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TrackEventRequestBody req = new TrackEventRequestBody(                new TrackEventRequestBodyIdentification() {{
                                account = new TrackEventRequestBodyIdentificationAccount() {{
                                    accountId = "perferendis";
                                    domain = "doloremque";
                                }};;
                                user = new TrackEventRequestBodyIdentificationUser() {{
                                    email = "Easter35@yahoo.com";
                                    userId = "dolore";
                                }};;
                            }};, "iusto") {{
                metadata = new java.util.HashMap<String, Object>() {{
                    put("harum", "enim");
                }};
                triggeredAt = "accusamus";
            }};            

            TrackEventResponse res = sdk.track.trackEvent(req);

            if (res.trackEvent201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
