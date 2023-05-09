# events

### Available Operations

* [getNetworkEvents](#getnetworkevents) - List the events for the network
* [getNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description

## getNetworkEvents

List the events for the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkEventsRequest req = new GetNetworkEventsRequest("fugiat") {{
                clientIp = "ut";
                clientMac = "eum";
                clientName = "suscipit";
                deviceMac = "assumenda";
                deviceName = "eos";
                deviceSerial = "praesentium";
                endingBefore = "quisquam";
                excludedEventTypes = new String[]{{
                    add("ipsa"),
                }};
                includedEventTypes = new String[]{{
                    add("quidem"),
                    add("neque"),
                    add("quo"),
                }};
                perPage = 847276L;
                productType = "quo";
                smDeviceMac = "fuga";
                smDeviceName = "eius";
                startingAfter = "eos";
            }};            

            GetNetworkEventsResponse res = sdk.events.getNetworkEvents(req);

            if (res.getNetworkEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                .setSecurity(new Security("voluptas") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkEventsEventTypesRequest req = new GetNetworkEventsEventTypesRequest("ab");            

            GetNetworkEventsEventTypesResponse res = sdk.events.getNetworkEventsEventTypes(req);

            if (res.getNetworkEventsEventTypes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
