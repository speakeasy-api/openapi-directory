# viberServiceMessage

## Overview

Managing your [Viber Service Message](https://developer.nexmo.com/messages/concepts/viber) account

### Available Operations

* [getVSMAccount](#getvsmaccount) - Retrieve a Viber Service Message account

## getVSMAccount

Retrieve a Viber Service Message account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVSMAccountRequest;
import org.openapis.openapi.models.operations.GetVSMAccountResponse;
import org.openapis.openapi.models.operations.GetVSMAccountSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVSMAccountRequest req = new GetVSMAccountRequest("deserunt");            

            GetVSMAccountResponse res = sdk.viberServiceMessage.getVSMAccount(req, new GetVSMAccountSecurity() {{
                basicAuth = new SchemeBasicAuth("perferendis", "ipsam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.vsmAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
