# devices

### Available Operations

* [claimNetworkDevices](#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)
* [cycleDeviceSwitchPorts](#cycledeviceswitchports) - Cycle a set of switch ports
* [getNetworkDevice](#getnetworkdevice) - Return a single device
* [getNetworkDeviceLossAndLatencyHistory](#getnetworkdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds for a wired network device.
* [getNetworkDevicePerformance](#getnetworkdeviceperformance) - Return the performance score for a single MX
* [getNetworkDeviceUplink](#getnetworkdeviceuplink) - Return the uplink information for a device.
* [getNetworkDevices](#getnetworkdevices) - List the devices in a network
* [getOrganizationDevices](#getorganizationdevices) - List the devices in an organization
* [rebootNetworkDevice](#rebootnetworkdevice) - Reboot a device
* [removeNetworkDevice](#removenetworkdevice) - Remove a single device
* [updateNetworkDevice](#updatenetworkdevice) - Update the attributes of a device

## claimNetworkDevices

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)

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
                .setSecurity(new Security("dolor") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClaimNetworkDevicesRequest req = new ClaimNetworkDevicesRequest("maiores") {{
                requestBody = new ClaimNetworkDevicesRequestBody() {{
                    serial = "quasi";
                    serials = new String[]{{
                        add("nulla"),
                        add("excepturi"),
                    }};
                }};;
            }};            

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

## cycleDeviceSwitchPorts

Cycle a set of switch ports

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CycleDeviceSwitchPortsRequest;
import org.openapis.openapi.models.operations.CycleDeviceSwitchPortsRequestBody;
import org.openapis.openapi.models.operations.CycleDeviceSwitchPortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CycleDeviceSwitchPortsRequest req = new CycleDeviceSwitchPortsRequest(                new CycleDeviceSwitchPortsRequestBody(                new String[]{{
                                                add("sapiente"),
                                                add("quisquam"),
                                            }});, "saepe");            

            CycleDeviceSwitchPortsResponse res = sdk.devices.cycleDeviceSwitchPorts(req);

            if (res.cycleDeviceSwitchPorts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkDevice

Return a single device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkDeviceRequest;
import org.openapis.openapi.models.operations.GetNetworkDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkDeviceRequest req = new GetNetworkDeviceRequest("impedit", "corporis");            

            GetNetworkDeviceResponse res = sdk.devices.getNetworkDevice(req);

            if (res.getNetworkDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds for a wired network device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkDeviceLossAndLatencyHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkDeviceLossAndLatencyHistoryResponse;
import org.openapis.openapi.models.operations.GetNetworkDeviceLossAndLatencyHistoryUplinkEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkDeviceLossAndLatencyHistoryRequest req = new GetNetworkDeviceLossAndLatencyHistoryRequest("aliquid", "inventore", "magnam") {{
                resolution = 407241L;
                t0 = "quo";
                t1 = "consectetur";
                timespan = 9262.13;
                uplink = GetNetworkDeviceLossAndLatencyHistoryUplinkEnum.CELLULAR;
            }};            

            GetNetworkDeviceLossAndLatencyHistoryResponse res = sdk.devices.getNetworkDeviceLossAndLatencyHistory(req);

            if (res.getNetworkDeviceLossAndLatencyHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkDevicePerformance

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkDevicePerformanceRequest;
import org.openapis.openapi.models.operations.GetNetworkDevicePerformanceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkDevicePerformanceRequest req = new GetNetworkDevicePerformanceRequest("eaque", "a");            

            GetNetworkDevicePerformanceResponse res = sdk.devices.getNetworkDevicePerformance(req);

            if (res.getNetworkDevicePerformance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkDeviceUplink

Return the uplink information for a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkDeviceUplinkRequest;
import org.openapis.openapi.models.operations.GetNetworkDeviceUplinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkDeviceUplinkRequest req = new GetNetworkDeviceUplinkRequest("aut", "aut");            

            GetNetworkDeviceUplinkResponse res = sdk.devices.getNetworkDeviceUplink(req);

            if (res.getNetworkDeviceUplink200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkDevicesRequest req = new GetNetworkDevicesRequest("impedit");            

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

## getOrganizationDevices

List the devices in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesRequest req = new GetOrganizationDevicesRequest("fugit") {{
                configurationUpdatedAfter = "accusamus";
                endingBefore = "inventore";
                perPage = 250622L;
                startingAfter = "et";
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

## rebootNetworkDevice

Reboot a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RebootNetworkDeviceRequest;
import org.openapis.openapi.models.operations.RebootNetworkDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RebootNetworkDeviceRequest req = new RebootNetworkDeviceRequest("laborum", "placeat");            

            RebootNetworkDeviceResponse res = sdk.devices.rebootNetworkDevice(req);

            if (res.rebootNetworkDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeNetworkDevice

Remove a single device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveNetworkDeviceRequest;
import org.openapis.openapi.models.operations.RemoveNetworkDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveNetworkDeviceRequest req = new RemoveNetworkDeviceRequest("eum", "autem");            

            RemoveNetworkDeviceResponse res = sdk.devices.removeNetworkDevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkDevice

Update the attributes of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkDeviceRequest;
import org.openapis.openapi.models.operations.UpdateNetworkDeviceRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkDeviceRequest req = new UpdateNetworkDeviceRequest("quas", "assumenda") {{
                requestBody = new UpdateNetworkDeviceRequestBody() {{
                    address = "370 Derrick Courts";
                    floorPlanId = "provident";
                    lat = 553.74;
                    lng = 4764.77;
                    moveMapMarker = false;
                    name = "Viola Gibson";
                    notes = "rem";
                    switchProfileId = "fuga";
                    tags = "reprehenderit";
                }};;
            }};            

            UpdateNetworkDeviceResponse res = sdk.devices.updateNetworkDevice(req);

            if (res.updateNetworkDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
