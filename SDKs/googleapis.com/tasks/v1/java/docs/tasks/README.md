# tasks

### Available Operations

* [tasksTasksClear](#taskstasksclear) - Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
* [tasksTasksDelete](#taskstasksdelete) - Deletes the specified task from the task list.
* [tasksTasksGet](#taskstasksget) - Returns the specified task.
* [tasksTasksInsert](#taskstasksinsert) - Creates a new task on the specified task list.
* [tasksTasksList](#taskstaskslist) - Returns all tasks in the specified task list.
* [tasksTasksMove](#taskstasksmove) - Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
* [tasksTasksPatch](#taskstaskspatch) - Updates the specified task. This method supports patch semantics.
* [tasksTasksUpdate](#taskstasksupdate) - Updates the specified task.

## tasksTasksClear

Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasksClearRequest;
import org.openapis.openapi.models.operations.TasksTasksClearResponse;
import org.openapis.openapi.models.operations.TasksTasksClearSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasksClearRequest req = new TasksTasksClearRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                key = "labore";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "non";
                uploadProtocol = "eligendi";
            }};            

            TasksTasksClearResponse res = sdk.tasks.tasksTasksClear(req, new TasksTasksClearSecurity("sint", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksTasksDelete

Deletes the specified task from the task list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasksDeleteRequest;
import org.openapis.openapi.models.operations.TasksTasksDeleteResponse;
import org.openapis.openapi.models.operations.TasksTasksDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasksDeleteRequest req = new TasksTasksDeleteRequest("provident", "necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "a";
                key = "dolorum";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "illum";
                uploadProtocol = "maiores";
            }};            

            TasksTasksDeleteResponse res = sdk.tasks.tasksTasksDelete(req, new TasksTasksDeleteSecurity("rerum", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksTasksGet

Returns the specified task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasksGetRequest;
import org.openapis.openapi.models.operations.TasksTasksGetResponse;
import org.openapis.openapi.models.operations.TasksTasksGetSecurity;
import org.openapis.openapi.models.operations.TasksTasksGetSecurityOption1;
import org.openapis.openapi.models.operations.TasksTasksGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasksGetRequest req = new TasksTasksGetRequest("magnam", "cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "accusamus";
                key = "non";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "accusamus";
                uploadProtocol = "delectus";
            }};            

            TasksTasksGetResponse res = sdk.tasks.tasksTasksGet(req, new TasksTasksGetSecurity() {{
                option1 = new TasksTasksGetSecurityOption1("quidem", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksTasksInsert

Creates a new task on the specified task list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasksInsertRequest;
import org.openapis.openapi.models.operations.TasksTasksInsertResponse;
import org.openapis.openapi.models.operations.TasksTasksInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Task;
import org.openapis.openapi.models.shared.TaskLinks;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasksInsertRequest req = new TasksTasksInsertRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                task = new Task() {{
                    completed = "blanditiis";
                    deleted = false;
                    due = "deleniti";
                    etag = "sapiente";
                    hidden = false;
                    id = "3a669970-74ba-4446-9b6e-2141959890af";
                    kind = "mollitia";
                    links = new org.openapis.openapi.models.shared.TaskLinks[]{{
                        add(new TaskLinks() {{
                            description = "eum";
                            link = "dolor";
                            type = "necessitatibus";
                        }}),
                        add(new TaskLinks() {{
                            description = "odit";
                            link = "nemo";
                            type = "quasi";
                        }}),
                    }};
                    notes = "iure";
                    parent = "doloribus";
                    position = "debitis";
                    selfLink = "eius";
                    status = "maxime";
                    title = "Ms.";
                    updated = "facilis";
                }};;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "architecto";
                fields = "repudiandae";
                key = "ullam";
                oauthToken = "expedita";
                parent = "nihil";
                prettyPrint = false;
                previous = "repellat";
                quotaUser = "quibusdam";
                uploadType = "sed";
                uploadProtocol = "saepe";
            }};            

            TasksTasksInsertResponse res = sdk.tasks.tasksTasksInsert(req, new TasksTasksInsertSecurity("pariatur", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksTasksList

Returns all tasks in the specified task list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasksListRequest;
import org.openapis.openapi.models.operations.TasksTasksListResponse;
import org.openapis.openapi.models.operations.TasksTasksListSecurity;
import org.openapis.openapi.models.operations.TasksTasksListSecurityOption1;
import org.openapis.openapi.models.operations.TasksTasksListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasksListRequest req = new TasksTasksListRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "sunt";
                completedMax = "quo";
                completedMin = "illum";
                dueMax = "pariatur";
                dueMin = "maxime";
                fields = "ea";
                key = "excepturi";
                maxResults = 139972L;
                oauthToken = "ea";
                pageToken = "accusantium";
                prettyPrint = false;
                quotaUser = "ab";
                showCompleted = false;
                showDeleted = false;
                showHidden = false;
                updatedMin = "maiores";
                uploadType = "quidem";
                uploadProtocol = "ipsam";
            }};            

            TasksTasksListResponse res = sdk.tasks.tasksTasksList(req, new TasksTasksListSecurity() {{
                option1 = new TasksTasksListSecurityOption1("voluptate", "autem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.tasks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksTasksMove

Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasksMoveRequest;
import org.openapis.openapi.models.operations.TasksTasksMoveResponse;
import org.openapis.openapi.models.operations.TasksTasksMoveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasksMoveRequest req = new TasksTasksMoveRequest("nam", "eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "fugiat";
                key = "amet";
                oauthToken = "aut";
                parent = "cumque";
                prettyPrint = false;
                previous = "corporis";
                quotaUser = "hic";
                uploadType = "libero";
                uploadProtocol = "nobis";
            }};            

            TasksTasksMoveResponse res = sdk.tasks.tasksTasksMove(req, new TasksTasksMoveSecurity("dolores", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksTasksPatch

Updates the specified task. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasksPatchRequest;
import org.openapis.openapi.models.operations.TasksTasksPatchResponse;
import org.openapis.openapi.models.operations.TasksTasksPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Task;
import org.openapis.openapi.models.shared.TaskLinks;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasksPatchRequest req = new TasksTasksPatchRequest("totam", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                task1 = new Task() {{
                    completed = "quis";
                    deleted = false;
                    due = "nesciunt";
                    etag = "eos";
                    hidden = false;
                    id = "02c73d5f-e9b9-40c2-8909-b3fe49a8d9cb";
                    kind = "delectus";
                    links = new org.openapis.openapi.models.shared.TaskLinks[]{{
                        add(new TaskLinks() {{
                            description = "quos";
                            link = "aliquid";
                            type = "dolorem";
                        }}),
                        add(new TaskLinks() {{
                            description = "dolorem";
                            link = "dolor";
                            type = "qui";
                        }}),
                    }};
                    notes = "ipsum";
                    parent = "hic";
                    position = "excepturi";
                    selfLink = "cum";
                    status = "voluptate";
                    title = "Ms.";
                    updated = "reiciendis";
                }};;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "veritatis";
                key = "ipsa";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "odio";
                uploadProtocol = "quaerat";
            }};            

            TasksTasksPatchResponse res = sdk.tasks.tasksTasksPatch(req, new TasksTasksPatchSecurity("accusamus", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksTasksUpdate

Updates the specified task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksTasksUpdateRequest;
import org.openapis.openapi.models.operations.TasksTasksUpdateResponse;
import org.openapis.openapi.models.operations.TasksTasksUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Task;
import org.openapis.openapi.models.shared.TaskLinks;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksTasksUpdateRequest req = new TasksTasksUpdateRequest("voluptatibus", "voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                task1 = new Task() {{
                    completed = "eos";
                    deleted = false;
                    due = "atque";
                    etag = "sit";
                    hidden = false;
                    id = "d1ba77a8-9ebf-4737-ae42-03ce5e6a95d8";
                    kind = "similique";
                    links = new org.openapis.openapi.models.shared.TaskLinks[]{{
                        add(new TaskLinks() {{
                            description = "at";
                            link = "quaerat";
                            type = "tempora";
                        }}),
                    }};
                    notes = "vel";
                    parent = "quod";
                    position = "officiis";
                    selfLink = "qui";
                    status = "dolorum";
                    title = "Dr.";
                    updated = "esse";
                }};;
                accessToken = "harum";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "quisquam";
                key = "tenetur";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "accusamus";
                uploadProtocol = "numquam";
            }};            

            TasksTasksUpdateResponse res = sdk.tasks.tasksTasksUpdate(req, new TasksTasksUpdateSecurity("enim", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
