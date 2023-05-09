# monitoring

### Available Operations

* [getV05Heartbeat](#getv05heartbeat) - Get consent request status

## getV05Heartbeat

Get consent request status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV05HeartbeatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV05HeartbeatResponse res = sdk.monitoring.getV05Heartbeat();

            if (res.heartbeatResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
