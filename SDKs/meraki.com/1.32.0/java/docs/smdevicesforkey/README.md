# smDevicesForKey

### Available Operations

* [getNetworkPiiSmDevicesForKey](#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier

## getNetworkPiiSmDevicesForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiSmDevicesForKeyRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiSmDevicesForKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiSmDevicesForKeyRequest req = new GetNetworkPiiSmDevicesForKeyRequest("earum") {{
                bluetoothMac = "dolore";
                email = "Davin83@yahoo.com";
                imei = "occaecati";
                mac = "assumenda";
                serial = "rem";
                username = "Willa.King7";
            }};            

            GetNetworkPiiSmDevicesForKeyResponse res = sdk.smDevicesForKey.getNetworkPiiSmDevicesForKey(req);

            if (res.getNetworkPiiSmDevicesForKey200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
