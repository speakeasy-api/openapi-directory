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
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.WorkflowsProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkflowsProjectsLocationsListRequest req = new WorkflowsProjectsLocationsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            WorkflowsProjectsLocationsListResponse res = sdk.projects.workflowsProjectsLocationsList(req, new WorkflowsProjectsLocationsListSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [workflowsProjectsLocationsList](docs/projects/README.md#workflowsprojectslocationslist) - Lists information about the supported locations for this service.
* [workflowsProjectsLocationsOperationsList](docs/projects/README.md#workflowsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [workflowsProjectsLocationsWorkflowsCreate](docs/projects/README.md#workflowsprojectslocationsworkflowscreate) - Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation returns a ALREADY_EXISTS error.
* [workflowsProjectsLocationsWorkflowsDelete](docs/projects/README.md#workflowsprojectslocationsworkflowsdelete) - Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.
* [workflowsProjectsLocationsWorkflowsGet](docs/projects/README.md#workflowsprojectslocationsworkflowsget) - Gets details of a single workflow.
* [workflowsProjectsLocationsWorkflowsList](docs/projects/README.md#workflowsprojectslocationsworkflowslist) - Lists workflows in a given project and location. The default order is not specified.
* [workflowsProjectsLocationsWorkflowsPatch](docs/projects/README.md#workflowsprojectslocationsworkflowspatch) - Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow might be created as a result of a successful update operation. In that case, the new revision is used in new workflow executions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
