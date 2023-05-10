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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskPriorityListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskPriorityListRequest();
    $request->workgroupId = 'distinctio';

    $response = $sdk->task->taskPriorityList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomTaskTypesOfWg

Get custom task types of workgroup level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomTaskTypesOfWgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomTaskTypesOfWgRequest();
    $request->workgroupId = 'id';

    $response = $sdk->task->getCustomTaskTypesOfWg($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDefaultTaskStatusList

Get default task status list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDefaultTaskStatusListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDefaultTaskStatusListRequest();
    $request->workgroupId = 'labore';

    $response = $sdk->task->getDefaultTaskStatusList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaskListOfProject

Get task list of project level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskListOfProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskListOfProjectRequest();
    $request->projectId = 'labore';
    $request->workgroupId = 'suscipit';

    $response = $sdk->task->getTaskListOfProject($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaskListOfWorkgroup

Get task list of workgroup level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskListOfWorkgroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskListOfWorkgroupRequest();
    $request->workgroupId = 'natus';

    $response = $sdk->task->getTaskListOfWorkgroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaskOfProject

Get a sepcific task of project level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskOfProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskOfProjectRequest();
    $request->projectId = 'nobis';
    $request->taskId = 'eum';
    $request->workgroupId = 'vero';

    $response = $sdk->task->getTaskOfProject($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaskOfWorkgroup

Get a sepcific task of workgroup level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskOfWorkgroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskOfWorkgroupRequest();
    $request->taskId = 'aspernatur';
    $request->workgroupId = 'architecto';

    $response = $sdk->task->getTaskOfWorkgroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaskTypesOfWorkgroup

Get task types of workgroup level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskTypesOfWorkgroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskTypesOfWorkgroupRequest();
    $request->workgroupId = 'magnam';

    $response = $sdk->task->getTaskTypesOfWorkgroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWgTaskStatusListOfWorkgroup

Get custom task status of workgroup level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWgTaskStatusListOfWorkgroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWgTaskStatusListOfWorkgroupRequest();
    $request->workgroupId = 'et';

    $response = $sdk->task->getWgTaskStatusListOfWorkgroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTaskForProjectJson

Create a new task

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostTaskForProjectJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTaskForProjectJsonRequest();
    $request->taskPersistVO = new TaskPersistVO();
    $request->taskPersistVO->actualDuration = 1.1;
    $request->taskPersistVO->actualDurationHour = 1.1;
    $request->taskPersistVO->actualEndDate = DateTime::createFromFormat('Y-m-d', '2022-04-17');
    $request->taskPersistVO->actualStartDate = DateTime::createFromFormat('Y-m-d', '2021-11-24');
    $request->taskPersistVO->assignToUserId = 1;
    $request->taskPersistVO->comments = 'sample comments';
    $request->taskPersistVO->contributors = 'sample contributors';
    $request->taskPersistVO->customStatusId = 1;
    $request->taskPersistVO->description = 'sample description';
    $request->taskPersistVO->name = 'sample name';
    $request->taskPersistVO->percentageComplete = 1;
    $request->taskPersistVO->priority = 1;
    $request->taskPersistVO->revisedDuration = 1.1;
    $request->taskPersistVO->revisedDurationHour = 1.1;
    $request->taskPersistVO->revisedEndDate = DateTime::createFromFormat('Y-m-d', '2022-12-07');
    $request->taskPersistVO->revisedStartDate = DateTime::createFromFormat('Y-m-d', '2021-01-23');
    $request->taskPersistVO->statusId = 1;
    $request->taskPersistVO->taskId = 1;
    $request->taskPersistVO->taskTypeId = 1;
    $request->projectId = 'mollitia';
    $request->workgroupId = 'ad';

    $response = $sdk->task->postTaskForProjectJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTaskForProjectRaw

Create a new task

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostTaskForProjectRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTaskForProjectRawRequest();
    $request->requestBody = 'eum';
    $request->projectId = 'dolor';
    $request->workgroupId = 'necessitatibus';

    $response = $sdk->task->postTaskForProjectRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
