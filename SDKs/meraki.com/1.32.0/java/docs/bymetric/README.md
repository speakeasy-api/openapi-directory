# byMetric

### Available Operations

* [getNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric

## getNetworkSensorAlertsCurrentOverviewByMetric

Return an overview of currently alerting sensors by metric

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsCurrentOverviewByMetricResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsCurrentOverviewByMetricRequest req = new GetNetworkSensorAlertsCurrentOverviewByMetricRequest("sed");            

            GetNetworkSensorAlertsCurrentOverviewByMetricResponse res = sdk.byMetric.getNetworkSensorAlertsCurrentOverviewByMetric(req);

            if (res.getNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSensorAlertsOverviewByMetric

Return an overview of alert occurrences over a timespan, by metric

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsOverviewByMetricRequest;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsOverviewByMetricResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsOverviewByMetricRequest req = new GetNetworkSensorAlertsOverviewByMetricRequest("sed") {{
                interval = 845238L;
                t0 = "reprehenderit";
                t1 = "voluptate";
                timespan = 4424.35;
            }};            

            GetNetworkSensorAlertsOverviewByMetricResponse res = sdk.byMetric.getNetworkSensorAlertsOverviewByMetric(req);

            if (res.getNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
