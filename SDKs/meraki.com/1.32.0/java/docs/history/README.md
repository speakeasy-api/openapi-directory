# history

### Available Operations

* [getDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getNetworkAlertsHistory](#getnetworkalertshistory) - Return the alert history for this network
* [getOrganizationSensorReadingsHistory](#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp

## getDeviceCameraAnalyticsZoneHistory

Return historical records for analytic zones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZoneHistoryRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZoneHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsZoneHistoryRequest req = new GetDeviceCameraAnalyticsZoneHistoryRequest("ullam", "expedita") {{
                objectType = GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum.VEHICLE;
                resolution = 529411L;
                t0 = "eos";
                t1 = "molestiae";
                timespan = 4724.71;
            }};            

            GetDeviceCameraAnalyticsZoneHistoryResponse res = sdk.history.getDeviceCameraAnalyticsZoneHistory(req);

            if (res.getDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAlertsHistory

Return the alert history for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAlertsHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkAlertsHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAlertsHistoryRequest req = new GetNetworkAlertsHistoryRequest("quidem") {{
                endingBefore = "sapiente";
                perPage = 394745L;
                startingAfter = "quibusdam";
            }};            

            GetNetworkAlertsHistoryResponse res = sdk.history.getNetworkAlertsHistory(req);

            if (res.getNetworkAlertsHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSensorReadingsHistory

Return all reported readings from sensors in a given timespan, sorted by timestamp

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsHistoryRequest;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSensorReadingsHistoryRequest req = new GetOrganizationSensorReadingsHistoryRequest("possimus") {{
                endingBefore = "saepe";
                metrics = new String[]{{
                    add("illo"),
                    add("quo"),
                    add("rerum"),
                    add("odit"),
                }};
                networkIds = new String[]{{
                    add("reiciendis"),
                    add("fugiat"),
                }};
                perPage = 933719L;
                serials = new String[]{{
                    add("quidem"),
                }};
                startingAfter = "ex";
                t0 = "dolore";
                t1 = "quas";
                timespan = 11.11;
            }};            

            GetOrganizationSensorReadingsHistoryResponse res = sdk.history.getOrganizationSensorReadingsHistory(req);

            if (res.getOrganizationSensorReadingsHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
