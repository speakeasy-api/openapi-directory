# vlans

### Available Operations

* [createNetworkApplianceVlan](#createnetworkappliancevlan) - Add a VLAN
* [deleteNetworkApplianceVlan](#deletenetworkappliancevlan) - Delete a VLAN from a network
* [getNetworkApplianceVlan](#getnetworkappliancevlan) - Return a VLAN
* [getNetworkApplianceVlans](#getnetworkappliancevlans) - List the VLANs for an MX network
* [getNetworkApplianceVlansSettings](#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [updateNetworkApplianceVlan](#updatenetworkappliancevlan) - Update a VLAN
* [updateNetworkApplianceVlansSettings](#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network

## createNetworkApplianceVlan

Add a VLAN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequest;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyIpv6;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyMandatoryDhcp;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkApplianceVlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkApplianceVlanRequest req = new CreateNetworkApplianceVlanRequest(                new CreateNetworkApplianceVlanRequestBody("sapiente", "labore") {{
                                applianceIp = "eos";
                                cidr = "neque";
                                groupPolicyId = "doloribus";
                                ipv6 = new CreateNetworkApplianceVlanRequestBodyIpv6() {{
                                    enabled = false;
                                    prefixAssignments = new org.openapis.openapi.models.operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments[]{{
                                        add(new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                            autonomous = false;
                                            origin = new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET) {{
                                                interfaces = new String[]{{
                                                    add("quibusdam"),
                                                    add("quas"),
                                                    add("cupiditate"),
                                                }};
                                                type = CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT;
                                            }};
                                            staticApplianceIp6 = "labore";
                                            staticPrefix = "expedita";
                                        }}),
                                        add(new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                            autonomous = false;
                                            origin = new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT) {{
                                                interfaces = new String[]{{
                                                    add("debitis"),
                                                    add("nostrum"),
                                                    add("molestiae"),
                                                }};
                                                type = CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET;
                                            }};
                                            staticApplianceIp6 = "laudantium";
                                            staticPrefix = "ex";
                                        }}),
                                        add(new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                            autonomous = false;
                                            origin = new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET) {{
                                                interfaces = new String[]{{
                                                    add("non"),
                                                    add("accusamus"),
                                                }};
                                                type = CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT;
                                            }};
                                            staticApplianceIp6 = "adipisci";
                                            staticPrefix = "reiciendis";
                                        }}),
                                        add(new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                            autonomous = false;
                                            origin = new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT) {{
                                                interfaces = new String[]{{
                                                    add("nam"),
                                                    add("ipsa"),
                                                    add("mollitia"),
                                                    add("aut"),
                                                }};
                                                type = CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT;
                                            }};
                                            staticApplianceIp6 = "cupiditate";
                                            staticPrefix = "provident";
                                        }}),
                                    }};
                                }};;
                                mandatoryDhcp = new CreateNetworkApplianceVlanRequestBodyMandatoryDhcp() {{
                                    enabled = false;
                                }};;
                                mask = 51674L;
                                subnet = "reiciendis";
                                templateVlanType = CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum.SAME;
                            }};, "in");            

            CreateNetworkApplianceVlanResponse res = sdk.vlans.createNetworkApplianceVlan(req);

            if (res.createNetworkApplianceVlan201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkApplianceVlan

Delete a VLAN from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceVlanRequest;
import org.openapis.openapi.models.operations.DeleteNetworkApplianceVlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkApplianceVlanRequest req = new DeleteNetworkApplianceVlanRequest("quam", "magni");            

            DeleteNetworkApplianceVlanResponse res = sdk.vlans.deleteNetworkApplianceVlan(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceVlan

Return a VLAN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlanRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVlanRequest req = new GetNetworkApplianceVlanRequest("ipsam", "expedita");            

            GetNetworkApplianceVlanResponse res = sdk.vlans.getNetworkApplianceVlan(req);

            if (res.getNetworkApplianceVlan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceVlans

List the VLANs for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlansRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlansResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVlansRequest req = new GetNetworkApplianceVlansRequest("porro");            

            GetNetworkApplianceVlansResponse res = sdk.vlans.getNetworkApplianceVlans(req);

            if (res.getNetworkApplianceVlans200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceVlansSettings

Returns the enabled status of VLANs for the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlansSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlansSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVlansSettingsRequest req = new GetNetworkApplianceVlansSettingsRequest("adipisci");            

            GetNetworkApplianceVlansSettingsResponse res = sdk.vlans.getNetworkApplianceVlansSettings(req);

            if (res.getNetworkApplianceVlansSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceVlan

Update a VLAN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyIpv6;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceVlanRequest req = new UpdateNetworkApplianceVlanRequest("atque", "sit") {{
                requestBody = new UpdateNetworkApplianceVlanRequestBody() {{
                    applianceIp = "atque";
                    cidr = "possimus";
                    dhcpBootFilename = "excepturi";
                    dhcpBootNextServer = "expedita";
                    dhcpBootOptionsEnabled = false;
                    dhcpHandling = UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum.RUN_ADHCP_SERVER;
                    dhcpLeaseTime = UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum.ONE_WEEK;
                    dhcpOptions = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions[]{{
                        add(new UpdateNetworkApplianceVlanRequestBodyDhcpOptions("odio", UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum.TEXT, "eos") {{
                            code = "ut";
                            type = UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum.HEX;
                            value = "nobis";
                        }}),
                        add(new UpdateNetworkApplianceVlanRequestBodyDhcpOptions("alias", UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum.IP, "ea") {{
                            code = "unde";
                            type = UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum.HEX;
                            value = "quibusdam";
                        }}),
                    }};
                    dhcpRelayServerIps = new String[]{{
                        add("vel"),
                        add("quia"),
                        add("ipsum"),
                    }};
                    dnsNameservers = "saepe";
                    fixedIpAssignments = new java.util.HashMap<String, Object>() {{
                        put("atque", "in");
                        put("quaerat", "eum");
                        put("fuga", "asperiores");
                    }};
                    groupPolicyId = "est";
                    ipv6 = new UpdateNetworkApplianceVlanRequestBodyIpv6() {{
                        enabled = false;
                        prefixAssignments = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments[]{{
                            add(new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                autonomous = false;
                                origin = new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET) {{
                                    interfaces = new String[]{{
                                        add("soluta"),
                                        add("suscipit"),
                                        add("dolorem"),
                                    }};
                                    type = UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET;
                                }};
                                staticApplianceIp6 = "odio";
                                staticPrefix = "iste";
                            }}),
                            add(new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                autonomous = false;
                                origin = new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET) {{
                                    interfaces = new String[]{{
                                        add("quisquam"),
                                        add("amet"),
                                    }};
                                    type = UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET;
                                }};
                                staticApplianceIp6 = "eum";
                                staticPrefix = "aperiam";
                            }}),
                            add(new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                autonomous = false;
                                origin = new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET) {{
                                    interfaces = new String[]{{
                                        add("temporibus"),
                                        add("delectus"),
                                    }};
                                    type = UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET;
                                }};
                                staticApplianceIp6 = "ipsa";
                                staticPrefix = "repellat";
                            }}),
                            add(new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments() {{
                                autonomous = false;
                                origin = new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin(UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET) {{
                                    interfaces = new String[]{{
                                        add("harum"),
                                    }};
                                    type = UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT;
                                }};
                                staticApplianceIp6 = "sapiente";
                                staticPrefix = "earum";
                            }}),
                        }};
                    }};;
                    mandatoryDhcp = new UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp() {{
                        enabled = false;
                    }};;
                    mask = 580596L;
                    name = "Rosa Jones";
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateNetworkApplianceVlanRequestBodyReservedIpRanges[]{{
                        add(new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges("vitae", "quas", "ullam") {{
                            comment = "alias";
                            end = "atque";
                            start = "dolores";
                        }}),
                        add(new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges("eius", "pariatur", "delectus") {{
                            comment = "itaque";
                            end = "amet";
                            start = "aperiam";
                        }}),
                        add(new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges("culpa", "magnam", "totam") {{
                            comment = "vitae";
                            end = "vel";
                            start = "amet";
                        }}),
                    }};
                    subnet = "fuga";
                    templateVlanType = UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum.SAME;
                    vpnNatSubnet = "voluptate";
                }};;
            }};            

            UpdateNetworkApplianceVlanResponse res = sdk.vlans.updateNetworkApplianceVlan(req);

            if (res.updateNetworkApplianceVlan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceVlansSettings

Enable/Disable VLANs for the given network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlansSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlansSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlansSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceVlansSettingsRequest req = new UpdateNetworkApplianceVlansSettingsRequest("commodi") {{
                requestBody = new UpdateNetworkApplianceVlansSettingsRequestBody() {{
                    vlansEnabled = false;
                }};;
            }};            

            UpdateNetworkApplianceVlansSettingsResponse res = sdk.vlans.updateNetworkApplianceVlansSettings(req);

            if (res.updateNetworkApplianceVlansSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
