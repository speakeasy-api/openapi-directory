<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetOrdersOrderStatusEnum;
import org.openapis.openapi.models.operations.GetOrdersRequest;
import org.openapis.openapi.models.operations.GetOrdersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrdersRequest req = new GetOrdersRequest() {{
                limit = "corrupti";
                offset = "provident";
                orderStatus = "Completed";
            }}            

            GetOrdersResponse res = sdk.getOrders(req);

            if (res.listOfOrders.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->