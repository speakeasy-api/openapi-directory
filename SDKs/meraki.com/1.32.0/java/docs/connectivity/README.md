# connectivity

### Available Operations

* [getNetworkSmDeviceConnectivity](#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

## getNetworkSmDeviceConnectivity

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceConnectivityRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceConnectivityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceConnectivityRequest req = new GetNetworkSmDeviceConnectivityRequest("laboriosam", "debitis") {{
                endingBefore = "magnam";
                perPage = 534563L;
                startingAfter = "consequuntur";
            }};            

            GetNetworkSmDeviceConnectivityResponse res = sdk.connectivity.getNetworkSmDeviceConnectivity(req);

            if (res.getNetworkSmDeviceConnectivity200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
