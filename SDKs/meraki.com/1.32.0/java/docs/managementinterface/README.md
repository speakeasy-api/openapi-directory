# managementInterface

### Available Operations

* [getDeviceManagementInterface](#getdevicemanagementinterface) - Return the management interface settings for a device
* [updateDeviceManagementInterface](#updatedevicemanagementinterface) - Update the management interface settings for a device

## getDeviceManagementInterface

Return the management interface settings for a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceManagementInterfaceRequest;
import org.openapis.openapi.models.operations.GetDeviceManagementInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceManagementInterfaceRequest req = new GetDeviceManagementInterfaceRequest("architecto");            

            GetDeviceManagementInterfaceResponse res = sdk.managementInterface.getDeviceManagementInterface(req);

            if (res.getDeviceManagementInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceManagementInterface

Update the management interface settings for a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceRequest;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceRequestBodyWan1;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceRequestBodyWan2;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceManagementInterfaceRequest req = new UpdateDeviceManagementInterfaceRequest("placeat") {{
                requestBody = new UpdateDeviceManagementInterfaceRequestBody() {{
                    wan1 = new UpdateDeviceManagementInterfaceRequestBodyWan1() {{
                        staticDns = new String[]{{
                            add("illum"),
                            add("soluta"),
                            add("magnam"),
                        }};
                        staticGatewayIp = "corrupti";
                        staticIp = "fuga";
                        staticSubnetMask = "pariatur";
                        usingStaticIp = false;
                        vlan = 120236L;
                        wanEnabled = UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum.DISABLED;
                    }};;
                    wan2 = new UpdateDeviceManagementInterfaceRequestBodyWan2() {{
                        staticDns = new String[]{{
                            add("est"),
                            add("dolor"),
                        }};
                        staticGatewayIp = "doloribus";
                        staticIp = "velit";
                        staticSubnetMask = "nihil";
                        usingStaticIp = false;
                        vlan = 964786L;
                        wanEnabled = UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum.ENABLED;
                    }};;
                }};;
            }};            

            UpdateDeviceManagementInterfaceResponse res = sdk.managementInterface.updateDeviceManagementInterface(req);

            if (res.updateDeviceManagementInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
