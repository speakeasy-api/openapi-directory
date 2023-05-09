# thermostat

## Overview

Thermostat specific methods

### Available Operations

* [createnewschedule](#createnewschedule) - The method createnewschedule creates a new schedule stored in the backup list.
* [getmeasure](#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [getthermostatsdata](#getthermostatsdata) - The method getthermostatsdata returns information about user's thermostats such as their last measurements.
* [setthermpoint](#setthermpoint) - The method setthermpoint changes the Thermostat manual temperature setpoint.
* [switchschedule](#switchschedule) - The method switchschedule switches the Thermostat's schedule to another existing schedule.
* [syncschedule](#syncschedule) - The method syncschedule changes the Thermostat weekly schedule.

## createnewschedule

The method createnewschedule creates a new schedule stored in the backup list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatenewscheduleRequest;
import org.openapis.openapi.models.operations.CreatenewscheduleResponse;
import org.openapis.openapi.models.operations.CreatenewscheduleSecurity;
import org.openapis.openapi.models.shared.NAThermProgram;
import org.openapis.openapi.models.shared.NATimeTableItem;
import org.openapis.openapi.models.shared.NAZone;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatenewscheduleRequest req = new CreatenewscheduleRequest("esse".getBytes(), "totam", "porro");            

            CreatenewscheduleResponse res = sdk.thermostat.createnewschedule(req, new CreatenewscheduleSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naNewScheduleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getmeasure

The method getmeasure returns the measurements of a device or a module.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetmeasureRequest;
import org.openapis.openapi.models.operations.GetmeasureResponse;
import org.openapis.openapi.models.operations.GetmeasureScaleEnum;
import org.openapis.openapi.models.operations.GetmeasureSecurity;
import org.openapis.openapi.models.operations.GetmeasureTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetmeasureRequest req = new GetmeasureRequest("dolorum", GetmeasureScaleEnum.MAX,                 new org.openapis.openapi.models.operations.GetmeasureTypeEnum[]{{
                                add(GetmeasureTypeEnum.DATE_MIN_PRESSURE),
                                add(GetmeasureTypeEnum.DATE_MAX_HUM),
                                add(GetmeasureTypeEnum.RAIN),
                            }}) {{
                dateBegin = 537373;
                dateEnd = "hic";
                limit = 758616;
                moduleId = "totam";
                optimize = false;
                realTime = false;
            }};            

            GetmeasureResponse res = sdk.thermostat.getmeasure(req, new GetmeasureSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naMeasureResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getthermostatsdata

The method getthermostatsdata returns information about user's thermostats such as their last measurements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetthermostatsdataRequest;
import org.openapis.openapi.models.operations.GetthermostatsdataResponse;
import org.openapis.openapi.models.operations.GetthermostatsdataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetthermostatsdataRequest req = new GetthermostatsdataRequest() {{
                deviceId = "beatae";
            }};            

            GetthermostatsdataResponse res = sdk.thermostat.getthermostatsdata(req, new GetthermostatsdataSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naThermostatDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setthermpoint

The method setthermpoint changes the Thermostat manual temperature setpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetthermpointRequest;
import org.openapis.openapi.models.operations.SetthermpointResponse;
import org.openapis.openapi.models.operations.SetthermpointSecurity;
import org.openapis.openapi.models.operations.SetthermpointSetpointModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetthermpointRequest req = new SetthermpointRequest("commodi", "molestiae", SetthermpointSetpointModeEnum.AWAY) {{
                setpointEndtime = 186332;
                setpointTemp = 7742.34;
            }};            

            SetthermpointResponse res = sdk.thermostat.setthermpoint(req, new SetthermpointSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naOkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## switchschedule

The method switchschedule switches the Thermostat's schedule to another existing schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SwitchscheduleRequest;
import org.openapis.openapi.models.operations.SwitchscheduleResponse;
import org.openapis.openapi.models.operations.SwitchscheduleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SwitchscheduleRequest req = new SwitchscheduleRequest("cum", "esse", "ipsum");            

            SwitchscheduleResponse res = sdk.thermostat.switchschedule(req, new SwitchscheduleSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naOkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## syncschedule

The method syncschedule changes the Thermostat weekly schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SyncscheduleRequest;
import org.openapis.openapi.models.operations.SyncscheduleResponse;
import org.openapis.openapi.models.operations.SyncscheduleSecurity;
import org.openapis.openapi.models.shared.NAThermProgram;
import org.openapis.openapi.models.shared.NATimeTableItem;
import org.openapis.openapi.models.shared.NAZone;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SyncscheduleRequest req = new SyncscheduleRequest("excepturi".getBytes(), "aspernatur", "perferendis");            

            SyncscheduleResponse res = sdk.thermostat.syncschedule(req, new SyncscheduleSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naOkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
