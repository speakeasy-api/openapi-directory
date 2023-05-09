# bgp

### Available Operations

* [getNetworkApplianceVpnBgp](#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [updateNetworkApplianceVpnBgp](#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration

## getNetworkApplianceVpnBgp

Return a Hub BGP Configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVpnBgpRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVpnBgpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVpnBgpRequest req = new GetNetworkApplianceVpnBgpRequest("officiis");            

            GetNetworkApplianceVpnBgpResponse res = sdk.bgp.getNetworkApplianceVpnBgp(req);

            if (res.getNetworkApplianceVpnBgp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceVpnBgp

Update a Hub BGP Configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceVpnBgpRequest req = new UpdateNetworkApplianceVpnBgpRequest(                new UpdateNetworkApplianceVpnBgpRequestBody(false) {{
                                asNumber = 566444L;
                                ibgpHoldTimer = 233618L;
                                neighbors = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors[]{{
                                    add(new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(368372L, 750343L, 784120L) {{
                                        allowTransit = false;
                                        ebgpHoldTimer = 141867L;
                                        ebgpMultihop = 279923L;
                                        ip = "corporis";
                                        ipv6 = new UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6("placeat") {{
                                            address = "34952 Kozey Flats";
                                        }};
                                        receiveLimit = 145973L;
                                        remoteAsNumber = 815618L;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(357867L, 830909L, 12917L) {{
                                        allowTransit = false;
                                        ebgpHoldTimer = 287834L;
                                        ebgpMultihop = 596133L;
                                        ip = "ducimus";
                                        ipv6 = new UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6("rem") {{
                                            address = "12194 Myrtice Summit";
                                        }};
                                        receiveLimit = 977472L;
                                        remoteAsNumber = 886684L;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(53662L, 360334L, 587489L) {{
                                        allowTransit = false;
                                        ebgpHoldTimer = 31605L;
                                        ebgpMultihop = 727789L;
                                        ip = "excepturi";
                                        ipv6 = new UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6("nihil") {{
                                            address = "6891 Declan Meadows";
                                        }};
                                        receiveLimit = 204781L;
                                        remoteAsNumber = 135775L;
                                    }}),
                                }};
                            }};, "aut");            

            UpdateNetworkApplianceVpnBgpResponse res = sdk.bgp.updateNetworkApplianceVpnBgp(req);

            if (res.updateNetworkApplianceVpnBgp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
