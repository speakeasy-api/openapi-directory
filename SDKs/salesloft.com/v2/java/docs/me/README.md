# me

## Overview

User Information

### Available Operations

* [getV2MeJson](#getv2mejson) - Fetch current user

## getV2MeJson

Authenticated user information. This endpoint does not accept any parameters as it is
represents your authenticated user. The "Users" resource provides user information
for other users on the team.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2MeJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2MeJsonResponse res = sdk.me.getV2MeJson();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
