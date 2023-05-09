# errors

### Available Operations

* [getErrors](#geterrors) - Get errors

## getErrors

Returns with all of the error page types for this project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetErrorsResponse;
import org.openapis.openapi.models.operations.GetErrorsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetErrorsResponse res = sdk.errors.getErrors(new GetErrorsSecurity("excepturi", "accusantium") {{
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
