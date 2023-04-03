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

import org.openapis.openapi.models.operations.TasksTasklistsDeleteSecurity;
import org.openapis.openapi.models.operations.TasksTasklistsDeleteRequest;
import org.openapis.openapi.models.operations.TasksTasklistsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasklistsDeleteRequest req = new TasksTasklistsDeleteRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "illum";
                tasklist = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }}            

            TasksTasklistsDeleteResponse res = sdk.tasklists.tasksTasklistsDelete(req, new TasksTasklistsDeleteSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### tasklists

* `tasksTasklistsDelete` - Deletes the authenticated user's specified task list.
* `tasksTasklistsGet` - Returns the authenticated user's specified task list.
* `tasksTasklistsInsert` - Creates a new task list and adds it to the authenticated user's task lists.
* `tasksTasklistsList` - Returns all the authenticated user's task lists.
* `tasksTasklistsPatch` - Updates the authenticated user's specified task list. This method supports patch semantics.
* `tasksTasklistsUpdate` - Updates the authenticated user's specified task list.

### tasks

* `tasksTasksClear` - Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
* `tasksTasksDelete` - Deletes the specified task from the task list.
* `tasksTasksGet` - Returns the specified task.
* `tasksTasksInsert` - Creates a new task on the specified task list.
* `tasksTasksList` - Returns all tasks in the specified task list.
* `tasksTasksMove` - Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
* `tasksTasksPatch` - Updates the specified task. This method supports patch semantics.
* `tasksTasksUpdate` - Updates the specified task.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
