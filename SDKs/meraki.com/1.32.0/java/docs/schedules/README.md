# schedules

### Available Operations

* [getNetworkCameraSchedules](#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [getNetworkWirelessSsidSchedules](#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [updateNetworkWirelessSsidSchedules](#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID

## getNetworkCameraSchedules

Returns a list of all camera recording schedules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCameraSchedulesRequest;
import org.openapis.openapi.models.operations.GetNetworkCameraSchedulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCameraSchedulesRequest req = new GetNetworkCameraSchedulesRequest("asperiores");            

            GetNetworkCameraSchedulesResponse res = sdk.schedules.getNetworkCameraSchedules(req);

            if (res.getNetworkCameraSchedules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidSchedules

List the outage schedule for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSchedulesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSchedulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidSchedulesRequest req = new GetNetworkWirelessSsidSchedulesRequest("saepe", "mollitia");            

            GetNetworkWirelessSsidSchedulesResponse res = sdk.schedules.getNetworkWirelessSsidSchedules(req);

            if (res.getNetworkWirelessSsidSchedules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidSchedules

Update the outage schedule for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidSchedulesRequest req = new UpdateNetworkWirelessSsidSchedulesRequest("dolor", "aliquid") {{
                requestBody = new UpdateNetworkWirelessSsidSchedulesRequestBody() {{
                    enabled = false;
                    ranges = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges[]{{
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges("adipisci", "consequuntur", "labore", "possimus") {{
                            endDay = "laudantium";
                            endTime = "voluptate";
                            startDay = "sint";
                            startTime = "aliquid";
                        }}),
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges("distinctio", "officia", "magnam", "voluptatem") {{
                            endDay = "natus";
                            endTime = "officiis";
                            startDay = "quis";
                            startTime = "enim";
                        }}),
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges("beatae", "iusto", "earum", "dolore") {{
                            endDay = "dolorem";
                            endTime = "reprehenderit";
                            startDay = "deleniti";
                            startTime = "voluptatum";
                        }}),
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges("distinctio", "quibusdam", "unde", "saepe") {{
                            endDay = "dolor";
                            endTime = "molestias";
                            startDay = "quam";
                            startTime = "minus";
                        }}),
                    }};
                    rangesInSeconds = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds[]{{
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(961548L, 456317L) {{
                            end = 117456L;
                            start = 935883L;
                        }}),
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(348727L, 145057L) {{
                            end = 715942L;
                            start = 681306L;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidSchedulesResponse res = sdk.schedules.updateNetworkWirelessSsidSchedules(req);

            if (res.updateNetworkWirelessSsidSchedules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
