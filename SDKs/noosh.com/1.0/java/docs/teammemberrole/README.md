# teamMemberRole

### Available Operations

* [getMemberRoles](#getmemberroles) - List all the role options for the user

## getMemberRoles

List all the role options for the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMemberRolesRequest;
import org.openapis.openapi.models.operations.GetMemberRolesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMemberRolesRequest req = new GetMemberRolesRequest("architecto", "quae", "aut");            

            GetMemberRolesResponse res = sdk.teamMemberRole.getMemberRoles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
