# eapOverride

### Available Operations

* [getNetworkWirelessSsidEapOverride](#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [updateNetworkWirelessSsidEapOverride](#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.

## getNetworkWirelessSsidEapOverride

Return the EAP overridden parameters for an SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidEapOverrideRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidEapOverrideResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidEapOverrideRequest req = new GetNetworkWirelessSsidEapOverrideRequest("nihil", "architecto");            

            GetNetworkWirelessSsidEapOverrideResponse res = sdk.eapOverride.getNetworkWirelessSsidEapOverride(req);

            if (res.getNetworkWirelessSsidEapOverride200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidEapOverride

Update the EAP overridden parameters for an SSID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidEapOverrideRequest req = new UpdateNetworkWirelessSsidEapOverrideRequest("architecto", "culpa") {{
                requestBody = new UpdateNetworkWirelessSsidEapOverrideRequestBody() {{
                    eapolKey = new UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey() {{
                        retries = 565505L;
                        timeoutInMs = 416228L;
                    }};;
                    identity = new UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity() {{
                        retries = 824983L;
                        timeout = 978858L;
                    }};;
                    maxRetries = 157463L;
                    timeout = 63345L;
                }};;
            }};            

            UpdateNetworkWirelessSsidEapOverrideResponse res = sdk.eapOverride.updateNetworkWirelessSsidEapOverride(req);

            if (res.updateNetworkWirelessSsidEapOverride200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
