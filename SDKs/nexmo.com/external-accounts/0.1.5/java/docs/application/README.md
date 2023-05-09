# application

## Overview

Inbound messages to an external account which is linked to an application will be delivered to the application's inbound URL.

### Available Operations

* [linkApplication](#linkapplication) - Link application to an account
* [unliWithoutApplicationnkApplication](#unliwithoutapplicationnkapplication) - Unlink application from an account

## linkApplication

Link application to an account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LinkApplicationProviderEnum;
import org.openapis.openapi.models.operations.LinkApplicationRequest;
import org.openapis.openapi.models.operations.LinkApplicationRequestBody;
import org.openapis.openapi.models.operations.LinkApplicationResponse;
import org.openapis.openapi.models.operations.LinkApplicationSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LinkApplicationRequest req = new LinkApplicationRequest(                new LinkApplicationRequestBody("applicationId");, "corrupti", LinkApplicationProviderEnum.WHATSAPP);            

            LinkApplicationResponse res = sdk.application.linkApplication(req, new LinkApplicationSecurity() {{
                basicAuth = new SchemeBasicAuth("vel", "error") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.accountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unliWithoutApplicationnkApplication

Unlink application from an account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnliWithoutApplicationnkApplicationProviderEnum;
import org.openapis.openapi.models.operations.UnliWithoutApplicationnkApplicationRequest;
import org.openapis.openapi.models.operations.UnliWithoutApplicationnkApplicationResponse;
import org.openapis.openapi.models.operations.UnliWithoutApplicationnkApplicationSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnliWithoutApplicationnkApplicationRequest req = new UnliWithoutApplicationnkApplicationRequest("deserunt", "suscipit", UnliWithoutApplicationnkApplicationProviderEnum.VIBER_SERVICE_MSG);            

            UnliWithoutApplicationnkApplicationResponse res = sdk.application.unliWithoutApplicationnkApplication(req, new UnliWithoutApplicationnkApplicationSecurity() {{
                basicAuth = new SchemeBasicAuth("magnam", "debitis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
