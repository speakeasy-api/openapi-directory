# healthAPI

## Overview

Executes a simple built-in policy query to verify that the server is operational

### Available Operations

* [getHealth](#gethealth) - Health

## getHealth

This API endpoint verifies that the server is operational.

The response from the server is either 200 or 500:
- **200** - OPA service is healthy. If `bundles` is true, then all configured bundles have been activated. If `plugins` is true, then all plugins are in an 'OK' state.
- **500** - OPA service is *not* healthy. If `bundles` is true, at least one of configured bundles has not yet been activated. If `plugins` is true, at least one plugins is in a 'not OK' state.

---
**Note**
This check is only for initial bundle activation. Subsequent downloads will not affect the health check.

Use the **status** endpoint (in the (management API)[management.html]) for more fine-grained bundle status monitoring.

---

Bundles
<https://www.openpolicyagent.org/docs/latest/management/#bundles>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHealthRequest;
import org.openapis.openapi.models.operations.GetHealthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHealthRequest req = new GetHealthRequest() {{
                bundles = false;
                plugins = false;
            }};            

            GetHealthResponse res = sdk.healthAPI.getHealth(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
