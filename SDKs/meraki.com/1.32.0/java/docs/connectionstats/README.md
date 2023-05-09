# connectionStats

### Available Operations

* [getDeviceWirelessConnectionStats](#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [getNetworkWirelessClientConnectionStats](#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkWirelessClientsConnectionStats](#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkWirelessConnectionStats](#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [getNetworkWirelessDevicesConnectionStats](#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node

## getDeviceWirelessConnectionStats

Aggregated connectivity info for a given AP on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetDeviceWirelessConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessConnectionStatsRequest req = new GetDeviceWirelessConnectionStatsRequest("sequi") {{
                apTag = "reprehenderit";
                band = GetDeviceWirelessConnectionStatsBandEnum.FIVE;
                ssid = 760957L;
                t0 = "voluptas";
                t1 = "error";
                timespan = 5553;
                vlan = 902486L;
            }};            

            GetDeviceWirelessConnectionStatsResponse res = sdk.connectionStats.getDeviceWirelessConnectionStats(req);

            if (res.getDeviceWirelessConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientConnectionStats

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientConnectionStatsRequest req = new GetNetworkWirelessClientConnectionStatsRequest("illo", "temporibus") {{
                apTag = "ut";
                band = GetNetworkWirelessClientConnectionStatsBandEnum.FIVE;
                ssid = 781686L;
                t0 = "minima";
                t1 = "placeat";
                timespan = 1810.8;
                vlan = 946348L;
            }};            

            GetNetworkWirelessClientConnectionStatsResponse res = sdk.connectionStats.getNetworkWirelessClientConnectionStats(req);

            if (res.getNetworkWirelessClientConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientsConnectionStats

Aggregated connectivity info for this network, grouped by clients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientsConnectionStatsRequest req = new GetNetworkWirelessClientsConnectionStatsRequest("itaque") {{
                apTag = "aspernatur";
                band = GetNetworkWirelessClientsConnectionStatsBandEnum.TWO4;
                ssid = 855808L;
                t0 = "provident";
                t1 = "voluptatem";
                timespan = 9389.52;
                vlan = 845300L;
            }};            

            GetNetworkWirelessClientsConnectionStatsResponse res = sdk.connectionStats.getNetworkWirelessClientsConnectionStats(req);

            if (res.getNetworkWirelessClientsConnectionStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessConnectionStats

Aggregated connectivity info for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessConnectionStatsRequest req = new GetNetworkWirelessConnectionStatsRequest("ipsum") {{
                apTag = "esse";
                band = GetNetworkWirelessConnectionStatsBandEnum.FIVE;
                ssid = 413486L;
                t0 = "libero";
                t1 = "repellat";
                timespan = 7841.67;
                vlan = 489468L;
            }};            

            GetNetworkWirelessConnectionStatsResponse res = sdk.connectionStats.getNetworkWirelessConnectionStats(req);

            if (res.getNetworkWirelessConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessDevicesConnectionStatsRequest req = new GetNetworkWirelessDevicesConnectionStatsRequest("molestiae") {{
                apTag = "ducimus";
                band = GetNetworkWirelessDevicesConnectionStatsBandEnum.SIX;
                ssid = 29572L;
                t0 = "doloribus";
                t1 = "nostrum";
                timespan = 403.55;
                vlan = 261579L;
            }};            

            GetNetworkWirelessDevicesConnectionStatsResponse res = sdk.connectionStats.getNetworkWirelessDevicesConnectionStats(req);

            if (res.getNetworkWirelessDevicesConnectionStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
