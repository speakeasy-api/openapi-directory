# frontend

### Available Operations

* [getFrontendSettings](#getfrontendsettings) - Retrieve frontend specific settings

## getFrontendSettings

Retrieve frontend specific settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFrontendSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFrontendSettingsResponse res = sdk.frontend.getFrontendSettings();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
