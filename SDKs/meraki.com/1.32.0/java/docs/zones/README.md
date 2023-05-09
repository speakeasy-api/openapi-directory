# zones

### Available Operations

* [getDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getDeviceCameraAnalyticsZones](#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera

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
                .setSecurity(new Security("inventore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsZoneHistoryRequest req = new GetDeviceCameraAnalyticsZoneHistoryRequest("ratione", "animi") {{
                objectType = GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum.VEHICLE;
                resolution = 785443L;
                t0 = "pariatur";
                t1 = "quia";
                timespan = 4429.47;
            }};            

            GetDeviceCameraAnalyticsZoneHistoryResponse res = sdk.zones.getDeviceCameraAnalyticsZoneHistory(req);

            if (res.getDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsZones

Returns all configured analytic zones for this camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZonesRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZonesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsZonesRequest req = new GetDeviceCameraAnalyticsZonesRequest("laudantium");            

            GetDeviceCameraAnalyticsZonesResponse res = sdk.zones.getDeviceCameraAnalyticsZones(req);

            if (res.getDeviceCameraAnalyticsZones200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
