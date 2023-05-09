# vlaNs

### Available Operations

* [createNetworkVlan](#createnetworkvlan) - Add a VLAN
* [deleteNetworkVlan](#deletenetworkvlan) - Delete a VLAN from a network
* [getNetworkVlan](#getnetworkvlan) - Return a VLAN
* [getNetworkVlans](#getnetworkvlans) - List the VLANs for an MX network
* [getNetworkVlansEnabledState](#getnetworkvlansenabledstate) - Returns the enabled status of VLANs for the network
* [updateNetworkVlan](#updatenetworkvlan) - Update a VLAN
* [updateNetworkVlansEnabledState](#updatenetworkvlansenabledstate) - Enable/Disable VLANs for the given network

## createNetworkVlan

Add a VLAN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkVlanRequest;
import org.openapis.openapi.models.operations.CreateNetworkVlanRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkVlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkVlanRequest req = new CreateNetworkVlanRequest(                new CreateNetworkVlanRequestBody("soluta", "dolorum", "velit", "earum") {{
                                groupPolicyId = "praesentium";
                            }};, "error");            

            CreateNetworkVlanResponse res = sdk.vlaNs.createNetworkVlan(req);

            if (res.createNetworkVlan201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkVlan

Delete a VLAN from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkVlanRequest;
import org.openapis.openapi.models.operations.DeleteNetworkVlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkVlanRequest req = new DeleteNetworkVlanRequest("quasi", "mollitia");            

            DeleteNetworkVlanResponse res = sdk.vlaNs.deleteNetworkVlan(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkVlan

Return a VLAN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkVlanRequest;
import org.openapis.openapi.models.operations.GetNetworkVlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkVlanRequest req = new GetNetworkVlanRequest("harum", "cumque");            

            GetNetworkVlanResponse res = sdk.vlaNs.getNetworkVlan(req);

            if (res.getNetworkVlan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkVlans

List the VLANs for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkVlansRequest;
import org.openapis.openapi.models.operations.GetNetworkVlansResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkVlansRequest req = new GetNetworkVlansRequest("expedita");            

            GetNetworkVlansResponse res = sdk.vlaNs.getNetworkVlans(req);

            if (res.getNetworkVlans200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkVlansEnabledState

Returns the enabled status of VLANs for the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkVlansEnabledStateRequest;
import org.openapis.openapi.models.operations.GetNetworkVlansEnabledStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkVlansEnabledStateRequest req = new GetNetworkVlansEnabledStateRequest("eaque");            

            GetNetworkVlansEnabledStateResponse res = sdk.vlaNs.getNetworkVlansEnabledState(req);

            if (res.getNetworkVlansEnabledState200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkVlan

Update a VLAN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkVlanRequest;
import org.openapis.openapi.models.operations.UpdateNetworkVlanRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkVlanRequestBodyDhcpHandlingEnum;
import org.openapis.openapi.models.operations.UpdateNetworkVlanRequestBodyDhcpLeaseTimeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkVlanRequestBodyDhcpOptions;
import org.openapis.openapi.models.operations.UpdateNetworkVlanRequestBodyDhcpOptionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkVlanRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateNetworkVlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkVlanRequest req = new UpdateNetworkVlanRequest("aliquid", "excepturi") {{
                requestBody = new UpdateNetworkVlanRequestBody() {{
                    applianceIp = "magni";
                    dhcpBootFilename = "tempora";
                    dhcpBootNextServer = "possimus";
                    dhcpBootOptionsEnabled = false;
                    dhcpHandling = UpdateNetworkVlanRequestBodyDhcpHandlingEnum.DO_NOT_RESPOND_TO_DHCP_REQUESTS;
                    dhcpLeaseTime = UpdateNetworkVlanRequestBodyDhcpLeaseTimeEnum.THIRTY_MINUTES;
                    dhcpOptions = new org.openapis.openapi.models.operations.UpdateNetworkVlanRequestBodyDhcpOptions[]{{
                        add(new UpdateNetworkVlanRequestBodyDhcpOptions("minus", UpdateNetworkVlanRequestBodyDhcpOptionsTypeEnum.TEXT, "quos") {{
                            code = "accusamus";
                            type = UpdateNetworkVlanRequestBodyDhcpOptionsTypeEnum.TEXT;
                            value = "delectus";
                        }}),
                    }};
                    dhcpRelayServerIps = new String[]{{
                        add("voluptatum"),
                        add("iste"),
                        add("corporis"),
                        add("accusantium"),
                    }};
                    dnsNameservers = "illo";
                    fixedIpAssignments = new java.util.HashMap<String, Object>() {{
                        put("doloribus", "nostrum");
                    }};
                    groupPolicyId = "at";
                    name = "Tony Streich";
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateNetworkVlanRequestBodyReservedIpRanges[]{{
                        add(new UpdateNetworkVlanRequestBodyReservedIpRanges("non", "voluptates", "ad") {{
                            comment = "quae";
                            end = "quos";
                            start = "aperiam";
                        }}),
                        add(new UpdateNetworkVlanRequestBodyReservedIpRanges("consequuntur", "maiores", "inventore") {{
                            comment = "aliquam";
                            end = "quisquam";
                            start = "quas";
                        }}),
                        add(new UpdateNetworkVlanRequestBodyReservedIpRanges("dolor", "aliquid", "consectetur") {{
                            comment = "aliquid";
                            end = "laudantium";
                            start = "est";
                        }}),
                    }};
                    subnet = "cumque";
                    vpnNatSubnet = "rem";
                }};;
            }};            

            UpdateNetworkVlanResponse res = sdk.vlaNs.updateNetworkVlan(req);

            if (res.updateNetworkVlan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkVlansEnabledState

Enable/Disable VLANs for the given network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkVlansEnabledStateRequest;
import org.openapis.openapi.models.operations.UpdateNetworkVlansEnabledStateRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkVlansEnabledStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkVlansEnabledStateRequest req = new UpdateNetworkVlansEnabledStateRequest(                new UpdateNetworkVlansEnabledStateRequestBody(false);, "ducimus");            

            UpdateNetworkVlansEnabledStateResponse res = sdk.vlaNs.updateNetworkVlansEnabledState(req);

            if (res.updateNetworkVlansEnabledState200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
