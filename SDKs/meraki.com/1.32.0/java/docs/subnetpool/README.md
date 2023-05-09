# subnetPool

### Available Operations

* [getNetworkCellularGatewaySubnetPool](#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [updateNetworkCellularGatewaySubnetPool](#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.

## getNetworkCellularGatewaySubnetPool

Return the subnet pool and mask configured for MGs in the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewaySubnetPoolRequest;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewaySubnetPoolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCellularGatewaySubnetPoolRequest req = new GetNetworkCellularGatewaySubnetPoolRequest("fugiat");            

            GetNetworkCellularGatewaySubnetPoolResponse res = sdk.subnetPool.getNetworkCellularGatewaySubnetPool(req);

            if (res.getNetworkCellularGatewaySubnetPool200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkCellularGatewaySubnetPool

Update the subnet pool and mask configuration for MGs in the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewaySubnetPoolRequest;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewaySubnetPoolRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewaySubnetPoolResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCellularGatewaySubnetPoolRequest req = new UpdateNetworkCellularGatewaySubnetPoolRequest("dolore") {{
                requestBody = new UpdateNetworkCellularGatewaySubnetPoolRequestBody() {{
                    cidr = "eveniet";
                    mask = 718083L;
                }};;
            }};            

            UpdateNetworkCellularGatewaySubnetPoolResponse res = sdk.subnetPool.updateNetworkCellularGatewaySubnetPool(req);

            if (res.updateNetworkCellularGatewaySubnetPool200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
