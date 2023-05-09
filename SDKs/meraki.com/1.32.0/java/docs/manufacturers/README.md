# manufacturers

### Available Operations

* [getOrganizationSummaryTopClientsManufacturersByUsage](#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

## getOrganizationSummaryTopClientsManufacturersByUsage

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsManufacturersByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopClientsManufacturersByUsageRequest req = new GetOrganizationSummaryTopClientsManufacturersByUsageRequest("voluptatem") {{
                t0 = "quos";
                t1 = "est";
                timespan = 6364.04;
            }};            

            GetOrganizationSummaryTopClientsManufacturersByUsageResponse res = sdk.manufacturers.getOrganizationSummaryTopClientsManufacturersByUsage(req);

            if (res.getOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
