# mxVLANPorts

### Available Operations

* [getNetworkAppliancePort](#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [getNetworkAppliancePorts](#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [updateNetworkAppliancePort](#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.

## getNetworkAppliancePort

Return per-port VLAN settings for a single MX port.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAppliancePortRequest;
import org.openapis.openapi.models.operations.GetNetworkAppliancePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePortRequest req = new GetNetworkAppliancePortRequest("esse", "ex");            

            GetNetworkAppliancePortResponse res = sdk.mxVLANPorts.getNetworkAppliancePort(req);

            if (res.getNetworkAppliancePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAppliancePorts

List per-port VLAN settings for all ports of a MX.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAppliancePortsRequest;
import org.openapis.openapi.models.operations.GetNetworkAppliancePortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePortsRequest req = new GetNetworkAppliancePortsRequest("aliquid");            

            GetNetworkAppliancePortsResponse res = sdk.mxVLANPorts.getNetworkAppliancePorts(req);

            if (res.getNetworkAppliancePorts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkAppliancePort

Update the per-port VLAN settings for a single MX port.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePortRequest;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePortRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePortResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkAppliancePortRequest req = new UpdateNetworkAppliancePortRequest("laborum", "sunt") {{
                requestBody = new UpdateNetworkAppliancePortRequestBody() {{
                    accessPolicy = "nostrum";
                    allowedVlans = "fugiat";
                    dropUntaggedTraffic = false;
                    enabled = false;
                    type = "expedita";
                    vlan = 399667L;
                }};;
            }};            

            UpdateNetworkAppliancePortResponse res = sdk.mxVLANPorts.updateNetworkAppliancePort(req);

            if (res.updateNetworkAppliancePort200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
