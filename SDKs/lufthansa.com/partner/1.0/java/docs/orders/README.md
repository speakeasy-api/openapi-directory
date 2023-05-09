# orders

### Available Operations

* [orders](#orders) - Orders

## orders

Retrieve order by ID and optionally name. This service is only accessible for LH privileged partners

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrdersRequest;
import org.openapis.openapi.models.operations.OrdersResponse;
import org.openapis.openapi.models.operations.OrdersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrdersRequest req = new OrdersRequest("quo", "sequi", "tenetur");            

            OrdersResponse res = sdk.orders.orders(req, new OrdersSecurity("ipsam") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orders200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
