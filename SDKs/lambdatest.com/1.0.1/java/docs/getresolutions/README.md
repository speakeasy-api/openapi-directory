# getResolutions

### Available Operations

* [resolutions](#resolutions) - Fetch all available resolution on different OS

## resolutions

Fetch all available resolution on different OS

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResolutionsResponse;
import org.openapis.openapi.models.operations.ResolutionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResolutionsResponse res = sdk.getResolutions.resolutions(new ResolutionsSecurity("magnam", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.resolutions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
