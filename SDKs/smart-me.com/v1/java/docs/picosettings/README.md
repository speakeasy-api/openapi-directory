# picoSettings

### Available Operations

* [picoSettingsGet](#picosettingsget) - GET: api/pico/settings
            
            Returns the settings of a pico charging station.

## picoSettingsGet

GET: api/pico/settings
            
            Returns the settings of a pico charging station.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PicoSettingsGetRequest;
import org.openapis.openapi.models.operations.PicoSettingsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PicoSettingsGetRequest req = new PicoSettingsGetRequest("sequi");            

            PicoSettingsGetResponse res = sdk.picoSettings.picoSettingsGet(req);

            if (res.picoSettingsDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
