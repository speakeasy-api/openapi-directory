# wirelessHealth

### Available Operations

* [getNetworkClientConnectionStats](#getnetworkclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkClientLatencyStats](#getnetworkclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkClientsConnectionStats](#getnetworkclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkClientsLatencyStats](#getnetworkclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getNetworkConnectionStats](#getnetworkconnectionstats) - Aggregated connectivity info for this network
* [getNetworkDeviceConnectionStats](#getnetworkdeviceconnectionstats) - Aggregated connectivity info for a given AP on this network
* [getNetworkDeviceLatencyStats](#getnetworkdevicelatencystats) - Aggregated latency info for a given AP on this network
* [getNetworkDevicesConnectionStats](#getnetworkdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [getNetworkDevicesLatencyStats](#getnetworkdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getNetworkFailedConnections](#getnetworkfailedconnections) - List of all failed client connection events on this network in a given time range
* [getNetworkLatencyStats](#getnetworklatencystats) - Aggregated latency info for this network

## getNetworkClientConnectionStats

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkClientConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkClientConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientConnectionStatsRequest req = new GetNetworkClientConnectionStatsRequest("recusandae", "tempora") {{
                apTag = "blanditiis";
                band = GetNetworkClientConnectionStatsBandEnum.TWO4;
                ssid = 196374L;
                t0 = "voluptatum";
                t1 = "sit";
                timespan = 7031.89;
                vlan = 84178L;
            }};            

            GetNetworkClientConnectionStatsResponse res = sdk.wirelessHealth.getNetworkClientConnectionStats(req);

            if (res.getNetworkClientConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientLatencyStats

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkClientLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkClientLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientLatencyStatsRequest req = new GetNetworkClientLatencyStatsRequest("autem", "quidem") {{
                apTag = "totam";
                band = GetNetworkClientLatencyStatsBandEnum.FIVE;
                fields = "deserunt";
                ssid = 168926L;
                t0 = "nihil";
                t1 = "voluptas";
                timespan = 6581.99;
                vlan = 413780L;
            }};            

            GetNetworkClientLatencyStatsResponse res = sdk.wirelessHealth.getNetworkClientLatencyStats(req);

            if (res.getNetworkClientLatencyStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientsConnectionStats

Aggregated connectivity info for this network, grouped by clients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkClientsConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsConnectionStatsRequest req = new GetNetworkClientsConnectionStatsRequest("fuga") {{
                apTag = "aut";
                band = GetNetworkClientsConnectionStatsBandEnum.TWO4;
                ssid = 802734L;
                t0 = "aliquam";
                t1 = "iste";
                timespan = 3558.89;
                vlan = 755738L;
            }};            

            GetNetworkClientsConnectionStatsResponse res = sdk.wirelessHealth.getNetworkClientsConnectionStats(req);

            if (res.getNetworkClientsConnectionStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientsLatencyStats

Aggregated latency info for this network, grouped by clients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkClientsLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsLatencyStatsRequest req = new GetNetworkClientsLatencyStatsRequest("voluptas") {{
                apTag = "occaecati";
                band = GetNetworkClientsLatencyStatsBandEnum.FIVE;
                fields = "illo";
                ssid = 469170L;
                t0 = "inventore";
                t1 = "libero";
                timespan = 3712.87;
                vlan = 97659L;
            }};            

            GetNetworkClientsLatencyStatsResponse res = sdk.wirelessHealth.getNetworkClientsLatencyStats(req);

            if (res.getNetworkClientsLatencyStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkConnectionStats

Aggregated connectivity info for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkConnectionStatsRequest req = new GetNetworkConnectionStatsRequest("dicta") {{
                apTag = "harum";
                band = GetNetworkConnectionStatsBandEnum.FIVE;
                ssid = 707983L;
                t0 = "beatae";
                t1 = "cumque";
                timespan = 9645.11;
                vlan = 287152L;
            }};            

            GetNetworkConnectionStatsResponse res = sdk.wirelessHealth.getNetworkConnectionStats(req);

            if (res.getNetworkConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkDeviceConnectionStats

Aggregated connectivity info for a given AP on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkDeviceConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkDeviceConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkDeviceConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkDeviceConnectionStatsRequest req = new GetNetworkDeviceConnectionStatsRequest("corrupti", "rem") {{
                apTag = "atque";
                band = GetNetworkDeviceConnectionStatsBandEnum.FIVE;
                ssid = 739633L;
                t0 = "pariatur";
                t1 = "sapiente";
                timespan = 7754.27;
                vlan = 277990L;
            }};            

            GetNetworkDeviceConnectionStatsResponse res = sdk.wirelessHealth.getNetworkDeviceConnectionStats(req);

            if (res.getNetworkDeviceConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkDeviceLatencyStats

Aggregated latency info for a given AP on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkDeviceLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkDeviceLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkDeviceLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkDeviceLatencyStatsRequest req = new GetNetworkDeviceLatencyStatsRequest("minus", "porro") {{
                apTag = "id";
                band = GetNetworkDeviceLatencyStatsBandEnum.FIVE;
                fields = "occaecati";
                ssid = 726851L;
                t0 = "quo";
                t1 = "esse";
                timespan = 9440.33;
                vlan = 802216L;
            }};            

            GetNetworkDeviceLatencyStatsResponse res = sdk.wirelessHealth.getNetworkDeviceLatencyStats(req);

            if (res.getNetworkDeviceLatencyStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkDevicesConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkDevicesConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkDevicesConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkDevicesConnectionStatsRequest req = new GetNetworkDevicesConnectionStatsRequest("soluta") {{
                apTag = "fugit";
                band = GetNetworkDevicesConnectionStatsBandEnum.FIVE;
                ssid = 756287L;
                t0 = "recusandae";
                t1 = "veritatis";
                timespan = 136.37;
                vlan = 516124L;
            }};            

            GetNetworkDevicesConnectionStatsResponse res = sdk.wirelessHealth.getNetworkDevicesConnectionStats(req);

            if (res.getNetworkDevicesConnectionStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkDevicesLatencyStats

Aggregated latency info for this network, grouped by node

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkDevicesLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkDevicesLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkDevicesLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkDevicesLatencyStatsRequest req = new GetNetworkDevicesLatencyStatsRequest("dolor") {{
                apTag = "voluptates";
                band = GetNetworkDevicesLatencyStatsBandEnum.TWO4;
                fields = "magni";
                ssid = 701841L;
                t0 = "doloremque";
                t1 = "voluptatem";
                timespan = 4301.46;
                vlan = 873320L;
            }};            

            GetNetworkDevicesLatencyStatsResponse res = sdk.wirelessHealth.getNetworkDevicesLatencyStats(req);

            if (res.getNetworkDevicesLatencyStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFailedConnections

List of all failed client connection events on this network in a given time range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFailedConnectionsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkFailedConnectionsRequest;
import org.openapis.openapi.models.operations.GetNetworkFailedConnectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFailedConnectionsRequest req = new GetNetworkFailedConnectionsRequest("reprehenderit") {{
                apTag = "voluptatum";
                band = GetNetworkFailedConnectionsBandEnum.FIVE;
                clientId = "nihil";
                serial = "atque";
                ssid = 697994L;
                t0 = "deserunt";
                t1 = "atque";
                timespan = 3448.56;
                vlan = 542340L;
            }};            

            GetNetworkFailedConnectionsResponse res = sdk.wirelessHealth.getNetworkFailedConnections(req);

            if (res.getNetworkFailedConnections200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkLatencyStats

Aggregated latency info for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkLatencyStatsRequest req = new GetNetworkLatencyStatsRequest("est") {{
                apTag = "enim";
                band = GetNetworkLatencyStatsBandEnum.FIVE;
                fields = "magni";
                ssid = 62130L;
                t0 = "quas";
                t1 = "placeat";
                timespan = 3180.28;
                vlan = 286453L;
            }};            

            GetNetworkLatencyStatsResponse res = sdk.wirelessHealth.getNetworkLatencyStats(req);

            if (res.getNetworkLatencyStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
