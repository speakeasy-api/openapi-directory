# bonjourForwarding

### Available Operations

* [getNetworkWirelessSsidBonjourForwarding](#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [updateNetworkWirelessSsidBonjourForwarding](#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID

## getNetworkWirelessSsidBonjourForwarding

List the Bonjour forwarding setting and rules for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidBonjourForwardingRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidBonjourForwardingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidBonjourForwardingRequest req = new GetNetworkWirelessSsidBonjourForwardingRequest("mollitia", "voluptatum");            

            GetNetworkWirelessSsidBonjourForwardingResponse res = sdk.bonjourForwarding.getNetworkWirelessSsidBonjourForwarding(req);

            if (res.getNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidBonjourForwarding

Update the bonjour forwarding setting and rules for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidBonjourForwardingRequest req = new UpdateNetworkWirelessSsidBonjourForwardingRequest("sapiente", "ut") {{
                requestBody = new UpdateNetworkWirelessSsidBonjourForwardingRequestBody() {{
                    enabled = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[]{{
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.I_CHAT),
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.SCANNERS),
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.I_CHAT),
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.ALL_SERVICES),
                                        }}, "quam") {{
                            description = "labore";
                            services = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[]{{
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.BIT_TORRENT),
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.PRINTERS),
                            }};
                            vlanId = "ratione";
                        }}),
                        add(new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[]{{
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.SCANNERS),
                                        }}, "quos") {{
                            description = "consectetur";
                            services = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[]{{
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.ALL_SERVICES),
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.I_TUNES),
                            }};
                            vlanId = "eum";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidBonjourForwardingResponse res = sdk.bonjourForwarding.updateNetworkWirelessSsidBonjourForwarding(req);

            if (res.updateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
