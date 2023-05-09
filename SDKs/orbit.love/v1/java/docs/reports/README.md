# reports

### Available Operations

* [getWorkspaceSlugReports](#getworkspaceslugreports) - Get a workspace stats

## getWorkspaceSlugReports

Get a workspace stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugReportsRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugReportsResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugReportsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugReportsRequest req = new GetWorkspaceSlugReportsRequest("corporis") {{
                activityType = "hic";
                endDate = "libero";
                properties = "nobis";
                relative = "dolores";
                startDate = "quis";
                type = "totam";
            }};            

            GetWorkspaceSlugReportsResponse res = sdk.reports.getWorkspaceSlugReports(req, new GetWorkspaceSlugReportsSecurity("dignissimos") {{
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
