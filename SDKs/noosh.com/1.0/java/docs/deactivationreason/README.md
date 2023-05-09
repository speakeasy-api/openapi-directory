# deactivationReason

### Available Operations

* [getDeactivationReasonList](#getdeactivationreasonlist) - List all deactivation reasons

## getDeactivationReasonList

List all deactivation reasons

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeactivationReasonListRequest;
import org.openapis.openapi.models.operations.GetDeactivationReasonListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeactivationReasonListRequest req = new GetDeactivationReasonListRequest("nulla");            

            GetDeactivationReasonListResponse res = sdk.deactivationReason.getDeactivationReasonList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
