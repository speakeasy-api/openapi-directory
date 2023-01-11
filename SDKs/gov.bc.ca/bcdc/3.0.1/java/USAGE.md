<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    githubAccessCode = new SchemeGithubAccessCode() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetActionOrganizationActivityListRequest req = new GetActionOrganizationActivityListRequest() {{
                queryParams = new GetActionOrganizationActivityListQueryParams() {{
                    id = "sit";
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