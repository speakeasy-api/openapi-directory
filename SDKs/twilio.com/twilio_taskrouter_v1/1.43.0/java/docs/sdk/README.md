# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createActivity](#createactivity)
* [createTask](#createtask)
* [createTaskChannel](#createtaskchannel)
* [createTaskQueue](#createtaskqueue)
* [createWorker](#createworker)
* [createWorkflow](#createworkflow)
* [createWorkspace](#createworkspace)
* [deleteActivity](#deleteactivity)
* [deleteTask](#deletetask)
* [deleteTaskChannel](#deletetaskchannel)
* [deleteTaskQueue](#deletetaskqueue)
* [deleteWorker](#deleteworker)
* [deleteWorkflow](#deleteworkflow)
* [deleteWorkspace](#deleteworkspace)
* [fetchActivity](#fetchactivity)
* [fetchEvent](#fetchevent)
* [fetchTask](#fetchtask)
* [fetchTaskChannel](#fetchtaskchannel)
* [fetchTaskQueue](#fetchtaskqueue)
* [fetchTaskQueueCumulativeStatistics](#fetchtaskqueuecumulativestatistics)
* [fetchTaskQueueRealTimeStatistics](#fetchtaskqueuerealtimestatistics)
* [fetchTaskQueueStatistics](#fetchtaskqueuestatistics)
* [fetchTaskReservation](#fetchtaskreservation)
* [fetchWorker](#fetchworker)
* [fetchWorkerChannel](#fetchworkerchannel)
* [fetchWorkerInstanceStatistics](#fetchworkerinstancestatistics)
* [fetchWorkerReservation](#fetchworkerreservation)
* [fetchWorkerStatistics](#fetchworkerstatistics)
* [fetchWorkersCumulativeStatistics](#fetchworkerscumulativestatistics)
* [fetchWorkersRealTimeStatistics](#fetchworkersrealtimestatistics)
* [fetchWorkflow](#fetchworkflow)
* [fetchWorkflowCumulativeStatistics](#fetchworkflowcumulativestatistics)
* [fetchWorkflowRealTimeStatistics](#fetchworkflowrealtimestatistics)
* [fetchWorkflowStatistics](#fetchworkflowstatistics)
* [fetchWorkspace](#fetchworkspace)
* [fetchWorkspaceCumulativeStatistics](#fetchworkspacecumulativestatistics)
* [fetchWorkspaceRealTimeStatistics](#fetchworkspacerealtimestatistics)
* [fetchWorkspaceStatistics](#fetchworkspacestatistics)
* [listActivity](#listactivity)
* [listEvent](#listevent)
* [listTask](#listtask)
* [listTaskChannel](#listtaskchannel)
* [listTaskQueue](#listtaskqueue)
* [listTaskQueuesStatistics](#listtaskqueuesstatistics)
* [listTaskReservation](#listtaskreservation)
* [listWorker](#listworker)
* [listWorkerChannel](#listworkerchannel)
* [listWorkerReservation](#listworkerreservation)
* [listWorkflow](#listworkflow)
* [listWorkspace](#listworkspace)
* [updateActivity](#updateactivity)
* [updateTask](#updatetask)
* [updateTaskChannel](#updatetaskchannel)
* [updateTaskQueue](#updatetaskqueue)
* [updateTaskReservation](#updatetaskreservation)
* [updateWorker](#updateworker)
* [updateWorkerChannel](#updateworkerchannel)
* [updateWorkerReservation](#updateworkerreservation)
* [updateWorkflow](#updateworkflow)
* [updateWorkspace](#updateworkspace)

## createActivity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateActivityCreateActivityRequest;
import org.openapis.openapi.models.operations.CreateActivityRequest;
import org.openapis.openapi.models.operations.CreateActivityResponse;
import org.openapis.openapi.models.operations.CreateActivitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateActivityRequest req = new CreateActivityRequest("unde") {{
                requestBody = new CreateActivityCreateActivityRequest("nulla") {{
                    available = false;
                }};;
            }};            

            CreateActivityResponse res = sdk.sdk.createActivity(req, new CreateActivitySecurity("corrupti", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceActivity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTaskCreateTaskRequest;
import org.openapis.openapi.models.operations.CreateTaskRequest;
import org.openapis.openapi.models.operations.CreateTaskResponse;
import org.openapis.openapi.models.operations.CreateTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTaskRequest req = new CreateTaskRequest("vel") {{
                requestBody = new CreateTaskCreateTaskRequest() {{
                    attributes = "error";
                    priority = 645894L;
                    taskChannel = "suscipit";
                    timeout = 437587L;
                    workflowSid = "magnam";
                }};;
            }};            

            CreateTaskResponse res = sdk.sdk.createTask(req, new CreateTaskSecurity("debitis", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTaskChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTaskChannelCreateTaskChannelRequest;
import org.openapis.openapi.models.operations.CreateTaskChannelRequest;
import org.openapis.openapi.models.operations.CreateTaskChannelResponse;
import org.openapis.openapi.models.operations.CreateTaskChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTaskChannelRequest req = new CreateTaskChannelRequest("delectus") {{
                requestBody = new CreateTaskChannelCreateTaskChannelRequest("tempora", "suscipit") {{
                    channelOptimizedRouting = false;
                }};;
            }};            

            CreateTaskChannelResponse res = sdk.sdk.createTaskChannel(req, new CreateTaskChannelSecurity("molestiae", "minus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTaskChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTaskQueue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTaskQueueCreateTaskQueueRequest;
import org.openapis.openapi.models.operations.CreateTaskQueueRequest;
import org.openapis.openapi.models.operations.CreateTaskQueueResponse;
import org.openapis.openapi.models.operations.CreateTaskQueueSecurity;
import org.openapis.openapi.models.shared.TaskQueueEnumTaskOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTaskQueueRequest req = new CreateTaskQueueRequest("placeat") {{
                requestBody = new CreateTaskQueueCreateTaskQueueRequest("voluptatum") {{
                    assignmentActivitySid = "iusto";
                    maxReservedWorkers = 568045L;
                    reservationActivitySid = "nisi";
                    targetWorkers = "recusandae";
                    taskOrder = TaskQueueEnumTaskOrderEnum.LIFO;
                }};;
            }};            

            CreateTaskQueueResponse res = sdk.sdk.createTaskQueue(req, new CreateTaskQueueSecurity("ab", "quis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTaskQueue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkerCreateWorkerRequest;
import org.openapis.openapi.models.operations.CreateWorkerRequest;
import org.openapis.openapi.models.operations.CreateWorkerResponse;
import org.openapis.openapi.models.operations.CreateWorkerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWorkerRequest req = new CreateWorkerRequest("veritatis") {{
                requestBody = new CreateWorkerCreateWorkerRequest("deserunt") {{
                    activitySid = "perferendis";
                    attributes = "ipsam";
                }};;
            }};            

            CreateWorkerResponse res = sdk.sdk.createWorker(req, new CreateWorkerSecurity("repellendus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorker != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkflow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkflowCreateWorkflowRequest;
import org.openapis.openapi.models.operations.CreateWorkflowRequest;
import org.openapis.openapi.models.operations.CreateWorkflowResponse;
import org.openapis.openapi.models.operations.CreateWorkflowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWorkflowRequest req = new CreateWorkflowRequest("quo") {{
                requestBody = new CreateWorkflowCreateWorkflowRequest("odit", "at") {{
                    assignmentCallbackUrl = "https://wonderful-investor.net";
                    fallbackAssignmentCallbackUrl = "https://jumbo-lobotomy.net";
                    taskReservationTimeout = 678880L;
                }};;
            }};            

            CreateWorkflowResponse res = sdk.sdk.createWorkflow(req, new CreateWorkflowSecurity("dicta", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkflow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkspaceCreateWorkspaceRequest;
import org.openapis.openapi.models.operations.CreateWorkspaceResponse;
import org.openapis.openapi.models.operations.CreateWorkspaceSecurity;
import org.openapis.openapi.models.shared.WorkspaceEnumQueueOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWorkspaceCreateWorkspaceRequest req = new CreateWorkspaceCreateWorkspaceRequest("officia") {{
                eventCallbackUrl = "https://cool-mandarin.org";
                eventsFilter = "optio";
                multiTaskEnabled = false;
                prioritizeQueueOrder = WorkspaceEnumQueueOrderEnum.LIFO;
                template = "beatae";
            }};            

            CreateWorkspaceResponse res = sdk.sdk.createWorkspace(req, new CreateWorkspaceSecurity("commodi", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1Workspace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteActivity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteActivityRequest;
import org.openapis.openapi.models.operations.DeleteActivityResponse;
import org.openapis.openapi.models.operations.DeleteActivitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteActivityRequest req = new DeleteActivityRequest("modi", "qui");            

            DeleteActivityResponse res = sdk.sdk.deleteActivity(req, new DeleteActivitySecurity("impedit", "cum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTaskRequest;
import org.openapis.openapi.models.operations.DeleteTaskResponse;
import org.openapis.openapi.models.operations.DeleteTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTaskRequest req = new DeleteTaskRequest("esse", "ipsum") {{
                ifMatch = "excepturi";
            }};            

            DeleteTaskResponse res = sdk.sdk.deleteTask(req, new DeleteTaskSecurity("aspernatur", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteTaskChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTaskChannelRequest;
import org.openapis.openapi.models.operations.DeleteTaskChannelResponse;
import org.openapis.openapi.models.operations.DeleteTaskChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTaskChannelRequest req = new DeleteTaskChannelRequest("ad", "natus");            

            DeleteTaskChannelResponse res = sdk.sdk.deleteTaskChannel(req, new DeleteTaskChannelSecurity("sed", "iste") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteTaskQueue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTaskQueueRequest;
import org.openapis.openapi.models.operations.DeleteTaskQueueResponse;
import org.openapis.openapi.models.operations.DeleteTaskQueueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTaskQueueRequest req = new DeleteTaskQueueRequest("dolor", "natus");            

            DeleteTaskQueueResponse res = sdk.sdk.deleteTaskQueue(req, new DeleteTaskQueueSecurity("laboriosam", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteWorker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkerRequest;
import org.openapis.openapi.models.operations.DeleteWorkerResponse;
import org.openapis.openapi.models.operations.DeleteWorkerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkerRequest req = new DeleteWorkerRequest("saepe", "fuga") {{
                ifMatch = "in";
            }};            

            DeleteWorkerResponse res = sdk.sdk.deleteWorker(req, new DeleteWorkerSecurity("corporis", "iste") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteWorkflow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkflowRequest;
import org.openapis.openapi.models.operations.DeleteWorkflowResponse;
import org.openapis.openapi.models.operations.DeleteWorkflowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkflowRequest req = new DeleteWorkflowRequest("iure", "saepe");            

            DeleteWorkflowResponse res = sdk.sdk.deleteWorkflow(req, new DeleteWorkflowSecurity("quidem", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteWorkspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceResponse;
import org.openapis.openapi.models.operations.DeleteWorkspaceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspaceRequest req = new DeleteWorkspaceRequest("ipsa");            

            DeleteWorkspaceResponse res = sdk.sdk.deleteWorkspace(req, new DeleteWorkspaceSecurity("reiciendis", "est") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## fetchActivity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchActivityRequest;
import org.openapis.openapi.models.operations.FetchActivityResponse;
import org.openapis.openapi.models.operations.FetchActivitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchActivityRequest req = new FetchActivityRequest("mollitia", "laborum");            

            FetchActivityResponse res = sdk.sdk.fetchActivity(req, new FetchActivitySecurity("dolores", "dolorem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceActivity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchEvent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEventRequest;
import org.openapis.openapi.models.operations.FetchEventResponse;
import org.openapis.openapi.models.operations.FetchEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEventRequest req = new FetchEventRequest("corporis", "explicabo");            

            FetchEventResponse res = sdk.sdk.fetchEvent(req, new FetchEventSecurity("nobis", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTaskRequest;
import org.openapis.openapi.models.operations.FetchTaskResponse;
import org.openapis.openapi.models.operations.FetchTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTaskRequest req = new FetchTaskRequest("omnis", "nemo");            

            FetchTaskResponse res = sdk.sdk.fetchTask(req, new FetchTaskSecurity("minima", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTaskChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTaskChannelRequest;
import org.openapis.openapi.models.operations.FetchTaskChannelResponse;
import org.openapis.openapi.models.operations.FetchTaskChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTaskChannelRequest req = new FetchTaskChannelRequest("accusantium", "iure");            

            FetchTaskChannelResponse res = sdk.sdk.fetchTaskChannel(req, new FetchTaskChannelSecurity("culpa", "doloribus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTaskChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTaskQueue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTaskQueueRequest;
import org.openapis.openapi.models.operations.FetchTaskQueueResponse;
import org.openapis.openapi.models.operations.FetchTaskQueueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTaskQueueRequest req = new FetchTaskQueueRequest("sapiente", "architecto");            

            FetchTaskQueueResponse res = sdk.sdk.fetchTaskQueue(req, new FetchTaskQueueSecurity("mollitia", "dolorem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTaskQueue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTaskQueueCumulativeStatistics

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTaskQueueCumulativeStatisticsRequest;
import org.openapis.openapi.models.operations.FetchTaskQueueCumulativeStatisticsResponse;
import org.openapis.openapi.models.operations.FetchTaskQueueCumulativeStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTaskQueueCumulativeStatisticsRequest req = new FetchTaskQueueCumulativeStatisticsRequest("culpa", "consequuntur") {{
                endDate = OffsetDateTime.parse("2021-01-15T20:18:47.519Z");
                minutes = 581850L;
                splitByWaitTime = "numquam";
                startDate = OffsetDateTime.parse("2022-07-14T19:07:02.935Z");
                taskChannel = "molestiae";
            }};            

            FetchTaskQueueCumulativeStatisticsResponse res = sdk.sdk.fetchTaskQueueCumulativeStatistics(req, new FetchTaskQueueCumulativeStatisticsSecurity("velit", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTaskQueueRealTimeStatistics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTaskQueueRealTimeStatisticsRequest;
import org.openapis.openapi.models.operations.FetchTaskQueueRealTimeStatisticsResponse;
import org.openapis.openapi.models.operations.FetchTaskQueueRealTimeStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTaskQueueRealTimeStatisticsRequest req = new FetchTaskQueueRealTimeStatisticsRequest("quia", "quis") {{
                taskChannel = "vitae";
            }};            

            FetchTaskQueueRealTimeStatisticsResponse res = sdk.sdk.fetchTaskQueueRealTimeStatistics(req, new FetchTaskQueueRealTimeStatisticsSecurity("laborum", "animi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTaskQueueStatistics

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTaskQueueStatisticsRequest;
import org.openapis.openapi.models.operations.FetchTaskQueueStatisticsResponse;
import org.openapis.openapi.models.operations.FetchTaskQueueStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTaskQueueStatisticsRequest req = new FetchTaskQueueStatisticsRequest("enim", "odit") {{
                endDate = OffsetDateTime.parse("2022-05-30T17:48:55.594Z");
                minutes = 949572L;
                splitByWaitTime = "ipsam";
                startDate = OffsetDateTime.parse("2021-05-11T16:11:54.761Z");
                taskChannel = "aut";
            }};            

            FetchTaskQueueStatisticsResponse res = sdk.sdk.fetchTaskQueueStatistics(req, new FetchTaskQueueStatisticsSecurity("quasi", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTaskQueueTaskQueueStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTaskReservation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTaskReservationRequest;
import org.openapis.openapi.models.operations.FetchTaskReservationResponse;
import org.openapis.openapi.models.operations.FetchTaskReservationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTaskReservationRequest req = new FetchTaskReservationRequest("temporibus", "laborum", "quasi");            

            FetchTaskReservationResponse res = sdk.sdk.fetchTaskReservation(req, new FetchTaskReservationSecurity("reiciendis", "voluptatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTaskTaskReservation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkerRequest;
import org.openapis.openapi.models.operations.FetchWorkerResponse;
import org.openapis.openapi.models.operations.FetchWorkerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkerRequest req = new FetchWorkerRequest("vero", "nihil");            

            FetchWorkerResponse res = sdk.sdk.fetchWorker(req, new FetchWorkerSecurity("praesentium", "voluptatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorker != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkerChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkerChannelRequest;
import org.openapis.openapi.models.operations.FetchWorkerChannelResponse;
import org.openapis.openapi.models.operations.FetchWorkerChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkerChannelRequest req = new FetchWorkerChannelRequest("ipsa", "omnis", "voluptate");            

            FetchWorkerChannelResponse res = sdk.sdk.fetchWorkerChannel(req, new FetchWorkerChannelSecurity("cum", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkerWorkerChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkerInstanceStatistics

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkerInstanceStatisticsRequest;
import org.openapis.openapi.models.operations.FetchWorkerInstanceStatisticsResponse;
import org.openapis.openapi.models.operations.FetchWorkerInstanceStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkerInstanceStatisticsRequest req = new FetchWorkerInstanceStatisticsRequest("doloremque", "reprehenderit") {{
                endDate = OffsetDateTime.parse("2022-01-08T10:49:12.847Z");
                minutes = 120196L;
                startDate = OffsetDateTime.parse("2022-09-14T21:48:41.971Z");
                taskChannel = "iusto";
            }};            

            FetchWorkerInstanceStatisticsResponse res = sdk.sdk.fetchWorkerInstanceStatistics(req, new FetchWorkerInstanceStatisticsSecurity("dicta", "harum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkerWorkerInstanceStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkerReservation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkerReservationRequest;
import org.openapis.openapi.models.operations.FetchWorkerReservationResponse;
import org.openapis.openapi.models.operations.FetchWorkerReservationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkerReservationRequest req = new FetchWorkerReservationRequest("enim", "accusamus", "commodi");            

            FetchWorkerReservationResponse res = sdk.sdk.fetchWorkerReservation(req, new FetchWorkerReservationSecurity("repudiandae", "quae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkerWorkerReservation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkerStatistics

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkerStatisticsRequest;
import org.openapis.openapi.models.operations.FetchWorkerStatisticsResponse;
import org.openapis.openapi.models.operations.FetchWorkerStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkerStatisticsRequest req = new FetchWorkerStatisticsRequest("ipsum") {{
                endDate = OffsetDateTime.parse("2021-11-14T09:53:27.431Z");
                friendlyName = "excepturi";
                minutes = 865103L;
                startDate = OffsetDateTime.parse("2022-06-29T05:25:54.356Z");
                taskChannel = "rem";
                taskQueueName = "voluptates";
                taskQueueSid = "quasi";
            }};            

            FetchWorkerStatisticsResponse res = sdk.sdk.fetchWorkerStatistics(req, new FetchWorkerStatisticsSecurity("repudiandae", "sint") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkerWorkerStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkersCumulativeStatistics

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkersCumulativeStatisticsRequest;
import org.openapis.openapi.models.operations.FetchWorkersCumulativeStatisticsResponse;
import org.openapis.openapi.models.operations.FetchWorkersCumulativeStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkersCumulativeStatisticsRequest req = new FetchWorkersCumulativeStatisticsRequest("veritatis") {{
                endDate = OffsetDateTime.parse("2022-03-02T21:33:21.372Z");
                minutes = 318569L;
                startDate = OffsetDateTime.parse("2022-05-02T09:29:06.042Z");
                taskChannel = "quibusdam";
            }};            

            FetchWorkersCumulativeStatisticsResponse res = sdk.sdk.fetchWorkersCumulativeStatistics(req, new FetchWorkersCumulativeStatisticsSecurity("explicabo", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkerWorkersCumulativeStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkersRealTimeStatistics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkersRealTimeStatisticsRequest;
import org.openapis.openapi.models.operations.FetchWorkersRealTimeStatisticsResponse;
import org.openapis.openapi.models.operations.FetchWorkersRealTimeStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkersRealTimeStatisticsRequest req = new FetchWorkersRealTimeStatisticsRequest("distinctio") {{
                taskChannel = "quibusdam";
            }};            

            FetchWorkersRealTimeStatisticsResponse res = sdk.sdk.fetchWorkersRealTimeStatistics(req, new FetchWorkersRealTimeStatisticsSecurity("labore", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkflow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkflowRequest;
import org.openapis.openapi.models.operations.FetchWorkflowResponse;
import org.openapis.openapi.models.operations.FetchWorkflowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkflowRequest req = new FetchWorkflowRequest("qui", "aliquid");            

            FetchWorkflowResponse res = sdk.sdk.fetchWorkflow(req, new FetchWorkflowSecurity("cupiditate", "quos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkflow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkflowCumulativeStatistics

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkflowCumulativeStatisticsRequest;
import org.openapis.openapi.models.operations.FetchWorkflowCumulativeStatisticsResponse;
import org.openapis.openapi.models.operations.FetchWorkflowCumulativeStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkflowCumulativeStatisticsRequest req = new FetchWorkflowCumulativeStatisticsRequest("perferendis", "magni") {{
                endDate = OffsetDateTime.parse("2021-11-22T01:26:35.048Z");
                minutes = 4695L;
                splitByWaitTime = "fugit";
                startDate = OffsetDateTime.parse("2021-11-11T04:17:07.569Z");
                taskChannel = "tempora";
            }};            

            FetchWorkflowCumulativeStatisticsResponse res = sdk.sdk.fetchWorkflowCumulativeStatistics(req, new FetchWorkflowCumulativeStatisticsSecurity("facilis", "tempore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkflowRealTimeStatistics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkflowRealTimeStatisticsRequest;
import org.openapis.openapi.models.operations.FetchWorkflowRealTimeStatisticsResponse;
import org.openapis.openapi.models.operations.FetchWorkflowRealTimeStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkflowRealTimeStatisticsRequest req = new FetchWorkflowRealTimeStatisticsRequest("labore", "delectus") {{
                taskChannel = "eum";
            }};            

            FetchWorkflowRealTimeStatisticsResponse res = sdk.sdk.fetchWorkflowRealTimeStatistics(req, new FetchWorkflowRealTimeStatisticsSecurity("non", "eligendi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkflowStatistics

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkflowStatisticsRequest;
import org.openapis.openapi.models.operations.FetchWorkflowStatisticsResponse;
import org.openapis.openapi.models.operations.FetchWorkflowStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkflowStatisticsRequest req = new FetchWorkflowStatisticsRequest("sint", "aliquid") {{
                endDate = OffsetDateTime.parse("2021-03-17T21:24:26.606Z");
                minutes = 572252L;
                splitByWaitTime = "officia";
                startDate = OffsetDateTime.parse("2022-02-09T13:58:59.361Z");
                taskChannel = "a";
            }};            

            FetchWorkflowStatisticsResponse res = sdk.sdk.fetchWorkflowStatistics(req, new FetchWorkflowStatisticsSecurity("dolorum", "in") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkflowWorkflowStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkspaceRequest;
import org.openapis.openapi.models.operations.FetchWorkspaceResponse;
import org.openapis.openapi.models.operations.FetchWorkspaceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkspaceRequest req = new FetchWorkspaceRequest("in");            

            FetchWorkspaceResponse res = sdk.sdk.fetchWorkspace(req, new FetchWorkspaceSecurity("illum", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1Workspace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkspaceCumulativeStatistics

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkspaceCumulativeStatisticsRequest;
import org.openapis.openapi.models.operations.FetchWorkspaceCumulativeStatisticsResponse;
import org.openapis.openapi.models.operations.FetchWorkspaceCumulativeStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkspaceCumulativeStatisticsRequest req = new FetchWorkspaceCumulativeStatisticsRequest("rerum") {{
                endDate = OffsetDateTime.parse("2022-09-14T10:27:07.590Z");
                minutes = 767024L;
                splitByWaitTime = "facere";
                startDate = OffsetDateTime.parse("2022-08-09T06:36:34.417Z");
                taskChannel = "laborum";
            }};            

            FetchWorkspaceCumulativeStatisticsResponse res = sdk.sdk.fetchWorkspaceCumulativeStatistics(req, new FetchWorkspaceCumulativeStatisticsSecurity("accusamus", "non") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkspaceCumulativeStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkspaceRealTimeStatistics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkspaceRealTimeStatisticsRequest;
import org.openapis.openapi.models.operations.FetchWorkspaceRealTimeStatisticsResponse;
import org.openapis.openapi.models.operations.FetchWorkspaceRealTimeStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkspaceRealTimeStatisticsRequest req = new FetchWorkspaceRealTimeStatisticsRequest("occaecati") {{
                taskChannel = "enim";
            }};            

            FetchWorkspaceRealTimeStatisticsResponse res = sdk.sdk.fetchWorkspaceRealTimeStatistics(req, new FetchWorkspaceRealTimeStatisticsSecurity("accusamus", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkspaceRealTimeStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWorkspaceStatistics

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWorkspaceStatisticsRequest;
import org.openapis.openapi.models.operations.FetchWorkspaceStatisticsResponse;
import org.openapis.openapi.models.operations.FetchWorkspaceStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWorkspaceStatisticsRequest req = new FetchWorkspaceStatisticsRequest("quidem") {{
                endDate = OffsetDateTime.parse("2021-07-20T13:32:41.687Z");
                minutes = 659669L;
                splitByWaitTime = "blanditiis";
                startDate = OffsetDateTime.parse("2021-02-02T01:24:52.629Z");
                taskChannel = "amet";
            }};            

            FetchWorkspaceStatisticsResponse res = sdk.sdk.fetchWorkspaceStatistics(req, new FetchWorkspaceStatisticsSecurity("deserunt", "nisi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkspaceStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listActivity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListActivityRequest;
import org.openapis.openapi.models.operations.ListActivityResponse;
import org.openapis.openapi.models.operations.ListActivitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListActivityRequest req = new ListActivityRequest("vel") {{
                available = "natus";
                friendlyName = "omnis";
                page = 474867L;
                pageSize = 19193L;
                pageToken = "nihil";
            }};            

            ListActivityResponse res = sdk.sdk.listActivity(req, new ListActivitySecurity("magnam", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listActivityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEvent

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventRequest;
import org.openapis.openapi.models.operations.ListEventResponse;
import org.openapis.openapi.models.operations.ListEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEventRequest req = new ListEventRequest("id") {{
                endDate = OffsetDateTime.parse("2022-09-17T02:55:11.783Z");
                eventType = "suscipit";
                minutes = 618016L;
                page = 749170L;
                pageSize = 428769L;
                pageToken = "vero";
                reservationSid = "aspernatur";
                sid = "architecto";
                startDate = OffsetDateTime.parse("2022-11-28T06:48:16.205Z");
                taskChannel = "excepturi";
                taskQueueSid = "ullam";
                taskSid = "provident";
                workerSid = "quos";
                workflowSid = "sint";
            }};            

            ListEventResponse res = sdk.sdk.listEvent(req, new ListEventSecurity("accusantium", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listEventResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTaskRequest;
import org.openapis.openapi.models.operations.ListTaskResponse;
import org.openapis.openapi.models.operations.ListTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTaskRequest req = new ListTaskRequest("reiciendis") {{
                assignmentStatus = new String[]{{
                    add("ad"),
                    add("eum"),
                    add("dolor"),
                }};
                evaluateTaskAttributes = "necessitatibus";
                hasAddons = false;
                ordering = "odit";
                page = 367562L;
                pageSize = 97260L;
                pageToken = "iure";
                priority = 984043L;
                taskQueueName = "debitis";
                taskQueueSid = "eius";
                workflowName = "maxime";
                workflowSid = "deleniti";
            }};            

            ListTaskResponse res = sdk.sdk.listTask(req, new ListTaskSecurity("facilis", "in") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTaskChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTaskChannelRequest;
import org.openapis.openapi.models.operations.ListTaskChannelResponse;
import org.openapis.openapi.models.operations.ListTaskChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTaskChannelRequest req = new ListTaskChannelRequest("architecto") {{
                page = 99569L;
                pageSize = 919483L;
                pageToken = "ullam";
            }};            

            ListTaskChannelResponse res = sdk.sdk.listTaskChannel(req, new ListTaskChannelSecurity("expedita", "nihil") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTaskChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTaskQueue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTaskQueueRequest;
import org.openapis.openapi.models.operations.ListTaskQueueResponse;
import org.openapis.openapi.models.operations.ListTaskQueueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTaskQueueRequest req = new ListTaskQueueRequest("repellat") {{
                evaluateWorkerAttributes = "quibusdam";
                friendlyName = "sed";
                ordering = "saepe";
                page = 868126L;
                pageSize = 37559L;
                pageToken = "consequuntur";
                workerSid = "praesentium";
            }};            

            ListTaskQueueResponse res = sdk.sdk.listTaskQueue(req, new ListTaskQueueSecurity("natus", "magni") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTaskQueueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTaskQueuesStatistics

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTaskQueuesStatisticsRequest;
import org.openapis.openapi.models.operations.ListTaskQueuesStatisticsResponse;
import org.openapis.openapi.models.operations.ListTaskQueuesStatisticsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTaskQueuesStatisticsRequest req = new ListTaskQueuesStatisticsRequest("sunt") {{
                endDate = OffsetDateTime.parse("2020-06-16T10:20:37.479Z");
                friendlyName = "pariatur";
                minutes = 807319L;
                page = 411397L;
                pageSize = 569101L;
                pageToken = "odit";
                splitByWaitTime = "ea";
                startDate = OffsetDateTime.parse("2022-12-06T18:05:48.866Z");
                taskChannel = "maiores";
            }};            

            ListTaskQueuesStatisticsResponse res = sdk.sdk.listTaskQueuesStatistics(req, new ListTaskQueuesStatisticsSecurity("quidem", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTaskQueuesStatisticsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTaskReservation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTaskReservationRequest;
import org.openapis.openapi.models.operations.ListTaskReservationResponse;
import org.openapis.openapi.models.operations.ListTaskReservationSecurity;
import org.openapis.openapi.models.shared.TaskReservationEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTaskReservationRequest req = new ListTaskReservationRequest("voluptate", "autem") {{
                page = 722056L;
                pageSize = 50588L;
                pageToken = "pariatur";
                reservationStatus = TaskReservationEnumStatusEnum.REJECTED;
                workerSid = "voluptatibus";
            }};            

            ListTaskReservationResponse res = sdk.sdk.listTaskReservation(req, new ListTaskReservationSecurity("perferendis", "fugiat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTaskReservationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkerRequest;
import org.openapis.openapi.models.operations.ListWorkerResponse;
import org.openapis.openapi.models.operations.ListWorkerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWorkerRequest req = new ListWorkerRequest("amet") {{
                activityName = "aut";
                activitySid = "cumque";
                available = "corporis";
                friendlyName = "hic";
                ordering = "libero";
                page = 749999L;
                pageSize = 171629L;
                pageToken = "quis";
                targetWorkersExpression = "totam";
                taskQueueName = "dignissimos";
                taskQueueSid = "eaque";
            }};            

            ListWorkerResponse res = sdk.sdk.listWorker(req, new ListWorkerSecurity("quis", "nesciunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listWorkerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkerChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkerChannelRequest;
import org.openapis.openapi.models.operations.ListWorkerChannelResponse;
import org.openapis.openapi.models.operations.ListWorkerChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWorkerChannelRequest req = new ListWorkerChannelRequest("eos", "perferendis") {{
                page = 170986L;
                pageSize = 793698L;
                pageToken = "quam";
            }};            

            ListWorkerChannelResponse res = sdk.sdk.listWorkerChannel(req, new ListWorkerChannelSecurity("dolor", "vero") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listWorkerChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkerReservation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkerReservationRequest;
import org.openapis.openapi.models.operations.ListWorkerReservationResponse;
import org.openapis.openapi.models.operations.ListWorkerReservationSecurity;
import org.openapis.openapi.models.shared.WorkerReservationEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWorkerReservationRequest req = new ListWorkerReservationRequest("nostrum", "hic") {{
                page = 928082L;
                pageSize = 608253L;
                pageToken = "facilis";
                reservationStatus = WorkerReservationEnumStatusEnum.CANCELED;
            }};            

            ListWorkerReservationResponse res = sdk.sdk.listWorkerReservation(req, new ListWorkerReservationSecurity("voluptatem", "porro") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listWorkerReservationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkflow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkflowRequest;
import org.openapis.openapi.models.operations.ListWorkflowResponse;
import org.openapis.openapi.models.operations.ListWorkflowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWorkflowRequest req = new ListWorkflowRequest("consequuntur") {{
                friendlyName = "blanditiis";
                page = 621479L;
                pageSize = 50370L;
                pageToken = "occaecati";
            }};            

            ListWorkflowResponse res = sdk.sdk.listWorkflow(req, new ListWorkflowSecurity("rerum", "adipisci") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkspaceRequest;
import org.openapis.openapi.models.operations.ListWorkspaceResponse;
import org.openapis.openapi.models.operations.ListWorkspaceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWorkspaceRequest req = new ListWorkspaceRequest() {{
                friendlyName = "asperiores";
                page = 934214L;
                pageSize = 267262L;
                pageToken = "iste";
            }};            

            ListWorkspaceResponse res = sdk.sdk.listWorkspace(req, new ListWorkspaceSecurity("dolorum", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listWorkspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateActivity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateActivityRequest;
import org.openapis.openapi.models.operations.UpdateActivityResponse;
import org.openapis.openapi.models.operations.UpdateActivitySecurity;
import org.openapis.openapi.models.operations.UpdateActivityUpdateActivityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateActivityRequest req = new UpdateActivityRequest("pariatur", "provident") {{
                requestBody = new UpdateActivityUpdateActivityRequest() {{
                    friendlyName = "nobis";
                }};;
            }};            

            UpdateActivityResponse res = sdk.sdk.updateActivity(req, new UpdateActivitySecurity("libero", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceActivity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTask

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskRequest;
import org.openapis.openapi.models.operations.UpdateTaskResponse;
import org.openapis.openapi.models.operations.UpdateTaskSecurity;
import org.openapis.openapi.models.operations.UpdateTaskUpdateTaskRequest;
import org.openapis.openapi.models.shared.TaskEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTaskRequest req = new UpdateTaskRequest("quaerat", "quos") {{
                ifMatch = "aliquid";
                requestBody = new UpdateTaskUpdateTaskRequest() {{
                    assignmentStatus = TaskEnumStatusEnum.RESERVED;
                    attributes = "dolorem";
                    priority = 222443L;
                    reason = "qui";
                    taskChannel = "ipsum";
                }};;
            }};            

            UpdateTaskResponse res = sdk.sdk.updateTask(req, new UpdateTaskSecurity("hic", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTaskChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskChannelRequest;
import org.openapis.openapi.models.operations.UpdateTaskChannelResponse;
import org.openapis.openapi.models.operations.UpdateTaskChannelSecurity;
import org.openapis.openapi.models.operations.UpdateTaskChannelUpdateTaskChannelRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTaskChannelRequest req = new UpdateTaskChannelRequest("cum", "voluptate") {{
                requestBody = new UpdateTaskChannelUpdateTaskChannelRequest() {{
                    channelOptimizedRouting = false;
                    friendlyName = "dignissimos";
                }};;
            }};            

            UpdateTaskChannelResponse res = sdk.sdk.updateTaskChannel(req, new UpdateTaskChannelSecurity("reiciendis", "amet") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTaskChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTaskQueue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskQueueRequest;
import org.openapis.openapi.models.operations.UpdateTaskQueueResponse;
import org.openapis.openapi.models.operations.UpdateTaskQueueSecurity;
import org.openapis.openapi.models.operations.UpdateTaskQueueUpdateTaskQueueRequest;
import org.openapis.openapi.models.shared.TaskQueueEnumTaskOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTaskQueueRequest req = new UpdateTaskQueueRequest("dolorum", "numquam") {{
                requestBody = new UpdateTaskQueueUpdateTaskQueueRequest() {{
                    assignmentActivitySid = "veritatis";
                    friendlyName = "ipsa";
                    maxReservedWorkers = 56418L;
                    reservationActivitySid = "iure";
                    targetWorkers = "odio";
                    taskOrder = TaskQueueEnumTaskOrderEnum.FIFO;
                }};;
            }};            

            UpdateTaskQueueResponse res = sdk.sdk.updateTaskQueue(req, new UpdateTaskQueueSecurity("accusamus", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTaskQueue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTaskReservation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskReservationRequest;
import org.openapis.openapi.models.operations.UpdateTaskReservationResponse;
import org.openapis.openapi.models.operations.UpdateTaskReservationSecurity;
import org.openapis.openapi.models.operations.UpdateTaskReservationUpdateTaskReservationRequest;
import org.openapis.openapi.models.operations.UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum;
import org.openapis.openapi.models.shared.TaskReservationEnumCallStatusEnum;
import org.openapis.openapi.models.shared.TaskReservationEnumConferenceEventEnum;
import org.openapis.openapi.models.shared.TaskReservationEnumStatusEnum;
import org.openapis.openapi.models.shared.TaskReservationEnumSupervisorModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTaskReservationRequest req = new UpdateTaskReservationRequest("voluptatibus", "voluptas", "natus") {{
                ifMatch = "eos";
                requestBody = new UpdateTaskReservationUpdateTaskReservationRequest() {{
                    beep = "atque";
                    beepOnCustomerEntrance = false;
                    callAccept = false;
                    callFrom = "sit";
                    callRecord = "fugiat";
                    callStatusCallbackUrl = "http://shimmering-populist.info";
                    callTimeout = 453697L;
                    callTo = "dolorum";
                    callUrl = "https://overlooked-terminal.net";
                    conferenceRecord = "asperiores";
                    conferenceRecordingStatusCallback = "http://dutiful-increase.name";
                    conferenceRecordingStatusCallbackMethod = UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum.DELETE;
                    conferenceStatusCallback = "http://concrete-alien.biz";
                    conferenceStatusCallbackEvent = new org.openapis.openapi.models.shared.TaskReservationEnumConferenceEventEnum[]{{
                        add(TaskReservationEnumConferenceEventEnum.SPEAKER),
                        add(TaskReservationEnumConferenceEventEnum.JOIN),
                        add(TaskReservationEnumConferenceEventEnum.SPEAKER),
                        add(TaskReservationEnumConferenceEventEnum.JOIN),
                    }};
                    conferenceStatusCallbackMethod = UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum.PATCH;
                    conferenceTrim = "provident";
                    dequeueFrom = "minima";
                    dequeuePostWorkActivitySid = "repellendus";
                    dequeueRecord = "totam";
                    dequeueStatusCallbackEvent = new String[]{{
                        add("alias"),
                        add("at"),
                        add("quaerat"),
                    }};
                    dequeueStatusCallbackUrl = "http://impure-shoat.org";
                    dequeueTimeout = 185636L;
                    dequeueTo = "dolorum";
                    earlyMedia = false;
                    endConferenceOnCustomerExit = false;
                    endConferenceOnExit = false;
                    from = "a";
                    instruction = "esse";
                    maxParticipants = 687488L;
                    muted = false;
                    postWorkActivitySid = "iusto";
                    record = false;
                    recordingChannels = "ipsum";
                    recordingStatusCallback = "https://wavy-cuisine.net";
                    recordingStatusCallbackMethod = UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum.DELETE;
                    redirectAccept = false;
                    redirectCallSid = "numquam";
                    redirectUrl = "http://dramatic-villa.name";
                    region = "nihil";
                    reservationStatus = TaskReservationEnumStatusEnum.PENDING;
                    sipAuthPassword = "expedita";
                    sipAuthUsername = "neque";
                    startConferenceOnEnter = false;
                    statusCallback = "http://improbable-redhead.info";
                    statusCallbackEvent = new org.openapis.openapi.models.shared.TaskReservationEnumCallStatusEnum[]{{
                        add(TaskReservationEnumCallStatusEnum.RINGING),
                        add(TaskReservationEnumCallStatusEnum.INITIATED),
                        add(TaskReservationEnumCallStatusEnum.RINGING),
                    }};
                    statusCallbackMethod = UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum.GET;
                    supervisor = "cupiditate";
                    supervisorMode = TaskReservationEnumSupervisorModeEnum.BARGE;
                    timeout = 863856L;
                    to = "soluta";
                    waitMethod = UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum.HEAD;
                    waitUrl = "https://marvelous-domain.com";
                    workerActivitySid = "dolores";
                }};;
            }};            

            UpdateTaskReservationResponse res = sdk.sdk.updateTaskReservation(req, new UpdateTaskReservationSecurity("distinctio", "facilis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceTaskTaskReservation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkerRequest;
import org.openapis.openapi.models.operations.UpdateWorkerResponse;
import org.openapis.openapi.models.operations.UpdateWorkerSecurity;
import org.openapis.openapi.models.operations.UpdateWorkerUpdateWorkerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWorkerRequest req = new UpdateWorkerRequest("aliquid", "quam") {{
                ifMatch = "molestias";
                requestBody = new UpdateWorkerUpdateWorkerRequest() {{
                    activitySid = "temporibus";
                    attributes = "qui";
                    friendlyName = "neque";
                    rejectPendingReservations = false;
                }};;
            }};            

            UpdateWorkerResponse res = sdk.sdk.updateWorker(req, new UpdateWorkerSecurity("fugit", "magni") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorker != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkerChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkerChannelRequest;
import org.openapis.openapi.models.operations.UpdateWorkerChannelResponse;
import org.openapis.openapi.models.operations.UpdateWorkerChannelSecurity;
import org.openapis.openapi.models.operations.UpdateWorkerChannelUpdateWorkerChannelRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWorkerChannelRequest req = new UpdateWorkerChannelRequest("odio", "sunt", "ullam") {{
                requestBody = new UpdateWorkerChannelUpdateWorkerChannelRequest() {{
                    available = false;
                    capacity = 722081L;
                }};;
            }};            

            UpdateWorkerChannelResponse res = sdk.sdk.updateWorkerChannel(req, new UpdateWorkerChannelSecurity("hic", "voluptatem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkerWorkerChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkerReservation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkerReservationRequest;
import org.openapis.openapi.models.operations.UpdateWorkerReservationResponse;
import org.openapis.openapi.models.operations.UpdateWorkerReservationSecurity;
import org.openapis.openapi.models.operations.UpdateWorkerReservationUpdateWorkerReservationRequest;
import org.openapis.openapi.models.operations.UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum;
import org.openapis.openapi.models.shared.WorkerReservationEnumCallStatusEnum;
import org.openapis.openapi.models.shared.WorkerReservationEnumConferenceEventEnum;
import org.openapis.openapi.models.shared.WorkerReservationEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWorkerReservationRequest req = new UpdateWorkerReservationRequest("cumque", "soluta", "nobis") {{
                ifMatch = "et";
                requestBody = new UpdateWorkerReservationUpdateWorkerReservationRequest() {{
                    beep = "saepe";
                    beepOnCustomerEntrance = false;
                    callAccept = false;
                    callFrom = "ipsum";
                    callRecord = "veritatis";
                    callStatusCallbackUrl = "https://mushy-reflection.name";
                    callTimeout = 45614L;
                    callTo = "delectus";
                    callUrl = "http://flimsy-duck.biz";
                    conferenceRecord = "dolorum";
                    conferenceRecordingStatusCallback = "http://basic-aim.name";
                    conferenceRecordingStatusCallbackMethod = UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum.DELETE;
                    conferenceStatusCallback = "http://questionable-specialist.net";
                    conferenceStatusCallbackEvent = new org.openapis.openapi.models.shared.WorkerReservationEnumConferenceEventEnum[]{{
                        add(WorkerReservationEnumConferenceEventEnum.END),
                        add(WorkerReservationEnumConferenceEventEnum.MUTE),
                        add(WorkerReservationEnumConferenceEventEnum.MUTE),
                        add(WorkerReservationEnumConferenceEventEnum.END),
                    }};
                    conferenceStatusCallbackMethod = UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum.HEAD;
                    conferenceTrim = "laudantium";
                    dequeueFrom = "odio";
                    dequeuePostWorkActivitySid = "occaecati";
                    dequeueRecord = "voluptatibus";
                    dequeueStatusCallbackEvent = new String[]{{
                        add("vero"),
                        add("omnis"),
                        add("quis"),
                        add("ipsum"),
                    }};
                    dequeueStatusCallbackUrl = "https://joint-curler.org";
                    dequeueTimeout = 949319L;
                    dequeueTo = "dignissimos";
                    earlyMedia = false;
                    endConferenceOnCustomerExit = false;
                    endConferenceOnExit = false;
                    from = "hic";
                    instruction = "distinctio";
                    maxParticipants = 799203L;
                    muted = false;
                    postWorkActivitySid = "odio";
                    record = false;
                    recordingChannels = "similique";
                    recordingStatusCallback = "https://trustworthy-landscape.biz";
                    recordingStatusCallbackMethod = UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum.DELETE;
                    redirectAccept = false;
                    redirectCallSid = "illum";
                    redirectUrl = "http://perky-scarf.com";
                    region = "voluptatibus";
                    reservationStatus = WorkerReservationEnumStatusEnum.REJECTED;
                    sipAuthPassword = "nulla";
                    sipAuthUsername = "fugit";
                    startConferenceOnEnter = false;
                    statusCallback = "https://worldly-wire.info";
                    statusCallbackEvent = new org.openapis.openapi.models.shared.WorkerReservationEnumCallStatusEnum[]{{
                        add(WorkerReservationEnumCallStatusEnum.RINGING),
                        add(WorkerReservationEnumCallStatusEnum.INITIATED),
                        add(WorkerReservationEnumCallStatusEnum.ANSWERED),
                        add(WorkerReservationEnumCallStatusEnum.RINGING),
                    }};
                    statusCallbackMethod = UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum.POST;
                    timeout = 410492L;
                    to = "aspernatur";
                    waitMethod = UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum.POST;
                    waitUrl = "https://fond-compliment.info";
                    workerActivitySid = "laudantium";
                }};;
            }};            

            UpdateWorkerReservationResponse res = sdk.sdk.updateWorkerReservation(req, new UpdateWorkerReservationSecurity("dicta", "dolor") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkerWorkerReservation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkflow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkflowRequest;
import org.openapis.openapi.models.operations.UpdateWorkflowResponse;
import org.openapis.openapi.models.operations.UpdateWorkflowSecurity;
import org.openapis.openapi.models.operations.UpdateWorkflowUpdateWorkflowRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWorkflowRequest req = new UpdateWorkflowRequest("maiores", "quasi") {{
                requestBody = new UpdateWorkflowUpdateWorkflowRequest() {{
                    assignmentCallbackUrl = "http://torn-mixer.org";
                    configuration = "nostrum";
                    fallbackAssignmentCallbackUrl = "https://spirited-ticket.info";
                    friendlyName = "impedit";
                    reEvaluateTasks = "corporis";
                    taskReservationTimeout = 333145L;
                }};;
            }};            

            UpdateWorkflowResponse res = sdk.sdk.updateWorkflow(req, new UpdateWorkflowSecurity("aliquid", "inventore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceWorkflow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkspaceRequest;
import org.openapis.openapi.models.operations.UpdateWorkspaceResponse;
import org.openapis.openapi.models.operations.UpdateWorkspaceSecurity;
import org.openapis.openapi.models.operations.UpdateWorkspaceUpdateWorkspaceRequest;
import org.openapis.openapi.models.shared.WorkspaceEnumQueueOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWorkspaceRequest req = new UpdateWorkspaceRequest("magnam") {{
                requestBody = new UpdateWorkspaceUpdateWorkspaceRequest() {{
                    defaultActivitySid = "ea";
                    eventCallbackUrl = "https://eminent-treasury.com";
                    eventsFilter = "minima";
                    friendlyName = "eaque";
                    multiTaskEnabled = false;
                    prioritizeQueueOrder = WorkspaceEnumQueueOrderEnum.LIFO;
                    timeoutActivitySid = "libero";
                }};;
            }};            

            UpdateWorkspaceResponse res = sdk.sdk.updateWorkspace(req, new UpdateWorkspaceSecurity("aut", "aut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1Workspace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
