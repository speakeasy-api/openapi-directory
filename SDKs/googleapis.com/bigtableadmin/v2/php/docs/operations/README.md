# operations

### Available Operations

* [bigtableadminOperationsCancel](#bigtableadminoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [bigtableadminOperationsProjectsOperationsList](#bigtableadminoperationsprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## bigtableadminOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsCancelSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsCancelSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsCancelSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsCancelSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsCancelSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsCancelSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsCancelSecurityOption6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminOperationsCancelRequest();
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

    $requestSecurity = new BigtableadminOperationsCancelSecurity();
    $requestSecurity->option1 = new BigtableadminOperationsCancelSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->bigtableadminOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigtableadminOperationsProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsProjectsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsProjectsOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsProjectsOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsProjectsOperationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsProjectsOperationsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsProjectsOperationsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsProjectsOperationsListSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsProjectsOperationsListSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\BigtableadminOperationsProjectsOperationsListSecurityOption7;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigtableadminOperationsProjectsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->filter = 'sapiente';
    $request->key = 'quo';
    $request->name = 'Teri Strosin';
    $request->oauthToken = 'quod';
    $request->pageSize = 800911;
    $request->pageToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new BigtableadminOperationsProjectsOperationsListSecurity();
    $requestSecurity->option1 = new BigtableadminOperationsProjectsOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->bigtableadminOperationsProjectsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
