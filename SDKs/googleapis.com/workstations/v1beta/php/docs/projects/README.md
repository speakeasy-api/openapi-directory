# projects

### Available Operations

* [workstationsProjectsLocationsOperationsCancel](#workstationsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [workstationsProjectsLocationsOperationsList](#workstationsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [workstationsProjectsLocationsWorkstationClustersCreate](#workstationsprojectslocationsworkstationclusterscreate) - Creates a new workstation cluster.
* [workstationsProjectsLocationsWorkstationClustersList](#workstationsprojectslocationsworkstationclusterslist) - Returns all workstation clusters in the specified location.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate](#workstationsprojectslocationsworkstationclustersworkstationconfigscreate) - Creates a new workstation configuration.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsList](#workstationsprojectslocationsworkstationclustersworkstationconfigslist) - Returns all workstation configurations in the specified cluster.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable](#workstationsprojectslocationsworkstationclustersworkstationconfigslistusable) - Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationscreate) - Creates a new workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsdelete) - Deletes the specified workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgenerateaccesstoken) - Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsget) - Returns the requested workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslist) - Returns all Workstations using the specified workstation configuration.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationslistusable) - Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationspatch) - Updates an existing workstation.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstart) - Starts running a workstation so that users can connect to it.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationsstop) - Stops running a workstation, reducing costs.
* [workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions](#workstationsprojectslocationsworkstationclustersworkstationconfigsworkstationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## workstationsProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsOperationsCancelRequest();
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

    $requestSecurity = new WorkstationsProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->filter = 'dolorum';
    $request->key = 'dicta';
    $request->name = 'Luke McCullough';
    $request->oauthToken = 'hic';
    $request->pageSize = 758616;
    $request->pageToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new WorkstationsProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersCreate

Creates a new workstation cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkstationClusterInput;
use \OpenAPI\OpenAPI\Models\Shared\PrivateClusterConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->workstationClusterInput = new WorkstationClusterInput();
    $request->workstationClusterInput->annotations = [
        'impedit' => 'cum',
    ];
    $request->workstationClusterInput->displayName = 'esse';
    $request->workstationClusterInput->etag = 'ipsum';
    $request->workstationClusterInput->labels = [
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
        'sed' => 'iste',
    ];
    $request->workstationClusterInput->name = 'Faye Howe';
    $request->workstationClusterInput->network = 'fuga';
    $request->workstationClusterInput->privateClusterConfig = new PrivateClusterConfigInput();
    $request->workstationClusterInput->privateClusterConfig->allowedProjects = [
        'corporis',
        'iste',
    ];
    $request->workstationClusterInput->privateClusterConfig->enablePrivateEndpoint = false;
    $request->workstationClusterInput->subnetwork = 'iure';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'ipsa';
    $request->key = 'reiciendis';
    $request->oauthToken = 'est';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'dolorem';
    $request->validateOnly = false;
    $request->workstationClusterId = 'corporis';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersList

Returns all workstation clusters in the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'nemo';
    $request->key = 'minima';
    $request->oauthToken = 'excepturi';
    $request->pageSize = 38425;
    $request->pageToken = 'iure';
    $request->parent = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersList($request, $requestSecurity);

    if ($response->listWorkstationClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate

Creates a new workstation configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkstationConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\Container;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\HostInput;
use \OpenAPI\OpenAPI\Models\Shared\GceInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\Accelerator;
use \OpenAPI\OpenAPI\Models\Shared\GceConfidentialInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\GceShieldedInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\PersistentDirectory;
use \OpenAPI\OpenAPI\Models\Shared\GceRegionalPersistentDisk;
use \OpenAPI\OpenAPI\Models\Shared\GceRegionalPersistentDiskReclaimPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReadinessCheck;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->workstationConfigInput = new WorkstationConfigInput();
    $request->workstationConfigInput->annotations = [
        'culpa' => 'consequuntur',
    ];
    $request->workstationConfigInput->container = new Container();
    $request->workstationConfigInput->container->args = [
        'mollitia',
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->workstationConfigInput->container->command = [
        'molestiae',
        'velit',
    ];
    $request->workstationConfigInput->container->env = [
        'quia' => 'quis',
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->workstationConfigInput->container->image = 'odit';
    $request->workstationConfigInput->container->runAsUser = 778346;
    $request->workstationConfigInput->container->workingDir = 'sequi';
    $request->workstationConfigInput->displayName = 'tenetur';
    $request->workstationConfigInput->enableAuditAgent = false;
    $request->workstationConfigInput->encryptionKey = new CustomerEncryptionKey();
    $request->workstationConfigInput->encryptionKey->kmsKey = 'ipsam';
    $request->workstationConfigInput->encryptionKey->kmsKeyServiceAccount = 'id';
    $request->workstationConfigInput->etag = 'possimus';
    $request->workstationConfigInput->host = new HostInput();
    $request->workstationConfigInput->host->gceInstance = new GceInstanceInput();
    $request->workstationConfigInput->host->gceInstance->accelerators = [
        new Accelerator(),
    ];
    $request->workstationConfigInput->host->gceInstance->bootDiskSizeGb = 97101;
    $request->workstationConfigInput->host->gceInstance->confidentialInstanceConfig = new GceConfidentialInstanceConfig();
    $request->workstationConfigInput->host->gceInstance->confidentialInstanceConfig->enableConfidentialCompute = false;
    $request->workstationConfigInput->host->gceInstance->disablePublicIpAddresses = false;
    $request->workstationConfigInput->host->gceInstance->machineType = 'error';
    $request->workstationConfigInput->host->gceInstance->poolSize = 837945;
    $request->workstationConfigInput->host->gceInstance->serviceAccount = 'laborum';
    $request->workstationConfigInput->host->gceInstance->shieldedInstanceConfig = new GceShieldedInstanceConfig();
    $request->workstationConfigInput->host->gceInstance->shieldedInstanceConfig->enableIntegrityMonitoring = false;
    $request->workstationConfigInput->host->gceInstance->shieldedInstanceConfig->enableSecureBoot = false;
    $request->workstationConfigInput->host->gceInstance->shieldedInstanceConfig->enableVtpm = false;
    $request->workstationConfigInput->host->gceInstance->tags = [
        'reiciendis',
    ];
    $request->workstationConfigInput->idleTimeout = 'voluptatibus';
    $request->workstationConfigInput->labels = [
        'nihil' => 'praesentium',
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
        'cum' => 'perferendis',
    ];
    $request->workstationConfigInput->name = 'Bessie Grady II';
    $request->workstationConfigInput->persistentDirectories = [
        new PersistentDirectory(),
        new PersistentDirectory(),
    ];
    $request->workstationConfigInput->readinessChecks = [
        new ReadinessCheck(),
        new ReadinessCheck(),
    ];
    $request->workstationConfigInput->runningTimeout = 'dicta';
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'commodi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quae';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'excepturi';
    $request->validateOnly = false;
    $request->workstationConfigId = 'pariatur';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsList

Returns all workstation configurations in the specified cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->fields = 'quasi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'sint';
    $request->pageSize = 83112;
    $request->pageToken = 'itaque';
    $request->parent = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsList($request, $requestSecurity);

    if ($response->listWorkstationConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable

Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'quibusdam';
    $request->key = 'labore';
    $request->oauthToken = 'modi';
    $request->pageSize = 183191;
    $request->pageToken = 'aliquid';
    $request->parent = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsableSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsListUsable($request, $requestSecurity);

    if ($response->listUsableWorkstationConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate

Creates a new workstation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkstationInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->workstationInput = new WorkstationInput();
    $request->workstationInput->annotations = [
        'alias' => 'fugit',
        'dolorum' => 'excepturi',
    ];
    $request->workstationInput->displayName = 'tempora';
    $request->workstationInput->env = [
        'tempore' => 'labore',
        'delectus' => 'eum',
        'non' => 'eligendi',
    ];
    $request->workstationInput->etag = 'sint';
    $request->workstationInput->labels = [
        'provident' => 'necessitatibus',
        'sint' => 'officia',
    ];
    $request->workstationInput->name = 'Raquel Wilderman';
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->oauthToken = 'magnam';
    $request->parent = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aliquid';
    $request->validateOnly = false;
    $request->workstationId = 'laborum';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete

Deletes the specified workstation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->etag = 'accusamus';
    $request->fields = 'delectus';
    $request->key = 'quidem';
    $request->name = 'Marco Olson';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nisi';
    $request->validateOnly = false;

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken

Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->generateAccessTokenRequest = new GenerateAccessTokenRequest();
    $request->generateAccessTokenRequest->expireTime = 'natus';
    $request->generateAccessTokenRequest->ttl = 'omnis';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'magnam';
    $request->key = 'distinctio';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'suscipit';
    $request->workstation = 'natus';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGenerateAccessToken($request, $requestSecurity);

    if ($response->generateAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet

Returns the requested workstation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'architecto';
    $request->key = 'magnam';
    $request->name = 'Miriam Hermann';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGet($request, $requestSecurity);

    if ($response->workstation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'necessitatibus';
    $request->key = 'odit';
    $request->oauthToken = 'nemo';
    $request->optionsRequestedPolicyVersion = 97260;
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->resource = 'doloribus';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList

Returns all Workstations using the specified workstation configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'architecto';
    $request->key = 'architecto';
    $request->oauthToken = 'repudiandae';
    $request->pageSize = 352312;
    $request->pageToken = 'expedita';
    $request->parent = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsList($request, $requestSecurity);

    if ($response->listWorkstationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable

Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'praesentium';
    $request->key = 'natus';
    $request->oauthToken = 'magni';
    $request->pageSize = 123820;
    $request->pageToken = 'quo';
    $request->parent = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsableSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsListUsable($request, $requestSecurity);

    if ($response->listUsableWorkstationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch

Updates an existing workstation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkstationInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->workstationInput = new WorkstationInput();
    $request->workstationInput->annotations = [
        'ea' => 'accusantium',
    ];
    $request->workstationInput->displayName = 'ab';
    $request->workstationInput->env = [
        'quidem' => 'ipsam',
        'voluptate' => 'autem',
        'nam' => 'eaque',
        'pariatur' => 'nemo',
    ];
    $request->workstationInput->etag = 'voluptatibus';
    $request->workstationInput->labels = [
        'fugiat' => 'amet',
    ];
    $request->workstationInput->name = 'Erma Hessel';
    $request->accessToken = 'nobis';
    $request->allowMissing = false;
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'totam';
    $request->key = 'dignissimos';
    $request->name = 'Beatrice Dooley Sr.';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->updateMask = 'dolor';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nostrum';
    $request->validateOnly = false;

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'facilis';
    $request->setIamPolicyRequest->policy->version = 596656;
    $request->setIamPolicyRequest->updateMask = 'voluptatem';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::JSON;
    $request->callback = 'blanditiis';
    $request->fields = 'error';
    $request->key = 'eaque';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->resource = 'adipisci';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'earum';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart

Starts running a workstation so that users can connect to it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartWorkstationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->startWorkstationRequest = new StartWorkstationRequest();
    $request->startWorkstationRequest->etag = 'iste';
    $request->startWorkstationRequest->validateOnly = false;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'provident';
    $request->key = 'nobis';
    $request->name = 'Toby Hahn';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStart($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop

Stops running a workstation, reducing costs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StopWorkstationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->stopWorkstationRequest = new StopWorkstationRequest();
    $request->stopWorkstationRequest->etag = 'hic';
    $request->stopWorkstationRequest->validateOnly = false;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'dignissimos';
    $request->key = 'reiciendis';
    $request->name = 'Mr. Lee Funk III';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStopSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsStop($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'natus',
        'eos',
    ];
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'ab';
    $request->key = 'soluta';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->resource = 'voluptate';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->workstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
