# switches

### Available Operations

* [getOrganizationSummaryTopSwitchesByEnergyUsage](#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

## getOrganizationSummaryTopSwitchesByEnergyUsage

Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopSwitchesByEnergyUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopSwitchesByEnergyUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopSwitchesByEnergyUsageRequest req = new GetOrganizationSummaryTopSwitchesByEnergyUsageRequest("rem") {{
                t0 = "dignissimos";
                t1 = "deleniti";
                timespan = 6467.93;
            }};            

            GetOrganizationSummaryTopSwitchesByEnergyUsageResponse res = sdk.switches.getOrganizationSummaryTopSwitchesByEnergyUsage(req);

            if (res.getOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
