# switchPorts

### Available Operations

* [getDeviceSwitchPortStatuses](#getdeviceswitchportstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortStatusesPackets](#getdeviceswitchportstatusespackets) - Return the packet counters for all the ports of a switch

## getDeviceSwitchPortStatuses

Return the status for all the ports of a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortStatusesRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortStatusesRequest req = new GetDeviceSwitchPortStatusesRequest("blanditiis") {{
                t0 = "quae";
                timespan = 1698.19;
            }};            

            GetDeviceSwitchPortStatusesResponse res = sdk.switchPorts.getDeviceSwitchPortStatuses(req);

            if (res.getDeviceSwitchPortStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchPortStatusesPackets

Return the packet counters for all the ports of a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortStatusesPacketsRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortStatusesPacketsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortStatusesPacketsRequest req = new GetDeviceSwitchPortStatusesPacketsRequest("sed") {{
                t0 = "necessitatibus";
                timespan = 7732.59;
            }};            

            GetDeviceSwitchPortStatusesPacketsResponse res = sdk.switchPorts.getDeviceSwitchPortStatusesPackets(req);

            if (res.getDeviceSwitchPortStatusesPackets200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
