# uplinks

### Available Operations

* [getDeviceApplianceUplinksSettings](#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [getDeviceLossAndLatencyHistory](#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [getNetworkApplianceUplinksUsageHistory](#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [getOrganizationApplianceUplinkStatuses](#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [getOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [getOrganizationDevicesUplinksLossAndLatency](#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [getOrganizationUplinksStatuses](#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [updateDeviceApplianceUplinksSettings](#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance

## getDeviceApplianceUplinksSettings

Return the uplink settings for an MX appliance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceApplianceUplinksSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceApplianceUplinksSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceApplianceUplinksSettingsRequest req = new GetDeviceApplianceUplinksSettingsRequest("debitis");            

            GetDeviceApplianceUplinksSettingsResponse res = sdk.uplinks.getDeviceApplianceUplinksSettings(req);

            if (res.getDeviceApplianceUplinksSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceLossAndLatencyHistoryRequest;
import org.openapis.openapi.models.operations.GetDeviceLossAndLatencyHistoryResponse;
import org.openapis.openapi.models.operations.GetDeviceLossAndLatencyHistoryUplinkEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLossAndLatencyHistoryRequest req = new GetDeviceLossAndLatencyHistoryRequest("suscipit", "iure") {{
                resolution = 797085L;
                t0 = "accusamus";
                t1 = "voluptatem";
                timespan = 9383.58;
                uplink = GetDeviceLossAndLatencyHistoryUplinkEnum.WAN1;
            }};            

            GetDeviceLossAndLatencyHistoryResponse res = sdk.uplinks.getDeviceLossAndLatencyHistory(req);

            if (res.getDeviceLossAndLatencyHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceUplinksUsageHistory

Get the sent and received bytes for each uplink of a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceUplinksUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceUplinksUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceUplinksUsageHistoryRequest req = new GetNetworkApplianceUplinksUsageHistoryRequest("beatae") {{
                resolution = 852011L;
                t0 = "saepe";
                t1 = "molestiae";
                timespan = 5738.57;
            }};            

            GetNetworkApplianceUplinksUsageHistoryResponse res = sdk.uplinks.getNetworkApplianceUplinksUsageHistory(req);

            if (res.getNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceUplinkStatuses

List the uplink status of every Meraki MX and Z series appliances in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceUplinkStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceUplinkStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceUplinkStatusesRequest req = new GetOrganizationApplianceUplinkStatusesRequest("dolorem") {{
                endingBefore = "quidem";
                iccids = new String[]{{
                    add("quam"),
                    add("laborum"),
                    add("sunt"),
                }};
                networkIds = new String[]{{
                    add("quasi"),
                    add("iure"),
                }};
                perPage = 848202L;
                serials = new String[]{{
                    add("sapiente"),
                }};
                startingAfter = "nobis";
            }};            

            GetOrganizationApplianceUplinkStatusesResponse res = sdk.uplinks.getOrganizationApplianceUplinkStatuses(req);

            if (res.getOrganizationApplianceUplinkStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesUplinksAddressesByDevice

List the current uplink addresses for devices in an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksAddressesByDeviceRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksAddressesByDeviceResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesUplinksAddressesByDeviceRequest req = new GetOrganizationDevicesUplinksAddressesByDeviceRequest("excepturi") {{
                endingBefore = "ratione";
                networkIds = new String[]{{
                    add("ducimus"),
                    add("itaque"),
                    add("aliquid"),
                    add("quidem"),
                }};
                perPage = 395479L;
                productTypes = new String[]{{
                    add("sed"),
                    add("nihil"),
                    add("a"),
                }};
                serials = new String[]{{
                    add("maiores"),
                }};
                startingAfter = "iusto";
                tags = new String[]{{
                    add("aspernatur"),
                    add("eaque"),
                    add("pariatur"),
                    add("deserunt"),
                }};
                tagsFilterType = GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum.WITH_ANY_TAGS;
            }};            

            GetOrganizationDevicesUplinksAddressesByDeviceResponse res = sdk.uplinks.getOrganizationDevicesUplinksAddressesByDevice(req);

            if (res.getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksLossAndLatencyRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksLossAndLatencyResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesUplinksLossAndLatencyRequest req = new GetOrganizationDevicesUplinksLossAndLatencyRequest("cum") {{
                ip = "nisi";
                t0 = "excepturi";
                t1 = "incidunt";
                timespan = 2787.41;
                uplink = GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum.WAN2;
            }};            

            GetOrganizationDevicesUplinksLossAndLatencyResponse res = sdk.uplinks.getOrganizationDevicesUplinksLossAndLatency(req);

            if (res.getOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationUplinksStatuses

List the uplink status of every Meraki MX, MG and Z series devices in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationUplinksStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationUplinksStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationUplinksStatusesRequest req = new GetOrganizationUplinksStatusesRequest("laboriosam") {{
                endingBefore = "voluptatibus";
                iccids = new String[]{{
                    add("aspernatur"),
                }};
                networkIds = new String[]{{
                    add("ut"),
                    add("voluptas"),
                    add("harum"),
                }};
                perPage = 736623L;
                serials = new String[]{{
                    add("sequi"),
                    add("molestiae"),
                    add("ea"),
                }};
                startingAfter = "nostrum";
            }};            

            GetOrganizationUplinksStatusesResponse res = sdk.uplinks.getOrganizationUplinksStatuses(req);

            if (res.getOrganizationUplinksStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceApplianceUplinksSettings

Update the uplink settings for an MX appliance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceApplianceUplinksSettingsRequest req = new UpdateDeviceApplianceUplinksSettingsRequest(                new UpdateDeviceApplianceUplinksSettingsRequestBody(                new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces() {{
                                                wan1 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1() {{
                                                    enabled = false;
                                                    pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe() {{
                                                        authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication() {{
                                                            enabled = false;
                                                            password = "soluta";
                                                            username = "Spencer_Konopelski";
                                                        }};;
                                                        enabled = false;
                                                    }};;
                                                    svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis() {{
                                                        ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4() {{
                                                            address = "665 Graham Cape";
                                                            assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum.DYNAMIC;
                                                            gateway = "eos";
                                                            nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers() {{
                                                                addresses = new String[]{{
                                                                    add("fugiat"),
                                                                    add("cupiditate"),
                                                                }};
                                                            }};;
                                                        }};;
                                                        ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6() {{
                                                            address = "29963 Braun Springs";
                                                            assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum.STATIC_;
                                                            gateway = "consequatur";
                                                            nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers() {{
                                                                addresses = new String[]{{
                                                                    add("quisquam"),
                                                                }};
                                                            }};;
                                                        }};;
                                                    }};;
                                                    vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging() {{
                                                        enabled = false;
                                                        vlanId = 83786L;
                                                    }};;
                                                }};;
                                                wan2 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2() {{
                                                    enabled = false;
                                                    pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe() {{
                                                        authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication() {{
                                                            enabled = false;
                                                            password = "repudiandae";
                                                            username = "Jewel.Olson";
                                                        }};;
                                                        enabled = false;
                                                    }};;
                                                    svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis() {{
                                                        ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4() {{
                                                            address = "99205 Glover Parkways";
                                                            assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum.STATIC_;
                                                            gateway = "delectus";
                                                            nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers() {{
                                                                addresses = new String[]{{
                                                                    add("expedita"),
                                                                    add("cumque"),
                                                                    add("ad"),
                                                                }};
                                                            }};;
                                                        }};;
                                                        ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6() {{
                                                            address = "0030 Waelchi Point";
                                                            assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum.DYNAMIC;
                                                            gateway = "aliquam";
                                                            nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers() {{
                                                                addresses = new String[]{{
                                                                    add("voluptatem"),
                                                                    add("quasi"),
                                                                }};
                                                            }};;
                                                        }};;
                                                    }};;
                                                    vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging() {{
                                                        enabled = false;
                                                        vlanId = 16310L;
                                                    }};;
                                                }};;
                                            }};);, "eum");            

            UpdateDeviceApplianceUplinksSettingsResponse res = sdk.uplinks.updateDeviceApplianceUplinksSettings(req);

            if (res.updateDeviceApplianceUplinksSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
