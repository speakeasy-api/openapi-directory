# bluetoothClients

### Available Operations

* [getNetworkBluetoothClient](#getnetworkbluetoothclient) - Return a Bluetooth client
* [getNetworkBluetoothClients](#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network

## getNetworkBluetoothClient

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkBluetoothClientRequest;
import org.openapis.openapi.models.operations.GetNetworkBluetoothClientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkBluetoothClientRequest req = new GetNetworkBluetoothClientRequest("accusantium", "consequuntur") {{
                connectivityHistoryTimespan = 508315L;
                includeConnectivityHistory = false;
            }};            

            GetNetworkBluetoothClientResponse res = sdk.bluetoothClients.getNetworkBluetoothClient(req);

            if (res.getNetworkBluetoothClient200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkBluetoothClients

List the Bluetooth clients seen by APs in this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkBluetoothClientsRequest;
import org.openapis.openapi.models.operations.GetNetworkBluetoothClientsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkBluetoothClientsRequest req = new GetNetworkBluetoothClientsRequest("magni") {{
                endingBefore = "sunt";
                includeConnectivityHistory = false;
                perPage = 779051L;
                startingAfter = "illum";
                t0 = "pariatur";
                timespan = 8073.19;
            }};            

            GetNetworkBluetoothClientsResponse res = sdk.bluetoothClients.getNetworkBluetoothClients(req);

            if (res.getNetworkBluetoothClients200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
