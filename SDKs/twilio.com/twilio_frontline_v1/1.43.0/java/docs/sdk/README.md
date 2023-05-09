# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchUser](#fetchuser) - Fetch a frontline user
* [updateUser](#updateuser) - Update an existing frontline user

## fetchUser

Fetch a frontline user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUserRequest;
import org.openapis.openapi.models.operations.FetchUserResponse;
import org.openapis.openapi.models.operations.FetchUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUserRequest req = new FetchUserRequest("quibusdam");            

            FetchUserResponse res = sdk.sdk.fetchUser(req, new FetchUserSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.frontlineV1User != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUser

Update an existing frontline user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserRequest;
import org.openapis.openapi.models.operations.UpdateUserResponse;
import org.openapis.openapi.models.operations.UpdateUserSecurity;
import org.openapis.openapi.models.operations.UpdateUserUpdateUserRequest;
import org.openapis.openapi.models.shared.UserEnumStateTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUserRequest req = new UpdateUserRequest("corrupti") {{
                requestBody = new UpdateUserUpdateUserRequest() {{
                    avatar = "illum";
                    friendlyName = "vel";
                    isAvailable = false;
                    state = UserEnumStateTypeEnum.DEACTIVATED;
                }};;
            }};            

            UpdateUserResponse res = sdk.sdk.updateUser(req, new UpdateUserSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.frontlineV1User != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
