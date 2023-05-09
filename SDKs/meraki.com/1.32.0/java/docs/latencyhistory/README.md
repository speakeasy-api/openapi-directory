# latencyHistory

### Available Operations

* [getNetworkWirelessClientLatencyHistory](#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [getNetworkWirelessLatencyHistory](#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client

## getNetworkWirelessClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientLatencyHistoryRequest req = new GetNetworkWirelessClientLatencyHistoryRequest("tenetur", "consectetur") {{
                resolution = 381771L;
                t0 = "modi";
                t1 = "rem";
                timespan = 145.09;
            }};            

            GetNetworkWirelessClientLatencyHistoryResponse res = sdk.latencyHistory.getNetworkWirelessClientLatencyHistory(req);

            if (res.getNetworkWirelessClientLatencyHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessLatencyHistory

Return average wireless latency over time for a network, device, or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyHistoryAccessCategoryEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessLatencyHistoryRequest req = new GetNetworkWirelessLatencyHistoryRequest("nemo") {{
                accessCategory = GetNetworkWirelessLatencyHistoryAccessCategoryEnum.VOICE_TRAFFIC;
                apTag = "repellendus";
                autoResolution = false;
                band = GetNetworkWirelessLatencyHistoryBandEnum.SIX;
                clientId = "possimus";
                deviceSerial = "perspiciatis";
                resolution = 361427L;
                ssid = 65709L;
                t0 = "voluptatem";
                t1 = "dolor";
                timespan = 3478.38;
            }};            

            GetNetworkWirelessLatencyHistoryResponse res = sdk.latencyHistory.getNetworkWirelessLatencyHistory(req);

            if (res.getNetworkWirelessLatencyHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
