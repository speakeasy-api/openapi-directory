# pico

### Available Operations

* [picoGet](#picoget) - Gets all pico charging stations for this user

## picoGet

Gets all pico charging stations for this user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PicoGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PicoGetResponse res = sdk.pico.picoGet();

            if (res.devices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
