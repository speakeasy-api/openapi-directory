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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksClearRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksClearSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasksClearRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->tasklist = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new TasksTasksClearSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasks->tasksTasksClear($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksTasksDelete

Deletes the specified task from the task list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'dolorum';
    $request->key = 'excepturi';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->task = 'tempore';
    $request->tasklist = 'labore';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new TasksTasksDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasks->tasksTasksDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksTasksGet

Returns the specified task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasksGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'provident';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->task = 'dolor';
    $request->tasklist = 'debitis';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new TasksTasksGetSecurity();
    $requestSecurity->option1 = new TasksTasksGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasks->tasksTasksGet($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksTasksInsert

Creates a new task on the specified task list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Task;
use \OpenAPI\OpenAPI\Models\Shared\TaskLinks;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasksInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->task = new Task();
    $request->task->completed = 'in';
    $request->task->deleted = false;
    $request->task->due = 'illum';
    $request->task->etag = 'maiores';
    $request->task->hidden = false;
    $request->task->id = 'b14cd66a-e395-4efb-9ba8-8f3a66997074';
    $request->task->kind = 'distinctio';
    $request->task->links = [
        new TaskLinks(),
        new TaskLinks(),
        new TaskLinks(),
    ];
    $request->task->notes = 'labore';
    $request->task->parent = 'labore';
    $request->task->position = 'suscipit';
    $request->task->selfLink = 'natus';
    $request->task->status = 'nobis';
    $request->task->title = 'Ms.';
    $request->task->updated = 'vero';
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'et';
    $request->key = 'excepturi';
    $request->oauthToken = 'ullam';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->previous = 'quos';
    $request->quotaUser = 'sint';
    $request->tasklist = 'accusantium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new TasksTasksInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasks->tasksTasksInsert($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksTasksList

Returns all tasks in the specified task list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->completedMax = 'necessitatibus';
    $request->completedMin = 'odit';
    $request->dueMax = 'nemo';
    $request->dueMin = 'quasi';
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->maxResults = 891924;
    $request->oauthToken = 'eius';
    $request->pageToken = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->showCompleted = false;
    $request->showDeleted = false;
    $request->showHidden = false;
    $request->tasklist = 'facilis';
    $request->updatedMin = 'in';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new TasksTasksListSecurity();
    $requestSecurity->option1 = new TasksTasksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasks->tasksTasksList($request, $requestSecurity);

    if ($response->tasks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksTasksMove

Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksMoveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasksMoveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'repellat';
    $request->key = 'quibusdam';
    $request->oauthToken = 'sed';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->previous = 'pariatur';
    $request->quotaUser = 'accusantium';
    $request->task = 'consequuntur';
    $request->tasklist = 'praesentium';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new TasksTasksMoveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasks->tasksTasksMove($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksTasksPatch

Updates the specified task. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Task;
use \OpenAPI\OpenAPI\Models\Shared\TaskLinks;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasksPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->task1 = new Task();
    $request->task1->completed = 'quo';
    $request->task1->deleted = false;
    $request->task1->due = 'illum';
    $request->task1->etag = 'pariatur';
    $request->task1->hidden = false;
    $request->task1->id = 'c692601f-b576-4b0d-9f0d-30c5fbb25870';
    $request->task1->kind = 'quis';
    $request->task1->links = [
        new TaskLinks(),
    ];
    $request->task1->notes = 'eos';
    $request->task1->parent = 'perferendis';
    $request->task1->position = 'dolores';
    $request->task1->selfLink = 'minus';
    $request->task1->status = 'quam';
    $request->task1->title = 'Mrs.';
    $request->task1->updated = 'vero';
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'omnis';
    $request->key = 'facilis';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->taskPathParameter = 'porro';
    $request->tasklist = 'consequuntur';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'error';

    $requestSecurity = new TasksTasksPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasks->tasksTasksPatch($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksTasksUpdate

Updates the specified task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Task;
use \OpenAPI\OpenAPI\Models\Shared\TaskLinks;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasksUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasksUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->task1 = new Task();
    $request->task1->completed = 'occaecati';
    $request->task1->deleted = false;
    $request->task1->due = 'rerum';
    $request->task1->etag = 'adipisci';
    $request->task1->hidden = false;
    $request->task1->id = 'fe49a8d9-cbf4-4863-b323-f9b77f3a4100';
    $request->task1->kind = 'iure';
    $request->task1->links = [
        new TaskLinks(),
        new TaskLinks(),
    ];
    $request->task1->notes = 'quaerat';
    $request->task1->parent = 'accusamus';
    $request->task1->position = 'quidem';
    $request->task1->selfLink = 'voluptatibus';
    $request->task1->status = 'voluptas';
    $request->task1->title = 'Miss';
    $request->task1->updated = 'eos';
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'ab';
    $request->key = 'soluta';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->taskPathParameter = 'voluptate';
    $request->tasklist = 'dolorum';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new TasksTasksUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasks->tasksTasksUpdate($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
