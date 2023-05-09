# performance

### Available Operations

* [getDeviceAppliancePerformance](#getdeviceapplianceperformance) - Return the performance score for a single MX

## getDeviceAppliancePerformance

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceAppliancePerformanceRequest;
import org.openapis.openapi.models.operations.GetDeviceAppliancePerformanceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceAppliancePerformanceRequest req = new GetDeviceAppliancePerformanceRequest("sit");            

            GetDeviceAppliancePerformanceResponse res = sdk.performance.getDeviceAppliancePerformance(req);

            if (res.getDeviceAppliancePerformance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
