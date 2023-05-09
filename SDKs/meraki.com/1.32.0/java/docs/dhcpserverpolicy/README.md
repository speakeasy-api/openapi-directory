# dhcpServerPolicy

### Available Operations

* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicy](#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [updateNetworkSwitchDhcpServerPolicy](#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
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
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest req = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest(                new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody(                new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4() {{
                                                address = "3746 Abraham Trail";
                                            }};, "dicta", 686935L);, "beatae");            

            CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse res = sdk.dhcpServerPolicy.createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req);

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
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest req = new DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest("quos", "temporibus");            

            DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse res = sdk.dhcpServerPolicy.deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchDhcpServerPolicy

Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchDhcpServerPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpServerPolicyRequest req = new GetNetworkSwitchDhcpServerPolicyRequest("impedit");            

            GetNetworkSwitchDhcpServerPolicyResponse res = sdk.dhcpServerPolicy.getNetworkSwitchDhcpServerPolicy(req);

            if (res.getNetworkSwitchDhcpServerPolicy200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest req = new GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest("eum") {{
                endingBefore = "saepe";
                perPage = 88708L;
                startingAfter = "perspiciatis";
            }};            

            GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersResponse res = sdk.dhcpServerPolicy.getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(req);

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
                .setSecurity(new Security("cum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest req = new GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest("excepturi") {{
                endingBefore = "aperiam";
                perPage = 68314L;
                startingAfter = "fugit";
            }};            

            GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse res = sdk.dhcpServerPolicy.getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(req);

            if (res.getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchDhcpServerPolicy

Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchDhcpServerPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchDhcpServerPolicyRequest req = new UpdateNetworkSwitchDhcpServerPolicyRequest("ut") {{
                requestBody = new UpdateNetworkSwitchDhcpServerPolicyRequestBody() {{
                    alerts = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts() {{
                        email = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail() {{
                            enabled = false;
                        }};;
                    }};;
                    allowedServers = new String[]{{
                        add("modi"),
                        add("repudiandae"),
                    }};
                    arpInspection = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection() {{
                        enabled = false;
                    }};;
                    blockedServers = new String[]{{
                        add("dolor"),
                    }};
                    defaultPolicy = UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum.ALLOW;
                }};;
            }};            

            UpdateNetworkSwitchDhcpServerPolicyResponse res = sdk.dhcpServerPolicy.updateNetworkSwitchDhcpServerPolicy(req);

            if (res.updateNetworkSwitchDhcpServerPolicy200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("quidem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest req = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest("deserunt", "vitae") {{
                requestBody = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody() {{
                    ipv4 = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4() {{
                        address = "44148 Morar Harbor";
                    }};;
                    mac = "voluptatibus";
                    vlan = 460256L;
                }};;
            }};            

            UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse res = sdk.dhcpServerPolicy.updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req);

            if (res.updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
