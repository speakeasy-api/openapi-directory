# timeZones

### Available Operations

* [getTimeZones](#gettimezones) - List time zones

## getTimeZones

Lists time zones.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimeZonesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTimeZonesResponse res = sdk.timeZones.getTimeZones();

            if (res.timeZones != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
