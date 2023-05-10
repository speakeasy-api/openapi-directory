# operations

### Available Operations

* [cloudprivatecatalogproducerOperationsCancel](#cloudprivatecatalogproduceroperationscancel) - Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.
* [cloudprivatecatalogproducerOperationsList](#cloudprivatecatalogproduceroperationslist) - Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.

## cloudprivatecatalogproducerOperationsCancel

Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'maiores' => 'quidem',
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'nam';
    $request->key = 'eaque';
    $request->name = 'Dr. Herman Wolf';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new CloudprivatecatalogproducerOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->cloudprivatecatalogproducerOperationsCancel($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerOperationsList

Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'totam';
    $request->filter = 'dignissimos';
    $request->key = 'eaque';
    $request->name = 'Mr. Robin Daugherty';
    $request->oauthToken = 'quam';
    $request->pageSize = 223924;
    $request->pageToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new CloudprivatecatalogproducerOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->cloudprivatecatalogproducerOperationsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
