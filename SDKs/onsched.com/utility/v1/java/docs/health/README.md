# health

### Available Operations

* [getUtilityV1HealthHeartbeat](#getutilityv1healthheartbeat)
* [getUtilityV1HealthThreadinfo](#getutilityv1healththreadinfo)

## getUtilityV1HealthHeartbeat

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUtilityV1HealthHeartbeatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUtilityV1HealthHeartbeatResponse res = sdk.health.getUtilityV1HealthHeartbeat();

            if (res.getUtilityV1HealthHeartbeat200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUtilityV1HealthThreadinfo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUtilityV1HealthThreadinfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUtilityV1HealthThreadinfoResponse res = sdk.health.getUtilityV1HealthThreadinfo();

            if (res.threadPoolInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
