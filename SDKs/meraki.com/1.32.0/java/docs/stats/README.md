# stats

### Available Operations

* [getOrganizationApplianceVpnStats](#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization

## getOrganizationApplianceVpnStats

Show VPN history stat for networks in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatsRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVpnStatsRequest req = new GetOrganizationApplianceVpnStatsRequest("quidem") {{
                endingBefore = "quidem";
                networkIds = new String[]{{
                    add("debitis"),
                }};
                perPage = 773532L;
                startingAfter = "nemo";
                t0 = "repellendus";
                t1 = "nulla";
                timespan = 2919.28;
            }};            

            GetOrganizationApplianceVpnStatsResponse res = sdk.stats.getOrganizationApplianceVpnStats(req);

            if (res.getOrganizationApplianceVpnStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
