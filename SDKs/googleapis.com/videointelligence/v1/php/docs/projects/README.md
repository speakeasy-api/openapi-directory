# projects

### Available Operations

* [videointelligenceProjectsLocationsOperationsCancel](#videointelligenceprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [videointelligenceProjectsLocationsOperationsDelete](#videointelligenceprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [videointelligenceProjectsLocationsOperationsGet](#videointelligenceprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [videointelligenceProjectsLocationsOperationsList](#videointelligenceprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## videointelligenceProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideointelligenceProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'impedit' => 'cum',
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->name = 'Faye Cormier';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new VideointelligenceProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->videointelligenceProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## videointelligenceProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideointelligenceProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'iure';
    $request->key = 'saepe';
    $request->name = 'Roger Beier';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new VideointelligenceProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->videointelligenceProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## videointelligenceProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideointelligenceProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'omnis';
    $request->key = 'nemo';
    $request->name = 'Velma Batz';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new VideointelligenceProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->videointelligenceProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## videointelligenceProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideointelligenceProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellat';
    $request->fields = 'mollitia';
    $request->filter = 'occaecati';
    $request->key = 'numquam';
    $request->name = 'Claudia Krajcik';
    $request->oauthToken = 'quia';
    $request->pageSize = 338007;
    $request->pageToken = 'vitae';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new VideointelligenceProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->videointelligenceProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
