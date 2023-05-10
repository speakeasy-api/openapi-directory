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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateActivityCreateActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateActivitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateActivityRequest();
    $request->requestBody = new CreateActivityCreateActivityRequest();
    $request->requestBody->available = false;
    $request->requestBody->friendlyName = 'distinctio';
    $request->workspaceSid = 'quibusdam';

    $requestSecurity = new CreateActivitySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createActivity($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceActivity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskCreateTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTaskRequest();
    $request->requestBody = new CreateTaskCreateTaskRequest();
    $request->requestBody->attributes = 'unde';
    $request->requestBody->priority = 857946;
    $request->requestBody->taskChannel = 'corrupti';
    $request->requestBody->timeout = 847252;
    $request->requestBody->workflowSid = 'vel';
    $request->workspaceSid = 'error';

    $requestSecurity = new CreateTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createTask($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTaskChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskChannelCreateTaskChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTaskChannelRequest();
    $request->requestBody = new CreateTaskChannelCreateTaskChannelRequest();
    $request->requestBody->channelOptimizedRouting = false;
    $request->requestBody->friendlyName = 'deserunt';
    $request->requestBody->uniqueName = 'suscipit';
    $request->workspaceSid = 'iure';

    $requestSecurity = new CreateTaskChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createTaskChannel($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTaskChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTaskQueue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskQueueCreateTaskQueueRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskQueueEnumTaskOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskQueueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTaskQueueRequest();
    $request->requestBody = new CreateTaskQueueCreateTaskQueueRequest();
    $request->requestBody->assignmentActivitySid = 'magnam';
    $request->requestBody->friendlyName = 'debitis';
    $request->requestBody->maxReservedWorkers = 56713;
    $request->requestBody->reservationActivitySid = 'delectus';
    $request->requestBody->targetWorkers = 'tempora';
    $request->requestBody->taskOrder = TaskQueueEnumTaskOrderEnum::FIFO;
    $request->workspaceSid = 'molestiae';

    $requestSecurity = new CreateTaskQueueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createTaskQueue($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTaskQueue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerCreateWorkerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkerRequest();
    $request->requestBody = new CreateWorkerCreateWorkerRequest();
    $request->requestBody->activitySid = 'minus';
    $request->requestBody->attributes = 'placeat';
    $request->requestBody->friendlyName = 'voluptatum';
    $request->workspaceSid = 'iusto';

    $requestSecurity = new CreateWorkerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createWorker($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorker !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkflow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowCreateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkflowRequest();
    $request->requestBody = new CreateWorkflowCreateWorkflowRequest();
    $request->requestBody->assignmentCallbackUrl = 'https://hospitable-travel.org';
    $request->requestBody->configuration = 'ab';
    $request->requestBody->fallbackAssignmentCallbackUrl = 'http://bountiful-pension.com';
    $request->requestBody->friendlyName = 'ipsam';
    $request->requestBody->taskReservationTimeout = 832620;
    $request->workspaceSid = 'sapiente';

    $requestSecurity = new CreateWorkflowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createWorkflow($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkflow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceCreateWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceEnumQueueOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkspaceCreateWorkspaceRequest();
    $request->eventCallbackUrl = 'https://constant-sundae.org';
    $request->eventsFilter = 'maiores';
    $request->friendlyName = 'molestiae';
    $request->multiTaskEnabled = false;
    $request->prioritizeQueueOrder = WorkspaceEnumQueueOrderEnum::LIFO;
    $request->template = 'quod';

    $requestSecurity = new CreateWorkspaceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createWorkspace($request, $requestSecurity);

    if ($response->taskrouterV1Workspace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteActivity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteActivitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteActivityRequest();
    $request->sid = 'esse';
    $request->workspaceSid = 'totam';

    $requestSecurity = new DeleteActivitySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteActivity($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTaskRequest();
    $request->ifMatch = 'porro';
    $request->sid = 'dolorum';
    $request->workspaceSid = 'dicta';

    $requestSecurity = new DeleteTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteTask($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTaskChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTaskChannelRequest();
    $request->sid = 'nam';
    $request->workspaceSid = 'officia';

    $requestSecurity = new DeleteTaskChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteTaskChannel($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTaskQueue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskQueueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTaskQueueRequest();
    $request->sid = 'occaecati';
    $request->workspaceSid = 'fugit';

    $requestSecurity = new DeleteTaskQueueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteTaskQueue($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkerRequest();
    $request->ifMatch = 'deleniti';
    $request->sid = 'hic';
    $request->workspaceSid = 'optio';

    $requestSecurity = new DeleteWorkerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteWorker($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkflow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkflowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkflowRequest();
    $request->sid = 'totam';
    $request->workspaceSid = 'beatae';

    $requestSecurity = new DeleteWorkflowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteWorkflow($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceRequest();
    $request->sid = 'commodi';

    $requestSecurity = new DeleteWorkspaceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteWorkspace($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchActivity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchActivitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchActivityRequest();
    $request->sid = 'molestiae';
    $request->workspaceSid = 'modi';

    $requestSecurity = new FetchActivitySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchActivity($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceActivity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchEvent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEventRequest();
    $request->sid = 'qui';
    $request->workspaceSid = 'impedit';

    $requestSecurity = new FetchEventSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEvent($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTaskRequest();
    $request->sid = 'cum';
    $request->workspaceSid = 'esse';

    $requestSecurity = new FetchTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTask($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTaskChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTaskChannelRequest();
    $request->sid = 'ipsum';
    $request->workspaceSid = 'excepturi';

    $requestSecurity = new FetchTaskChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTaskChannel($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTaskChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTaskQueue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskQueueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTaskQueueRequest();
    $request->sid = 'aspernatur';
    $request->workspaceSid = 'perferendis';

    $requestSecurity = new FetchTaskQueueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTaskQueue($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTaskQueue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTaskQueueCumulativeStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskQueueCumulativeStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskQueueCumulativeStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTaskQueueCumulativeStatisticsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T13:30:46.463Z');
    $request->minutes = 149675;
    $request->splitByWaitTime = 'iste';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T19:39:29.035Z');
    $request->taskChannel = 'laboriosam';
    $request->taskQueueSid = 'hic';
    $request->workspaceSid = 'saepe';

    $requestSecurity = new FetchTaskQueueCumulativeStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTaskQueueCumulativeStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTaskQueueRealTimeStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskQueueRealTimeStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskQueueRealTimeStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTaskQueueRealTimeStatisticsRequest();
    $request->taskChannel = 'fuga';
    $request->taskQueueSid = 'in';
    $request->workspaceSid = 'corporis';

    $requestSecurity = new FetchTaskQueueRealTimeStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTaskQueueRealTimeStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTaskQueueStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskQueueStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskQueueStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTaskQueueStatisticsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-15T23:12:00.119Z');
    $request->minutes = 902349;
    $request->splitByWaitTime = 'quidem';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-10T00:25:28.749Z');
    $request->taskChannel = 'reiciendis';
    $request->taskQueueSid = 'est';
    $request->workspaceSid = 'mollitia';

    $requestSecurity = new FetchTaskQueueStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTaskQueueStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTaskQueueTaskQueueStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTaskReservation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskReservationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskReservationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTaskReservationRequest();
    $request->sid = 'laborum';
    $request->taskSid = 'dolores';
    $request->workspaceSid = 'dolorem';

    $requestSecurity = new FetchTaskReservationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTaskReservation($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTaskTaskReservation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkerRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkerRequest();
    $request->sid = 'corporis';
    $request->workspaceSid = 'explicabo';

    $requestSecurity = new FetchWorkerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorker($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorker !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkerChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkerChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkerChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkerChannelRequest();
    $request->sid = 'nobis';
    $request->workerSid = 'enim';
    $request->workspaceSid = 'omnis';

    $requestSecurity = new FetchWorkerChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkerChannel($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkerWorkerChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkerInstanceStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkerInstanceStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkerInstanceStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkerInstanceStatisticsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T08:35:09.957Z');
    $request->minutes = 570197;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-24T21:51:02.112Z');
    $request->taskChannel = 'culpa';
    $request->workerSid = 'doloribus';
    $request->workspaceSid = 'sapiente';

    $requestSecurity = new FetchWorkerInstanceStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkerInstanceStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkerWorkerInstanceStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkerReservation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkerReservationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkerReservationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkerReservationRequest();
    $request->sid = 'architecto';
    $request->workerSid = 'mollitia';
    $request->workspaceSid = 'dolorem';

    $requestSecurity = new FetchWorkerReservationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkerReservation($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkerWorkerReservation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkerStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkerStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkerStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkerStatisticsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-05T05:51:25.673Z');
    $request->friendlyName = 'repellat';
    $request->minutes = 653108;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-30T02:19:51.375Z');
    $request->taskChannel = 'commodi';
    $request->taskQueueName = 'quam';
    $request->taskQueueSid = 'molestiae';
    $request->workspaceSid = 'velit';

    $requestSecurity = new FetchWorkerStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkerStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkerWorkerStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkersCumulativeStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkersCumulativeStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkersCumulativeStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkersCumulativeStatisticsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-06T22:51:09.401Z');
    $request->minutes = 338007;
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-29T17:10:10.440Z');
    $request->taskChannel = 'animi';
    $request->workspaceSid = 'enim';

    $requestSecurity = new FetchWorkersCumulativeStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkersCumulativeStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkerWorkersCumulativeStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkersRealTimeStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkersRealTimeStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkersRealTimeStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkersRealTimeStatisticsRequest();
    $request->taskChannel = 'odit';
    $request->workspaceSid = 'quo';

    $requestSecurity = new FetchWorkersRealTimeStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkersRealTimeStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkflow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkflowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkflowRequest();
    $request->sid = 'sequi';
    $request->workspaceSid = 'tenetur';

    $requestSecurity = new FetchWorkflowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkflow($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkflow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkflowCumulativeStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkflowCumulativeStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkflowCumulativeStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkflowCumulativeStatisticsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-04T04:15:52.352Z');
    $request->minutes = 820994;
    $request->splitByWaitTime = 'aut';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T15:52:05.226Z');
    $request->taskChannel = 'temporibus';
    $request->workflowSid = 'laborum';
    $request->workspaceSid = 'quasi';

    $requestSecurity = new FetchWorkflowCumulativeStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkflowCumulativeStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkflowRealTimeStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkflowRealTimeStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkflowRealTimeStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkflowRealTimeStatisticsRequest();
    $request->taskChannel = 'reiciendis';
    $request->workflowSid = 'voluptatibus';
    $request->workspaceSid = 'vero';

    $requestSecurity = new FetchWorkflowRealTimeStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkflowRealTimeStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkflowStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkflowStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkflowStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkflowStatisticsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-28T23:41:25.321Z');
    $request->minutes = 976762;
    $request->splitByWaitTime = 'ipsa';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-05T15:41:25.512Z');
    $request->taskChannel = 'cum';
    $request->workflowSid = 'perferendis';
    $request->workspaceSid = 'doloremque';

    $requestSecurity = new FetchWorkflowStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkflowStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkflowWorkflowStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkspaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkspaceRequest();
    $request->sid = 'reprehenderit';

    $requestSecurity = new FetchWorkspaceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkspace($request, $requestSecurity);

    if ($response->taskrouterV1Workspace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkspaceCumulativeStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkspaceCumulativeStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkspaceCumulativeStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkspaceCumulativeStatisticsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-08T10:49:12.847Z');
    $request->minutes = 120196;
    $request->splitByWaitTime = 'corporis';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T11:22:20.922Z');
    $request->taskChannel = 'dicta';
    $request->workspaceSid = 'harum';

    $requestSecurity = new FetchWorkspaceCumulativeStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkspaceCumulativeStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkspaceCumulativeStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkspaceRealTimeStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkspaceRealTimeStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkspaceRealTimeStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkspaceRealTimeStatisticsRequest();
    $request->taskChannel = 'enim';
    $request->workspaceSid = 'accusamus';

    $requestSecurity = new FetchWorkspaceRealTimeStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkspaceRealTimeStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkspaceRealTimeStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWorkspaceStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkspaceStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWorkspaceStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWorkspaceStatisticsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-30T20:15:26.045Z');
    $request->minutes = 64147;
    $request->splitByWaitTime = 'ipsum';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-14T09:53:27.431Z');
    $request->taskChannel = 'excepturi';
    $request->workspaceSid = 'pariatur';

    $requestSecurity = new FetchWorkspaceStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWorkspaceStatistics($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkspaceStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listActivity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListActivitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListActivityRequest();
    $request->available = 'modi';
    $request->friendlyName = 'praesentium';
    $request->page = 523248;
    $request->pageSize = 916723;
    $request->pageToken = 'quasi';
    $request->workspaceSid = 'repudiandae';

    $requestSecurity = new ListActivitySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listActivity($request, $requestSecurity);

    if ($response->listActivityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEvent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T07:52:08.326Z');
    $request->eventType = 'itaque';
    $request->minutes = 277718;
    $request->page = 318569;
    $request->pageSize = 9356;
    $request->pageToken = 'est';
    $request->reservationSid = 'quibusdam';
    $request->sid = 'explicabo';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-27T01:56:50.693Z');
    $request->taskChannel = 'quibusdam';
    $request->taskQueueSid = 'labore';
    $request->taskSid = 'modi';
    $request->workerSid = 'qui';
    $request->workflowSid = 'aliquid';
    $request->workspaceSid = 'cupiditate';

    $requestSecurity = new ListEventSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listEvent($request, $requestSecurity);

    if ($response->listEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTaskRequest();
    $request->assignmentStatus = [
        'perferendis',
        'magni',
        'assumenda',
    ];
    $request->evaluateTaskAttributes = 'ipsam';
    $request->hasAddons = false;
    $request->ordering = 'alias';
    $request->page = 146441;
    $request->pageSize = 677817;
    $request->pageToken = 'excepturi';
    $request->priority = 270008;
    $request->taskQueueName = 'facilis';
    $request->taskQueueSid = 'tempore';
    $request->workflowName = 'labore';
    $request->workflowSid = 'delectus';
    $request->workspaceSid = 'eum';

    $requestSecurity = new ListTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTask($request, $requestSecurity);

    if ($response->listTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTaskChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTaskChannelRequest();
    $request->page = 248753;
    $request->pageSize = 756107;
    $request->pageToken = 'sint';
    $request->workspaceSid = 'aliquid';

    $requestSecurity = new ListTaskChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTaskChannel($request, $requestSecurity);

    if ($response->listTaskChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTaskQueue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskQueueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTaskQueueRequest();
    $request->evaluateWorkerAttributes = 'provident';
    $request->friendlyName = 'necessitatibus';
    $request->ordering = 'sint';
    $request->page = 638921;
    $request->pageSize = 223081;
    $request->pageToken = 'debitis';
    $request->workerSid = 'a';
    $request->workspaceSid = 'dolorum';

    $requestSecurity = new ListTaskQueueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTaskQueue($request, $requestSecurity);

    if ($response->listTaskQueueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTaskQueuesStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskQueuesStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskQueuesStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTaskQueuesStatisticsRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-21T01:01:39.776Z');
    $request->friendlyName = 'illum';
    $request->minutes = 978571;
    $request->page = 699479;
    $request->pageSize = 116202;
    $request->pageToken = 'magnam';
    $request->splitByWaitTime = 'cumque';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-07T01:21:59.434Z');
    $request->taskChannel = 'aliquid';
    $request->workspaceSid = 'laborum';

    $requestSecurity = new ListTaskQueuesStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTaskQueuesStatistics($request, $requestSecurity);

    if ($response->listTaskQueuesStatisticsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTaskReservation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskReservationRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskReservationEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskReservationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTaskReservationRequest();
    $request->page = 881104;
    $request->pageSize = 249796;
    $request->pageToken = 'occaecati';
    $request->reservationStatus = TaskReservationEnumStatusEnum::REJECTED;
    $request->taskSid = 'accusamus';
    $request->workerSid = 'delectus';
    $request->workspaceSid = 'quidem';

    $requestSecurity = new ListTaskReservationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTaskReservation($request, $requestSecurity);

    if ($response->listTaskReservationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkerRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkerRequest();
    $request->activityName = 'provident';
    $request->activitySid = 'nam';
    $request->available = 'id';
    $request->friendlyName = 'blanditiis';
    $request->ordering = 'deleniti';
    $request->page = 956084;
    $request->pageSize = 230533;
    $request->pageToken = 'deserunt';
    $request->targetWorkersExpression = 'nisi';
    $request->taskQueueName = 'vel';
    $request->taskQueueSid = 'natus';
    $request->workspaceSid = 'omnis';

    $requestSecurity = new ListWorkerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listWorker($request, $requestSecurity);

    if ($response->listWorkerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkerChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkerChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkerChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkerChannelRequest();
    $request->page = 474867;
    $request->pageSize = 19193;
    $request->pageToken = 'nihil';
    $request->workerSid = 'magnam';
    $request->workspaceSid = 'distinctio';

    $requestSecurity = new ListWorkerChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listWorkerChannel($request, $requestSecurity);

    if ($response->listWorkerChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkerReservation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkerReservationRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkerReservationEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkerReservationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkerReservationRequest();
    $request->page = 660174;
    $request->pageSize = 287991;
    $request->pageToken = 'labore';
    $request->reservationStatus = WorkerReservationEnumStatusEnum::TIMEOUT;
    $request->workerSid = 'natus';
    $request->workspaceSid = 'nobis';

    $requestSecurity = new ListWorkerReservationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listWorkerReservation($request, $requestSecurity);

    if ($response->listWorkerReservationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkflow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkflowRequest();
    $request->friendlyName = 'eum';
    $request->page = 878453;
    $request->pageSize = 135474;
    $request->pageToken = 'architecto';
    $request->workspaceSid = 'magnam';

    $requestSecurity = new ListWorkflowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listWorkflow($request, $requestSecurity);

    if ($response->listWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkspaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkspaceRequest();
    $request->friendlyName = 'et';
    $request->page = 569965;
    $request->pageSize = 354047;
    $request->pageToken = 'provident';

    $requestSecurity = new ListWorkspaceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listWorkspace($request, $requestSecurity);

    if ($response->listWorkspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateActivity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateActivityUpdateActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateActivitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateActivityRequest();
    $request->requestBody = new UpdateActivityUpdateActivityRequest();
    $request->requestBody->friendlyName = 'quos';
    $request->sid = 'sint';
    $request->workspaceSid = 'accusantium';

    $requestSecurity = new UpdateActivitySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateActivity($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceActivity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskUpdateTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskRequest();
    $request->ifMatch = 'mollitia';
    $request->requestBody = new UpdateTaskUpdateTaskRequest();
    $request->requestBody->assignmentStatus = TaskEnumStatusEnum::WRAPPING;
    $request->requestBody->attributes = 'mollitia';
    $request->requestBody->priority = 320997;
    $request->requestBody->reason = 'eum';
    $request->requestBody->taskChannel = 'dolor';
    $request->sid = 'necessitatibus';
    $request->workspaceSid = 'odit';

    $requestSecurity = new UpdateTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateTask($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTaskChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskChannelUpdateTaskChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskChannelRequest();
    $request->requestBody = new UpdateTaskChannelUpdateTaskChannelRequest();
    $request->requestBody->channelOptimizedRouting = false;
    $request->requestBody->friendlyName = 'nemo';
    $request->sid = 'quasi';
    $request->workspaceSid = 'iure';

    $requestSecurity = new UpdateTaskChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateTaskChannel($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTaskChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTaskQueue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskQueueUpdateTaskQueueRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskQueueEnumTaskOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskQueueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskQueueRequest();
    $request->requestBody = new UpdateTaskQueueUpdateTaskQueueRequest();
    $request->requestBody->assignmentActivitySid = 'doloribus';
    $request->requestBody->friendlyName = 'debitis';
    $request->requestBody->maxReservedWorkers = 260341;
    $request->requestBody->reservationActivitySid = 'maxime';
    $request->requestBody->targetWorkers = 'deleniti';
    $request->requestBody->taskOrder = TaskQueueEnumTaskOrderEnum::LIFO;
    $request->sid = 'in';
    $request->workspaceSid = 'architecto';

    $requestSecurity = new UpdateTaskQueueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateTaskQueue($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTaskQueue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTaskReservation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskReservationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskReservationUpdateTaskReservationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskReservationEnumConferenceEventEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskReservationEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskReservationEnumCallStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskReservationEnumSupervisorModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskReservationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskReservationRequest();
    $request->ifMatch = 'architecto';
    $request->requestBody = new UpdateTaskReservationUpdateTaskReservationRequest();
    $request->requestBody->beep = 'repudiandae';
    $request->requestBody->beepOnCustomerEntrance = false;
    $request->requestBody->callAccept = false;
    $request->requestBody->callFrom = 'ullam';
    $request->requestBody->callRecord = 'expedita';
    $request->requestBody->callStatusCallbackUrl = 'http://zesty-sprinter.com';
    $request->requestBody->callTimeout = 904648;
    $request->requestBody->callTo = 'pariatur';
    $request->requestBody->callUrl = 'http://cute-lens.name';
    $request->requestBody->conferenceRecord = 'magni';
    $request->requestBody->conferenceRecordingStatusCallback = 'http://sore-statin.org';
    $request->requestBody->conferenceRecordingStatusCallbackMethod = UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum::PUT;
    $request->requestBody->conferenceStatusCallback = 'http://nimble-caution.info';
    $request->requestBody->conferenceStatusCallbackEvent = [
        TaskReservationEnumConferenceEventEnum::START,
    ];
    $request->requestBody->conferenceStatusCallbackMethod = UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum::DELETE;
    $request->requestBody->conferenceTrim = 'quidem';
    $request->requestBody->dequeueFrom = 'ipsam';
    $request->requestBody->dequeuePostWorkActivitySid = 'voluptate';
    $request->requestBody->dequeueRecord = 'autem';
    $request->requestBody->dequeueStatusCallbackEvent = [
        'eaque',
        'pariatur',
        'nemo',
    ];
    $request->requestBody->dequeueStatusCallbackUrl = 'https://affectionate-stonework.biz';
    $request->requestBody->dequeueTimeout = 11714;
    $request->requestBody->dequeueTo = 'cumque';
    $request->requestBody->earlyMedia = false;
    $request->requestBody->endConferenceOnCustomerExit = false;
    $request->requestBody->endConferenceOnExit = false;
    $request->requestBody->from = 'corporis';
    $request->requestBody->instruction = 'hic';
    $request->requestBody->maxParticipants = 729991;
    $request->requestBody->muted = false;
    $request->requestBody->postWorkActivitySid = 'nobis';
    $request->requestBody->record = false;
    $request->requestBody->recordingChannels = 'dolores';
    $request->requestBody->recordingStatusCallback = 'http://mealy-kilometer.com';
    $request->requestBody->recordingStatusCallbackMethod = UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum::POST;
    $request->requestBody->redirectAccept = false;
    $request->requestBody->redirectCallSid = 'nesciunt';
    $request->requestBody->redirectUrl = 'http://aggravating-clogs.net';
    $request->requestBody->region = 'quam';
    $request->requestBody->reservationStatus = TaskReservationEnumStatusEnum::ACCEPTED;
    $request->requestBody->sipAuthPassword = 'vero';
    $request->requestBody->sipAuthUsername = 'nostrum';
    $request->requestBody->startConferenceOnEnter = false;
    $request->requestBody->statusCallback = 'https://verifiable-offence.net';
    $request->requestBody->statusCallbackEvent = [
        TaskReservationEnumCallStatusEnum::INITIATED,
        TaskReservationEnumCallStatusEnum::COMPLETED,
        TaskReservationEnumCallStatusEnum::INITIATED,
    ];
    $request->requestBody->statusCallbackMethod = UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum::PATCH;
    $request->requestBody->supervisor = 'error';
    $request->requestBody->supervisorMode = TaskReservationEnumSupervisorModeEnum::MONITOR;
    $request->requestBody->timeout = 577229;
    $request->requestBody->to = 'rerum';
    $request->requestBody->waitMethod = UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum::GET;
    $request->requestBody->waitUrl = 'https://violent-discount.name';
    $request->requestBody->workerActivitySid = 'dolorum';
    $request->sid = 'deleniti';
    $request->taskSid = 'pariatur';
    $request->workspaceSid = 'provident';

    $requestSecurity = new UpdateTaskReservationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateTaskReservation($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceTaskTaskReservation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerUpdateWorkerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkerRequest();
    $request->ifMatch = 'nobis';
    $request->requestBody = new UpdateWorkerUpdateWorkerRequest();
    $request->requestBody->activitySid = 'libero';
    $request->requestBody->attributes = 'delectus';
    $request->requestBody->friendlyName = 'quaerat';
    $request->requestBody->rejectPendingReservations = false;
    $request->sid = 'quos';
    $request->workspaceSid = 'aliquid';

    $requestSecurity = new UpdateWorkerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateWorker($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorker !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkerChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerChannelUpdateWorkerChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkerChannelRequest();
    $request->requestBody = new UpdateWorkerChannelUpdateWorkerChannelRequest();
    $request->requestBody->available = false;
    $request->requestBody->capacity = 212390;
    $request->sid = 'dolorem';
    $request->workerSid = 'dolor';
    $request->workspaceSid = 'qui';

    $requestSecurity = new UpdateWorkerChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateWorkerChannel($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkerWorkerChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkerReservation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerReservationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerReservationUpdateWorkerReservationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerReservationEnumConferenceEventEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerReservationEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerReservationEnumCallStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerReservationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkerReservationRequest();
    $request->ifMatch = 'ipsum';
    $request->requestBody = new UpdateWorkerReservationUpdateWorkerReservationRequest();
    $request->requestBody->beep = 'hic';
    $request->requestBody->beepOnCustomerEntrance = false;
    $request->requestBody->callAccept = false;
    $request->requestBody->callFrom = 'excepturi';
    $request->requestBody->callRecord = 'cum';
    $request->requestBody->callStatusCallbackUrl = 'http://limping-washbasin.biz';
    $request->requestBody->callTimeout = 680545;
    $request->requestBody->callTo = 'numquam';
    $request->requestBody->callUrl = 'http://awkward-azimuth.info';
    $request->requestBody->conferenceRecord = 'odio';
    $request->requestBody->conferenceRecordingStatusCallback = 'http://unaware-profession.org';
    $request->requestBody->conferenceRecordingStatusCallbackMethod = UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum::POST;
    $request->requestBody->conferenceStatusCallback = 'https://definite-marines.com';
    $request->requestBody->conferenceStatusCallbackEvent = [
        WorkerReservationEnumConferenceEventEnum::START,
        WorkerReservationEnumConferenceEventEnum::HOLD,
        WorkerReservationEnumConferenceEventEnum::MUTE,
        WorkerReservationEnumConferenceEventEnum::LEAVE,
    ];
    $request->requestBody->conferenceStatusCallbackMethod = UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum::POST;
    $request->requestBody->conferenceTrim = 'dolorum';
    $request->requestBody->dequeueFrom = 'deleniti';
    $request->requestBody->dequeuePostWorkActivitySid = 'omnis';
    $request->requestBody->dequeueRecord = 'necessitatibus';
    $request->requestBody->dequeueStatusCallbackEvent = [
        'asperiores',
        'nihil',
        'ipsum',
    ];
    $request->requestBody->dequeueStatusCallbackUrl = 'http://pushy-ticket.biz';
    $request->requestBody->dequeueTimeout = 137220;
    $request->requestBody->dequeueTo = 'perferendis';
    $request->requestBody->earlyMedia = false;
    $request->requestBody->endConferenceOnCustomerExit = false;
    $request->requestBody->endConferenceOnExit = false;
    $request->requestBody->from = 'amet';
    $request->requestBody->instruction = 'optio';
    $request->requestBody->maxParticipants = 881586;
    $request->requestBody->muted = false;
    $request->requestBody->postWorkActivitySid = 'ad';
    $request->requestBody->record = false;
    $request->requestBody->recordingChannels = 'saepe';
    $request->requestBody->recordingStatusCallback = 'http://present-necktie.biz';
    $request->requestBody->recordingStatusCallbackMethod = UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum::PUT;
    $request->requestBody->redirectAccept = false;
    $request->requestBody->redirectCallSid = 'totam';
    $request->requestBody->redirectUrl = 'https://abandoned-supplier.biz';
    $request->requestBody->region = 'tempora';
    $request->requestBody->reservationStatus = WorkerReservationEnumStatusEnum::TIMEOUT;
    $request->requestBody->sipAuthPassword = 'quod';
    $request->requestBody->sipAuthUsername = 'officiis';
    $request->requestBody->startConferenceOnEnter = false;
    $request->requestBody->statusCallback = 'http://raw-venue.info';
    $request->requestBody->statusCallbackEvent = [
        WorkerReservationEnumCallStatusEnum::RINGING,
        WorkerReservationEnumCallStatusEnum::INITIATED,
        WorkerReservationEnumCallStatusEnum::COMPLETED,
    ];
    $request->requestBody->statusCallbackMethod = UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum::DELETE;
    $request->requestBody->timeout = 229442;
    $request->requestBody->to = 'tempore';
    $request->requestBody->waitMethod = UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum::DELETE;
    $request->requestBody->waitUrl = 'http://frizzy-counter.org';
    $request->requestBody->workerActivitySid = 'totam';
    $request->sid = 'nihil';
    $request->workerSid = 'sit';
    $request->workspaceSid = 'expedita';

    $requestSecurity = new UpdateWorkerReservationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateWorkerReservation($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkerWorkerReservation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkflow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowUpdateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkflowRequest();
    $request->requestBody = new UpdateWorkflowUpdateWorkflowRequest();
    $request->requestBody->assignmentCallbackUrl = 'http://crisp-hen.net';
    $request->requestBody->configuration = 'voluptas';
    $request->requestBody->fallbackAssignmentCallbackUrl = 'https://juvenile-course.biz';
    $request->requestBody->friendlyName = 'qui';
    $request->requestBody->reEvaluateTasks = 'cupiditate';
    $request->requestBody->taskReservationTimeout = 807581;
    $request->sid = 'pariatur';
    $request->workspaceSid = 'soluta';

    $requestSecurity = new UpdateWorkflowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateWorkflow($request, $requestSecurity);

    if ($response->taskrouterV1WorkspaceWorkflow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceUpdateWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceEnumQueueOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkspaceRequest();
    $request->requestBody = new UpdateWorkspaceUpdateWorkspaceRequest();
    $request->requestBody->defaultActivitySid = 'dicta';
    $request->requestBody->eventCallbackUrl = 'https://marvelous-domain.com';
    $request->requestBody->eventsFilter = 'dolores';
    $request->requestBody->friendlyName = 'distinctio';
    $request->requestBody->multiTaskEnabled = false;
    $request->requestBody->prioritizeQueueOrder = WorkspaceEnumQueueOrderEnum::LIFO;
    $request->requestBody->timeoutActivitySid = 'aliquid';
    $request->sid = 'quam';

    $requestSecurity = new UpdateWorkspaceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateWorkspace($request, $requestSecurity);

    if ($response->taskrouterV1Workspace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
