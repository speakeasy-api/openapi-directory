<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse;
import org.openapis.openapi.models.operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest req = new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                    put("illum", "vel");
                }};
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse res = sdk.projects.workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel(req, new WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.execution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->