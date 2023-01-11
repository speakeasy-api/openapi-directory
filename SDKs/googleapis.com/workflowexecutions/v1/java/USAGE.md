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
                    name = "et";
                }};
                queryParams = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "necessitatibus";
                    alt = "json";
                    callback = "ducimus";
                    fields = "modi";
                    key = "fugiat";
                    oauthToken = "consequuntur";
                    prettyPrint = true;
                    quotaUser = "adipisci";
                    uploadType = "et";
                    uploadProtocol = "blanditiis";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("voluptas", "quaerat");
                    put("nihil", "et");
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