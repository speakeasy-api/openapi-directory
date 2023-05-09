# staticFiles

## Overview

This folder contains a list of static files stored in Home.

### Available Operations

* [chromecastIcon](#chromecasticon) - Chromecast Icon
* [legalNotice](#legalnotice) - Legal Notice

## chromecastIcon

**Update:** This no longer exists. It's not useful, anyway.

A redirect to `http://www.gstatic.com/eureka/images/eureka_device.png`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromecastIconResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ChromecastIconResponse res = sdk.staticFiles.chromecastIcon();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## legalNotice

All licenses of programs used by Home.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LegalNoticeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    castLocalAuthorizationToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            LegalNoticeResponse res = sdk.staticFiles.legalNotice();

            if (res.legalNotice200TextPlainString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
