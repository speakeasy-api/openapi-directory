# projects

### Available Operations

* [memcacheProjectsLocationsInstancesApplyParameters](#memcacheprojectslocationsinstancesapplyparameters) - `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
* [memcacheProjectsLocationsInstancesApplySoftwareUpdate](#memcacheprojectslocationsinstancesapplysoftwareupdate) - Updates software on the selected nodes of the Instance.
* [memcacheProjectsLocationsInstancesCreate](#memcacheprojectslocationsinstancescreate) - Creates a new Instance in a given location.
* [memcacheProjectsLocationsInstancesList](#memcacheprojectslocationsinstanceslist) - Lists Instances in a given location.
* [memcacheProjectsLocationsInstancesPatch](#memcacheprojectslocationsinstancespatch) - Updates an existing Instance in a given project and location.
* [memcacheProjectsLocationsInstancesRescheduleMaintenance](#memcacheprojectslocationsinstancesreschedulemaintenance) - Performs the apply phase of the RescheduleMaintenance verb.
* [memcacheProjectsLocationsInstancesUpdateParameters](#memcacheprojectslocationsinstancesupdateparameters) - Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.
* [memcacheProjectsLocationsList](#memcacheprojectslocationslist) - Lists information about the supported locations for this service.
* [memcacheProjectsLocationsOperationsCancel](#memcacheprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [memcacheProjectsLocationsOperationsDelete](#memcacheprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [memcacheProjectsLocationsOperationsGet](#memcacheprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [memcacheProjectsLocationsOperationsList](#memcacheprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## memcacheProjectsLocationsInstancesApplyParameters

`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesApplyParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplyParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesApplyParametersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsInstancesApplyParametersRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->applyParametersRequest = new ApplyParametersRequest();
    $request->applyParametersRequest->applyAll = false;
    $request->applyParametersRequest->nodeIds = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->fields = 'ab';
    $request->key = 'quis';
    $request->name = 'Iris Aufderhar';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $requestSecurity = new MemcacheProjectsLocationsInstancesApplyParametersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsInstancesApplyParameters($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## memcacheProjectsLocationsInstancesApplySoftwareUpdate

Updates software on the selected nodes of the Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesApplySoftwareUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplySoftwareUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesApplySoftwareUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsInstancesApplySoftwareUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->applySoftwareUpdateRequest = new ApplySoftwareUpdateRequest();
    $request->applySoftwareUpdateRequest->applyAll = false;
    $request->applySoftwareUpdateRequest->nodeIds = [
        'molestiae',
        'quod',
        'quod',
        'esse',
    ];
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'dicta';
    $request->instance = 'nam';
    $request->key = 'officia';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new MemcacheProjectsLocationsInstancesApplySoftwareUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsInstancesApplySoftwareUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## memcacheProjectsLocationsInstancesCreate

Creates a new Instance in a given location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceMessage;
use \OpenAPI\OpenAPI\Models\Shared\InstanceMessageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMemcacheV1beta2MaintenancePolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\WeeklyMaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\WeeklyMaintenanceWindowDayEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\InstanceMemcacheVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\MemcacheParametersInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->authorizedNetwork = 'totam';
    $request->instanceInput->displayName = 'beatae';
    $request->instanceInput->instanceMessages = [
        new InstanceMessage(),
        new InstanceMessage(),
    ];
    $request->instanceInput->labels = [
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->instanceInput->maintenancePolicy = new GoogleCloudMemcacheV1beta2MaintenancePolicyInput();
    $request->instanceInput->maintenancePolicy->description = 'esse';
    $request->instanceInput->maintenancePolicy->weeklyMaintenanceWindow = [
        new WeeklyMaintenanceWindow(),
    ];
    $request->instanceInput->memcacheVersion = InstanceMemcacheVersionEnum::MEMCACHE15;
    $request->instanceInput->name = 'Dorothy Hane';
    $request->instanceInput->nodeConfig = new NodeConfig();
    $request->instanceInput->nodeConfig->cpuCount = 612096;
    $request->instanceInput->nodeConfig->memorySizeMb = 222321;
    $request->instanceInput->nodeCount = 616934;
    $request->instanceInput->parameters = new MemcacheParametersInput();
    $request->instanceInput->parameters->params = [
        'hic' => 'saepe',
        'fuga' => 'in',
    ];
    $request->instanceInput->zones = [
        'iste',
        'iure',
    ];
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'ipsa';
    $request->instanceId = 'reiciendis';
    $request->key = 'est';
    $request->oauthToken = 'mollitia';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new MemcacheProjectsLocationsInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsInstancesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## memcacheProjectsLocationsInstancesList

Lists Instances in a given location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'nemo';
    $request->filter = 'minima';
    $request->key = 'excepturi';
    $request->oauthToken = 'accusantium';
    $request->orderBy = 'iure';
    $request->pageSize = 634274;
    $request->pageToken = 'doloribus';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new MemcacheProjectsLocationsInstancesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsInstancesList($request, $requestSecurity);

    if ($response->listInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## memcacheProjectsLocationsInstancesPatch

Updates an existing Instance in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceMessage;
use \OpenAPI\OpenAPI\Models\Shared\InstanceMessageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMemcacheV1beta2MaintenancePolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\WeeklyMaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\WeeklyMaintenanceWindowDayEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\InstanceMemcacheVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\MemcacheParametersInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsInstancesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->authorizedNetwork = 'consequuntur';
    $request->instanceInput->displayName = 'repellat';
    $request->instanceInput->instanceMessages = [
        new InstanceMessage(),
        new InstanceMessage(),
        new InstanceMessage(),
    ];
    $request->instanceInput->labels = [
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->instanceInput->maintenancePolicy = new GoogleCloudMemcacheV1beta2MaintenancePolicyInput();
    $request->instanceInput->maintenancePolicy->description = 'quia';
    $request->instanceInput->maintenancePolicy->weeklyMaintenanceWindow = [
        new WeeklyMaintenanceWindow(),
        new WeeklyMaintenanceWindow(),
    ];
    $request->instanceInput->memcacheVersion = InstanceMemcacheVersionEnum::MEMCACHE_VERSION_UNSPECIFIED;
    $request->instanceInput->name = 'Matt Hamill';
    $request->instanceInput->nodeConfig = new NodeConfig();
    $request->instanceInput->nodeConfig->cpuCount = 196582;
    $request->instanceInput->nodeConfig->memorySizeMb = 949572;
    $request->instanceInput->nodeCount = 368725;
    $request->instanceInput->parameters = new MemcacheParametersInput();
    $request->instanceInput->parameters->params = [
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->instanceInput->zones = [
        'reiciendis',
    ];
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'praesentium';
    $request->key = 'voluptatibus';
    $request->name = 'Geneva Klein Jr.';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->updateMask = 'maiores';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new MemcacheProjectsLocationsInstancesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsInstancesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## memcacheProjectsLocationsInstancesRescheduleMaintenance

Performs the apply phase of the RescheduleMaintenance verb.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RescheduleMaintenanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RescheduleMaintenanceRequestRescheduleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->rescheduleMaintenanceRequest = new RescheduleMaintenanceRequest();
    $request->rescheduleMaintenanceRequest->rescheduleType = RescheduleMaintenanceRequestRescheduleTypeEnum::IMMEDIATE;
    $request->rescheduleMaintenanceRequest->scheduleTime = 'dicta';
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'commodi';
    $request->instance = 'repudiandae';
    $request->key = 'quae';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsInstancesRescheduleMaintenance($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## memcacheProjectsLocationsInstancesUpdateParameters

Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesUpdateParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateParametersRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\MemcacheParametersInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesUpdateParametersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsInstancesUpdateParametersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateParametersRequestInput = new UpdateParametersRequestInput();
    $request->updateParametersRequestInput->parameters = new MemcacheParametersInput();
    $request->updateParametersRequestInput->parameters->params = [
        'praesentium' => 'rem',
        'voluptates' => 'quasi',
    ];
    $request->updateParametersRequestInput->updateMask = 'repudiandae';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'itaque';
    $request->fields = 'incidunt';
    $request->key = 'enim';
    $request->name = 'Monique Spinka';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new MemcacheProjectsLocationsInstancesUpdateParametersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsInstancesUpdateParameters($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## memcacheProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'perferendis';
    $request->filter = 'magni';
    $request->key = 'assumenda';
    $request->name = 'Linda Corkery';
    $request->oauthToken = 'tempora';
    $request->pageSize = 703737;
    $request->pageToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new MemcacheProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## memcacheProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'sint' => 'aliquid',
        'provident' => 'necessitatibus',
        'sint' => 'officia',
        'dolor' => 'debitis',
    ];
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->name = 'Jean Buckridge';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new MemcacheProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## memcacheProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'delectus';
    $request->name = 'Rene Reinger';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new MemcacheProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## memcacheProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'molestiae';
    $request->key = 'perferendis';
    $request->name = 'Megan Rau';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new MemcacheProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## memcacheProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'magnam';
    $request->filter = 'et';
    $request->key = 'excepturi';
    $request->name = 'Ramona Lueilwitz MD';
    $request->oauthToken = 'reiciendis';
    $request->pageSize = 652103;
    $request->pageToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new MemcacheProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
