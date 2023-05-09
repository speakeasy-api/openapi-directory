# sm

### Available Operations

* [checkinNetworkSmDevices](#checkinnetworksmdevices) - Force check-in a set of devices
* [createNetworkSmBypassActivationLockAttempt](#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [createNetworkSmTargetGroup](#createnetworksmtargetgroup) - Add a target group
* [deleteNetworkSmTargetGroup](#deletenetworksmtargetgroup) - Delete a target group from a network
* [deleteNetworkSmUserAccessDevice](#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [getNetworkSmBypassActivationLockAttempt](#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
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
* [getNetworkSmProfiles](#getnetworksmprofiles) - List all profiles in a network
* [getNetworkSmTargetGroup](#getnetworksmtargetgroup) - Return a target group
* [getNetworkSmTargetGroups](#getnetworksmtargetgroups) - List the target groups in this network
* [getNetworkSmTrustedAccessConfigs](#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs
* [getNetworkSmUserAccessDevices](#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections
* [getNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [getNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [getNetworkSmUsers](#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [getOrganizationSmApnsCert](#getorganizationsmapnscert) - Get the organization's APNS certificate
* [getOrganizationSmVppAccount](#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [getOrganizationSmVppAccounts](#getorganizationsmvppaccounts) - List the VPP accounts in the organization
* [lockNetworkSmDevices](#locknetworksmdevices) - Lock a set of devices
* [modifyNetworkSmDevicesTags](#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [moveNetworkSmDevices](#movenetworksmdevices) - Move a set of devices to a new network
* [refreshNetworkSmDeviceDetails](#refreshnetworksmdevicedetails) - Refresh the details of a device
* [unenrollNetworkSmDevice](#unenrollnetworksmdevice) - Unenroll a device
* [updateNetworkSmDevicesFields](#updatenetworksmdevicesfields) - Modify the fields of a device
* [updateNetworkSmTargetGroup](#updatenetworksmtargetgroup) - Update a target group
* [wipeNetworkSmDevices](#wipenetworksmdevices) - Wipe a device

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
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CheckinNetworkSmDevicesRequest req = new CheckinNetworkSmDevicesRequest("officiis") {{
                requestBody = new CheckinNetworkSmDevicesRequestBody() {{
                    ids = new String[]{{
                        add("excepturi"),
                        add("fugiat"),
                        add("animi"),
                        add("placeat"),
                    }};
                    scope = new String[]{{
                        add("et"),
                        add("recusandae"),
                    }};
                    serials = new String[]{{
                        add("similique"),
                    }};
                    wifiMacs = new String[]{{
                        add("sit"),
                        add("voluptatem"),
                        add("magni"),
                        add("et"),
                    }};
                }};;
            }};            

            CheckinNetworkSmDevicesResponse res = sdk.sm.checkinNetworkSmDevices(req);

            if (res.checkinNetworkSmDevices200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSmBypassActivationLockAttemptRequest;
import org.openapis.openapi.models.operations.CreateNetworkSmBypassActivationLockAttemptRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSmBypassActivationLockAttemptResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSmBypassActivationLockAttemptRequest req = new CreateNetworkSmBypassActivationLockAttemptRequest(                new CreateNetworkSmBypassActivationLockAttemptRequestBody(                new String[]{{
                                                add("et"),
                                            }});, "unde");            

            CreateNetworkSmBypassActivationLockAttemptResponse res = sdk.sm.createNetworkSmBypassActivationLockAttempt(req);

            if (res.createNetworkSmBypassActivationLockAttempt201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSmTargetGroup

Add a target group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSmTargetGroupRequest;
import org.openapis.openapi.models.operations.CreateNetworkSmTargetGroupRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSmTargetGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSmTargetGroupRequest req = new CreateNetworkSmTargetGroupRequest("culpa") {{
                requestBody = new CreateNetworkSmTargetGroupRequestBody() {{
                    name = "Tracey Marvin";
                    scope = "asperiores";
                }};;
            }};            

            CreateNetworkSmTargetGroupResponse res = sdk.sm.createNetworkSmTargetGroup(req);

            if (res.createNetworkSmTargetGroup201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSmTargetGroup

Delete a target group from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSmTargetGroupRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSmTargetGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSmTargetGroupRequest req = new DeleteNetworkSmTargetGroupRequest("illo", "impedit");            

            DeleteNetworkSmTargetGroupResponse res = sdk.sm.deleteNetworkSmTargetGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSmUserAccessDevice

Delete a User Access Device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSmUserAccessDeviceRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSmUserAccessDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSmUserAccessDeviceRequest req = new DeleteNetworkSmUserAccessDeviceRequest("unde", "nihil");            

            DeleteNetworkSmUserAccessDeviceResponse res = sdk.sm.deleteNetworkSmUserAccessDevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmBypassActivationLockAttemptRequest;
import org.openapis.openapi.models.operations.GetNetworkSmBypassActivationLockAttemptResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmBypassActivationLockAttemptRequest req = new GetNetworkSmBypassActivationLockAttemptRequest("ullam", "eius");            

            GetNetworkSmBypassActivationLockAttemptResponse res = sdk.sm.getNetworkSmBypassActivationLockAttempt(req);

            if (res.getNetworkSmBypassActivationLockAttempt200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("iusto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceCellularUsageHistoryRequest req = new GetNetworkSmDeviceCellularUsageHistoryRequest("maxime", "deserunt");            

            GetNetworkSmDeviceCellularUsageHistoryResponse res = sdk.sm.getNetworkSmDeviceCellularUsageHistory(req);

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
                .setSecurity(new Security("explicabo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceCertsRequest req = new GetNetworkSmDeviceCertsRequest("soluta", "quo");            

            GetNetworkSmDeviceCertsResponse res = sdk.sm.getNetworkSmDeviceCerts(req);

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
                .setSecurity(new Security("ratione") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceConnectivityRequest req = new GetNetworkSmDeviceConnectivityRequest("repellendus", "accusamus") {{
                endingBefore = "ipsum";
                perPage = 830728L;
                startingAfter = "voluptatibus";
            }};            

            GetNetworkSmDeviceConnectivityResponse res = sdk.sm.getNetworkSmDeviceConnectivity(req);

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
                .setSecurity(new Security("sunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceDesktopLogsRequest req = new GetNetworkSmDeviceDesktopLogsRequest("sed", "quidem") {{
                endingBefore = "rerum";
                perPage = 695990L;
                startingAfter = "facilis";
            }};            

            GetNetworkSmDeviceDesktopLogsResponse res = sdk.sm.getNetworkSmDeviceDesktopLogs(req);

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
                .setSecurity(new Security("dolores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceDeviceCommandLogsRequest req = new GetNetworkSmDeviceDeviceCommandLogsRequest("doloribus", "corporis") {{
                endingBefore = "odit";
                perPage = 974666L;
                startingAfter = "laborum";
            }};            

            GetNetworkSmDeviceDeviceCommandLogsResponse res = sdk.sm.getNetworkSmDeviceDeviceCommandLogs(req);

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
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceDeviceProfilesRequest req = new GetNetworkSmDeviceDeviceProfilesRequest("nostrum", "minima");            

            GetNetworkSmDeviceDeviceProfilesResponse res = sdk.sm.getNetworkSmDeviceDeviceProfiles(req);

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
                .setSecurity(new Security("numquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceNetworkAdaptersRequest req = new GetNetworkSmDeviceNetworkAdaptersRequest("labore", "earum");            

            GetNetworkSmDeviceNetworkAdaptersResponse res = sdk.sm.getNetworkSmDeviceNetworkAdapters(req);

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
                .setSecurity(new Security("eveniet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDevicePerformanceHistoryRequest req = new GetNetworkSmDevicePerformanceHistoryRequest("perferendis", "deserunt") {{
                endingBefore = "debitis";
                perPage = 870720L;
                startingAfter = "nostrum";
            }};            

            GetNetworkSmDevicePerformanceHistoryResponse res = sdk.sm.getNetworkSmDevicePerformanceHistory(req);

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
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceRestrictionsRequest req = new GetNetworkSmDeviceRestrictionsRequest("praesentium", "quas");            

            GetNetworkSmDeviceRestrictionsResponse res = sdk.sm.getNetworkSmDeviceRestrictions(req);

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
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceSecurityCentersRequest req = new GetNetworkSmDeviceSecurityCentersRequest("minus", "possimus");            

            GetNetworkSmDeviceSecurityCentersResponse res = sdk.sm.getNetworkSmDeviceSecurityCenters(req);

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

            GetNetworkSmDeviceSoftwaresRequest req = new GetNetworkSmDeviceSoftwaresRequest("laudantium", "dolorum");            

            GetNetworkSmDeviceSoftwaresResponse res = sdk.sm.getNetworkSmDeviceSoftwares(req);

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
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceWlanListsRequest req = new GetNetworkSmDeviceWlanListsRequest("autem", "illo");            

            GetNetworkSmDeviceWlanListsResponse res = sdk.sm.getNetworkSmDeviceWlanLists(req);

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
                .setSecurity(new Security("similique") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDevicesRequest req = new GetNetworkSmDevicesRequest("quod") {{
                endingBefore = "quod";
                fields = new String[]{{
                    add("expedita"),
                    add("nisi"),
                }};
                ids = new String[]{{
                    add("asperiores"),
                    add("dolorem"),
                    add("eos"),
                }};
                perPage = 928278L;
                scope = new String[]{{
                    add("accusantium"),
                }};
                serials = new String[]{{
                    add("provident"),
                    add("nulla"),
                }};
                startingAfter = "eaque";
                wifiMacs = new String[]{{
                    add("sit"),
                }};
            }};            

            GetNetworkSmDevicesResponse res = sdk.sm.getNetworkSmDevices(req);

            if (res.getNetworkSmDevices200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmProfiles

List all profiles in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkSmProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmProfilesRequest req = new GetNetworkSmProfilesRequest("aperiam");            

            GetNetworkSmProfilesResponse res = sdk.sm.getNetworkSmProfiles(req);

            if (res.getNetworkSmProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmTargetGroup

Return a target group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmTargetGroupRequest;
import org.openapis.openapi.models.operations.GetNetworkSmTargetGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmTargetGroupRequest req = new GetNetworkSmTargetGroupRequest("doloribus", "blanditiis") {{
                withDetails = false;
            }};            

            GetNetworkSmTargetGroupResponse res = sdk.sm.getNetworkSmTargetGroup(req);

            if (res.getNetworkSmTargetGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmTargetGroups

List the target groups in this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmTargetGroupsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmTargetGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmTargetGroupsRequest req = new GetNetworkSmTargetGroupsRequest("dolores") {{
                withDetails = false;
            }};            

            GetNetworkSmTargetGroupsResponse res = sdk.sm.getNetworkSmTargetGroups(req);

            if (res.getNetworkSmTargetGroups200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmTrustedAccessConfigs

List Trusted Access Configs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmTrustedAccessConfigsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmTrustedAccessConfigsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmTrustedAccessConfigsRequest req = new GetNetworkSmTrustedAccessConfigsRequest("veritatis") {{
                endingBefore = "repudiandae";
                perPage = 453783L;
                startingAfter = "ea";
            }};            

            GetNetworkSmTrustedAccessConfigsResponse res = sdk.sm.getNetworkSmTrustedAccessConfigs(req);

            if (res.getNetworkSmTrustedAccessConfigs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmUserAccessDevices

List User Access Devices and its Trusted Access Connections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmUserAccessDevicesRequest;
import org.openapis.openapi.models.operations.GetNetworkSmUserAccessDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUserAccessDevicesRequest req = new GetNetworkSmUserAccessDevicesRequest("praesentium") {{
                endingBefore = "possimus";
                perPage = 898460L;
                startingAfter = "sint";
            }};            

            GetNetworkSmUserAccessDevicesResponse res = sdk.sm.getNetworkSmUserAccessDevices(req);

            if (res.getNetworkSmUserAccessDevices200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmUserDeviceProfiles

Get the profiles associated with a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmUserDeviceProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkSmUserDeviceProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUserDeviceProfilesRequest req = new GetNetworkSmUserDeviceProfilesRequest("cupiditate", "molestiae");            

            GetNetworkSmUserDeviceProfilesResponse res = sdk.sm.getNetworkSmUserDeviceProfiles(req);

            if (res.getNetworkSmUserDeviceProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmUserSoftwares

Get a list of softwares associated with a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmUserSoftwaresRequest;
import org.openapis.openapi.models.operations.GetNetworkSmUserSoftwaresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUserSoftwaresRequest req = new GetNetworkSmUserSoftwaresRequest("commodi", "magnam");            

            GetNetworkSmUserSoftwaresResponse res = sdk.sm.getNetworkSmUserSoftwares(req);

            if (res.getNetworkSmUserSoftwares200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmUsers

List the owners in an SM network with various specified fields and filters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmUsersRequest;
import org.openapis.openapi.models.operations.GetNetworkSmUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUsersRequest req = new GetNetworkSmUsersRequest("magnam") {{
                emails = new String[]{{
                    add("aperiam"),
                    add("fuga"),
                }};
                ids = new String[]{{
                    add("voluptate"),
                    add("minus"),
                }};
                scope = new String[]{{
                    add("minus"),
                    add("architecto"),
                    add("soluta"),
                }};
                usernames = new String[]{{
                    add("officia"),
                }};
            }};            

            GetNetworkSmUsersResponse res = sdk.sm.getNetworkSmUsers(req);

            if (res.getNetworkSmUsers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSmApnsCert

Get the organization's APNS certificate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSmApnsCertRequest;
import org.openapis.openapi.models.operations.GetOrganizationSmApnsCertResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSmApnsCertRequest req = new GetOrganizationSmApnsCertRequest("vero");            

            GetOrganizationSmApnsCertResponse res = sdk.sm.getOrganizationSmApnsCert(req);

            if (res.getOrganizationSmApnsCert200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSmVppAccount

Get a hash containing the unparsed token of the VPP account with the given ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSmVppAccountRequest;
import org.openapis.openapi.models.operations.GetOrganizationSmVppAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSmVppAccountRequest req = new GetOrganizationSmVppAccountRequest("pariatur", "aperiam");            

            GetOrganizationSmVppAccountResponse res = sdk.sm.getOrganizationSmVppAccount(req);

            if (res.getOrganizationSmVppAccount200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSmVppAccounts

List the VPP accounts in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSmVppAccountsRequest;
import org.openapis.openapi.models.operations.GetOrganizationSmVppAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSmVppAccountsRequest req = new GetOrganizationSmVppAccountsRequest("molestiae");            

            GetOrganizationSmVppAccountsResponse res = sdk.sm.getOrganizationSmVppAccounts(req);

            if (res.getOrganizationSmVppAccounts200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("est") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            LockNetworkSmDevicesRequest req = new LockNetworkSmDevicesRequest("quaerat") {{
                requestBody = new LockNetworkSmDevicesRequestBody() {{
                    ids = new String[]{{
                        add("eveniet"),
                        add("cum"),
                        add("praesentium"),
                        add("recusandae"),
                    }};
                    pin = 969142L;
                    scope = new String[]{{
                        add("dolor"),
                        add("praesentium"),
                        add("deserunt"),
                        add("perspiciatis"),
                    }};
                    serials = new String[]{{
                        add("esse"),
                    }};
                    wifiMacs = new String[]{{
                        add("iure"),
                        add("nulla"),
                        add("et"),
                        add("eius"),
                    }};
                }};;
            }};            

            LockNetworkSmDevicesResponse res = sdk.sm.lockNetworkSmDevices(req);

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
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyNetworkSmDevicesTagsRequest req = new ModifyNetworkSmDevicesTagsRequest(                new ModifyNetworkSmDevicesTagsRequestBody(                new String[]{{
                                                add("in"),
                                                add("excepturi"),
                                                add("perspiciatis"),
                                            }}, "non") {{
                                ids = new String[]{{
                                    add("quis"),
                                }};
                                scope = new String[]{{
                                    add("omnis"),
                                    add("corporis"),
                                    add("ipsam"),
                                    add("numquam"),
                                }};
                                serials = new String[]{{
                                    add("ea"),
                                    add("ex"),
                                }};
                                wifiMacs = new String[]{{
                                    add("amet"),
                                    add("nostrum"),
                                }};
                            }};, "labore");            

            ModifyNetworkSmDevicesTagsResponse res = sdk.sm.modifyNetworkSmDevicesTags(req);

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
                .setSecurity(new Security("cumque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MoveNetworkSmDevicesRequest req = new MoveNetworkSmDevicesRequest(                new MoveNetworkSmDevicesRequestBody("repellat") {{
                                ids = new String[]{{
                                    add("placeat"),
                                    add("dolor"),
                                    add("sit"),
                                    add("aperiam"),
                                }};
                                scope = new String[]{{
                                    add("excepturi"),
                                    add("rerum"),
                                }};
                                serials = new String[]{{
                                    add("magni"),
                                    add("fugiat"),
                                    add("vitae"),
                                }};
                                wifiMacs = new String[]{{
                                    add("deserunt"),
                                    add("aut"),
                                    add("soluta"),
                                    add("eos"),
                                }};
                            }};, "consequuntur");            

            MoveNetworkSmDevicesResponse res = sdk.sm.moveNetworkSmDevices(req);

            if (res.moveNetworkSmDevices200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("minima") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RefreshNetworkSmDeviceDetailsRequest req = new RefreshNetworkSmDeviceDetailsRequest("maiores", "quaerat");            

            RefreshNetworkSmDeviceDetailsResponse res = sdk.sm.refreshNetworkSmDeviceDetails(req);

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
                .setSecurity(new Security("saepe") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnenrollNetworkSmDeviceRequest req = new UnenrollNetworkSmDeviceRequest("dignissimos", "blanditiis");            

            UnenrollNetworkSmDeviceResponse res = sdk.sm.unenrollNetworkSmDevice(req);

            if (res.unenrollNetworkSmDevice200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("odit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSmDevicesFieldsRequest req = new UpdateNetworkSmDevicesFieldsRequest(                new UpdateNetworkSmDevicesFieldsRequestBody(                new UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields() {{
                                                name = "Dallas Cassin";
                                                notes = "maiores";
                                            }};) {{
                                id = "797685cd-4e23-4b75-a0df-3e2573724dc7";
                                serial = "possimus";
                                wifiMac = "in";
                            }};, "quidem");            

            UpdateNetworkSmDevicesFieldsResponse res = sdk.sm.updateNetworkSmDevicesFields(req);

            if (res.updateNetworkSmDevicesFields200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSmTargetGroup

Update a target group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSmTargetGroupRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSmTargetGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSmTargetGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSmTargetGroupRequest req = new UpdateNetworkSmTargetGroupRequest("a", "explicabo") {{
                requestBody = new UpdateNetworkSmTargetGroupRequestBody() {{
                    name = "Ida West";
                    scope = "nihil";
                }};;
            }};            

            UpdateNetworkSmTargetGroupResponse res = sdk.sm.updateNetworkSmTargetGroup(req);

            if (res.updateNetworkSmTargetGroup200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("nam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            WipeNetworkSmDevicesRequest req = new WipeNetworkSmDevicesRequest("accusamus") {{
                requestBody = new WipeNetworkSmDevicesRequestBody() {{
                    id = "7e866b5b-9d90-4b2b-a0d8-3adc0e058641";
                    pin = 522767L;
                    serial = "reprehenderit";
                    wifiMac = "fuga";
                }};;
            }};            

            WipeNetworkSmDevicesResponse res = sdk.sm.wipeNetworkSmDevices(req);

            if (res.wipeNetworkSmDevices200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
