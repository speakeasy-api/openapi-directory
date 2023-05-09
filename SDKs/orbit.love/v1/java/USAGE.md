<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdResponse;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest req = new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest("corrupti", "provident", "distinctio");            

            DeleteWorkspaceSlugMembersMemberSlugActivitiesIdResponse res = sdk.activities.deleteWorkspaceSlugMembersMemberSlugActivitiesId(req, new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity("quibusdam") {{
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
<!-- End SDK Example Usage -->