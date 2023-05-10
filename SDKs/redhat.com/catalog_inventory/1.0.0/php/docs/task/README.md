# task

### Available Operations

* [listTasks](#listtasks) - List Tasks
* [showTask](#showtask) - Show an existing Task
* [updateTask](#updatetask) - Update an existing Task

## listTasks

Returns an array of Task objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTasksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTasksRequest();
    $request->filter = [
        'culpa' => 'expedita',
    ];
    $request->limit = 299643;
    $request->offset = 7884;
    $request->sortBy = [
        'ipsam' => 'sit',
        'voluptatum' => 'quas',
    ];

    $response = $sdk->task->listTasks($request);

    if ($response->tasksCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## showTask

Returns a Task object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ShowTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShowTaskRequest();
    $request->id = 'e5186206-5e90-44f3-b119-4b8abf603a79';

    $response = $sdk->task->showTask($request);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTask

Updates a Task object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskInput;
use \OpenAPI\OpenAPI\Models\Shared\TaskStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskRequest();
    $request->taskInput = new TaskInput();
    $request->taskInput->completedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-27T07:55:22.584Z');
    $request->taskInput->message = 'received message starting inventory collection';
    $request->taskInput->name = 'Order Service Plan';
    $request->taskInput->output = [
        'delectus' => 'voluptates',
        'perferendis' => 'est',
        'quidem' => 'reprehenderit',
        'facere' => 'fuga',
    ];
    $request->taskInput->state = TaskStateEnum::RUNNING;
    $request->taskInput->status = TaskStatusEnum::ERROR;
    $request->taskInput->targetSourceRef = 'praesentium';
    $request->taskInput->targetType = 'mollitia';
    $request->taskInput->type = 'CloudConnectorTask';
    $request->id = '50ce187f-86bc-4173-9689-eee9526f8d98';

    $response = $sdk->task->updateTask($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
