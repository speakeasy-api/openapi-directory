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

import org.openapis.openapi.models.operations.CreateActivitySecurity;
import org.openapis.openapi.models.operations.CreateActivityCreateActivityRequest;
import org.openapis.openapi.models.operations.CreateActivityRequest;
import org.openapis.openapi.models.operations.CreateActivityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateActivityRequest req = new CreateActivityRequest() {{
                requestBody = new CreateActivityCreateActivityRequest() {{
                    available = false;
                    friendlyName = "corrupti";
                }};
                workspaceSid = "provident";
            }}            

            CreateActivityResponse res = sdk.createActivity(req, new CreateActivitySecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceActivity.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createActivity`
* `createTask`
* `createTaskChannel`
* `createTaskQueue`
* `createWorker`
* `createWorkflow`
* `createWorkspace`
* `deleteActivity`
* `deleteTask`
* `deleteTaskChannel`
* `deleteTaskQueue`
* `deleteWorker`
* `deleteWorkflow`
* `deleteWorkspace`
* `fetchActivity`
* `fetchEvent`
* `fetchTask`
* `fetchTaskChannel`
* `fetchTaskQueue`
* `fetchTaskQueueCumulativeStatistics`
* `fetchTaskQueueRealTimeStatistics`
* `fetchTaskQueueStatistics`
* `fetchTaskReservation`
* `fetchWorker`
* `fetchWorkerChannel`
* `fetchWorkerInstanceStatistics`
* `fetchWorkerReservation`
* `fetchWorkerStatistics`
* `fetchWorkersCumulativeStatistics`
* `fetchWorkersRealTimeStatistics`
* `fetchWorkflow`
* `fetchWorkflowCumulativeStatistics`
* `fetchWorkflowRealTimeStatistics`
* `fetchWorkflowStatistics`
* `fetchWorkspace`
* `fetchWorkspaceCumulativeStatistics`
* `fetchWorkspaceRealTimeStatistics`
* `fetchWorkspaceStatistics`
* `listActivity`
* `listEvent`
* `listTask`
* `listTaskChannel`
* `listTaskQueue`
* `listTaskQueuesStatistics`
* `listTaskReservation`
* `listWorker`
* `listWorkerChannel`
* `listWorkerReservation`
* `listWorkflow`
* `listWorkspace`
* `updateActivity`
* `updateTask`
* `updateTaskChannel`
* `updateTaskQueue`
* `updateTaskReservation`
* `updateWorker`
* `updateWorkerChannel`
* `updateWorkerReservation`
* `updateWorkflow`
* `updateWorkspace`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
