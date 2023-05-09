# siteToSiteVpn

### Available Operations

* [getNetworkApplianceVpnSiteToSiteVpn](#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [updateNetworkApplianceVpnSiteToSiteVpn](#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network

## getNetworkApplianceVpnSiteToSiteVpn

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVpnSiteToSiteVpnRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVpnSiteToSiteVpnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVpnSiteToSiteVpnRequest req = new GetNetworkApplianceVpnSiteToSiteVpnRequest("laboriosam");            

            GetNetworkApplianceVpnSiteToSiteVpnResponse res = sdk.siteToSiteVpn.getNetworkApplianceVpnSiteToSiteVpn(req);

            if (res.getNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceVpnSiteToSiteVpn

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceVpnSiteToSiteVpnRequest req = new UpdateNetworkApplianceVpnSiteToSiteVpnRequest(                new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody(UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum.SPOKE) {{
                                hubs = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs[]{{
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs("doloremque") {{
                                        hubId = "dolores";
                                        useDefaultRoute = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs("qui") {{
                                        hubId = "quibusdam";
                                        useDefaultRoute = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs("reprehenderit") {{
                                        hubId = "perspiciatis";
                                        useDefaultRoute = false;
                                    }}),
                                }};
                                subnets = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets[]{{
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets("expedita") {{
                                        localSubnet = "assumenda";
                                        useVpn = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets("ipsum") {{
                                        localSubnet = "veritatis";
                                        useVpn = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets("sequi") {{
                                        localSubnet = "eum";
                                        useVpn = false;
                                    }}),
                                    add(new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets("inventore") {{
                                        localSubnet = "enim";
                                        useVpn = false;
                                    }}),
                                }};
                            }};, "mollitia");            

            UpdateNetworkApplianceVpnSiteToSiteVpnResponse res = sdk.siteToSiteVpn.updateNetworkApplianceVpnSiteToSiteVpn(req);

            if (res.updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
