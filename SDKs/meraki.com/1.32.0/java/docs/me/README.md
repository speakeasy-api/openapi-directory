# me

### Available Operations

* [getAdministeredIdentitiesMe](#getadministeredidentitiesme) - Returns the identity of the current user.

## getAdministeredIdentitiesMe

Returns the identity of the current user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdministeredIdentitiesMeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAdministeredIdentitiesMeResponse res = sdk.me.getAdministeredIdentitiesMe();

            if (res.getAdministeredIdentitiesMe200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
