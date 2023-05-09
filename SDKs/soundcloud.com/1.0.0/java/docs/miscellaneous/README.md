# miscellaneous

## Overview

Miscellaneous Endpoints.

### Available Operations

* [getResolve](#getresolve) - Resolves soundcloud.com URLs to Resource URLs to use with the API.

## getResolve

Resolves soundcloud.com URLs to Resource URLs to use with the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResolveRequest;
import org.openapis.openapi.models.operations.GetResolveResponse;
import org.openapis.openapi.models.operations.GetResolveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResolveRequest req = new GetResolveRequest("esse");            

            GetResolveResponse res = sdk.miscellaneous.getResolve(req, new GetResolveSecurity("ipsum", "excepturi") {{
                authHeader = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
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
