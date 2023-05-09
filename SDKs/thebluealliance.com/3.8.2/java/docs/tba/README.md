# tba

## Overview

Calls that expose TBA internals or status.

### Available Operations

* [getStatus](#getstatus) - Returns API status, and TBA status information.

## getStatus

Returns API status, and TBA status information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatusRequest;
import org.openapis.openapi.models.operations.GetStatusResponse;
import org.openapis.openapi.models.operations.GetStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStatusRequest req = new GetStatusRequest() {{
                ifNoneMatch = "distinctio";
            }};            

            GetStatusResponse res = sdk.tba.getStatus(req, new GetStatusSecurity("quibusdam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.apiStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
