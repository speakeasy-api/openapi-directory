# projects

### Available Operations

* [getProject](#getproject) - Get metadata about the current project

## getProject

Returns project data for API key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectResponse;
import org.openapis.openapi.models.operations.GetProjectSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProjectResponse res = sdk.projects.getProject(new GetProjectSecurity("iure", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
