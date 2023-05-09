# restricted

### Available Operations

* [collaboratorsPost](#collaboratorspost) - Collborators: Bulk Update (Admin Only)

## collaboratorsPost

Allows for bulk updates on collaborator metadata.  Restricted to internal admins

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollaboratorsPostResponse;
import org.openapis.openapi.models.shared.CollaboratorBulkUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CollaboratorBulkUpdateRequest req = new CollaboratorBulkUpdateRequest() {{
                active = false;
                leadId = 99569;
                userId = "e5b7fd2e-d028-4921-8ddc-692601fb576b";
            }};            

            CollaboratorsPostResponse res = sdk.restricted.collaboratorsPost(req);

            if (res.permissionTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
