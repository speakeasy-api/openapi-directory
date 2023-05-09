# activityTypes

### Available Operations

* [getWorkspaceSlugActivityTypes](#getworkspaceslugactivitytypes) - List all activity types for a workspace

## getWorkspaceSlugActivityTypes

List all activity types for a workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivityTypesRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivityTypesResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivityTypesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugActivityTypesRequest req = new GetWorkspaceSlugActivityTypesRequest("laborum");            

            GetWorkspaceSlugActivityTypesResponse res = sdk.activityTypes.getWorkspaceSlugActivityTypes(req, new GetWorkspaceSlugActivityTypesSecurity("animi") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
