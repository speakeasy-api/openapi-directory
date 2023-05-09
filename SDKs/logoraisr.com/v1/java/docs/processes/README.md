# processes

### Available Operations

* [processesList](#processeslist) - Get process list.

## processesList

This GET-Method lists all on logoraisr available processes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessesListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProcessesListResponse res = sdk.processes.processesList();

            if (res.process != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
