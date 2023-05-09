# team

## Overview

Team Information

### Available Operations

* [getV2TeamJson](#getv2teamjson) - Fetch current team

## getV2TeamJson

Fetches the team of the authenticated user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2TeamJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2TeamJsonResponse res = sdk.team.getV2TeamJson();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
