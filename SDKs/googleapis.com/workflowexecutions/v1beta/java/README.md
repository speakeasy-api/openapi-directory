# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel` - Cancels an execution of the given name.
* `workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate` - Creates a new execution using the latest revision of the given workflow.
* `workflowexecutionsProjectsLocationsWorkflowsExecutionsGet` - Returns an execution of the given name.
* `workflowexecutionsProjectsLocationsWorkflowsExecutionsList` - Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
