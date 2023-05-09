# status

### Available Operations

* [statusGet](#statusget) - Get the current status of message

## statusGet

Get the current status of message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StatusGetRequest;
import org.openapis.openapi.models.operations.StatusGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            StatusGetRequest req = new StatusGetRequest() {{
                messageId = "asperiores";
            }};            

            StatusGetResponse res = sdk.status.statusGet(req);

            if (res.messageStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
