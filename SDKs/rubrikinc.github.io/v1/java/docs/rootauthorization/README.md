# rootAuthorization

## Overview

Authorization.

### Available Operations

* [deleteAuthzCache](#deleteauthzcache) - Clear cached authorization information

## deleteAuthzCache

Clears the node of cached authorization information for the current user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAuthzCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("iusto", "excepturi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteAuthzCacheResponse res = sdk.rootAuthorization.deleteAuthzCache();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
