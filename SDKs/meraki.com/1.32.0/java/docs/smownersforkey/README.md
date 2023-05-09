# smOwnersForKey

### Available Operations

* [getNetworkPiiSmOwnersForKey](#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

## getNetworkPiiSmOwnersForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiSmOwnersForKeyRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiSmOwnersForKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiSmOwnersForKeyRequest req = new GetNetworkPiiSmOwnersForKeyRequest("illo") {{
                bluetoothMac = "consequuntur";
                email = "Doyle76@gmail.com";
                imei = "autem";
                mac = "praesentium";
                serial = "eos";
                username = "Abigale24";
            }};            

            GetNetworkPiiSmOwnersForKeyResponse res = sdk.smOwnersForKey.getNetworkPiiSmOwnersForKey(req);

            if (res.getNetworkPiiSmOwnersForKey200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
