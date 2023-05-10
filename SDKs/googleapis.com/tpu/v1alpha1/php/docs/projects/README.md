# projects

### Available Operations

* [tpuProjectsLocationsAcceleratorTypesList](#tpuprojectslocationsacceleratortypeslist) - Lists accelerator types supported by this API.
* [tpuProjectsLocationsList](#tpuprojectslocationslist) - Lists information about the supported locations for this service.
* [tpuProjectsLocationsNodesCreate](#tpuprojectslocationsnodescreate) - Creates a node.
* [tpuProjectsLocationsNodesList](#tpuprojectslocationsnodeslist) - Lists nodes.
* [tpuProjectsLocationsNodesReimage](#tpuprojectslocationsnodesreimage) - Reimages a node's OS.
* [tpuProjectsLocationsNodesStart](#tpuprojectslocationsnodesstart) - Starts a node.
* [tpuProjectsLocationsNodesStop](#tpuprojectslocationsnodesstop) - Stops a node. This operation is only available with single TPU nodes.
* [tpuProjectsLocationsOperationsCancel](#tpuprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [tpuProjectsLocationsOperationsDelete](#tpuprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [tpuProjectsLocationsOperationsList](#tpuprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [tpuProjectsLocationsTensorflowVersionsGet](#tpuprojectslocationstensorflowversionsget) - Gets TensorFlow Version.
* [tpuProjectsLocationsTensorflowVersionsList](#tpuprojectslocationstensorflowversionslist) - Lists TensorFlow versions supported by this API.

## tpuProjectsLocationsAcceleratorTypesList

Lists accelerator types supported by this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsAcceleratorTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsAcceleratorTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsAcceleratorTypesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->filter = 'minus';
    $request->key = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->orderBy = 'iusto';
    $request->pageSize = 568045;
    $request->pageToken = 'nisi';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new TpuProjectsLocationsAcceleratorTypesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsAcceleratorTypesList($request, $requestSecurity);

    if ($response->listAcceleratorTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsListRequest();
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

    $requestSecurity = new TpuProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsNodesCreate

Creates a node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeInput;
use \OpenAPI\OpenAPI\Models\Shared\NodeHealthEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsNodesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->nodeInput = new NodeInput();
    $request->nodeInput->acceleratorType = 'nam';
    $request->nodeInput->cidrBlock = 'officia';
    $request->nodeInput->description = 'occaecati';
    $request->nodeInput->health = NodeHealthEnum::HEALTH_UNSPECIFIED;
    $request->nodeInput->ipAddress = 'deleniti';
    $request->nodeInput->labels = [
        'optio' => 'totam',
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->nodeInput->network = 'cum';
    $request->nodeInput->port = 'esse';
    $request->nodeInput->schedulingConfig = new SchedulingConfig();
    $request->nodeInput->schedulingConfig->preemptible = false;
    $request->nodeInput->schedulingConfig->reserved = false;
    $request->nodeInput->tensorflowVersion = 'ipsum';
    $request->nodeInput->useServiceNetworking = false;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'ad';
    $request->key = 'natus';
    $request->nodeId = 'sed';
    $request->oauthToken = 'iste';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->requestId = 'laboriosam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new TpuProjectsLocationsNodesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsNodesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsNodesList

Lists nodes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsNodesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'iure';
    $request->key = 'saepe';
    $request->oauthToken = 'quidem';
    $request->pageSize = 99280;
    $request->pageToken = 'ipsa';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new TpuProjectsLocationsNodesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsNodesList($request, $requestSecurity);

    if ($response->listNodesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsNodesReimage

Reimages a node's OS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesReimageRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReimageNodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesReimageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsNodesReimageRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reimageNodeRequest = new ReimageNodeRequest();
    $request->reimageNodeRequest->tensorflowVersion = 'dolorem';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'enim';
    $request->key = 'omnis';
    $request->name = 'Ms. Cathy Marks';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new TpuProjectsLocationsNodesReimageSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsNodesReimage($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsNodesStart

Starts a node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsNodesStartRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
    ];
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->name = 'Gloria Padberg';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new TpuProjectsLocationsNodesStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsNodesStart($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsNodesStop

Stops a node. This operation is only available with single TPU nodes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsNodesStopRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
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

    $requestSecurity = new TpuProjectsLocationsNodesStopSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsNodesStop($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->key = 'iusto';
    $request->name = 'Maryann Hamill';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new TpuProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->name = 'Carl Waelchi DVM';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->requestId = 'consequatur';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new TpuProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'labore';
    $request->filter = 'modi';
    $request->key = 'qui';
    $request->name = 'Mr. Shelly Lueilwitz';
    $request->oauthToken = 'ipsam';
    $request->pageSize = 4695;
    $request->pageToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new TpuProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsTensorflowVersionsGet

Gets TensorFlow Version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsTensorflowVersionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsTensorflowVersionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsTensorflowVersionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'eum';
    $request->key = 'non';
    $request->name = 'Sergio Hyatt';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new TpuProjectsLocationsTensorflowVersionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsTensorflowVersionsGet($request, $requestSecurity);

    if ($response->tensorFlowVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsTensorflowVersionsList

Lists TensorFlow versions supported by this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsTensorflowVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsTensorflowVersionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsTensorflowVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'illum';
    $request->filter = 'maiores';
    $request->key = 'rerum';
    $request->oauthToken = 'dicta';
    $request->orderBy = 'magnam';
    $request->pageSize = 767024;
    $request->pageToken = 'facere';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new TpuProjectsLocationsTensorflowVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsTensorflowVersionsList($request, $requestSecurity);

    if ($response->listTensorFlowVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
