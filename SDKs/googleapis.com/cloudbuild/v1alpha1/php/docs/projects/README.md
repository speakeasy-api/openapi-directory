# projects

### Available Operations

* [cloudbuildProjectsLocationsOperationsCancel](#cloudbuildprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [cloudbuildProjectsWorkerPoolsCreate](#cloudbuildprojectsworkerpoolscreate) - Creates a `WorkerPool` to run the builds, and returns the new worker pool.
* [cloudbuildProjectsWorkerPoolsDelete](#cloudbuildprojectsworkerpoolsdelete) - Deletes a `WorkerPool` by its project ID and WorkerPool name.
* [cloudbuildProjectsWorkerPoolsGet](#cloudbuildprojectsworkerpoolsget) - Returns information about a `WorkerPool`.
* [cloudbuildProjectsWorkerPoolsList](#cloudbuildprojectsworkerpoolslist) - List project's `WorkerPool`s.
* [cloudbuildProjectsWorkerPoolsPatch](#cloudbuildprojectsworkerpoolspatch) - Update a `WorkerPool`.

## cloudbuildProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbuildProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->name = 'Estelle Will';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new CloudbuildProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbuildProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbuildProjectsWorkerPoolsCreate

Creates a `WorkerPool` to run the builds, and returns the new worker pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsWorkerPoolsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPool;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolRegionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerConfig;
use \OpenAPI\OpenAPI\Models\Shared\Network;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsWorkerPoolsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbuildProjectsWorkerPoolsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->workerPool = new WorkerPool();
    $request->workerPool->createTime = 'quod';
    $request->workerPool->deleteTime = 'esse';
    $request->workerPool->name = 'Miss Lowell Parisian';
    $request->workerPool->projectId = 'occaecati';
    $request->workerPool->regions = [
        WorkerPoolRegionsEnum::US_WEST1,
    ];
    $request->workerPool->serviceAccountEmail = 'hic';
    $request->workerPool->status = WorkerPoolStatusEnum::DELETING;
    $request->workerPool->updateTime = 'totam';
    $request->workerPool->workerConfig = new WorkerConfig();
    $request->workerPool->workerConfig->diskSizeGb = 'beatae';
    $request->workerPool->workerConfig->machineType = 'commodi';
    $request->workerPool->workerConfig->network = new Network();
    $request->workerPool->workerConfig->network->network = 'molestiae';
    $request->workerPool->workerConfig->network->projectId = 'modi';
    $request->workerPool->workerConfig->network->subnetwork = 'qui';
    $request->workerPool->workerConfig->tag = 'impedit';
    $request->workerPool->workerCount = 'cum';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->oauthToken = 'ad';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new CloudbuildProjectsWorkerPoolsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbuildProjectsWorkerPoolsCreate($request, $requestSecurity);

    if ($response->workerPool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbuildProjectsWorkerPoolsDelete

Deletes a `WorkerPool` by its project ID and WorkerPool name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsWorkerPoolsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsWorkerPoolsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbuildProjectsWorkerPoolsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->name = 'Sheryl Kertzmann';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'est';

    $requestSecurity = new CloudbuildProjectsWorkerPoolsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbuildProjectsWorkerPoolsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbuildProjectsWorkerPoolsGet

Returns information about a `WorkerPool`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsWorkerPoolsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsWorkerPoolsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbuildProjectsWorkerPoolsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'corporis';
    $request->key = 'explicabo';
    $request->name = 'Ronnie Mohr';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new CloudbuildProjectsWorkerPoolsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbuildProjectsWorkerPoolsGet($request, $requestSecurity);

    if ($response->workerPool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbuildProjectsWorkerPoolsList

List project's `WorkerPool`s.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsWorkerPoolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsWorkerPoolsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbuildProjectsWorkerPoolsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dolorem';
    $request->key = 'culpa';
    $request->oauthToken = 'consequuntur';
    $request->parent = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new CloudbuildProjectsWorkerPoolsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbuildProjectsWorkerPoolsList($request, $requestSecurity);

    if ($response->listWorkerPoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbuildProjectsWorkerPoolsPatch

Update a `WorkerPool`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsWorkerPoolsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPool;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolRegionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerConfig;
use \OpenAPI\OpenAPI\Models\Shared\Network;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsWorkerPoolsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbuildProjectsWorkerPoolsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->workerPool = new WorkerPool();
    $request->workerPool->createTime = 'quam';
    $request->workerPool->deleteTime = 'molestiae';
    $request->workerPool->name = 'Sabrina Cronin MD';
    $request->workerPool->projectId = 'animi';
    $request->workerPool->regions = [
        WorkerPoolRegionsEnum::REGION_UNSPECIFIED,
        WorkerPoolRegionsEnum::US_EAST1,
    ];
    $request->workerPool->serviceAccountEmail = 'sequi';
    $request->workerPool->status = WorkerPoolStatusEnum::DELETED;
    $request->workerPool->updateTime = 'ipsam';
    $request->workerPool->workerConfig = new WorkerConfig();
    $request->workerPool->workerConfig->diskSizeGb = 'id';
    $request->workerPool->workerConfig->machineType = 'possimus';
    $request->workerPool->workerConfig->network = new Network();
    $request->workerPool->workerConfig->network->network = 'aut';
    $request->workerPool->workerConfig->network->projectId = 'quasi';
    $request->workerPool->workerConfig->network->subnetwork = 'error';
    $request->workerPool->workerConfig->tag = 'temporibus';
    $request->workerPool->workerCount = 'laborum';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'vero';
    $request->key = 'nihil';
    $request->name = 'Jan Bednar';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'reprehenderit';

    $requestSecurity = new CloudbuildProjectsWorkerPoolsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbuildProjectsWorkerPoolsPatch($request, $requestSecurity);

    if ($response->workerPool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
