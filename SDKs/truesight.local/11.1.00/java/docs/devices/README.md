# devices

## Overview

API operations to interact with the monitored Devices.

### Available Operations

* [getAgentDevices](#getagentdevices) - Gets a list of all the devices monitored by an Agent.
* [getDevice](#getdevice) - Gets detailed information about a specific device.
* [getDeviceAgent](#getdeviceagent) - Gets detailed information about an Agent.
* [getDeviceEnergyUsage](#getdeviceenergyusage) - Gets the energy usage for a specific device and a given period.
* [getDeviceMonitors](#getdevicemonitors) - Gets the Monitors for a specific device.
* [getDeviceParameterHistory](#getdeviceparameterhistory) - Gets data history for a parameter of a specific device over a given period.
* [getDevices](#getdevices) - Gets summarized information about all monitored devices.
* [getDevicesSummary](#getdevicessummary) - Gets overall information for all devices.
* [getHeatingMarginCoverage](#getheatingmargincoverage) - Gets the heating margin values for each monitored device, when available.
* [searchDevices](#searchdevices) - Searches devices by name, model, manufacturer or serial number.

## getAgentDevices

You need to provide the <b>Device ID</b> of a device to retrieve any other devices monitored by the same Agent:<br>-use the <b>hardware/devices</b> service to get all available device IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAgentDevicesRequest;
import org.openapis.openapi.models.operations.GetAgentDevicesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAgentDevicesRequest req = new GetAgentDevicesRequest(925597);            

            GetAgentDevicesResponse res = sdk.devices.getAgentDevices(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevice

You need to provide a <b>Device ID</b>:<br>-use the <b>hardware/devices</b> service to get all available device IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceRequest;
import org.openapis.openapi.models.operations.GetDeviceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeviceRequest req = new GetDeviceRequest(836079);            

            GetDeviceResponse res = sdk.devices.getDevice(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceAgent

You need to provide a <b>Device ID</b> to retrieve detailed information about the Agent that Monitors the device:<br>-use the <b>hardware/devices</b> service to get all available device IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceAgentRequest;
import org.openapis.openapi.models.operations.GetDeviceAgentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeviceAgentRequest req = new GetDeviceAgentRequest(71036);            

            GetDeviceAgentResponse res = sdk.devices.getDeviceAgent(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceEnergyUsage

You need to provide the device ID:<br>- use the <b>hardware/devices</b> service to get all available device IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceEnergyUsageBasisEnum;
import org.openapis.openapi.models.operations.GetDeviceEnergyUsageRequest;
import org.openapis.openapi.models.operations.GetDeviceEnergyUsageResponse;
import org.openapis.openapi.models.operations.GetDeviceEnergyUsageRollPeriodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeviceEnergyUsageRequest req = new GetDeviceEnergyUsageRequest(337396) {{
                basis = GetDeviceEnergyUsageBasisEnum.MONTHLY;
                rollPeriod = GetDeviceEnergyUsageRollPeriodEnum.SIX_MONTHS;
            }};            

            GetDeviceEnergyUsageResponse res = sdk.devices.getDeviceEnergyUsage(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceMonitors

You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceMonitorsRequest;
import org.openapis.openapi.models.operations.GetDeviceMonitorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeviceMonitorsRequest req = new GetDeviceMonitorsRequest(20218);            

            GetDeviceMonitorsResponse res = sdk.devices.getDeviceMonitors(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceParameterHistory

You need to provide the <b>Device ID</b>, <b>Parameter Name</b>, <b>Monitor Type</b> and <b>Monitor SID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs<br>- use the <b>/hardware/device-monitors/{deviceId}</b> to get the parameter name, the Monitor type and the Monitor SID.<br><br>Finally, define the period for which you wish to retrieve data history.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceParameterHistoryRequest;
import org.openapis.openapi.models.operations.GetDeviceParameterHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeviceParameterHistoryRequest req = new GetDeviceParameterHistoryRequest(368241, "repellendus", "sapiente") {{
                from = 778157L;
                monitorSid = "odit";
                to = 870013L;
            }};            

            GetDeviceParameterHistoryResponse res = sdk.devices.getDeviceParameterHistory(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevices

Lists the available DeviceSummary instances.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDevicesDirectionEnum;
import org.openapis.openapi.models.operations.GetDevicesRequest;
import org.openapis.openapi.models.operations.GetDevicesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDevicesRequest req = new GetDevicesRequest() {{
                applicationId = "at";
                direction = GetDevicesDirectionEnum.DESC;
                groupId = "molestiae";
                limit = 799159;
                page = "quod";
                serviceId = "esse";
                sort = "totam";
            }};            

            GetDevicesResponse res = sdk.devices.getDevices(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevicesSummary

Lists the GlobalSummary instance for all the monitored devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDevicesSummaryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDevicesSummaryResponse res = sdk.devices.getDevicesSummary();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHeatingMarginCoverage

If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHeatingMarginCoverageDirectionEnum;
import org.openapis.openapi.models.operations.GetHeatingMarginCoverageRequest;
import org.openapis.openapi.models.operations.GetHeatingMarginCoverageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHeatingMarginCoverageRequest req = new GetHeatingMarginCoverageRequest() {{
                applicationId = "porro";
                covered = false;
                direction = GetHeatingMarginCoverageDirectionEnum.DESC;
                groupId = "dicta";
                limit = 720633;
                page = "officia";
                serviceId = "occaecati";
                sort = "fugit";
            }};            

            GetHeatingMarginCoverageResponse res = sdk.devices.getHeatingMarginCoverage(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchDevices

Gets the DeviceSummary instances whose name, model, manufacturer or serial number match the specified criteria.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchDevicesRequest;
import org.openapis.openapi.models.operations.SearchDevicesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchDevicesRequest req = new SearchDevicesRequest("deleniti") {{
                applicationId = "hic";
                groupId = "optio";
                limit = 521848;
                page = "beatae";
                serviceId = "commodi";
            }};            

            SearchDevicesResponse res = sdk.devices.searchDevices(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
