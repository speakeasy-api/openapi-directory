# authinfo

## Overview

Read-only route providing information about how the requesting client is authenticated on the API, as well as corresponding permissions.


### Available Operations

* [getAuthinfo](#getauthinfo) - Authentication information

## getAuthinfo

Authentication information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthinfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuthinfoResponse res = sdk.authinfo.getAuthinfo();

            if (res.getAuthinfo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
