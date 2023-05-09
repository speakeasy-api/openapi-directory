# applications

### Available Operations

* [getNetworkInsightApplicationHealthByTime](#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [getOrganizationInsightApplications](#getorganizationinsightapplications) - List all Insight tracked applications

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
                .setSecurity(new Security("quis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkInsightApplicationHealthByTimeRequest req = new GetNetworkInsightApplicationHealthByTimeRequest("accusantium", "ratione") {{
                resolution = 235813L;
                t0 = "asperiores";
                t1 = "architecto";
                timespan = 5714.98;
            }};            

            GetNetworkInsightApplicationHealthByTimeResponse res = sdk.applications.getNetworkInsightApplicationHealthByTime(req);

            if (res.getNetworkInsightApplicationHealthByTime200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationInsightApplications

List all Insight tracked applications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationInsightApplicationsRequest;
import org.openapis.openapi.models.operations.GetOrganizationInsightApplicationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInsightApplicationsRequest req = new GetOrganizationInsightApplicationsRequest("tempore");            

            GetOrganizationInsightApplicationsResponse res = sdk.applications.getOrganizationInsightApplications(req);

            if (res.getOrganizationInsightApplications200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
