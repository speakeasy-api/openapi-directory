<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetUsersQueryParams;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;
import org.openapis.openapi.models.shared.OrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersRequest req = new GetUsersRequest() {{
                queryParams = new GetUsersQueryParams() {{
                    cursor = "corrupti";
                    order = "desc";
                    pageSize = 715190;
                }};
            }};            

            GetUsersResponse res = sdk.getUsers(req);

            if (res.getUsers200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->