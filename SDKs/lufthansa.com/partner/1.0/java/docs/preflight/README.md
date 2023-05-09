# preflight

### Available Operations

* [autoCheckIn](#autocheckin) - Auto Check-In

## autoCheckIn

Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutoCheckInRequest;
import org.openapis.openapi.models.operations.AutoCheckInResponse;
import org.openapis.openapi.models.operations.AutoCheckInSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutoCheckInRequest req = new AutoCheckInRequest("id", "possimus", "aut");            

            AutoCheckInResponse res = sdk.preflight.autoCheckIn(req, new AutoCheckInSecurity("quasi") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.autoCheckIn200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
