# usageHistory

### Available Operations

* [getNetworkApplianceUplinksUsageHistory](#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [getNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkWirelessUsageHistory](#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client

## getNetworkApplianceUplinksUsageHistory

Get the sent and received bytes for each uplink of a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceUplinksUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceUplinksUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceUplinksUsageHistoryRequest req = new GetNetworkApplianceUplinksUsageHistoryRequest("maiores") {{
                resolution = 130918L;
                t0 = "animi";
                t1 = "nulla";
                timespan = 5663.39;
            }};            

            GetNetworkApplianceUplinksUsageHistoryResponse res = sdk.usageHistory.getNetworkApplianceUplinksUsageHistory(req);

            if (res.getNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("hic") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientUsageHistoryRequest req = new GetNetworkClientUsageHistoryRequest("deleniti", "ipsam");            

            GetNetworkClientUsageHistoryResponse res = sdk.usageHistory.getNetworkClientUsageHistory(req);

            if (res.getNetworkClientUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessUsageHistory

Return AP usage over time for a device or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessUsageHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessUsageHistoryRequest req = new GetNetworkWirelessUsageHistoryRequest("at") {{
                apTag = "itaque";
                autoResolution = false;
                band = GetNetworkWirelessUsageHistoryBandEnum.SIX;
                clientId = "consectetur";
                deviceSerial = "quod";
                resolution = 646122L;
                ssid = 988794L;
                t0 = "quo";
                t1 = "aperiam";
                timespan = 5706.12;
            }};            

            GetNetworkWirelessUsageHistoryResponse res = sdk.usageHistory.getNetworkWirelessUsageHistory(req);

            if (res.getNetworkWirelessUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
