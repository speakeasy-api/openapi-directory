# arpInspection

### Available Operations

* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network

## createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Add a server to be trusted by Dynamic ARP Inspection on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4;
import org.openapis.openapi.models.operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest req = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest(                new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody(                new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4() {{
                                                address = "13782 Erna Crossroad";
                                            }};, "itaque", 625418L);, "expedita");            

            CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse res = sdk.arpInspection.createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req);

            if (res.createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Remove a server from being trusted by Dynamic ARP Inspection on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest req = new DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest("placeat", "temporibus");            

            DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse res = sdk.arpInspection.deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers

Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest req = new GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest("earum") {{
                endingBefore = "minima";
                perPage = 141986L;
                startingAfter = "odit";
            }};            

            GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersResponse res = sdk.arpInspection.getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(req);

            if (res.getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice

Return the devices that have a Dynamic ARP Inspection warning and their warnings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest req = new GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest("error") {{
                endingBefore = "vel";
                perPage = 679835L;
                startingAfter = "alias";
            }};            

            GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse res = sdk.arpInspection.getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(req);

            if (res.getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Update a server that is trusted by Dynamic ARP Inspection on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest req = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest("ab", "sunt") {{
                requestBody = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody() {{
                    ipv4 = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4() {{
                        address = "74524 Romaguera Glen";
                    }};;
                    mac = "omnis";
                    vlan = 924623L;
                }};;
            }};            

            UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse res = sdk.arpInspection.updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req);

            if (res.updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
