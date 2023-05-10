# projects

### Available Operations

* [datafusionProjectsLocationsInstancesCreate](#datafusionprojectslocationsinstancescreate) - Creates a new Data Fusion instance in the specified project and location.
* [datafusionProjectsLocationsInstancesDnsPeeringsCreate](#datafusionprojectslocationsinstancesdnspeeringscreate) - Creates DNS peering on the given resource.
* [datafusionProjectsLocationsInstancesDnsPeeringsList](#datafusionprojectslocationsinstancesdnspeeringslist) - Lists DNS peerings for a given resource.
* [datafusionProjectsLocationsInstancesList](#datafusionprojectslocationsinstanceslist) - Lists Data Fusion instances in the specified project and location.
* [datafusionProjectsLocationsInstancesNamespacesGetIamPolicy](#datafusionprojectslocationsinstancesnamespacesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datafusionProjectsLocationsInstancesNamespacesList](#datafusionprojectslocationsinstancesnamespaceslist) - List namespaces in a given instance
* [datafusionProjectsLocationsInstancesNamespacesSetIamPolicy](#datafusionprojectslocationsinstancesnamespacessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datafusionProjectsLocationsInstancesNamespacesTestIamPermissions](#datafusionprojectslocationsinstancesnamespacestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [datafusionProjectsLocationsInstancesPatch](#datafusionprojectslocationsinstancespatch) - Updates a single Data Fusion instance.
* [datafusionProjectsLocationsInstancesRestart](#datafusionprojectslocationsinstancesrestart) - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* [datafusionProjectsLocationsInstancesUpgrade](#datafusionprojectslocationsinstancesupgrade) - Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.
* [datafusionProjectsLocationsList](#datafusionprojectslocationslist) - Lists information about the supported locations for this service.
* [datafusionProjectsLocationsOperationsCancel](#datafusionprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datafusionProjectsLocationsOperationsDelete](#datafusionprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datafusionProjectsLocationsOperationsGet](#datafusionprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datafusionProjectsLocationsOperationsList](#datafusionprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datafusionProjectsLocationsRemoveIamPolicy](#datafusionprojectslocationsremoveiampolicy) - Remove IAM policy that is currently set on the given resource.
* [datafusionProjectsLocationsVersionsList](#datafusionprojectslocationsversionslist) - Lists possible versions for Data Fusion instances in the specified project and location.

## datafusionProjectsLocationsInstancesCreate

Creates a new Data Fusion instance in the specified project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyConfig;
use \OpenAPI\OpenAPI\Models\Shared\EventPublishConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->cryptoKeyConfig = new CryptoKeyConfig();
    $request->instanceInput->cryptoKeyConfig->keyReference = 'ipsam';
    $request->instanceInput->dataprocServiceAccount = 'repellendus';
    $request->instanceInput->description = 'sapiente';
    $request->instanceInput->displayName = 'quo';
    $request->instanceInput->enableRbac = false;
    $request->instanceInput->enableStackdriverLogging = false;
    $request->instanceInput->enableStackdriverMonitoring = false;
    $request->instanceInput->enableZoneSeparation = false;
    $request->instanceInput->eventPublishConfig = new EventPublishConfig();
    $request->instanceInput->eventPublishConfig->enabled = false;
    $request->instanceInput->eventPublishConfig->topic = 'odit';
    $request->instanceInput->labels = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->instanceInput->networkConfig = new NetworkConfig();
    $request->instanceInput->networkConfig->ipAllocation = 'dolorum';
    $request->instanceInput->networkConfig->network = 'dicta';
    $request->instanceInput->options = [
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
        'hic' => 'optio',
    ];
    $request->instanceInput->privateInstance = false;
    $request->instanceInput->type = InstanceTypeEnum::ENTERPRISE;
    $request->instanceInput->version = 'beatae';
    $request->instanceInput->zone = 'commodi';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'impedit';
    $request->instanceId = 'cum';
    $request->key = 'esse';
    $request->oauthToken = 'ipsum';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new DatafusionProjectsLocationsInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsInstancesDnsPeeringsCreate

Creates DNS peering on the given resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DnsPeering;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->dnsPeering = new DnsPeering();
    $request->dnsPeering->description = 'sed';
    $request->dnsPeering->domain = 'iste';
    $request->dnsPeering->name = 'Faye Howe';
    $request->dnsPeering->targetNetwork = 'fuga';
    $request->dnsPeering->targetProject = 'in';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->dnsPeeringId = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->oauthToken = 'ipsa';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesDnsPeeringsCreate($request, $requestSecurity);

    if ($response->dnsPeering !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsInstancesDnsPeeringsList

Lists DNS peerings for a given resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesDnsPeeringsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesDnsPeeringsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesDnsPeeringsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'nobis';
    $request->key = 'enim';
    $request->oauthToken = 'omnis';
    $request->pageSize = 363711;
    $request->pageToken = 'minima';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new DatafusionProjectsLocationsInstancesDnsPeeringsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesDnsPeeringsList($request, $requestSecurity);

    if ($response->listDnsPeeringsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsInstancesList

Lists Data Fusion instances in the specified project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dolorem';
    $request->filter = 'culpa';
    $request->key = 'consequuntur';
    $request->oauthToken = 'repellat';
    $request->orderBy = 'mollitia';
    $request->pageSize = 581850;
    $request->pageToken = 'numquam';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DatafusionProjectsLocationsInstancesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesList($request, $requestSecurity);

    if ($response->listInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsInstancesNamespacesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesNamespacesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->key = 'animi';
    $request->oauthToken = 'enim';
    $request->optionsRequestedPolicyVersion = 138183;
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->resource = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new DatafusionProjectsLocationsInstancesNamespacesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesNamespacesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsInstancesNamespacesList

List namespaces in a given instance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesNamespacesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesNamespacesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesNamespacesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesNamespacesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->key = 'temporibus';
    $request->oauthToken = 'laborum';
    $request->pageSize = 96098;
    $request->pageToken = 'reiciendis';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'praesentium';
    $request->view = DatafusionProjectsLocationsInstancesNamespacesListViewEnum::NAMESPACE_VIEW_FULL;

    $requestSecurity = new DatafusionProjectsLocationsInstancesNamespacesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesNamespacesList($request, $requestSecurity);

    if ($response->listNamespacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsInstancesNamespacesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'cum';
    $request->setIamPolicyRequest->policy->version = 19987;
    $request->setIamPolicyRequest->updateMask = 'doloremque';
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'dicta';
    $request->key = 'corporis';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->resource = 'dicta';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new DatafusionProjectsLocationsInstancesNamespacesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesNamespacesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsInstancesNamespacesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'repudiandae',
        'quae',
    ];
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'excepturi';
    $request->key = 'pariatur';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->resource = 'rem';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesNamespacesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsInstancesPatch

Updates a single Data Fusion instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyConfig;
use \OpenAPI\OpenAPI\Models\Shared\EventPublishConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->cryptoKeyConfig = new CryptoKeyConfig();
    $request->instanceInput->cryptoKeyConfig->keyReference = 'sint';
    $request->instanceInput->dataprocServiceAccount = 'veritatis';
    $request->instanceInput->description = 'itaque';
    $request->instanceInput->displayName = 'incidunt';
    $request->instanceInput->enableRbac = false;
    $request->instanceInput->enableStackdriverLogging = false;
    $request->instanceInput->enableStackdriverMonitoring = false;
    $request->instanceInput->enableZoneSeparation = false;
    $request->instanceInput->eventPublishConfig = new EventPublishConfig();
    $request->instanceInput->eventPublishConfig->enabled = false;
    $request->instanceInput->eventPublishConfig->topic = 'enim';
    $request->instanceInput->labels = [
        'est' => 'quibusdam',
    ];
    $request->instanceInput->networkConfig = new NetworkConfig();
    $request->instanceInput->networkConfig->ipAllocation = 'explicabo';
    $request->instanceInput->networkConfig->network = 'deserunt';
    $request->instanceInput->options = [
        'quibusdam' => 'labore',
        'modi' => 'qui',
        'aliquid' => 'cupiditate',
    ];
    $request->instanceInput->privateInstance = false;
    $request->instanceInput->type = InstanceTypeEnum::ENTERPRISE;
    $request->instanceInput->version = 'perferendis';
    $request->instanceInput->zone = 'magni';
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'fugit';
    $request->key = 'dolorum';
    $request->name = 'Eddie Prosacco';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->updateMask = 'non';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new DatafusionProjectsLocationsInstancesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsInstancesRestart

Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesRestartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesRestartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesRestartRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'necessitatibus' => 'sint',
        'officia' => 'dolor',
        'debitis' => 'a',
    ];
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'illum';
    $request->key = 'maiores';
    $request->name = 'Keith Gulgowski';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new DatafusionProjectsLocationsInstancesRestartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesRestart($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsInstancesUpgrade

Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesUpgradeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesUpgradeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesUpgradeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
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

    $requestSecurity = new DatafusionProjectsLocationsInstancesUpgradeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesUpgrade($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'suscipit';
    $request->filter = 'natus';
    $request->includeUnrevealedLocations = false;
    $request->key = 'nobis';
    $request->name = 'Mrs. Meghan Collins V';
    $request->oauthToken = 'ullam';
    $request->pageSize = 590873;
    $request->pageToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new DatafusionProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ad' => 'eum',
        'dolor' => 'necessitatibus',
        'odit' => 'nemo',
    ];
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'debitis';
    $request->key = 'eius';
    $request->name = 'Alfredo Prosacco Sr.';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new DatafusionProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'pariatur';
    $request->key = 'accusantium';
    $request->name = 'Irma Morissette DDS';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new DatafusionProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'ab';
    $request->key = 'maiores';
    $request->name = 'Clyde Kling';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new DatafusionProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'cumque';
    $request->filter = 'corporis';
    $request->key = 'hic';
    $request->name = 'Robin D'Amore';
    $request->oauthToken = 'dignissimos';
    $request->pageSize = 54338;
    $request->pageToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DatafusionProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsRemoveIamPolicy

Remove IAM policy that is currently set on the given resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsRemoveIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsRemoveIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsRemoveIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'quam' => 'dolor',
        'vero' => 'nostrum',
        'hic' => 'recusandae',
        'omnis' => 'facilis',
    ];
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'porro';
    $request->fields = 'consequuntur';
    $request->key = 'blanditiis';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->resource = 'occaecati';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'adipisci';

    $requestSecurity = new DatafusionProjectsLocationsRemoveIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsRemoveIamPolicy($request, $requestSecurity);

    if ($response->removeIamPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datafusionProjectsLocationsVersionsList

Lists possible versions for Data Fusion instances in the specified project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsVersionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->latestPatchOnly = false;
    $request->oauthToken = 'pariatur';
    $request->pageSize = 589910;
    $request->pageToken = 'nobis';
    $request->parent = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new DatafusionProjectsLocationsVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsVersionsList($request, $requestSecurity);

    if ($response->listAvailableVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
