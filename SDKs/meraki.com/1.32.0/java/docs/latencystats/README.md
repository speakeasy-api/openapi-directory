# latencyStats

### Available Operations

* [getDeviceWirelessLatencyStats](#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [getNetworkWirelessClientLatencyStats](#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkWirelessClientsLatencyStats](#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getNetworkWirelessDevicesLatencyStats](#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getNetworkWirelessLatencyStats](#getnetworkwirelesslatencystats) - Aggregated latency info for this network

## getDeviceWirelessLatencyStats

Aggregated latency info for a given AP on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetDeviceWirelessLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessLatencyStatsRequest req = new GetDeviceWirelessLatencyStatsRequest("nulla") {{
                apTag = "laudantium";
                band = GetDeviceWirelessLatencyStatsBandEnum.TWO4;
                fields = "asperiores";
                ssid = 738089L;
                t0 = "temporibus";
                t1 = "amet";
                timespan = 4888.35;
                vlan = 883521L;
            }};            

            GetDeviceWirelessLatencyStatsResponse res = sdk.latencyStats.getDeviceWirelessLatencyStats(req);

            if (res.getDeviceWirelessLatencyStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientLatencyStats

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientLatencyStatsRequest req = new GetNetworkWirelessClientLatencyStatsRequest("ad", "doloremque") {{
                apTag = "officiis";
                band = GetNetworkWirelessClientLatencyStatsBandEnum.SIX;
                fields = "quos";
                ssid = 381831L;
                t0 = "nam";
                t1 = "voluptatem";
                timespan = 8499.36;
                vlan = 924297L;
            }};            

            GetNetworkWirelessClientLatencyStatsResponse res = sdk.latencyStats.getNetworkWirelessClientLatencyStats(req);

            if (res.getNetworkWirelessClientLatencyStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientsLatencyStats

Aggregated latency info for this network, grouped by clients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientsLatencyStatsRequest req = new GetNetworkWirelessClientsLatencyStatsRequest("reprehenderit") {{
                apTag = "non";
                band = GetNetworkWirelessClientsLatencyStatsBandEnum.SIX;
                fields = "doloremque";
                ssid = 540047L;
                t0 = "veniam";
                t1 = "quisquam";
                timespan = 9022.43;
                vlan = 962380L;
            }};            

            GetNetworkWirelessClientsLatencyStatsResponse res = sdk.latencyStats.getNetworkWirelessClientsLatencyStats(req);

            if (res.getNetworkWirelessClientsLatencyStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessDevicesLatencyStats

Aggregated latency info for this network, grouped by node

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessDevicesLatencyStatsRequest req = new GetNetworkWirelessDevicesLatencyStatsRequest("error") {{
                apTag = "nulla";
                band = GetNetworkWirelessDevicesLatencyStatsBandEnum.TWO4;
                fields = "voluptatem";
                ssid = 588222L;
                t0 = "quod";
                t1 = "voluptatem";
                timespan = 6345.2;
                vlan = 344841L;
            }};            

            GetNetworkWirelessDevicesLatencyStatsResponse res = sdk.latencyStats.getNetworkWirelessDevicesLatencyStats(req);

            if (res.getNetworkWirelessDevicesLatencyStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessLatencyStats

Aggregated latency info for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessLatencyStatsRequest req = new GetNetworkWirelessLatencyStatsRequest("illo") {{
                apTag = "dignissimos";
                band = GetNetworkWirelessLatencyStatsBandEnum.TWO4;
                fields = "explicabo";
                ssid = 898729L;
                t0 = "velit";
                t1 = "dolorem";
                timespan = 7888.04;
                vlan = 782510L;
            }};            

            GetNetworkWirelessLatencyStatsResponse res = sdk.latencyStats.getNetworkWirelessLatencyStats(req);

            if (res.getNetworkWirelessLatencyStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
