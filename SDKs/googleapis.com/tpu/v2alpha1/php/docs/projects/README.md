# projects

### Available Operations

* [tpuProjectsLocationsAcceleratorTypesList](#tpuprojectslocationsacceleratortypeslist) - Lists accelerator types supported by this API.
* [tpuProjectsLocationsGenerateServiceIdentity](#tpuprojectslocationsgenerateserviceidentity) - Generates the Cloud TPU service identity for the project.
* [tpuProjectsLocationsList](#tpuprojectslocationslist) - Lists information about the supported locations for this service.
* [tpuProjectsLocationsNodesCreate](#tpuprojectslocationsnodescreate) - Creates a node.
* [tpuProjectsLocationsNodesGetGuestAttributes](#tpuprojectslocationsnodesgetguestattributes) - Retrieves the guest attributes for the node.
* [tpuProjectsLocationsNodesList](#tpuprojectslocationsnodeslist) - Lists nodes.
* [tpuProjectsLocationsNodesPatch](#tpuprojectslocationsnodespatch) - Updates the configurations of a node.
* [tpuProjectsLocationsNodesSimulateMaintenanceEvent](#tpuprojectslocationsnodessimulatemaintenanceevent) - Simulates a maintenance event.
* [tpuProjectsLocationsNodesStart](#tpuprojectslocationsnodesstart) - Starts a node.
* [tpuProjectsLocationsNodesStop](#tpuprojectslocationsnodesstop) - Stops a node. This operation is only available with single TPU nodes.
* [tpuProjectsLocationsOperationsCancel](#tpuprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [tpuProjectsLocationsOperationsList](#tpuprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [tpuProjectsLocationsQueuedResourcesCreate](#tpuprojectslocationsqueuedresourcescreate) - Creates a QueuedResource TPU instance.
* [tpuProjectsLocationsQueuedResourcesDelete](#tpuprojectslocationsqueuedresourcesdelete) - Deletes a QueuedResource TPU instance.
* [tpuProjectsLocationsQueuedResourcesList](#tpuprojectslocationsqueuedresourceslist) - Lists queued resources.
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
    $request->requestId = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getGuestAttributesRequest = new GetGuestAttributesRequest();
    $request->getGuestAttributesRequest->queryPath = 'commodi';
    $request->getGuestAttributesRequest->workerIds = [
        'molestiae',
        'velit',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->name = 'Bill Conn';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'laborum';
    $request->key = 'quasi';
    $request->oauthToken = 'reiciendis';
    $request->pageSize = 976460;
    $request->pageToken = 'vero';
    $request->parent = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->nodeInput = new NodeInput();
    $request->nodeInput->acceleratorConfig = new AcceleratorConfig();
    $request->nodeInput->acceleratorConfig->topology = 'voluptate';
    $request->nodeInput->acceleratorConfig->type = AcceleratorConfigTypeEnum::V3;
    $request->nodeInput->acceleratorType = 'perferendis';
    $request->nodeInput->cidrBlock = 'doloremque';
    $request->nodeInput->dataDisks = [
        new AttachedDisk(),
        new AttachedDisk(),
    ];
    $request->nodeInput->description = 'ut';
    $request->nodeInput->health = NodeHealthEnum::UNHEALTHY_MAINTENANCE;
    $request->nodeInput->labels = [
        'corporis' => 'dolore',
    ];
    $request->nodeInput->metadata = [
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->nodeInput->networkConfig = new NetworkConfig();
    $request->nodeInput->networkConfig->canIpForward = false;
    $request->nodeInput->networkConfig->enableExternalIps = false;
    $request->nodeInput->networkConfig->network = 'commodi';
    $request->nodeInput->networkConfig->subnetwork = 'repudiandae';
    $request->nodeInput->runtimeVersion = 'quae';
    $request->nodeInput->schedulingConfig = new SchedulingConfig();
    $request->nodeInput->schedulingConfig->preemptible = false;
    $request->nodeInput->schedulingConfig->reserved = false;
    $request->nodeInput->serviceAccount = new ServiceAccount();
    $request->nodeInput->serviceAccount->email = 'Mathilde_Mann@gmail.com';
    $request->nodeInput->serviceAccount->scope = [
        'praesentium',
        'rem',
    ];
    $request->nodeInput->shieldedInstanceConfig = new ShieldedInstanceConfig();
    $request->nodeInput->shieldedInstanceConfig->enableSecureBoot = false;
    $request->nodeInput->tags = [
        'quasi',
        'repudiandae',
        'sint',
        'veritatis',
    ];
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->name = 'Benjamin O'Connell';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->updateMask = 'qui';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'cupiditate';

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

## tpuProjectsLocationsNodesSimulateMaintenanceEvent

Simulates a maintenance event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesSimulateMaintenanceEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SimulateMaintenanceEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsNodesSimulateMaintenanceEventRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->simulateMaintenanceEventRequest = new SimulateMaintenanceEventRequest();
    $request->simulateMaintenanceEventRequest->workerIds = [
        'magni',
    ];
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'fugit';
    $request->key = 'dolorum';
    $request->name = 'Eddie Prosacco';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'eligendi';

    $requestSecurity = new TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsNodesSimulateMaintenanceEvent($request, $requestSecurity);

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'provident' => 'necessitatibus',
        'sint' => 'officia',
    ];
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'dolorum';
    $request->key = 'in';
    $request->name = 'Angel Wolff II';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aliquid';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'non' => 'occaecati',
        'enim' => 'accusamus',
        'delectus' => 'quidem',
        'provident' => 'nam',
    ];
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

## tpuProjectsLocationsQueuedResourcesCreate

Creates a QueuedResource TPU instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsQueuedResourcesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueuedResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\Guaranteed;
use \OpenAPI\OpenAPI\Models\Shared\QueueingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\Interval;
use \OpenAPI\OpenAPI\Models\Shared\QueuedResourceState;
use \OpenAPI\OpenAPI\Models\Shared\FailedData;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\QueuedResourceStateStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TpuInput;
use \OpenAPI\OpenAPI\Models\Shared\NodeSpecInput;
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
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsQueuedResourcesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsQueuedResourcesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queuedResourceInput = new QueuedResourceInput();
    $request->queuedResourceInput->bestEffort = [
        'in' => 'architecto',
        'architecto' => 'repudiandae',
        'ullam' => 'expedita',
    ];
    $request->queuedResourceInput->guaranteed = new Guaranteed();
    $request->queuedResourceInput->guaranteed->minDuration = 'nihil';
    $request->queuedResourceInput->guaranteed->reserved = false;
    $request->queuedResourceInput->queueingPolicy = new QueueingPolicy();
    $request->queuedResourceInput->queueingPolicy->validAfterDuration = 'repellat';
    $request->queuedResourceInput->queueingPolicy->validAfterTime = 'quibusdam';
    $request->queuedResourceInput->queueingPolicy->validInterval = new Interval();
    $request->queuedResourceInput->queueingPolicy->validInterval->endTime = 'sed';
    $request->queuedResourceInput->queueingPolicy->validInterval->startTime = 'saepe';
    $request->queuedResourceInput->queueingPolicy->validUntilDuration = 'pariatur';
    $request->queuedResourceInput->queueingPolicy->validUntilTime = 'accusantium';
    $request->queuedResourceInput->reservationName = 'consequuntur';
    $request->queuedResourceInput->state = new QueuedResourceState();
    $request->queuedResourceInput->state->acceptedData = [
        'natus' => 'magni',
        'sunt' => 'quo',
        'illum' => 'pariatur',
    ];
    $request->queuedResourceInput->state->activeData = [
        'ea' => 'excepturi',
        'odit' => 'ea',
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->queuedResourceInput->state->creatingData = [
        'voluptate' => 'autem',
        'nam' => 'eaque',
    ];
    $request->queuedResourceInput->state->deletingData = [
        'nemo' => 'voluptatibus',
        'perferendis' => 'fugiat',
        'amet' => 'aut',
        'cumque' => 'corporis',
    ];
    $request->queuedResourceInput->state->failedData = new FailedData();
    $request->queuedResourceInput->state->failedData->error = new Status();
    $request->queuedResourceInput->state->failedData->error->code = 944124;
    $request->queuedResourceInput->state->failedData->error->details = [
        [
            'dolores' => 'quis',
            'totam' => 'dignissimos',
            'eaque' => 'quis',
        ],
        [
            'eos' => 'perferendis',
        ],
        [
            'minus' => 'quam',
        ],
    ];
    $request->queuedResourceInput->state->failedData->error->message = 'dolor';
    $request->queuedResourceInput->state->provisioningData = [
        'nostrum' => 'hic',
        'recusandae' => 'omnis',
        'facilis' => 'perspiciatis',
        'voluptatem' => 'porro',
    ];
    $request->queuedResourceInput->state->state = QueuedResourceStateStateEnum::CREATING;
    $request->queuedResourceInput->state->suspendedData = [
        'error' => 'eaque',
        'occaecati' => 'rerum',
        'adipisci' => 'asperiores',
    ];
    $request->queuedResourceInput->state->suspendingData = [
        'modi' => 'iste',
        'dolorum' => 'deleniti',
        'pariatur' => 'provident',
        'nobis' => 'libero',
    ];
    $request->queuedResourceInput->tpu = new TpuInput();
    $request->queuedResourceInput->tpu->nodeSpec = [
        new NodeSpecInput(),
        new NodeSpecInput(),
        new NodeSpecInput(),
        new NodeSpecInput(),
    ];
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'dolorem';
    $request->key = 'dolorem';
    $request->oauthToken = 'dolor';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->queuedResourceId = 'ipsum';
    $request->quotaUser = 'hic';
    $request->requestId = 'excepturi';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new TpuProjectsLocationsQueuedResourcesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsQueuedResourcesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsQueuedResourcesDelete

Deletes a QueuedResource TPU instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsQueuedResourcesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsQueuedResourcesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsQueuedResourcesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'numquam';
    $request->key = 'veritatis';
    $request->name = 'Angela Kerluke';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->requestId = 'voluptatibus';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new TpuProjectsLocationsQueuedResourcesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsQueuedResourcesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tpuProjectsLocationsQueuedResourcesList

Lists queued resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsQueuedResourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsQueuedResourcesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsQueuedResourcesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'ab';
    $request->key = 'soluta';
    $request->oauthToken = 'dolorum';
    $request->pageSize = 478596;
    $request->pageToken = 'voluptate';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new TpuProjectsLocationsQueuedResourcesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsQueuedResourcesList($request, $requestSecurity);

    if ($response->listQueuedResourcesResponse !== null) {
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
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'voluptate';
    $request->key = 'id';
    $request->name = 'Mrs. Ray Collins';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'suscipit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellendus';
    $request->fields = 'totam';
    $request->filter = 'similique';
    $request->key = 'alias';
    $request->oauthToken = 'at';
    $request->orderBy = 'quaerat';
    $request->pageSize = 273542;
    $request->pageToken = 'vel';
    $request->parent = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'dolorum';

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
