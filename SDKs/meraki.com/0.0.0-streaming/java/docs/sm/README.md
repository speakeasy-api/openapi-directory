# sm

### Available Operations

* [createNetworkSmBypassActivationLockAttempt](#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [getNetworkSmBypassActivationLockAttempt](#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
* [getNetworkSmCellularUsageHistory](#getnetworksmcellularusagehistory) - Return the client's daily cellular data usage history
* [getNetworkSmCerts](#getnetworksmcerts) - List the certs on a device
* [getNetworkSmConnectivity](#getnetworksmconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [getNetworkSmDesktopLogs](#getnetworksmdesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [getNetworkSmDeviceCommandLogs](#getnetworksmdevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [getNetworkSmDeviceProfiles](#getnetworksmdeviceprofiles) - Get the profiles associated with a device
* [getNetworkSmDevices](#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [getNetworkSmNetworkAdapters](#getnetworksmnetworkadapters) - List the network adapters of a device
* [getNetworkSmPerformanceHistory](#getnetworksmperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [getNetworkSmProfiles](#getnetworksmprofiles) - List all the profiles in the network
* [getNetworkSmRestrictions](#getnetworksmrestrictions) - List the restrictions on a device
* [getNetworkSmSecurityCenters](#getnetworksmsecuritycenters) - List the security centers on a device
* [getNetworkSmSoftwares](#getnetworksmsoftwares) - Get a list of softwares associated with a device
* [getNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [getNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [getNetworkSmUsers](#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [getNetworkSmWlanLists](#getnetworksmwlanlists) - List the saved SSID names on a device
* [lockNetworkSmDevices](#locknetworksmdevices) - Lock a set of devices
* [refreshNetworkSmDeviceDetails](#refreshnetworksmdevicedetails) - Refresh the details of a device
* [unenrollNetworkSmDevice](#unenrollnetworksmdevice) - Unenroll a device
* [updateNetworkSmDeviceFields](#updatenetworksmdevicefields) - Modify the fields of a device
* [updateNetworkSmDevicesTags](#updatenetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [wipeNetworkSmDevice](#wipenetworksmdevice) - Wipe a device

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
                .setSecurity(new Security("commodi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSmBypassActivationLockAttemptRequest req = new CreateNetworkSmBypassActivationLockAttemptRequest(                new CreateNetworkSmBypassActivationLockAttemptRequestBody(                new String[]{{
                                                add("dolorum"),
                                                add("possimus"),
                                            }});, "voluptate");            

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
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmBypassActivationLockAttemptRequest req = new GetNetworkSmBypassActivationLockAttemptRequest("nesciunt", "quaerat");            

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

## getNetworkSmCellularUsageHistory

Return the client's daily cellular data usage history. Usage data is in kilobytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmCellularUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkSmCellularUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmCellularUsageHistoryRequest req = new GetNetworkSmCellularUsageHistoryRequest("minus", "sunt");            

            GetNetworkSmCellularUsageHistoryResponse res = sdk.sm.getNetworkSmCellularUsageHistory(req);

            if (res.getNetworkSmCellularUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmCerts

List the certs on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmCertsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmCertsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmCertsRequest req = new GetNetworkSmCertsRequest("iusto", "quas");            

            GetNetworkSmCertsResponse res = sdk.sm.getNetworkSmCerts(req);

            if (res.getNetworkSmCerts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmConnectivity

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmConnectivityRequest;
import org.openapis.openapi.models.operations.GetNetworkSmConnectivityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmConnectivityRequest req = new GetNetworkSmConnectivityRequest("facilis", "amet") {{
                endingBefore = "autem";
                perPage = 685415L;
                startingAfter = "alias";
            }};            

            GetNetworkSmConnectivityResponse res = sdk.sm.getNetworkSmConnectivity(req);

            if (res.getNetworkSmConnectivity200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDesktopLogs

Return historical records of various Systems Manager network connection details for desktop devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDesktopLogsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDesktopLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDesktopLogsRequest req = new GetNetworkSmDesktopLogsRequest("aut", "quos") {{
                endingBefore = "laudantium";
                perPage = 832239L;
                startingAfter = "veritatis";
            }};            

            GetNetworkSmDesktopLogsResponse res = sdk.sm.getNetworkSmDesktopLogs(req);

            if (res.getNetworkSmDesktopLogs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceCommandLogs

Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceCommandLogsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceCommandLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceCommandLogsRequest req = new GetNetworkSmDeviceCommandLogsRequest("eaque", "saepe") {{
                endingBefore = "delectus";
                perPage = 651228L;
                startingAfter = "nulla";
            }};            

            GetNetworkSmDeviceCommandLogsResponse res = sdk.sm.getNetworkSmDeviceCommandLogs(req);

            if (res.getNetworkSmDeviceCommandLogs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceProfiles

Get the profiles associated with a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceProfilesRequest req = new GetNetworkSmDeviceProfilesRequest("sed", "voluptatem");            

            GetNetworkSmDeviceProfilesResponse res = sdk.sm.getNetworkSmDeviceProfiles(req);

            if (res.getNetworkSmDeviceProfiles200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("alias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDevicesRequest req = new GetNetworkSmDevicesRequest("eveniet") {{
                batchSize = 941668L;
                batchToken = "voluptatem";
                fields = "incidunt";
                ids = "qui";
                scope = "qui";
                serials = "necessitatibus";
                wifiMacs = "harum";
            }};            

            GetNetworkSmDevicesResponse res = sdk.sm.getNetworkSmDevices(req);

            if (res.getNetworkSmDevices200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmNetworkAdapters

List the network adapters of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmNetworkAdaptersRequest;
import org.openapis.openapi.models.operations.GetNetworkSmNetworkAdaptersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmNetworkAdaptersRequest req = new GetNetworkSmNetworkAdaptersRequest("beatae", "aliquid");            

            GetNetworkSmNetworkAdaptersResponse res = sdk.sm.getNetworkSmNetworkAdapters(req);

            if (res.getNetworkSmNetworkAdapters200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmPerformanceHistory

Return historical records of various Systems Manager client metrics for desktop devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmPerformanceHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkSmPerformanceHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmPerformanceHistoryRequest req = new GetNetworkSmPerformanceHistoryRequest("optio", "voluptatibus") {{
                endingBefore = "molestias";
                perPage = 639463L;
                startingAfter = "libero";
            }};            

            GetNetworkSmPerformanceHistoryResponse res = sdk.sm.getNetworkSmPerformanceHistory(req);

            if (res.getNetworkSmPerformanceHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmProfiles

List all the profiles in the network

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
                .setSecurity(new Security("totam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmProfilesRequest req = new GetNetworkSmProfilesRequest("sequi");            

            GetNetworkSmProfilesResponse res = sdk.sm.getNetworkSmProfiles(req);

            if (res.getNetworkSmProfiles200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmRestrictions

List the restrictions on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmRestrictionsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmRestrictionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmRestrictionsRequest req = new GetNetworkSmRestrictionsRequest("ea", "impedit");            

            GetNetworkSmRestrictionsResponse res = sdk.sm.getNetworkSmRestrictions(req);

            if (res.getNetworkSmRestrictions200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmSecurityCenters

List the security centers on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmSecurityCentersRequest;
import org.openapis.openapi.models.operations.GetNetworkSmSecurityCentersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmSecurityCentersRequest req = new GetNetworkSmSecurityCentersRequest("odit", "velit");            

            GetNetworkSmSecurityCentersResponse res = sdk.sm.getNetworkSmSecurityCenters(req);

            if (res.getNetworkSmSecurityCenters200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmSoftwares

Get a list of softwares associated with a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmSoftwaresRequest;
import org.openapis.openapi.models.operations.GetNetworkSmSoftwaresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmSoftwaresRequest req = new GetNetworkSmSoftwaresRequest("repellat", "nulla");            

            GetNetworkSmSoftwaresResponse res = sdk.sm.getNetworkSmSoftwares(req);

            if (res.getNetworkSmSoftwares200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("laborum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUserDeviceProfilesRequest req = new GetNetworkSmUserDeviceProfilesRequest("natus", "accusamus");            

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
                .setSecurity(new Security("doloremque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUserSoftwaresRequest req = new GetNetworkSmUserSoftwaresRequest("nisi", "rerum");            

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
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUsersRequest req = new GetNetworkSmUsersRequest("voluptates") {{
                emails = "non";
                ids = "rem";
                scope = "quia";
                usernames = "ullam";
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

## getNetworkSmWlanLists

List the saved SSID names on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmWlanListsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmWlanListsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmWlanListsRequest req = new GetNetworkSmWlanListsRequest("dicta", "voluptatibus");            

            GetNetworkSmWlanListsResponse res = sdk.sm.getNetworkSmWlanLists(req);

            if (res.getNetworkSmWlanLists200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("eligendi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            LockNetworkSmDevicesRequest req = new LockNetworkSmDevicesRequest("quae") {{
                requestBody = new LockNetworkSmDevicesRequestBody() {{
                    ids = "officiis";
                    pin = 100002L;
                    scope = "architecto";
                    serials = "enim";
                    wifiMacs = "optio";
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
                .setSecurity(new Security("rem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RefreshNetworkSmDeviceDetailsRequest req = new RefreshNetworkSmDeviceDetailsRequest("perferendis", "facilis");            

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
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnenrollNetworkSmDeviceRequest req = new UnenrollNetworkSmDeviceRequest("a", "iste");            

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

## updateNetworkSmDeviceFields

Modify the fields of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSmDeviceFieldsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSmDeviceFieldsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSmDeviceFieldsRequestBodyDeviceFields;
import org.openapis.openapi.models.operations.UpdateNetworkSmDeviceFieldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSmDeviceFieldsRequest req = new UpdateNetworkSmDeviceFieldsRequest(                new UpdateNetworkSmDeviceFieldsRequestBody(                new UpdateNetworkSmDeviceFieldsRequestBodyDeviceFields() {{
                                                name = "Dan Grimes";
                                                notes = "maxime";
                                            }};) {{
                                id = "42defcce-8f19-4777-b3e6-3562a7b408f0";
                                serial = "veniam";
                                wifiMac = "saepe";
                            }};, "neque");            

            UpdateNetworkSmDeviceFieldsResponse res = sdk.sm.updateNetworkSmDeviceFields(req);

            if (res.updateNetworkSmDeviceFields200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSmDevicesTags

Add, delete, or update the tags of a set of devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSmDevicesTagsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSmDevicesTagsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSmDevicesTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSmDevicesTagsRequest req = new UpdateNetworkSmDevicesTagsRequest(                new UpdateNetworkSmDevicesTagsRequestBody("aliquam", "quos") {{
                                ids = "doloribus";
                                scope = "fugiat";
                                serials = "est";
                                wifiMacs = "delectus";
                            }};, "velit");            

            UpdateNetworkSmDevicesTagsResponse res = sdk.sm.updateNetworkSmDevicesTags(req);

            if (res.updateNetworkSmDevicesTags200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## wipeNetworkSmDevice

Wipe a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WipeNetworkSmDeviceRequest;
import org.openapis.openapi.models.operations.WipeNetworkSmDeviceRequestBody;
import org.openapis.openapi.models.operations.WipeNetworkSmDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            WipeNetworkSmDeviceRequest req = new WipeNetworkSmDeviceRequest("nesciunt") {{
                requestBody = new WipeNetworkSmDeviceRequestBody() {{
                    id = "a1f5fd94-259c-40b3-af25-ea944f3b756c";
                    pin = 68880L;
                    serial = "beatae";
                    wifiMac = "hic";
                }};;
            }};            

            WipeNetworkSmDeviceResponse res = sdk.sm.wipeNetworkSmDevice(req);

            if (res.wipeNetworkSmDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
