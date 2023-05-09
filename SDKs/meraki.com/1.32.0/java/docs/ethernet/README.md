# ethernet

### Available Operations

* [getOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices

## getOrganizationWirelessDevicesEthernetStatuses

Endpoint to see power status for wireless devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationWirelessDevicesEthernetStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationWirelessDevicesEthernetStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationWirelessDevicesEthernetStatusesRequest req = new GetOrganizationWirelessDevicesEthernetStatusesRequest("dicta") {{
                endingBefore = "facilis";
                networkIds = new String[]{{
                    add("voluptates"),
                    add("odit"),
                    add("aperiam"),
                }};
                perPage = 342479L;
                startingAfter = "ipsum";
            }};            

            GetOrganizationWirelessDevicesEthernetStatusesResponse res = sdk.ethernet.getOrganizationWirelessDevicesEthernetStatuses(req);

            if (res.getOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
