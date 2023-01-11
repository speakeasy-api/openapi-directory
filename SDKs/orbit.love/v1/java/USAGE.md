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

            DeleteWorkspaceIdMembersMemberIdActivitiesIdRequest req = new DeleteWorkspaceIdMembersMemberIdActivitiesIdRequest() {{
                security = new DeleteWorkspaceIdMembersMemberIdActivitiesIdSecurity() {{
                    bearer = new SchemeBearer() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteWorkspaceIdMembersMemberIdActivitiesIdPathParams() {{
                    id = "nesciunt";
                    memberId = "rerum";
                    workspaceId = "tempora";
                }};
            }};

            DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse res = sdk.activities.deleteWorkspaceIdMembersMemberIdActivitiesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->