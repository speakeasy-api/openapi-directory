# auth

## Overview

authentication and authorization

### Available Operations

* [getAuth](#getauth) - Request a JWT access token using your obono username and password.

## getAuth

Request a JWT access token using your obono username and password.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthResponse;
import org.openapis.openapi.models.operations.GetAuthSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAuthResponse res = sdk.auth.getAuth(new GetAuthSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.authResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
