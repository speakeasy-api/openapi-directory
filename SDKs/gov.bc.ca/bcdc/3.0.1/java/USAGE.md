<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetActionOrganizationActivityListQueryParams;
import org.openapis.openapi.models.operations.GetActionOrganizationActivityListRequest;
import org.openapis.openapi.models.operations.GetActionOrganizationActivityListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    githubAccessCode = new SchemeGithubAccessCode() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }})
                .build();

            GetActionOrganizationActivityListRequest req = new GetActionOrganizationActivityListRequest() {{
                queryParams = new GetActionOrganizationActivityListQueryParams() {{
                    id = "corrupti";
                }};
            }};            

            GetActionOrganizationActivityListResponse res = sdk.action.getActionOrganizationActivityList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->