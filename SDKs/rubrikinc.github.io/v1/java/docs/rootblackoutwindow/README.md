# rootBlackoutWindow

## Overview

Blackout windows.

### Available Operations

* [getBlackoutWindowStatus](#getblackoutwindowstatus) - Get current status of global blackout window
* [toggleBlackoutWindow](#toggleblackoutwindow) - Starts or stops the global blackout window in local Rubrik cluster

## getBlackoutWindowStatus

Determine whether global blackout window is currently active.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlackoutWindowStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("modi", "qui") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetBlackoutWindowStatusResponse res = sdk.rootBlackoutWindow.getBlackoutWindowStatus();

            if (res.globalBlackoutWindowStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toggleBlackoutWindow

Returns whether or not the system is in a blackout window.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToggleBlackoutWindowResponse;
import org.openapis.openapi.models.shared.GlobalBlackoutWindowStatus;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("impedit", "cum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.GlobalBlackoutWindowStatus req = new GlobalBlackoutWindowStatus(false);            

            ToggleBlackoutWindowResponse res = sdk.rootBlackoutWindow.toggleBlackoutWindow(req);

            if (res.globalBlackoutWindowStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
