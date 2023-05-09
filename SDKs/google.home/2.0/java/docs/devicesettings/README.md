# deviceSettings

## Overview

This folder consists of all endpoints to modify and control the device.

### Available Operations

* [nightModesettings](#nightmodesettings) - Night Mode settings
* [rebootandFactoryReset](#rebootandfactoryreset) - Reboot and Factory Reset
* [setEurekaInfo](#seteurekainfo) - Set Eureka Info

## nightModesettings

This sets night mode options.  
To view currently set values, use /setup/eureka_info.  
If `enabled` is set to false, night mode is disabled and the other values do not matter.  
`led_brightness` and `volume` refer to the maximum LED Brightness and Volume that is set during night mode.  
`demo_to_user` is always set to `true` so change in values will be visible in realtime (like brightness).  
`windows`: A combination of `length_hours` and `start_hour` is used to define start and end times for night mode. In this example, night mode starts at 10 PM (22) and ends at 6 AM (8 hours later). `windows.days` is an array of days of week when night mode will be enabled. Example: 0->Sunday, 1-> Monday, ..., 6->Saturday.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NightModesettingsResponse;
import org.openapis.openapi.models.shared.NightModesettingsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Window;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.NightModesettingsRequest req = new NightModesettingsRequest(false, false, false, 1403.5, 8700.13,                 new org.openapis.openapi.models.shared.Window[]{{
                                add(new Window(                new Integer[]{{
                                                    add(118274),
                                                    add(720633),
                                                    add(639921),
                                                }}, 582020, 143353) {{
                                    days = new Integer[]{{
                                        add(473608),
                                        add(799159),
                                        add(800911),
                                        add(461479),
                                    }};
                                    lengthHours = 520478;
                                    startHour = 780529;
                                }}),
                                add(new Window(                new Integer[]{{
                                                    add(264555),
                                                    add(186332),
                                                }}, 774234, 736918) {{
                                    days = new Integer[]{{
                                        add(944669),
                                        add(758616),
                                        add(521848),
                                    }};
                                    lengthHours = 105907;
                                    startHour = 414662;
                                }}),
                                add(new Window(                new Integer[]{{
                                                    add(617636),
                                                    add(149675),
                                                }}, 612096, 222321) {{
                                    days = new Integer[]{{
                                        add(216550),
                                        add(568434),
                                    }};
                                    lengthHours = 135218;
                                    startHour = 18789;
                                }}),
                                add(new Window(                new Integer[]{{
                                                    add(613064),
                                                    add(437032),
                                                }}, 902349, 697631) {{
                                    days = new Integer[]{{
                                        add(386489),
                                        add(943749),
                                        add(902599),
                                    }};
                                    lengthHours = 681820;
                                    startHour = 449950;
                                }}),
                            }});            

            NightModesettingsResponse res = sdk.deviceSettings.nightModesettings(req);

            if (res.example17 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rebootandFactoryReset

This can simply reboot the device (`params: "now"`) or factory reset the device (`params: "fdr"`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RebootandFactoryResetResponse;
import org.openapis.openapi.models.shared.RebootandFactoryResetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.RebootandFactoryResetRequest req = new RebootandFactoryResetRequest("ipsa");            

            RebootandFactoryResetResponse res = sdk.deviceSettings.rebootandFactoryReset(req);

            if (res.rebootandFactoryReset200TextPlainObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setEurekaInfo

This can set custom values to some options.

Only fields to be modified need to be sent, not all. The example has some modifiable fields.

TODO: List all modifiable fields.

Sending non-existant fields will still return a 200 OK, but they are not saved.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetEurekaInfoResponse;
import org.openapis.openapi.models.shared.OptIn1;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetEurekaInfoRequest;
import org.openapis.openapi.models.shared.Settings1;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SetEurekaInfoRequest req = new SetEurekaInfoRequest("est",                 new OptIn1(false, false, false, false);,                 new Settings1(653140););            

            SetEurekaInfoResponse res = sdk.deviceSettings.setEurekaInfo(req);

            if (res.setEurekaInfo200TextPlainObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
