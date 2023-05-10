# tasks

### Available Operations

* [cancelTasks](#canceltasks) - Cancel tasks
* [deleteTasks](#deletetasks) - Delete tasks
* [getAllTasks](#getalltasks) - Get all tasks
* [getOneTask](#getonetask) - Get one task

## cancelTasks

Cancel tasks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelTasksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelTasksRequest();
    $request->afterEnqueuedAt = 'quod';
    $request->afterFinishedAt = 'esse';
    $request->afterStartedAt = 'totam';
    $request->beforeEnqueuedAt = 'porro';
    $request->beforeFinishedAt = 'dolorum';
    $request->beforeStartedAt = 'dicta';
    $request->canceledBy = 'nam';
    $request->from = '10';
    $request->indexUids = 'books';
    $request->limit = '2';
    $request->statuses = 'failed';
    $request->types = 'documentAdditionOrUpdate';
    $request->uids = 'officia';

    $response = $sdk->tasks->cancelTasks($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTasks

Delete tasks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTasksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTasksRequest();
    $request->afterEnqueuedAt = 'occaecati';
    $request->afterFinishedAt = 'fugit';
    $request->afterStartedAt = 'deleniti';
    $request->beforeEnqueuedAt = 'hic';
    $request->beforeFinishedAt = 'optio';
    $request->beforeStartedAt = 'totam';
    $request->canceledBy = 'beatae';
    $request->from = '10';
    $request->indexUids = 'books';
    $request->limit = '2';
    $request->statuses = 'failed';
    $request->types = 'documentAdditionOrUpdate';
    $request->uids = 'commodi';

    $response = $sdk->tasks->deleteTasks($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllTasks

Get all tasks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllTasksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllTasksRequest();
    $request->afterEnqueuedAt = 'molestiae';
    $request->afterFinishedAt = 'modi';
    $request->afterStartedAt = 'qui';
    $request->beforeEnqueuedAt = 'impedit';
    $request->beforeFinishedAt = 'cum';
    $request->beforeStartedAt = 'esse';
    $request->canceledBy = 'ipsum';
    $request->from = '10';
    $request->indexUids = 'books';
    $request->limit = '2';
    $request->statuses = 'failed';
    $request->types = 'documentAdditionOrUpdate';
    $request->uids = '3';

    $response = $sdk->tasks->getAllTasks($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOneTask

Get one task

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->tasks->getOneTask();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
