<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetOrdersRequest req = new GetOrdersRequest() {{
                queryParams = new GetOrdersQueryParams() {{
                    limit = "qui";
                    offset = "laudantium";
                    orderStatus = "Active";
                }};
            }};

            GetOrdersResponse res = sdk.getOrders(req);

            if (res.listOfOrders.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->