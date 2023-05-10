# projects

### Available Operations

* [eventarcProjectsLocationsList](#eventarcprojectslocationslist) - Lists information about the supported locations for this service.
* [eventarcProjectsLocationsOperationsCancel](#eventarcprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [eventarcProjectsLocationsOperationsList](#eventarcprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [eventarcProjectsLocationsTriggersCreate](#eventarcprojectslocationstriggerscreate) - Create a new trigger in a particular project and location.
* [eventarcProjectsLocationsTriggersDelete](#eventarcprojectslocationstriggersdelete) - Delete a single trigger.
* [eventarcProjectsLocationsTriggersGet](#eventarcprojectslocationstriggersget) - Get a single trigger.
* [eventarcProjectsLocationsTriggersGetIamPolicy](#eventarcprojectslocationstriggersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [eventarcProjectsLocationsTriggersList](#eventarcprojectslocationstriggerslist) - List triggers.
* [eventarcProjectsLocationsTriggersPatch](#eventarcprojectslocationstriggerspatch) - Update a single trigger.
* [eventarcProjectsLocationsTriggersSetIamPolicy](#eventarcprojectslocationstriggerssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [eventarcProjectsLocationsTriggersTestIamPermissions](#eventarcprojectslocationstriggerstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## eventarcProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->filter = 'iusto';
    $request->key = 'excepturi';
    $request->name = 'Mrs. Sophie Smith MD';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 368241;
    $request->pageToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new EventarcProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'maiores' => 'molestiae',
        'quod' => 'quod',
        'esse' => 'totam',
        'porro' => 'dolorum',
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->name = 'Irvin Rosenbaum III';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new EventarcProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->filter = 'perferendis';
    $request->key = 'ad';
    $request->name = 'Louis Moore';
    $request->oauthToken = 'laboriosam';
    $request->pageSize = 943749;
    $request->pageToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new EventarcProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersCreate

Create a new trigger in a particular project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerInput;
use \OpenAPI\OpenAPI\Models\Shared\Destination;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunService;
use \OpenAPI\OpenAPI\Models\Shared\MatchingCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TransportInput;
use \OpenAPI\OpenAPI\Models\Shared\PubsubInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->triggerInput = new TriggerInput();
    $request->triggerInput->destination = new Destination();
    $request->triggerInput->destination->cloudRunService = new CloudRunService();
    $request->triggerInput->destination->cloudRunService->path = 'iure';
    $request->triggerInput->destination->cloudRunService->region = 'saepe';
    $request->triggerInput->destination->cloudRunService->service = 'quidem';
    $request->triggerInput->labels = [
        'ipsa' => 'reiciendis',
    ];
    $request->triggerInput->matchingCriteria = [
        new MatchingCriteria(),
        new MatchingCriteria(),
        new MatchingCriteria(),
    ];
    $request->triggerInput->name = 'Cameron Dach';
    $request->triggerInput->serviceAccount = 'explicabo';
    $request->triggerInput->transport = new TransportInput();
    $request->triggerInput->transport->pubsub = new PubsubInput();
    $request->triggerInput->transport->pubsub->topic = 'nobis';
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'minima';
    $request->key = 'excepturi';
    $request->oauthToken = 'accusantium';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->triggerId = 'doloribus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'architecto';
    $request->validateOnly = false;

    $requestSecurity = new EventarcProjectsLocationsTriggersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersDelete

Delete a single trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorem';
    $request->allowMissing = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->etag = 'repellat';
    $request->fields = 'mollitia';
    $request->key = 'occaecati';
    $request->name = 'Lucy Konopelski';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'quia';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'vitae';
    $request->validateOnly = false;

    $requestSecurity = new EventarcProjectsLocationsTriggersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersGet

Get a single trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odit';
    $request->fields = 'quo';
    $request->key = 'sequi';
    $request->name = 'Vernon Ondricka Sr.';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new EventarcProjectsLocationsTriggersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersGet($request, $requestSecurity);

    if ($response->trigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'praesentium';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'ipsa';
    $request->optionsRequestedPolicyVersion = 604846;
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->resource = 'cum';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'doloremque';

    $requestSecurity = new EventarcProjectsLocationsTriggersGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersList

List triggers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->oauthToken = 'iusto';
    $request->orderBy = 'dicta';
    $request->pageSize = 688661;
    $request->pageToken = 'enim';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new EventarcProjectsLocationsTriggersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersList($request, $requestSecurity);

    if ($response->listTriggersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersPatch

Update a single trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerInput;
use \OpenAPI\OpenAPI\Models\Shared\Destination;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunService;
use \OpenAPI\OpenAPI\Models\Shared\MatchingCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TransportInput;
use \OpenAPI\OpenAPI\Models\Shared\PubsubInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->triggerInput = new TriggerInput();
    $request->triggerInput->destination = new Destination();
    $request->triggerInput->destination->cloudRunService = new CloudRunService();
    $request->triggerInput->destination->cloudRunService->path = 'quidem';
    $request->triggerInput->destination->cloudRunService->region = 'molestias';
    $request->triggerInput->destination->cloudRunService->service = 'excepturi';
    $request->triggerInput->labels = [
        'modi' => 'praesentium',
        'rem' => 'voluptates',
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
    ];
    $request->triggerInput->matchingCriteria = [
        new MatchingCriteria(),
        new MatchingCriteria(),
        new MatchingCriteria(),
        new MatchingCriteria(),
    ];
    $request->triggerInput->name = 'Erin Altenwerth';
    $request->triggerInput->serviceAccount = 'explicabo';
    $request->triggerInput->transport = new TransportInput();
    $request->triggerInput->transport->pubsub = new PubsubInput();
    $request->triggerInput->transport->pubsub->topic = 'deserunt';
    $request->accessToken = 'distinctio';
    $request->allowMissing = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->name = 'Mr. Shelly Lueilwitz';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->updateMask = 'fugit';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'excepturi';
    $request->validateOnly = false;

    $requestSecurity = new EventarcProjectsLocationsTriggersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersSetIamPolicyRequest();
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
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'labore';
    $request->setIamPolicyRequest->policy->version = 962189;
    $request->setIamPolicyRequest->updateMask = 'eum';
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'aliquid';
    $request->key = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->resource = 'officia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new EventarcProjectsLocationsTriggersSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eventarcProjectsLocationsTriggersTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EventarcProjectsLocationsTriggersTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventarcProjectsLocationsTriggersTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'in',
        'in',
        'illum',
    ];
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'magnam';
    $request->key = 'cumque';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->resource = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new EventarcProjectsLocationsTriggersTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->eventarcProjectsLocationsTriggersTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
