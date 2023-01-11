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

            GetUsersRequest req = new GetUsersRequest() {{
                queryParams = new GetUsersQueryParams() {{
                    cursor = "sit";
                    order = "asc";
                    pageSize = 6050128673802995827;
                }};
            }};

            GetUsersResponse res = sdk.getUsers(req);

            if (res.getUsers200ApplicationJSONAny.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->