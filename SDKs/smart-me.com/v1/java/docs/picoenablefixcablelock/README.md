# picoEnableFixCableLock

### Available Operations

* [picoEnableFixCableLockPost](#picoenablefixcablelockpost) - Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

## picoEnableFixCableLockPost

Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PicoEnableFixCableLockPostRequest;
import org.openapis.openapi.models.operations.PicoEnableFixCableLockPostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PicoEnableFixCableLockPostRequest req = new PicoEnableFixCableLockPostRequest("tempora");            

            PicoEnableFixCableLockPostResponse res = sdk.picoEnableFixCableLock.picoEnableFixCableLockPost(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
