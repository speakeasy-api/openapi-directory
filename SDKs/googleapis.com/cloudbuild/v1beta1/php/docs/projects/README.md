# projects

### Available Operations

* [cloudbuildProjectsLocationsOperationsCancel](#cloudbuildprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [cloudbuildProjectsLocationsWorkerPoolsCreate](#cloudbuildprojectslocationsworkerpoolscreate) - Creates a `WorkerPool` to run the builds, and returns the new worker pool. NOTE: As of now, this method returns an `Operation` that is always complete.
* [cloudbuildProjectsLocationsWorkerPoolsDelete](#cloudbuildprojectslocationsworkerpoolsdelete) - Deletes a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.
* [cloudbuildProjectsLocationsWorkerPoolsGet](#cloudbuildprojectslocationsworkerpoolsget) - Returns details of a `WorkerPool`.
* [cloudbuildProjectsLocationsWorkerPoolsList](#cloudbuildprojectslocationsworkerpoolslist) - Lists `WorkerPool`s in the given project.
* [cloudbuildProjectsLocationsWorkerPoolsPatch](#cloudbuildprojectslocationsworkerpoolspatch) - Updates a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.

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

## cloudbuildProjectsLocationsWorkerPoolsCreate

Creates a `WorkerPool` to run the builds, and returns the new worker pool. NOTE: As of now, this method returns an `Operation` that is always complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsLocationsWorkerPoolsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolInput;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkerConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsLocationsWorkerPoolsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbuildProjectsLocationsWorkerPoolsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->workerPoolInput = new WorkerPoolInput();
    $request->workerPoolInput->annotations = [
        'esse' => 'totam',
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->workerPoolInput->displayName = 'fugit';
    $request->workerPoolInput->networkConfig = new NetworkConfig();
    $request->workerPoolInput->networkConfig->peeredNetwork = 'deleniti';
    $request->workerPoolInput->workerConfig = new WorkerConfig();
    $request->workerPoolInput->workerConfig->diskSizeGb = 'hic';
    $request->workerPoolInput->workerConfig->machineType = 'optio';
    $request->workerPoolInput->workerConfig->noExternalIp = false;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->parent = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';
    $request->workerPoolId = 'excepturi';

    $requestSecurity = new CloudbuildProjectsLocationsWorkerPoolsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbuildProjectsLocationsWorkerPoolsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbuildProjectsLocationsWorkerPoolsDelete

Deletes a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsLocationsWorkerPoolsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbuildProjectsLocationsWorkerPoolsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->etag = 'sed';
    $request->fields = 'iste';
    $request->key = 'dolor';
    $request->name = 'Lester Welch';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbuildProjectsLocationsWorkerPoolsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbuildProjectsLocationsWorkerPoolsGet

Returns details of a `WorkerPool`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsLocationsWorkerPoolsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsLocationsWorkerPoolsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbuildProjectsLocationsWorkerPoolsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'reiciendis';
    $request->key = 'est';
    $request->name = 'Cameron Dach';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new CloudbuildProjectsLocationsWorkerPoolsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbuildProjectsLocationsWorkerPoolsGet($request, $requestSecurity);

    if ($response->workerPool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbuildProjectsLocationsWorkerPoolsList

Lists `WorkerPool`s in the given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsLocationsWorkerPoolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsLocationsWorkerPoolsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbuildProjectsLocationsWorkerPoolsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'iure';
    $request->key = 'culpa';
    $request->oauthToken = 'doloribus';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new CloudbuildProjectsLocationsWorkerPoolsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbuildProjectsLocationsWorkerPoolsList($request, $requestSecurity);

    if ($response->listWorkerPoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbuildProjectsLocationsWorkerPoolsPatch

Updates a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsLocationsWorkerPoolsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerPoolInput;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\WorkerConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbuildProjectsLocationsWorkerPoolsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbuildProjectsLocationsWorkerPoolsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->workerPoolInput = new WorkerPoolInput();
    $request->workerPoolInput->annotations = [
        'repellat' => 'mollitia',
    ];
    $request->workerPoolInput->displayName = 'occaecati';
    $request->workerPoolInput->networkConfig = new NetworkConfig();
    $request->workerPoolInput->networkConfig->peeredNetwork = 'numquam';
    $request->workerPoolInput->workerConfig = new WorkerConfig();
    $request->workerPoolInput->workerConfig->diskSizeGb = 'commodi';
    $request->workerPoolInput->workerConfig->machineType = 'quam';
    $request->workerPoolInput->workerConfig->noExternalIp = false;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->name = 'Kayla O'Kon';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->updateMask = 'tenetur';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new CloudbuildProjectsLocationsWorkerPoolsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbuildProjectsLocationsWorkerPoolsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
