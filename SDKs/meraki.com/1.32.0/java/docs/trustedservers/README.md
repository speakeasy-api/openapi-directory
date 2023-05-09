# trustedServers

### Available Operations

* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
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
                .setSecurity(new Security("esse") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest req = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest(                new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody(                new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4() {{
                                                address = "9684 Mraz Streets";
                                            }};, "nihil", 503343L);, "quas");            

            CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse res = sdk.trustedServers.createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req);

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

            DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest req = new DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest("quidem", "sit");            

            DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse res = sdk.trustedServers.deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req);

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
                .setSecurity(new Security("quo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest req = new GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest("vitae") {{
                endingBefore = "iste";
                perPage = 827693L;
                startingAfter = "possimus";
            }};            

            GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersResponse res = sdk.trustedServers.getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(req);

            if (res.getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("consequatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest req = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest("esse", "quae") {{
                requestBody = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody() {{
                    ipv4 = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4() {{
                        address = "001 Senger Junctions";
                    }};;
                    mac = "laborum";
                    vlan = 101296L;
                }};;
            }};            

            UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse res = sdk.trustedServers.updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req);

            if (res.updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
