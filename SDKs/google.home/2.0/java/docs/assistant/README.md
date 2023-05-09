# assistant

## Overview

This folder contains all endpoints related to Assistant's tasks like Do Not Disturb, Alarms and Timers, Accessibility and equalizer.

### Available Operations

* [accessibility](#accessibility) - Accessibility
* [alarmVolume](#alarmvolume) - Alarm Volume
* [deleteAlarmsandTimers](#deletealarmsandtimers) - Delete Alarms and Timers
* [doNotDisturb](#donotdisturb) - Do Not Disturb
* [getAlarmsandTimers](#getalarmsandtimers) - Get Alarms and Timers
* [setEqualizerValues](#setequalizervalues) - Set Equalizer Values

## accessibility

This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.  
Sending an empty-body POST request returns the current values.  
Either of the fields or both can be sent and new values will be saved.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessibilityResponse;
import org.openapis.openapi.models.shared.AccessibilityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AccessibilityRequest req = new AccessibilityRequest(false, false);            

            AccessibilityResponse res = sdk.assistant.accessibility(req);

            if (res.getcurrentvalues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## alarmVolume

This gets and sets alarms and timers volume.  
**Note:** This is not the same as normal volume.

Volume is a float number in [0, 1] where 0 is minimum and 1 is maximum.  
Sending an empty body gets the volume. Sending `volume` sets the volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlarmVolumeResponse;
import org.openapis.openapi.models.shared.AlarmVolumeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AlarmVolumeRequest req = new AlarmVolumeRequest(844266);            

            AlarmVolumeResponse res = sdk.assistant.alarmVolume(req);

            if (res.getvolume != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAlarmsandTimers

This deletes alarms and timers by their id.

`ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\/`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAlarmsandTimersResponse;
import org.openapis.openapi.models.shared.DeleteAlarmsandTimersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DeleteAlarmsandTimersRequest req = new DeleteAlarmsandTimersRequest(                new String[]{{
                                add("corrupti"),
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }});            

            DeleteAlarmsandTimersResponse res = sdk.assistant.deleteAlarmsandTimers(req);

            if (res.example19 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doNotDisturb

This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoNotDisturbRequest;
import org.openapis.openapi.models.operations.DoNotDisturbResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DoNotDisturbRequest req = new DoNotDisturbRequest("application/json");            

            DoNotDisturbResponse res = sdk.assistant.doNotDisturb(req);

            if (res.getcurrentstate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAlarmsandTimers

This gives a list of all active alarms and timers.

Both alarms and timers have `id`s which can be used to delete them. (There is no known way of creating/deleting yet). The value of `status` have different meanings for alarms and timers (given below).

Alarms have `date_pattern` and `time_pattern` with day, month, year, hour, minute, second. `fire_time` is the same in unix time (milliseconds, not seconds).  
`status` is 1 for set up and 2 for ringing.

Timers have `original_duration` is the original duration.  
`status` is 1 for set up and 3 for ringing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAlarmsandTimersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAlarmsandTimersResponse res = sdk.assistant.getAlarmsandTimers();

            if (res.example18 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setEqualizerValues

This can only set new equalizer values. To get already set values, use /setup/eureka_info.

The body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.

`low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.

Default values are 0 for both.  
While the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetEqualizerValuesResponse;
import org.openapis.openapi.models.shared.HighShelf1;
import org.openapis.openapi.models.shared.LowShelf1;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetEqualizerValuesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SetEqualizerValuesRequest req = new SetEqualizerValuesRequest(                new HighShelf1(297534);,                 new LowShelf1(891773););            

            SetEqualizerValuesResponse res = sdk.assistant.setEqualizerValues(req);

            if (res.setEqualizerValues200TextPlainObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
