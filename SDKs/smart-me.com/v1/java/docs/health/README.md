# health

### Available Operations

* [healthGet](#healthget) - A method returning HTTP 200 OK when queried.
            It is used by Kubernetes probes to determine whether the app is healthy.

## healthGet

A method returning HTTP 200 OK when queried.
            It is used by Kubernetes probes to determine whether the app is healthy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HealthGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HealthGetResponse res = sdk.health.healthGet();

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
