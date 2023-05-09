# clients

### Available Operations

* [getDeviceClients](#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [getNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkClient](#getnetworkclient) - Return the client associated with the given identifier
* [getNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [getNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [getNetworkClientTrafficHistory](#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [getNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkClients](#getnetworkclients) - List the clients that have used this network in the timespan
* [getNetworkClientsApplicationUsage](#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [getNetworkClientsBandwidthUsageHistory](#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [getNetworkClientsOverview](#getnetworkclientsoverview) - Return overview statistics for network clients
* [getNetworkClientsUsageHistories](#getnetworkclientsusagehistories) - Return the usage histories for clients
* [getNetworkWirelessClientConnectionStats](#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkWirelessClientConnectivityEvents](#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [getNetworkWirelessClientLatencyHistory](#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [getNetworkWirelessClientLatencyStats](#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkWirelessClientsConnectionStats](#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkWirelessClientsLatencyStats](#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getOrganizationClientsBandwidthUsageHistory](#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* [getOrganizationClientsOverview](#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [getOrganizationClientsSearch](#getorganizationclientssearch) - Return the client details in an organization
* [getOrganizationSummaryTopClientsByUsage](#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [getOrganizationSummaryTopClientsManufacturersByUsage](#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [provisionNetworkClients](#provisionnetworkclients) - Provisions a client with a name and policy
* [updateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [updateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

## getDeviceClients

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceClientsRequest;
import org.openapis.openapi.models.operations.GetDeviceClientsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceClientsRequest req = new GetDeviceClientsRequest("adipisci") {{
                t0 = "reprehenderit";
                timespan = 6594.18;
            }};            

            GetDeviceClientsResponse res = sdk.clients.getDeviceClients(req);

            if (res.getDeviceClients200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceClientSecurityEventsRequest req = new GetNetworkApplianceClientSecurityEventsRequest("dolores", "asperiores") {{
                endingBefore = "occaecati";
                perPage = 42387L;
                sortOrder = GetNetworkApplianceClientSecurityEventsSortOrderEnum.DESCENDING;
                startingAfter = "magnam";
                t0 = "excepturi";
                t1 = "fugiat";
                timespan = 3849.39;
            }};            

            GetNetworkApplianceClientSecurityEventsResponse res = sdk.clients.getNetworkApplianceClientSecurityEvents(req);

            if (res.getNetworkApplianceClientSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClient

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientRequest;
import org.openapis.openapi.models.operations.GetNetworkClientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientRequest req = new GetNetworkClientRequest("itaque", "assumenda");            

            GetNetworkClientResponse res = sdk.clients.getNetworkClient(req);

            if (res.getNetworkClient200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientPolicyRequest;
import org.openapis.openapi.models.operations.GetNetworkClientPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientPolicyRequest req = new GetNetworkClientPolicyRequest("id", "eveniet");            

            GetNetworkClientPolicyResponse res = sdk.clients.getNetworkClientPolicy(req);

            if (res.getNetworkClientPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientSplashAuthorizationStatusRequest;
import org.openapis.openapi.models.operations.GetNetworkClientSplashAuthorizationStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientSplashAuthorizationStatusRequest req = new GetNetworkClientSplashAuthorizationStatusRequest("soluta", "dignissimos");            

            GetNetworkClientSplashAuthorizationStatusResponse res = sdk.clients.getNetworkClientSplashAuthorizationStatus(req);

            if (res.getNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientTrafficHistory

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientTrafficHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkClientTrafficHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientTrafficHistoryRequest req = new GetNetworkClientTrafficHistoryRequest("neque", "esse") {{
                endingBefore = "placeat";
                perPage = 872798L;
                startingAfter = "excepturi";
            }};            

            GetNetworkClientTrafficHistoryResponse res = sdk.clients.getNetworkClientTrafficHistory(req);

            if (res.getNetworkClientTrafficHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientUsageHistory

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkClientUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientUsageHistoryRequest req = new GetNetworkClientUsageHistoryRequest("odit", "quia");            

            GetNetworkClientUsageHistoryResponse res = sdk.clients.getNetworkClientUsageHistory(req);

            if (res.getNetworkClientUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClients

List the clients that have used this network in the timespan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsRecentDeviceConnectionsEnum;
import org.openapis.openapi.models.operations.GetNetworkClientsRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsResponse;
import org.openapis.openapi.models.operations.GetNetworkClientsStatusesEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsRequest req = new GetNetworkClientsRequest("excepturi") {{
                description = "sapiente";
                endingBefore = "maiores";
                ip = "exercitationem";
                ip6 = "ducimus";
                ip6Local = "dolore";
                mac = "iste";
                os = "inventore";
                perPage = 625815L;
                recentDeviceConnections = new org.openapis.openapi.models.operations.GetNetworkClientsRecentDeviceConnectionsEnum[]{{
                    add(GetNetworkClientsRecentDeviceConnectionsEnum.WIRELESS),
                    add(GetNetworkClientsRecentDeviceConnectionsEnum.WIRELESS),
                    add(GetNetworkClientsRecentDeviceConnectionsEnum.WIRELESS),
                }};
                startingAfter = "aspernatur";
                statuses = new org.openapis.openapi.models.operations.GetNetworkClientsStatusesEnum[]{{
                    add(GetNetworkClientsStatusesEnum.OFFLINE),
                    add(GetNetworkClientsStatusesEnum.OFFLINE),
                    add(GetNetworkClientsStatusesEnum.OFFLINE),
                    add(GetNetworkClientsStatusesEnum.ONLINE),
                }};
                t0 = "accusantium";
                timespan = 7782.31;
                vlan = "id";
            }};            

            GetNetworkClientsResponse res = sdk.clients.getNetworkClients(req);

            if (res.getNetworkClients200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientsApplicationUsage

Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsApplicationUsageRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsApplicationUsageResponse;
import org.openapis.openapi.models.operations.GetNetworkClientsApplicationUsageSsidNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsApplicationUsageRequest req = new GetNetworkClientsApplicationUsageRequest("pariatur", "labore") {{
                endingBefore = "quis";
                perPage = 398578L;
                ssidNumber = GetNetworkClientsApplicationUsageSsidNumberEnum.THIRTEEN;
                startingAfter = "reiciendis";
                t0 = "dicta";
                t1 = "sit";
                timespan = 2379.6;
            }};            

            GetNetworkClientsApplicationUsageResponse res = sdk.clients.getNetworkClientsApplicationUsage(req);

            if (res.getNetworkClientsApplicationUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                .setSecurity(new Security("inventore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsBandwidthUsageHistoryRequest req = new GetNetworkClientsBandwidthUsageHistoryRequest("saepe") {{
                endingBefore = "iure";
                perPage = 508510L;
                startingAfter = "perspiciatis";
                t0 = "omnis";
                t1 = "hic";
                timespan = 380.18;
            }};            

            GetNetworkClientsBandwidthUsageHistoryResponse res = sdk.clients.getNetworkClientsBandwidthUsageHistory(req);

            if (res.getNetworkClientsBandwidthUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientsOverview

Return overview statistics for network clients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsOverviewRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsOverviewRequest req = new GetNetworkClientsOverviewRequest("explicabo") {{
                resolution = 38173L;
                t0 = "ipsa";
                t1 = "quasi";
                timespan = 9050.01;
            }};            

            GetNetworkClientsOverviewResponse res = sdk.clients.getNetworkClientsOverview(req);

            if (res.getNetworkClientsOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientsUsageHistories

Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsUsageHistoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsUsageHistoriesResponse;
import org.openapis.openapi.models.operations.GetNetworkClientsUsageHistoriesSsidNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsUsageHistoriesRequest req = new GetNetworkClientsUsageHistoriesRequest("aspernatur", "minus") {{
                endingBefore = "illum";
                perPage = 330765L;
                ssidNumber = GetNetworkClientsUsageHistoriesSsidNumberEnum.FIVE;
                startingAfter = "quod";
                t0 = "quod";
                t1 = "alias";
                timespan = 3650.43;
            }};            

            GetNetworkClientsUsageHistoriesResponse res = sdk.clients.getNetworkClientsUsageHistories(req);

            if (res.getNetworkClientsUsageHistories200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("molestias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientConnectionStatsRequest req = new GetNetworkWirelessClientConnectionStatsRequest("modi", "similique") {{
                apTag = "quasi";
                band = GetNetworkWirelessClientConnectionStatsBandEnum.FIVE;
                ssid = 280706L;
                t0 = "possimus";
                t1 = "nihil";
                timespan = 3758.77;
                vlan = 817509L;
            }};            

            GetNetworkWirelessClientConnectionStatsResponse res = sdk.clients.getNetworkWirelessClientConnectionStats(req);

            if (res.getNetworkWirelessClientConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientConnectivityEvents

List the wireless connectivity events for a client within a network in the timespan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsSsidNumberEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsTypesEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientConnectivityEventsRequest req = new GetNetworkWirelessClientConnectivityEventsRequest("voluptate", "vitae") {{
                band = GetNetworkWirelessClientConnectivityEventsBandEnum.SIX;
                deviceSerial = "cumque";
                endingBefore = "atque";
                includedSeverities = new org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum[]{{
                    add(GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum.BAD),
                }};
                perPage = 756821L;
                ssidNumber = GetNetworkWirelessClientConnectivityEventsSsidNumberEnum.SIX;
                startingAfter = "enim";
                t0 = "harum";
                t1 = "aut";
                timespan = 2342.91;
                types = new org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsTypesEnum[]{{
                    add(GetNetworkWirelessClientConnectivityEventsTypesEnum.DNS),
                    add(GetNetworkWirelessClientConnectivityEventsTypesEnum.DNS),
                }};
            }};            

            GetNetworkWirelessClientConnectivityEventsResponse res = sdk.clients.getNetworkWirelessClientConnectivityEvents(req);

            if (res.getNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientLatencyHistoryRequest req = new GetNetworkWirelessClientLatencyHistoryRequest("saepe", "sit") {{
                resolution = 762540L;
                t0 = "impedit";
                t1 = "corrupti";
                timespan = 5603.74;
            }};            

            GetNetworkWirelessClientLatencyHistoryResponse res = sdk.clients.getNetworkWirelessClientLatencyHistory(req);

            if (res.getNetworkWirelessClientLatencyHistory200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientLatencyStatsRequest req = new GetNetworkWirelessClientLatencyStatsRequest("veritatis", "quas") {{
                apTag = "molestiae";
                band = GetNetworkWirelessClientLatencyStatsBandEnum.SIX;
                fields = "labore";
                ssid = 862379L;
                t0 = "accusamus";
                t1 = "consequatur";
                timespan = 2849.27;
                vlan = 673525L;
            }};            

            GetNetworkWirelessClientLatencyStatsResponse res = sdk.clients.getNetworkWirelessClientLatencyStats(req);

            if (res.getNetworkWirelessClientLatencyStats200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("hic") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientsConnectionStatsRequest req = new GetNetworkWirelessClientsConnectionStatsRequest("sed") {{
                apTag = "corrupti";
                band = GetNetworkWirelessClientsConnectionStatsBandEnum.SIX;
                ssid = 323614L;
                t0 = "quibusdam";
                t1 = "facere";
                timespan = 8635.08;
                vlan = 697401L;
            }};            

            GetNetworkWirelessClientsConnectionStatsResponse res = sdk.clients.getNetworkWirelessClientsConnectionStats(req);

            if (res.getNetworkWirelessClientsConnectionStats200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("labore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientsLatencyStatsRequest req = new GetNetworkWirelessClientsLatencyStatsRequest("commodi") {{
                apTag = "mollitia";
                band = GetNetworkWirelessClientsLatencyStatsBandEnum.FIVE;
                fields = "quasi";
                ssid = 778585L;
                t0 = "voluptatibus";
                t1 = "illum";
                timespan = 4094.21;
                vlan = 816413L;
            }};            

            GetNetworkWirelessClientsLatencyStatsResponse res = sdk.clients.getNetworkWirelessClientsLatencyStats(req);

            if (res.getNetworkWirelessClientsLatencyStats200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("corrupti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationClientsBandwidthUsageHistoryRequest req = new GetOrganizationClientsBandwidthUsageHistoryRequest("magni") {{
                t0 = "blanditiis";
                t1 = "assumenda";
                timespan = 6359.68;
            }};            

            GetOrganizationClientsBandwidthUsageHistoryResponse res = sdk.clients.getOrganizationClientsBandwidthUsageHistory(req);

            if (res.getOrganizationClientsBandwidthUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationClientsOverview

Return summary information around client data usage (in mb) across the given organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationClientsOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationClientsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationClientsOverviewRequest req = new GetOrganizationClientsOverviewRequest("inventore") {{
                t0 = "nesciunt";
                t1 = "et";
                timespan = 6229.27;
            }};            

            GetOrganizationClientsOverviewResponse res = sdk.clients.getOrganizationClientsOverview(req);

            if (res.getOrganizationClientsOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationClientsSearch

Return the client details in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationClientsSearchRequest;
import org.openapis.openapi.models.operations.GetOrganizationClientsSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationClientsSearchRequest req = new GetOrganizationClientsSearchRequest("vitae", "qui") {{
                endingBefore = "unde";
                perPage = 402707L;
                startingAfter = "quaerat";
            }};            

            GetOrganizationClientsSearchResponse res = sdk.clients.getOrganizationClientsSearch(req);

            if (res.getOrganizationClientsSearch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopClientsByUsage

Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopClientsByUsageRequest req = new GetOrganizationSummaryTopClientsByUsageRequest("eum") {{
                t0 = "quaerat";
                t1 = "enim";
                timespan = 7682.37;
            }};            

            GetOrganizationSummaryTopClientsByUsageResponse res = sdk.clients.getOrganizationSummaryTopClientsByUsage(req);

            if (res.getOrganizationSummaryTopClientsByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopClientsManufacturersByUsage

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsManufacturersByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopClientsManufacturersByUsageRequest req = new GetOrganizationSummaryTopClientsManufacturersByUsageRequest("quibusdam") {{
                t0 = "blanditiis";
                t1 = "et";
                timespan = 9636;
            }};            

            GetOrganizationSummaryTopClientsManufacturersByUsageResponse res = sdk.clients.getOrganizationSummaryTopClientsManufacturersByUsage(req);

            if (res.getOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## provisionNetworkClients

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequest;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBody;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyClients;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyDevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProvisionNetworkClientsRequest req = new ProvisionNetworkClientsRequest(                new ProvisionNetworkClientsRequestBody(                new org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyClients[]{{
                                                add(new ProvisionNetworkClientsRequestBodyClients("iste") {{
                                                    mac = "perferendis";
                                                    name = "Judy Will";
                                                }}),
                                                add(new ProvisionNetworkClientsRequestBodyClients("dolorum") {{
                                                    mac = "quidem";
                                                    name = "Cecilia Witting DVM";
                                                }}),
                                                add(new ProvisionNetworkClientsRequestBodyClients("saepe") {{
                                                    mac = "fugit";
                                                    name = "Christine Keebler";
                                                }}),
                                            }}, ProvisionNetworkClientsRequestBodyDevicePolicyEnum.ALLOWED) {{
                                groupPolicyId = "dignissimos";
                                policiesBySecurityAppliance = new ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance() {{
                                    devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum.ALLOWED;
                                }};;
                                policiesBySsid = new ProvisionNetworkClientsRequestBodyPoliciesBySsid() {{
                                    zero = new ProvisionNetworkClientsRequestBodyPoliciesBySsid0(ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum.GROUP_POLICY) {{
                                        groupPolicyId = "cumque";
                                    }};;
                                    one = new ProvisionNetworkClientsRequestBodyPoliciesBySsid1(ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum.ALLOWED) {{
                                        groupPolicyId = "ex";
                                    }};;
                                    ten = new ProvisionNetworkClientsRequestBodyPoliciesBySsid10(ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum.ALLOWED) {{
                                        groupPolicyId = "officiis";
                                    }};;
                                    eleven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid11(ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum.ALLOWED) {{
                                        groupPolicyId = "quam";
                                    }};;
                                    twelve = new ProvisionNetworkClientsRequestBodyPoliciesBySsid12(ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum.GROUP_POLICY) {{
                                        groupPolicyId = "harum";
                                    }};;
                                    thirteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid13(ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum.ALLOWED) {{
                                        groupPolicyId = "libero";
                                    }};;
                                    fourteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid14(ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum.ALLOWED) {{
                                        groupPolicyId = "blanditiis";
                                    }};;
                                    two = new ProvisionNetworkClientsRequestBodyPoliciesBySsid2(ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum.BLOCKED) {{
                                        groupPolicyId = "vero";
                                    }};;
                                    three = new ProvisionNetworkClientsRequestBodyPoliciesBySsid3(ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum.GROUP_POLICY) {{
                                        groupPolicyId = "omnis";
                                    }};;
                                    four = new ProvisionNetworkClientsRequestBodyPoliciesBySsid4(ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum.GROUP_POLICY) {{
                                        groupPolicyId = "consequuntur";
                                    }};;
                                    five = new ProvisionNetworkClientsRequestBodyPoliciesBySsid5(ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum.BLOCKED) {{
                                        groupPolicyId = "quam";
                                    }};;
                                    six = new ProvisionNetworkClientsRequestBodyPoliciesBySsid6(ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum.NORMAL) {{
                                        groupPolicyId = "eaque";
                                    }};;
                                    seven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid7(ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum.BLOCKED) {{
                                        groupPolicyId = "asperiores";
                                    }};;
                                    eight = new ProvisionNetworkClientsRequestBodyPoliciesBySsid8(ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum.BLOCKED) {{
                                        groupPolicyId = "ipsa";
                                    }};;
                                    nine = new ProvisionNetworkClientsRequestBodyPoliciesBySsid9(ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum.GROUP_POLICY) {{
                                        groupPolicyId = "incidunt";
                                    }};;
                                }};;
                            }};, "iusto");            

            ProvisionNetworkClientsResponse res = sdk.clients.provisionNetworkClients(req);

            if (res.provisionNetworkClients201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkClientPolicyRequest;
import org.openapis.openapi.models.operations.UpdateNetworkClientPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkClientPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkClientPolicyRequest req = new UpdateNetworkClientPolicyRequest(                new UpdateNetworkClientPolicyRequestBody("in") {{
                                groupPolicyId = "numquam";
                            }};, "quia", "repellendus");            

            UpdateNetworkClientPolicyResponse res = sdk.clients.updateNetworkClientPolicy(req);

            if (res.updateNetworkClientPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequest;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkClientSplashAuthorizationStatusRequest req = new UpdateNetworkClientSplashAuthorizationStatusRequest(                new UpdateNetworkClientSplashAuthorizationStatusRequestBody(                new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids() {{
                                                zero = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0() {{
                                                    isAuthorized = false;
                                                }};;
                                                one = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1() {{
                                                    isAuthorized = false;
                                                }};;
                                                ten = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10() {{
                                                    isAuthorized = false;
                                                }};;
                                                eleven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11() {{
                                                    isAuthorized = false;
                                                }};;
                                                twelve = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12() {{
                                                    isAuthorized = false;
                                                }};;
                                                thirteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13() {{
                                                    isAuthorized = false;
                                                }};;
                                                fourteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14() {{
                                                    isAuthorized = false;
                                                }};;
                                                two = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2() {{
                                                    isAuthorized = false;
                                                }};;
                                                three = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3() {{
                                                    isAuthorized = false;
                                                }};;
                                                four = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4() {{
                                                    isAuthorized = false;
                                                }};;
                                                five = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5() {{
                                                    isAuthorized = false;
                                                }};;
                                                six = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6() {{
                                                    isAuthorized = false;
                                                }};;
                                                seven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7() {{
                                                    isAuthorized = false;
                                                }};;
                                                eight = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8() {{
                                                    isAuthorized = false;
                                                }};;
                                                nine = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9() {{
                                                    isAuthorized = false;
                                                }};;
                                            }};);, "ut", "eius");            

            UpdateNetworkClientSplashAuthorizationStatusResponse res = sdk.clients.updateNetworkClientSplashAuthorizationStatus(req);

            if (res.updateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
