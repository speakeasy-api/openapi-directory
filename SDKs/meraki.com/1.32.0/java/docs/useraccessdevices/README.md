# userAccessDevices

### Available Operations

* [deleteNetworkSmUserAccessDevice](#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [getNetworkSmUserAccessDevices](#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections

## deleteNetworkSmUserAccessDevice

Delete a User Access Device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSmUserAccessDeviceRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSmUserAccessDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSmUserAccessDeviceRequest req = new DeleteNetworkSmUserAccessDeviceRequest("laborum", "asperiores");            

            DeleteNetworkSmUserAccessDeviceResponse res = sdk.userAccessDevices.deleteNetworkSmUserAccessDevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmUserAccessDevices

List User Access Devices and its Trusted Access Connections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmUserAccessDevicesRequest;
import org.openapis.openapi.models.operations.GetNetworkSmUserAccessDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUserAccessDevicesRequest req = new GetNetworkSmUserAccessDevicesRequest("recusandae") {{
                endingBefore = "beatae";
                perPage = 377087L;
                startingAfter = "illo";
            }};            

            GetNetworkSmUserAccessDevicesResponse res = sdk.userAccessDevices.getNetworkSmUserAccessDevices(req);

            if (res.getNetworkSmUserAccessDevices200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
