# bandwidthUsageHistory

### Available Operations

* [getNetworkClientsBandwidthUsageHistory](#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [getOrganizationClientsBandwidthUsageHistory](#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

## getNetworkClientsBandwidthUsageHistory

Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsBandwidthUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsBandwidthUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsBandwidthUsageHistoryRequest req = new GetNetworkClientsBandwidthUsageHistoryRequest("ipsam") {{
                endingBefore = "dicta";
                perPage = 944475L;
                startingAfter = "praesentium";
                t0 = "libero";
                t1 = "consequatur";
                timespan = 5167.39;
            }};            

            GetNetworkClientsBandwidthUsageHistoryResponse res = sdk.bandwidthUsageHistory.getNetworkClientsBandwidthUsageHistory(req);

            if (res.getNetworkClientsBandwidthUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationClientsBandwidthUsageHistory

Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationClientsBandwidthUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetOrganizationClientsBandwidthUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationClientsBandwidthUsageHistoryRequest req = new GetOrganizationClientsBandwidthUsageHistoryRequest("quo") {{
                t0 = "dolor";
                t1 = "sunt";
                timespan = 6050.89;
            }};            

            GetOrganizationClientsBandwidthUsageHistoryResponse res = sdk.bandwidthUsageHistory.getOrganizationClientsBandwidthUsageHistory(req);

            if (res.getOrganizationClientsBandwidthUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
