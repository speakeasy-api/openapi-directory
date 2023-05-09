# analytics

### Available Operations

* [getDeviceCameraAnalyticsLive](#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [getDeviceCameraAnalyticsOverview](#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [getDeviceCameraAnalyticsRecent](#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [getDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getDeviceCameraAnalyticsZones](#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera

## getDeviceCameraAnalyticsLive

Returns live state from camera of analytics zones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsLiveRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsLiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsLiveRequest req = new GetDeviceCameraAnalyticsLiveRequest("quae");            

            GetDeviceCameraAnalyticsLiveResponse res = sdk.analytics.getDeviceCameraAnalyticsLive(req);

            if (res.getDeviceCameraAnalyticsLive200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsOverview

Returns an overview of aggregate analytics data for a timespan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsOverviewObjectTypeEnum;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsOverviewRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsOverviewRequest req = new GetDeviceCameraAnalyticsOverviewRequest("fuga") {{
                objectType = GetDeviceCameraAnalyticsOverviewObjectTypeEnum.VEHICLE;
                t0 = "consectetur";
                t1 = "velit";
                timespan = 5388.69;
            }};            

            GetDeviceCameraAnalyticsOverviewResponse res = sdk.analytics.getDeviceCameraAnalyticsOverview(req);

            if (res.getDeviceCameraAnalyticsOverview200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsRecent

Returns most recent record for analytics zones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsRecentObjectTypeEnum;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsRecentRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsRecentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsRecentRequest req = new GetDeviceCameraAnalyticsRecentRequest("impedit") {{
                objectType = GetDeviceCameraAnalyticsRecentObjectTypeEnum.PERSON;
            }};            

            GetDeviceCameraAnalyticsRecentResponse res = sdk.analytics.getDeviceCameraAnalyticsRecent(req);

            if (res.getDeviceCameraAnalyticsRecent200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                .setSecurity(new Security("soluta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsZoneHistoryRequest req = new GetDeviceCameraAnalyticsZoneHistoryRequest("repudiandae", "nam") {{
                objectType = GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum.PERSON;
                resolution = 482892L;
                t0 = "voluptate";
                t1 = "sequi";
                timespan = 4939.58;
            }};            

            GetDeviceCameraAnalyticsZoneHistoryResponse res = sdk.analytics.getDeviceCameraAnalyticsZoneHistory(req);

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
                .setSecurity(new Security("neque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsZonesRequest req = new GetDeviceCameraAnalyticsZonesRequest("quo");            

            GetDeviceCameraAnalyticsZonesResponse res = sdk.analytics.getDeviceCameraAnalyticsZones(req);

            if (res.getDeviceCameraAnalyticsZones200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
