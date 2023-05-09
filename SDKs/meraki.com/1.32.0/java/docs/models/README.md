# models

### Available Operations

* [getOrganizationSummaryTopDevicesModelsByUsage](#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range

## getOrganizationSummaryTopDevicesModelsByUsage

Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesModelsByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopDevicesModelsByUsageRequest req = new GetOrganizationSummaryTopDevicesModelsByUsageRequest("omnis") {{
                t0 = "occaecati";
                t1 = "dolor";
                timespan = 2079.98;
            }};            

            GetOrganizationSummaryTopDevicesModelsByUsageResponse res = sdk.models.getOrganizationSummaryTopDevicesModelsByUsage(req);

            if (res.getOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
