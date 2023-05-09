<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatorRolesListRequest;
import org.openapis.openapi.models.operations.CreatorRolesListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatorRolesListRequest req = new CreatorRolesListRequest() {{
                page = 548814L;
                pageSize = 592845L;
            }};            

            CreatorRolesListResponse res = sdk.creatorRoles.creatorRolesList(req);

            if (res.creatorRolesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->