# task

### Available Operations

* [taskPriorityList](#taskprioritylist) - Get default task priority list
* [getCustomTaskTypesOfWg](#getcustomtasktypesofwg) - Get custom task types of workgroup level
* [getDefaultTaskStatusList](#getdefaulttaskstatuslist) - Get default task status list
* [getTaskListOfProject](#gettasklistofproject) - Get task list of project level
* [getTaskListOfWorkgroup](#gettasklistofworkgroup) - Get task list of workgroup level
* [getTaskOfProject](#gettaskofproject) - Get a sepcific task of project level
* [getTaskOfWorkgroup](#gettaskofworkgroup) - Get a sepcific task of workgroup level
* [getTaskTypesOfWorkgroup](#gettasktypesofworkgroup) - Get task types of workgroup level
* [getWgTaskStatusListOfWorkgroup](#getwgtaskstatuslistofworkgroup) - Get custom task status of workgroup level
* [postTaskForProjectJson](#posttaskforprojectjson) - Create a new task
* [postTaskForProjectRaw](#posttaskforprojectraw) - Create a new task

## taskPriorityList

Get default task priority list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskPriorityListRequest;
import org.openapis.openapi.models.operations.TaskPriorityListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskPriorityListRequest req = new TaskPriorityListRequest("maxime");            

            TaskPriorityListResponse res = sdk.task.taskPriorityList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomTaskTypesOfWg

Get custom task types of workgroup level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomTaskTypesOfWgRequest;
import org.openapis.openapi.models.operations.GetCustomTaskTypesOfWgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomTaskTypesOfWgRequest req = new GetCustomTaskTypesOfWgRequest("pariatur");            

            GetCustomTaskTypesOfWgResponse res = sdk.task.getCustomTaskTypesOfWg(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDefaultTaskStatusList

Get default task status list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDefaultTaskStatusListRequest;
import org.openapis.openapi.models.operations.GetDefaultTaskStatusListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDefaultTaskStatusListRequest req = new GetDefaultTaskStatusListRequest("soluta");            

            GetDefaultTaskStatusListResponse res = sdk.task.getDefaultTaskStatusList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaskListOfProject

Get task list of project level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskListOfProjectRequest;
import org.openapis.openapi.models.operations.GetTaskListOfProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaskListOfProjectRequest req = new GetTaskListOfProjectRequest("dicta", "laborum");            

            GetTaskListOfProjectResponse res = sdk.task.getTaskListOfProject(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaskListOfWorkgroup

Get task list of workgroup level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskListOfWorkgroupRequest;
import org.openapis.openapi.models.operations.GetTaskListOfWorkgroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaskListOfWorkgroupRequest req = new GetTaskListOfWorkgroupRequest("totam");            

            GetTaskListOfWorkgroupResponse res = sdk.task.getTaskListOfWorkgroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaskOfProject

Get a sepcific task of project level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskOfProjectRequest;
import org.openapis.openapi.models.operations.GetTaskOfProjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaskOfProjectRequest req = new GetTaskOfProjectRequest("incidunt", "aspernatur", "dolores");            

            GetTaskOfProjectResponse res = sdk.task.getTaskOfProject(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaskOfWorkgroup

Get a sepcific task of workgroup level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskOfWorkgroupRequest;
import org.openapis.openapi.models.operations.GetTaskOfWorkgroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaskOfWorkgroupRequest req = new GetTaskOfWorkgroupRequest("distinctio", "facilis");            

            GetTaskOfWorkgroupResponse res = sdk.task.getTaskOfWorkgroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaskTypesOfWorkgroup

Get task types of workgroup level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskTypesOfWorkgroupRequest;
import org.openapis.openapi.models.operations.GetTaskTypesOfWorkgroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaskTypesOfWorkgroupRequest req = new GetTaskTypesOfWorkgroupRequest("aliquid");            

            GetTaskTypesOfWorkgroupResponse res = sdk.task.getTaskTypesOfWorkgroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWgTaskStatusListOfWorkgroup

Get custom task status of workgroup level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWgTaskStatusListOfWorkgroupRequest;
import org.openapis.openapi.models.operations.GetWgTaskStatusListOfWorkgroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWgTaskStatusListOfWorkgroupRequest req = new GetWgTaskStatusListOfWorkgroupRequest("quam");            

            GetWgTaskStatusListOfWorkgroupResponse res = sdk.task.getWgTaskStatusListOfWorkgroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTaskForProjectJson

Create a new task

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTaskForProjectJsonRequest;
import org.openapis.openapi.models.operations.PostTaskForProjectJsonResponse;
import org.openapis.openapi.models.shared.TaskPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostTaskForProjectJsonRequest req = new PostTaskForProjectJsonRequest("molestias", "temporibus") {{
                taskPersistVO = new TaskPersistVO() {{
                    actualDuration = 1.1;
                    actualDurationHour = 1.1;
                    actualEndDate = LocalDate.parse("2022-10-18");
                    actualStartDate = LocalDate.parse("2022-11-01");
                    assignToUserId = 1L;
                    comments = "sample comments";
                    contributors = "sample contributors";
                    customStatusId = 1L;
                    description = "sample description";
                    name = "sample name";
                    percentageComplete = 1L;
                    priority = 1L;
                    revisedDuration = 1.1;
                    revisedDurationHour = 1.1;
                    revisedEndDate = LocalDate.parse("2022-11-16");
                    revisedStartDate = LocalDate.parse("2022-04-12");
                    statusId = 1L;
                    taskId = 1L;
                    taskTypeId = 1L;
                }};;
            }};            

            PostTaskForProjectJsonResponse res = sdk.task.postTaskForProjectJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTaskForProjectRaw

Create a new task

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTaskForProjectRawRequest;
import org.openapis.openapi.models.operations.PostTaskForProjectRawResponse;
import org.openapis.openapi.models.shared.TaskPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostTaskForProjectRawRequest req = new PostTaskForProjectRawRequest("hic", "voluptatem") {{
                requestBody = "cumque".getBytes();
            }};            

            PostTaskForProjectRawResponse res = sdk.task.postTaskForProjectRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
