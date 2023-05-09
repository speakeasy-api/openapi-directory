# devices

### Available Operations

* [blinkDeviceLeds](#blinkdeviceleds) - Blink the LEDs on a device
* [checkinNetworkSmDevices](#checkinnetworksmdevices) - Force check-in a set of devices
* [claimNetworkDevices](#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [cloneOrganizationSwitchDevices](#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [createDeviceLiveToolsPing](#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [createDeviceLiveToolsPingDevice](#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [getDevice](#getdevice) - Return a single device
* [getDeviceCellularSims](#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [getDeviceClients](#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [getDeviceLiveToolsPing](#getdevicelivetoolsping) - Return a ping job
* [getDeviceLiveToolsPingDevice](#getdevicelivetoolspingdevice) - Return a ping device job
* [getDeviceLldpCdp](#getdevicelldpcdp) - List LLDP and CDP information for a device
* [getDeviceLossAndLatencyHistory](#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [getDeviceManagementInterface](#getdevicemanagementinterface) - Return the management interface settings for a device
* [getNetworkDevices](#getnetworkdevices) - List the devices in a network
* [getNetworkSmDeviceCellularUsageHistory](#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history
* [getNetworkSmDeviceCerts](#getnetworksmdevicecerts) - List the certs on a device
* [getNetworkSmDeviceConnectivity](#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [getNetworkSmDeviceDesktopLogs](#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [getNetworkSmDeviceDeviceCommandLogs](#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [getNetworkSmDeviceDeviceProfiles](#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [getNetworkSmDeviceNetworkAdapters](#getnetworksmdevicenetworkadapters) - List the network adapters of a device
* [getNetworkSmDevicePerformanceHistory](#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [getNetworkSmDeviceRestrictions](#getnetworksmdevicerestrictions) - List the restrictions on a device
* [getNetworkSmDeviceSecurityCenters](#getnetworksmdevicesecuritycenters) - List the security centers on a device
* [getNetworkSmDeviceSoftwares](#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [getNetworkSmDeviceWlanLists](#getnetworksmdevicewlanlists) - List the saved SSID names on a device
* [getNetworkSmDevices](#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [getNetworkWirelessDevicesConnectionStats](#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [getNetworkWirelessDevicesLatencyStats](#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getOrganizationDevices](#getorganizationdevices) - List the devices in an organization
* [getOrganizationDevicesAvailabilities](#getorganizationdevicesavailabilities) - List the availability information for devices in an organization
* [getOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [getOrganizationDevicesStatuses](#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [getOrganizationDevicesStatusesOverview](#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [getOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [getOrganizationDevicesUplinksLossAndLatency](#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [getOrganizationInventoryDevice](#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [getOrganizationInventoryDevices](#getorganizationinventorydevices) - Return the device inventory for an organization
* [getOrganizationSummaryTopDevicesByUsage](#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [getOrganizationSummaryTopDevicesModelsByUsage](#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [getOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [lockNetworkSmDevices](#locknetworksmdevices) - Lock a set of devices
* [modifyNetworkSmDevicesTags](#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [moveNetworkSmDevices](#movenetworksmdevices) - Move a set of devices to a new network
* [rebootDevice](#rebootdevice) - Reboot a device
* [refreshNetworkSmDeviceDetails](#refreshnetworksmdevicedetails) - Refresh the details of a device
* [removeNetworkDevices](#removenetworkdevices) - Remove a single device
* [unenrollNetworkSmDevice](#unenrollnetworksmdevice) - Unenroll a device
* [updateDevice](#updatedevice) - Update the attributes of a device
* [updateDeviceCellularSims](#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.
* [updateDeviceManagementInterface](#updatedevicemanagementinterface) - Update the management interface settings for a device
* [updateNetworkSmDevicesFields](#updatenetworksmdevicesfields) - Modify the fields of a device
* [vmxNetworkDevicesClaim](#vmxnetworkdevicesclaim) - Claim a vMX into a network
* [wipeNetworkSmDevices](#wipenetworksmdevices) - Wipe a device

## blinkDeviceLeds

Blink the LEDs on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BlinkDeviceLedsRequest;
import org.openapis.openapi.models.operations.BlinkDeviceLedsRequestBody;
import org.openapis.openapi.models.operations.BlinkDeviceLedsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BlinkDeviceLedsRequest req = new BlinkDeviceLedsRequest("esse") {{
                requestBody = new BlinkDeviceLedsRequestBody() {{
                    duration = 480529L;
                    duty = 127088L;
                    period = 768011L;
                }};;
            }};            

            BlinkDeviceLedsResponse res = sdk.devices.blinkDeviceLeds(req);

            if (res.blinkDeviceLeds202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkinNetworkSmDevices

Force check-in a set of devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckinNetworkSmDevicesRequest;
import org.openapis.openapi.models.operations.CheckinNetworkSmDevicesRequestBody;
import org.openapis.openapi.models.operations.CheckinNetworkSmDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CheckinNetworkSmDevicesRequest req = new CheckinNetworkSmDevicesRequest("consectetur") {{
                requestBody = new CheckinNetworkSmDevicesRequestBody() {{
                    ids = new String[]{{
                        add("itaque"),
                        add("illo"),
                    }};
                    scope = new String[]{{
                        add("possimus"),
                        add("ea"),
                        add("tempore"),
                        add("sapiente"),
                    }};
                    serials = new String[]{{
                        add("modi"),
                        add("rerum"),
                    }};
                    wifiMacs = new String[]{{
                        add("quis"),
                        add("labore"),
                    }};
                }};;
            }};            

            CheckinNetworkSmDevicesResponse res = sdk.devices.checkinNetworkSmDevices(req);

            if (res.checkinNetworkSmDevices200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## claimNetworkDevices

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClaimNetworkDevicesRequest;
import org.openapis.openapi.models.operations.ClaimNetworkDevicesRequestBody;
import org.openapis.openapi.models.operations.ClaimNetworkDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClaimNetworkDevicesRequest req = new ClaimNetworkDevicesRequest(                new ClaimNetworkDevicesRequestBody(                new String[]{{
                                                add("blanditiis"),
                                                add("sequi"),
                                                add("vitae"),
                                            }});, "accusamus");            

            ClaimNetworkDevicesResponse res = sdk.devices.claimNetworkDevices(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloneOrganizationSwitchDevices

Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloneOrganizationSwitchDevicesRequest;
import org.openapis.openapi.models.operations.CloneOrganizationSwitchDevicesRequestBody;
import org.openapis.openapi.models.operations.CloneOrganizationSwitchDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CloneOrganizationSwitchDevicesRequest req = new CloneOrganizationSwitchDevicesRequest(                new CloneOrganizationSwitchDevicesRequestBody("omnis",                 new String[]{{
                                                add("tenetur"),
                                                add("accusantium"),
                                            }});, "debitis");            

            CloneOrganizationSwitchDevicesResponse res = sdk.devices.cloneOrganizationSwitchDevices(req);

            if (res.cloneOrganizationSwitchDevices200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeviceLiveToolsPing

Enqueue a job to ping a target host from the device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingRequest;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingRequestBody;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceLiveToolsPingRequest req = new CreateDeviceLiveToolsPingRequest(                new CreateDeviceLiveToolsPingRequestBody("ducimus") {{
                                count = 976341L;
                            }};, "enim");            

            CreateDeviceLiveToolsPingResponse res = sdk.devices.createDeviceLiveToolsPing(req);

            if (res.createDeviceLiveToolsPing201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeviceLiveToolsPingDevice

Enqueue a job to check connectivity status to the device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingDeviceRequest;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingDeviceRequestBody;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceLiveToolsPingDeviceRequest req = new CreateDeviceLiveToolsPingDeviceRequest("necessitatibus") {{
                requestBody = new CreateDeviceLiveToolsPingDeviceRequestBody() {{
                    count = 724003L;
                }};;
            }};            

            CreateDeviceLiveToolsPingDeviceResponse res = sdk.devices.createDeviceLiveToolsPingDevice(req);

            if (res.createDeviceLiveToolsPingDevice201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevice

Return a single device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceRequest;
import org.openapis.openapi.models.operations.GetDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceRequest req = new GetDeviceRequest("quia");            

            GetDeviceResponse res = sdk.devices.getDevice(req);

            if (res.getDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCellularSims

Return the SIM and APN configurations for a cellular device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCellularSimsRequest;
import org.openapis.openapi.models.operations.GetDeviceCellularSimsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCellularSimsRequest req = new GetDeviceCellularSimsRequest("magni");            

            GetDeviceCellularSimsResponse res = sdk.devices.getDeviceCellularSims(req);

            if (res.getDeviceCellularSims200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceClients

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceClientsRequest;
import org.openapis.openapi.models.operations.GetDeviceClientsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceClientsRequest req = new GetDeviceClientsRequest("dolore") {{
                t0 = "laboriosam";
                timespan = 146.14;
            }};            

            GetDeviceClientsResponse res = sdk.devices.getDeviceClients(req);

            if (res.getDeviceClients200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceLiveToolsPing

Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceLiveToolsPingRequest;
import org.openapis.openapi.models.operations.GetDeviceLiveToolsPingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLiveToolsPingRequest req = new GetDeviceLiveToolsPingRequest("odio", "earum");            

            GetDeviceLiveToolsPingResponse res = sdk.devices.getDeviceLiveToolsPing(req);

            if (res.getDeviceLiveToolsPing200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceLiveToolsPingDevice

Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceLiveToolsPingDeviceRequest;
import org.openapis.openapi.models.operations.GetDeviceLiveToolsPingDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLiveToolsPingDeviceRequest req = new GetDeviceLiveToolsPingDeviceRequest("est", "ut");            

            GetDeviceLiveToolsPingDeviceResponse res = sdk.devices.getDeviceLiveToolsPingDevice(req);

            if (res.getDeviceLiveToolsPingDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceLldpCdp

List LLDP and CDP information for a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceLldpCdpRequest;
import org.openapis.openapi.models.operations.GetDeviceLldpCdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLldpCdpRequest req = new GetDeviceLldpCdpRequest("est");            

            GetDeviceLldpCdpResponse res = sdk.devices.getDeviceLldpCdp(req);

            if (res.getDeviceLldpCdp200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("voluptatum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLossAndLatencyHistoryRequest req = new GetDeviceLossAndLatencyHistoryRequest("quibusdam", "reiciendis") {{
                resolution = 939456L;
                t0 = "incidunt";
                t1 = "sit";
                timespan = 7670.7;
                uplink = GetDeviceLossAndLatencyHistoryUplinkEnum.WAN2;
            }};            

            GetDeviceLossAndLatencyHistoryResponse res = sdk.devices.getDeviceLossAndLatencyHistory(req);

            if (res.getDeviceLossAndLatencyHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceManagementInterface

Return the management interface settings for a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceManagementInterfaceRequest;
import org.openapis.openapi.models.operations.GetDeviceManagementInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceManagementInterfaceRequest req = new GetDeviceManagementInterfaceRequest("inventore");            

            GetDeviceManagementInterfaceResponse res = sdk.devices.getDeviceManagementInterface(req);

            if (res.getDeviceManagementInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkDevices

List the devices in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkDevicesRequest;
import org.openapis.openapi.models.operations.GetNetworkDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkDevicesRequest req = new GetNetworkDevicesRequest("enim");            

            GetNetworkDevicesResponse res = sdk.devices.getNetworkDevices(req);

            if (res.getNetworkDevices200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceCellularUsageHistory

Return the client's daily cellular data usage history. Usage data is in kilobytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceCellularUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceCellularUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceCellularUsageHistoryRequest req = new GetNetworkSmDeviceCellularUsageHistoryRequest("soluta", "tenetur");            

            GetNetworkSmDeviceCellularUsageHistoryResponse res = sdk.devices.getNetworkSmDeviceCellularUsageHistory(req);

            if (res.getNetworkSmDeviceCellularUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceCerts

List the certs on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceCertsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceCertsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceCertsRequest req = new GetNetworkSmDeviceCertsRequest("dolorum", "ipsa");            

            GetNetworkSmDeviceCertsResponse res = sdk.devices.getNetworkSmDeviceCerts(req);

            if (res.getNetworkSmDeviceCerts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceConnectivity

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceConnectivityRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceConnectivityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceConnectivityRequest req = new GetNetworkSmDeviceConnectivityRequest("soluta", "impedit") {{
                endingBefore = "quas";
                perPage = 705722L;
                startingAfter = "quam";
            }};            

            GetNetworkSmDeviceConnectivityResponse res = sdk.devices.getNetworkSmDeviceConnectivity(req);

            if (res.getNetworkSmDeviceConnectivity200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceDesktopLogs

Return historical records of various Systems Manager network connection details for desktop devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDesktopLogsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDesktopLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceDesktopLogsRequest req = new GetNetworkSmDeviceDesktopLogsRequest("commodi", "eaque") {{
                endingBefore = "similique";
                perPage = 976042L;
                startingAfter = "voluptates";
            }};            

            GetNetworkSmDeviceDesktopLogsResponse res = sdk.devices.getNetworkSmDeviceDesktopLogs(req);

            if (res.getNetworkSmDeviceDesktopLogs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceDeviceCommandLogs

Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDeviceCommandLogsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDeviceCommandLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceDeviceCommandLogsRequest req = new GetNetworkSmDeviceDeviceCommandLogsRequest("autem", "nobis") {{
                endingBefore = "laboriosam";
                perPage = 248903L;
                startingAfter = "corporis";
            }};            

            GetNetworkSmDeviceDeviceCommandLogsResponse res = sdk.devices.getNetworkSmDeviceDeviceCommandLogs(req);

            if (res.getNetworkSmDeviceDeviceCommandLogs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceDeviceProfiles

Get the installed profiles associated with a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDeviceProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDeviceProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceDeviceProfilesRequest req = new GetNetworkSmDeviceDeviceProfilesRequest("nesciunt", "eos");            

            GetNetworkSmDeviceDeviceProfilesResponse res = sdk.devices.getNetworkSmDeviceDeviceProfiles(req);

            if (res.getNetworkSmDeviceDeviceProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceNetworkAdapters

List the network adapters of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceNetworkAdaptersRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceNetworkAdaptersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceNetworkAdaptersRequest req = new GetNetworkSmDeviceNetworkAdaptersRequest("ipsam", "amet");            

            GetNetworkSmDeviceNetworkAdaptersResponse res = sdk.devices.getNetworkSmDeviceNetworkAdapters(req);

            if (res.getNetworkSmDeviceNetworkAdapters200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDevicePerformanceHistory

Return historical records of various Systems Manager client metrics for desktop devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDevicePerformanceHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDevicePerformanceHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDevicePerformanceHistoryRequest req = new GetNetworkSmDevicePerformanceHistoryRequest("quos", "voluptas") {{
                endingBefore = "porro";
                perPage = 72854L;
                startingAfter = "sit";
            }};            

            GetNetworkSmDevicePerformanceHistoryResponse res = sdk.devices.getNetworkSmDevicePerformanceHistory(req);

            if (res.getNetworkSmDevicePerformanceHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceRestrictions

List the restrictions on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceRestrictionsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceRestrictionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceRestrictionsRequest req = new GetNetworkSmDeviceRestrictionsRequest("blanditiis", "quaerat");            

            GetNetworkSmDeviceRestrictionsResponse res = sdk.devices.getNetworkSmDeviceRestrictions(req);

            if (res.getNetworkSmDeviceRestrictions200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceSecurityCenters

List the security centers on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceSecurityCentersRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceSecurityCentersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceSecurityCentersRequest req = new GetNetworkSmDeviceSecurityCentersRequest("dolorum", "illo");            

            GetNetworkSmDeviceSecurityCentersResponse res = sdk.devices.getNetworkSmDeviceSecurityCenters(req);

            if (res.getNetworkSmDeviceSecurityCenters200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceSoftwares

Get a list of softwares associated with a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceSoftwaresRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceSoftwaresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceSoftwaresRequest req = new GetNetworkSmDeviceSoftwaresRequest("possimus", "modi");            

            GetNetworkSmDeviceSoftwaresResponse res = sdk.devices.getNetworkSmDeviceSoftwares(req);

            if (res.getNetworkSmDeviceSoftwares200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceWlanLists

List the saved SSID names on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceWlanListsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceWlanListsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceWlanListsRequest req = new GetNetworkSmDeviceWlanListsRequest("nisi", "ipsam");            

            GetNetworkSmDeviceWlanListsResponse res = sdk.devices.getNetworkSmDeviceWlanLists(req);

            if (res.getNetworkSmDeviceWlanLists200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDevices

List the devices enrolled in an SM network with various specified fields and filters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDevicesRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDevicesRequest req = new GetNetworkSmDevicesRequest("laborum") {{
                endingBefore = "omnis";
                fields = new String[]{{
                    add("qui"),
                    add("ipsam"),
                }};
                ids = new String[]{{
                    add("molestias"),
                    add("reprehenderit"),
                    add("corporis"),
                }};
                perPage = 870465L;
                scope = new String[]{{
                    add("consequatur"),
                    add("optio"),
                    add("vero"),
                    add("eligendi"),
                }};
                serials = new String[]{{
                    add("quisquam"),
                    add("in"),
                    add("atque"),
                }};
                startingAfter = "libero";
                wifiMacs = new String[]{{
                    add("fugit"),
                    add("modi"),
                    add("rem"),
                    add("voluptates"),
                }};
            }};            

            GetNetworkSmDevicesResponse res = sdk.devices.getNetworkSmDevices(req);

            if (res.getNetworkSmDevices200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessDevicesConnectionStatsRequest req = new GetNetworkWirelessDevicesConnectionStatsRequest("ex") {{
                apTag = "voluptates";
                band = GetNetworkWirelessDevicesConnectionStatsBandEnum.FIVE;
                ssid = 714748L;
                t0 = "magni";
                t1 = "aliquam";
                timespan = 350.44;
                vlan = 718914L;
            }};            

            GetNetworkWirelessDevicesConnectionStatsResponse res = sdk.devices.getNetworkWirelessDevicesConnectionStats(req);

            if (res.getNetworkWirelessDevicesConnectionStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessDevicesLatencyStats

Aggregated latency info for this network, grouped by node

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessDevicesLatencyStatsRequest req = new GetNetworkWirelessDevicesLatencyStatsRequest("quo") {{
                apTag = "alias";
                band = GetNetworkWirelessDevicesLatencyStatsBandEnum.FIVE;
                fields = "impedit";
                ssid = 593535L;
                t0 = "optio";
                t1 = "consequatur";
                timespan = 4167.57;
                vlan = 268353L;
            }};            

            GetNetworkWirelessDevicesLatencyStatsResponse res = sdk.devices.getNetworkWirelessDevicesLatencyStats(req);

            if (res.getNetworkWirelessDevicesLatencyStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevices

List the devices in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesProductTypesEnum;
import org.openapis.openapi.models.operations.GetOrganizationDevicesRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesRequest req = new GetOrganizationDevicesRequest("nulla") {{
                configurationUpdatedAfter = "sed";
                endingBefore = "distinctio";
                mac = "quibusdam";
                macs = new String[]{{
                    add("error"),
                    add("necessitatibus"),
                    add("ullam"),
                    add("deleniti"),
                }};
                model = "fugiat";
                models = new String[]{{
                    add("expedita"),
                    add("et"),
                    add("autem"),
                    add("voluptas"),
                }};
                name = "Mr. Marianne Douglas";
                networkIds = new String[]{{
                    add("delectus"),
                    add("ipsam"),
                }};
                perPage = 351873L;
                productTypes = new org.openapis.openapi.models.operations.GetOrganizationDevicesProductTypesEnum[]{{
                    add(GetOrganizationDevicesProductTypesEnum.WIRELESS),
                }};
                sensorAlertProfileIds = new String[]{{
                    add("iusto"),
                    add("aspernatur"),
                }};
                sensorMetrics = new String[]{{
                    add("quod"),
                }};
                serial = "veritatis";
                serials = new String[]{{
                    add("aliquid"),
                    add("qui"),
                }};
                startingAfter = "error";
                tags = new String[]{{
                    add("nulla"),
                }};
                tagsFilterType = GetOrganizationDevicesTagsFilterTypeEnum.WITH_ANY_TAGS;
            }};            

            GetOrganizationDevicesResponse res = sdk.devices.getOrganizationDevices(req);

            if (res.getOrganizationDevices200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesAvailabilities

List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesAvailabilitiesRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesAvailabilitiesResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesAvailabilitiesRequest req = new GetOrganizationDevicesAvailabilitiesRequest("quas") {{
                endingBefore = "molestiae";
                networkIds = new String[]{{
                    add("necessitatibus"),
                    add("in"),
                    add("dicta"),
                }};
                perPage = 744503L;
                productTypes = new String[]{{
                    add("quos"),
                    add("quo"),
                    add("dicta"),
                    add("numquam"),
                }};
                serials = new String[]{{
                    add("quos"),
                }};
                startingAfter = "modi";
                tags = new String[]{{
                    add("voluptatibus"),
                }};
                tagsFilterType = GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnum.WITH_ANY_TAGS;
            }};            

            GetOrganizationDevicesAvailabilitiesResponse res = sdk.devices.getOrganizationDevicesAvailabilities(req);

            if (res.getOrganizationDevicesAvailabilities200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesPowerModulesStatusesByDevice

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesPowerModulesStatusesByDeviceResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesPowerModulesStatusesByDeviceRequest req = new GetOrganizationDevicesPowerModulesStatusesByDeviceRequest("a") {{
                endingBefore = "deleniti";
                networkIds = new String[]{{
                    add("repudiandae"),
                    add("id"),
                }};
                perPage = 76856L;
                productTypes = new String[]{{
                    add("ratione"),
                }};
                serials = new String[]{{
                    add("error"),
                    add("voluptatum"),
                    add("aut"),
                }};
                startingAfter = "laboriosam";
                tags = new String[]{{
                    add("laborum"),
                    add("beatae"),
                    add("commodi"),
                    add("ipsa"),
                }};
                tagsFilterType = GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum.WITH_ALL_TAGS;
            }};            

            GetOrganizationDevicesPowerModulesStatusesByDeviceResponse res = sdk.devices.getOrganizationDevicesPowerModulesStatusesByDevice(req);

            if (res.getOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesStatuses

List the status of every Meraki device in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesProductTypesEnum;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesStatusesEnum;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesStatusesRequest req = new GetOrganizationDevicesStatusesRequest("cupiditate") {{
                endingBefore = "iste";
                models = new String[]{{
                    add("hic"),
                    add("beatae"),
                    add("iusto"),
                    add("cum"),
                }};
                networkIds = new String[]{{
                    add("sunt"),
                    add("reprehenderit"),
                    add("ullam"),
                }};
                perPage = 536347L;
                productTypes = new org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesProductTypesEnum[]{{
                    add(GetOrganizationDevicesStatusesProductTypesEnum.CAMERA),
                    add(GetOrganizationDevicesStatusesProductTypesEnum.SWITCH_),
                    add(GetOrganizationDevicesStatusesProductTypesEnum.SWITCH_),
                    add(GetOrganizationDevicesStatusesProductTypesEnum.CELLULAR_GATEWAY),
                }};
                serials = new String[]{{
                    add("impedit"),
                    add("totam"),
                    add("alias"),
                }};
                startingAfter = "nulla";
                statuses = new org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesStatusesEnum[]{{
                    add(GetOrganizationDevicesStatusesStatusesEnum.OFFLINE),
                    add(GetOrganizationDevicesStatusesStatusesEnum.DORMANT),
                    add(GetOrganizationDevicesStatusesStatusesEnum.DORMANT),
                    add(GetOrganizationDevicesStatusesStatusesEnum.ONLINE),
                }};
                tags = new String[]{{
                    add("omnis"),
                    add("cupiditate"),
                    add("dolor"),
                    add("illo"),
                }};
                tagsFilterType = GetOrganizationDevicesStatusesTagsFilterTypeEnum.WITH_ANY_TAGS;
            }};            

            GetOrganizationDevicesStatusesResponse res = sdk.devices.getOrganizationDevicesStatuses(req);

            if (res.getOrganizationDevicesStatuses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesStatusesOverview

Return an overview of current device statuses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewProductTypesEnum;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesStatusesOverviewRequest req = new GetOrganizationDevicesStatusesOverviewRequest("molestias") {{
                networkIds = new String[]{{
                    add("quasi"),
                    add("aperiam"),
                    add("aliquid"),
                    add("impedit"),
                }};
                productTypes = new org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewProductTypesEnum[]{{
                    add(GetOrganizationDevicesStatusesOverviewProductTypesEnum.WIRELESS),
                    add(GetOrganizationDevicesStatusesOverviewProductTypesEnum.CAMERA),
                    add(GetOrganizationDevicesStatusesOverviewProductTypesEnum.SYSTEMS_MANAGER),
                    add(GetOrganizationDevicesStatusesOverviewProductTypesEnum.CAMERA),
                }};
            }};            

            GetOrganizationDevicesStatusesOverviewResponse res = sdk.devices.getOrganizationDevicesStatusesOverview(req);

            if (res.getOrganizationDevicesStatusesOverview200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("aliquid") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesUplinksAddressesByDeviceRequest req = new GetOrganizationDevicesUplinksAddressesByDeviceRequest("culpa") {{
                endingBefore = "distinctio";
                networkIds = new String[]{{
                    add("dolore"),
                    add("doloremque"),
                    add("animi"),
                }};
                perPage = 158059L;
                productTypes = new String[]{{
                    add("repudiandae"),
                    add("id"),
                    add("aperiam"),
                }};
                serials = new String[]{{
                    add("ducimus"),
                    add("quia"),
                }};
                startingAfter = "quibusdam";
                tags = new String[]{{
                    add("soluta"),
                    add("molestiae"),
                }};
                tagsFilterType = GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum.WITH_ALL_TAGS;
            }};            

            GetOrganizationDevicesUplinksAddressesByDeviceResponse res = sdk.devices.getOrganizationDevicesUplinksAddressesByDevice(req);

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
                .setSecurity(new Security("dolorum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesUplinksLossAndLatencyRequest req = new GetOrganizationDevicesUplinksLossAndLatencyRequest("sequi") {{
                ip = "ut";
                t0 = "maxime";
                t1 = "deserunt";
                timespan = 2902.42;
                uplink = GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum.CELLULAR;
            }};            

            GetOrganizationDevicesUplinksLossAndLatencyResponse res = sdk.devices.getOrganizationDevicesUplinksLossAndLatency(req);

            if (res.getOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationInventoryDevice

Return a single device from the inventory of an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDeviceRequest;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryDeviceRequest req = new GetOrganizationInventoryDeviceRequest("cumque", "quibusdam");            

            GetOrganizationInventoryDeviceResponse res = sdk.devices.getOrganizationInventoryDevice(req);

            if (res.getOrganizationInventoryDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationInventoryDevices

Return the device inventory for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDevicesProductTypesEnum;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDevicesRequest;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDevicesResponse;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDevicesTagsFilterTypeEnum;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDevicesUsedStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryDevicesRequest req = new GetOrganizationInventoryDevicesRequest("adipisci") {{
                endingBefore = "dicta";
                macs = new String[]{{
                    add("provident"),
                    add("fuga"),
                }};
                models = new String[]{{
                    add("molestias"),
                }};
                networkIds = new String[]{{
                    add("qui"),
                    add("quis"),
                    add("sed"),
                    add("perferendis"),
                }};
                orderNumbers = new String[]{{
                    add("blanditiis"),
                    add("similique"),
                }};
                perPage = 121862L;
                productTypes = new org.openapis.openapi.models.operations.GetOrganizationInventoryDevicesProductTypesEnum[]{{
                    add(GetOrganizationInventoryDevicesProductTypesEnum.SWITCH_),
                    add(GetOrganizationInventoryDevicesProductTypesEnum.CELLULAR_GATEWAY),
                    add(GetOrganizationInventoryDevicesProductTypesEnum.SYSTEMS_MANAGER),
                }};
                search = "consequatur";
                serials = new String[]{{
                    add("fuga"),
                    add("officiis"),
                    add("repellendus"),
                    add("quaerat"),
                }};
                startingAfter = "quidem";
                tags = new String[]{{
                    add("placeat"),
                    add("voluptatibus"),
                }};
                tagsFilterType = GetOrganizationInventoryDevicesTagsFilterTypeEnum.WITH_ALL_TAGS;
                usedState = GetOrganizationInventoryDevicesUsedStateEnum.UNUSED;
            }};            

            GetOrganizationInventoryDevicesResponse res = sdk.devices.getOrganizationInventoryDevices(req);

            if (res.getOrganizationInventoryDevices200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopDevicesByUsage

Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopDevicesByUsageRequest req = new GetOrganizationSummaryTopDevicesByUsageRequest("ex") {{
                t0 = "accusamus";
                t1 = "recusandae";
                timespan = 5961.5;
            }};            

            GetOrganizationSummaryTopDevicesByUsageResponse res = sdk.devices.getOrganizationSummaryTopDevicesByUsage(req);

            if (res.getOrganizationSummaryTopDevicesByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopDevicesModelsByUsage

Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesModelsByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopDevicesModelsByUsageRequest req = new GetOrganizationSummaryTopDevicesModelsByUsageRequest("quia") {{
                t0 = "molestiae";
                t1 = "ullam";
                timespan = 4854.26;
            }};            

            GetOrganizationSummaryTopDevicesModelsByUsageResponse res = sdk.devices.getOrganizationSummaryTopDevicesModelsByUsage(req);

            if (res.getOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationWirelessDevicesEthernetStatuses

Endpoint to see power status for wireless devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationWirelessDevicesEthernetStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationWirelessDevicesEthernetStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationWirelessDevicesEthernetStatusesRequest req = new GetOrganizationWirelessDevicesEthernetStatusesRequest("soluta") {{
                endingBefore = "nulla";
                networkIds = new String[]{{
                    add("doloremque"),
                    add("pariatur"),
                }};
                perPage = 639370L;
                startingAfter = "est";
            }};            

            GetOrganizationWirelessDevicesEthernetStatusesResponse res = sdk.devices.getOrganizationWirelessDevicesEthernetStatuses(req);

            if (res.getOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lockNetworkSmDevices

Lock a set of devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LockNetworkSmDevicesRequest;
import org.openapis.openapi.models.operations.LockNetworkSmDevicesRequestBody;
import org.openapis.openapi.models.operations.LockNetworkSmDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            LockNetworkSmDevicesRequest req = new LockNetworkSmDevicesRequest("itaque") {{
                requestBody = new LockNetworkSmDevicesRequestBody() {{
                    ids = new String[]{{
                        add("eius"),
                    }};
                    pin = 600654L;
                    scope = new String[]{{
                        add("pariatur"),
                        add("dicta"),
                        add("quod"),
                        add("quod"),
                    }};
                    serials = new String[]{{
                        add("illum"),
                        add("ipsum"),
                        add("ea"),
                        add("magni"),
                    }};
                    wifiMacs = new String[]{{
                        add("quidem"),
                        add("reiciendis"),
                        add("sint"),
                    }};
                }};;
            }};            

            LockNetworkSmDevicesResponse res = sdk.devices.lockNetworkSmDevices(req);

            if (res.lockNetworkSmDevices200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyNetworkSmDevicesTags

Add, delete, or update the tags of a set of devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyNetworkSmDevicesTagsRequest;
import org.openapis.openapi.models.operations.ModifyNetworkSmDevicesTagsRequestBody;
import org.openapis.openapi.models.operations.ModifyNetworkSmDevicesTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyNetworkSmDevicesTagsRequest req = new ModifyNetworkSmDevicesTagsRequest(                new ModifyNetworkSmDevicesTagsRequestBody(                new String[]{{
                                                add("natus"),
                                            }}, "alias") {{
                                ids = new String[]{{
                                    add("illo"),
                                }};
                                scope = new String[]{{
                                    add("a"),
                                    add("odit"),
                                }};
                                serials = new String[]{{
                                    add("deleniti"),
                                    add("excepturi"),
                                }};
                                wifiMacs = new String[]{{
                                    add("optio"),
                                    add("asperiores"),
                                    add("numquam"),
                                }};
                            }};, "delectus");            

            ModifyNetworkSmDevicesTagsResponse res = sdk.devices.modifyNetworkSmDevicesTags(req);

            if (res.modifyNetworkSmDevicesTags200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## moveNetworkSmDevices

Move a set of devices to a new network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MoveNetworkSmDevicesRequest;
import org.openapis.openapi.models.operations.MoveNetworkSmDevicesRequestBody;
import org.openapis.openapi.models.operations.MoveNetworkSmDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MoveNetworkSmDevicesRequest req = new MoveNetworkSmDevicesRequest(                new MoveNetworkSmDevicesRequestBody("accusamus") {{
                                ids = new String[]{{
                                    add("excepturi"),
                                    add("expedita"),
                                    add("officiis"),
                                }};
                                scope = new String[]{{
                                    add("ullam"),
                                    add("aperiam"),
                                    add("nesciunt"),
                                    add("beatae"),
                                }};
                                serials = new String[]{{
                                    add("laborum"),
                                    add("voluptatum"),
                                    add("vitae"),
                                }};
                                wifiMacs = new String[]{{
                                    add("expedita"),
                                    add("consequatur"),
                                    add("beatae"),
                                    add("fugiat"),
                                }};
                            }};, "eos");            

            MoveNetworkSmDevicesResponse res = sdk.devices.moveNetworkSmDevices(req);

            if (res.moveNetworkSmDevices200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rebootDevice

Reboot a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RebootDeviceRequest;
import org.openapis.openapi.models.operations.RebootDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RebootDeviceRequest req = new RebootDeviceRequest("iusto");            

            RebootDeviceResponse res = sdk.devices.rebootDevice(req);

            if (res.rebootDevice202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## refreshNetworkSmDeviceDetails

Refresh the details of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RefreshNetworkSmDeviceDetailsRequest;
import org.openapis.openapi.models.operations.RefreshNetworkSmDeviceDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RefreshNetworkSmDeviceDetailsRequest req = new RefreshNetworkSmDeviceDetailsRequest("odio", "soluta");            

            RefreshNetworkSmDeviceDetailsResponse res = sdk.devices.refreshNetworkSmDeviceDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeNetworkDevices

Remove a single device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveNetworkDevicesRequest;
import org.openapis.openapi.models.operations.RemoveNetworkDevicesRequestBody;
import org.openapis.openapi.models.operations.RemoveNetworkDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveNetworkDevicesRequest req = new RemoveNetworkDevicesRequest(                new RemoveNetworkDevicesRequestBody("nemo");, "suscipit");            

            RemoveNetworkDevicesResponse res = sdk.devices.removeNetworkDevices(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unenrollNetworkSmDevice

Unenroll a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnenrollNetworkSmDeviceRequest;
import org.openapis.openapi.models.operations.UnenrollNetworkSmDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnenrollNetworkSmDeviceRequest req = new UnenrollNetworkSmDeviceRequest("quas", "ipsam");            

            UnenrollNetworkSmDeviceResponse res = sdk.devices.unenrollNetworkSmDevice(req);

            if (res.unenrollNetworkSmDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDevice

Update the attributes of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceRequest;
import org.openapis.openapi.models.operations.UpdateDeviceRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceRequest req = new UpdateDeviceRequest("repudiandae") {{
                requestBody = new UpdateDeviceRequestBody() {{
                    address = "0558 Ondricka Drive";
                    floorPlanId = "magni";
                    lat = 4281.47;
                    lng = 2095.89;
                    moveMapMarker = false;
                    name = "Teresa Osinski";
                    notes = "quod";
                    switchProfileId = "impedit";
                    tags = new String[]{{
                        add("nisi"),
                        add("nisi"),
                        add("ratione"),
                    }};
                }};;
            }};            

            UpdateDeviceResponse res = sdk.devices.updateDevice(req);

            if (res.updateDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCellularSims

Updates the SIM and APN configurations for a cellular device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimFailover;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySims;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApns;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsSlotEnum;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCellularSimsRequest req = new UpdateDeviceCellularSimsRequest("dolore") {{
                requestBody = new UpdateDeviceCellularSimsRequestBody() {{
                    simFailover = new UpdateDeviceCellularSimsRequestBodySimFailover() {{
                        enabled = false;
                    }};;
                    sims = new org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySims[]{{
                        add(new UpdateDeviceCellularSimsRequestBodySims() {{
                            apns = new org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApns[]{{
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("harum"),
                                                }}, "dolor") {{
                                    allowedIpTypes = new String[]{{
                                        add("iste"),
                                        add("corporis"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "minus";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.CHAP;
                                        username = "Milo69";
                                    }};
                                    name = "Bobby Buckridge";
                                }}),
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("vel"),
                                                    add("quisquam"),
                                                    add("iure"),
                                                }}, "nesciunt") {{
                                    allowedIpTypes = new String[]{{
                                        add("porro"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "temporibus";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.NONE;
                                        username = "Marie_Heller48";
                                    }};
                                    name = "Geneva Bauch";
                                }}),
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("distinctio"),
                                                }}, "rem") {{
                                    allowedIpTypes = new String[]{{
                                        add("vero"),
                                        add("voluptate"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "aliquam";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.PAP;
                                        username = "Cale.Leannon";
                                    }};
                                    name = "Carl Greenfelder";
                                }}),
                            }};
                            isPrimary = false;
                            slot = UpdateDeviceCellularSimsRequestBodySimsSlotEnum.SIM1;
                        }}),
                        add(new UpdateDeviceCellularSimsRequestBodySims() {{
                            apns = new org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApns[]{{
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("dicta"),
                                                    add("sunt"),
                                                }}, "velit") {{
                                    allowedIpTypes = new String[]{{
                                        add("perspiciatis"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "praesentium";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.NONE;
                                        username = "Easton51";
                                    }};
                                    name = "Kristin Renner V";
                                }}),
                            }};
                            isPrimary = false;
                            slot = UpdateDeviceCellularSimsRequestBodySimsSlotEnum.SIM2;
                        }}),
                        add(new UpdateDeviceCellularSimsRequestBodySims() {{
                            apns = new org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApns[]{{
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("temporibus"),
                                                    add("sint"),
                                                    add("dolores"),
                                                    add("odio"),
                                                }}, "dolorum") {{
                                    allowedIpTypes = new String[]{{
                                        add("aut"),
                                        add("ex"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "inventore";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.CHAP;
                                        username = "Karley.Cormier59";
                                    }};
                                    name = "Florence Schroeder";
                                }}),
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("rem"),
                                                    add("dolore"),
                                                }}, "voluptatibus") {{
                                    allowedIpTypes = new String[]{{
                                        add("soluta"),
                                        add("officia"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "nostrum";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.NONE;
                                        username = "Bethany_Blick52";
                                    }};
                                    name = "Jackie Bashirian";
                                }}),
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("nam"),
                                                }}, "velit") {{
                                    allowedIpTypes = new String[]{{
                                        add("architecto"),
                                        add("tempora"),
                                        add("eum"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "incidunt";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.NONE;
                                        username = "Cordie71";
                                    }};
                                    name = "Derek Prohaska";
                                }}),
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("occaecati"),
                                                }}, "voluptates") {{
                                    allowedIpTypes = new String[]{{
                                        add("dolorem"),
                                        add("quam"),
                                        add("beatae"),
                                        add("odio"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "dolores";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.NONE;
                                        username = "Irwin.Gleichner44";
                                    }};
                                    name = "Rachael Kutch";
                                }}),
                            }};
                            isPrimary = false;
                            slot = UpdateDeviceCellularSimsRequestBodySimsSlotEnum.SIM2;
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceCellularSimsResponse res = sdk.devices.updateDeviceCellularSims(req);

            if (res.updateDeviceCellularSims200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceManagementInterface

Update the management interface settings for a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceRequest;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceRequestBodyWan1;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceRequestBodyWan2;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum;
import org.openapis.openapi.models.operations.UpdateDeviceManagementInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceManagementInterfaceRequest req = new UpdateDeviceManagementInterfaceRequest("harum") {{
                requestBody = new UpdateDeviceManagementInterfaceRequestBody() {{
                    wan1 = new UpdateDeviceManagementInterfaceRequestBodyWan1() {{
                        staticDns = new String[]{{
                            add("fugit"),
                            add("placeat"),
                            add("officia"),
                            add("illum"),
                        }};
                        staticGatewayIp = "alias";
                        staticIp = "aperiam";
                        staticSubnetMask = "nisi";
                        usingStaticIp = false;
                        vlan = 842789L;
                        wanEnabled = UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum.ENABLED;
                    }};;
                    wan2 = new UpdateDeviceManagementInterfaceRequestBodyWan2() {{
                        staticDns = new String[]{{
                            add("minus"),
                            add("iure"),
                        }};
                        staticGatewayIp = "accusamus";
                        staticIp = "soluta";
                        staticSubnetMask = "distinctio";
                        usingStaticIp = false;
                        vlan = 720123L;
                        wanEnabled = UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum.NOT_CONFIGURED;
                    }};;
                }};;
            }};            

            UpdateDeviceManagementInterfaceResponse res = sdk.devices.updateDeviceManagementInterface(req);

            if (res.updateDeviceManagementInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSmDevicesFields

Modify the fields of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSmDevicesFieldsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSmDevicesFieldsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields;
import org.openapis.openapi.models.operations.UpdateNetworkSmDevicesFieldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSmDevicesFieldsRequest req = new UpdateNetworkSmDevicesFieldsRequest(                new UpdateNetworkSmDevicesFieldsRequestBody(                new UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields() {{
                                                name = "Eduardo Kuhic";
                                                notes = "eligendi";
                                            }};) {{
                                id = "5b645a4a-f2fc-4abc-8bca-32925eb06a6c";
                                serial = "est";
                                wifiMac = "distinctio";
                            }};, "officiis");            

            UpdateNetworkSmDevicesFieldsResponse res = sdk.devices.updateNetworkSmDevicesFields(req);

            if (res.updateNetworkSmDevicesFields200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmxNetworkDevicesClaim

Claim a vMX into a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmxNetworkDevicesClaimRequest;
import org.openapis.openapi.models.operations.VmxNetworkDevicesClaimRequestBody;
import org.openapis.openapi.models.operations.VmxNetworkDevicesClaimRequestBodySizeEnum;
import org.openapis.openapi.models.operations.VmxNetworkDevicesClaimResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            VmxNetworkDevicesClaimRequest req = new VmxNetworkDevicesClaimRequest(                new VmxNetworkDevicesClaimRequestBody(VmxNetworkDevicesClaimRequestBodySizeEnum.ONE_HUNDRED);, "officia");            

            VmxNetworkDevicesClaimResponse res = sdk.devices.vmxNetworkDevicesClaim(req);

            if (res.vmxNetworkDevicesClaim200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## wipeNetworkSmDevices

Wipe a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WipeNetworkSmDevicesRequest;
import org.openapis.openapi.models.operations.WipeNetworkSmDevicesRequestBody;
import org.openapis.openapi.models.operations.WipeNetworkSmDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            WipeNetworkSmDevicesRequest req = new WipeNetworkSmDevicesRequest("sunt") {{
                requestBody = new WipeNetworkSmDevicesRequestBody() {{
                    id = "f77a75d8-ff44-452b-ad74-70fc48c282b8";
                    pin = 470644L;
                    serial = "beatae";
                    wifiMac = "suscipit";
                }};;
            }};            

            WipeNetworkSmDevicesResponse res = sdk.devices.wipeNetworkSmDevices(req);

            if (res.wipeNetworkSmDevices200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
