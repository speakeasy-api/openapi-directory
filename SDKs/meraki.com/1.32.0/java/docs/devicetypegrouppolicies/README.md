# deviceTypeGroupPolicies

### Available Operations

* [getNetworkWirelessSsidDeviceTypeGroupPolicies](#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [updateNetworkWirelessSsidDeviceTypeGroupPolicies](#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID

## getNetworkWirelessSsidDeviceTypeGroupPolicies

List the device type group policies for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest req = new GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest("numquam", "distinctio");            

            GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse res = sdk.deviceTypeGroupPolicies.getNetworkWirelessSsidDeviceTypeGroupPolicies(req);

            if (res.getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidDeviceTypeGroupPolicies

Update the device type group policies for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest req = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest("eius", "itaque") {{
                requestBody = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody() {{
                    deviceTypePolicies = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies[]{{
                        add(new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.ALLOWED, UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.I_PAD) {{
                            devicePolicy = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.ALLOWED;
                            deviceType = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.I_PAD;
                            groupPolicyId = 217159L;
                        }}),
                        add(new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.ALLOWED, UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.I_PAD) {{
                            devicePolicy = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.GROUP_POLICY;
                            deviceType = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.CHROME_OS;
                            groupPolicyId = 29578L;
                        }}),
                        add(new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.ALLOWED, UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.I_PHONE) {{
                            devicePolicy = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.ALLOWED;
                            deviceType = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.ANDROID;
                            groupPolicyId = 304184L;
                        }}),
                    }};
                    enabled = false;
                }};;
            }};            

            UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse res = sdk.deviceTypeGroupPolicies.updateNetworkWirelessSsidDeviceTypeGroupPolicies(req);

            if (res.updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
