# piiKeys

### Available Operations

* [getNetworkPiiPiiKeys](#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier

## getNetworkPiiPiiKeys

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiPiiKeysRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiPiiKeysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiPiiKeysRequest req = new GetNetworkPiiPiiKeysRequest("recusandae") {{
                bluetoothMac = "fugiat";
                email = "Ethyl38@hotmail.com";
                imei = "impedit";
                mac = "tempora";
                serial = "ipsum";
                username = "Orin90";
            }};            

            GetNetworkPiiPiiKeysResponse res = sdk.piiKeys.getNetworkPiiPiiKeys(req);

            if (res.getNetworkPiiPiiKeys200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
