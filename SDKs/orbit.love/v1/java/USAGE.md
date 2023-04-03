<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest req = new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest() {{
                id = "corrupti";
                memberSlug = "provident";
                workspaceSlug = "distinctio";
            }}            

            DeleteWorkspaceSlugMembersMemberSlugActivitiesIdResponse res = sdk.activities.deleteWorkspaceSlugMembersMemberSlugActivitiesId(req, new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity() {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->