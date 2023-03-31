<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelPathParams;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    name = "corrupti";
                }};
                queryParams = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
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