# projects

### Available Operations

* [remotebuildexecutionProjectsInstancesCreate](#remotebuildexecutionprojectsinstancescreate) - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
* [remotebuildexecutionProjectsInstancesList](#remotebuildexecutionprojectsinstanceslist) - Lists instances in a project.
* [remotebuildexecutionProjectsInstancesTestNotify](#remotebuildexecutionprojectsinstancestestnotify) - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
* [remotebuildexecutionProjectsInstancesWorkerpoolsCreate](#remotebuildexecutionprojectsinstancesworkerpoolscreate) - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
* [remotebuildexecutionProjectsInstancesWorkerpoolsDelete](#remotebuildexecutionprojectsinstancesworkerpoolsdelete) - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
* [remotebuildexecutionProjectsInstancesWorkerpoolsList](#remotebuildexecutionprojectsinstancesworkerpoolslist) - Lists worker pools in an instance.
* [remotebuildexecutionProjectsInstancesWorkerpoolsPatch](#remotebuildexecutionprojectsinstancesworkerpoolspatch) - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
* [remotebuildexecutionProjectsOperationsGet](#remotebuildexecutionprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## remotebuildexecutionProjectsInstancesCreate

Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemotebuildexecutionProjectsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->actionHermeticity = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum::ACTION_HERMETICITY_ENFORCED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->actionIsolation = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum::ACTION_ISOLATION_UNSPECIFIED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->containerImageSources = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->containerImageSources->allowedValues = [
        'dolor',
        'natus',
        'laboriosam',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->containerImageSources->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::RESTRICTED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerAddCapabilities = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerAddCapabilities->allowedValues = [
        'fuga',
        'in',
        'corporis',
        'iste',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerAddCapabilities->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::ALLOWED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerChrootPath = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerChrootPath->allowedValues = [
        'quidem',
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerChrootPath->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::FORBIDDEN;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerNetwork = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerNetwork->allowedValues = [
        'laborum',
        'dolores',
        'dolorem',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerNetwork->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::ALLOWED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerPrivileged = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerPrivileged->allowedValues = [
        'nobis',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerPrivileged->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::ALLOWED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRunAsContainerProvidedUser = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRunAsContainerProvidedUser->allowedValues = [
        'nemo',
        'minima',
        'excepturi',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRunAsContainerProvidedUser->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::POLICY_UNSPECIFIED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRunAsRoot = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRunAsRoot->allowedValues = [
        'culpa',
        'doloribus',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRunAsRoot->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::RESTRICTED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRuntime = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRuntime->allowedValues = [
        'mollitia',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerRuntime->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::POLICY_UNSPECIFIED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerSiblingContainers = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerSiblingContainers->allowedValues = [
        'consequuntur',
        'repellat',
        'mollitia',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->dockerSiblingContainers->policy = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum::FORBIDDEN;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->linuxExecution = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum::LINUX_EXECUTION_FORBIDDEN;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->linuxIsolation = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum::GVISOR;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->macExecution = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum::MAC_EXECUTION_UNSPECIFIED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->vmVerification = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum::VM_VERIFICATION_GCP_TOKEN;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->featurePolicy->windowsExecution = GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum::WINDOWS_EXECUTION_UNSPECIFIED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->location = 'error';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->schedulerNotificationConfig = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instance->schedulerNotificationConfig->topic = 'quia';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->instanceId = 'quis';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput->parent = 'vitae';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'odit';
    $request->key = 'quo';
    $request->oauthToken = 'sequi';
    $request->parent = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new RemotebuildexecutionProjectsInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->remotebuildexecutionProjectsInstancesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## remotebuildexecutionProjectsInstancesList

Lists instances in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemotebuildexecutionProjectsInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'laborum';
    $request->key = 'quasi';
    $request->oauthToken = 'reiciendis';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new RemotebuildexecutionProjectsInstancesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->remotebuildexecutionProjectsInstancesList($request, $requestSecurity);

    if ($response->googleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## remotebuildexecutionProjectsInstancesTestNotify

Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesTestNotifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesTestNotifySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemotebuildexecutionProjectsInstancesTestNotifyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'omnis' => 'voluptate',
    ];
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->key = 'ut';
    $request->name = 'Willie Hessel';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new RemotebuildexecutionProjectsInstancesTestNotifySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->remotebuildexecutionProjectsInstancesTestNotify($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## remotebuildexecutionProjectsInstancesWorkerpoolsCreate

Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->parent = 'repudiandae';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->poolId = 'quae';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->autoscale = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->autoscale->maxSize = 'ipsum';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->autoscale->minSize = 'quidem';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->channel = 'molestias';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->hostOs = 'excepturi';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->name = 'Joel Lang';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->state = GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum::STATE_UNSPECIFIED;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->accelerator = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->accelerator->acceleratorCount = 'repudiandae';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->accelerator->acceleratorType = 'sint';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->diskSizeGb = 'veritatis';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->diskType = 'itaque';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->labels = [
        'enim' => 'consequatur',
        'est' => 'quibusdam',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->machineType = 'explicabo';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->maxConcurrentActions = 'deserunt';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->minCpuPlatform = 'distinctio';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->networkAccess = 'quibusdam';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->reserved = false;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->soleTenantNodeType = 'labore';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerConfig->vmImage = 'modi';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest->workerPool->workerCount = 'qui';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'perferendis';
    $request->key = 'magni';
    $request->oauthToken = 'assumenda';
    $request->parent = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->remotebuildexecutionProjectsInstancesWorkerpoolsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## remotebuildexecutionProjectsInstancesWorkerpoolsDelete

Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
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

    $requestSecurity = new RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->remotebuildexecutionProjectsInstancesWorkerpoolsDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## remotebuildexecutionProjectsInstancesWorkerpoolsList

Lists worker pools in an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'in';
    $request->filter = 'in';
    $request->key = 'illum';
    $request->oauthToken = 'maiores';
    $request->parent = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->remotebuildexecutionProjectsInstancesWorkerpoolsList($request, $requestSecurity);

    if ($response->googleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## remotebuildexecutionProjectsInstancesWorkerpoolsPatch

Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->updateMask = 'ea';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->autoscale = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->autoscale->maxSize = 'aliquid';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->autoscale->minSize = 'laborum';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->channel = 'accusamus';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->hostOs = 'non';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->name = 'Jon Tillman';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->state = GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum::UPDATING;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->accelerator = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig();
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->accelerator->acceleratorCount = 'nam';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->accelerator->acceleratorType = 'id';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->diskSizeGb = 'blanditiis';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->diskType = 'deleniti';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->labels = [
        'amet' => 'deserunt',
        'nisi' => 'vel',
        'natus' => 'omnis',
        'molestiae' => 'perferendis',
    ];
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->machineType = 'nihil';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->maxConcurrentActions = 'magnam';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->minCpuPlatform = 'distinctio';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->networkAccess = 'id';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->reserved = false;
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->soleTenantNodeType = 'labore';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerConfig->vmImage = 'labore';
    $request->googleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest->workerPool->workerCount = 'suscipit';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'vero';
    $request->key = 'aspernatur';
    $request->loggingEnabled = false;
    $request->name = 'Danielle Bosco';
    $request->name1 = 'provident';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->updateMask = 'accusantium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->remotebuildexecutionProjectsInstancesWorkerpoolsPatch($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## remotebuildexecutionProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RemotebuildexecutionProjectsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemotebuildexecutionProjectsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'necessitatibus';
    $request->key = 'odit';
    $request->name = 'Joyce Kertzmann';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new RemotebuildexecutionProjectsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->remotebuildexecutionProjectsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
