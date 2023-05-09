# healthByTime

### Available Operations

* [getNetworkInsightApplicationHealthByTime](#getnetworkinsightapplicationhealthbytime) - Get application health by time

## getNetworkInsightApplicationHealthByTime

Get application health by time

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkInsightApplicationHealthByTimeRequest;
import org.openapis.openapi.models.operations.GetNetworkInsightApplicationHealthByTimeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkInsightApplicationHealthByTimeRequest req = new GetNetworkInsightApplicationHealthByTimeRequest("necessitatibus", "eius") {{
                resolution = 134627L;
                t0 = "animi";
                t1 = "ipsum";
                timespan = 2069.78;
            }};            

            GetNetworkInsightApplicationHealthByTimeResponse res = sdk.healthByTime.getNetworkInsightApplicationHealthByTime(req);

            if (res.getNetworkInsightApplicationHealthByTime200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
