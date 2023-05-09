# performanceHistory

### Available Operations

* [getNetworkSmDevicePerformanceHistory](#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.

## getNetworkSmDevicePerformanceHistory

Return historical records of various Systems Manager client metrics for desktop devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDevicePerformanceHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDevicePerformanceHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDevicePerformanceHistoryRequest req = new GetNetworkSmDevicePerformanceHistoryRequest("eligendi", "ullam") {{
                endingBefore = "deleniti";
                perPage = 774467L;
                startingAfter = "magnam";
            }};            

            GetNetworkSmDevicePerformanceHistoryResponse res = sdk.performanceHistory.getNetworkSmDevicePerformanceHistory(req);

            if (res.getNetworkSmDevicePerformanceHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
