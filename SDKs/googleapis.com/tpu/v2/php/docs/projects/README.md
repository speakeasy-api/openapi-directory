# projects

### Available Operations

* [tpuProjectsLocationsAcceleratorTypesList](#tpuprojectslocationsacceleratortypeslist) - Lists accelerator types supported by this API.
* [tpuProjectsLocationsGenerateServiceIdentity](#tpuprojectslocationsgenerateserviceidentity) - Generates the Cloud TPU service identity for the project.
* [tpuProjectsLocationsList](#tpuprojectslocationslist) - Lists information about the supported locations for this service.
* [tpuProjectsLocationsNodesCreate](#tpuprojectslocationsnodescreate) - Creates a node.
* [tpuProjectsLocationsNodesGetGuestAttributes](#tpuprojectslocationsnodesgetguestattributes) - Retrieves the guest attributes for the node.
* [tpuProjectsLocationsNodesList](#tpuprojectslocationsnodeslist) - Lists nodes.
* [tpuProjectsLocationsNodesPatch](#tpuprojectslocationsnodespatch) - Updates the configurations of a node.
* [tpuProjectsLocationsNodesStart](#tpuprojectslocationsnodesstart) - Starts a node.
* [tpuProjectsLocationsNodesStop](#tpuprojectslocationsnodesstop) - Stops a node. This operation is only available with single TPU nodes.
* [tpuProjectsLocationsOperationsCancel](#tpuprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [tpuProjectsLocationsOperationsDelete](#tpuprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [tpuProjectsLocationsOperationsList](#tpuprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [tpuProjectsLocationsRuntimeVersionsGet](#tpuprojectslocationsruntimeversionsget) - Gets a runtime version.
* [tpuProjectsLocationsRuntimeVersionsList](#tpuprojectslocationsruntimeversionslist) - Lists runtime versions supported by this API.

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

## tpuProjectsLocationsGenerateServiceIdentity

Generates the Cloud TPU service identity for the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsGenerateServiceIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsGenerateServiceIdentitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsGenerateServiceIdentityRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->oauthToken = 'quod';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new TpuProjectsLocationsGenerateServiceIdentitySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsGenerateServiceIdentity($request, $requestSecurity);

    if ($response->generateServiceIdentityResponse !== null) {
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
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'fugit';
    $request->filter = 'deleniti';
    $request->key = 'hic';
    $request->name = 'Everett Breitenberg';
    $request->oauthToken = 'modi';
    $request->pageSize = 186332;
    $request->pageToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

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
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDisk;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeHealthEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsNodesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->nodeInput = new NodeInput();
    $request->nodeInput->acceleratorConfig = new AcceleratorConfig();
    $request->nodeInput->acceleratorConfig->topology = 'aspernatur';
    $request->nodeInput->acceleratorConfig->type = AcceleratorConfigTypeEnum::TYPE_UNSPECIFIED;
    $request->nodeInput->acceleratorType = 'ad';
    $request->nodeInput->cidrBlock = 'natus';
    $request->nodeInput->dataDisks = [
        new AttachedDisk(),
    ];
    $request->nodeInput->description = 'iste';
    $request->nodeInput->health = NodeHealthEnum::HEALTHY;
    $request->nodeInput->labels = [
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
        'in' => 'corporis',
    ];
    $request->nodeInput->metadata = [
        'iure' => 'saepe',
        'quidem' => 'architecto',
        'ipsa' => 'reiciendis',
    ];
    $request->nodeInput->networkConfig = new NetworkConfig();
    $request->nodeInput->networkConfig->canIpForward = false;
    $request->nodeInput->networkConfig->enableExternalIps = false;
    $request->nodeInput->networkConfig->network = 'est';
    $request->nodeInput->networkConfig->subnetwork = 'mollitia';
    $request->nodeInput->runtimeVersion = 'laborum';
    $request->nodeInput->schedulingConfig = new SchedulingConfig();
    $request->nodeInput->schedulingConfig->preemptible = false;
    $request->nodeInput->schedulingConfig->reserved = false;
    $request->nodeInput->serviceAccount = new ServiceAccount();
    $request->nodeInput->serviceAccount->email = 'Corrine75@gmail.com';
    $request->nodeInput->serviceAccount->scope = [
        'omnis',
        'nemo',
    ];
    $request->nodeInput->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->nodeInput->shieldedInstanceConfig->enableSecureBoot = false;
    $request->nodeInput->tags = [
        'excepturi',
        'accusantium',
    ];
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->nodeId = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->parent = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

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

## tpuProjectsLocationsNodesGetGuestAttributes

Retrieves the guest attributes for the node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesGetGuestAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetGuestAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesGetGuestAttributesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsNodesGetGuestAttributesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getGuestAttributesRequest = new GetGuestAttributesRequest();
    $request->getGuestAttributesRequest->queryPath = 'numquam';
    $request->getGuestAttributesRequest->workerIds = [
        'quam',
        'molestiae',
    ];
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->fields = 'quis';
    $request->key = 'vitae';
    $request->name = 'Matt Hamill';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new TpuProjectsLocationsNodesGetGuestAttributesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsNodesGetGuestAttributes($request, $requestSecurity);

    if ($response->getGuestAttributesResponse !== null) {
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
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->pageSize = 971945;
    $request->pageToken = 'voluptatibus';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

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

## tpuProjectsLocationsNodesPatch

Updates the configurations of a node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeInput;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\AcceleratorConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDisk;
use \OpenAPI\OpenAPI\Models\Shared\AttachedDiskModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeHealthEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\SchedulingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccount;
use \OpenAPI\OpenAPI\Models\Shared\ShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsNodesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->nodeInput = new NodeInput();
    $request->nodeInput->acceleratorConfig = new AcceleratorConfig();
    $request->nodeInput->acceleratorConfig->topology = 'omnis';
    $request->nodeInput->acceleratorConfig->type = AcceleratorConfigTypeEnum::V2;
    $request->nodeInput->acceleratorType = 'cum';
    $request->nodeInput->cidrBlock = 'perferendis';
    $request->nodeInput->dataDisks = [
        new AttachedDisk(),
    ];
    $request->nodeInput->description = 'reprehenderit';
    $request->nodeInput->health = NodeHealthEnum::HEALTHY;
    $request->nodeInput->labels = [
        'dicta' => 'corporis',
        'dolore' => 'iusto',
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->nodeInput->metadata = [
        'repudiandae' => 'quae',
        'ipsum' => 'quidem',
    ];
    $request->nodeInput->networkConfig = new NetworkConfig();
    $request->nodeInput->networkConfig->canIpForward = false;
    $request->nodeInput->networkConfig->enableExternalIps = false;
    $request->nodeInput->networkConfig->network = 'molestias';
    $request->nodeInput->networkConfig->subnetwork = 'excepturi';
    $request->nodeInput->runtimeVersion = 'pariatur';
    $request->nodeInput->schedulingConfig = new SchedulingConfig();
    $request->nodeInput->schedulingConfig->preemptible = false;
    $request->nodeInput->schedulingConfig->reserved = false;
    $request->nodeInput->serviceAccount = new ServiceAccount();
    $request->nodeInput->serviceAccount->email = 'Johanna.Ledner92@gmail.com';
    $request->nodeInput->serviceAccount->scope = [
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->nodeInput->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->nodeInput->shieldedInstanceConfig->enableSecureBoot = false;
    $request->nodeInput->tags = [
        'consequatur',
        'est',
    ];
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->name = 'Pauline Deckow';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->updateMask = 'magni';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new TpuProjectsLocationsNodesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsNodesPatch($request, $requestSecurity);

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
        'dolorum' => 'excepturi',
    ];
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->key = 'delectus';
    $request->name = 'Ethel Roob';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

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
        'a' => 'dolorum',
        'in' => 'in',
        'illum' => 'maiores',
        'rerum' => 'dicta',
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'ea';
    $request->key = 'aliquid';
    $request->name = 'Tomas Friesen';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'provident';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'sapiente';
    $request->key = 'amet';
    $request->name = 'Tyler Kassulke';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'magnam';

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
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'suscipit';
    $request->key = 'natus';
    $request->name = 'Duane Thiel II';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'provident';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'reiciendis';
    $request->filter = 'mollitia';
    $request->key = 'ad';
    $request->name = 'Carmen Treutel';
    $request->oauthToken = 'quasi';
    $request->pageSize = 435865;
    $request->pageToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'maxime';

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

## tpuProjectsLocationsRuntimeVersionsGet

Gets a runtime version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsRuntimeVersionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsRuntimeVersionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsRuntimeVersionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'architecto';
    $request->fields = 'architecto';
    $request->key = 'repudiandae';
    $request->name = 'Lola Koss';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new TpuProjectsLocationsRuntimeVersionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsRuntimeVersionsGet($request, $requestSecurity);

    if ($response->runtimeVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsRuntimeVersionsList

Lists runtime versions supported by this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsRuntimeVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsRuntimeVersionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsRuntimeVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magni';
    $request->fields = 'sunt';
    $request->filter = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'pariatur';
    $request->orderBy = 'maxime';
    $request->pageSize = 411397;
    $request->pageToken = 'excepturi';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new TpuProjectsLocationsRuntimeVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsRuntimeVersionsList($request, $requestSecurity);

    if ($response->listRuntimeVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
