# eventTypes

### Available Operations

* [getNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description

## getNetworkEventsEventTypes

List the event type to human-readable description

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkEventsEventTypesRequest;
import org.openapis.openapi.models.operations.GetNetworkEventsEventTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkEventsEventTypesRequest req = new GetNetworkEventsEventTypesRequest("earum");            

            GetNetworkEventsEventTypesResponse res = sdk.eventTypes.getNetworkEventsEventTypes(req);

            if (res.getNetworkEventsEventTypes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
