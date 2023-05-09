# deprecated

## Overview

These methods are no longer maintained nor supported

### Available Operations

* [~~devicelist~~](#devicelist) - The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.
 :warning: **Deprecated**
* [~~getthermstate~~](#getthermstate) - The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint. :warning: **Deprecated**
* [~~getuser~~](#getuser) - The method getuser returns information about a user such as prefered language, prefered units, and list of devices.
 :warning: **Deprecated**

## ~~devicelist~~

The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicelistAppTypeEnum;
import org.openapis.openapi.models.operations.DevicelistRequest;
import org.openapis.openapi.models.operations.DevicelistResponse;
import org.openapis.openapi.models.operations.DevicelistSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicelistRequest req = new DevicelistRequest() {{
                appType = DevicelistAppTypeEnum.APP_STATION;
                deviceId = "quibusdam";
                getFavorites = false;
            }};            

            DevicelistResponse res = sdk.deprecated.devicelist(req, new DevicelistSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naDeviceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getthermstate~~

The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetthermstateRequest;
import org.openapis.openapi.models.operations.GetthermstateResponse;
import org.openapis.openapi.models.operations.GetthermstateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetthermstateRequest req = new GetthermstateRequest("unde", "nulla");            

            GetthermstateResponse res = sdk.deprecated.getthermstate(req, new GetthermstateSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naThermStateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getuser~~

The method getuser returns information about a user such as prefered language, prefered units, and list of devices.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetuserResponse;
import org.openapis.openapi.models.operations.GetuserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetuserResponse res = sdk.deprecated.getuser(new GetuserSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
