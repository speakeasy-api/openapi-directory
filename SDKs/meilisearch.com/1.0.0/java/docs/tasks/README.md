# tasks

### Available Operations

* [cancelTasks](#canceltasks) - Cancel tasks
* [deleteTasks](#deletetasks) - Delete tasks
* [getAllTasks](#getalltasks) - Get all tasks
* [getOneTask](#getonetask) - Get one task

## cancelTasks

Cancel tasks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelTasksRequest;
import org.openapis.openapi.models.operations.CancelTasksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelTasksRequest req = new CancelTasksRequest() {{
                afterEnqueuedAt = "nam";
                afterFinishedAt = "officia";
                afterStartedAt = "occaecati";
                beforeEnqueuedAt = "fugit";
                beforeFinishedAt = "deleniti";
                beforeStartedAt = "hic";
                canceledBy = "optio";
                from = "10";
                indexUids = "books";
                limit = "2";
                statuses = "failed";
                types = "documentAdditionOrUpdate";
                uids = "totam";
            }};            

            CancelTasksResponse res = sdk.tasks.cancelTasks(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTasks

Delete tasks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTasksRequest;
import org.openapis.openapi.models.operations.DeleteTasksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTasksRequest req = new DeleteTasksRequest() {{
                afterEnqueuedAt = "beatae";
                afterFinishedAt = "commodi";
                afterStartedAt = "molestiae";
                beforeEnqueuedAt = "modi";
                beforeFinishedAt = "qui";
                beforeStartedAt = "impedit";
                canceledBy = "cum";
                from = "10";
                indexUids = "books";
                limit = "2";
                statuses = "failed";
                types = "documentAdditionOrUpdate";
                uids = "esse";
            }};            

            DeleteTasksResponse res = sdk.tasks.deleteTasks(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllTasks

Get all tasks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllTasksRequest;
import org.openapis.openapi.models.operations.GetAllTasksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllTasksRequest req = new GetAllTasksRequest() {{
                afterEnqueuedAt = "ipsum";
                afterFinishedAt = "excepturi";
                afterStartedAt = "aspernatur";
                beforeEnqueuedAt = "perferendis";
                beforeFinishedAt = "ad";
                beforeStartedAt = "natus";
                canceledBy = "sed";
                from = "10";
                indexUids = "books";
                limit = "2";
                statuses = "failed";
                types = "documentAdditionOrUpdate";
                uids = "3";
            }};            

            GetAllTasksResponse res = sdk.tasks.getAllTasks(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOneTask

Get one task

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOneTaskResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOneTaskResponse res = sdk.tasks.getOneTask();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
