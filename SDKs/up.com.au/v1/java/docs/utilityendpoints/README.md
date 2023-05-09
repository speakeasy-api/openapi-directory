# utilityEndpoints

## Overview

Some endpoints exist not to expose data, but to test the API
itself. Currently there is only one endpoint in this group: ping!


### Available Operations

* [getUtilPing](#getutilping) - Ping

## getUtilPing

Make a basic ping request to the API. This is useful to verify that
authentication is functioning correctly. On authentication success an
HTTP `200` status is returned. On failure an HTTP `401` error response
is returned.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUtilPingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetUtilPingResponse res = sdk.utilityEndpoints.getUtilPing();

            if (res.pingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
