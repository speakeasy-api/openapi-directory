# ssiDs

### Available Operations

* [getNetworkDeviceWirelessStatus](#getnetworkdevicewirelessstatus) - Return the SSID statuses of an access point
* [getNetworkSsid](#getnetworkssid) - Return a single SSID
* [getNetworkSsids](#getnetworkssids) - List the SSIDs in a network
* [updateNetworkSsid](#updatenetworkssid) - Update the attributes of an SSID

## getNetworkDeviceWirelessStatus

Return the SSID statuses of an access point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkDeviceWirelessStatusRequest;
import org.openapis.openapi.models.operations.GetNetworkDeviceWirelessStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkDeviceWirelessStatusRequest req = new GetNetworkDeviceWirelessStatusRequest("minima", "architecto");            

            GetNetworkDeviceWirelessStatusResponse res = sdk.ssiDs.getNetworkDeviceWirelessStatus(req);

            if (res.getNetworkDeviceWirelessStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSsid

Return a single SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSsidRequest;
import org.openapis.openapi.models.operations.GetNetworkSsidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSsidRequest req = new GetNetworkSsidRequest("aliquid", "magni");            

            GetNetworkSsidResponse res = sdk.ssiDs.getNetworkSsid(req);

            if (res.getNetworkSsid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSsids

List the SSIDs in a network. Supports networks with access points or wireless-enabled security appliances and teleworker gateways.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSsidsRequest;
import org.openapis.openapi.models.operations.GetNetworkSsidsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSsidsRequest req = new GetNetworkSsidsRequest("adipisci");            

            GetNetworkSsidsResponse res = sdk.ssiDs.getNetworkSsids(req);

            if (res.getNetworkSsids200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSsid

Update the attributes of an SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSsidRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodyApTagsAndVlanIds;
import org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodyAuthModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodyEncryptionModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodyEnterpriseAdminAccessEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodyRadiusAccountingServers;
import org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodyRadiusFailoverPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodyRadiusLoadBalancingPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodyRadiusServers;
import org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodySplashPageEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodyWpaEncryptionModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSsidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSsidRequest req = new UpdateNetworkSsidRequest("dolor", "exercitationem") {{
                requestBody = new UpdateNetworkSsidRequestBody() {{
                    apTagsAndVlanIds = new org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodyApTagsAndVlanIds[]{{
                        add(new UpdateNetworkSsidRequestBodyApTagsAndVlanIds() {{
                            tags = "facilis";
                            vlanId = 769634L;
                        }}),
                        add(new UpdateNetworkSsidRequestBodyApTagsAndVlanIds() {{
                            tags = "sit";
                            vlanId = 363482L;
                        }}),
                        add(new UpdateNetworkSsidRequestBodyApTagsAndVlanIds() {{
                            tags = "culpa";
                            vlanId = 159393L;
                        }}),
                    }};
                    authMode = UpdateNetworkSsidRequestBodyAuthModeEnum.EIGHT_THOUSAND_AND_TWENTY_ONEX_MERAKI;
                    availabilityTags = new String[]{{
                        add("modi"),
                        add("veniam"),
                        add("quod"),
                    }};
                    availableOnAllAps = false;
                    bandSelection = "itaque";
                    concentratorNetworkId = "a";
                    defaultVlanId = 788661L;
                    disassociateClientsOnVpnFailover = false;
                    enabled = false;
                    encryptionMode = UpdateNetworkSsidRequestBodyEncryptionModeEnum.WEP;
                    enterpriseAdminAccess = UpdateNetworkSsidRequestBodyEnterpriseAdminAccessEnum.ACCESS_ENABLED;
                    ipAssignmentMode = "assumenda";
                    lanIsolationEnabled = false;
                    minBitrate = 8873.63;
                    name = "Miss Linda Nader";
                    perClientBandwidthLimitDown = 155978L;
                    perClientBandwidthLimitUp = 118932L;
                    psk = "vel";
                    radiusAccountingEnabled = false;
                    radiusAccountingServers = new org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodyRadiusAccountingServers[]{{
                        add(new UpdateNetworkSsidRequestBodyRadiusAccountingServers("accusantium") {{
                            host = "debitis";
                            port = 354821L;
                            secret = "architecto";
                        }}),
                        add(new UpdateNetworkSsidRequestBodyRadiusAccountingServers("cumque") {{
                            host = "perferendis";
                            port = 82876L;
                            secret = "provident";
                        }}),
                        add(new UpdateNetworkSsidRequestBodyRadiusAccountingServers("nemo") {{
                            host = "iure";
                            port = 842402L;
                            secret = "quod";
                        }}),
                    }};
                    radiusAttributeForGroupPolicies = "recusandae";
                    radiusCoaEnabled = false;
                    radiusFailoverPolicy = UpdateNetworkSsidRequestBodyRadiusFailoverPolicyEnum.ALLOW_ACCESS;
                    radiusLoadBalancingPolicy = UpdateNetworkSsidRequestBodyRadiusLoadBalancingPolicyEnum.ROUND_ROBIN;
                    radiusOverride = false;
                    radiusServers = new org.openapis.openapi.models.operations.UpdateNetworkSsidRequestBodyRadiusServers[]{{
                        add(new UpdateNetworkSsidRequestBodyRadiusServers("natus") {{
                            host = "laboriosam";
                            port = 152283L;
                            secret = "odio";
                        }}),
                        add(new UpdateNetworkSsidRequestBodyRadiusServers("facilis") {{
                            host = "provident";
                            port = 739508L;
                            secret = "doloribus";
                        }}),
                    }};
                    secondaryConcentratorNetworkId = "quidem";
                    splashPage = UpdateNetworkSsidRequestBodySplashPageEnum.SYSTEMS_MANAGER_SENTRY;
                    useVlanTagging = false;
                    visible = false;
                    vlanId = 389548L;
                    walledGardenEnabled = false;
                    walledGardenRanges = "unde";
                    wpaEncryptionMode = UpdateNetworkSsidRequestBodyWpaEncryptionModeEnum.WPA1_ONLY;
                }};;
            }};            

            UpdateNetworkSsidResponse res = sdk.ssiDs.updateNetworkSsid(req);

            if (res.updateNetworkSsid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
