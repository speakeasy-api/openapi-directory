# getProfiles

### Available Operations

* [profiles](#profiles) - Fetch login profiles

## profiles

Fetch login profiles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProfilesResponse;
import org.openapis.openapi.models.operations.ProfilesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProfilesResponse res = sdk.getProfiles.profiles(new ProfilesSecurity("suscipit", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.profiles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
