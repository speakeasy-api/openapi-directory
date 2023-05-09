# appliances

### Available Operations

* [getOrganizationSummaryTopAppliancesByUtilization](#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.

## getOrganizationSummaryTopAppliancesByUtilization

Return the top 10 appliances sorted by utilization over given time range.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopAppliancesByUtilizationRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopAppliancesByUtilizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopAppliancesByUtilizationRequest req = new GetOrganizationSummaryTopAppliancesByUtilizationRequest("quibusdam") {{
                t0 = "quam";
                t1 = "deleniti";
                timespan = 5232.66;
            }};            

            GetOrganizationSummaryTopAppliancesByUtilizationResponse res = sdk.appliances.getOrganizationSummaryTopAppliancesByUtilization(req);

            if (res.getOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
