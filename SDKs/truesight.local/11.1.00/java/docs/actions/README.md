# actions

## Overview

API operations to interact with the PATROL Agent.

### Available Operations

* [collectNow](#collectnow) - Triggers a new collect on a specific device.
* [rediscover](#rediscover) - Triggers a new discovery on a specific device.
* [reinitialize](#reinitialize) - Sends a 'Reinitialize KM' command.
* [remove](#remove) - Removes a specific instance from the monitoring environment.
* [reset](#reset) - Resets the Error Count parameter.

## collectNow

You need to provide the <b>Device ID</b> and <b>Monitor Class</b> parameters to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> of a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectNowRequest;
import org.openapis.openapi.models.operations.CollectNowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectNowRequest req = new CollectNowRequest(715190, "quibusdam");            

            CollectNowResponse res = sdk.actions.collectNow(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rediscover

You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RediscoverRequest;
import org.openapis.openapi.models.operations.RediscoverResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RediscoverRequest req = new RediscoverRequest(602763);            

            RediscoverResponse res = sdk.actions.rediscover(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reinitialize

Launches a 'Reinitialize KM' command for the following parameters:<br>- resetDiscoveryAndPollingIntervals<br>- resetAlertAfterNTimes<br>- resetAlertActions<br>- resetOtherA<br>- resetSettings<br>- resetDebugMode<br>- resetRemovedPausedObjectList<br>- resetReportSettings<br>- resetJavaSettings<br>- resetThresholds<br><br>You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReinitializeRequest;
import org.openapis.openapi.models.operations.ReinitializeResponse;
import org.openapis.openapi.models.shared.ReinitializeActionConfiguration;
import org.openapis.openapi.models.shared.ReinitializeActionConfigurationResetAlertActionsEnum;
import org.openapis.openapi.models.shared.ReinitializeActionConfigurationResetAlertAfterNTimesEnum;
import org.openapis.openapi.models.shared.ReinitializeActionConfigurationResetDebugModeEnum;
import org.openapis.openapi.models.shared.ReinitializeActionConfigurationResetDiscoveryAndPollingIntervalsEnum;
import org.openapis.openapi.models.shared.ReinitializeActionConfigurationResetJavaSettingsEnum;
import org.openapis.openapi.models.shared.ReinitializeActionConfigurationResetOtherAlertSettingsEnum;
import org.openapis.openapi.models.shared.ReinitializeActionConfigurationResetRemovedPausedObjectListEnum;
import org.openapis.openapi.models.shared.ReinitializeActionConfigurationResetReportSettingsEnum;
import org.openapis.openapi.models.shared.ReinitializeActionConfigurationResetThresholdsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReinitializeRequest req = new ReinitializeRequest(                new ReinitializeActionConfiguration() {{
                                resetAlertActions = ReinitializeActionConfigurationResetAlertActionsEnum.ONE;
                                resetAlertAfterNTimes = ReinitializeActionConfigurationResetAlertAfterNTimesEnum.ONE;
                                resetDebugMode = ReinitializeActionConfigurationResetDebugModeEnum.ONE;
                                resetDiscoveryAndPollingIntervals = ReinitializeActionConfigurationResetDiscoveryAndPollingIntervalsEnum.ZERO;
                                resetJavaSettings = ReinitializeActionConfigurationResetJavaSettingsEnum.ONE;
                                resetOtherAlertSettings = ReinitializeActionConfigurationResetOtherAlertSettingsEnum.ONE;
                                resetRemovedPausedObjectList = ReinitializeActionConfigurationResetRemovedPausedObjectListEnum.ZERO;
                                resetReportSettings = ReinitializeActionConfigurationResetReportSettingsEnum.ZERO;
                                resetThresholds = ReinitializeActionConfigurationResetThresholdsEnum.ZERO;
                            }};, 891773);            

            ReinitializeResponse res = sdk.actions.reinitialize(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## remove

You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the Monitor SID).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveRequest;
import org.openapis.openapi.models.operations.RemoveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveRequest req = new RemoveRequest(56713, "delectus", "tempora");            

            RemoveResponse res = sdk.actions.remove(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reset

Sets the Error Count parameter to 0.<br><br>You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the monitorSid).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetRequest;
import org.openapis.openapi.models.operations.ResetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetRequest req = new ResetRequest(383441, "molestiae", "minus");            

            ResetResponse res = sdk.actions.reset(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
