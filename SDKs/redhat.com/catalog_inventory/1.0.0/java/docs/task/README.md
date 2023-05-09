# task

### Available Operations

* [listTasks](#listtasks) - List Tasks
* [showTask](#showtask) - Show an existing Task
* [updateTask](#updatetask) - Update an existing Task

## listTasks

Returns an array of Task objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTasksRequest;
import org.openapis.openapi.models.operations.ListTasksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab", "soluta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListTasksRequest req = new ListTasksRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("iusto", "voluptate");
                    put("dolorum", "deleniti");
                    put("omnis", "necessitatibus");
                }};
                limit = 714697L;
                offset = 990339L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("ipsum", "voluptate");
                    put("id", "saepe");
                }};
            }};            

            ListTasksResponse res = sdk.task.listTasks(req);

            if (res.tasksCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## showTask

Returns a Task object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShowTaskRequest;
import org.openapis.openapi.models.operations.ShowTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius", "aspernatur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ShowTaskRequest req = new ShowTaskRequest("perferendis");            

            ShowTaskResponse res = sdk.task.showTask(req);

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTask

Updates a Task object

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskRequest;
import org.openapis.openapi.models.operations.UpdateTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskInput;
import org.openapis.openapi.models.shared.TaskStateEnum;
import org.openapis.openapi.models.shared.TaskStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet", "optio") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            UpdateTaskRequest req = new UpdateTaskRequest(                new TaskInput() {{
                                completedAt = OffsetDateTime.parse("2022-01-15T13:56:57.287Z");
                                message = "received message starting inventory collection";
                                name = "Order Service Plan";
                                output = new java.util.HashMap<String, Object>() {{
                                    put("suscipit", "deserunt");
                                    put("provident", "minima");
                                    put("repellendus", "totam");
                                    put("similique", "alias");
                                }};
                                state = TaskStateEnum.RUNNING;
                                status = TaskStatusEnum.ERROR;
                                targetSourceRef = "at";
                                targetType = "quaerat";
                                type = "CloudConnectorTask";
                            }};, "tempora");            

            UpdateTaskResponse res = sdk.task.updateTask(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
