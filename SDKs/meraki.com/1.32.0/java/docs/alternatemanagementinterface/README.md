# alternateManagementInterface

### Available Operations

* [getNetworkSwitchAlternateManagementInterface](#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [getNetworkWirelessAlternateManagementInterface](#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [updateNetworkSwitchAlternateManagementInterface](#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [updateNetworkWirelessAlternateManagementInterface](#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP

## getNetworkSwitchAlternateManagementInterface

Return the switch alternate management interface for the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchAlternateManagementInterfaceRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchAlternateManagementInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchAlternateManagementInterfaceRequest req = new GetNetworkSwitchAlternateManagementInterfaceRequest("alias");            

            GetNetworkSwitchAlternateManagementInterfaceResponse res = sdk.alternateManagementInterface.getNetworkSwitchAlternateManagementInterface(req);

            if (res.getNetworkSwitchAlternateManagementInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessAlternateManagementInterface

Return alternate management interface and devices with IP assigned

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessAlternateManagementInterfaceRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessAlternateManagementInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessAlternateManagementInterfaceRequest req = new GetNetworkWirelessAlternateManagementInterfaceRequest("eos");            

            GetNetworkWirelessAlternateManagementInterfaceResponse res = sdk.alternateManagementInterface.getNetworkWirelessAlternateManagementInterface(req);

            if (res.getNetworkWirelessAlternateManagementInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchAlternateManagementInterface

Update the switch alternate management interface for the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchAlternateManagementInterfaceRequest req = new UpdateNetworkSwitchAlternateManagementInterfaceRequest("iste") {{
                requestBody = new UpdateNetworkSwitchAlternateManagementInterfaceRequestBody() {{
                    enabled = false;
                    protocols = new org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum[]{{
                        add(UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum.RADIUS),
                    }};
                    switches = new org.openapis.openapi.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches[]{{
                        add(new UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches("delectus", "minima") {{
                            alternateManagementIp = "accusamus";
                            gateway = "voluptatibus";
                            serial = "distinctio";
                            subnetMask = "omnis";
                        }}),
                        add(new UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches("quos", "commodi") {{
                            alternateManagementIp = "praesentium";
                            gateway = "maxime";
                            serial = "magnam";
                            subnetMask = "temporibus";
                        }}),
                        add(new UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches("modi", "nam") {{
                            alternateManagementIp = "itaque";
                            gateway = "commodi";
                            serial = "totam";
                            subnetMask = "earum";
                        }}),
                    }};
                    vlanId = 877399L;
                }};;
            }};            

            UpdateNetworkSwitchAlternateManagementInterfaceResponse res = sdk.alternateManagementInterface.updateNetworkSwitchAlternateManagementInterface(req);

            if (res.updateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessAlternateManagementInterface

Update alternate management interface and device static IP

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessAlternateManagementInterfaceRequest req = new UpdateNetworkWirelessAlternateManagementInterfaceRequest("ipsam") {{
                requestBody = new UpdateNetworkWirelessAlternateManagementInterfaceRequestBody() {{
                    accessPoints = new org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints[]{{
                        add(new UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints("nulla", "deserunt") {{
                            alternateManagementIp = "alias";
                            dns1 = "quasi";
                            dns2 = "non";
                            gateway = "maiores";
                            serial = "enim";
                            subnetMask = "sint";
                        }}),
                        add(new UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints("accusamus", "impedit") {{
                            alternateManagementIp = "esse";
                            dns1 = "nemo";
                            dns2 = "reprehenderit";
                            gateway = "est";
                            serial = "quis";
                            subnetMask = "sint";
                        }}),
                    }};
                    enabled = false;
                    protocols = new org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum[]{{
                        add(UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum.SYSLOG),
                        add(UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum.SYSLOG),
                        add(UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum.RADIUS),
                        add(UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum.RADIUS),
                    }};
                    vlanId = 895346L;
                }};;
            }};            

            UpdateNetworkWirelessAlternateManagementInterfaceResponse res = sdk.alternateManagementInterface.updateNetworkWirelessAlternateManagementInterface(req);

            if (res.updateNetworkWirelessAlternateManagementInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
