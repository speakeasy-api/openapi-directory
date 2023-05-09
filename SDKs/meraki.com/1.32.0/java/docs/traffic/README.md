# traffic

### Available Operations

* [getNetworkTraffic](#getnetworktraffic) - Return the traffic analysis data for this network

## getNetworkTraffic

Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTrafficDeviceTypeEnum;
import org.openapis.openapi.models.operations.GetNetworkTrafficRequest;
import org.openapis.openapi.models.operations.GetNetworkTrafficResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTrafficRequest req = new GetNetworkTrafficRequest("sed") {{
                deviceType = GetNetworkTrafficDeviceTypeEnum.WIRELESS;
                t0 = "ducimus";
                timespan = 1849.11;
            }};            

            GetNetworkTrafficResponse res = sdk.traffic.getNetworkTraffic(req);

            if (res.getNetworkTraffic200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
