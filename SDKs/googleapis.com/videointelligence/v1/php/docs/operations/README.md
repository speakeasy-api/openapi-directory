# operations

### Available Operations

* [videointelligenceOperationsProjectsLocationsOperationsCancel](#videointelligenceoperationsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [videointelligenceOperationsProjectsLocationsOperationsDelete](#videointelligenceoperationsprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [videointelligenceOperationsProjectsLocationsOperationsGet](#videointelligenceoperationsprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## videointelligenceOperationsProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceOperationsProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideointelligenceOperationsProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->name = 'Ken Kshlerin';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->videointelligenceOperationsProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## videointelligenceOperationsProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceOperationsProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceOperationsProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideointelligenceOperationsProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->name = 'Fred Strosin';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new VideointelligenceOperationsProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->videointelligenceOperationsProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## videointelligenceOperationsProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceOperationsProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceOperationsProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideointelligenceOperationsProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'nam';
    $request->key = 'officia';
    $request->name = 'Wayne Lind';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new VideointelligenceOperationsProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->videointelligenceOperationsProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
