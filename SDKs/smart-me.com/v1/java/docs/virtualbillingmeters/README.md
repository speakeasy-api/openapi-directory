# virtualBillingMeters

### Available Operations

* [virtualBillingMetersGet](#virtualbillingmetersget) - Beta: Gets all Meters available to activate as a Virtual Meter.

## virtualBillingMetersGet

Beta: Gets all Meters available to activate as a Virtual Meter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualBillingMetersGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VirtualBillingMetersGetResponse res = sdk.virtualBillingMeters.virtualBillingMetersGet();

            if (res.devices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
