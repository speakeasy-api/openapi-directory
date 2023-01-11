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

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest req = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest() {{
                security = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelPathParams() {{
                    name = "harum";
                }};
                queryParams = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "consequuntur";
                    alt = "json";
                    callback = "omnis";
                    fields = "repudiandae";
                    key = "placeat";
                    oauthToken = "veritatis";
                    prettyPrint = true;
                    quotaUser = "provident";
                    uploadType = "cumque";
                    uploadProtocol = "deleniti";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("qui", "quae");
                    put("consequatur", "reprehenderit");
                }};
            }};

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse res = sdk.projects.workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel(req);

            if (res.execution.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->