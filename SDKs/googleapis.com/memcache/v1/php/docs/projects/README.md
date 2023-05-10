# projects

### Available Operations

* [memcacheProjectsLocationsInstancesApplyParameters](#memcacheprojectslocationsinstancesapplyparameters) - `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
* [memcacheProjectsLocationsInstancesCreate](#memcacheprojectslocationsinstancescreate) - Creates a new Instance in a given location.
* [memcacheProjectsLocationsInstancesList](#memcacheprojectslocationsinstanceslist) - Lists Instances in a given location.
* [memcacheProjectsLocationsInstancesPatch](#memcacheprojectslocationsinstancespatch) - Updates an existing Instance in a given project and location.
* [memcacheProjectsLocationsInstancesRescheduleMaintenance](#memcacheprojectslocationsinstancesreschedulemaintenance) - Reschedules upcoming maintenance event.
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMemcacheV1MaintenancePolicyInput;
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
    $request->instanceInput->authorizedNetwork = 'maiores';
    $request->instanceInput->displayName = 'molestiae';
    $request->instanceInput->instanceMessages = [
        new InstanceMessage(),
        new InstanceMessage(),
        new InstanceMessage(),
        new InstanceMessage(),
    ];
    $request->instanceInput->labels = [
        'esse' => 'totam',
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->instanceInput->maintenancePolicy = new GoogleCloudMemcacheV1MaintenancePolicyInput();
    $request->instanceInput->maintenancePolicy->description = 'fugit';
    $request->instanceInput->maintenancePolicy->weeklyMaintenanceWindow = [
        new WeeklyMaintenanceWindow(),
        new WeeklyMaintenanceWindow(),
        new WeeklyMaintenanceWindow(),
    ];
    $request->instanceInput->memcacheVersion = InstanceMemcacheVersionEnum::MEMCACHE15;
    $request->instanceInput->name = 'Everett Breitenberg';
    $request->instanceInput->nodeConfig = new NodeConfig();
    $request->instanceInput->nodeConfig->cpuCount = 264555;
    $request->instanceInput->nodeConfig->memorySizeMb = 186332;
    $request->instanceInput->nodeCount = 774234;
    $request->instanceInput->parameters = new MemcacheParametersInput();
    $request->instanceInput->parameters->params = [
        'esse' => 'ipsum',
        'excepturi' => 'aspernatur',
        'perferendis' => 'ad',
    ];
    $request->instanceInput->zones = [
        'sed',
        'iste',
        'dolor',
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'saepe';
    $request->instanceId = 'fuga';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

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
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->filter = 'laborum';
    $request->key = 'dolores';
    $request->oauthToken = 'dolorem';
    $request->orderBy = 'corporis';
    $request->pageSize = 128926;
    $request->pageToken = 'nobis';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudMemcacheV1MaintenancePolicyInput;
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
    $request->instanceInput->authorizedNetwork = 'accusantium';
    $request->instanceInput->displayName = 'iure';
    $request->instanceInput->instanceMessages = [
        new InstanceMessage(),
        new InstanceMessage(),
        new InstanceMessage(),
    ];
    $request->instanceInput->labels = [
        'sapiente' => 'architecto',
        'mollitia' => 'dolorem',
        'culpa' => 'consequuntur',
        'repellat' => 'mollitia',
    ];
    $request->instanceInput->maintenancePolicy = new GoogleCloudMemcacheV1MaintenancePolicyInput();
    $request->instanceInput->maintenancePolicy->description = 'occaecati';
    $request->instanceInput->maintenancePolicy->weeklyMaintenanceWindow = [
        new WeeklyMaintenanceWindow(),
        new WeeklyMaintenanceWindow(),
    ];
    $request->instanceInput->memcacheVersion = InstanceMemcacheVersionEnum::MEMCACHE_VERSION_UNSPECIFIED;
    $request->instanceInput->name = 'Nellie Frami';
    $request->instanceInput->nodeConfig = new NodeConfig();
    $request->instanceInput->nodeConfig->cpuCount = 338007;
    $request->instanceInput->nodeConfig->memorySizeMb = 110375;
    $request->instanceInput->nodeCount = 674752;
    $request->instanceInput->parameters = new MemcacheParametersInput();
    $request->instanceInput->parameters->params = [
        'enim' => 'odit',
        'quo' => 'sequi',
        'tenetur' => 'ipsam',
    ];
    $request->instanceInput->zones = [
        'possimus',
        'aut',
        'quasi',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'quasi';
    $request->key = 'reiciendis';
    $request->name = 'Caleb Koss';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->updateMask = 'voluptate';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'perferendis';

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

Reschedules upcoming maintenance event.

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
    $request->rescheduleMaintenanceRequest->scheduleTime = 'ut';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->instance = 'iusto';
    $request->key = 'dicta';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'commodi';

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
        'ipsum' => 'quidem',
    ];
    $request->updateParametersRequestInput->updateMask = 'molestias';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->name = 'Carl Waelchi DVM';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'quibusdam';
    $request->filter = 'labore';
    $request->key = 'modi';
    $request->name = 'Beth McGlynn Sr.';
    $request->oauthToken = 'assumenda';
    $request->pageSize = 369808;
    $request->pageToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'excepturi';

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
        'tempore' => 'labore',
        'delectus' => 'eum',
        'non' => 'eligendi',
    ];
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'necessitatibus';
    $request->key = 'sint';
    $request->name = 'Curtis Toy';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'maiores';

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
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'facere';
    $request->key = 'ea';
    $request->name = 'Kayla Thompson';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->fields = 'deleniti';
    $request->key = 'sapiente';
    $request->name = 'Sandy Huels';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'nihil';

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
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'labore';
    $request->filter = 'suscipit';
    $request->key = 'natus';
    $request->name = 'Duane Thiel II';
    $request->oauthToken = 'et';
    $request->pageSize = 569965;
    $request->pageToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';

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
