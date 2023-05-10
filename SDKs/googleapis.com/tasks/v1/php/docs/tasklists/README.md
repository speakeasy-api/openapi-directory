# tasklists

### Available Operations

* [tasksTasklistsDelete](#taskstasklistsdelete) - Deletes the authenticated user's specified task list.
* [tasksTasklistsGet](#taskstasklistsget) - Returns the authenticated user's specified task list.
* [tasksTasklistsInsert](#taskstasklistsinsert) - Creates a new task list and adds it to the authenticated user's task lists.
* [tasksTasklistsList](#taskstasklistslist) - Returns all the authenticated user's task lists.
* [tasksTasklistsPatch](#taskstasklistspatch) - Updates the authenticated user's specified task list. This method supports patch semantics.
* [tasksTasklistsUpdate](#taskstasklistsupdate) - Updates the authenticated user's specified task list.

## tasksTasklistsDelete

Deletes the authenticated user's specified task list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasklistsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->tasklist = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new TasksTasklistsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasklists->tasksTasklistsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksTasklistsGet

Returns the authenticated user's specified task list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasklistsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'recusandae';
    $request->key = 'temporibus';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->tasklist = 'veritatis';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new TasksTasklistsGetSecurity();
    $requestSecurity->option1 = new TasksTasklistsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasklists->tasksTasklistsGet($request, $requestSecurity);

    if ($response->taskList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksTasklistsInsert

Creates a new task list and adds it to the authenticated user's task lists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskList;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasklistsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->taskList = new TaskList();
    $request->taskList->etag = 'repellendus';
    $request->taskList->id = 'fc2ddf7c-c78c-4a1b-a928-fc816742cb73';
    $request->taskList->kind = 'excepturi';
    $request->taskList->selfLink = 'aspernatur';
    $request->taskList->title = 'Mr.';
    $request->taskList->updated = 'ad';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolor';
    $request->key = 'natus';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new TasksTasklistsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasklists->tasksTasklistsInsert($request, $requestSecurity);

    if ($response->taskList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksTasklistsList

Returns all the authenticated user's task lists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasklistsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'saepe';
    $request->key = 'quidem';
    $request->maxResults = 99280;
    $request->oauthToken = 'ipsa';
    $request->pageToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new TasksTasklistsListSecurity();
    $requestSecurity->option1 = new TasksTasklistsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasklists->tasksTasklistsList($request, $requestSecurity);

    if ($response->taskLists !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksTasklistsPatch

Updates the authenticated user's specified task list. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskList;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasklistsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->taskList = new TaskList();
    $request->taskList->etag = 'dolorem';
    $request->taskList->id = '52c59559-07af-4f1a-ba2f-a9467739251a';
    $request->taskList->kind = 'animi';
    $request->taskList->selfLink = 'enim';
    $request->taskList->title = 'Mr.';
    $request->taskList->updated = 'quo';
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'id';
    $request->key = 'possimus';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->tasklist = 'error';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new TasksTasklistsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasklists->tasksTasklistsPatch($request, $requestSecurity);

    if ($response->taskList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksTasklistsUpdate

Updates the authenticated user's specified task list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskList;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TasksTasklistsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksTasklistsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->taskList = new TaskList();
    $request->taskList->etag = 'reiciendis';
    $request->taskList->id = 'fe78f097-b007-44f1-9471-b5e6e13b99d4';
    $request->taskList->kind = 'praesentium';
    $request->taskList->selfLink = 'rem';
    $request->taskList->title = 'Dr.';
    $request->taskList->updated = 'quasi';
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'itaque';
    $request->key = 'incidunt';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->tasklist = 'est';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new TasksTasklistsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tasklists->tasksTasklistsUpdate($request, $requestSecurity);

    if ($response->taskList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
